
import * as Lang from "./language"
import * as Utils from './utils'

import styles from '../styles/Home.module.css'

export const MIN_WORDS_IN_SENTENCE = 10
export const MAX_WORDS_IN_SENTENCE = 23
export const DEFAULT_NYC_PERCENT = 25

export const MIN_SENTENCES_PER_PARA = 2
export const MAX_SENTENCES_PER_PARA = 5

export type Tense = "present" | "past" | "continuative" | "future"
type Person = "1sg" | "2sg" | "3sg" | "1pl" | "2pl" | "3pl"
type aOpts = "singular" | "plural" | "definite" | "indefinite"
export type npOpts = {force?: aOpts, noun?: "proper" | "improper", english?: Lang.Word[], newyork?: Lang.Word[]}
export type ppOpts = {force?: string | string[], nForce?: aOpts, used?: Lang.Word[], english?: Lang.Word[], newyork?: Lang.Word[]}

export const getWordOfType = (type: string, used: Lang.Word[], opts?: {english?: Lang.Word[], newyork?: Lang.Word[], useNyc?: boolean}): Lang.Word => {
	const english = opts?.english || Lang.latin
	const newyork = opts?.newyork || Lang.newyork
	let usedWords: string[] = []
	let usedTags: string[] = []
	used.forEach(word => {
		usedWords.push(word?.word)
		word?.tags?.forEach(tag => {usedTags.push(tag)})
	})
	let allTypes: string[]
	if (type === 'noun') {
		allTypes = ['noun', 'proper']
	} else if (type === 'improper') {
		allTypes = ['noun']
	} else {
		allTypes = [type]
	}
	let words = opts?.useNyc ? newyork : english
	words = words.filter(w => allTypes.includes(w.pos))
	words = words.filter(word => {
		let ret = true
		if (usedWords.includes(word.word)) {
			return false
		}
		word.tags?.forEach(tag => {
			if (usedTags.includes(tag)) {
				ret = false
			}
		})
		return ret
	})
	return Utils.oneFromExcept(words, used)
}

export const conjugateVerb = (verb: Lang.Word, tense: Tense, person: Person = "1sg") => {
	const head = verb.word.replace(/^to /, '')
	switch(tense) {
		case "past":
			if (verb.type?.startsWith("umlaut")) {
				return verb.type.substring(verb.type.indexOf(':')+1)
			}
			return `${head}ed`.replace(/([^aeiou][aeiou])([pbdmn])ed$/, "$1$2$2ed").replace(/eed$/, 'ed').replace(/ayed$/, 'aid').replace(/yed$/, 'ied')
		case "present":
			if (person === "3sg") {
				return `${head}s`.replace(/([^aeiou])ys$/, '$1ies')
			}
			return head
		case "continuative":
			return `${head}ing`.replace(/([^aeiou][aeiou])([pbdmn])ing$/, "$1$2$2ing").replace(/eing$/, 'ing')
		case "future":
			return `will ${head}`
	}
}

export const resolveArticles = (str: string) => {
	return str.replace(/(a)rtIndef( —|\.\.\.|[,;:])? (\S+)/gi, (match, ltr1: string, punct1: string = '', word2: string) => {
		const n: string = word2.match(/^[aeiou]/) ? 'n' : ''
		return `${ltr1}${n}${punct1} ${word2}`
	}).replace(/artIndef\./g, 'anymore.')
}

const addPunctuation = (str: string) => {
	let punctuation
	const roll = Math.ceil(Math.random() * 100)
	if (roll > 25) {
		punctuation = ','
	} else if (roll > 15) {
		punctuation = ' —'
	} else if (roll > 10) {
		punctuation = ';'
	} else if (roll > 5) {
		punctuation = ':'
	} else {
		punctuation = '...'
	}
	return str + punctuation
}

const processWord = (word: Lang.Word): string => {
	word = Utils.clone(word)
	switch(word.pos) {
		case 'noun':
			if (Utils.randomChance(25)) {
				word.word = Utils.pluralize(word.word)
			}
			break
		case 'verb':
			const tense = Utils.oneFrom(['present', 'past', 'continuative', 'future'])
			const person = Utils.oneFrom(['1sg', '3sg', '3pl'])
			word.word = conjugateVerb(word, tense, person)
			break
		default:
			break
	}
	return word.word
}


export const generateRandomSentence = (opts?: {english?: Lang.Word[], newyork?: Lang.Word[], maxLen?: number, minLen?: number, nycPercent: number}) => {
	let aSentence: string[] = []
	const english = opts?.english || Lang.latin
	let newyork = opts?.newyork || Lang.newyork
	const maxLen = opts?.maxLen || MAX_WORDS_IN_SENTENCE
	const minLen = opts?.minLen || MIN_WORDS_IN_SENTENCE
	const nycPercent1 = opts?.nycPercent || DEFAULT_NYC_PERCENT
	const nycPercent2 = nycPercent1 + 10

	let engWords: string[] = []
	let nycWords: string[] = []
	let engUsed: Lang.Word[] = []
	let nycUsed: Lang.Word[] = []

	if (Utils.randomChance(8)) {
		return Utils.oneFrom(newyork.filter(x => x.pos === "sentence")).word
	}

	newyork = Utils.clone(newyork).filter((x: Lang.Word) => x.pos !== "sentence")

	while (aSentence.length < maxLen) {
		let newStuff
		let wordsLeft = maxLen - aSentence.length
		let useNyc = (nycWords.length) ?
			((nycWords.length / (engWords.length + nycWords.length) * 100) < nycPercent2) :
			Utils.randomChance(nycPercent1 + (5 * (engWords.length - 1)))
		if (useNyc) {
			newStuff = Utils.oneFromExcept(
				newyork.filter(w => w.word.split(' ').length <= wordsLeft),
				nycUsed
			)
			nycUsed.push(newStuff)
			nycWords = nycWords.concat(newStuff.word.split(' '))
		} else {
			newStuff = Utils.oneFromExcept(english, engUsed)
			engUsed.push(newStuff)
			engWords = engWords.concat(newStuff.word.split(' '))
		}
		aSentence = aSentence.concat(processWord(newStuff).split(' '))

		if (Utils.randomChance(10)) {
			aSentence.push(addPunctuation(aSentence.pop() as string))
		}

		if (aSentence.length > minLen) {
			if (Utils.randomChance(15)) {
				break
			}
		}
	}
	let sSentence: string = aSentence.join(' ')
	sSentence = Utils.ucFirst(sSentence).trim() + '.'
	sSentence = sSentence.replace(/( —|\.\.\.|[,;:])\.$/, '.')
	sSentence = resolveArticles(sSentence)
	return sSentence

}


export const generateParagraph = (opts?: {english?: Lang.Word[], newyork?: Lang.Word[], maxLen?: number, minLen?: number, key?: number}) => {
	const english = opts?.english || Lang.english
	let newyork = opts?.newyork || Lang.newyork
	const maxLen = opts?.maxLen || MAX_SENTENCES_PER_PARA
	const minLen = opts?.minLen || MIN_SENTENCES_PER_PARA

	const sentences: string[] = []

	const key: string = opts?.key ? opts.key.toString() : "foo"

	const howMany = Math.floor(Math.random() * ((maxLen+1) - minLen) + minLen)
	while (sentences.length < howMany) {
		sentences.push(generateRandomSentence())
	}
	return <p key={key}>{sentences.join(' ')}</p>
}


export const generateLipsum = (howMany: number, whatUnits: string) => {
	const toReturn: any[] = []

	if (whatUnits === "sentences") {
		while (toReturn.length < howMany) {
			toReturn.push(generateRandomSentence())
		}
		return <div id={styles.lipsum} data-testid="lipsum">{toReturn.join(' ')}</div>
	} else {
		while (toReturn.length < howMany) {
			toReturn.push(generateParagraph({key: toReturn.length}))
		}
		return <div id={styles.lipsum} data-testid="lipsum">{toReturn}</div>

	}
}




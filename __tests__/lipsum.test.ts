import * as Lipsum from '../lib/lipsum'
import * as Lang from '../lib/language'
import { clone } from '../lib/utils'

describe('Lipsum', () => {
	describe('resolveArticles', () => {
		it('resolves articles correctly', () => {
			expect(Lipsum.resolveArticles("I have artIndef cat.")).toEqual("I have a cat.")
			expect(Lipsum.resolveArticles("I have artIndef red cat.")).toEqual("I have a red cat.")
			expect(Lipsum.resolveArticles("I have artIndef orange cat.")).toEqual("I have an orange cat.")
			expect(Lipsum.resolveArticles("ArtIndef cat is fuzzy.")).toEqual("A cat is fuzzy.")
			expect(Lipsum.resolveArticles("ArtIndef apple is red.")).toEqual("An apple is red.")
		})
	})
	describe('getWordOfType', () => {
		const english = [
			{
				word: "the",
				pos: "article",
			},
			{
				word: "artIndef",
				pos: "article",
			},
						{
				word: "dog",
				pos: "noun",
				tags: [ "animal" ],
			},
			{
				word: "table",
				pos: "noun",
				tags: [ "furniture" ],
			},
			{
				word: "quick",
				pos: "adjective",
			},
			{
				word: "blue",
				pos: "adjective",
				tags: [ "color" ],
			},
			{
				word: "to jump",
				pos: "verb",
				takes: [ "over", "on", "onto" ],
			},
			{
				word: "to speak",
				pos: "verb",
				takes: [ "of", "about", "to" ],
			},
			{
				word: "in",
				pos: "preposition",
			},
			{
				word: "of",
				pos: "preposition",
			},
		
		]
		const justNouns = ["dog", "table"]
		const justAdjectives = ["quick", "blue"]
		it('gets nouns', () => {
			expect(justNouns).toContain(Lipsum.getWordOfType('noun', [], {english}).word)
		})
	})

	describe('conjugateVerb', () => {
		const verbs: {[key:string]: any}[] = [
			{ type: "regular", infinitive: { word: "to walk", pos: "verb"}, past: "walked", present: "walk", present3sg: "walks", continuative: "walking", future: "will walk"},
			{ type: "regular", infinitive: { word: "to jump", pos: "verb"}, past: "jumped", present: "jump", present3sg: "jumps", continuative: "jumping", future: "will jump"},
			{ type: "regular", infinitive: { word: "to dance", pos: "verb"}, past: "danced", present: "dance", present3sg: "dances", continuative: "dancing", future: "will dance"},
			{ type: "regular", infinitive: { word: "to debate", pos: "verb"}, past: "debated", present: "debate", present3sg: "debates", continuative: "debating", future: "will debate"},
			{ type: "regular", infinitive: { word: "to say", pos: "verb"}, past: "said", present: "say", present3sg: "says", continuative: "saying", future: "will say"},
			{ type: "regular", infinitive: { word: "to pay", pos: "verb"}, past: "paid", present: "pay", present3sg: "pays", continuative: "paying", future: "will pay"},
			{ type: "regular", infinitive: { word: "to time", pos: "verb"}, past: "timed", present: "time", present3sg: "times", continuative: "timing", future: "will time"},
			{ type: "umlaut", infinitive: { word: "to swim", pos: "verb", type: "umlaut:swam"}, past: "swam", present: "swim", present3sg: "swims", continuative: "swimming", future: "will swim"},
			{ type: "regular", infinitive: { word: "to grin", pos: "verb"}, past: "grinned", present: "grin", present3sg: "grins", continuative: "grinning", future: "will grin"},
			{ type: "regular", infinitive: { word: "to rip", pos: "verb"}, past: "ripped", present: "rip", present3sg: "rips", continuative: "ripping", future: "will rip"},
			{ type: "regular", infinitive: { word: "to pipe", pos: "verb"}, past: "piped", present: "pipe", present3sg: "pipes", continuative: "piping", future: "will pipe"},
			{ type: "regular", infinitive: { word: "to mop", pos: "verb"}, past: "mopped", present: "mop", present3sg: "mops", continuative: "mopping", future: "will mop"},
			{ type: "regular", infinitive: { word: "to mope", pos: "verb"}, past: "moped", present: "mope", present3sg: "mopes", continuative: "moping", future: "will mope"},
			{ type: "regular", infinitive: { word: "to try", pos: "verb"}, past: "tried", present: "try", present3sg: "tries", continuative: "trying", future: "will try"},
			{ type: "regular", infinitive: { word: "to carry", pos: "verb"}, past: "carried", present: "carry", present3sg: "carries", continuative: "carrying", future: "will carry"},
			{ type: "umlaut", infinitive: { word: "to speak", pos: "verb", type: "umlaut:spoke"}, past: "spoke", present: "speak", present3sg: "speaks", continuative: "speaking", future: "will speak"},
			{ type: "umlaut", infinitive: { word: "to stink", pos: "verb", type: "umlaut:stank"}, past: "stank", present: "stink", present3sg: "stinks", continuative: "stinking", future: "will stink"},
			{ type: "irregular", infinitive: { word: "to have", pos: "verb"}, past: "had", present: "have", present3sg: "has", continuative: "having", future: "will have"},
		]
		describe('conjugates regular verbs', () => {
			const regulars = verbs.filter(v => v.type === "regular")
			regulars.forEach(verb => {
				["present", "past", "continuative", "future"].forEach(tense => {
					it(`conjugates "${verb.infinitive.word}" in the ${tense}`, () => {
						expect(Lipsum.conjugateVerb(verb.infinitive, tense as Lipsum.Tense)).toEqual(verb[tense])
					})
				})
				it(`conjugates "${verb.infinitive.word}" in the 3sg present`, () => {
					expect(Lipsum.conjugateVerb(verb.infinitive, "present", "3sg")).toEqual(verb.present3sg)
				})
			})
		})
		describe('conjugate the past w/umlaut', () => {
			const umlauts = verbs.filter(v => v.type === "umlaut")
			umlauts.forEach(verb => {
				["present", "past", "continuative", "future"].forEach(tense => {
					it(`conjugates "${verb.infinitive.word}" in the ${tense}`, () => {
						expect(Lipsum.conjugateVerb(verb.infinitive, tense as Lipsum.Tense)).toEqual(verb[tense])
					})
				})
				it(`conjugates "${verb.infinitive.word}" in the 3sg present`, () => {
					expect(Lipsum.conjugateVerb(verb.infinitive, "present", "3sg")).toEqual(verb.present3sg)
				})
			})
		})
	})


	describe('generateRandomSentence', () => {
		it('generates sentences', () => {
			let sentence = Lipsum.generateRandomSentence()

			// Make sure it's not one of the specific full sentences from
			// the newyork list, but rather a random one
			while (Lang.newyork.filter(x => x.pos === "sentence").map(s => s.word).includes(sentence)) {
				sentence = Lipsum.generateRandomSentence()
			}

			let len = sentence.split(' ').length
			expect(len).toBeGreaterThanOrEqual(Lipsum.MIN_WORDS_IN_SENTENCE)
			expect(len).toBeLessThanOrEqual(Lipsum.MAX_WORDS_IN_SENTENCE)
		})
	})
})
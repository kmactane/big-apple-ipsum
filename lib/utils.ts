
export const clone = (original: object) => {
	if (!original) {
		return null
	}
	return JSON.parse(JSON.stringify(original))
}

export const oneFrom = (arr: Array<any>) => {
	// const arr2 = arr.slice(0)
	// console.log(`oneFrom copied ${arr2.length}-element array`);
	const idx = Math.floor(Math.random() * arr.length)
	// console.log(`returning item ${idx}:`,arr[idx]);
	return clone(arr.slice(idx)[0])
	// return arr2[idx]
}

export const oneFromExcept = (arr: Array<any>, except: Array<any>) => {
	arr = arr.filter(item => !except.some(el => el.word == item.word))
	return oneFrom(arr)
}

export const pluralize = (str: string): string => {
	const ownPlurals = 'pants jeans traffic'.split(' ')
	if (ownPlurals.includes(str)) {
		return str
	}
	if (! str.match(/[a-z]/i)) {
		return str
	}
	if (str.match(/([rl])f$/)) {
		return str.replace(/([rl])f$/, '$1ves')
	}
	if (str.match(/(ch|x|ss)$/)) {
		return str + 'es'
	}
	if (str.match(/[bcdfghjklmnpqrstvwxz]y$/)) {
		return str.replace(/([bcdfghjklmnpqrstvwxz])y$/, "$1ies")
	}
	return str + 's'
}

export const randomChance = (percentage: number = 50): boolean => {
	const roll: number = Math.ceil(Math.random() * 100)
	return roll <= percentage
}

export const randomUpTo = (num: number, already: Array<any>) => {
	// console.log(`randomUpTo(${num}; [${already.map(a => a.word).join(', ')}])`);
	if (already.length >= num) {
		return false
	}
	const curr: number = already.length || 1
	const percent = Math.round(100 * ((num - curr) / num))
	return randomChance(percent)
}
export const ucFirst = (str: string): string => {
	return str[0].toUpperCase() + str.substring(1)
}


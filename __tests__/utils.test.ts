
import * as Utils from '../lib/utils'

describe('Utils', () => {
	describe('clone', () => {
		it('clones an object', () => {
			const orig = { name: "alpha", num: 23 }
			const duplicate = Utils.clone(orig)
			duplicate.name = "beta"
			duplicate.num = 45
			expect(orig.name).toBe("alpha")
			expect(orig.num).toBe(23)
		})
	})
	describe('oneFrom', () => {
		it('can pick a single string from an array of strings', () => {
			const greek = 'alpha beta gamma delta epsilon'.split(' ')
			const one = Utils.oneFrom(greek)
			
			expect(greek).toContain(one)
			
			const results = []
			
			for (let i = 0; i < greek.length * 5; i++) {
				results.push(Utils.oneFrom(greek))
			}
			for (let i = 0; i < greek.length; i++) {
				expect(results.includes(greek[i])).toBeTruthy()
			}
		})
		it('can pick a single object from an array of objects', () => {
			const things = [
				{ name: "alpha", value: 1 },
				{ name: "gamma", value: 5 },
				{ name: "theta", value: 7 },
				{ name: "sigma", value: 13 },
				{ name: "omega", value: 21 },
			]
			const names = things.map(t => t.name)
			const values = things.map(t => t.value)

			// const one = Utils.oneFrom(things)
			// expect(things.includes(one)).toBeTruthy()

			const results = []
			for (let i = 0; i < 10; i++) {
				results.push(Utils.oneFrom(things))
			}
			results.forEach(t => {
				expect(names).toContain(t.name)
				expect(values).toContain(t.value)
			})
		})
	})
	describe('oneFromExcept', () => {
		it('can pick a single string from an array of strings', () => {
			const greek = 'alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega'.split(' ')
			const exclude = 'alpha epsilon zeta eta theta nu xi omicron upsilon phi psi omega'.split(' ')
			const results: any[] = []
			for (let i = 0; i < 100; i++) {
				results.push(Utils.oneFromExcept(greek, exclude))
			}
			exclude.forEach(elem => {
				expect(results).not.toContain(elem)
			})
		})
		it('can pick an object from an array of objects', () => {
			const greek = [
				{ word: "alpha", number: 1 },
				{ word: "beta", number: 1 },
				{ word: "gamma", number: 1 },
				{ word: "delta", number: 1 },
				{ word: "epsilon", number: 1 },
				{ word: "zeta", number: 1 },
				{ word: "eta", number: 1 },
			]
			const exclude = [
				{ word: "delta", number: 1 },
				{ word: "epsilon", number: 1 },
				{ word: "zeta", number: 1 },
				{ word: "eta", number: 1 },
			]
			const results: any[] = []
			for (let i = 0; i < 100; i++) {
				results.push(Utils.oneFromExcept(greek, exclude))
			}
			exclude.forEach(elem => {
				expect(results.map(r => r.word)).not.toContain(elem.word)
			})
		})
	})
	describe('pluralize', () => {
		it('handles non-words correctly', () => {
			expect(Utils.pluralize('')).toEqual('')
			expect(Utils.pluralize('123')).toEqual('123')
		})
		it('pluralizes words correctly', () => {
			expect(Utils.pluralize('cat')).toEqual('cats')
			expect(Utils.pluralize('boy')).toEqual('boys')
			expect(Utils.pluralize('pony')).toEqual('ponies')
			expect(Utils.pluralize('sky')).toEqual('skies')
			expect(Utils.pluralize('eye')).toEqual('eyes')
			expect(Utils.pluralize('fox')).toEqual('foxes')
			expect(Utils.pluralize('couch')).toEqual('couches')
			expect(Utils.pluralize('pants')).toEqual('pants')
			expect(Utils.pluralize('jeans')).toEqual('jeans')
			expect(Utils.pluralize('dress')).toEqual('dresses')
			expect(Utils.pluralize('traffic')).toEqual('traffic')
		})
	})
	describe('randomChance', () => {
		const manyRandomChances = (times: number, percentage = 50) => {
			let timesTrue = 0
			for (let i = 0; i < times; i++) {
				if (Utils.randomChance(percentage)) {
					timesTrue++
				}
			}
			return timesTrue
		}
		it('returns true about 50% of the time when called w/no argument', () => {
			let timesTrue = manyRandomChances(100000)
			expect(timesTrue).toBeGreaterThan(49000)
			expect(timesTrue).toBeLessThan(51000)
		})
		it('returns true about 30% of the time when called w/arg 30', () => {
			let timesTrue = manyRandomChances(100000, 30)
			expect(timesTrue).toBeGreaterThan(29000)
			expect(timesTrue).toBeLessThan(31000)
		})
		it('returns true about 65% of the time when called w/arg 65', () => {
			let timesTrue = manyRandomChances(100000, 65)
			expect(timesTrue).toBeGreaterThan(64000)
			expect(timesTrue).toBeLessThan(66000)
		})
	})
	describe('randomUpTo', () => {
		const manyRandomUpTos = (times: number, num = 3, len: number) => {
			const arr = 'one two three four five six seven eight nine ten'.split(' ')
			arr.splice(len)
			let timesTrue = 0
			for (let i = 0; i < times; i++) {
				if (Utils.randomUpTo(num, arr)) {
					timesTrue++
				}
			}
			return timesTrue
		}
		it('handles 3-element arrays', () => {
			let timesTrue = manyRandomUpTos(100000, 3, 0)
			expect(timesTrue).toBeGreaterThan(66000)
			expect(timesTrue).toBeLessThan(68000)
			
			timesTrue = manyRandomUpTos(100000, 3, 1)
			expect(timesTrue).toBeGreaterThan(66000)
			expect(timesTrue).toBeLessThan(68000)
			
			timesTrue = manyRandomUpTos(100000, 3, 2)
			expect(timesTrue).toBeGreaterThan(32000)
			expect(timesTrue).toBeLessThan(34000)
			
			timesTrue = manyRandomUpTos(100000, 3, 3)
			expect(timesTrue).toBe(0)
		})
		it('handles 4-element arrays', () => {
			let timesTrue = manyRandomUpTos(100000, 4, 0)
			expect(timesTrue).toBeGreaterThan(74000)
			expect(timesTrue).toBeLessThan(76000)
			
			timesTrue = manyRandomUpTos(100000, 4, 1)
			expect(timesTrue).toBeGreaterThan(74000)
			expect(timesTrue).toBeLessThan(76000)
			
			timesTrue = manyRandomUpTos(100000, 4, 2)
			expect(timesTrue).toBeGreaterThan(49000)
			expect(timesTrue).toBeLessThan(52000)
			
			timesTrue = manyRandomUpTos(100000, 4, 3)
			expect(timesTrue).toBeGreaterThan(24000)
			expect(timesTrue).toBeLessThan(26000)
			
			timesTrue = manyRandomUpTos(100000, 4, 4)
			expect(timesTrue).toBe(0)
		})
	})
	describe('ucFirst', () => {
		it('uppercases the first letter of a string', () => {
			expect(Utils.ucFirst('alpha')).toEqual('Alpha')
			expect(Utils.ucFirst('ALPHA')).toEqual('ALPHA')
		})
	})
})





export interface Word {
	word: string,
	pos: string,
	tags?: string[],
	takes?: string[],
	type?: string
}

export const english: Word[] = [
	{
		// THIS IS DELIBERATE! The token "artIndef" will get changed
		// to either "a" or "an", depending on the following word, by
		// Lipsum.resolveArticles().
		word: "artIndef",
		pos: "article",
	},
	{
		word: "artIndef",
		pos: "article",
	},
	{
		word: "the",
		pos: "article",
	},
	{
		word: "the",
		pos: "article",
	},



	{
		word: "bashful",
		pos: "adjective",
	},
	{
		word: "black",
		pos: "adjective",
		tags: [ "color" ],
	},
	{
		word: "blue",
		pos: "adjective",
		tags: [ "color" ],
	},
	{
		word: "brown",
		pos: "adjective",
		tags: [ "color" ],
	},
	{
		word: "charming",
		pos: "adjective",
	},
	{
		word: "fiery",
		pos: "adjective",
	},
	{
		word: "green",
		pos: "adjective",
		tags: [ "color" ],
	},
	{
		word: "grey",
		pos: "adjective",
		tags: [ "color" ],
	},
	{
		word: "historic",
		pos: "adjective",
	},
	{
		word: "hopeful",
		pos: "adjective",
	},
	{
		word: "lazy",
		pos: "adjective",
	},
	{
		word: "lovable",
		pos: "adjective",
	},
	{
		word: "purple",
		pos: "adjective",
		tags: [ "color" ],
	},
	{
		word: "quick",
		pos: "adjective",
	},
	{
		word: "red",
		pos: "adjective",
		tags: [ "color" ],
	},
	{
		word: "serious",
		pos: "adjective",
	},
	{
		word: "severe",
		pos: "adjective",
	},
	{
		word: "spooky",
		pos: "adjective",
	},
	{
		word: "striped",
		pos: "adjective",
	},
	{
		word: "thrifty",
		pos: "adjective",
	},
	{
		word: "white",
		pos: "adjective",
		tags: [ "color" ],
	},
	{
		word: "wondrous",
		pos: "adjective",
	},
	{
		word: "yellow",
		pos: "adjective",
		tags: [ "color" ],
	},





	{
		word: "alpha",
		pos: "adjective",
	},
	{
		word: "alpha",
		pos: "adjective",
	},
	{
		word: "alpha",
		pos: "adjective",
	},
	{
		word: "alpha",
		pos: "adjective",
	},







	{
		word: "aardvark",
		pos: "noun",
	},
	{
		word: "armadillo",
		pos: "noun",
	},
	{
		word: "bed",
		pos: "noun",
		tags: [ "furniture" ],
	},
	{
		word: "bookshelf",
		pos: "noun",
		tags: [ "furniture" ],
	},
	{
		word: "car",
		pos: "noun",
	},
	{
		word: "chair",
		pos: "noun",
		tags: [ "furniture" ],
	},
	{
		word: "couch",
		pos: "noun",
		tags: [ "furniture" ],
	},
	{
		word: "coyote",
		pos: "noun",
	},
	{
		word: "dog",
		pos: "noun",
		tags: [ "animal" ],
	},
	{
		word: "dolphin",
		pos: "noun",
	},
	{
		word: "dress",
		pos: "noun",
	},
	{
		word: "elephant",
		pos: "noun",
	},
	{
		word: "fashion",
		pos: "noun",
	},
	{
		word: "flag",
		pos: "noun",
	},
	{
		word: "fox",
		pos: "noun",
		tags: [ "animal" ],
	},
	{
		word: "hat",
		pos: "noun",
	},
	{
		word: "highway",
		pos: "noun",
	},
	{
		word: "imagination",
		pos: "noun",
	},
	{
		word: "jeans",
		pos: "noun",
	},
	{
		word: "love",
		pos: "noun",
	},
	{
		word: "pants",
		pos: "noun",
	},
	{
		word: "picture",
		pos: "noun",
	},
	{
		word: "scarf",
		pos: "noun",
	},
	{
		word: "shirt",
		pos: "noun",
	},
	{
		word: "skirt",
		pos: "noun",
	},
	{
		word: "table",
		pos: "noun",
		tags: [ "furniture" ],
	},
	{
		word: "traffic",
		pos: "noun",
	},
	{
		word: "train",
		pos: "noun",
	},
	{
		word: "trouble",
		pos: "noun",
	},
	{
		word: "twin",
		pos: "noun",
	},
	{
		word: "alpha",
		pos: "noun",
	},
	{
		word: "alpha",
		pos: "noun",
	},
	{
		word: "alpha",
		pos: "noun",
	},
	{
		word: "alpha",
		pos: "noun",
	},
	{
		word: "alpha",
		pos: "noun",
	},
	{
		word: "alpha",
		pos: "noun",
	},
	{
		word: "alpha",
		pos: "noun",
	},










	{
		word: "in",
		pos: "preposition",
	},
	{
		word: "into",
		pos: "preposition",
	},
	{
		word: "of",
		pos: "preposition",
	},
	{
		word: "onto",
		pos: "preposition",
	},
	{
		word: "over",
		pos: "preposition",
	},
	{
		word: "under",
		pos: "preposition",
	},
	{
		word: "with",
		pos: "preposition",
	},









	{
		word: "to carry",
		pos: "verb",
	},
	{
		word: "to consider",
		pos: "verb",
	},
	{
		word: "to dance",
		pos: "verb",
	},
	{
		word: "to fly",
		pos: "verb",
		type: "umlaut:flew",
	},
	{
		word: "to fire",
		pos: "verb",
	},
	{
		word: "to hop",
		pos: "verb",
	},
	{
		word: "to jump",
		pos: "verb",
	},
	{
		word: "to mope",
		pos: "verb",
	},
	{
		word: "to sail",
		pos: "verb",
	},
	{
		word: "to shine",
		pos: "verb",
	},
	{
		word: "to speak",
		pos: "verb",
		type: "umlaut:spoke",
	},
	{
		word: "to speed",
		pos: "verb",
		type: "umlaut:sped",
	},
	{
		word: "to stroll",
		pos: "verb",
	},
	{
		word: "to swim",
		pos: "verb",
		type: "umlaut:swam",
	},
	{
		word: "to talk",
		pos: "verb",
	},
	{
		word: "to trace",
		pos: "verb",
	},
	{
		word: "to try",
		pos: "verb",
	},
	{
		word: "to wail",
		pos: "verb",
	},
	{
		word: "to weave",
		pos: "verb",
		type: "umlaut:wove",
	},
]





export const newyork: Word[] = [
	{
		word: "brownstone",
		pos: "noun",
	},
	{
		word: "always warm in the subway",
		pos: "phrase",
	},
	{
		word: "bagel with lox shmear",
		pos: "noun phrase",
	},
	{
		word: "big lights will inspire you",
		pos: "phrase",
	},
	{
		word: "concrete jungle",
		pos: "noun phrase",
	},
	{
		word: "concrete bunghole wet dream tomato",
		pos: "phrase",
	},
	{
		word: "dollar slice",
		pos: "noun",
	},
	{
		word: "East River",
		pos: "proper",
	},
	{
		word: "egg cream",
		pos: "noun",
	},
	{
		word: "eight million stories",
		pos: "phrase",
	},
	{
		word: "Harlem River",
		pos: "proper",
	},
	{
		word: "How 'bout those Mets?",
		pos: "sentence",
	},
	{
		word: "I'm walkin' here!",
		pos: "sentence",
	},
	{
		word: "Knicks",
		pos: "proper",
	},
	{
		word: "Mets",
		pos: "proper",
	},
	{
		word: "pizza rat",
		pos: "phrase",
	},
	{
		word: "Yankees",
		pos: "proper",
	},
]




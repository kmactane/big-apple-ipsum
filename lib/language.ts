
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
		word: "the",
		pos: "article",
	},



	//
	// ADJECTIVES
	//

	{
		word: "alert",
		pos: "adjective",
	},
	{
		word: "ample",
		pos: "adjective",
	},
	{
		word: "bashful",
		pos: "adjective",
	},
	{
		word: "big",
		pos: "adjective",
	},
	{
		word: "bigger",
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
		word: "dreamy",
		pos: "adjective",
	},
	{
		word: "fiery",
		pos: "adjective",
	},
	{
		word: "fluffy",
		pos: "adjective",
	},
	{
		word: "fuzzy",
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
		word: "hairy",
		pos: "adjective",
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
		word: "little",
		pos: "adjective",
	},
	{
		word: "lovable",
		pos: "adjective",
	},
	{
		word: "naked",
		pos: "adjective",
	},
	{
		word: "purple",
		pos: "adjective",
		tags: [ "color" ],
	},
	{
		word: "precarious",
		pos: "adjective",
	},
	{
		word: "precious",
		pos: "adjective",
	},
	{
		word: "pretty",
		pos: "adjective",
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
		word: "sleepy",
		pos: "adjective",
	},
	{
		word: "small",
		pos: "adjective",
	},
	{
		word: "spooky",
		pos: "adjective",
	},
	{
		word: "stark",
		pos: "adjective",
	},
	{
		word: "starry",
		pos: "adjective",
	},
	{
		word: "striped",
		pos: "adjective",
	},
	{
		word: "sweet",
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
		word: "wild",
		pos: "adjective",
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







	//
	// nouns
	//



	{
		word: "aardvark",
		pos: "noun",
	},
	{
		word: "armadillo",
		pos: "noun",
	},
	{
		word: "bacon",
		pos: "noun",
	},
	{
		word: "baton",
		pos: "noun",
	},
	{
		word: "bed",
		pos: "noun",
		tags: [ "furniture" ],
	},
	{
		word: "blizzard",
		pos: "noun",
	},
	{
		word: "bookshelf",
		pos: "noun",
		tags: [ "furniture" ],
	},
	{
		word: "bottle",
		pos: "noun",
	},
	{
		word: "button",
		pos: "noun",
	},
	{
		word: "can",
		pos: "noun",
	},
	{
		word: "cape",
		pos: "noun",
	},
	{
		word: "car",
		pos: "noun",
	},
	{
		word: "cat",
		pos: "noun",
	},
	{
		word: "cave",
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
		word: "door",
		pos: "noun",
	},
	{
		word: "dinner",
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
		word: "flower",
		pos: "noun",
	},
	{
		word: "fox",
		pos: "noun",
		tags: [ "animal" ],
	},
	{
		word: "handbag",
		pos: "noun",
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
		word: "house",
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
	// {
	// 	word: "mouse",
	// 	pos: "noun",
	// },
	{
		word: "pants",
		pos: "noun",
	},
	{
		word: "picture",
		pos: "noun",
	},
	{
		word: "pill",
		pos: "noun",
	},
	{
		word: "progress",
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
		word: "sky",
		pos: "noun",
	},
	{
		word: "soup",
		pos: "noun",
	},
	{
		word: "star",
		pos: "noun",
	},
	{
		word: "table",
		pos: "noun",
		tags: [ "furniture" ],
	},
	{
		word: "thing",
		pos: "noun",
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
		word: "window",
		pos: "noun",
	},





	//
	// prepositions
	//




	{
		word: "after",
		pos: "preposition",
	},
	{
		word: "before",
		pos: "preposition",
	},
	{
		word: "for",
		pos: "preposition",
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






	//
	// verbs
	//





	{
		word: "to bake",
		pos: "verb",
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
		word: "to cook",
		pos: "verb",
	},
	{
		word: "to dance",
		pos: "verb",
	},
	{
		word: "to dream",
		pos: "verb",
	},
	{
		word: "to drift",
		pos: "verb",
	},
	{
		word: "to eat",
		pos: "verb",
		type: "umlaut:ate",
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
		word: "to judge",
		pos: "verb",
	},
	{
		word: "to jump",
		pos: "verb",
	},
	{
		word: "to make",
		pos: "verb",
	},
	{
		word: "to mope",
		pos: "verb",
	},
	{
		word: "to read",
		pos: "verb",
		type: "umlaut:read",
	},
	{
		word: "to sail",
		pos: "verb",
	},
	{
		word: "to seek",
		pos: "verb",
		type: "umlaut:sought",
	},
	{
		word: "to shine",
		pos: "verb",
	},
	{
		word: "to sing",
		pos: "verb",
		type: "umlaut:sang",
	},
	{
		word: "to sizzle",
		pos: "verb",
	},
	{
		word: "to sleep",
		pos: "verb",
		type: "umlaut:slept",
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
		word: "to stand",
		pos: "verb",
	},
	{
		word: "to starve",
		pos: "verb",
	},
	{
		word: "to stroll",
		pos: "verb",
	},
	{
		word: "to swerve",
		pos: "verb",
	},
	{
		word: "to swim",
		pos: "verb",
		type: "umlaut:swam",
	},
	{
		word: "to take",
		pos: "verb",
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
		word: "to wander",
		pos: "verb",
	},
	{
		word: "to want",
		pos: "verb",
	},
	{
		word: "to weave",
		pos: "verb",
		type: "umlaut:wove",
	},
	{
		word: "to wonder",
		pos: "verb",
	},
]





export const newyork: Word[] = [
	{
		word: "a beautiful catastrophe",
		pos: "phrase",
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
		word: "Bed-Stuy",
		pos: "proper",
	},
	{
		word: "Brooklyn Botanical Gardens",
		pos: "proper",
	},
	{
		word: "the Cyclone",
		pos: "proper",
	},
	{
		word: "big lights will inspire you",
		pos: "phrase",
	},
	{
		word: "the Bowery",
		pos: "proper",
	},
	{
		word: "Bronx cheer",
		pos: "noun",
	},
	{
		word: "the Bronx Zoo",
		pos: "proper",
	},
	{
		word: "Brooklyn Bridge",
		pos: "proper",
	},
	{
		word: "brownstone",
		pos: "noun",
	},
	{
		word: "brownstones as far as the eye can see",
		pos: "phrase",
	},
	{
		word: "brownstones the whole way down the block",
		pos: "phrase",
	},
	{
		word: "Central Park",
		pos: "proper",
	},
	{
		word: "the Chelsea Hotel",
		pos: "proper",
	},
	{
		word: "Chrysler Building",
		pos: "proper",
	},
	{
		word: "Citi Field",
		pos: "proper",
	},
	{
		word: "the Cloisters",
		pos: "proper",
	},
	{
		word: "concrete bunghole wet dream tomato",
		pos: "phrase",
	},
	{
		word: "concrete jungle",
		pos: "noun phrase",
	},
	{
		word: "Co-Op City",
		pos: "proper",
	},
	{
		word: "Corlears Hook",
		pos: "proper",
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
		word: "Empire State Building",
		pos: "proper",
	},
	{
		word: "Fordham",
		pos: "proper",
	},
	{
		word: "from an uptown apartment to a knife on the “A” train",
		pos: "phrase",
	},
	{
		word: "Fuhgeddaboutit!",
		pos: "sentence",
	},
	{
		word: "Gem Spa",
		pos: "proper",
	},
	{
		word: "George Washington Bridge",
		pos: "proper",
	},
	{
		word: "gonna make a brand new start of it",
		pos: "phrase",
	},
	{
		word: "Grand Army Plaza",
		pos: "proper",
	},
	{
		word: "hanging out on the stoop",
		pos: "phrase",
	},
	{
		word: "Harlem River",
		pos: "proper",
	},
	{
		word: "Herald Square",
		pos: "proper",
	},
	{
		word: "Holland Tunnel",
		pos: "proper",
	},
	{
		word: "How ’bout those Mets?",
		pos: "sentence",
	},
	{
		word: "Hudson Yards",
		pos: "proper",
	},
	{
		word: "I'm walkin' here!",
		pos: "sentence",
	},
	{
		word: "If you can’t fold the slice, it ain’t pizza.",
		pos: "sentence",
	},
	{
		word: "If you can make it there, you can make it anywhere.",
		pos: "sentence",
	},
	{
		word: "Junior's cheesecake",
		pos: "noun phrase",
	},
	{
		word: "Katz's Deli",
		pos: "proper",
	},
	{
		word: "Knicks",
		pos: "proper",
	},
	{
		word: "Knicks game",
		pos: "noun phrase",
	},
	{
		word: "LaGuardia",
		pos: "proper",
	},
	{
		word: "Lincoln Center",
		pos: "proper",
	},
	{
		word: "Lincoln Tunnel",
		pos: "proper",
	},
	{
		word: "Long Island City",
		pos: "proper",
	},
	{
		word: "Manhattan Bridge",
		pos: "proper",
	},
	{
		word: "Mets",
		pos: "proper",
	},
	{
		word: "nights downtown, it's a new town",
		pos: "phrase",
	},
	{
		word: "noise is always loud, there are sirens all around",
		pos: "phrase",
	},
	{
		word: "Pepsi-Cola sign",
		pos: "proper",
	},
	{
		word: "pizza rat",
		pos: "phrase",
	},
	{
		word: "playing stickball on the stoop",
		pos: "phrase",
	},
	{
		word: "please go easy on this heart of mine",
		pos: "phrase",
	},
	{
		word: "Prospect Park",
		pos: "proper",
	},
	{
		word: "Queensboro Bridge",
		pos: "proper",
	},
	{
		word: "Silvercup Studios",
		pos: "proper",
	},
	{
		word: "so nice, they named it twice",
		pos: "phrase",
	},
	{
		word: "Soldiers and Sailors Arch",
		pos: "proper",
	},
	{
		word: "Staten Island Ferry",
		pos: "proper",
	},
	{
		word: "Statue of Liberty",
		pos: "proper",
	},
	{
		word: "take the “A” train",
		pos: "phrase",
	},
	{
		word: "tell by my attitude that I’m most definitely from",
		pos: "phrase",
	},
	{
		word: "they've got cars big as bars, they've got rivers of gold",
		pos: "phrase",
	},
	{
		word: "they say the neon lights are bright",
		pos: "phrase",
	},
	{
		word: "They say such things and they do strange things on the Bowery!",
		pos: "sentence",
	},
	{
		word: "Throg's Neck",
		pos: "proper",
	},
	{
		word: "Throg's Neck Bridge",
		pos: "proper",
	},
	{
		word: "Triborough Bridge",
		pos: "proper",
	},
	{
		word: "trip-hammer vitality which drives you insane with restlessness",
		pos: "phrase",
	},
	{
		word: "Todt Hill",
		pos: "proper",
	},
	{
		word: "the Unisphere",
		pos: "proper",
	},
	{
		word: "Verrazzano-Narrows Bridge",
		pos: "proper",
	},
	{
		word: "Walking down Canal Street, knocking on every door...",
		pos: "sentence",
	},
	{
		word: "Washington Square",
		pos: "proper",
	},
	{
		word: "we have pulled down the stars to our will",
		pos: "phrase",
	},
	{
		word: "Williamsburg Bridge",
		pos: "proper",
	},
	{
		word: "Yankee Stadium",
		pos: "proper",
	},
	{
		word: "Yankees",
		pos: "proper",
	},
]


export const latin: Word[] = [
	{word: 'a', pos: 'latin'},
	{word: 'ab', pos: 'latin'},
	{word: 'accusamus', pos: 'latin'},
	{word: 'accusantium', pos: 'latin'},
	{word: 'ad', pos: 'latin'},
	{word: 'adduxerunt', pos: 'latin'},
	{word: 'adipisci', pos: 'latin'},
	{word: 'adoramus', pos: 'latin'},
	{word: 'agimus', pos: 'latin'},
	{word: 'agnus', pos: 'latin'},
	{word: 'aliqua', pos: 'latin'},
	{word: 'aliquam', pos: 'latin'},
	{word: 'aliquid', pos: 'latin'},
	{word: 'aliquip', pos: 'latin'},
	{word: 'altare', pos: 'latin'},
	{word: 'altissimus', pos: 'latin'},
	{word: 'amet', pos: 'latin'},
	{word: 'animi', pos: 'latin'},
	{word: 'aperiam', pos: 'latin'},
	{word: 'architecto', pos: 'latin'},
	{word: 'asperiores', pos: 'latin'},
	{word: 'aspernatur', pos: 'latin'},
	{word: 'assumenda', pos: 'latin'},
	{word: 'at', pos: 'latin'},
	{word: 'atque', pos: 'latin'},
	{word: 'aut', pos: 'latin'},
	{word: 'aute', pos: 'latin'},
	{word: 'autem', pos: 'latin'},
	{word: 'beatae', pos: 'latin'},
	{word: 'benedicimus', pos: 'latin'},
	{word: 'blanditiis', pos: 'latin'},
	{word: 'bonae', pos: 'latin'},
	{word: 'carborundum', pos: 'latin'},
	{word: 'cillum', pos: 'latin'},
	{word: 'coelestis', pos: 'latin'},
	{word: 'commodi', pos: 'latin'},
	{word: 'commodo', pos: 'latin'},
	{word: 'consectetur', pos: 'latin'},
	{word: 'consequat', pos: 'latin'},
	{word: 'consequatur', pos: 'latin'},
	{word: 'corporis', pos: 'latin'},
	{word: 'corrupti', pos: 'latin'},
	{word: 'culpa', pos: 'latin'},
	{word: 'cum', pos: 'latin'},
	{word: 'cum', pos: 'latin'},
	{word: 'cumque', pos: 'latin'},
	{word: 'cupidatat', pos: 'latin'},
	{word: 'cupiditate', pos: 'latin'},
	{word: 'debitis', pos: 'latin'},
	{word: 'deduxerunt', pos: 'latin'},
	{word: 'delectus', pos: 'latin'},
	{word: 'deleniti', pos: 'latin'},
	{word: 'deprecationem', pos: 'latin'},
	{word: 'deserunt', pos: 'latin'},
	{word: 'dexteram', pos: 'latin'},
	{word: 'dicta', pos: 'latin'},
	{word: 'dignissimos', pos: 'latin'},
	{word: 'distinctio', pos: 'latin'},
	{word: 'do', pos: 'latin'},
	{word: 'dolor', pos: 'latin'},
	{word: 'dolore', pos: 'latin'},
	{word: 'dolorem', pos: 'latin'},
	{word: 'doloremque', pos: 'latin'},
	{word: 'dolores', pos: 'latin'},
	{word: 'doloribus', pos: 'latin'},
	{word: 'dolorum', pos: 'latin'},
	{word: 'ducimus', pos: 'latin'},
	{word: 'duis', pos: 'latin'},
	{word: 'ea', pos: 'latin'},
	{word: 'eaque', pos: 'latin'},
	{word: 'earum', pos: 'latin'},
	{word: 'eius', pos: 'latin'},
	{word: 'eligendi', pos: 'latin'},
	{word: 'elit', pos: 'latin'},
	{word: 'emitte', pos: 'latin'},
	{word: 'enim', pos: 'latin'},
	{word: 'eos', pos: 'latin'},
	{word: 'esse', pos: 'latin'},
	{word: 'est', pos: 'latin'},
	{word: 'et', pos: 'latin'},
	{word: 'et', pos: 'latin'},
	{word: 'et', pos: 'latin'},
	{word: 'eu', pos: 'latin'}, // false 
	{word: 'eum', pos: 'latin'},
	{word: 'eveniet', pos: 'latin'},
	{word: 'ex', pos: 'latin'},
	{word: 'excelsis', pos: 'latin'},
	{word: 'excepteur', pos: 'latin'},
	{word: 'excepturi', pos: 'latin'},
	{word: 'exercitation', pos: 'latin'},
	{word: 'exercitationem', pos: 'latin'},
	{word: 'expedita', pos: 'latin'},
	{word: 'explicabo', pos: 'latin'},
	{word: 'facere', pos: 'latin'},
	{word: 'facilis', pos: 'latin'},
	{word: 'fili', pos: 'latin'},
	{word: 'filii', pos: 'latin'},
	{word: 'filio', pos: 'latin'},
	{word: 'filius', pos: 'latin'},
	{word: 'fuga', pos: 'latin'},
	{word: 'fugiat', pos: 'latin'},
	{word: 'fugit', pos: 'latin'},
	{word: 'gratias', pos: 'latin'},
	{word: 'harum', pos: 'latin'},
	{word: 'hic', pos: 'latin'},
	{word: 'hominibus', pos: 'latin'},
	{word: 'id', pos: 'latin'},
	{word: 'illo', pos: 'latin'},
	{word: 'illum', pos: 'latin'},
	{word: 'illegitimi', pos: 'latin'},
	{word: 'impedit', pos: 'latin'},
	{word: 'in', pos: 'latin'},
	{word: 'in', pos: 'latin'},
	{word: 'incididunt', pos: 'latin'},
	{word: 'incidunt', pos: 'latin'},
	{word: 'introibo', pos: 'latin'},
	{word: 'inventore', pos: 'latin'},
	{word: 'ipsa', pos: 'latin'},
	{word: 'ipsam', pos: 'latin'},
	{word: 'ipsum', pos: 'latin'},
	{word: 'iste', pos: 'latin'},
	{word: 'itaque', pos: 'latin'},
	{word: 'iure', pos: 'latin'},
	{word: 'iusto', pos: 'latin'},
	{word: 'labore', pos: 'latin'},
	{word: 'laboriosam', pos: 'latin'},
	{word: 'laboris', pos: 'latin'},
	{word: 'laborum', pos: 'latin'},
	{word: 'laudamus', pos: 'latin'},
	{word: 'laudantium', pos: 'latin'},
	{word: 'libero', pos: 'latin'},
	{word: 'lorem', pos: 'latin'},
	{word: 'lucem', pos: 'latin'},
	{word: 'magna', pos: 'latin'},
	{word: 'magnam', pos: 'latin'},
	{word: 'magni', pos: 'latin'},
	{word: 'maiores', pos: 'latin'},
	{word: 'maxime', pos: 'latin'},
	{word: 'me', pos: 'latin'},
	{word: 'minim', pos: 'latin'},
	{word: 'minima', pos: 'latin'},
	{word: 'miserere', pos: 'latin'},
	{word: 'modi', pos: 'latin'},
	{word: 'mollit', pos: 'latin'},
	{word: 'mollitia', pos: 'latin'},
	{word: 'montem', pos: 'latin'},
	{word: 'mundi', pos: 'latin'},
	{word: 'nam', pos: 'latin'},
	{word: 'natus', pos: 'latin'},
	{word: 'necessitatibus', pos: 'latin'},
	{word: 'nemo', pos: 'latin'},
	{word: 'neque', pos: 'latin'},
	{word: 'nesciunt', pos: 'latin'},
	{word: 'nihil', pos: 'latin'},
	{word: 'nisi', pos: 'latin'},
	{word: 'nobis', pos: 'latin'},
	{word: 'nomine', pos: 'latin'},
	{word: 'non', pos: 'latin'},
	{word: 'nostram', pos: 'latin'},
	{word: 'nostrud', pos: 'latin'},
	{word: 'nostrum', pos: 'latin'},
	{word: 'nulla', pos: 'latin'},
	{word: 'numquam', pos: 'latin'},
	{word: 'occaecat', pos: 'latin'},
	{word: 'occaecati', pos: 'latin'},
	{word: 'odio', pos: 'latin'},
	{word: 'odit', pos: 'latin'},
	{word: 'officia', pos: 'latin'},
	{word: 'officiis', pos: 'latin'},
	{word: 'omnipotens', pos: 'latin'},
	{word: 'omnis', pos: 'latin'},
	{word: 'optio', pos: 'latin'},
	{word: 'pariatur', pos: 'latin'},
	{word: 'pater', pos: 'latin'},
	{word: 'patri', pos: 'latin'},
	{word: 'patris', pos: 'latin'},
	{word: 'pax', pos: 'latin'},
	{word: 'peccata', pos: 'latin'},
	{word: 'perferendis', pos: 'latin'},
	{word: 'perspiciatis', pos: 'latin'},
	{word: 'placeat', pos: 'latin'},
	{word: 'porro', pos: 'latin'},
	{word: 'possimus', pos: 'latin'},
	{word: 'praesentium', pos: 'latin'},
	{word: 'proident', pos: 'latin'},
	{word: 'propter', pos: 'latin'},
	{word: 'quae', pos: 'latin'},
	{word: 'quaerat', pos: 'latin'},
	{word: 'quam', pos: 'latin'},
	{word: 'quas', pos: 'latin'},
	{word: 'quasi', pos: 'latin'},
	{word: 'qui', pos: 'latin'},
	{word: 'quia', pos: 'latin'},
	{word: 'quibusdam', pos: 'latin'},
	{word: 'quidem', pos: 'latin'},
	{word: 'quis', pos: 'latin'},
	{word: 'quisquam', pos: 'latin'},
	{word: 'quo', pos: 'latin'},
	{word: 'quod', pos: 'latin'},
	{word: 'quoniam', pos: 'latin'},
	{word: 'quos', pos: 'latin'},
	{word: 'ratione', pos: 'latin'},
	{word: 'recusandae', pos: 'latin'},
	{word: 'reiciendis', pos: 'latin'},
	{word: 'rem', pos: 'latin'},
	{word: 'repellat', pos: 'latin'},
	{word: 'repellendus', pos: 'latin'},
	{word: 'reprehenderit', pos: 'latin'},
	{word: 'repudiandae', pos: 'latin'},
	{word: 'rerum', pos: 'latin'},
	{word: 'rex', pos: 'latin'},
	{word: 'saepe', pos: 'latin'},
	{word: 'sancti', pos: 'latin'},
	{word: 'sancto', pos: 'latin'},
	{word: 'sanctum', pos: 'latin'},
	{word: 'sanctus', pos: 'latin'},
	{word: 'sapiente', pos: 'latin'},
	{word: 'sed', pos: 'latin'},
	{word: 'sedes', pos: 'latin'},
	{word: 'semper', pos: 'latin'},
	{word: 'sequi', pos: 'latin'},
	{word: 'sic', pos: 'latin'},
	{word: 'similique', pos: 'latin'},
	{word: 'sint', pos: 'latin'},
	{word: 'sit', pos: 'latin'},
	{word: 'solus', pos: 'latin'},
	{word: 'soluta', pos: 'latin'},
	{word: 'spiritu', pos: 'latin'},
	{word: 'spiritui', pos: 'latin'},
	{word: 'spiritus', pos: 'latin'},
	{word: 'sunt', pos: 'latin'},
	{word: 'suscipe', pos: 'latin'},
	{word: 'suscipit', pos: 'latin'},
	{word: 'tabernacula', pos: 'latin'},
	{word: 'te', pos: 'latin'},
	{word: 'tempor', pos: 'latin'},
	{word: 'tempora', pos: 'latin'},
	{word: 'tempore', pos: 'latin'},
	{word: 'temporibus', pos: 'latin'},
	{word: 'tenetur', pos: 'latin'},
	{word: 'terra', pos: 'latin'},
	{word: 'tibi', pos: 'latin'},
	{word: 'tollis', pos: 'latin'},
	{word: 'totam', pos: 'latin'},
	{word: 'tu', pos: 'latin'},
	{word: 'tua', pos: 'latin'},
	{word: 'tuam', pos: 'latin'},
	{word: 'tuum', pos: 'latin'},
	{word: 'ullam', pos: 'latin'},
	{word: 'ullamco', pos: 'latin'},
	{word: 'unde', pos: 'latin'},
	{word: 'unigenite', pos: 'latin'},
	{word: 'ut', pos: 'latin'},
	{word: 'vel', pos: 'latin'},
	{word: 'velit', pos: 'latin'},
	{word: 'veniam', pos: 'latin'},
	{word: 'veritatem', pos: 'latin'},
	{word: 'veritatis', pos: 'latin'},
	{word: 'vero', pos: 'latin'},
	{word: 'vitae', pos: 'latin'},
	{word: 'voluntatis', pos: 'latin'},
	{word: 'voluptas', pos: 'latin'},
	{word: 'voluptate', pos: 'latin'},
	{word: 'voluptatem', pos: 'latin'},
	{word: 'voluptates', pos: 'latin'},
	{word: 'voluptatibus', pos: 'latin'},
	{word: 'voluptatum', pos: 'latin'},
	// {word: 'adipiscing', pos: 'latin'},
	// {word: 'amet', pos: 'latin'},
	// {word: 'anim', pos: 'latin'}, // false
	// {word: 'aut', pos: 'latin'},
	// {word: 'aut', pos: 'latin'},
	// {word: 'aut', pos: 'latin'},
	// {word: 'aut', pos: 'latin'},
	// {word: 'aut', pos: 'latin'},
	// {word: 'autem', pos: 'latin'},
	// {word: 'consectetur', pos: 'latin'},
	// {word: 'consequatur', pos: 'latin'},
	// {word: 'consequatur', pos: 'latin'},
	// {word: 'culpa', pos: 'latin'},
	// {word: 'deserunt', pos: 'latin'},
	// {word: 'dolor', pos: 'latin'},
	// {word: 'dolor', pos: 'latin'},
	// {word: 'dolor', pos: 'latin'},
	// {word: 'dolore', pos: 'latin'},
	// {word: 'dolore', pos: 'latin'},
	// {word: 'dolorem', pos: 'latin'},
	// {word: 'dolores', pos: 'latin'},
	// {word: 'ea', pos: 'latin'},
	// {word: 'ea', pos: 'latin'},
	// {word: 'eiusmod', pos: 'latin'}, //false
	// {word: 'enim', pos: 'latin'},
	// {word: 'enim', pos: 'latin'},
	// {word: 'eos', pos: 'latin'},
	// {word: 'esse', pos: 'latin'},
	// {word: 'est', pos: 'latin'},
	// {word: 'est', pos: 'latin'},
	// {word: 'est', pos: 'latin'},
	// {word: 'est', pos: 'latin'},
	// {word: 'est', pos: 'latin'},
	// {word: 'et', pos: 'latin'},
	// {word: 'et', pos: 'latin'},
	// {word: 'et', pos: 'latin'},
	// {word: 'et', pos: 'latin'},
	// {word: 'et', pos: 'latin'},
	// {word: 'et', pos: 'latin'},
	// {word: 'et', pos: 'latin'},
	// {word: 'et', pos: 'latin'},
	// {word: 'et', pos: 'latin'},
	// {word: 'et', pos: 'latin'},
	// {word: 'et', pos: 'latin'},
	// {word: 'eum', pos: 'latin'},
	// {word: 'ex', pos: 'latin'},
	// {word: 'fugiat', pos: 'latin'},
	// {word: 'id', pos: 'latin'},
	// {word: 'id', pos: 'latin'},
	// {word: 'in', pos: 'latin'},
	// {word: 'in', pos: 'latin'},
	// {word: 'in', pos: 'latin'},
	// {word: 'in', pos: 'latin'},
	// {word: 'ipsum', pos: 'latin'},
	// {word: 'labore', pos: 'latin'},
	// {word: 'laborum', pos: 'latin'},
	// {word: 'molestiae', pos: 'latin'},
	// {word: 'nihil', pos: 'latin'},
	// {word: 'nisi', pos: 'latin'},
	// {word: 'non', pos: 'latin'},
	// {word: 'non', pos: 'latin'},
	// {word: 'non', pos: 'latin'},
	// {word: 'nulla', pos: 'latin'},
	// {word: 'officia', pos: 'latin'},
	// {word: 'omnis', pos: 'latin'},
	// {word: 'omnis', pos: 'latin'},
	// {word: 'pariatur', pos: 'latin'},
	// {word: 'qui', pos: 'latin'},
	// {word: 'qui', pos: 'latin'},
	// {word: 'qui', pos: 'latin'},
	// {word: 'qui', pos: 'latin'},
	// {word: 'qui', pos: 'latin'},
	// {word: 'qui', pos: 'latin'},
	// {word: 'quia', pos: 'latin'},
	// {word: 'quia', pos: 'latin'},
	// {word: 'quia', pos: 'latin'},
	// {word: 'quis', pos: 'latin'},
	// {word: 'quis', pos: 'latin'},
	// {word: 'quo', pos: 'latin'},
	// {word: 'reprehenderit', pos: 'latin'},
	// {word: 'rerum', pos: 'latin'},
	// {word: 'rerum', pos: 'latin'},
	// {word: 'sed', pos: 'latin'},
	// {word: 'sed', pos: 'latin'},
	// {word: 'sed', pos: 'latin'},
	// {word: 'sint', pos: 'latin'},
	// {word: 'sint', pos: 'latin'},
	// {word: 'sit', pos: 'latin'},
	// {word: 'sit', pos: 'latin'},
	// {word: 'sit', pos: 'latin'},
	// {word: 'sunt', pos: 'latin'},
	// {word: 'sunt', pos: 'latin'},
	// {word: 'ut', pos: 'latin'},
	// {word: 'ut', pos: 'latin'},
	// {word: 'ut', pos: 'latin'},
	// {word: 'ut', pos: 'latin'},
	// {word: 'ut', pos: 'latin'},
	// {word: 'ut', pos: 'latin'},
	// {word: 'ut', pos: 'latin'},
	// {word: 'ut', pos: 'latin'},
	// {word: 'vel', pos: 'latin'},
	// {word: 'velit', pos: 'latin'},
	// {word: 'velit', pos: 'latin'},
	// {word: 'veniam', pos: 'latin'},
	// {word: 'voluptas', pos: 'latin'},
	// {word: 'voluptas', pos: 'latin'},
	// {word: 'voluptate', pos: 'latin'},
	// {word: 'voluptatem', pos: 'latin'},
	// {word: 'voluptatem', pos: 'latin'},
	// {word: 'voluptatem', pos: 'latin'},
]
	
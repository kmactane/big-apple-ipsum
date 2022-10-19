
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




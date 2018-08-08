let save = localStorage.getItem("zelda_botw");
let data = {};

const initial = [
	{
		id: 1,
		name: "Masque du Tonnerre",
		active: false,
		owned: false,
	},
	{
		id: 2,
		name: "Vieille Chemise",
		active: false,
		owned: false,
	},
	{
		id: 3,
		name: "Doublet",
		active: false,
		owned: false,
	},
	{
		id: 4,
		name: "Armure du Prodige",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "silent princess", quantity: 3 }],
			2: [{ name: "silent princess", quantity: 3 }, { name: "rordrac's horn", quantity: 2 }],
			3: [{ name: "silent princess", quantity: 3 }, { name: "nedrac's horn", quantity: 2 }],
			4: [{ name: "silent princess", quantity: 10 }, { name: "ordrac's horn", quantity: 2 }],
		}
	},
	{
		id: 5,
		name: "Vieux pantalon",
		active: false,
		owned: false,
	},
	{
		id: 6,
		name: "Bottes des Sables",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "molduga fin", quantity: 5 }, { name: "hightale lizzard", quantity: 10 }],
			2: [{ name: "molduga fin", quantity: 10 }, { name: "swift carrot", quantity: 10 }],
			3: [{ name: "molduga guts", quantity: 2 }, { name: "rushroom", quantity: 15 }],
			4: [{ name: "molduga guts", quantity: 5 }, { name: "swift violet", quantity: 15 }],
		}
	},
	{
		id: 7,
		name: "Bottes de Neige",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "octorok tentacle", quantity: 5 }, { name: "hightale lizzard", quantity: 10 }],
			2: [{ name: "octo balloon", quantity: 5 }, { name: "swift carrot", quantity: 10 }],
			3: [{ name: "octorok eyeball", quantity: 5 }, { name: "rushroom", quantity: 15 }],
			4: [{ name: "nedrac's scale", quantity: 2 }, { name: "swift violet", quantity: 15 }],
		}
	},
	{
		id: 8,
		name: "Boucles de Topaze",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "topaz", quantity: 2 }, { name: "silex", quantity: 3 }],
			2: [{ name: "topaz", quantity: 4 }, { name: "silex", quantity: 3 }],
			3: [{ name: "topaz", quantity: 6 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "topaz", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 9,
		name: "Boucles d'Opales",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "opal", quantity: 5 }, { name: "silex", quantity: 3 }],
			2: [{ name: "opal", quantity: 8 }, { name: "silex", quantity: 3 }],
			3: [{ name: "opal", quantity: 16 }, { name: "silex", quantity: 3 }],
			4: [{ name: "opal", quantity: 20 }, { name: "silex", quantity: 3 }],
		}
	},
	{
		id: 10,
		name: "Boucles d'Ambre",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "amber", quantity: 5 }, { name: "silex", quantity: 3 }],
			2: [{ name: "amber", quantity: 10 }, { name: "silex", quantity: 3 }],
			3: [{ name: "amber", quantity: 20 }, { name: "silex", quantity: 3 }],
			4: [{ name: "amber", quantity: 30 }, { name: "silex", quantity: 3 }],
		}
	},
	{
		id: 11,
		name: "Diadème Diamant",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "diamond", quantity: 2 }, { name: "silex", quantity: 3 }],
			2: [{ name: "diamond", quantity: 4 }, { name: "silex", quantity: 3 }],
			3: [{ name: "diamond", quantity: 6 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "diamond", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 12,
		name: "Diadème Rubis",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "ruby", quantity: 2 }, { name: "silex", quantity: 3 }],
			2: [{ name: "ruby", quantity: 4 }, { name: "silex", quantity: 3 }],
			3: [{ name: "ruby", quantity: 6 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "ruby", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 13,
		name: "Diadème Saphir",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "saphhire", quantity: 2 }, { name: "silex", quantity: 3 }],
			2: [{ name: "saphhire", quantity: 4 }, { name: "silex", quantity: 3 }],
			3: [{ name: "saphhire", quantity: 6 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "saphhire", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 14,
		name: "Masque de Sheik",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "silent princess", quantity: 1 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "silent princess", quantity: 2 }, { name: "star fragment", quantity: 2 }],
			3: [{ name: "silent princess", quantity: 3 }, { name: "star fragment", quantity: 3 }],
			4: [{ name: "silent princess", quantity: 4 }, { name: "star fragment", quantity: 4 }],
		}
	},
	{
		id: 15,
		name: "Masque de Bokoblin",
		active: false,
		owned: false,
	},
	{
		id: 16,
		name: "Masque de Moblin",
		active: false,
		owned: false,
	},
	{
		id: 17,
		name: "Masque de Lézalfos",
		active: false,
		owned: false,
	},
	{
		id: 18,
		name: "Masque de Lynel",
		active: false,
		owned: false,
	},
	{
		id: 19,
		name: "Casque Barbare",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "lynel horn", quantity: 1 }],
			2: [{ name: "lynel horn", quantity: 3 }, { name: "lynel hoof", quantity: 2 }],
			3: [{ name: "lynel hoof", quantity: 4 }, { name: "lynel guts", quantity: 1 }],
			4: [{ name: "lynel guts", quantity: 2 }, { name: "ordrac's horn", quantity: 1 }],
		}
	},
	{
		id: 20,
		name: "Gilet Barbare",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "lynel horn", quantity: 1 }],
			2: [{ name: "lynel horn", quantity: 3 }, { name: "lynel hoof", quantity: 2 }],
			3: [{ name: "lynel hoof", quantity: 4 }, { name: "lynel guts", quantity: 1 }],
			4: [{ name: "lynel guts", quantity: 2 }, { name: "rordrac's horn", quantity: 1 }],
		}
	},
	{
		id: 21,
		name: "Culotte Barbare",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "lynel horn", quantity: 1 }],
			2: [{ name: "lynel horn", quantity: 3 }, { name: "lynel hoof", quantity: 2 }],
			3: [{ name: "lynel hoof", quantity: 4 }, { name: "lynel guts", quantity: 1 }],
			4: [{ name: "lynel guts", quantity: 2 }, { name: "nedrac's horn", quantity: 1 }],
		}
	},
	{
		id: 22,
		name: "Bandana d'escalade",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "keese wing", quantity: 3 }, { name: "rushroom", quantity: 3 }],
			2: [{ name: "electric keese wing", quantity: 5 }, { name: "hightale lizzard", quantity: 5 }],
			3: [{ name: "ice keese wing", quantity: 5 }, { name: "hot-footed frog", quantity: 10 }],
			4: [{ name: "fire keese wing", quantity: 5 }, { name: "swift violet", quantity: 15 }],
		}
	},
	{
		id: 23,
		name: "Gants d'escalade",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "keese wing", quantity: 3 }, { name: "rushroom", quantity: 3 }],
			2: [{ name: "electric keese wing", quantity: 5 }, { name: "hightale lizzard", quantity: 5 }],
			3: [{ name: "ice keese wing", quantity: 5 }, { name: "hot-footed frog", quantity: 10 }],
			4: [{ name: "fire keese wing", quantity: 5 }, { name: "swift violet", quantity: 15 }],
		}
	},
	{
		id: 24,
		name: "Souliers d'escalade",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "keese wing", quantity: 3 }, { name: "rushroom", quantity: 3 }],
			2: [{ name: "electric keese wing", quantity: 5 }, { name: "hightale lizzard", quantity: 5 }],
			3: [{ name: "ice keese wing", quantity: 5 }, { name: "hot-footed frog", quantity: 10 }],
			4: [{ name: "fire keese wing", quantity: 5 }, { name: "swift violet", quantity: 15 }],
		}
	},
	{
		id: 25,
		name: "Capuche Noire",
		active: false,
		owned: false,
	},
	{
		id: 26,
		name: "Tunique Noire",
		active: false,
		owned: false,
	},
	{
		id: 27,
		name: "Pantalon Noir",
		active: false,
		owned: false,
	},
	{
		id: 28,
		name: "Parure des Sablons",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "white chuchu", quantity: 3 }],
			2: [{ name: "white chuchu", quantity: 5 }, { name: "ice keese wing", quantity: 3 }],
			3: [{ name: "ice keese wing", quantity: 8 }, { name: "icy lizalfos tail", quantity: 3 }],
			4: [{ name: "icy lizalfos tail", quantity: 10 }, { name: "saphhire", quantity: 5 }],
		}
	},
	{
		id: 29,
		name: "Épaulière des Sablons",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "white chuchu", quantity: 3 }],
			2: [{ name: "white chuchu", quantity: 5 }, { name: "ice keese wing", quantity: 3 }],
			3: [{ name: "ice keese wing", quantity: 8 }, { name: "icy lizalfos tail", quantity: 3 }],
			4: [{ name: "icy lizalfos tail", quantity: 10 }, { name: "saphhire", quantity: 5 }],
		}
	},
	{
		id: 30,
		name: "Pantalon des Sablons",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "white chuchu", quantity: 3 }],
			2: [{ name: "white chuchu", quantity: 5 }, { name: "ice keese wing", quantity: 3 }],
			3: [{ name: "ice keese wing", quantity: 8 }, { name: "icy lizalfos tail", quantity: 3 }],
			4: [{ name: "icy lizalfos tail", quantity: 10 }, { name: "saphhire", quantity: 5 }],
		}
	},
	{
		id: 31,
		name: "Masque du Dieu Démon",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "hinox toe", quantity: 5 }, { name: "ordrac's scale", quantity: 1 }],
			2: [{ name: "hinox fang", quantity: 5 }, { name: "ordrac's claw", quantity: 1 }],
			3: [{ name: "hinox guts", quantity: 2 }, { name: "ordrac's fang", quantity: 1 }],
			4: [{ name: "lynel guts", quantity: 2 }, { name: "ordrac's horn", quantity: 1 }],
		}
	},
	{
		id: 32,
		name: "Armure du Dieu Démon",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "hinox toe", quantity: 5 }, { name: "nedrac's scale", quantity: 1 }],
			2: [{ name: "hinox fang", quantity: 5 }, { name: "nedrac's claw", quantity: 1 }],
			3: [{ name: "hinox guts", quantity: 2 }, { name: "nedrac's fang", quantity: 1 }],
			4: [{ name: "lynel guts", quantity: 2 }, { name: "nedrac's horn", quantity: 1 }],
		}
	},
	{
		id: 33,
		name: "Bottes du Dieu Démon",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "hinox toe", quantity: 5 }, { name: "rordrac's scale", quantity: 1 }],
			2: [{ name: "hinox fang", quantity: 5 }, { name: "rordrac's claw", quantity: 1 }],
			3: [{ name: "hinox guts", quantity: 2 }, { name: "rordrac's fang", quantity: 1 }],
			4: [{ name: "lynel guts", quantity: 2 }, { name: "rordrac's horn", quantity: 1 }],
		}
	},
	{
		id: 34,
		name: "Casque de pierre",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "fireproof lizzard", quantity: 1 }, { name: "moblin horn", quantity: 2 }],
			2: [{ name: "fireproof lizzard", quantity: 3 }, { name: "moblin fang", quantity: 4 }],
			3: [{ name: "smotherwing butterfly", quantity: 3 }, { name: "moblin guts", quantity: 3 }],
			4: [{ name: "smotherwing butterfly", quantity: 5 }, { name: "hinox guts", quantity: 2 }],
		}
	},
	{
		id: 35,
		name: "Armure de pierre",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "fireproof lizzard", quantity: 1 }, { name: "moblin horn", quantity: 2 }],
			2: [{ name: "fireproof lizzard", quantity: 3 }, { name: "moblin fang", quantity: 4 }],
			3: [{ name: "smotherwing butterfly", quantity: 3 }, { name: "moblin guts", quantity: 3 }],
			4: [{ name: "smotherwing butterfly", quantity: 5 }, { name: "hinox guts", quantity: 2 }],
		}
	},
	{
		id: 36,
		name: "Bottes de pierre",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "fireproof lizzard", quantity: 1 }, { name: "moblin horn", quantity: 2 }],
			2: [{ name: "fireproof lizzard", quantity: 3 }, { name: "moblin fang", quantity: 4 }],
			3: [{ name: "smotherwing butterfly", quantity: 3 }, { name: "moblin guts", quantity: 3 }],
			4: [{ name: "smotherwing butterfly", quantity: 5 }, { name: "hinox guts", quantity: 2 }],
		}
	},
	{
		id: 37,
		name: "Voile de Damoiselle",
		active: false,
		owned: false,
	},
	{
		id: 38,
		name: "Corsage de Damoiselle",
		active: false,
		owned: false,
	},
	{
		id: 39,
		name: "Sarouel de Damoiselle",
		active: false,
		owned: false,
	},
	{
		id: 40,
		name: "Casque Archéonique",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "ancient screw", quantity: 5 }, { name: "ancient spring", quantity: 5 }],
			2: [{ name: "ancient spring", quantity: 15 }, { name: "ancient gear", quantity: 10 }],
			3: [{ name: "ancient shaft", quantity: 15 }, { name: "ancient core", quantity: 5 }],
			4: [{ name: "star fragment", quantity: 1 }, { name: "giant ancient core", quantity: 2 }],
		}
	},
	{
		id: 41,
		name: "Plastron Archéonique",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "ancient screw", quantity: 5 }, { name: "ancient spring", quantity: 5 }],
			2: [{ name: "ancient spring", quantity: 15 }, { name: "ancient gear", quantity: 10 }],
			3: [{ name: "ancient shaft", quantity: 15 }, { name: "ancient core", quantity: 5 }],
			4: [{ name: "star fragment", quantity: 1 }, { name: "giant ancient core", quantity: 2 }],
		}
	},
	{
		id: 42,
		name: "Jambières Archéonique",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "ancient screw", quantity: 5 }, { name: "ancient spring", quantity: 5 }],
			2: [{ name: "ancient spring", quantity: 15 }, { name: "ancient gear", quantity: 10 }],
			3: [{ name: "ancient shaft", quantity: 15 }, { name: "ancient core", quantity: 5 }],
			4: [{ name: "star fragment", quantity: 1 }, { name: "giant ancient core", quantity: 2 }],
		}
	},
	{
		id: 43,
		name: "Coiffe du Ciel",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "saphhire", quantity: 1 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "saphhire", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "saphhire", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "saphhire", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 44,
		name: "Tunique du Ciel",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "saphhire", quantity: 1 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "saphhire", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "saphhire", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "saphhire", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 45,
		name: "Pantalon du Ciel",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "saphhire", quantity: 1 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "saphhire", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "saphhire", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "saphhire", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 46,
		name: "Coiffe du Temps",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "amber", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "amber", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "amber", quantity: 15 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "amber", quantity: 30 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 47,
		name: "Tunique du Temps",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "amber", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "amber", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "amber", quantity: 15 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "amber", quantity: 30 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 48,
		name: "Chausses du Temps",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "amber", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "amber", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "amber", quantity: 15 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "amber", quantity: 30 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 49,
		name: "Coiffe du Crépuscule",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "topaz", quantity: 1 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "topaz", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "topaz", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "topaz", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 50,
		name: "Tunique du Crépuscule",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "topaz", quantity: 1 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "topaz", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "topaz", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "topaz", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 51,
		name: "Chausses du Crépuscule",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "topaz", quantity: 1 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "topaz", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "topaz", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "topaz", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 52,
		name: "Coiffe des Landes",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "acorn", quantity: 10 }, { name: "rordrac's scale", quantity: 2 }],
			2: [{ name: "courser bee honey", quantity: 5 }, { name: "rordrac's claw", quantity: 2 }],
			3: [{ name: "energetic rhino beetle", quantity: 5 }, { name: "rordrac's fang", quantity: 2 }],
			4: [{ name: "star fragment", quantity: 1 }, { name: "rordrac's horn", quantity: 2 }],
		}
	},
	{
		id: 53,
		name: "Tunique des Landes",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "acorn", quantity: 10 }, { name: "nedrac's scale", quantity: 2 }],
			2: [{ name: "courser bee honey", quantity: 5 }, { name: "nedrac's claw", quantity: 2 }],
			3: [{ name: "energetic rhino beetle", quantity: 5 }, { name: "nedrac's fang", quantity: 2 }],
			4: [{ name: "star fragment", quantity: 1 }, { name: "nedrac's horn", quantity: 2 }],
		}
	},
	{
		id: 54,
		name: "Culotte des Landes",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "acorn", quantity: 10 }, { name: "ordrac's scale", quantity: 2 }],
			2: [{ name: "courser bee honey", quantity: 5 }, { name: "ordrac's claw", quantity: 2 }],
			3: [{ name: "energetic rhino beetle", quantity: 5 }, { name: "ordrac's fang", quantity: 2 }],
			4: [{ name: "star fragment", quantity: 1 }, { name: "ordrac's horn", quantity: 2 }],
		}
	},
	{
		id: 55,
		name: "Coiffe du Vent",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "opal", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "opal", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "opal", quantity: 10 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "opal", quantity: 20 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 56,
		name: "Tunique du Vent",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "opal", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "opal", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "opal", quantity: 10 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "opal", quantity: 20 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 57,
		name: "Chausses du Vent",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "opal", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "opal", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "opal", quantity: 10 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "opal", quantity: 20 }, { name: "star fragment", quantity: 1 }],
		}
	},

	{
		id: 58,
		name: "Coiffe du Prélude",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "ruby", quantity: 1 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "ruby", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "ruby", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "ruby", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 59,
		name: "Tunique du Prélude",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "ruby", quantity: 1 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "ruby", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "ruby", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "ruby", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 60,
		name: "Culotte du Prélude",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "ruby", quantity: 1 }, { name: "star fragment", quantity: 1 }],
			2: [{ name: "ruby", quantity: 3 }, { name: "star fragment", quantity: 1 }],
			3: [{ name: "ruby", quantity: 5 }, { name: "star fragment", quantity: 1 }],
			4: [{ name: "ruby", quantity: 10 }, { name: "star fragment", quantity: 1 }],
		}
	},
	{
		id: 61,
		name: "Capuche Hylienne",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "bokoblin horn", quantity: 5 }],
			2: [{ name: "bokoblin horn", quantity: 8 }, { name: "bokoblin fang", quantity: 5 }],
			3: [{ name: "bokoblin fang", quantity: 10 }, { name: "bokoblin guts", quantity: 5 }],
			4: [{ name: "bokoblin guts", quantity: 15 }, { name: "amber", quantity: 15 }],
		}
	},
	{
		id: 62,
		name: "Tunique Hylienne",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "bokoblin horn", quantity: 5 }],
			2: [{ name: "bokoblin horn", quantity: 8 }, { name: "bokoblin fang", quantity: 5 }],
			3: [{ name: "bokoblin fang", quantity: 10 }, { name: "bokoblin guts", quantity: 5 }],
			4: [{ name: "bokoblin guts", quantity: 15 }, { name: "amber", quantity: 15 }],
		}
	},
	{
		id: 63,
		name: "Pantalon Hylien",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "bokoblin horn", quantity: 5 }],
			2: [{ name: "bokoblin horn", quantity: 8 }, { name: "bokoblin fang", quantity: 5 }],
			3: [{ name: "bokoblin fang", quantity: 10 }, { name: "bokoblin guts", quantity: 5 }],
			4: [{ name: "bokoblin guts", quantity: 15 }, { name: "amber", quantity: 15 }],
		}
	},
	{
		id: 64,
		name: "Masque Nox",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "luminous stone", quantity: 5 }, { name: "bokoblin guts", quantity: 3 }],
			2: [{ name: "luminous stone", quantity: 8 }, { name: "moblin guts", quantity: 3 }],
			3: [{ name: "luminous stone", quantity: 10 }, { name: "molduga guts", quantity: 2 }],
			4: [{ name: "luminous stone", quantity: 20 }, { name: "lynel guts", quantity: 1 }],
		}
	},
	{
		id: 65,
		name: "Combinaison Nox",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "luminous stone", quantity: 5 }, { name: "bokoblin guts", quantity: 3 }],
			2: [{ name: "luminous stone", quantity: 8 }, { name: "moblin guts", quantity: 3 }],
			3: [{ name: "luminous stone", quantity: 10 }, { name: "molduga guts", quantity: 2 }],
			4: [{ name: "luminous stone", quantity: 20 }, { name: "lynel guts", quantity: 1 }],
		}
	},
	{
		id: 66,
		name: "Chausse Nox",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "luminous stone", quantity: 5 }, { name: "bokoblin guts", quantity: 3 }],
			2: [{ name: "luminous stone", quantity: 8 }, { name: "moblin guts", quantity: 3 }],
			3: [{ name: "luminous stone", quantity: 10 }, { name: "molduga guts", quantity: 2 }],
			4: [{ name: "luminous stone", quantity: 20 }, { name: "lynel guts", quantity: 1 }],
		}
	},
	{
		id: 67,
		name: "Casque Isolant",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "yellow chuchu", quantity: 3 }],
			2: [{ name: "yellow chuchu", quantity: 5 }, { name: "volt fruit", quantity: 5 }],
			3: [{ name: "zapshroom", quantity: 5 }, { name: "yellow lizalfos tail", quantity: 5 }],
			4: [{ name: "yellow lizalfos tail", quantity: 10 }, { name: "topaz", quantity: 10 }],
		}
	},
	{
		id: 68,
		name: "Combinaison Isolante",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "yellow chuchu", quantity: 3 }],
			2: [{ name: "yellow chuchu", quantity: 5 }, { name: "volt fruit", quantity: 5 }],
			3: [{ name: "zapshroom", quantity: 5 }, { name: "yellow lizalfos tail", quantity: 5 }],
			4: [{ name: "yellow lizalfos tail", quantity: 10 }, { name: "topaz", quantity: 10 }],
		}
	},
	{
		id: 69,
		name: "Pantalon Isolant",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "yellow chuchu", quantity: 3 }],
			2: [{ name: "yellow chuchu", quantity: 5 }, { name: "volt fruit", quantity: 5 }],
			3: [{ name: "zapshroom", quantity: 5 }, { name: "yellow lizalfos tail", quantity: 5 }],
			4: [{ name: "yellow lizalfos tail", quantity: 10 }, { name: "topaz", quantity: 10 }],
		}
	},
	{
		id: 70,
		name: "Bijou à plumes",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "red chuchu", quantity: 3 }],
			2: [{ name: "red chuchu", quantity: 5 }, { name: "warm safflina", quantity: 3 }],
			3: [{ name: "fire keese wing", quantity: 8 }, { name: "sunshroom", quantity: 5 }],
			4: [{ name: "red lizalfos tail", quantity: 10 }, { name: "ruby", quantity: 5 }],
		}
	},
	{
		id: 71,
		name: "Tunique duveteuse Piaf",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "red chuchu", quantity: 3 }],
			2: [{ name: "red chuchu", quantity: 5 }, { name: "warm safflina", quantity: 3 }],
			3: [{ name: "fire keese wing", quantity: 8 }, { name: "sunshroom", quantity: 5 }],
			4: [{ name: "red lizalfos tail", quantity: 10 }, { name: "ruby", quantity: 5 }],
		}
	},
	{
		id: 72,
		name: "Pantalon duveteux Piaf",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "red chuchu", quantity: 3 }],
			2: [{ name: "red chuchu", quantity: 5 }, { name: "warm safflina", quantity: 3 }],
			3: [{ name: "fire keese wing", quantity: 8 }, { name: "sunshroom", quantity: 5 }],
			4: [{ name: "red lizalfos tail", quantity: 10 }, { name: "ruby", quantity: 5 }],
		}
	},
	{
		id: 73,
		name: "Casque de Soldat",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "chuchu", quantity: 5 }, { name: "bokoblin guts", quantity: 3 }],
			2: [{ name: "keese wing", quantity: 3 }, { name: "moblin guts", quantity: 3 }],
			3: [{ name: "lizalfos tail", quantity: 3 }, { name: "hinox guts", quantity: 1 }],
			4: [{ name: "lynel hoof", quantity: 2 }, { name: "lynel guts", quantity: 2 }],
		}
	},
	{
		id: 74,
		name: "Armure de Soldat",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "chuchu", quantity: 5 }, { name: "bokoblin guts", quantity: 3 }],
			2: [{ name: "keese wing", quantity: 3 }, { name: "moblin guts", quantity: 3 }],
			3: [{ name: "lizalfos tail", quantity: 3 }, { name: "hinox guts", quantity: 1 }],
			4: [{ name: "lynel hoof", quantity: 2 }, { name: "lynel guts", quantity: 2 }],
		}
	},
	{
		id: 75,
		name: "Jambières de Soldat",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "chuchu", quantity: 5 }, { name: "bokoblin guts", quantity: 3 }],
			2: [{ name: "keese wing", quantity: 3 }, { name: "moblin guts", quantity: 3 }],
			3: [{ name: "lizalfos tail", quantity: 3 }, { name: "hinox guts", quantity: 1 }],
			4: [{ name: "lynel hoof", quantity: 2 }, { name: "lynel guts", quantity: 2 }],
		}
	},
	{
		id: 76,
		name: "Masque Furtif",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "blue nightshade", quantity: 3 }],
			2: [{ name: "blue nightshade", quantity: 5 }, { name: "sunset firefly", quantity: 5 }],
			3: [{ name: "silent shroom", quantity: 8 }, { name: "sneaky river snail", quantity: 5 }],
			4: [{ name: "stealthfin trout", quantity: 10 }, { name: "silent princess", quantity: 5 }],
		}
	},
	{
		id: 77,
		name: "Combinaison Furtive",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "blue nightshade", quantity: 3 }],
			2: [{ name: "blue nightshade", quantity: 5 }, { name: "sunset firefly", quantity: 5 }],
			3: [{ name: "silent shroom", quantity: 8 }, { name: "sneaky river snail", quantity: 5 }],
			4: [{ name: "stealthfin trout", quantity: 10 }, { name: "silent princess", quantity: 5 }],
		}
	},
	{
		id: 78,
		name: "Chausses Furtives",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "blue nightshade", quantity: 3 }],
			2: [{ name: "blue nightshade", quantity: 5 }, { name: "sunset firefly", quantity: 5 }],
			3: [{ name: "silent shroom", quantity: 8 }, { name: "sneaky river snail", quantity: 5 }],
			4: [{ name: "stealthfin trout", quantity: 10 }, { name: "silent princess", quantity: 5 }],
		}
	},
	{
		id: 79,
		name: "Casque Zora",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "lizalfos horn", quantity: 3 }],
			2: [{ name: "lizalfos talon", quantity: 5 }, { name: "hyrule bass", quantity: 5 }],
			3: [{ name: "lizalfos tail", quantity: 5 }, { name: "hearty bass", quantity: 5 }],
			4: [{ name: "lizalfos tail", quantity: 10 }, { name: "opal", quantity: 15 }],
		}
	},
	{
		id: 80,
		name: "Armure Zora",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "lizalfos horn", quantity: 3 }],
			2: [{ name: "lizalfos talon", quantity: 5 }, { name: "hyrule bass", quantity: 5 }],
			3: [{ name: "lizalfos tail", quantity: 5 }, { name: "hearty bass", quantity: 5 }],
			4: [{ name: "lizalfos tail", quantity: 10 }, { name: "opal", quantity: 15 }],
		}
	},
	{
		id: 81,
		name: "Jambières Zora",
		current: 0,
		active: false,
		owned: false,
		upgrades: {
			1: [{ name: "lizalfos horn", quantity: 3 }],
			2: [{ name: "lizalfos talon", quantity: 5 }, { name: "hyrule bass", quantity: 5 }],
			3: [{ name: "lizalfos tail", quantity: 5 }, { name: "hearty bass", quantity: 5 }],
			4: [{ name: "lizalfos tail", quantity: 10 }, { name: "opal", quantity: 15 }],
		}
	},
	{
		id: 82,
		name: "Maillot Nintendo Switch",
		current: 0,
		active: false,
		owned: false
	},
	{
		id: 83,
		name: "Masque de Korogu",
		current: 0,
		active: false,
		owned: false
	},
	{
		id: 84,
		name: "Masque de Majora",
		current: 0,
		active: false,
		owned: false
	},
	{
		id: 85,
		name: "Cagoule de Tingle",
		current: 0,
		active: false,
		owned: false
	},	
	{
		id: 86,
		name: "Combinaison de Tingle",
		active: false,
		owned: false
	},	
	{
		id: 87,
		name: "Chausse de Tingle",
		active: false,
		owned: false
	},	
	{
		id: 88,
		name: "Couronne de Midona",
		active: false,
		owned: false
	},
	{
		id: 89,
		name: "Casque de Spectre",
		active: false,
		owned: false
	},		
	{
		id: 90,
		name: "Armure de Spectre",
		active: false,
		owned: false
	},	
	{
		id: 91,
		name: "Jambières de Spectre",
		active: false,
		owned: false
	},	
	{
		id: 92,
		name: "Heaume divin de Ruta",
		active: false,
		owned: false
	},	
	{
		id: 93,
		name: "Heaume divin de Naboris",
		active: false,
		owned: false
	},	
	{
		id: 94,
		name: "Heaume divin de Rudania",
		active: false,
		owned: false
	},	
	{
		id: 95,
		name: "Heaume divin de Medoh",
		active: false,
		owned: false
	},	
	{
		id: 96,
		name: "Tunique bleue de homard",
		active: false,
		owned: false
	},	
	{
		id: 97,
		name: "Capuche de Lavio",
		active: false,
		owned: false
	},	
	{
		id: 98,
		name: "Casque de Xanto",
		active: false,
		owned: false
	},	
	// uniforme de la garde (3)
	{
		id: 102,
		name: "Masque spectral",
		active: false,
		owned: false
	},	
	{
		id: 103,
		name: "Armure spectral",
		active: false,
		owned: false
	},	
	{
		id: 104,
		name: "Grève spectrales",
		active: false,
		owned: false
	},	
	{
		id: 105,
		name: "Casque de récupérateur",
		active: false,
		owned: false
	},	
	{
		id: 106,
		name: "Gilet de récupérateur",
		active: false,
		owned: false
	},	
	{
		id: 107,
		name: "Grèves de récupérateur",
		active: false,
		owned: false
	},
];

const materials = {
	"acorn": { fr: "Gland", id: 44 },
	"amber": { fr: "Ambre brut", id: 104 },
	"ancient core": { fr: "Cœur antique", id: 147 },
	"ancient gear": { fr: "Rouage antique", id: 145 },
	"ancient screw": { fr: "Vis antique", id: 143 },
	"ancient shaft": { fr: "Arbre antique", id: 146 },
	"ancient spring": { fr: "Ressort antique", id: 144 },
	"blue nightshade": { fr: "Fleur silencio", id: 34 },
	"bokoblin fang": { fr: "Croc de Bokoblin", id: 112 },
	"bokoblin guts": { fr: "Viscère de Bokoblin", id: 113 },
	"bokoblin horn": { fr: "Corne de Bokoblin", id: 111 },
	"chuchu": { fr: "Gelée chuchu", id: 126 },
	"courser bee honey": { fr: "Rayon de miel enduro", id: 42 },
	"ordrac's claw": { fr: "Éclat de griffe d'Ordrac", id: 56 },
	"ordrac's fang": { fr: "Éclat de croc d'Ordrac", id: 57 },
	"ordrac's horn": { fr: "Éclat de corne d'Ordrac", id: 58 },
	"ordrac's scale": { fr: "Écaille d'Ordrac", id: 55 },
	"electric keese wing": { fr: "Aile électrique", id: 133 },
	"energetic rhino beetle": { fr: "energetic rhino beetle", id: 96 },
	"rordrac's claw": { fr: "Éclat de griffe de Rordrac", id: 64 },
	"rordrac's fang": { fr: "Éclat de croc de Rordrac", id: 65 },
	"rordrac's horn": { fr: "Éclat de corne de Rordrac", id: 66 },
	"rordrac's scale": { fr: "Écaille de Rordrac", id: 63 },
	"fire keese wing": { fr: "Aile de feu", id: 132 },
	"fireproof lizzard": { fr: "Lézard ignifus", id: 102 },
	"giant ancient core": { fr: "Cœur antique géant", id: 148 },
	"hearty bass": { fr: "Perche max", id: 68 },
	"hearty blueshell snail": { fr: "Turbo max", id: 81 },
	"hightale lizzard": { fr: "Lézard tempo", id: 100 },
	"hinox guts": { fr: "Viscère d'Hinox", id: 142 },
	"hot-footed frog": { fr: "Grenouille tempo", id: 98 },
	"hyrule bass": { fr: "Perche d'Hyrule", id: 69 },
	"ice keese wing": { fr: "Aile de glace", id: 131 },
	"icy lizalfos tail": { fr: "Queue bleue de Lézalfos", id: 120 },
	"keese wing": { fr: "Aile griffue", id: 130 },
	"lizalfos horn": { fr: "Corne de Lézalfos", id: 117 },
	"lizalfos tail": { fr: "Queue de Lézalfos", id: 119 },
	"lizalfos talon": { fr: "Griffe de Lézalfos", id: 118 },
	"luminous stone": { fr: "Gemme nox", id: 106 },
	"lynel guts": { fr: "Viscère de Lynel", id: 125 },
	"lynel hoof": { fr: "Sabot de Lynel", id: 124 },
	"lynel horn": { fr: "Corne de Lynel", id: 123 },
	"moblin fang": { fr: "Croc de Moblin", id: 115 },
	"moblin guts": { fr: "Viscère de Moblin", id: 116 },
	"moblin horn": { fr: "Corne de Moblin", id: 114 },
	"molduga fin": { fr: "Aileron de Moldarquor", id: 138 },
	"molduga guts": { fr: "Viscère de Moldarquor", id: 139 },
	"nedrac's claw": { fr: "Éclat de griffe de Nedrac", id: 60 },
	"nedrac's fang": { fr: "Éclat de croc de Nedrac", id: 61 },
	"nedrac's horn": { fr: "Éclat de corne de Nedrac", id: 62 },
	"nedrac's scale": { fr: "Écaille de Nedrac", id: 59 },
	"octo balloon": { fr: "Baudruche octo", id: 137 },
	"octorok eyeball": { fr: "Œil octo", id: 136 },
	"octorok tentacle": { fr: "Tentacule octo", id: 135 },
	"opal": { fr: "Opale brut", id: 105 },
	"red chuchu": { fr: "Gelée chuchu rouge", id: 128 },
	"red lizalfos tail": { fr: "Queue rouge de Lézalfos", id: 121 },
	"ruby": { fr: "Rubis brut", id: 108 },
	"rushroom": { fr: "Champi tempo", id: 18 },
	"saphhire": { fr: "Saphir brut", id: 109 },
	"silent princess": { fr: "Princesse de la sérénité", id: 35 },
	"silent shroom": { fr: "Champi silencio", id: 21 },
	"smotherwing butterfly": { fr: "Papillon ignifus", id: 89 },
	"sneaky river snail": { fr: "Escargot silencio", id: 80 },
	"star fragment": { fr: "Fragment d'étoile", id: 54 },
	"stealthfin trout": { fr: "Truite silencio", id: 74 },
	"sunset firefly": { fr: "Luciole de la sérénité", id: 97 },
	"sunshroom": { fr: "Champi piment", id: 16 },
	"swift carrot": { fr: "Carotte tempo", id: 26 },
	"swift violet": { fr: "Violettes tempo", id: 31 },
	"topaz": { fr: "Topaze brute", id: 107 },
	"volt fruit": { fr: "Fruit volt", id: 7 },
	"warm safflina": { fr: "warm safflina", id: 29 },
	"white chuchu": { fr: "Gelée chuchu blanche", id: 127 },
	"yellow chuchu": { fr: "Gelée chuchu jaune", id: 129 },
	"yellow lizalfos tail": { fr: "Queue jaune de Lézalfos", id: 122 },
	"zapshroom": { fr: "Champi volt", id: 17 },
	"diamond": { fr: "Diamant", id: 999 },
	"hinox toe": { fr: "Ongle d'Hinox", id: 999 },
	"hinox fang": { fr: "Dent d'Hinox", id: 999 },
	"silex": { fr: "Silex", id: 999 },
};

$(function () {

	if (save !== null) {
		save = JSON.parse(save);
		data = _.map(initial, function (i) {
			const l = _.find(save, ['id', i.id]);
			if (l !== undefined) {
				i.current = l.current;
				i.active = l.active;
				i.owned = l.owned;
			}
			return i;
		});
	} else {
		data = initial;
	}

	data = _.orderBy(data, 'id');

	const vm = new Vue({
		el: '#armors',
		data: { armors: data, language: 'fr' },
		methods: {
			save: function () {
				save = _.map(this.armors, function (i) {
					return {
						id: i.id,
						current: i.current,
						active: i.active,
						owned: i.owned
					};
				});
				localStorage.setItem("zelda_botw", JSON.stringify(save));
			},
			reset: function () {
				this.armors = initial;
				localStorage.removeItem("zelda_botw");
			},
			trans: function (k) {
				if (materials[k] !== undefined) {
					if (materials[k][this.language] !== undefined) {
						return materials[k][this.language];
					}

				}
				return k;
			},
			getSum: function (item, to) {

				const from = item.current + 1;
				const compos = {};

				if (from > to) {
					return {};
				}
				if (item.upgrades === undefined) {
					return {};
				}
				for (let i = from; i <= to; i++) {
					const current = item.upgrades[i];

					if (current !== undefined) {
						for (let j = current.length - 1; j >= 0; j--) {
							if (compos[current[j].name] == undefined) {
								let mat = materials[current[j].name];
								if (mat == undefined) {
									console.log(current[j].name);
									mat = { id: 999 };
								}
								compos[current[j].name] = { name: current[j].name, quantity: 0, id: mat.id };
							}

							compos[current[j].name].quantity += current[j].quantity;

						}
					}



				}

				return _.orderBy(compos, 'id');
			},
			getAllMaterial: function (to, activeOnly) {

				const items = this.armors;
				const material = {};

				if (activeOnly === undefined) {
					activeOnly = false;
				}

				for (let i = items.length - 1; i >= 0; i--) {
					const item = items[i];
					const valueTest = (activeOnly) ? (item.active && item.owned) : item.owned;
					//console.log({name: item.name, active: item.active, owned: item.owned, activeOnly, valueTest});

					if (valueTest) {
						const compos = this.getSum(item, to);

						for (let j = compos.length - 1; j >= 0; j--) {

							if (material[compos[j].name] == undefined) {
								material[compos[j].name] = { name: compos[j].name, quantity: 0, id: materials[compos[j].name].id, armors: {} };
							}

							material[compos[j].name].quantity += compos[j].quantity;
							material[compos[j].name].armors[item.id] = item.name;
						}

					}
				}

				return _.orderBy(material, 'id');
			},
			getAllActiveMaterial: function (to) {
				return this.getAllMaterial(to, true);
			}

		}
	});
});
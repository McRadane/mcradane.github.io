let save = localStorage.getItem("save");
let data = { loaded: false };

const ucfirst = function(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const initial = { 
	definitions: {
		profils: {
			cc: {type: 'primary'},
			ct: {type: 'primary'},
			f: {type: 'primary'},
			e: {type: 'primary'},
			ag: {type: 'primary'},
			int: {type: 'primary'},
			fm: {type: 'primary'},
			soc: {type: 'primary'},
			a: {type: 'secondary'},
			b: {type: 'secondary'},
			bf: {type: 'secondary'},
			be: {type: 'secondary'},
			m: {type: 'secondary'},
			mag: {type: 'secondary'},
			pf: {type: 'secondary'},
			pd: {type: 'secondary'}
		},
		skills: {
			canotage: {carac: 'f', type: 'base'},
			charisme: {carac: 'soc', type: 'base'},
			commandement: {carac: 'soc', type: 'base'},
			commerage: {carac: 'soc', type: 'base'},
			conduite: {carac: 'f', type: 'base'},
			deguisement: {carac: 'soc', type: 'base'},
			deplacementSilencieux: {carac: 'ag', type: 'base'},
			dissimulation: {carac: 'ag', type: 'base'},
			equitation: {carac: 'ag', type: 'base'},
			escalade: {carac: 'f', type: 'base'},
			evaluation: {carac: 'int', type: 'base'},
			fouille: {carac: 'int', type: 'base'},
			intimidation: {carac: 'f', type: 'base'},
			jeu: {carac: 'int', type: 'base'},
			marchandage: {carac: 'soc', type: 'base'},
			natation: {carac: 'f', type: 'base'},
			perception: {carac: 'int', type: 'base'},
			resistanceAlcool: {carac: 'e', type: 'base'},
			soinsAnimaux: {carac: 'int', type: 'base'},
			survie: {carac: 'int', type: 'base'},
			autre: {multi: true, nocarac: true},
			alphabet: {carac: 'int', multi: true},
			baratin: {carac: 'soc'},
			braconage: {carac: 'ag'},
			connaissancesAcademiques: {carac: 'int', multi: true},
			connaissancesGenerales: {carac: 'int', multi: true},
			crochetage: {carac: 'ag'},
			dressage: {carac: 'soc'},
			empriseAnimaux: {carac: 'soc'},
			escamotage: {carac: 'ag'},
			esquive: {carac: 'ag'},
			expressionArtistique: {carac: 'soc', multi: true},
			filature: {carac: 'ag'},
			focalisation: {carac: 'fm'},
			hypnotisme: {carac: 'fm'},
			langageMystique: {carac: 'int', multi: true},
			langageSecret: {carac: 'int', multi: true},
			langue: {carac: 'int', multi: true},
			lectureLevres: {carac: 'int'},
			lireEcrire: {carac: 'int'},
			metier: {multi: true, nocarac: true},
			navigation: {carac: 'ag'},
			orientation: {carac: 'int'},
			pistage: {carac: 'int'},
			poisons: {carac: 'int'},
			sensMagie: {carac: 'fm'},
			soins: {carac: 'int'},
			torture: {carac: 'soc'},
			ventriloquie: {carac: 'soc'}			
		},
		advancedSkillsSelector: [
			{ value: 'autre', text: "Autres"},
			{ value: 'alphabet', text: "Alphabet secret"},
			{ value: 'baratin', text: "Baratin"},
			{ value: 'braconage', text: "Braconnage"},
			{ value: 'connaissancesAcademiques', text: "Connaissances académiques"},
			{ value: 'connaissancesGenerales', text: "Connaissances générales"},
			{ value: 'crochetage', text: "Crochetage"},
			{ value: 'dressage', text: "Dressage"},
			{ value: 'empriseAnimaux', text: "Emprise sur les animaux"},
			{ value: 'escamotage', text: "Escamotage"},
			{ value: 'esquive', text: "Esquive"},
			{ value: 'expressionArtistique', text: "Expression artistique"},
			{ value: 'filature', text: "Filature"},
			{ value: 'focalisation', text: "Focalisation"},
			{ value: 'hypnotisme', text: "Hypnotisme"},
			{ value: 'langageMystique', text: "Langage mystique"},
			{ value: 'langageSecret', text: "Langage secret"},
			{ value: 'langue', text: "Langue"},
			{ value: 'lectureLevres', text: "Lecture sur les lèvres"},
			{ value: 'lireEcrire', text: "Lire/écrire"},
			{ value: 'metier', text: "Métier"},
			{ value: 'navigation', text: "Navigation"},
			{ value: 'orientation', text: "Orientation"},
			{ value: 'pistage', text: "Pistage"},
			{ value: 'poisons', text: "Préparation de poisons"},
			{ value: 'sensMagie', text: "Sens de la magie"},
			{ value: 'soins', text: "Soins"},
			{ value: 'torture', text: "Torture"},
			{ value: 'ventriloquie', text: "Ventriloquie"}
		],
		caracSelector: [
			{ value: 'cc', text: 'CC'},
			{ value: 'ct', text: 'CT'},
			{ value: 'f', text: 'F'},
			{ value: 'e', text: 'E'},
			{ value: 'ag', text: 'Ag'},
			{ value: 'int', text: 'Int'},
			{ value: 'fm', text: 'FM'},
			{ value: 'soc', text: 'Soc'},
			{ value: 'a', text: 'A'},
			{ value: 'b', text: 'B'},
			{ value: 'bf', text: 'BF'},
			{ value: 'be', text: 'BE'},
			{ value: 'm', text: 'M'},
			{ value: 'mag', text: 'Mag'},
			{ value: 'pf', text: 'PF'},
			{ value: 'pd', text: 'PD'},		
		],
		positions: {
			profilsPrimaryBase: {top: "38%", width: "4%", left: "16.5", leftStep: "5.05" },
			profilsPrimaryAdvanced: {top: "39.8%", width: "4%", left: "16.5", leftStep: "5.05" },
			profilsPrimaryAdvancedBuy: {top: "41.6%", width: "4%", left: "16.5", leftStep: "5.05" },
			profilsPrimaryResult: {top: "43.5%", width: "4%", left: "16.5", leftStep: "5.05"},

			profilsSecondaryBase: {top: "49.7%", width: "4%", left: "16.5", leftStep: "5.05" },
			profilsSecondaryAdvanced: {top: "51.6%", width: "4%", left: "16.5", leftStep: "5.05" },
			profilsSecondaryAdvancedBuy: {top: "53.3%", width: "4%", left: "16.5", leftStep: "5.05" },
			profilsSecondaryResult: {top: "55.4%", width: "4%", left: "16.5", leftStep: "5.05"},			
	
			//profilsSecondary: {top: "49.15%", width: "4%", left: "16.5", leftStep: "5.05" },
	
			skillsBaseCheckbox: {top: "8", leftOwn: "35%", leftB10: "38.9%", leftB20: "42.8%", topStep: "1.76" },
			skillsBaseBonus: {top: "8.35", left: "46.4%", topStep: "1.76", width: '3%' },
			skillsBaseResult: {top: "8.35", left: "50.9%", topStep: "1.76", width: '3%' },

			skillsAdvancedName: {top: "52.2", left: "6.6%", topStep: "1.76", width: "12%"},
			skillsAdvancedOption: {top: "52.2", left: "18.7%", topStep: "1.76", width: "10%" },
			skillsAdvancedCarac: {top: "52.2", left: "30%", topStep: "1.76", width: "3%", widthSelect: "4%" },
			skillsAdvancedCheckbox: {top: "51.7", leftOwn: "34.6%", leftB10: "38.4%", leftB20: "42.3%", topStep: "1.76" },
			skillsAdvancedBonus: {top: "52", left: "45.8%", topStep: "1.76", width: '3%' },
			skillsAdvancedResult: {top: "52", left: "50.4%", topStep: "1.76", width: '3%' },			
		}
	},
	character: {
		commons:{
			name: '',
			race: '',
			profession: '',
			oldProfession: '',
			age: 18,
			gender: '',
			eyes: '',
			size: '',
			hair: '',
			weight: '',
			gods: '',
			bros: '',
			birthplace: '',
			signes: '',
			moneyCo: 0,
			moneyPa: 0,
			moneySc: 0,
			xpActual: 0,
			xpTotal: 0
		},
		profils: {
			cc: {base: 0, advanced: 0, advancedBuy: 0},
			ct: {base: 0, advanced: 0, advancedBuy: 0},
			f: {base: 0, advanced: 0, advancedBuy: 0},
			e: {base: 0, advanced: 0, advancedBuy: 0},
			ag: {base: 0, advanced: 0, advancedBuy: 0},
			int: {base: 0, advanced: 0, advancedBuy: 0},
			fm: {base: 0, advanced: 0, advancedBuy: 0},
			soc: {base: 0, advanced: 0, advancedBuy: 0},
			a: {base: 0, advanced: 0, advancedBuy: 0},
			b: {base: 0, advanced: 0, advancedBuy: 0},
			bf: {base: 0, advanced: 0, advancedBuy: 0},
			be: {base: 0, advanced: 0, advancedBuy: 0},
			m: {base: 0, advanced: 0, advancedBuy: 0},
			mag: {base: 0, advanced: 0, advancedBuy: 0},
			pf: {base: 0, advanced: 0, advancedBuy: 0},
			pd: {base: 0, advanced: 0, advancedBuy: 0}
		},
		skills: {
			canotage: {carac: 'f', owned: false, b10: false, b20: false, bonus: 0},
			charisme: {carac: 'soc', owned: false, b10: false, b20: false, bonus: 0},
			commandement: {carac: 'soc', owned: false, b10: false, b20: false, bonus: 0},
			commerage: {carac: 'soc', owned: false, b10: false, b20: false, bonus: 0},
			conduite: {carac: 'f', owned: false, b10: false, b20: false, bonus: 0},
			deguisement: {carac: 'soc', owned: false, b10: false, b20: false, bonus: 0},
			deplacementSilencieux: {carac: 'ag', owned: false, b10: false, b20: false, bonus: 0},
			dissimulation: {carac: 'ag', owned: false, b10: false, b20: false, bonus: 0},
			equitation: {carac: 'ag', owned: false, b10: false, b20: false, bonus: 0},
			escalade: {carac: 'f', owned: false, b10: false, b20: false, bonus: 0},
			evaluation: {carac: 'int', owned: false, b10: false, b20: false, bonus: 0},
			fouille: {carac: 'int', owned: false, b10: false, b20: false, bonus: 0},
			intimidation: {carac: 'f', owned: false, b10: false, b20: false, bonus: 0},
			jeu: {carac: 'int', owned: false, b10: false, b20: false, bonus: 0},
			marchandage: {carac: 'soc', owned: false, b10: false, b20: false, bonus: 0},
			natation: {carac: 'f', owned: false, b10: false, b20: false, bonus: 0},
			perception: {carac: 'int', owned: false, b10: false, b20: false, bonus: 0},
			resistanceAlcool: {carac: 'e', owned: false, b10: false, b20: false, bonus: 0},
			soinsAnimaux: {carac: 'int', owned: false, b10: false, b20: false, bonus: 0},
			survie: {carac: 'int', owned: false, b10: false, b20: false, bonus: 0},
		},
		advancedSkills: {
			line1: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line2: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line3: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line4: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line5: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line6: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line7: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line8: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line9: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line10: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line11: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line12: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line13: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line14: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line15: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line16: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line17: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line18: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line19: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line20: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line21: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line22: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line23: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
			line24: {skill: '', skillOption: '', carac: '', b10: false, b20: false, bonus: 0},
		},
	},
};

$(function () {
	data = initial;
	data.loaded = false;

	if (save !== null) {
		data = JSON.parse(save);
		data.definitions = initial.definitions;
		data.loaded = true;
	} else {
		data.loaded = true;
	}

	$('input').each(function() {
		var $this = $(this);
		var left = $this.data('left');
		var top = $this.data('top');
		var height = $this.data('height');
		var width = $this.data('width');

		if(left !== undefined) $this.css('left', left + '%');
		if(top !== undefined) $this.css('top', top + '%');
		if(height !== undefined) $this.css('height', height + '%');
		if(width !== undefined) $this.css('width', width + '%');
	});

	const vm = new Vue({
		el: '#pages',
		data: data,
		methods: {

			save: function () {
				localStorage.setItem("save", JSON.stringify({
					character: this.character
				}));
			},
			reset: function () {
				this.character = initial.character;
				localStorage.removeItem("save");
			},			
			getStat: function(stateName) {
				var state = this.character.profils[stateName];

				return state.base + state.advancedBuy;
			},
			getStepProfils: function(stateName) {
				if(this.definitions.profils[stateName].type === 'primary') {
					return 5
				}

				return 1
			},
			getPositionLeft: function(position, index) {
				var left = Number(position.left) + (Number(position.leftStep) * index);
				return left + "%";
			},
			getPositionTop: function(position, index) {
				var top = Number(position.top) + (Number(position.topStep) * index);
				return top + "%";
			},
			getSkill: function (skillName, skill) {

				if(skillName === undefined || skillName === "") return null;

				var definition = this.definitions.skills[skillName];
				
				if(definition.type !== 'base') {

					skill.owned = true;

				} else {
					var skill = this.character.skills[skillName];					
				}

				if(definition.carac !== undefined) {
					var state = this.getStat(definition.carac);
				} else if(skill.carac !== undefined) {
					var state = this.getStat(skill.carac);
				} else {
					return 0;
				}
				

				if(!skill.owned) {
					state = Math.floor(state / 2);
				} else {
					if(skill.b10) {
						state += 10;
						if(skill.b20) {
							state += 20;
						}
					}
				}

				state += skill.bonus;

				return state;
			},
			getAdvancedSkill: function(skill) {
				var found = this.definitions.advancedSkillsSelector.find(function(element) {
					return element.value == skill;
				});

				if(found !== undefined) {
					return found;
				}
				return {text: ''};
			},		
			addSkill: function (line) {

				var skillLine = this.character.advancedSkills[line];
				skillLine.carac = '';
				skillLine.nocarac = false;
				skillLine.multi = false;

				var skillDefinition = this.definitions.skills[skillLine.skill];

				this.character.advancedSkills[line] = $.extend(skillLine, skillDefinition);

				/*skill.id = this.character.newAdvancedSkills
				var skillDef = this.getAdvancedSkill(skill.id);

				skill.name = skillDef.text;

				this.character.advancedSkills.push(skill);
				this.character.newAdvancedSkills = "";*/
			},			
		}	
	});	

});
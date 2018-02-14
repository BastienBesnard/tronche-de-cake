const ONGLET_LIST = require('../../common/onglet-list');
const LEFT_BAR = require('./common/left-bar');

const RECEPE = {
	view: 'index',
	path: LEFT_BAR.list[2].href,
	group: ONGLET_LIST[0].name,
	title: 'Recette cupcake vanille',
	meta: {
		description: 'TODO description',
		keywords: 'TODO keywords',
		author: 'Bastien B',
		viewport: 'width=device-width, initial-scale=1.0'
	},
	ongletList: ONGLET_LIST,
	templateName: 'recepe-2',
	recepe: {
		name: 'Recette cupcake vanille',
		nbPerson: null,
		nbCake: {
			value: 12,
			tooltip: 'Recette pour 12 cupcakes'
		},
		duration: {
			value: '35m',
			tooltipOne: 'Préparation 15 minutes',
			tooltipTwo: 'Cuisson 20 minutes'
		},
		ingredientList: [
			{name: 'Beurre', quantity: '130 grammes', src: '/images/ingredients/beurre.jpg', alt: 'beurre'},
			{name: 'Farine', quantity: '200 grammes', src: '/images/ingredients/farine.jpg', alt: 'farine'},
			{name: 'Sucre en poudre', quantity: '160 grammes', src: '/images/ingredients/sucre_en_poudre.jpg', alt: 'sucre en poudre'},
			{name: 'Oeuf', quantity: 'x 2', src: '/images/ingredients/oeuf.jpg', alt: 'oeuf'},
			{name: 'Extrait de vanille', quantity: '1 cuillère à soupe', src: '/images/ingredients/extrait_vanille.jpg', alt: 'extrait vanille'},
			{name: 'Levure', quantity: '1/2 sachet', src: '/images/ingredients/levure_chimique.jpg', alt: 'levure chimique'},
			{name: 'Lait', quantity: '8 centilitres', src: '/images/ingredients/lait.jpg', alt: 'lait'}
		],
		image: {src: '/images/cupcake-vanille.jpg', alt: 'cupcake vanille'},
		stepList: [
			'Préchauffer votre four à 180°C (thermostat 6).',
			'Bien mélanger le beurre préalablement fondu et le sucre.',
			'Incorporer un à un les oeufs puis la farine, la levure, le lait et l\'extrait de vanille.',
			'Remplir les moules aux 3/4 puis enfourner pendant 20 minutes.'
		]
	},
	leftBar: LEFT_BAR
};

module.exports = RECEPE;
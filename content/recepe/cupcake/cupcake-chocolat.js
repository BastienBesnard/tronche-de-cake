const ONGLET_LIST = require('../../common/onglet-list');
const LEFT_BAR = require('./common/left-bar');

const RECEPE = {
	view: 'index',
	path: LEFT_BAR.list[1].href,
	group: ONGLET_LIST[0].name,
	title: 'Recette cupcake chocolat',
	meta: {
		description: 'TODO description',
		keywords: 'TODO keywords',
		author: 'Bastien B',
		viewport: 'width=device-width, initial-scale=1.0'
	},
	ongletList: ONGLET_LIST,
	templateName: 'recepe-2',
	recepe: {
		name: 'cupcake chocolat',
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
			{name: 'Sucre en poudre', quantity: '120 grammes', src: '/images/ingredients/sucre_en_poudre.jpg', alt: 'sucre en poudre'},
			{name: 'Oeuf', quantity: 'x 2', src: '/images/ingredients/oeuf.jpg', alt: 'oeuf'},
			{name: 'Chocolat noir', quantity: '150 grammes', src: '/images/ingredients/chocolat_noir.jpg', alt: 'chocolat noir'},
			{name: 'Levure', quantity: '1/2 sachet', src: '/images/ingredients/levure_chimique.jpg', alt: 'levure chimique'},
			{name: 'Lait', quantity: '8 centilitres', src: '/images/ingredients/lait.jpg', alt: 'lait'}
		],
		image: {src: '/images/cupcake-chocolat.jpg', alt: 'cupcake chocolat'},
		stepList: [
			'Préchauffer votre four à 180°C (thermostat 6).',
			'Faire fondre le beurre et le chocolat.',
			'Bien mélanger le beurre et le chocolat fondus, les oeufs et le sucre.',
			'Ajouter la farine, la levure, le lait.',
			'Enfourner pendant 20 minutes.'
		]
	},
	leftBar: LEFT_BAR
};

module.exports = RECEPE;
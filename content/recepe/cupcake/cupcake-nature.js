const ONGLET_LIST = require('../../common/onglet-list');
const LEFT_BAR = require('./common/left-bar');

const RECEPE = {
	view: 'index',
	path: ONGLET_LIST[0].href,
	group: ONGLET_LIST[0].name,
	title: 'Recette cupcake nature',
	meta: {
		description: 'TODO description',
		keywords: 'TODO keywords',
		author: 'Bastien B',
		viewport: 'width=device-width, initial-scale=1.0'
	},
	ongletList: ONGLET_LIST,
	templateName: 'recepe-2',
	recepe: {
		name: 'cupcake nature',
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
			{name: 'Sucre en poudre', quantity: '170 grammes', src: '/images/ingredients/sucre_en_poudre.jpg', alt: 'sucre en poudre'},
			{name: 'Oeuf', quantity: 'x 2', src: '/images/ingredients/oeuf.jpg', alt: 'oeuf'},
			{name: 'Sucre vanillé', quantity: '1 sachet', src: '/images/ingredients/sucre_vanille.jpg', alt: 'sucre vanille'},
			{name: 'Levure', quantity: '1/2 sachet', src: '/images/ingredients/levure_chimique.jpg', alt: 'levure chimique'},
			{name: 'Lait', quantity: '8 centilitres', src: '/images/ingredients/lait.jpg', alt: 'lait'}
		],
		image: {src: '/images/cupcake.jpg', alt: 'cupcake'},
		stepList: [
			'Préchauffer votre four à 180°C (thermostat 6).',
			'Bien mélanger le beurre préalablement fondu, le sucre en poudre et le sucre vanillé.',
			'Incorporer un à un les oeufs puis la farine, la levure et le lait.',
			'Remplir les moules aux 3/4 puis enfourner pendant 20 minutes.'
		]
	},
	leftBar: LEFT_BAR
};

module.exports = RECEPE;
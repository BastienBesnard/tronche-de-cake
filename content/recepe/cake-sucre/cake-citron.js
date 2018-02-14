const ONGLET_LIST = require('../../common/onglet-list');
const LEFT_BAR = require('./common/left-bar');

const RECEPE = {
	view: 'index',
	path: ONGLET_LIST[2].href,
	group: ONGLET_LIST[2].name,
	title: 'Recette cake citron',
	meta: {
		description: 'TODO description',
		keywords: 'TODO keywords',
		author: 'Bastien B',
		viewport: 'width=device-width, initial-scale=1.0'
	},
	ongletList: ONGLET_LIST,
	templateName: 'recepe-2',
	recepe: {
		name: LEFT_BAR.list[0].name,
		nbPerson: 6,
		duration: {
			value: '50m',
			tooltipOne: 'Préparation 10 minutes',
			tooltipTwo: 'Cuisson 40 minutes'
		},
		ingredientList: [
			{name: 'Farine', quantity: '180 grammes', src: '/images/ingredients/farine.jpg', alt: 'farine'},
			{name: 'Sucre en poudre', quantity: '180 grammes', src: '/images/ingredients/sucre_en_poudre.jpg', alt: 'sucre en poudre'},
			{name: 'Levure', quantity: '1/2 sachet', src: '/images/ingredients/levure_chimique.jpg', alt: 'levure chimique'},
			{name: 'Oeufs', quantity: 'x3', src: '/images/ingredients/oeuf.jpg', alt: 'oeuf'},
			{name: 'Beurre', quantity: '120 grammes', src: '/images/ingredients/beurre.jpg', alt: 'beurre'},
			{name: 'Citron', quantity: 'x1', src: '/images/ingredients/citron.jpg', alt: 'citron'}
		],
		image: {src: '/images/cake_citron.jpg', alt: 'cake citron'},
		stepList: [
			'Préchauffer le four à 180°C (thermostat 6).',
			'Râper la partie jaune du citron puis le presser pour récupérer le jus.',
			'Bien mélanger le beurre fondu, le sucre, la farine, la levure, les oeufs, le zeste et le just de citron.',
			'Beurrer et fariner le moule.',
			'Verser la préparation dans le moule et laisser cuire pendant 40 minutes.'
		]
	},
	leftBar: LEFT_BAR
};

module.exports = RECEPE;
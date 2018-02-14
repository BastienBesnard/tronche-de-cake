const ONGLET_LIST = require('../../common/onglet-list');
const LEFT_BAR = require('./common/left-bar');

const RECEPE = {
	view: 'index',
	path: LEFT_BAR.list[1].href,
	group: ONGLET_LIST[2].name,
	title: 'Recette cake chocolat',
	meta: {
		description: 'TODO description',
		keywords: 'TODO keywords',
		author: 'Bastien B',
		viewport: 'width=device-width, initial-scale=1.0'
	},
	ongletList: ONGLET_LIST,
	templateName: 'recepe-2',
	recepe: {
		name: 'cake au chocolat',
		nbPerson: 6,
		duration: {
			value: '35m',
			tooltipOne: 'Préparation 10 minutes',
			tooltipTwo: 'Cuisson 30 minutes'
		},
		ingredientList: [
			{name: 'Chocolat noir à pâtisser', quantity: '200 grammes', src: '/images/ingredients/chocolat_noir.jpg', alt: 'chocolat noir'},
			{name: 'Beurre', quantity: '90 grammes', src: '/images/ingredients/beurre.jpg', alt: 'beurre'},
			{name: 'Sucre en poudre', quantity: '100 grammes', src: '/images/ingredients/sucre_en_poudre.jpg', alt: 'sucre en poudre'},
			{name: 'Farine', quantity: '60 grammes', src: '/images/ingredients/farine.jpg', alt: 'farine'},
			{name: 'Oeufs', quantity: 'x3', src: '/images/ingredients/oeuf.jpg', alt: 'oeuf'}
		],
		image: {src: '/images/cake_chocolat.jpg', alt: 'cake chocolat'},
		stepList: [
			'Préchauffer le four à 180°C (thermostat 6).',
			'Faire fondre lentement le beurre et le chocolat.',
			'Mélanger les oeufs, le sucre, la farine, le chocolat, et le beurre.',
			'Beurrer et fariner le moule puis verser la pâte à gâteau.',
			'Laisser cuire 25 minutes.'
		]
	},
	leftBar: LEFT_BAR
};

module.exports = RECEPE;
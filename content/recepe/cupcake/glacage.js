const ONGLET_LIST = require('../../common/onglet-list');
const LEFT_BAR = require('./common/left-bar');

const RECEPE = {
	view: 'index',
	path: LEFT_BAR.list[3].href,
	group: ONGLET_LIST[0].name,
	title: 'Recette glaçage cupcake',
	meta: {
		description: 'TODO description',
		keywords: 'TODO keywords',
		author: 'Bastien B',
		viewport: 'width=device-width, initial-scale=1.0'
	},
	ongletList: ONGLET_LIST,
	templateName: 'recepe-2',
	recepe: {
		name: 'glaçage',
		nbPerson: null, //8,
		nbCake: {
			value: 8,
			tooltip: 'Recette pour le glaçage de 8 cupcakes'
		},
		duration: {
			value: '25m',
			tooltipOne: 'Préparation 10 minutes',
			tooltipTwo: 'Cuisson 20 minutes'
		},
		ingredientList: [
			{name: 'Beurre', quantity: '70 grammes', src: '/images/ingredients/beurre.jpg', alt: 'beurre'},
			{name: 'Sucre glace', quantity: '150 grammes', src: '/images/ingredients/farine.jpg', alt: 'farine'}
		],
		image: {src: '/images/glacage.jpg', alt: 'glaçage'},
		stepList: [
			'Faire fondre le beurre puis le battre jusqu\'à ce qu\'il soit lisse.',
			'Ajouter le sucre glace.'
		]
	},
	leftBar: LEFT_BAR
};

module.exports = RECEPE;
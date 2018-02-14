const ONGLET_LIST = require('../../common/onglet-list');

const CAKE_SALE = {
	view: 'index',
	path: ONGLET_LIST[3].href,
	group: ONGLET_LIST[3].name,
	title: 'Recette cake salé',
	meta: {
		description: 'TODO description',
		keywords: 'TODO keywords',
		author: 'Bastien B',
		viewport: 'width=device-width, initial-scale=1.0'
	},
	ongletList: ONGLET_LIST,
	templateName: 'recepe-1',
	recepe: {
		name: 'recette cake salé',
		nbCake: {
			value: 8,
			tooltip: 'Recette pour 8 personnes'
		},
		duration: {
			value: '1h',
			tooltipOne: 'Préparation 15 minutes',
			tooltipTwo: 'Cuisson 45 minutes'
		},
		ingredientList: [
			{name: 'Farine', quantity: '200 grammes', src: '/images/ingredients/farine.jpg', alt: 'farine'},
			{name: 'Oeufs', quantity: 'x4', src: '/images/ingredients/oeuf.jpg', alt: 'oeuf'},
			{name: 'Levure', quantity: '1 sachet', src: '/images/ingredients/levure_chimique.jpg', alt: 'levure chimique'},
			{name: 'Huile d\'olive', quantity: '7 centilitres', src: '/images/ingredients/huile_olive.jpg', alt: 'huile d\'olive'},
			{name: 'Lait', quantity: '12\,5 centilitres', src: '/images/ingredients/lait.jpg', alt: 'lait'},
			{name: 'Emmental', quantity: '100 grammes', src: '/images/ingredients/emmental_rape.jpg', alt: 'emmental rapé'}
		],
		garnishList: [
			{
				name: 'Jambon', 
				ingredientList: [
					{name: 'Dés de jambon', quantity: '200 grammes', src: '/images/ingredients/des_jambon.jpg', alt: 'dés de jambon'},
					{name: 'Noix concassées', quantity: '80 grammes', src: '/images/ingredients/noix_concassees.jpg', alt: 'noix concassées'}
				]
			},
			{
				name: 'Saumon', 
				ingredientList: [
					{name: 'Saumon fumé', quantity: '150 grammes', src: '/images/ingredients/saumon_fume.jpg', alt: 'saumon fumé'},
					{name: 'Ciboulette', quantity: '8 brins', src: '/images/ingredients/ciboulette.jpg', alt: 'ciboulette'}
				]
			},
			{
				name: 'Chorizo', 
				ingredientList: [
					{name: 'Chorizo', quantity: '130 grammes', src: '/images/ingredients/chorizo.jpg', alt: 'chorizo'},
					{name: 'Noix concassées', quantity: '80 grammes', src: '/images/ingredients/noix_concassees.jpg', alt: 'noix concassées'}
				]
			}/*,
			{
				name: 'Chèvre', 
				ingredientList: [
					{name: 'Farine5', quantity: '200 grammes', src: '/images/ingredients/farine.jpg', alt: 'TODO'},
					{name: 'Levure', quantity: '1 sachet', src: '/images/ingredients/levure_chimique.jpg', alt: 'TODO'},
					{name: 'Oeufs', quantity: 'x4', src: '/images/ingredients/oeuf.jpg', alt: 'TODO'}
				]
			}*/
		],
		image: {src: '/images/cake_sale.jpg', alt: 'cake salé'},
		stepList: [
			'Préchauffer le four à 180°C (thermostat 6).',
			'Mélanger la farine et la levure. Ajouter les oeufs, le lait, l\'emmental, et l\'huile.',
			'Ajouter la garniture (les ingrédients restants) puis verser dans le moule à cake.',
			'Enfourner 45 minutes.'
		]
	}
};

module.exports = [
	CAKE_SALE
];
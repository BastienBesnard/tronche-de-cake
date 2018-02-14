const ONGLET_LIST = require('../../common/onglet-list');

const RECEPE = {
	view: 'index',
	path: ONGLET_LIST[1].href,
	group: ONGLET_LIST[1].name,
	title: 'Recette cheesecake',
	meta: {
		description: 'TODO description',
		keywords: 'TODO keywords',
		author: 'Bastien B',
		viewport: 'width=device-width, initial-scale=1.0'
	},
	ongletList: ONGLET_LIST,
	templateName: 'recepe-1',
	recepe: {
		name: 'cheesecake',
		nbCake: {
			value: 8,
			tooltip: 'Recette pour 8 personnes'
		},
		duration: {
			value: '70m',
			tooltipOne: 'Préparation 20 minutes',
			tooltipTwo: 'Cuisson 50 minutes'
		},
		ingredientList: [
			{name: 'Biscuit (ou speculoos)', quantity: '220 grammes', src: '/images/ingredients/biscuit.jpg', alt: 'biscuit'},
			{name: 'Fromage blanc', quantity: '300 grammes', src: '/images/ingredients/fromage_blanc.jpg', alt: 'fromage blanc'},
			{name: 'Fromage frais (Philadelphia, Saint-Morêt, ricotta)', quantity: '200 grammes', src: '/images/ingredients/fromage_frais.jpg', alt: 'fromage frais'},
			{name: 'Sucre en poudre', quantity: '100 grammes', src: '/images/ingredients/sucre_en_poudre.jpg', alt: 'sucre en poudre'},
			{name: 'Beurre', quantity: '80 grammes', src: '/images/ingredients/beurre.jpg', alt: 'beurre'},
			{name: 'Oeufs', quantity: 'x 3', src: '/images/ingredients/oeuf.jpg', alt: 'oeuf'}
		],
		image: {src: '/images/cheesecake.jpg', alt: 'cheesecake'},
		stepList: [
			'Préchauffer le four à 180°C (thermostat 6). Répartir du papier sulfurisé dans le moule.',
			'Mélanger les biscuits émiettés et le beurre fondu. Tapisser le fond du moule avec la préparation et aplanir avec le dos d\'une cuillère. Placer au réfrigérateur.',
			'Battre le fromage blanc et le fromage frais au fouet. Puis mélanger en ajoutant le sucre et les oeufs.',
			'Verser la préparation dans le moule sur le fond de biscuits et enfourner 50 minutes.'
		]
	}
};

module.exports = [
	RECEPE
];
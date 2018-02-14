const ONGLET_LIST = [
	{name: 'Cake salé', href: '/recette-cake-sale'}
];

const OTHER_RECEPE_LIST = [
	{name: 'Cupcake nature', href: '/recette-cake-sale'}
];

const recepe1 = {
	view: 'index',
	path: ONGLET_LIST[0].href,
	group: ONGLET_LIST[0].name,
	title: 'Recette cake',
	meta: {
		description: 'TODO description',
		keywords: 'TODO keywords',
		author: 'TODO author',
		viewport: 'TODO viewport'
	},
	ongletList: ONGLET_LIST,
	templateName: 'recepe-2', // ou recepe-1
	recepe: {
		name: 'RECEPE NAME',
		nbPerson: 5,
		nbCake: null/*{
			value: 6,
			tooltip: 'Recette pour 6 cupcakes'
		}*/,
		duration: {
			value: '1h',
			tooltipOne: 'yolo tooltip',
			tooltipTwo: 'yolotooltip two'
		},
		ingredientList: [
			{name: 'INGREDIENT NAME', quantity: '1 litre', src: 'images/test.jpg', alt: 'TODO'}
		],
		garnishList: [
			{
				name: 'n1', 
				ingredientList: [
					{name: 'INGREDIENT NAME', quantity: '1 litre', src: 'images/test.jpg', alt: 'TODO'}
				]
			}
		],
		image: {src: 'images/test.jpg', alt: 'TODO'},
		stepList: [
			'Casse les oeufs ma gueule'
		]
	},
	leftBar: {
		title: 'Recettes',
		type: 'LINK' // ou LIST: dans ce cas la liste contient des objets de la forme: {name:'name1', subList:['content1', 'content2']}
		list: OTHER_RECEPE_LIST
	}
};
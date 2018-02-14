const ONGLET_LIST = require('./common/onglet-list');

const HOME = {
	view: 'index',
	path: '/',
	title: 'Recette cake',
	meta: {
		description: 'TODO description',
		keywords: 'TODO keywords',
		author: 'TODO author',
		viewport: 'TODO viewport'
	},
	ongletList: ONGLET_LIST,
	templateName: 'home'
};

module.exports = HOME;

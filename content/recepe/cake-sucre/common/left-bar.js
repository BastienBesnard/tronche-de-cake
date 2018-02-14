const ONGLET_LIST = require('../../../common/onglet-list');
const TYPE_LEFT_BAR = require('../../../common/type-left-bar');

const OTHER_RECEPE_LIST = [
	{name: 'Cake citron', href: ONGLET_LIST[2].href},
	{name: 'Cake chocolat', href: '/recette/cake-chocolat'}
];

module.exports = {
	title: 'Cakes sucrés',
	type: TYPE_LEFT_BAR.link,
	list: OTHER_RECEPE_LIST
};
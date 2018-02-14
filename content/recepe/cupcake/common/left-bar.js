const ONGLET_LIST = require('../../../common/onglet-list');
const TYPE_LEFT_BAR = require('../../../common/type-left-bar');

const OTHER_RECEPE_LIST = [
	{name: 'Cupcake nature', href: ONGLET_LIST[0].href},
	{name: 'Cupcake chocolat', href: '/recette/cupcake-chocolat'},
	{name: 'Cupcake vanille', href: '/recette/cupcake-vanille'},
	{name: 'Glaçage', href: '/recette/glacage'}
];

module.exports = {
	title: 'Cupcakes',
	type: TYPE_LEFT_BAR.link,
	list: OTHER_RECEPE_LIST
};
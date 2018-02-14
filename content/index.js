const TRONCHE_DE_CAKE = 'TRONCHE DE CAKE';
const ONGLET_LIST = require('./common/onglet-list');
const HOME = require('./home');
const CAKE_SUCRE_ARRAY = require('./recepe/cake-sucre');
const CAKE_SALE_ARRAY = require('./recepe/cake-sale');
const CAKE_CUPCAKE_ARRAY = require('./recepe/cupcake');
const CAKE_CHEESECAKE_ARRAY = require('./recepe/cheesecake');

let recepesArray = [HOME];
recepesArray = recepesArray.concat(CAKE_SUCRE_ARRAY);
recepesArray = recepesArray.concat(CAKE_SALE_ARRAY);
recepesArray = recepesArray.concat(CAKE_CHEESECAKE_ARRAY);
recepesArray = recepesArray.concat(CAKE_CUPCAKE_ARRAY);
module.exports = recepesArray;
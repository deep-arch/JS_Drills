const { inventory } = require('../../Inventory/inventory');
const { problem4 } = require('../problem4');
const { problem5 } = require('../problem5');
let years = problem4(inventory);
console.log(problem5(years));

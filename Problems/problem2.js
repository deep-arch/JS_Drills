const myModule = require('../Inventory/inventory');
let val= myModule.inventory
module.exports = {
problem2: function (){
i = val.length - 1;
return " Last Car is a"+" "+ val[i].car_make+ " "+val[i].car_model;
}
}
const myModule = require('../Inventory/inventory');
let val= myModule.inventory
module.exports = {
problem3: val.sort(function(a, b){ 
    let fa= a.car_model.toLocaleLowerCase();
    let fb= b.car_model.toLocaleLowerCase();
    if(fa < fb)
    return -1;
    if(fa >fb)
    return 1;
    return 0;
})
}

const myModule = require('../Inventory/inventory');
let val= myModule.inventory
let years=[];
module.exports = {
problem4: function (){
    for(let i=0; i< val.length; i++)
    {
        years.push(val[i].car_year);
    }
    return years;
}
}

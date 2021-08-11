// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

let make = []
module.exports = {
problem6: function(val) {
    for(let i=0; i< val.length; i++)
    {
        if(val[i].car_make == "BMW" || val[i].car_make == "Audi")
        {
            make.push(val[i]);
        }
    }
    return JSON.stringify(make);
}
}
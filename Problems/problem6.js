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
// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of: 
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
module.exports = {
problem1: function (val)
{
    for (var i= 0; i< val.length; i++)
    {
        if (val[i].id == 33)
        {
            return "Car " + val[i].id + " is a " + val[i].car_year+" "+ val[i].car_make+ " "+val[i].car_model;
        } 
    }
}
}

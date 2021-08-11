// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of: 
// "Last car is a *car make goes here* *car model goes here*"

module.exports = {
problem2(val){
    if(val.length==0)
        return []
    let i = val.length - 1;
    return " Last Car is a"+" "+ val[i].car_make+ " "+val[i].car_model;
    }
}
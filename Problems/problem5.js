const myModule = require('./problem4');
let v4= myModule.problem4
let count=0;
module.exports = {
problem5: function (){
    let years = v4()
    for(let i=0; i < years.length; i++)
{
    if(years[i] < 2000)
        count = count + 1;
}
return count;
}
}

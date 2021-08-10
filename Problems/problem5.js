let count=0;
module.exports = {
problem5: function (years){
    for(let i=0; i < years.length; i++)
{
    if(years[i] < 2000)
        count = count + 1;
}
return count;
}
}

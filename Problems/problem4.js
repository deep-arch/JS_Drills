let years=[];
module.exports = {
problem4: function (val)
{
    for(let i=0; i< val.length; i++)
    {
        years.push(val[i].car_year);
    }
    return years;
}
}

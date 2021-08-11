// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

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

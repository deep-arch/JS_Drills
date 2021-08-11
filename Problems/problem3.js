// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function lower(str)                              // to convert uppercase to lower case
{
    for( let i=0; i<=str.length; i++)
    {
        if(str[i]>=65 && str[i]<=90)
           str[i] = str[i] + 32;
    }
    return str;
}

module.exports = {
problem3: function(val)
{
    for( let i=0; i<val.length; i++)             // using Bubble sort
        for( let j=0; j<val.length-i-1;j++)
             {
                if(lower(val[j].car_model)>lower(val[j+1].car_model)) 
                {
                    let temp=val[j+1];
                    val[j+1]=val[j]; 
                    val[j]=temp;
                }
             }
    return val;
}
}


// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

module.exports = {
problem3(val)
{   
  if(val.length == 0)
    return [];
  for( let i = 0; i < val.length; i++)             // using Bubble sort
    for( let j = 0; j < val.length - i - 1; j++)
    {
      if(val[j].car_model.toLowerCase()>val[j + 1].car_model.toLowerCase())
      {
        let temp=val[j + 1];
        val[j + 1]=val[j]; 
        val[j]=temp;
      }
    }
  return val;
}
}


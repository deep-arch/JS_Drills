module.exports = {
problem3: function(val)
{
    for( let i=0; i<val.length;i++)             // using Bubble sort
        for( let j=0; j<val.length-i-1;j++)
             {
                if(val[j].car_model.toLowerCase()>val[j+1].car_model.toLowerCase()) 
                {
                    let temp=val[j+1];
                    val[j+1]=val[j]; 
                    val[j]=temp;
                }
             }
    return val;
}
}

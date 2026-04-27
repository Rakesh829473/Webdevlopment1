//! Requirements:
//? If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
//? If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
//? If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
//? If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
//? Extended voting eligibility checker with additional conditions

var age =12;
var citizen=true;
var registerd = false;
if(age>=18)
{    
    if (!citizen) 
    {
           
     if (!registerd) {
           console.log("they are  eligible to vote")
     }
     
     else
     {
        
        console.log("they are not eligible to vote")
     }
    }
        
     else {

      console.log("they are not eligible to vote")

      


    }

}

else{
    console.log("they are not eligible to vote. younger")
}
//* Simple while loop to count from 1 to 10 🧑‍💻
var start=1;

while(start<=10)
{
    console.log(start);
    start++;

}
//? let's create a table of 5
var start=1;

while(start<=10)
{
    console.log(start*5);
    start++;

}

for(var i=1; i<7;i++)
{
    var pattren="";
    for(var j=0;j<i;j++){
      pattren=pattren+"* "
    }
    console.log(pattren);

}




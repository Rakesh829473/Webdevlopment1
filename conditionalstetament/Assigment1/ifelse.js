// 1. What is the purpose of if statement in 
// JavaScript? 
// The if statement in JavaScript is used for conditional execution of code based on whether a specified condition evaluates to true or false."

let number=11;
if(number>10)
{
    console.log("Greater");
}
else
{
    console.log("Smaller");
}

if(number%2==0)
{
    console.log("Even");
}
else
{
    console.log("odd");
}

// question 4

// . What is the role of else in JavaScript? 
// The else keyword in JavaScript is used to run code when the if condition is false.

let age = 18;
if(age>=18)
{
    console.log("eligible");
}
else
{
    console.log("not eligible");
}

let signal="green";
if(signal=="green")
{
    console.log("go");
}
else
{
    console.log("stop");
}

let num=10;
if(num<0)
{
    console.log("negetive number")
}
else
{
    console.log("positive")
}
if(num%2==0)
{
    console.log("divisible by 2");
}
else
{
    console.log("not divisible");
}

question 9
// . What happens when the condition 
// in if statement is false and there is 
// an else block? 
// if condition check hoti hai
// Agar condition false ho jati hai
// To if block skip ho jata hai
// Aur else block run hota hai

let temperature = 30;

if (temperature > 25) {
    console.log("It is hot");
} else {
    console.log("It is cool");
}

// Condition: temperature > 25
//  30 > 25 → true
// 1. What are jump statements in JavaScript? 
// Jump statements ka use tab hota hai jab hume loop ya block ke andar se control ko turant kisi aur jagah le jana ho.


// In JavaScript, jump statements are used to change the normal flow of program execution.
// Type of 1 break  2. continue

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}


for (let i = 1; i <= 10; i++) {
    console.log("Value:", i);

    if (i === 4) {
        break;
    }
}

//i==4 loop is break and exict the loop

// Iteration 1:
// i = 1
// Condition i <= 10 →  true
// Print → Value: 1
// i === 4 →  fals

// Iteration 2:
// i = 2
// Condition →  true
// Print → Value: 2
// i === 4 →  false

// Iteration 3:
// i = 3
// Condition →  true
// Print → Value: 3
// i === 4 →  false

// Iteration 4:
// i = 4
// Condition →  true
// Print → Value: 4
// i === 4 →  true
// break execute → loop immediately stop


function sum(a,b)
{
    return a+b;
}

let a=10;
let b=20;
sum();
console.log(sum(a,b));

function totalprice(price,tax)
{
    return price+tax;
}

let price=10000;
let tax=2000;
totalprice();
console.log(totalprice(price,tax));

function testReturn() {
    console.log("Start of function");

    return "Function ended";

    // This code will NOT run
    console.log("This will not print");
}

// calling function
// let result = testReturn();
// console.log(result);
// function sum(a,b)
// {
//     return a+b;
// }

// let a=10;
// let b=20;



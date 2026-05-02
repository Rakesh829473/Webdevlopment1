// console.log("hello world");

// let a=10;
// console.log(a)

// let b=20;

// a=10;

// var x=10;

// var x=20;
var n = 10;
for (var i = 1; i <= n; i++) {
  console.log(2 + "*" + i + "=" + 2 * i);
}

let a = [24, 58, 33, 86, 96, 12, 53, 23, 32, 100];

for (var i = 0; i < 10; i++) {
  console.log(a[i]);
}

let j = 0;
while (j < 10) {
  console.log(a[j]);
  j++;
}

var r = 1;
while (r < 10) {
  console.log(2 + "*" + r + "=" + 2 * r);
  r++;
}
let age = 20;
if (age > 18) {
  console.log(" you can vot");
} else {
  console.log("not elisbale for vot");
}

let gread = 60;

if (90 > gread) {
  console.log("A+");
}
if (75 > gread) {
  console.log("b");
}
if (50 > gread || 75 > gread) {
  console.log("c");
} else {
  console.log("fail");
}

let password = "abcde";
let usernmae = "12345";
if (password === "abcde" && usernmae === "12345") {
  console.log("login succleful");
} else {
  console.log("loginf not sufullle");
}

let data;
let name = "";
data = name || "N/A";
console.log(data);

let choice = 1;
switch (choice) {
  case 1: {
    console.log("coffee");
    break;
  }
  case 2: {
    console.log("Tea");
    break;
  }
  case 3: {
    console.log("Lossi");
  }
  default: {
    console.log("pani");
  }
}



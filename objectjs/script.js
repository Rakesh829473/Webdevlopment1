// let fs=[
//     ["Rajvardhan" ,"18-11-1997",72094836849,"BHopal","Techar"],
//     ["Rajvardhan" ,"18-11-1997",72094836849,"BHopal","Techar"],
//     ["Rajvardhan" ,"18-11-1997",72094836849,"BHopal","Techar"],
//     ["Rajvardhan" ,"18-11-1997",72094836849,"BHopal","Techar"]
// ]

// for.forEach(element => {

//     console.log(element);
    
// });

let people = [
    {
        name: "Rakesh Kumar",
        phone: "9876543210",
        profession: "Student",
        city: "Patna"
    },
    {
        name: "Aman Singh",
        phone: "9123456780",
        profession: "Teacher",
        city: "Delhi"
    },
    {
        name: "Rahul Sharma",
        phone: "9988776655",
        profession: "Engineer",
        city: "Mumbai"
    },
    {
        name: "Priya Verma",
        phone: "9090909090",
        profession: "Doctor",
        city: "Lucknow"
    },
    {
        name: "Neha Gupta",
        phone: "9001122334",
        profession: "Designer",
        city: "Bhopal"
    }
];
people.map(function(person) {
    console.log(person.phone);
});

// people.forEach(function(person) {
//     console.log(person.phone);
// });
// console.log(people);
// console.log(people[1]["name"]);
// console.log(people[1].name);
let vishal ={
        name: "vishal Gupta",
        phone: "9001122334",
        profession: "Designer",
        city: "Bhopal"
    };

    console.log(Object.keys(vishal));
     console.log(Object.values(vishal));
     console.log(Object.entries(vishal));

     let ar=[22,23,45,89,8,9,49,45,8,7,];

    ar.sort((a,b) => a-b);
   console.log(ar);
   
   console.log(ar.find((val) => val >20));
   console.log(ar.findIndex((val) => val >20));
   console.log(ar.findLastIndex((val) => val >20));

let ar2=[22,23,45,89,8,9,49,45,8,7,];

console.log(ar2.filter((val) => val >20));

console.log(ar2.slice(0,7));

let ab="This is web-devlopment Class";
console.log(ab.split(" "));
console.log(ab.split("-"));
console.log(ab.split("is"));

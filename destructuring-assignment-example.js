//let names = ["alpha", "beta", "gamma", "delta"];
//nolet [firstName, secondName] = names;


//let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
//let [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];

let [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];




console.log(firstName);
//console.log(secondName);
//console.log(thirdName);
console.log(lastName);

// node destructuring-assignment-example.js

let marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
let { section1 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1);
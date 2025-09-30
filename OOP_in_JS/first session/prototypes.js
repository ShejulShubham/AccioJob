// prototypes
let user1 = {
    firstName: "Rohit",
    lastName: "Shah",
    contact: "555555"
}

let user2 = {
    firstName: "Amit",
    lastName: "Gupta",
    contact: "5486561"
}

let user4 = Object.create(user1);

console.log(user2); 

console.log(user1.firstName);
console.log(user4.firstName);

console.log(user1.__proto__);
console.log(user4.__proto__);


let str = "Learning is fun";
console.log(str.__proto__.__proto__.__proto__);

let n = 4;
console.log(n.__proto__);

let str2 = new String("Another string");

// console.log(str2.__proto__);
console.log(Object.getPrototypeOf(str2));
// String
// Boolean
// Number


// // proto

// let u1 = {
//     x1: "inside u1"
// }

// let u2 = {
//     x2: "inside u2",
//     __proto__:u1
// }

// let u3 = {
//     x3: "inside u3",
//     __proto__:u2
// }

// console.log(u3.x1);


// class proto

class Mobile {
    constructor(color, engine){
        this.color = color;
        this.engine = engine;
    }
}

let mobile = new Mobile("white", "v8");

console.log(mobile.__proto__);

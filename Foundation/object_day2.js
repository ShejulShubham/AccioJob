//----------------------------------

// Objects in javascript

const person = {
  name: "shubham",
  age: 23,
  isGraduated: true,
  greet: function () {
    return "Hello";
  },
};

// console.log(person.name);
// console.log(person.age);
// console.log(person.isGraduated);

// console.log(person.greet());

// let { name, age, place } = person;

// console.log(name);

//----------------------------------

// Spread operator

// let arr = [100, 200, 300, 400];

// let [one, two, three, four] = arr;

// console.log(two, four);

//----------------------------------

// Rest operator

// function sum(first, ...numbers) {
//   let sum = first;

//   for (let n of numbers) {
//     sum = sum + n;
//   }

//   return sum;
// }

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(1, 1, 1, 1, 1, 1, 1, 1, 1, 1));

// let user = {name:"alice", age: 26, city:"mumbai"};

// let {age, ...rest} = user;

// console.log(age);
// console.log(rest);

//----------------------------------

// hasOwnProperty

console.log(person.hasOwnProperty("name"))
console.log(person.hasOwnProperty("email"))

//----------------------------------

// MAP - data structure

// let m1 = new Map();

// m1.set("name", "shubham");
// m1.set(1, 25);

// console.log(m1);
// console.log(m1.get("age"));
// console.log(m1.has("email"));
// console.log(m1.keys());
// console.log(m1.values());
// console.log(m1.entries());

// for(let [key, value] of m1){
//   console.log(key, value);
// }

// m1.forEach((value, key)=>{
//   console.log(key, value);
// })


//----------------------------------

// JSON 


let json = JSON.stringify(person);

console.log(json);

let object = JSON.parse(json);

console.log(object);




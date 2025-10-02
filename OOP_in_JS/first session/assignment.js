// ASSIGNMENT 1

// const p = {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   },

//     name: "shubham",
//     age: 22,

//   setAge(age) {
//     this.age = age;
//   },

//   info() {
//     return `${this.name} (${this.age})`;
//   },
// };

// p.setAge(88);

// console.log(p.info());

// ASSIGNMENT 2

// function CounterMaker(startValue) {
//   this.count = Number(startValue);
// }

// CounterMaker.prototype.increase = function () {
//   this.count++;
// };

// CounterMaker.prototype.decrease = function () {
//   this.count--;
// };

// CounterMaker.prototype.value = function () {
//   return this.count;
// };

// const counter = new CounterMaker(5);

// console.log("Initial value:",counter.value());

// counter.increase();
// counter.increase();
// console.log("plus 2:", counter.value());

// counter.decrease();
// counter.decrease();
// counter.decrease();
// console.log("minus 3", counter.value());

//ASSIGNMENT 4

// const base = {
//     describe: function(){
//         return `Title: ${this.title}`
//     }
// }

// const child = Object.create(base);

// child.title = "The Unburnt";

// console.log(child.describe());

// ASSIGNMENT 5

// const p = "hello";

// const w = new String("hello!");

// console.log(typeof p);
// console.log(typeof w);

// String.prototype.lastChar = function () {
//   // return this.charAt(this.length-1);
//   return this[this.length - 1];
// };

// console.log(p.lastChar());
// console.log(w.lastChar());

//ASSIGNMENT 6

// const grand = {
//   g: "Aerys The Cruel",
// };

// const parent = {
//   p: "Rhaegar DragonBorn",
// };

// const child = {
//   c: "Lord Jon Snow",
// };

// child.__proto__ = parent;
// parent.__proto__ = grand;

// console.log(child.g);
// console.log(child.p);
// console.log(child.c);


// parent.color = "lightViolet"
// child.color = "darkGrey"

// console.log("parent color: ", parent.color);
// console.log("child color: ", child.color);



// ASSIGNMENT 7

// class Greeting{
//   constructor(name){
//     this.name = name;
//   }

//   hello = function(){
//     return `Hello, ${this.name}`;
//   }
// }

// Greeting.prototype.bye = function(){
//   return `Fare thee well, ${this.name}`;
// }

// const g = new Greeting("Tyrion Lannister");

// console.log(g.hello());
// console.log(g.bye());

// ASSIGNMENT 8

function Kindly(kind){
  this.kind = kind;
}

Kindly.prototype.sound = function(){

}

function Setting(name){
  this.name = name;
}

const kind = new Kindly("Rhoello");

Setting.prototype = kind;

Setting.prototype.sound = function(){
  return "made in setting";
}

const setting = new Setting("Davos Seaworth");

console.log(setting.sound());
function sayHi() { return "Hi!"; }
const greet = sayHi;
const message = sayHi();
console.log(typeof greet,"\n and", typeof message);

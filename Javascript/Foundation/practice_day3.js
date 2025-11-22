// let deposit = 5;

// if (deposit == 0) {
//   console.log("zero");
// } else if (deposit < 0) {
//   console.log("negative");
// } else {
//   console.log("positive");
// }

// let username = "admin";
// let password = "1234";

// if(username === "admin" && password === "1234"){
//     console.log("grant admin access");
// } else {
//     console.log("do not grant admin access");
// }

// const year = 2028;

// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log("leap year");
//     } else {
//       console.log("Not leap year");
//     }
//   } else {
//     console.log("leap year");
//   }
// } else {
//   console.log("Not leap year");
// }

// const age = 12;

// const access = (age > 17) ? "Adult" : "Minor";

// console.log(access);

// const day = 9;

// switch(day){
//     case 1:
//         console.log("Monday");
//     break;

//     case 2:
//         console.log("Tuesday");
//     break;

//     case 3:
//         console.log("Wednesday");
//     break;

//     case 4:
//         console.log("Thursday");
//     break;

//     case 5:
//         console.log("Friday");
//     break;

//     case 6:
//         console.log("Saturday");
//     break;

//     case 7:
//         console.log("Sunday");
//     break;

//     default:
//         console.log("enter valid number");
// }

// var signal = "red";
// // var signal = "yellow";
// // var signal = "green";

// switch(signal){
//     case "red":
//         console.log("STOP");
//         break;
//     case "green":
//         console.log("GO");
//         break;
//     case "yellow":
//         console.log("GO SLOW");
//         break;
//     default:
//         console.log("invalid");
// }

// const recharge = 125;

// if(recharge % 5 === 0){
//     console.log("valid recharge");
// } else {
//     console.log("invalid recharge");
// }

// const password = "shejulshubham";

// if (password.length > 8) {
//   console.log("strong password");
// } else {
//   console.log("weak password");
// }

// const number = 17;

// if(number % 3 === 0 && number % 5 === 0){
//     console.log("FizzBuzz");
// }else if(number % 3 === 0){
//     console.log("Fizz");

// }else if(number % 5 === 0){
//     console.log("Buzz");

// }else {
//     console.log(number);
// }

// const temperature = 30;

// if(temperature < 20){
//     console.log("Cold")

// }else if(temperature > 19 && temperature < 30){
//     console.log("Rainy")

// }else{
//     console.log("Hot")
// }

// let char = 'b';
// char = char.toUpperCase();

// if(char >= 'a' && char <= 'z'){
//     console.log("Lower case");
// }else {
//     console.log("Upper case");
// }

// const score = 50;

// if(score > 9 && score < 51){
//     console.log("accept");
// }else {
//     console.log("reject");
// }

// const amount = 1000;

// if(amount > 999){
//     const discount = amount / 10;
//     console.log("discount applied!");
//     console.log("payable amount: ", amount - discount);
// }else {
//     console.log("no discount");
//     console.log("payable amount: ", amount);
// }

// const age = 1;

// if (age > 39) {
//   console.log("Senior citizen");
// } else if (age > 17) {
//   console.log("Adult");
// } else if (age > 9) {
//   console.log("Teenager");
// } else {
//   console.log("Child");
// }

// const time = 1;

// if (time < 12 && time > 5) {
//   console.log("Good Morning");
// } else if (time < 18 && time > 11) {
//   console.log("Good Afternoon");
// } else if (time < 24 && time > 17) {
//   console.log("Good Evening");
// } else {
//     console.log("Good Night");
// }


const email = "";
const phone = 12;

if(email.length > 0 || phone.length > 0){
    console.log("accept login");
}else {
    console.log("reject login");
}

console.log(phone.length);
// const ch = "5";

// console.log(ch.toUpperCase());


//Q2. print 1 to 10 

// let n = 1;

// for(let i = 1; i <= 10; i++){
//     let square = i*i;

//     console.log(square);

// }

//Q3. Sum of even numbers till 50
// let sum = 0;

// for(let i = 0; i <= 50; i += 2){
//     if(i % 2 === 0){
//         sum += i;
//     }
// }

// console.log(`sum of even numbers till 50 is ${sum}`);

//Q4. Battery charging display

// let batteryPercentage = 10;

// while(batteryPercentage <= 100){
//     console.log(`Battery percentage is: ${batteryPercentage}`);

//     batteryPercentage += 10;
// }

//Q5 Countdown timer

// let count = 10;

// while(count > 0){
//     console.log(`Timer is ${count}`);
//     count--;
// }

//Q. Multiplication table
// const table = 6;

// for(let i = 1; i <= 10; i++){
//     console.log(`${i*table}`);
// }


//Q. Calculate the sum of digits of a number

// let n = 1234;
// let sum = 0;

// while(n > 0){
//     let lastDigit = n % 10;
//     console.log(lastDigit);
//     sum += lastDigit;

//     n = Math.floor(n / 10);
// }

// console.log(`sum of all digits ${sum}`);


//Q. Print all characters of a string one by one

// let string = "Hello";

// for(let i = 0; i < string.length; i++){
//     console.log(string[i]);
// }

//Q. find factorial of a number 

// const n = 5;
// let factorial = 1;

// for(let i = 2; i <= n; i++){
//     factorial *= i;    
// }

// console.log(factorial);


//Q. count numbers divisible by 7

// let count = 0;

// let limit = 100;

// for(let i = 1; i <= limit; i++){
//     if(i % 7 === 0){
//         count++;
//     }
// }

// console.log(`between 1 to ${limit} total ${count} are divisible by 7`);

//Q. reverse a given number and check for palindrome


const number = 121;
let n = number;


// step1: reverse the number
let reverse = 0;
while(n > 0){
    let lastDigit = n % 10;
    reverse = (reverse * 10) + lastDigit;

    n = Math.floor(n / 10);
}

console.log(`reverse number is ${reverse}`);

// step2: palindrome check
if(number === reverse){
    console.log("number is palindrome");
}else{
    console.log("number is NOT palindrome");
}
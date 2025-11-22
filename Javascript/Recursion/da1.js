// function pd(n){
//     console.log(n);
//     pd(n);
// }

// pd(5);

// function print(n) {
//     if (n == 0) return;
//     console.log(n);
//     print(n-1);
//     console.log(n);

// }

// print(5);

//Q1. print: 1 2 3 4 5 5 4 3 2 1

// function print(n){
//     pi(n);
//     pd(n);
// }

// function pi(n){
//     if(n == 0)return;
//     pi(n-1);
//     console.log(n);
// }

// function pd(n){
//     if(n == 0)return;
//     console.log(n);
//     pi(n-1);
// }

// print(5);

function count(n) {
  for (let i = 0; i < n; i++) {}

  return "completed";
}

function countRecursion(n) {
  if (n == 0) {
    console.log("completed");
    return;
  }

  countRecursion(n - 1);
}

// console.log(count(100));
// console.log(countRecursion(100));
countRecursion(100);

// function power(x, n){
//     if(n == 0) return 1;

//     return x * power(x, n-1);
// }

// console.log(power(2, 16));

// let arr = [2, 4, 6, 8];

// function count(arr, index){
//     if(index < 0){
//         return;
//     }

//     count(arr, index - 1);
//     console.log(arr[index]);
// }

// count(arr, arr.length-1);

let arr = [5, 3, 9, 7, 8];

function findMax(arr, index) {
  if (index === arr.length) return 0;

  return Math.max(arr[index], findMax(arr, index + 1));
}

console.log(findMax(arr, 0));

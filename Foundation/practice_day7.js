// let sum = (a, b) => {
//     console.log(a)
//     console.log(b)
//     let result = a + b;
//     console.log(result);
//     return result;
// };

// // let sum = a => a+5;

// let result = sum(7);

// console.log(result);

let a = 10;
var b = 20;

function hello(){
    console.log(a);
    console.log(b);

    let a = 100;
    var b = 200;

    console.log(a);
    console.log(b);
}

hello();
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
// ];

// let transposed = [];

// const rows = matrix.length;
// const cols = matrix[0].length;

// for(let i = 0; i < cols; i++){
//     transposed[i] = [];
//     for(let j = 0; j < rows; j++){
//         transposed[i][j] = matrix[j][i];
//     }
// }

// console.log(transposed);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
// ];

// result = [];

// for (let i = 0; i < matrix.length; i++) {
//   if (i % 2 !== 0) {
//     matrix[i].reverse();
//   }

//   for (let j = 0; j < matrix[i].length; j++) {
//     result.push(matrix[i][j]);
//   }
// }

// console.log(result.join(", "));


let arr = [1, 2, 3];

let sum = (arr.length*(arr.length-1));

console.log(sum);
// pattern 1

// const n = 5;

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         process.stdout.write("*");
//     }
//     console.log();
// }

// pattern 2

// const n = 5;

// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("*");
//     }
//     console.log();
// }

// pattern 3

// const n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j.toString());
//   }
//   process.stdout.write("\n");
// }

// pattern 4

// const n = 5;

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(String(i));
//     }
//     console.log();
// }

// pattern 5

// const n = 5;

// for(let i = 1; i <= n; i++){
//     for(let j = n-i; j >= 0; j--){
//         process.stdout.write("* ");
//     }

//     console.log();
// }

// pattern 6

// const n = 5;

// for(let i = n; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(j.toString());
//     }

//     console.log();
// }

// pattern 7

// const n = 5;

// for(let i = 1; i <= 5; i++){
//     for(let j = n-i; j > 0; j--){
//         process.stdout.write(" ");
//     }

//     for(let k = 0; k < i*2-1; k += 2){
//         process.stdout.write(" *");
//     }

//     console.log();
// }

// let space = n-1;
// let star = 1;

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= space; j++){
//         process.stdout.write(" ");
//     }

//     for(let k = 1; k <= star; k++){
//         process.stdout.write("*");
//     }

//     space--;
//     star += 2;
//     console.log();
// }

// pattern 8

// const n = 5;

// let space = 0;

// let star = n*2-1;

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= space; j++){
//         process.stdout.write(" ");
//     }

//     for(let k = 1; k <= star; k++){
//         process.stdout.write("*");
//     }

//     space++;
//     star -= 2;
//     console.log();
// }

// pattern 9

// const n = 5;

// let space = n-1;
// let star = 1;

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= space; j++){
//         process.stdout.write(" ");
//     }

//     for(let k = 1; k <= star; k++){
//         process.stdout.write("*");
//     }

//     space--;
//     star += 2;
//     console.log();
// }

// space = 0;
// star = n*2-1;

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= space; j++){
//         process.stdout.write(" ");
//     }

//     for(let k = 1; k <= star; k++){
//         process.stdout.write("*");
//     }

//     space++;
//     star -= 2;
//     console.log();
// }

// const n = 3;

// let space = n-1;
// let star = 1;

// for(let i = 1; i <= n*2; i++){
//     for(let j = 1; j <= space; j++){
//         process.stdout.write(" ");
//     }

//     for(let k = 1; k <= star; k++){
//         process.stdout.write("*");
//     }

//     if(i <= n-1){
//         space--;
//         star += 2;
//     }else if( i == n){
//         space = 0;
//         star = 2*n-1;
//     } else {
//         space++;
//         star -= 2;
//     }

//     console.log();
// }

// pattern 10

// *
// **
// ***
// ****
// ***
// **
// *

const n = 4;

let star = 1;
for(let i = 1; i <= n*2-1; i++){
    for(let j = 1; j <= star; j++){
        process.stdout.write("*");
    }

    if(i >= n){
        star--;
    }else {
        star++;
    }

    console.log();
}


// diamond pattern 

// const rows = 5;

// let middle = Math.floor(rows / 2);
// let space = rows-1;
// let star = 1;

// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= space; j++) {
//     process.stdout.write(" ");
//   }

//   for (let k = 1; k <= star; k++) {
//     process.stdout.write("* ");
//   }

//   if (i < middle) {
//     space -= 2;
//     star += 2;
//   } else if (i === middle) {
//     space = 0;
//     star = rows;
//   } else {
//     space += 2;
//     star -= 2;
//   }

//   console.log();
// }

// function searchElement(arr, n){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == n){
//             return i;
//         }
//     }

//     return -1;
// }

// let find = 8;
// let find1 = 0;

// let arr = [1,3,4,5,2,7,9,8];

// console.log(`fount number ${find} at index: ${searchElement(arr, find)}`);
// console.log(`fount number ${find1} at index: ${searchElement(arr, find1)}`);

// function binarySearch(arr, n) {
//     let left = 0;
//     let right = arr.length-1;

//     while(left <= right){
//         let mid = Math.floor((left+right)/2);

//         if(arr[mid] == n){
//             return mid;
//         }else if(arr[mid] > n){
//             right = mid-1;
//         }else{
//             left = mid+1;
//         }
//     }

//     return -1;
// }

// let find = 9;
// let find1 = 10;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(`fount number ${find} at index: ${binarySearch(arr, find)}`);
// console.log(`fount number ${find1} at index: ${binarySearch(arr, find1)}`);

// let set = new Set();

// set.add(4);
// set.add("Shubham");
// set.add(false);
// set.add(true);

// console.log("after adding:", set);
// console.log("size of set", set.size);

// set.delete(4);
// set.delete(false);

// console.log("after delete", set);

// console.log("has(\"Shubham\")", set.has("Shubham"));

// set.clear();

// console.log("after clear()", set);

// for(let ele of set){
//     console.log(ele);
// }

// console.log();

// set.forEach((value)=>console.log("index:", index, "value:",value));

// let arr = [
//   [1, "a"],
//   [2, "b"],
//   [3, "c"],
// ];
// // let arr = ['a', 'b', 'c']

// let map = new Map(arr);

// map.set(1, "hey ");
// map.set(2, "this is ");
// map.set(3, "javascript");

// console.log(map.keys());
// console.log(map.values());

// map[4] = "!!!";

// console.log(map);

// console.log("get(4) ", map.get(4));

// map.delete(2);

// console.log("delete(2)", map);

// console.log("size()", map.size);

// map.clear();

// console.log("after clear()",map);

// for(let [value, key] of map){
//     console.log(value, key);
// }

// map.forEach((value, key)=>{console.log(value, key)});

// console.log("entries");
// for(let [key, value] of map.entries()){
//     console.log(key, value);
// }

// console.log("keys");
// for(let key of map.keys()){
//     console.log(key);
// }

// console.log("values");
// for(let value of map.values()){
//     console.log(value);
// }

// count number of unique elements

// let arr = [1, 3, 3, 4, 5, 4, 4, 6, 9, 9];

// let set = new Set();

// arr.forEach((value) => set.add(value));

// console.log("Number of unique elements: ", set.size);

// let arr = [1, 3, 3, 4, 5, 4, 4, 6, 9, 9];
// let arr1 = [1, 2, 3, 4, 5, 6, 9];

// function containsDuplicate(arr) {
//   let container = new Set(arr);

//   return !(container.size === arr.length);

//   for(let n of arr){
//     if(container.has(n)){return true};

//     container.add(n);
//   }

//   return false;
// }

// console.log("is arr contains duplicate: ", containsDuplicate(arr));
// console.log("is arr1 contains duplicate: ", containsDuplicate(arr1));

// let string =
//   "apple a day keeps doctor away, that's how the saying goes but new research shows some question marks";

// function countFrequency(string) {
//   let frequency = new Map();

//   for (let ch of string) {
//     if (/[a-zA-Z]/.test(ch)) {
//       if (frequency.has(ch)) {
//         frequency.set(ch, frequency.get(ch) + 1);
//       } else {
//         frequency.set(ch, 1);
//       }
//     }
//   }

//   return frequency;
// }

// console.log(countFrequency(string));

let arr = [1, 3, 4, 5, 3, 2, 6, 5];

function findFirstRepeatingElement(arr) {
  let set = new Set();

  for (let n of arr) {
    if (set.has(n)) {
      return n;
    }

    set.add(n);
  }

  return null;
}

function findLastRepeatingElement(arr) {
  let set = new Set();
  let lastRepeat = -1;

  for (let n of arr) {
    if (set.has(n)) {
      lastRepeat = n;
    }

    set.add(n);
  }

  return lastRepeat;
}

console.log("first repeating element: ", findFirstRepeatingElement(arr));


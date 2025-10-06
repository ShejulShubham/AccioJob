

console.log("one");
console.log("two");
setTimeout(() => {
    console.log("three");
}, 3000);
console.log("four");
// 200 lines (sync)


// output
// -------------
// one
// two
// four
// three

let arr = [2, 4, 6];

arr.forEach((elem) => {
    console.log(elem);
});





// callback
function fetchData(url, callback) {
    setTimeout(() => {
        let data = {message: "here is data required"};
        callback(data);
    }, 2000);
}

function handleData(data) {
    console.log(data);
}

fetchData("example.com/data", handleData);



// promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = {message: "here is data required"};
            // let data = null;
            if(data) {
                resolve(data);
            } else {
                reject(new Error("Error fetching the data"));
            }
        }, 2000);
    });
}

// then and catch
fetchData("example.com.data")
.then((data) => {
    console.log(data.message);
})
.catch((error) => {
    console.log(error);
});

// async await

// fetch

// then and catch for fetch
 
// async await for fetch
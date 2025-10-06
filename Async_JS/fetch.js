const url = "https://jsonplaceholder.typicode.com/users";

// fetch
// then and catch for fetch
fetch(url)
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})

// fetch
// async await for fetch

async function fetching(){
    try {
        let data = await fetch(url);
        // let d = data.json();
        let d = await data.json();
        console.log(d);

    }catch(error){
        console.log(error);
    }
}

fetching();

const baseURL = "https://jsonplaceholder.typicode.com";

async function fetchSomething(){
    try {
        const response = await fetch(`${baseURL}/posts/1`);
        const post = await response.json();

        const res = await fetch(`${baseURL}/users/${post.userId}`);
        const user = await res.json();

        console.log("author: ", user.name);
    } catch (error){
        console.log("Error:", error.message);
    }
}

fetchSomething();
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // let data = {message: "here is data required"};
            let data = null;
            if(data) {
                resolve(data);
            } else {
                reject(new Error("Error fetching the data"));
            }
        }, 2000);
    });
}

async function printData(){
    try {
        // await keyword will automatically give data or error;
        let data = await fetchData("example.com/data");
        console.log(data.message);
    }catch(error){
        console.log(error.message);
    }
}

printData();
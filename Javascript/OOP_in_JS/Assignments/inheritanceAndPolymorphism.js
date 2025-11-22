

// class Storage {
//     save(){
//         console.log("data saved to storage!");
//     }
// }

// class MemoryStorage extends Storage {
//     constructor(){
//         super();
//         this.memory = [];
//     }

//     save(data){
//         this.memory.push(data);
//         console.log("data saved into memory!")
//     }
// }

// class FileStorage extends Storage {
//     save(data){
//         console.log("data saved to File!")
//     }
// }

// let storage = [
//     new MemoryStorage(),
//     new FileStorage()
// ]

// storage.forEach(storage => storage)

//----------------------------------------------
//----------------------------------------------

class Media {
    constructor(){

    }
}

//---------------------------------------------
//---------------------------------------------


class UserAuth {
    #passwordHash = "";

    stringReverse(password=""){
        let charPassword = password.split("");

        let result = charPassword.reverse();

        return result.join("");
    }

    setPassword(password = ""){

        this.#passwordHash = this.stringReverse(password);

        console.log("password saved successfully!");
    }

    checkPassword(password=""){
        
        if(this.#passwordHash === this.stringReverse(password)){
            console.log("password is correct, proceed to login");

        }else {
            console.log("password is incorrect!");
        }
        

    }
}


let user = new UserAuth();

user.setPassword("jamie");
user.checkPassword("jamie");
user.checkPassword("wrong");
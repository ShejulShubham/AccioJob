

// object literal
let user = {
    firstName: "Rohit",
    lastName: "Shah",
    contact: "55555",

    getName: function() {
        console.log(this.firstName, this.lastName);
    },
}

user.getName();

let user3 = {
    firstName: "Amit",
    lastName: "Mehta",
    contact: "88888",

    getName: function() {
        console.log("Rohit Shah");
    },
}

user.getName();
// user.getContact();

console.log(user.firstName);

let myContact = "contact";

console.log(user["firstName"]);





// constructor function

function User(firstName, lastName, contact) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.contact = contact;
    // return this;
}

let user1 = new User("Rohit", "Shah", "5555555");
let user2 = new User("Jenil", "Gupta", "8989999");
console.log(user1);
console.log(user1.firstName);
console.log(user2);
console.log(user2.contact);

let user4 = User("rohit", "mane", "66666");
console.log(user4);

// classes
class UserC {
    constructor(firstName, lastName, contact) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.contact = contact;
    }

    getName() {
        console.log(this.firstName, this.lastName);
    }

}

const user5 = new UserC("Rohit", "Shah", "55555");
console.log(user1);
console.log(user1.contact);
// Classes in Javascript
class User {
    constructor(userName, password, email){
        this.userName = userName;
        this.password = password;
        this.email = email
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.userName.toUpperCase()}` 
    }
} 

const user1 = new User("vishal", "Password123", "vishal@gmail.com");
console.log(user1.encryptPassword());

const user2 = new User("Shiv", "Pass@143", "Shivam@gmail.com");
console.log(user2.changeUsername());

//Behind the Scene

function User(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.userName}abde`
}

User.prototype.changeUsername = function(){
    return `${this.userName.toLowerCase()}`
}

const user3 = new User("Shyam", "Shyam@gmail.com", "Shyam@143");
console.log(user3.encryptPassword());

const user4 = new User("Demogod", "DemoGod@gmail.go", "PassFUck@#43");
console.log(user4.changeUsername());
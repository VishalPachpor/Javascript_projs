class User {
    constructor(userName) {
        this.userName = userName
    }
    logMe() {
        console.log(`The userName is ${this.userName}`)
    }

}

class Teacher extends User {
    constructor(userName, email, password){
        super(userName);
        this.email = email;
        this.password = password
    }

    addCourse() {
        console.log(`This course is made by ${this.userName}`);
    }
}

const user1 = new Teacher("Vishal", "vishal@gmail.com", "Password123");

user1.addCourse();
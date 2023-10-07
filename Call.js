// Calls in javascript

function SetUsername(username){
    this.username = username;
    console.log("called")
}

function createUser(username, email, password){
    // .call will pass current execution context to another function 
    SetUsername.call(this, username);

    this.email = email
    this.password = password
}

const user = new createUser("Vishal", "Vishalpatil080502@gmail.com", "Password")

console.log(user)
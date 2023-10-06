// Promise in two parts
const promiseOne = new Promise(function(resolve, reject){
    // DB calls
    // Network calls
    setTimeout(function(){
        console.log("Async task completed");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
})

// promise in one part
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Second async task completed");
        resolve()
    }, 1000)
}).then(function(){
    console.log("promise 2 consumed")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:"Vishal", email:"Vishalpatil080502@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);

})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Vishal", password:"Password123"});
        }else{
            reject("Something went wrong");
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.password;
})
.then(function(password){
    console.log(password)
})
.catch(function(error){
    console.log(`Error: ${error}`)
})
.finally(function(){
    console.log("The promise is either resolved or got error");
})

// Promise with async await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({language:"Javascript", tutor:"Hitesh Choudhary"})
        }else{
            reject("An error occoured in javascript")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();
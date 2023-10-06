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

    },1000)
})

promiseFour.then(function(){

})
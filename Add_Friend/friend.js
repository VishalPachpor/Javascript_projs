const friendsStat = document.querySelector("h2")

const add = document.getElementById("addBtn");

add.addEventListener("click", function(e){
    friendsStat.innerHTML = "Friends"
    friendsStat.style.color = "green"
})

const removeFrnd = document.getElementById("remBtn");

removeFrnd.addEventListener("click",function(e){
    friendsStat.innerHTML = "Unknown";
    friendsStat.style.color = "red"
});


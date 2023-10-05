const friendsStat = document.querySelector("h2")
const add = document.getElementById("addBtn");
let check = 0;

add.addEventListener("click", function(e){
    if(check == 0){
        friendsStat.innerHTML = "Friends"
        friendsStat.style.color = "green"
        check = 1;
    }else{
        friendsStat.innerHTML = "Stranger"
        friendsStat.style.color = " Red"
        check = 0;
    }
   
})



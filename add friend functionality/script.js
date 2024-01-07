var istatus =document.querySelector("h5")
var btn = document.querySelector("#add")
var removefriend = document.querySelector("#remove")
var check = 0;

btn.addEventListener("click",function(){
    if (check==0){
        istatus.innerHTML= "friends"
        istatus.style.color="cornflowerblue"
        btn.innerHTML = "remove friend"
        console.log("hahahahah")
        check = 1
    }else{
        istatus.innerHTML= "stranger"
        istatus.style.color="red"
        btn.innerHTML = "add friend"

        console.log("anger ")
        check = 0
    }
   
})
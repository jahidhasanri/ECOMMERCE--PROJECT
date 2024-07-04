var menuicon=document.getElementById("menu-icon")
var menu =document.getElementById("menu")
menuicon.addEventListener("click",()=>{
 if(menu.className === "hidden")
 {
    menu?.classList.remove("hidden");
 }
 else{
    menu.classList.add("hidden");
 }
})

   
    






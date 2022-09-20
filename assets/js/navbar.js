let navbar_hambuger_btn = document.getElementById("navbar_hambuger_btn");
let navbar_nav = document.getElementById("navbar_nav");

navbar_hambuger_btn.addEventListener("click",function(){
   navbar_nav.classList.toggle("toogle_navbar_nav");
});
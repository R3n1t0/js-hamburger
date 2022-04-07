const logo = document.querySelector(".header-left")
const icon = document.querySelector (".fas")
const haMenu = document.querySelector (".hamburger-menu");
const close = document.querySelector (".close");


icon.addEventListener("click",function(){

  haMenu.classList.add("active")

});

close.addEventListener("click",function(){

  haMenu.classList.remove("active")

});







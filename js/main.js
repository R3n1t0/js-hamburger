
const icon = document.querySelector (".fas")
const close = document.querySelector (".close");


icon.addEventListener("click",function(){

  const haMenu = document.querySelector (".hamburger-menu");
  haMenu.classList.add("active")

});

close.addEventListener("click",function(){

  const haMenu = document.querySelector (".hamburger-menu");
  haMenu.classList.remove("active")

});







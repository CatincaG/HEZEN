/* HAMBERGUR MENU */

let hambBtn = document.querySelector ('.hamburger')
let menuSide = document.querySelector ('.menu_sidebar')

hambBtn.addEventListener(
  'click',
  function openclose(){
    menuSide.classList.toggle('sidebar_close')
    menuSide.classList.toggle('sidebar_open')
  }
)

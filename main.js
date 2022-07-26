var nav = document.getElementById("main-nav");
var nav_close_btn = document.getElementById("nav-close");
var nav_hamburger = document.getElementById("nav-hamburger");

/* Set appropriate nav display depending on screen size */
function check_window(){
    var w = window.innerWidth;
    if(w > 719){
        nav_hamburger.classList.add("hide")
        nav_close_btn.classList.add("hide")
        nav.classList.remove('sidenav');
        nav.classList.add("main-nav");
        nav.removeAttribute("style");
    } else {
        nav_hamburger.classList.remove("hide")
        nav_close_btn.classList.add("hide")
        nav.classList.add('sidenav');
        nav.classList.remove("main-nav");
    }
}

/* Listen for window resize and handle */
window.addEventListener('resize', check_window);

/* Set class and style to show side nav element  */
function openNav() {
    nav.classList.remove('main-nav');
    nav.classList.add("sidenav");
    nav.style.width = "250px";
    nav_hamburger.classList.add("hide")
    nav_close_btn.classList.remove("hide")
  }
  
  /* Set class and style to hide side nav element */
  function closeNav() {
    nav.style.width = "0";
    nav_hamburger.classList.remove("hide")
    nav_close_btn.classList.add("hide")
  }
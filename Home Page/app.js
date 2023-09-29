var hamburger_menu;
var big_wrapper;

function declare(){
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector("hamburger-menu");
}

const main = document.querySelector("main")

declare();

function events() {
    toggle_btn.addEventListener("click", toggleAnimation);
    hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
    });
  }
  
  events();

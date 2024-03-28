const nav = document.getElementById("nav");
let initialPosition = nav.offsetTop;

window.onscroll = function () {
  fixDiv();
};

function fixDiv() {
  if (window.scrollY >= initialPosition) {
    nav.classList.add("nav-fixed");
    return;
  }

  nav.classList.remove("nav-fixed");
}

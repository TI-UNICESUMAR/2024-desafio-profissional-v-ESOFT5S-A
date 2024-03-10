const nav = document.getElementById("nav");
let posicaoInicial = nav.offsetTop;

window.onscroll = function () {
  fixarDiv();
};

function fixarDiv() {
  if (window.scrollY >= posicaoInicial) {
    nav.classList.add("nav-fixed");
    return;
  }

  nav.classList.remove("nav-fixed");
}

const btn = document.querySelector(".button-scroll");
function btnVisibility() {
  const h = document.body.scrollTop;
  if (h < 100) {
    btn.style.display = "none";
    return;
  }
  btn.style.removeProperty("display");
}

window.addEventListener("scroll", btnVisibility);
btnVisibility();
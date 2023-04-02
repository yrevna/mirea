i = 0;

function changeColor() {
  const a = document.getElementById("squareColor");
  const b = document.getElementById("changeColor");
  if (i == 0) {
    a.style.backgroundColor = "blue";
    b.value = "изменить на красный";
    i = 1;
  } else {
    a.style.backgroundColor = "red";
    b.value = "изменить на синий";
    i = 0;
  }
}

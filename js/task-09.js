function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundColor = document.querySelector("body");
const buttonChangeColor = document.querySelector("button.change-color");
const nameBackbroundColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  backgroundColor.style.backgroundColor = randomColor;
  nameBackbroundColor.textContent = randomColor;
})
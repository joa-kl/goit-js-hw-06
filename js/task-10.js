// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const amount = document.querySelector("#controls input");





// function createBoxes(amount) {
//   // Utwórz funkcję createBoxes(amount), która bierze jeden parametr - liczbę.Funkcja tworzy tyle < div >, ile ukazano w amount i dodaje je do div#boxes.

// }


// function removeBoxes() {
//   // destroyBoxes()-- > usuwa zawartość div#boxes
  
// }


// Wymiary pierwszego < div > - 30px na 30px.
// Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
// Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX.Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.
  

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('#controls input');

const creatBoxes = amount => {
  let boxesArray = [];
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement('div');
    box.style.height = `${(20 + i * 10)}px`;
    box.style.width = `${(20 + i * 10)}px`;
    box.style.borderColor = 'black';
    box.style.borderStyle = 'solid';
    box.style.borderWidth = '1px';
    box.style.margin = '10px'
    box.style.background = getRandomHexColor();
    boxesArray = [...boxesArray, box];
  }
  boxes.append(...boxesArray);
}
createBtn.addEventListener('click', e => {
  creatBoxes(input.value);
});
destroyBtn.addEventListener('click', e => {
  boxes.innerHTML = ''
})
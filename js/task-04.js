const startValue = document.querySelector('#value');
let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
buttonDecrement.addEventListener("click", () => {
    startValue.innerHTML = counterValue;
    counterValue -= 1;
});

const buttonIncrement = document.querySelector('button[data-action="increment"]');
buttonIncrement.addEventListener("click", () => {
    startValue.innerHTML = counterValue;
    counterValue += 1;
});

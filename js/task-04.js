const startValue = document.querySelector('#value');
let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    startValue.innerHTML = counterValue;
});

const buttonIncrement = document.querySelector('button[data-action="increment"]');
buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    startValue.innerHTML = counterValue;
});

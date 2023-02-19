const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    if (nameInput.length === 0) {
        nameOutput.value = "Anonymous"
    }
    nameOutput.textContent = event.currentTarget.value;
});

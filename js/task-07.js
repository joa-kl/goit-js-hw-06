const fontSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");


fontSizeControl.addEventListener("input", (event) => {
        spanText.style.fontSize = event.currentTarget.value + "px";
});

console.log(fontSizeControl);
console.log(minFontSize);




// WERSJA POPRZEDNIA 

// const fontSizeControl = document.querySelector("#font-size-control");
// const minFontSize = Number(fontSizeControl.getAttribute("min"));
// const maxFontSize = Number(fontSizeControl.getAttribute("max"));
// const spanText = document.querySelector("#text");


// fontSizeControl.addEventListener("input", (event) => {
//     if (event.currentTarget.value >= minFontSize && event.currentTarget.value <= maxFontSize) {
//         spanText.style.fontSize = event.currentTarget.value + "px";
//     }
// });

// console.log(fontSizeControl);
// console.log(minFontSize);


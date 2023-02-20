const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`);

// console.log(categoriesList);
for (let key of categoriesList) {
    console.log(`Category: ${key.firstElementChild.textContent}`);
    console.log(key.lastElementChild.children.length);
}


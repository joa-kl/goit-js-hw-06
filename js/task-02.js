const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
for (let key of ingredients) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  list.append(listItem);
  listItem.textContent = key;
}

console.log(list);





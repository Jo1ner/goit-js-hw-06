const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const array = [];
ingredients.forEach(ingredient => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  array.push(liEl);
  
});
console.log(array);
ingredientsList.append(...array);
console.log(ingredientsList);


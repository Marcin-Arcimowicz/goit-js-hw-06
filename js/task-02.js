const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul#ingredients");

ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.setAttribute("class", "nature"); 
  li.classList.add("item");
  li.innerText = ingredient;
  console.log(li);
  ingredientsList.append(li);

});
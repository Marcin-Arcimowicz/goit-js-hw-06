const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")

ingredients.forEach((ingredients) => {
  let listItem = document.createElement("li")
  listItem.innerText = ingredients
  listItem.classList.add("item")
  ingredientsList.append(listItem)
})
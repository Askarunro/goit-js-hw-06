const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// const ingredientEl = document.createElement('li');
const makeItemIngredient = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;

    ingredientEl.classList.add('item');
    return ingredientEl;
  });
};
const elements = makeItemIngredient(ingredients);
const listUl = document.querySelector('#ingredients');

listUl.append(...elements);

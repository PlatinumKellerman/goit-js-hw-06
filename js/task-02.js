const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];
const listEl = document.querySelector('#ingredients');

const createItemEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl
});

const fullListEl = listEl.prepend(...createItemEl);


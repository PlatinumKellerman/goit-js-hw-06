const categoriesArray = document.querySelectorAll('.item');
const numberOfCategories = document.querySelectorAll('.item').length;

const countCategoriesEl = () => {
  console.log(`Number of categories: ${numberOfCategories}`); 
};

const findCategoriesEl = () => {
  categoriesArray.map(category => {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
  })
};


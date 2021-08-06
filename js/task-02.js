const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulIngredientsRef = document.querySelector('#ingredients');

const list = ingredients.map(ingredient => {
  const listRef = document.createElement('li');
  listRef.textContent = ingredient;
  return listRef;
});

ulIngredientsRef.append(...list);
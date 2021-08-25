const liCategoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${liCategoriesRef.length} категории.`);

liCategoriesRef.forEach(categorie => {
    console.log(`Категория:`, categorie.firstElementChild.textContent);
    console.log(`Количество элементов: ${categorie.lastElementChild.children.length}`);
});
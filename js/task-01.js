const liCategoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${liCategoriesEl.length} категории.`);

for (const categorie of liCategoriesEl) {
    console.log(`Категория:`, categorie.querySelector('h2').textContent);
    console.log(`Количество элементов: ${categorie.querySelectorAll('li').length}`);
}
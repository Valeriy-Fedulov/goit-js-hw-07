const categorieEl = document.querySelectorAll('.item');
console.log(`В списке ${categorieEl.length} категории.`);

for (const categorie of categorieEl) {
    console.log(`Категория:`, categorie.querySelector('h2').textContent);
    console.log(`Количество элементов: ${categorie.querySelectorAll('li').length}`);
}
// 6. Создай метод getCategoryCounts() в классе ProductManager, который возвращает объект, где ключи — названия категорий,
//  а значения — количество товаров в каждой категории.
//  Для подсчёта количества используй цикл while.

const items = [
  { name: "Футболка", price: 100, category: "одежда" },
  { name: "Phone", price: 100, category: "электроника" },
  { name: "Ноутбук", price: 100, category: "электроника" },
  { name: "Роман", price: 15, category: "книги" },
  { name: "Роман", price: 15, category: "книги" },
  { name: "Роман", price: 150, category: "книги" },
];

class ProductManager {
  products = null;
  constructor(products) {
    this.products = products;
  }
  getCategoryCounts() {
    const categoryCounts = {};
    let i = 0;
    while (i < this.products.length) {
      const category = this.products[i].category;
      if (categoryCounts[category]) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
      i++;
    }
    return categoryCounts;
  }
}
const productManager = new ProductManager(items);
console.log(productManager.getCategoryCounts());

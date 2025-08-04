// 7. Реализуй метод removeByCategory(category) в классе ProductManager, который удаляет из массива products все товары с указанной категорией.
//  Массив должен измениться, для этого можно использовать метод filter() и перезаписать
//  this.products.

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
  removeByCategory(category) {
    this.products = this.products.filter((product) => product.category !== category);
    return this.products;
  }
}
const productManager = new ProductManager(items);
console.log(productManager.removeByCategory("электроника"));

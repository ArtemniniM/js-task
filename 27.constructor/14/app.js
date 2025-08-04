// 3. В классе ProductManager реализуй метод getByCategory(category), который возвращает массив всех товаров из products,
//  у которых поле category совпадает с переданным значением.
//  Для перебора используй метод filter.

const items = [
  { name: "Футболка", price: 25, category: "одежда" },
  { name: "Phone", price: 100, category: "электроника" },
  { name: "Ноутбук", price: 1200, category: "электроника" },
  { name: "Роман", price: 15, category: "книги" },
  { name: "Роман", price: 15, category: "книги" },
  { name: "Роман", price: 15, category: "книги" },
];

class ProductManager {
  products = null;
  constructor(products) {
    this.products = products;
  }
  getByCategory(category) {
    return this.products.filter((el) => el.category === category);
  }
}
const productManager = new ProductManager(items);
console.log(productManager.getByCategory("книги"));

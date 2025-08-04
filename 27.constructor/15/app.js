// 4. Добавь в класс ProductManager метод hasCheaperThan(limit), который возвращает true,
//  если в списке товаров есть хотя бы один товар с ценой ниже значения limit,
//  и false — если таких товаров нет. Используй метод some.

const items = [
  { name: "Футболка", price: 25, category: "одежда" },
  { name: "Phone", price: 100, category: "электроника" },
  { name: "Ноутбук", price: 1200, category: "электроника" },
  { name: "Роман", price: 10, category: "книги" },
  { name: "Роман", price: 15, category: "книги" },
  { name: "Роман", price: 19, category: "книги" },
];

class ProductManager {
  products = null;
  constructor(products) {
    this.products = products;
  }
  hasCheaperThan(limit) {
    return this.products.some((el) => el.price < limit);
  }
}
const product = new ProductManager(items);
console.log(product.hasCheaperThan(16));

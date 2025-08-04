// 5. Реализуй метод getAveragePrice() в классе ProductManager, который возвращает среднее арифметическое цены всех
//  товаров из массива products.
//  Если товаров нет, метод должен вернуть 0. Для подсчёта суммы используй метод reduce().

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
  getAveragePrice() {
    if (this.products.length === 0) return 0;

    const total = this.products.reduce((sum, item) => sum + item.price, 0);
    return total / this.products.length;
  }
}
const productManager = new ProductManager(items);
console.log(productManager.getAveragePrice());

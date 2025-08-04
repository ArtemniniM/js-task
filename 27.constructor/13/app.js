// 2. Создай класс ProductManager, который в конструкторе принимает массив обычных объектов с товарами
//  (каждый объект содержит поля name, price, category) и сохраняет его в свойство products.
//   Добавь метод getByPriceRange(min, max), который возвращает массив всех товаров, у которых цена находится в пределах
//   от min до max включительно.
// Перебор можно сделать с помощью filter.

const items = [
  { name: "Футболка", price: 25, category: "одежда" },
  { name: "Ноутбук", price: 1200, category: "электроника" },
  { name: "Роман", price: 15, category: "книги" },
];

class ProductManager {
  products = null;
  constructor(productsArray) {
    this.products = productsArray;
  }
  getByPriceRange(min, max) {
    // const filtArray = this.products.filter((el) => {
    //   return el.price >= min && el.price <= max;
    // });
    // return filtArray;
    return this.products.filter((el) => el.price >= min && el.price <= max);
  }
}
const product = new ProductManager(items);
console.log(product.getByPriceRange(0, 29));

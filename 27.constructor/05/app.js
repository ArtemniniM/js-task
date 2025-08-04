// Создайте класс Product. Добавьте проверку в классе Product, чтобы цена не могла быть меньше
// нуля. Если значение некорректное — выбрасывайте ошибку throw new Error. Ошибку обработать
// через try catch.

class Product {
  price = null;
  constructor(price) {
    this.price = price;
  }
  check() {
    try {
      if (this.price < 0) throw new Error("price no valid");
      return this.price;
    } catch (error) {
      console.log(error.message);
    }
  }
}
const product = new Product(-1);
console.log(product.check());

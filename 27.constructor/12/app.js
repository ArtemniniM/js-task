// Создай конструктор Product, который принимает три значения: name (название товара),
//  price (число) и category (строка). Внутри конструктора реализуй метод isValid(),
//   который проверяет: название не должно быть пустым, цена должна быть положительным числом,
//    а категория — одной из следующих: "одежда", "электроника", "книги".
//  Если хотя бы одно из условий не выполняется, выброси ошибку через throw new Error(...).

// const array = [{ category: "одежда" }, { category: "электроника" }, { category: "книги" }];
class Product {
  name = null;
  price = null;
  category = null;

  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  isValid() {
    try {
      if (!this.name || this.name.trim().length === 0) throw new Error("name null");
      if (typeof this.price !== "number" || this.price <= 0) throw new Error("price not defined");
      const validCategories = ["одежда", "электроника", "книги"];
      if (!validCategories.includes(this.category)) throw new Error("category not defined");
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}
const product = new Product("phone", 10, "электроника");
console.log(product.isValid());

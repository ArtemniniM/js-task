// Вывести в консоль все значения объекта, используя for...in.
// Тестовые данные:
// const product = { title: "Phone", price: 799, stock: 12 };
// Ожидаемый вывод:
// Phone
// 799
// 12

const product = { title: "Phone", price: 799, stock: 12 };

for (key in product) {
  console.log(product[key]);
}

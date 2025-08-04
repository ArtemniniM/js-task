// ; 5. Класс Product: name, price. Наследник TaxedProduct: добавляется поле taxRate.
//  Метод finalPrice() — у Product возвращает price, у TaxedProduct есть метод с таким же названием
// и возвращает price + price * taxRate.

class Product {
  name;
  price;
  finalPrice() {}
}
class TaxedProduct extends Product {
  taxRate;
  finalPrice() {}
}

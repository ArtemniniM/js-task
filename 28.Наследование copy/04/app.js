// Создайте класс Rectangle с полями width и height. Реализуйте метод area(), возвращающий
// площадь.

class Rectangle {
  width = null;
  height = null;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    console.log(this.width * this.height);
  }
}
const rectangle = new Rectangle(5, 5);
rectangle.area();

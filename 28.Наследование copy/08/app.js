// Добавьте в класс Car поле speed = 0, метод drive(speed) для перезаписи скорости и stop() для
// остановки (скорость = 0).

class Car {
  speed = 0;
  constructor(speed) {
    this.speed = speed;
  }
  drive(speed) {
    this.speed = speed;
  }
  stop() {
    this.speed = 0;
  }
}
const car = new Car(3);
console.log(car);
car.drive(50);
console.log(car);
car.stop();
console.log(car);

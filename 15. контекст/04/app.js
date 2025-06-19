// Объект с width, height и методом getArea, который выводит площадь.

const area = {
  width: 10,
  height: 13,
  getArea() {
    console.log(this.width * this.height);
  },
};
area.getArea();

// 4. Реализуйте класс MathСalculation. В него передается число n – количество элементов массива. На
// основании числа формируется динамический массив из n элементов внутри класса. Создать
// функцию для подсчета всех четных чисел массива. Добавить проверки на ввод

class MathСalculation {
  n = +prompt();
  arr = [];

  makeArray() {
    for (let i = 0; i < this.n; i++) {
      this.arr.push(+prompt());
    }
    return this.arr;
  }
  checkArray() {
    const res = this.arr.filter((el) => {
      return el % 2 === 0;
    });
    return res.length;
  }
}
const mathСalculation = new MathСalculation();
mathСalculation.makeArray();
console.log(mathСalculation.checkArray());

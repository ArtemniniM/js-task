// Создайте класс MaxFinder с методом findMax(arr), который возвращает наибольшее число в массиве.

class MaxFinder {
  findMax(arr) {
    let max = 0;
    let array = arr.split("");
    array.forEach((element) => {
      element > max ? (max = element) : null;
    });
    return max;
  }
}
const max = new MaxFinder();
console.log(max.findMax("1243"));

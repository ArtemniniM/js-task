// 9. Создай класс PrimeGenerator, метод get(n) возвращает первые n простых чисел.
// ; Пример: get(4) → [2, 3, 5, 7].
// ; Создай наследника PrimeSquares, метод get(n) возвращает квадраты этих чисел.
// ; Пример: get(4) → [4, 9, 25, 49].

class PrimeGenerator {
  get() {
    let array = [2, 3, 5, 7];
    let cleanArray = [];
    for (let i = 0; i < array.length; i++) {
      let prime = true;
      for (let j = 2; j < array[i]; j++) {
        if (array[i] % j === 0) {
          prime = false;
          break;
        }
      }
      if (prime) {
        cleanArray.push(array[i]);
      }
    }
    return cleanArray;
  }
}
class PrimeSquares extends PrimeGenerator {
  get() {
    const filterArray = super.get();
    const res = filterArray.map((el) => el ** 2);
    return res;
  }
}
const primeSquares = new PrimeSquares();
console.log(primeSquares.get());

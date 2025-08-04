// 12. Создай класс RepeatingArray, метод get() → [1, 2, 2, 3, 2, 4].
// ; Создай наследника MajorityElement, метод get() возвращает элемент, встречающийся чаще всего.
// ; Пример: 2

class RepeatingArray {
  get() {
    return [1, 2, 2, 3, 2, 4];
  }
}
class MajorityElement extends RepeatingArray {
  get() {
    const array = super.get();
    const obj = {};
    array.forEach((el) => {
      obj[el] = (obj[el] ?? 0) + 1;
    });
    const res = Object.entries(obj);
    let majority = null;
    let max = 0;
    for (key in obj) {
      obj[key] > max;
      max = obj[key];
      majority = key;
    }
    return majority;
  }
}
const majorityElement = new MajorityElement();
console.log(majorityElement)
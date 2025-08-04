// 7. Создай класс SentenceList, метод get() → ["my cat", "your dog", "wildcat", "mouse"].
// ; Создай наследника CatFilter, метод filterData(), который возвращает строки, содержащие "cat".
// ; Ожидаемый результат: ["my cat", "wildcat"].

class SentenceList {
  get() {
    return ["my cat", "your dog", "wildcat", "mouse"];
  }
}
class CatFilter extends SentenceList {
  filterData() {
    const res = this.get();
    const str = "cat";
    let array = [];
    for (let i = 0; i < res.length; i++) {
      if (res[i].includes(str)) {
        array.push(res[i]);
      }
    }
    return array;
  }
}
const catFilter = new CatFilter();
console.log(catFilter.filterData());

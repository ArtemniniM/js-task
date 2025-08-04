// 8. Создай класс VerbList, метод get() → ["running", "eat", "walking", "sleep"].
// ; Создай наследника IngFilter, метод get(), который возвращает > 6 symbols ["running", "walking"].

class VerbList {
  get() {
    return ["running", "eat", "walking", "sleep"];
  }
}
class IngFilter extends VerbList {
  get() {
    const res = super.get();
    let array = [];
    for (let i = 0; i < res.length; i++) {
      res[i].length >= 6 ? array.push(res[i]) : null;
    }
    return array;
  }
}
const resultStr = new IngFilter();
console.log(resultStr.get());

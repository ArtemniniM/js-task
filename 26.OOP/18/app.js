// \=Создайте класс StringReverser с методом reverseString(str), который переворачивает строку.

class StringReverser {
  reverseString(str) {
    return str.split("").reverse().join("");
  }
}
const reverse = new StringReverser();
console.log(reverse.reverseString("artem"));

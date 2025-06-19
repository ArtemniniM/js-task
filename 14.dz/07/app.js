// Создай функцию concat_words(w1, w2), которая возвращает объединение строк w1 и w2 через пробел.

function concat_words(w1, w2) {
  if (typeof w1 === "string" && typeof w2 === "string") {
    return w1 + " " + w2;
  } else {
    return "vveli ne stroky";
  }
}
console.log(concat_words("artem", "minin"));

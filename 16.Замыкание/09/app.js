// Создай hasLength(n)(str) — она проверяет, имеет ли строка длину n.

function hasLength(n) {
  return function name(str) {
    if (str.length == n) {
      console.log(true);
    } else {
      console.log(false);
    }
  };
}
hasLength(4)("fgdgg");

// Создай функцию is_even(n), которая возвращает True, если число чётное, иначе False. (n - параметр)

function is_even(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(is_even(2));

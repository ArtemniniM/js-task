// *Дан массив чисел. Найди второе число, которое делится на 3 без остатка.
//  Если второго такого числа нет — выведи "Not found".
// [1, 3, 5, 6, 9] → 6 (3 — первое, 6 — второе)
// [2, 4, 9] → "Not found" (только одно)
// [3, 6, 9] → 6

const arr = [1, 3, 5, 6, 9];
let first = null;
let second = null;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    if (first === null) {
      first = arr[i]; // Первое найденное число
    } else if (second === null) {
      second = arr[i]; // Второе найденное число
      break; // Останавливаем цикл, если нашли два числа
    }
  }
}

if (first !== null && second !== null) {
  console.log(`Первое: ${first}, Второе: ${second}`);
} else {
  console.log("Not found");
}

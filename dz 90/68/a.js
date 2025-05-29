// Проверить, является ли массив палиндромом.
//  Массив: [1, 2, 3, 2, 1]
//  Использовать: цикл for, сравнение с элементами с конца
//  Результат: true

const arr = [1, 2, 3, 2, 1];

let isPalindrome = true;

for (let i = 0; i < arr.length / 2; i++) {
  if (arr[i] !== arr[arr.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome);

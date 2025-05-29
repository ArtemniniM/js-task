// . На входе массив чисел. Необходимо сформировать объект, где ключ – это элемент массива, а
// значение – true или false. Если число четное, то значение будет true, если нечетное – false.
// Входные: [1, 2, 3, 4, 5]→ Результат: {1: false, 2: true, 3: false, 4: true, 5: false}
// Входные: [10, 15, 22, 33]→ Результат: {10: true, 15: false, 22: true, 33: false}

const arr = [1, 2, 3, 4, 5];
const obj = {};
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    obj[arr[i]] = true;
  } else {
    obj[arr[i]] = false;
  }
}
console.log(obj);

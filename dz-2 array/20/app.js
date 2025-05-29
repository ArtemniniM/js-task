// Дан динамический массив. Проверьте, есть ли в нём хотя бы одно отрицательное число.
// Если есть, то отобразите в консоль true, в противном случае -  false

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(prompt("enter word"));
}

let result = false;
for (let j = 0; j < arr.length; j++) {
  if (arr[j] < 0) {
    result = true;
    break;
  }
}
console.log(result);

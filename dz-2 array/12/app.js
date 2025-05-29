// Посчитайте, сколько раз четные числа встречается в ДИНАМИЧЕСКОМ массиве (заполняется через prompt)

const arr = [];
let result = 0;
for (let i = 0; i < 5; i++) {
  arr.push(prompt("enter"));
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    result++;
  }
}
console.log(result);

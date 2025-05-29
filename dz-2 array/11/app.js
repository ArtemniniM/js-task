// Посчитайте, сколько раз число 7 встречается в массиве [7, 1, 7, 3, 7, 5].

const arr = [7, 1, 7, 3, 7, 5];
let result = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 7) {
    result++;
  }
}
console.log(result);

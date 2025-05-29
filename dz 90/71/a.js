const arr = [1, 2, 3];

const res = arr.map((num) => {
  if (num % 2 === 0) return num * 2;
});
console.log(res);

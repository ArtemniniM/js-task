// Объект с полем M и методом countEvens, который считает и выводит количество
// чётных чисел от 1 до M.

const obj = {
  m: 10,
  countEvens(arr) {
    let count = 0;
    for (let i = 1; i <= this.m; i++) {
      if (i % 2 === 0) {
        count++;
      }
    }
    console.log(count);
  },
};
obj.countEvens();

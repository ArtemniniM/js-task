// Вычислить сумму последовательности целых чисел до первого встреченного нуля.
// Гарантируется наличие хотя бы одного нуля в последовательности. Дополнительное
// условие - убедиться, что все элементы последовательности являются числами.
// [5, 1, 2, 3, 0, 1, 5, 0, 2] –> 11 (5 + 1 + 2 + 3 = 11)

const arr = [5, 1, 2, 3, 0, 1, 5, 0, 2];

function sumElems() {
  try {
    let checkArray = arr.every((el) => !isNaN(el));
    if (!checkArray) throw new Error("includes letters");
    let sum = 0;
    for (let num of arr) {
      if (num === 0) break;
      sum += num;
    }
    console.log(sum);
  } catch (error) {
    console.log(error.message);
  }
}
sumElems();

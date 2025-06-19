// Найти все числа-палиндромы в массиве
// [121, 202, 345, 11, 99]); // 121, 202, 11, 99

const arr = [121, 202, 345, 11, 99];

const res = arr.filter((el) => {
  const elNum = String(el);
  if (elNum === elNum.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
});
console.log(res);

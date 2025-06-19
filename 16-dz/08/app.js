// Сделай каррированную функцию, выводящую квадраты от start до end.
// rangeSquares(3)(5); // 👉 9 16 25

function rangeSquares(start) {
  return function name(end) {
    for (let i = start; i <= end; i++) {
      console.log(i * i);
    }
  };
}

rangeSquares(3)(5);

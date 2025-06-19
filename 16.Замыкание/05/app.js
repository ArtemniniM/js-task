// Создай greaterThan(x)(y), которая проверяет, больше ли y, чем x

function greaterThan(x) {
  return function a(y) {
    if (x > y) {
      console.log(x);
    } else {
      console.log(y);
    }
  };
}

greaterThan(23)(9);

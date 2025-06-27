// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи.

const click = document.querySelector("button");

click.addEventListener("click", () => {
  try {
    if (isNaN(val.value)) throw new Error("error");
    if (val.value < 0) throw new Error("error");
    let fib = [0, 1];
    for (let i = 2; i < val.value; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
    const val = document.querySelector("input");
    alert(val.value);
  } catch (error) {}
});

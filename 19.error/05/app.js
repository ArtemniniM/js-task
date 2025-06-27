// Реализуйте функцию, которая принимает число и возвращает возвенную в квадрат каждую
// цифру числа соединяя их. Добавить проверки на ввод числа
// 9119 -> 811181

const n = prompt("");

function doRes() {
  try {
    if (isNaN(n)) throw Error("n - string");
    if (n < 0) throw Error("num < 0");
    const result = String(n)
      .split("")
      .map((el) => {
        if (isNaN(n)) throw new Error("Найдены недопустимые символы");
        return (Number(el) ** 2).toString();
      })
      .join("");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
doRes();

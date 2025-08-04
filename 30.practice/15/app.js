// ; 2.  Создай класс DayWeather с полями day, temps (массив температур за день). Метод average() возвращает день с самой высокой температурой.

// ; Входные:
// ; const weatherData = [
// ;   { day: "Mon", temps: [20, 22, 25] },
// ;   { day: "Tue", temps: [18, 20, 19] },
// ;   { day: "Wed", temps: [25, 27, 30] },
// ;   { day: "Thu", temps: [19, 21, 20] },
// ;   { day: "Fri", temps: [22, 24, 23] },
// ; ];
// ; Выходные: Wed (тк 30 - максимальная температура)

const weatherData = [
  { day: "Mon", temps: [20, 22, 25] },
  { day: "Tue", temps: [18, 20, 19] },
  { day: "Wed", temps: [25, 27, 30] },
  { day: "Thu", temps: [19, 21, 20] },
  { day: "Fri", temps: [22, 24, 23] },
];

class DayWeather {
  constructor(day, temps) {
    this.day = day;
    this.temps = temps;
  }
  average() {
    let max = 0;
    const res = this.temps.filter((el) => (el > max ? (max = el) : null));
    return res;
  }
}
weatherData.forEach((data) => {
  const dw = new DayWeather(data.day, data.temps);
  console.log(`${dw.day}`);
});

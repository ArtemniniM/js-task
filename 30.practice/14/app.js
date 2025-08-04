// ; 1. Создай класс DayWeather с полями day, temps (массив температур за день). Метод average() возвращает среднюю температуру в каждом дне.

// ; Входные:
// ; const weatherData = [
// ;   { day: "Mon", temps: [20, 22, 25] },
// ;   { day: "Tue", temps: [18, 20, 19] },
// ;   { day: "Wed", temps: [25, 27, 30] },
// ;   { day: "Thu", temps: [19, 21, 20] },
// ;   { day: "Fri", temps: [22, 24, 23] },
// ; ];
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
    const sum = this.temps.reduce((acc, temp) => acc + temp, 0);
    return sum / this.temps.length;
  }
}
weatherData.forEach((data) => {
  const dw = new DayWeather(data.day, data.temps);
  console.log(`${dw.day}: ${dw.average().toFixed(2)}°C`);
});

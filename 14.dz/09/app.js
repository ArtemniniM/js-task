// Создай функцию greeting(hour), которая возвращает:
// "Good morning" — если 0 <= hour < 12,
// "Good afternoon" — если 12 <= hour < 18,
// "Good evening" — если 18 <= hour <= 23.

function greeting(hour) {
  if (hour >= 0 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good afternoon";
  } else if (hour >= 18 && hour <= 23) {
    return "Good evening";
  }
}
console.log(greeting(19));

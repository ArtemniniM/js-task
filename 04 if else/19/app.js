const num = +prompt("enter");
const hours = Math.floor(num / 60);
const minutes = num % 60;
console.log("Часы: " + hours + ", Минуты: " + minutes);

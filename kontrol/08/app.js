// На вход подаётся число от 1 до 12. Проверьте это число, используя оператор switch case,
//  и выведите название соответствующего месяца
//  (где 1 - январь, 2 - февраль, 3 - март и т.д.).
//  Если введено значение вне диапазона, выведите 'error' через console.log в блоке default.

let a = +prompt();

switch (a) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("august");
    break;
  case 9:
    console.log("september");
    break;
  case 10:
    console.log("october");
    break;
  case 11:
    console.log("november");
    break;
  case 12:
    console.log("december");
    break;

  default:
    console.log("error");
    break;
}

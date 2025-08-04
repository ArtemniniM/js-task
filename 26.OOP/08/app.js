// 8. Класс EmailChecker, в котором:
// - isValid(email) — возвращает true, если email содержит символ @
// - main() — спрашивает email через prompt(), вызывает isValid() и пишет: "Email корректен" или "Некорректный email"

class EmailChecker {
  isValid(email) {
    return email.includes("@");
  }
  main() {
    const mail = prompt();
    if (this.isValid(mail)) {
      console.log("Email корректен");
    } else {
      console.log("Некорректный email");
    }
  }
}
const emailCheck = new EmailChecker();
emailCheck.main();

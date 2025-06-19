// Создай объект logger с методом logFullInfo(city, age), который выводит: <name> из <city>, <age> лет.
// Создай объект user, передай logFullInfo через apply, указав user и массив аргументов.

const logger = {
  logFullInfo(city, age) {
    console.log(`${this.name} из ${city}, ${age} лет.`);
  },
};

const user = {
  name: "Artem",
};
logger.logFullInfo.apply(user, ["Gomel", 22]);

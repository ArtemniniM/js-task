// Дан объект пользователя: const user = { id: 1, name: "Алексей", age: 30, email: "alex@example.com", address: { city: "Москва", street: "Ленина", apartment: 42 } };

// Извлеките name, age и email в отдельные переменные используя деструктуризацию и значения переменных отобразите в console.log().

const user = {
  id: 1,
  name: "Алексей",
  age: 30,
  email: "alex@example.com",
  address: { city: "Москва", street: "Ленина", apartment: 42 },
};

const { name, age, email } = user;
console.log(name);
console.log(age);
console.log(email);


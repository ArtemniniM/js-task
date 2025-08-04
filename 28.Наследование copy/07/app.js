// Создайте класс Student с полями name и массивом оценок grades. Реализуйте метод
// getAverageGrade() для подсчёта среднего балла.

class Student {
  name = null;
  grades = null;
  constructor(name, grades) {
    this.name = name;
    this.grades = grades;
  }
  getAverageGrade() {
    const sum = this.grades.reduce((sum, el) => (sum += el), 0);
    return sum / this.grades.length;
  }
}
const student = new Student("Artem", [1, 2, 3,4]);
console.log(student.getAverageGrade());

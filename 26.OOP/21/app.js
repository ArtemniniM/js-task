// Создайте класс DuplicateRemover с методом removeDuplicates(arr), который убирает дубликаты. Использовать метод new Set()

class DuplicateRemover {
  removeDuplicates(arr) {
    return [...new Set(arr)];
  }
}
const remover = new DuplicateRemover();
console.log(remover.removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

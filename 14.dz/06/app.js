// Создай функцию string_length(s), которая возвращает количество символов в строке s.


function string_length(s) {
  if (typeof s === 'string') {
    return s.length
  }
  else {
    return 'vveli ne stroky'
  }
}console.log(string_length('sdf'));

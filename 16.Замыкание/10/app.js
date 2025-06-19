// Сделай formatDate(separator)(day)(month)(year), которая собирает дату строкой.
function formatDate(separator) {
  return function nome(day) {
    return function name(month) {
      return function name1(year) {
        console.log(`${day}${separator}${month}${separator}${year}`);
      };
    };
  };
}
formatDate("/")(12)(12)(2019);

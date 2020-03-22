// module.exports = function countCats(array) {
//   array.flat().forEach(element => {
//     if (element.contains('^^')) counter = counter + 1;
//   });
//   return counter;
// };

module.exports = function countCats(cats) {
  return cats.flat().filter(element => element === '^^').length
};
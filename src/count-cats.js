module.exports = function countCats(cats) {
  return cats.flat().filter(val => val === '^^').length
};
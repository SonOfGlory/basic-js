module.exports = function countCats(cats) {
  return cats.flat().filter(element => element == '^^').length
};
module.exports = function repeater(words, options={}) {
  const { repeatTimes=1, separator='+',
          addition, additionRepeatTimes=1, additionSeparator='|' } = options

  const adds = addition === undefined ? '' :
    Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator)
  return Array(repeatTimes).fill(words+adds).join(separator)
};
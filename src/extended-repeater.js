const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  
  let addition = 'addition' in options ? String(options.addition) : '';
  
  if ('additionRepeatTimes' in options) {
    addition = new Array(options.additionRepeatTimes).fill(addition).join(options.additionSeparator || '|');
  }

  const resultString = str + addition;
  return new Array(options.repeatTimes).fill(resultString).join(options.separator || '+');
}

module.exports = {
  repeater
};

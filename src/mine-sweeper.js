const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  const countMines = (x, y) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const nx = x + i;
        const ny = y + j;
        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && (i !== 0 || j !== 0)) {
          if (matrix[nx][ny]) count++;
        }
      }
    }
    return count;
  };

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      result[x][y] = countMines(x, y);
    }
  }
  return result;
}

module.exports = {
  minesweeper
};

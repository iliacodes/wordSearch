const transpose = matrix => {
  let result = [];
  let cols = matrix.length;
  let rows = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    let newRows = [];
    for (let j = 0; j < cols; j++) {
      newRows.push(matrix[j][i]);
    }
    result.push(newRows);
  }

  return result;
};
  
const wordSearch = (letters, word) => {
  if (letters.length < 1 || typeof word !== "string") {
    return "Error";
  }
  let wordToUpperCase = word.toUpperCase(); 
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  for (let l of horizontalJoin) {
    let ll = l.toUpperCase();
    if (ll.includes(wordToUpperCase)) return true;
  }

  for (let k of verticalJoin) {
    let kk = k.toUpperCase();
    if (kk.includes(wordToUpperCase)) return true;
  }

  return false;
};


module.exports = wordSearch

module.exports = function(input){

  // ASSUME A STABLE (square) MATRIX
  const rows = input.length;
  const cols = input[0].length;

  const response = Array.from({length: cols}, () => Array.from({length: rows}) );
  for (let row = 0; row < rows; row++){
    for (let col = 0; col < cols; col++){
      response[col][row] = input[rows-row-1][col];
    }
  }
  return response;
};

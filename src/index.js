
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix)){
    if(matrix.length < 1) {
      return [];
    }

    for(let i = 1; i < matrix.length; i= i+2) {
      matrix[i] = matrix[i].reverse();
    }

    return matrix.map(item => item.join(' ')).join(' ').split(' ').map(item => Number(item)) ;
  } else {
    return [];
  }
}

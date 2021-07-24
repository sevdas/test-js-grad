// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

function createBase(integer) {
  const addNum = num => {
    return integer + num;
  };
  return addNum;
}

module.exports = createBase;

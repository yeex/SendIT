'use strict';

const add = (...inputs) => {
  console.log('inputs', inputs);

  const numbers = inputs.filter(input => {
    const isNumber = typeof input === 'number';
    if (!isNumber) {
      console.log('${input} is not a number');
    }
    return isNumber;
  });

  console.log('numbers', numbers);

  const sum = numbers.reduce((total, input) => total + input, 0);

  return sum;
};

module.exports = {
  add
};
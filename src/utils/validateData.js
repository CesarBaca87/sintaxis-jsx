const valdiateNumbers = numbers => {
  const areAllNumbers = numbers.every(number => typeof number === 'number');
  return areAllNumbers;
};

const valdiateWords = words => {
  const areAllWords = words.every(word => typeof word === 'string');
  return areAllWords;
};

export {valdiateNumbers, valdiateWords}
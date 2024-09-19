import ValidateError from '../ValidateError/ValidateError';

const ReverseString = ({ sentence }) => {
  if (!sentence || typeof sentence !== 'string') {
    return <ValidateError />;
  }

  const reverseSentence = sentence.split('').reverse().join('');

  return <h2>{reverseSentence}</h2>;
};

export default ReverseString;

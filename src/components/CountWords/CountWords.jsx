import ValidateError from '../ValidateError/ValidateError';

const CountWords = ({ children }) => {
  if (typeof children !== 'string') {
    return <ValidateError />;
  }

  const numberOfWords = children.split(' ').length;
  return (
    <h2>
      En la frase "{children}" hay {numberOfWords} palabras
    </h2>
  );
};

export default CountWords;

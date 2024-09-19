import ValidateError from '../ValidateError/ValidateError';

const UppercaseText = ({ text }) => {
  if (typeof text !== 'string') return <ValidateError />;
  return <h2>{text.toUpperCase()}</h2>;
};
export default UppercaseText;

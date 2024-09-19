import { valdiateNumbers } from '../../utils/validateData';
import ValidateError from '../ValidateError/ValidateError';

const FindMaximum = ({ numbers }) => {
  const areAllNumbers = valdiateNumbers(numbers);
  if (!areAllNumbers) {
    return <ValidateError />;
  }
  const maxNumber = Math.max(...numbers);

  return (
    <h2>
      El número más alto de la lista {numbers.join(', ')} es {maxNumber}.
    </h2>
  );
};

export default FindMaximum;

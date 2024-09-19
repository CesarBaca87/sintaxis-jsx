import { valdiateWords } from '../../utils/validateData';
import ValidateError from '../ValidateError/ValidateError';

const FindLongestString = ({ words }) => {
  const longestWord = getLongestWord(words);
  const areAllWords = valdiateWords(words);

  if (!areAllWords) return <ValidateError />;

  return (
    <h2>
      De las palabras {words.join(', ')}. La palabra {longestWord} es la más
      larga.
    </h2>
  );
};

const getLongestWord = words => {
  const longestWord = words.reduce((finalWord, word) => {
    return word.length > finalWord.length ? word : finalWord;
  });
  return longestWord;
};

export default FindLongestString;

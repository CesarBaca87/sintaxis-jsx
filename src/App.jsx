import CalculateAge from './components/CalculateAge/CalculateAge';
import CalculateAverage from './components/CalculateAverage/CalculateAverage';
import CalculatePower from './components/CalculatePower/CalculatePower';
import ConvertMinutesToHours from './components/ConvertMinutesToHours/ConvertMinutesToHours';
import CountWords from './components/CountWords/CountWords';
import DisplayPersonInfo from './components/DisplayPersonInfo/DisplayPersonInfo';
import FindLongestString from './components/FindLongestString/FindLongestString';
import FindMaximum from './components/FindMaximum/FindMaximum';
import Flag from './components/Flag/Flag';
import FlagsContainer from './components/FlagsContainer/FlagsContainer';
import GenerateFullName from './components/GenerateFullName/GenerateFullName';
import IsEvenOrOdd from './components/IsEvenOrOdd/IsEvenOrOdd';
import ReverseString from './components/ReverseString/ReverseString';
import UppercaseText from './components/UppercaseText/UppercaseText';
import WriteBookInfo from './components/WriteBookInfo/WriteBookInfo';
import WriteGreeting from './components/WriteGreeting/WriteGreeting';

const Title = ({ children }) => {
  return <h1>{children}</h1>;
};

const personInfo = {
  name: 'Cesar',
  age: '37',
  job: 'freelance'
};

const App = () => {
  return (
    <>
      <Title>Curso de REACT</Title>
      <DisplayPersonInfo {...personInfo} />

      <GenerateFullName name='Ana' subname='Baca' />
      <WriteBookInfo
        title='El señor de los anillos'
        author='J.R.Tolkien'
        year='2010'
        genre='Fantasia'
      />
      <ConvertMinutesToHours minutes={140} />
      <ReverseString sentence='Hola cara de cola' />
      <IsEvenOrOdd number={5} />
      <UppercaseText text='Supermercado' />
      <WriteGreeting name='Cesar' hour={18} />
      <CalculatePower base={2} exponent={6} />
      <CountWords>Curso de React desde 0</CountWords>
      <CalculateAge birthDate='10/09/1987' />
      <FindMaximum numbers={[1, 20, 3, 4, 5]} />
      <CalculateAverage numbers={[1, 2, 3, 4, 5]} />
      <FindLongestString words={['Hola', 'Adios', 'Pantalla']} />
      <DisplayPersonInfo />
      <FlagsContainer>
        <Flag country='Canadá' image='canada.svg' people={40} />
        <Flag country='México' image='mexico.svg' people={50} />
        <Flag country='Francia' image='france.svg' people={70} />
        <Flag country='España' image='spain.svg' people={140} />
      </FlagsContainer>
    </>
  );
};

export default App;

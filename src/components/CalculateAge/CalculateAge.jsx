const CalculateAge = ({ birthDate }) => {
  const age = getAge(birthDate);
  return (
    <h2>
      Si naciste el {birthDate} tienes {age} años
    </h2>
  );
};

const getAge = birthDate => {
  const now = new Date();
};

export default CalculateAge;

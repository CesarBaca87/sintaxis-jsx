import ValidateError from '../ValidateError/ValidateError';

const ConvertMinutesToHours = ({ minutes }) => {
  if (typeof minutes !== 'number' || minutes < 0) {
    return <ValidateError />;
  }

  if (minutes <= 60)
    return (
      <h2>
        {minutes} minutes are {minutes} minutes
      </h2>
    );
  const totalMinutes = convertMinutes(minutes);

  return (
    <h2>
      {minutes} minuts are {totalMinutes}
    </h2>
  );
};
const convertMinutes = minutes => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} hours and ${remainingMinutes} minutes`;
};
export default ConvertMinutesToHours;

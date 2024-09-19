const Flag = ({ country, image, people }) => {
  return (
    <div>
      <h2>{country}</h2>
      <img
        src={`/assets/images/${image}`}
        alt={`Bandera ${country}`}
        width='200px'
      ></img>
      <p>{people}M. de habitantes</p>
    </div>
  );
};

export default Flag;

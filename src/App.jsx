const Flag = props => {
  console.log(props);
  return (
    <div>
      <h2>{props.country}</h2>
      <img
        src={`/assets/images/${props.image}`}
        alt={`Bandera ${props.country}`}
        width='200px'
      ></img>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h1>Curso de React</h1>
      <Flag country='Canadá' image='canada.svg' />
      <Flag country='México' image='mexico.svg' />
      <Flag country='Francia' image='france.svg' />
      <Flag country='España' image='spain.svg' />
    </>
  );
};

export default App;

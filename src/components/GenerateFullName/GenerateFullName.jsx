const GenerateFullName = ({ name = 'nombre', subname = 'apellido' }) => {
  return (
    <>
      <h2>
        El nombre es {name} y el apellido es {subname}
      </h2>
    </>
  );
};
export default GenerateFullName;

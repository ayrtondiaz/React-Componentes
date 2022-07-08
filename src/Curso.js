const Curso=(props)=>{
    return(
      <>
      <h2>{props.nombre}</h2>
      <div>Profesor: <span>{props.Profesor}</span></div>
      <div>Duracion:<span>{props.Duracion}</span></div>
      </>
    );
  } 
export default Curso;

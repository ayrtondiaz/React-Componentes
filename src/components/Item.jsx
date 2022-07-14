import React from 'react'

const Item = ({info}) => {
  return (

//     <div className="card" style="width: 18rem;">
//   <img src={info.imagen} class="card-img-top" alt="..."></img>
//   <div className="card-body">
//     <h5 className="card-title">{info.nombre}</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

<div className="row justify-content-center">
  <div className="col-sm-3">
    <div className="card">
    <img src={info.imagen} class="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{info.nombre}</h5>
        <p className="card-text">{info.precio}</p>
        <button href="#" className="btn btn-success" >+</button>
        <button href="#" className="btn btn-danger" >-</button>
      </div>
      <button href="#" className="btn btn-secondary">Confirmar</button>
    </div>
  </div>
  </div>
/* <a>
  <img src={info.imagen}></img>
  <p>{info.nombre}</p>
</a> */
  );
}

export default Item
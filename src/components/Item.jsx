import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({info}) => {
  return (


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
      <button className="btn btn-secondary"><Link to={`/detail/${info.id}`}>Ver Detalle</Link></button>
    </div>
  </div>
  </div>
  
  );
}

export default Item
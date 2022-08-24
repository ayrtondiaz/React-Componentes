import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Estilos.css'

const Item = ({info}) => {
  return (

    <div className="col">
      <div className="card card-box bg-dark">
        <img src={info.imagen} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{info.nombre}</h5>
          <p className="card-text">Precio oferta : ${info.precio}</p>
        </div>
        <Link to={`/detail/${info.id}`} className='a-detalle btn btn-dark btn-outline-light'>Ver Detalle</Link>
      </div>
    </div>


  );
}

export default Item



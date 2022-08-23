import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Estilos.css'

const Item = ({info}) => {
  return (
    // <div className="cardProduct">
    // <img src={info.imagen} className="card-img-top img-f" alt="..."></img>
    //   <div className="card-body">
    //     <h5 className="card-title">{info.nombre}</h5>
    //     <p className="card-text">{info.precio}</p>
    //   </div>
    //   <button className="btn-detalle"><Link to={`/detail/${info.id}`} className='a-detalle'>Ver Detalle</Link></button>
    // </div>

    // <div class="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card card-box bg-dark">
        <img src={info.imagen} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{info.nombre}</h5>
          <p className="card-text">Precio oferta : ${info.precio}</p>
        </div>
        <Link to={`/detail/${info.id}`} className='a-detalle btn btn-dark btn-outline-light'>Ver Detalle</Link>
        {/* <button className="a-detalle btn btn-dark btn-outline-light"><Link to={`/detail/${info.id}`} className='a-detalle  btn-dark'>Ver Detalle</Link></button> */}
      </div>
    </div>
  // </div>

  );
}

export default Item



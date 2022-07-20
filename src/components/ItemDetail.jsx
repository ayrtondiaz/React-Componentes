import React from 'react'
import Swal from 'sweetalert2'

const ItemDetail = ({data}) => {

    const añadir=()=>{         
        Swal.fire({
        icon: 'success',
        title: 'Añadiste correctamente al carrito',
        })
    }

  return (
    <>
    <div className='container'>
     <h1>Detalle</h1>
     <hr></hr> 
    <div className="card mb-3">
  <div className="row g-0 justify-content-center text-center">
    <div className="col-md-4">
      <img src={data.imagen} className="img-fluid rounded-start" alt="..."></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{data.nombre}</h5>
        <p className="card-text">{data.info}</p>
        <p className="card-text">Precio:<small className="text-muted">{data.precio}</small></p>
      </div>
      <button href="#" className="btn btn-danger" onClick={añadir}>Añadir al Carrito</button>
    </div>
  </div>
</div>
    </div>
    </>
  );
  }

export default ItemDetail;
import React from 'react'
import Swal from 'sweetalert2'
import { useState } from 'react'
import ItemCount from './ItemCount'
import {Link} from "react-router-dom"
import { useCartContext } from "./CartContext"


const ItemDetail = ({data}) => {
  
  const [cart , setCart] = useState(false);
  const { addProduct } = useCartContext();


  const onAdd=(quantity)=>{
    addProduct(data, quantity);
    setCart(true)
    Swal.fire({
      icon: 'success',
      title: 'Añadiste correctamente al carrito',
      })
  };


  return (
    <>
    <div className='container'>
     <h1>Detalle</h1>
     <hr></hr> 
    <div className="card mb-3">
    <div className="row g-0 justify-content-center text-center">
    <div className="col-md-4">
      <img src={data.imagen} className="img-fluid rounded-start" alt="" ></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{data.nombre}</h5>
        <p className="card-text">{data.info}</p>
        <p className="card-text">{data.category}</p>
        <p className="card-text">Precio:<small className="text-muted">{data.precio}</small></p>
      </div>    
      <div className='cart-button'>
      {cart ? (
						<Link to="/cart"> Terminar al carrito</Link>
					) : (
						<ItemCount initial={3} stock={5} onAdd={onAdd} />
					)}

      {/* <button href="#" className="btn btn-danger" onClick={añadir}>Añadir al Carrito</button> */}
      </div>
    </div>
  </div>
</div>
    </div>    
    </>
  );
};

export default ItemDetail;
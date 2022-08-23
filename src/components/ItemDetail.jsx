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
        <p className="card-text">Descripcion: {data.info}</p>
        {/* <p className="card-text">Categoria : {data.category}</p>Este item puede ir como no, asi que lo dejo comentado solo para proporcionar mas informacion */}
        <p className="card-text">Precio: $<small className="text-muted">{data.precio}</small></p>
      </div>    
      <div className='cart-button'>
      {cart ? (
        <>
						<Link to="/cart" className=' a-detalle btn btn-dark btn-outline-light'> Terminar al carrito</Link>
            <hr></hr> 
            <Link to="/" className=' a-detalle btn btn-ligth btn-outline-dark'>Continuar Comprando</Link>
        </>
					) : (
						<ItemCount initial={1} stock={10} onAdd={onAdd} />
					)}
      </div>
    </div>
  </div>
</div>
    </div>    
    </>
  );
};

export default ItemDetail;
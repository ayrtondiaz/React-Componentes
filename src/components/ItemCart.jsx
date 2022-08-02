import React from 'react';
import { useCartContext } from './CartContext';
import '../Styles/Estilos.css'



const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='card fz'>
            <div className="row g-0 justify-content-center text-center">
            <div className="col-md-4">
                <img src={product.imagen} alt={product.nombre} className='img-w'/>
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                <h5 className='card-text'>Título: {product.nombre}</h5>
                <p className='card-text'>Cantidad: {product.quantity}</p>
                <p className='card-text'>Precio u.: {product.precio}</p>
                <p className='card-text'>Subtotal: ${product.quantity * product.precio}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>
            </div>
        </div>       
    )
}

export default ItemCart
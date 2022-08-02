
import React from 'react';
import { useCartContext } from "./CartContext";

const CartWidget=()=>{
    const { totalProducts } = useCartContext();
    return(
        <div className='carrito-h'>
        <i className="fas fa-shopping-cart "></i>
        
        <button type="button" className="btn btn-primary position-relative btn-rad">            
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">            
            {totalProducts() || ""}
            </span>
        </button>
        </div>

    );
}

export default CartWidget;

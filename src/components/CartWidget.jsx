
import React from 'react';
import { useCartContext } from "./CartContext";
import Container from 'react-bootstrap/Container';
const CartWidget=()=>{
    const { totalProducts } = useCartContext();
    return(
        <Container>

        <div className='carrito-h'>
        <i className="fas fa-shopping-cart "></i>
        
        <button type="button" className="btn btn-dark position-relative btn-rad">            
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">            
            {totalProducts() || ""}
            </span>
        </button>
        </div>
        </Container>

    );
}

export default CartWidget;

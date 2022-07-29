import React from 'react'
 import { CartContext } from './CartContext'
import { useContext } from 'react'
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = () => {
  const {cart} = useContext(CartContext);
  console.log(cart); 
	

	if (cart.length === 0) {
		return (
			<>
				<p>No hay elementos en el carrito</p>
				<Link to="/">Hacer compras</Link>
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}			
			<button >Emitir compra</button>
		</>
	);
};

export default Cart;

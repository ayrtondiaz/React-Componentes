import React from 'react'
//  import { CartContext } from './CartContext'
import { useCartContext } from './CartContext';
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = () => {
	const { cartList, totalPrice } = useCartContext();
	<p> No hay elementos en el carrito</p>
	if(cartList.length ===0){
		return(
		<>
			<p> No hay elementos en el carrito</p>
			<Link to='/'>Hacer compras</Link>
			{console.log("no hay nada")}
		</>
		)
	}
	return(
		<>
		<div className='container'>
			<div className='row justify-content-center text-center'>
				<div className='col-lg-12 col-12'>
					{cartList.map((product) => (
						<ItemCart key={product.id} product={product} />
						))}
					<p>Total: {totalPrice()}</p>
					<button >Emitir compra</button>
			</div>
		</div>
		</div>
		</>
	)
 
}
export default Cart;

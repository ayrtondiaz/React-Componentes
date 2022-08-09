import React from 'react'
//  import { CartContext } from './CartContext'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from './CartContext';
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = () => {
	const { cartList, totalPrice } = useCartContext();
	
	const order = {
		buyer: {
			name: "Pablo",
			email: "Pablo@gmail.com",
			phone: "123123",
			address: "asdd",
		},
		items: cartList.map((product) => ({
			id: product.id,
			title: product.nombre,
			price: product.precio,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

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
					<button onClick={handleClick}>Emitir compra</button>
			</div>
		</div>
		</div>
		</>
	)
 
}
export default Cart;

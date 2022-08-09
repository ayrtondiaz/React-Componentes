import React, { useContext, useState } from "react";



const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartContextProvider = ({children})=>{
    const [cartList, setCartList]=useState([]);

    const isInCart = (id) =>
    cartList.find((product) => product.id === id) ? true : false;

    const clearCart=()=>{
        setCartList([]);
    }
    const removeProduct=(id)=>{
        setCartList(cartList.filter((producto)=>producto.id !== id));
    }

    const addProduct = (item, quantity) => {
		if (isInCart(item.id)) {
			setCartList(
				cartList.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCartList([...cartList, { ...item, quantity }]);
		}
	};
    
	const totalPrice = () => {
		 return cartList.reduce((prev, act) => prev + act.quantity * act.precio, 0);
        
	};

	const totalProducts = () =>
		cartList.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);
    // const addProduct = (item, newQuantity) => {
    //     	 	const newCart= cartList.filter(prod=>prod.id !== item.id);
    //             newCart.push({...item, quantity: newQuantity});
    //             setCartList(newCart);
    //     };
    console.log("carrito:",cartList);

    return(
        <CartContext.Provider value={{
            addProduct,
            isInCart,
            clearCart,
            removeProduct,
            totalPrice,
            totalProducts,
            cartList}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider;
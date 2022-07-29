import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    const [cartList, setCartList]=useState([]);

    const isInCart= (id)=>{
        cartList.find((producto)=>producto.id!==id);
    }
    const clearCart=()=>{
        setCartList([]);
    }
    const removeProduct=(id)=>{
        setCartList(cartList.filter((producto)=>producto.id !== id));
    }

    const addToCart =(item, quantity)=>{
        if(isInCart(item.id)){
            setCartList(
                cartList.map((producto)=>{
                    return producto.id === item.id
                    ?{...producto,quantity:producto.quantity+quantity}
                    :producto;
                }),
            );
        }else{
        setCartList([...cartList, {...item, quantity}])
        }
    }
    return(
        <CartContext.Provider value={{cartList, addToCart, isInCart, clearCart,removeProduct}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider;
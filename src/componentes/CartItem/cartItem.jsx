import React, {useContext} from "react";
import { CartContext } from "../../context/cartContext";
import "./cartItem.css"

const CartItem=({item})=>{
    const {deleteItem}=useContext(CartContext)
    return(
        <div className="box-cart">
            <img src={item.img} alt={item.name}/>
            <p>{item.nombre}</p>
            <p>${item.precio}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Subtotal: ${item.cantidad * item.precio}</p>
            <button onClick={()=>deleteItem(item.id)}>X</button>

        </div>
    )
}

export default CartItem
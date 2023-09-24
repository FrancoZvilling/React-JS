import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./cart.css"
import CartItem from "../CartItem/cartItem";

const Cart=()=>{
    const{cart, clear, total}=useContext(CartContext)
    return(
        <div className="carrito">
            {cart.length
            ? <div>
                {cart.map((item)=><CartItem key={item.id} item={item}/>)}
                <p className="text-total">Total a pagar: ${total()}</p>
                <div>
                    <button className="btn" onClick={clear}>VACIAR CARRITO</button>
                    <button className="btn2">FINALIZAR COMPRA</button>
                </div>
              </div>
            : <div>
                <h3>TU CARRITO ESTÁ VACÍO</h3>
              </div>}
        </div>
    )
}

export default Cart
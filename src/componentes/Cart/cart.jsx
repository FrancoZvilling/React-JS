import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { NavLink } from "react-router-dom";
import "./cart.css"
import CartItem from "../CartItem/cartItem";

const Cart=()=>{
    const{cart, clear, total}=useContext(CartContext)
    return(
        <div className="carrito">
            {cart.length
            ? <div>
                {cart.map((item)=><CartItem key={item.id} item={item}/>)}
                
                <div className="fin-compra">
                    <p id="total">Total a pagar: ${total()}</p>
                    <button className="btn" onClick={clear}>VACIAR CARRITO</button>
                    <NavLink id="btn2-margin" to="/checkout"><button className="btn2">FINALIZAR COMPRA</button></NavLink>
                </div>
              </div>
            : <div>
                <h3 id="vacio">TU CARRITO ESTÁ VACÍO</h3>
              </div>}
        </div>
    )
}

export default Cart
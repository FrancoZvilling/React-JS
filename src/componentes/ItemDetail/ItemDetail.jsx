import React, { useState, useContext } from "react";
import Contador from "../ItemCount"
import "./ItemDetail.css"
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({producto})=>{

    const [cantidadAgreg, setCantidadAgreg]=useState(false)
    const {addItem} = useContext(CartContext)
    

    const onAdd = (cantidad)=>{
        console.log("Compraste", cantidad)
        setCantidadAgreg(cantidad)
        addItem(producto, cantidad)
    }

    return(
        <>
            <div className="det-contenedor">
                <img id="det-img" src={producto.img} alt={producto.nombre}/>

                <div className="det-productos">
                    <h1 id="det-nombre">{producto.nombre}</h1>
                    <p id="det-autor">{producto.autor}</p>
                    <p id="det-precio">${producto.precio}</p>
                    { !cantidadAgreg ? <Contador className="det-count" initial={1} stock={producto.stock} onAdd={onAdd}/>
                 : <NavLink id="nav-carrito" to="/cart" ><button className="boton-carrito" >ir al carrito</button></NavLink>}
                </div>

            </div>

            <div className="det-detalle">
                <h2 id="det-tit">SINOPSIS</h2>
                <p>{producto.detalle}</p>
            </div>
        </>
       
        
    )
}

export default ItemDetail
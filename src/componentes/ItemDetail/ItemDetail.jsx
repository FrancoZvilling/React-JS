import React, { useState, useContext } from "react";
import Contador from "../ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom";
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
        <div className="det-contenedor">
            <img id="det-img" src={producto.img} alt={producto.nombre}/>

            <div>
                <h1>{producto.nombre}</h1>
                <p>{producto.autor}</p>
                <p className="det-precio">${producto.precio}</p>
                { !cantidadAgreg ? <Contador className="det-count" initial={1} stock={producto.stock} onAdd={onAdd}/>
                 : <button  as={Link} to={"/carrito"} className="boton-carrito">ir al carrito</button>}
            </div>

        </div>
        
    )
}

export default ItemDetail
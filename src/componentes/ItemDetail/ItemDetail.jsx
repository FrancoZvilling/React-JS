import React from "react";
import Contador from "../ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({producto})=>{

    const onAdd = (cantidad)=>{
        console.log("Compraste", cantidad)
    }

    return(
        <div className="detalles">
            <h1>{producto.nombre}</h1>
            <img src={producto.img} alt={producto.nombre}/>
            <p>{producto.descrip}</p>
            <p id="precio" className="precio">${producto.precio}</p>
            <Contador className="count" initial={1} stock={producto.stock} onAdd={onAdd}/>
        
        </div>
    )
}

export default ItemDetail
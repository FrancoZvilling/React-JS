import React from "react";
import Contador from "../ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({producto})=>{

    const onAdd = (cantidad)=>{
        console.log("Compraste", cantidad)
    }

    return(
        <div className="det-contenedor">
            <img id="det-img" src={producto.img} alt={producto.nombre}/>

            <div>
                <h1>{producto.nombre}</h1>
                <p>{producto.autor}</p>
                <p className="det-precio">${producto.precio}</p>
                <Contador className="det-count" initial={1} stock={producto.stock} onAdd={onAdd}/>
            </div>

        </div>
        
    )
}

export default ItemDetail
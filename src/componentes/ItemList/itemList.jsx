import React from "react";
import Item from "../Item/item";
import "./itemList.css"

const ItemList = ({productos, titulo})=>{

    return(
        <>
        <div>
            <h3>{titulo}</h3>
        </div>
        <div className="productos">
            {productos.map((prod)=> <Item key={prod.id} prod={prod}/>)}
        </div>
        </>
        
    )
}

export default ItemList
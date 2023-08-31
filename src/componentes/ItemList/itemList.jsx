import React from "react";
import Item from "../Item/item";
import "./itemList.css"

const ItemList = ({productos})=>{

    return(
        <div className="productos">
            {productos.map((prod)=> <Item key={prod.id} prod={prod}/>)}
        </div>
    )
}

export default ItemList
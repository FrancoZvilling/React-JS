import "./index.css"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/itemList"
import {traerProducto} from "../../mock/data"

const ItemListContainer = ()=>{

    const[productos, setProductos]=useState([])

    useEffect(()=>{
        traerProducto()
        .then((res)=> setProductos(res))
        .catch((error)=> console.log(error))
    },[])

    

    console.log(productos)
 return(
    <div>
        <ItemList productos={productos}/>
        
    </div>
    
    
 )
}

export default ItemListContainer
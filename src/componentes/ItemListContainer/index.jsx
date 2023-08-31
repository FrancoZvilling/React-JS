import "./index.css"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/itemList"
import {traerProducto} from "../../mock/data"
import { useParams } from "react-router-dom"

const ItemListContainer = ()=>{

    const[productos, setProductos]=useState([])
    const {categoriaId}=useParams()

    useEffect(()=>{
        traerProducto()
        .then((res)=> {
            if(categoriaId){
                setProductos(res.filter((item)=> item.categoria===categoriaId))
            }else{
                setProductos(res)
            }
        })
        .catch((error)=> console.log(error))
    },[categoriaId])

 return(
    <div>
        <ItemList productos={productos}/>
        
    </div>
    
    
 )
}

export default ItemListContainer
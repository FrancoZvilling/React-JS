import "./index.css"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/itemList"
import {traerProducto} from "../../mock/data"
import { useParams } from "react-router-dom"
import Template from "../Template/template"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebase"

const ItemListContainer = ()=>{

    const[productos, setProductos]=useState([])
    const {categoriaId}=useParams()


    //useEffect(()=>{
    //    traerProducto()
    //    .then((res)=> {
    //        if(categoriaId){
    //            setProductos(res.filter((item)=> item.categoria===categoriaId))
    //        }else{
    //            setProductos(res)
    //        }
   //     })
   //     .catch((error)=> console.log(error))
    //},[categoriaId])

    useEffect(()=>{
        const coleccionProductos = categoriaId ? query(collection(db, "productos"), where("categoria","==", categoriaId )):collection(db, "productos")
        getDocs(coleccionProductos)
        .then((res)=>{
            const list = res.docs.map((product)=>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
            setProductos(list)
        })
        .catch((error)=>console.log(error))
    },[categoriaId])

 return(
    <div>
        <Template/>
        <ItemList productos={productos} titulo="RECOMENDACIONES"/>
        
    </div>
    
    
 )
}

export default ItemListContainer
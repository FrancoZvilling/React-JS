import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./componentes/ItemListContainer"
import Navbar from "./componentes/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, {useEffect} from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebase/firebase"
import { listProductos } from "./mock/data"
import { CartProvider } from "./context/cartContext"
import Cart from "./componentes/Cart/cart"


function App() {

  //useEffect(()=>{
  //  const collectionProd = collection(db, "productos")
  //  listProductos.map((item)=>addDoc(collectionProd, item))
  //},[])

  return (
    
    <CartProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes> 
    </BrowserRouter>
    </CartProvider>
      
  )
}

export default App

import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./componentes/ItemListContainer"
import Navbar from "./componentes/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, {useEffect} from "react"
import { CartProvider } from "./context/cartContext"
import Cart from "./componentes/Cart/cart"
import Checkout from "./componentes/Checkout/checkout"


function App() {

  

  return (
    
    <CartProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes> 
    </BrowserRouter>
    </CartProvider>
      
  )
}

export default App

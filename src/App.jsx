import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./componentes/ItemListContainer"
import Navbar from "./componentes/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      
    </BrowserRouter>
      
  )
}

export default App

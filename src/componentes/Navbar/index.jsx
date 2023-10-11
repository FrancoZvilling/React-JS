import CartWidget from "../CarWidget";
import "./index.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return(
    <div className="button">
            
        <div className="navegacion">
       
            <div className="navegacion__logo">
            <NavLink to="/"><img src="https://i.postimg.cc/pdCCdQTh/Dorado-y-Azul-cono-de-Libro-Educaci-n-Logo.png"/></NavLink>
             </div>
    
            <ul className="navegacion__lista">
                <NavLink to="/categoria/mangas">Mangas</NavLink>
                <NavLink to="/categoria/ofertas">Ofertas</NavLink>
                <NavLink to="/categoria/recomendaciones">Recomendaciones</NavLink>
                
            </ul>
        
            <ul className="navegacion__utilidades">
                <a href=""><li>Buscar</li></a>
                <a href=""><li>Iniciar sesión</li></a>
                <NavLink to="/cart"><li>Carrito</li></NavLink>
                <NavLink to="/cart"><CartWidget/></NavLink>
            </ul>
        </div>
    </div>
    )
}

export default Navbar;
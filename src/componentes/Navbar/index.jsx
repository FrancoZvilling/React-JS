import CartWidget from "../CarWidget";
import "./index.css"
import loz from "C:/Users/franc/Desktop/Franco/Programacion/React/mi-proyecto-react/src/assets/img/loz.png"
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return(
    <div className="button">
            
        <div className="navegacion">
       
            <div className="navegacion__logo">
            <NavLink to="/"><img src={loz}/></NavLink>
             </div>
    
            <ul className="navegacion__lista">
                <NavLink to="/categoria/mangas">Mangas</NavLink>
                <NavLink to="/categoria/ofertas">Ofertas</NavLink>
                <NavLink to="/categoria/recomendaciones">Recomendaciones</NavLink>
                
            </ul>
        
            <ul className="navegacion__utilidades">
                <a href=""><li>Buscar</li></a>
                <a href=""><li>Iniciar sesión</li></a>
                <NavLink to="/cart"><a href=""><li>Carrito</li></a></NavLink>
                <NavLink to="/cart"><CartWidget/></NavLink>
            </ul>
        </div>
    </div>
    )
}

export default Navbar;
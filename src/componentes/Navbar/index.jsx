import CartWidget from "../CarWidget";
import "./index.css"
import loz from "C:/Users/franc/Desktop/Franco/Programacion/React/mi-proyecto-react/src/assets/img/loz.png"

const Navbar = () => {
    return(
        <div className="button">
            
    <div className="navegacion">
       
        <div className="navegacion__logo">
            <a href="index.html"><img src={loz}/></a>
        </div>
    
        <ul className="navegacion__lista">
            <a href=""><li>Tematica</li></a>
            <a href=""><li>Autores</li></a>
            <a href=""><li>Lengua</li></a>
            <a href=""><li>Recomendaciones</li></a>
        </ul>
        
        <ul className="navegacion__utilidades">
                <a href=""><li>Buscar</li></a>
                <a href=""><li>Iniciar sesión</li></a>
                <a href=""><li>Carrito</li></a>
                <CartWidget/>
        </ul>
    </div>
        </div>
    )
}

export default Navbar;
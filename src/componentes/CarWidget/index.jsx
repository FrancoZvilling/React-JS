import "./index.css"
import {FaShoppingCart} from "react-icons/fa"
import Badge from "react-bootstrap/Badge"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const CartWidget = () => {
    const{cartCantidad} = useContext(CartContext)
    return(
        <div className="car">
            
            <FaShoppingCart/>
            {cartCantidad()>0 && <Badge>{cartCantidad()}</Badge>}

        </div>
    )
}

export default CartWidget;
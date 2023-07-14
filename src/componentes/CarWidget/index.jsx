import "./index.css"
import {FaShoppingCart} from "react-icons/fa"
import Badge from "react-bootstrap/Badge"

const CartWidget = () => {
    return(
        <div className="car">
            
            <FaShoppingCart/>
            <Badge bg="danger">0</Badge>

        </div>
    )
}

export default CartWidget;
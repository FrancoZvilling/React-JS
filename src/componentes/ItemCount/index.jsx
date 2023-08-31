import { useState } from "react"
import "./index.css"


const Contador = ({stock, onAdd, initial}) => {
    const[value, setValue] = useState(initial)

    const restar = () =>{
        if(value>0){
            setValue(value - 1)
        }
    }

    const sumar = () =>{
        if(value<stock){
           setValue(value + 1) 
        }
        
    }



    return (
        <div className="box">

        <div className="count">
            <div className="add minus" onClick={restar}>-</div>
            <div className="value">{value}</div>
            <div className="add plus" onClick={sumar}>+</div>
        </div>
        
        <button className="button" disabled={value===0} onClick={()=>onAdd(value)}>Agregar</button>
        </div>
    )
}

export default Contador; 
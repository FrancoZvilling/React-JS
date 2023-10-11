import React, { useState, useContext } from "react";
import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import "./checkout.css"
import { CartContext } from "../../context/cartContext";
import {db} from "../../firebase/firebase"

const Checkout=()=>{

    const[user, setUser]=useState({})
    const[valiteEmail, setValidateEmail]=useState("")
    const[orderId, setOrderId]=useState("")
    const{cart, total, clear}=useContext(CartContext)

    const datosCompra = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name && !user.card && !user.phone){
            alert("Complete todos los datos por favor")
        }else{
            let order = {
                user,
                item: cart,
                total: total(),
                date: serverTimestamp()
            }

            const venta=collection(db, "orders")
            addDoc(venta, order)
            .then((res)=>{
                setOrderId(res.id)
                clear()
            })
            .catch((error)=>console.log(error))
        }
    }

    return(
        <div>
            {orderId !== "" 
            ?<div className="fin-orden">
                <h2>¡Tu orden ha sido confirmada con exito! Muchas gracias.</h2>
                <h5>Su número de orden es: <div id="orden">{orderId}</div></h5>
                <h5>Ya puedes cerrar la página. Para seguir comprando haz click en el logo de nuestra pagina para ir al inicio</h5>
            </div>  
            : <div className="checkout">
            <h1>Terminar compra</h1>
            <h3>Llenar con sus datos:</h3>
            <form onSubmit={finalizarCompra}>
                <div className="formulario">
                    <label htmlFor="nombre">Nombre completo: </label>
                    <input type="text" onChange={datosCompra} id="nombre" placeholder="Nombre y apellido" name="name" required/>
                </div>
                <div className="formulario">
                    <label htmlFor="email">Correo electronico: </label>
                    <input type="email" onChange={datosCompra} id="email" placeholder="Dirección de email" name="mail" required/>
                </div>
                <div className="formulario">
                    <label htmlFor="email2">Confirmar correo electronico: </label>
                    <input type="email" onChange={((e)=>setValidateEmail(e.target.value))} id="email2" placeholder="Repita su dirección de email" name="mail"/>
                </div>
                <div className="formulario">
                    <label htmlFor="tarjeta">Ingrese el número de su tarjeta: </label>
                    <input type="number" onChange={datosCompra} id="tarjeta" placeholder="Número de tarjeta" name="card" required/>
                </div>
                <div className="formulario">
                    <label htmlFor="telefono">Número de teléfono: </label>
                    <input type="number" onChange={datosCompra} id="telefono" placeholder="Número de celular" name="phone" required/>
                    <button id="boton" type="submit" disabled={valiteEmail !== user.mail} >Finalizar compra</button>
                </div>
                
                
            </form>
        </div>}
        </div>
    )
}

export default Checkout
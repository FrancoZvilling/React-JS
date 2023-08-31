import React from "react";
import { Button, Card } from "react-bootstrap";
import "./item.css"
import { Link } from "react-router-dom";

const Item = ({prod}) => {

    return (

        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.img} />
            <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                <Card.Text>
                    {prod.descrip}
                </Card.Text>
                <Card.Text id="precio">
                    ${prod.precio}
                </Card.Text>
                <Button as={Link} to={`/item/${prod.id}`} variant="primary">VER DETALLES</Button>
            </Card.Body>
        </Card>
        </>
        
        

    )
}

export default Item
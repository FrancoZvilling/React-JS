import "./index.css"

const ItemListContainer = (props)=>{
    console.log(props)
 return(
    <div className="saludo">
        <h1>{props.greeting}</h1>
    </div>
 )
}

export default ItemListContainer
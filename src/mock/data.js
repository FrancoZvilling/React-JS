const listProductos = [
    {id:"01", categoria:"recomendaciones", nombre:"Cuando reescribamos la historia", stock:10, precio:700, descrip:"Hola k tal", img:"https://i.postimg.cc/8CVR0grQ/297833425-550105016866351-6847338197914951119-n.jpg"},
    {id:"02", categoria:"manga", nombre:"Naruto", stock:8, precio:700, descrip:"Hola k tal", img:"https://i.postimg.cc/WbF0p1Gc/297856998-550105283532991-8508557646636295646-n.jpg"},
    {id:"03", categoria:"ofertas", nombre:"Saga Cazadores de sombras", stock:20, precio:2350, descrip:"Hola k tal", img:"https://i.postimg.cc/pTsKr9cR/297867875-550104326866420-3619176240786670121-n.jpg"},
    {id:"04", categoria:"ofertas", nombre:"Saga Anne with an e", stock:3, precio:2850, descrip:"Hola k tal", img:"https://i.postimg.cc/435927gV/297984449-550103686866484-3075940321419240744-n.jpg"},
    {id:"05", categoria:"recomendaciones", nombre:"Piense y hagase rico", stock:7, precio:700, descrip:"Hola k tal", img:"https://i.postimg.cc/wM3Lm6nJ/298041149-550104836866369-6789956472801174525-n.jpg"}
]

export const traerProducto = ()=>{
    return new Promise((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject("ERROR. Vuelva a intentar")
            }else{
                resolve(listProductos)
            }
        }, 500)
    })
}

export const getItem = (id)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(listProductos.find((item)=>item.id===id))
        },500)
    })
}
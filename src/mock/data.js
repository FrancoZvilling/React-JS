export const listProductos = [
    {categoria:"mangas", nombre:"My Hero Academia", stock:16, precio:700, autor:"Kōhei Horikoshi", detalle:"Izuku Midoriya, un chico sin poderes que, aunque nace en una sociedad en la que tener poderes especiales es de lo más normal, tiene su propio sueño de convertirse en un héroe que salve a las personas con una sonrisa en el rostro. Tras enterarse de que el no puede desarrollar ningún tipo de Don y tras sufrir nuevamente el abuso de sus compañeros de clase, es atacado por un villano en forma de lodo que trata de poseer su cuerpo. Es ahí cuando Izuku conoce a All Might, su héroe favorito quien lo salva. No conforme con obtener el autógrafo de su superhéroe, Izuku descubrirá a base de aferrarse, que ser héroe no es como se lo imaginaba.", img:"https://i.postimg.cc/C1DgQ5kN/298512868-550105250199661-9039013021889047523-n.jpg"},
    {categoria:"mangas", nombre:"Naruto", stock:8, precio:700, autor:"MASASHI KISHIMOTO", detalle:"En el Pandemonium, la discoteca de moda de Nueva York, Clary sigue a un atractivo chico de pelo azul hasta que presencia su muerte a manos de tres jóvenes cubiertos de extraños tatuajes. Desde esa noche, su destino se une al de esos tres cazadores de sombras, guerreros dedicados a liberar a la tierra de demonios y, sobre todo, al de Jace, un chico con aspecto de ángel y tendencia a actuar como un idiota…", img:"https://i.postimg.cc/WbF0p1Gc/297856998-550105283532991-8508557646636295646-n.jpg"},
    {categoria:"ofertas", nombre:"Saga Cazadores de sombras", stock:20, precio:2350, autor:"CASSANDRA CLARE", detalle:"Naruto, un ninja adolescente, sueña con convertirse en el hokage de su pueblo, pues quien detenta el título de hokage está considerado el shinobi más poderoso del lugar. Guiado por el espíritu demoníaco que hay en él, el huérfano Naruto aprende a controlar sus poderes como un ninja en esta serie de anime de aventuras." ,img:"https://i.postimg.cc/pTsKr9cR/297867875-550104326866420-3619176240786670121-n.jpg"},
    {categoria:"ofertas", nombre:"Saga Anne with an e", stock:3, precio:2850, autor:"LUCY M. MONTGOMERY", detalle:"Ana es una niña de once años, pelirroja, pecosa y muy traviesa. Es huérfana desde los tres años y, por error, termina como hija adoptiva de los hermanos Matthew y Marilla Cuthbert, en la granja de Tejas Verdes. Ellos esperaban un muchacho alto y fornido, pero en su lugar apareció Ana. A pesar de la inicial oposición de Marilla, Ana consigue convencerlos de que no la devuelvan al orfanato. La niña se integra rápidamente en el nuevo hogar, y al cabo de poco tiempo ya nadie en la Isla del Príncipe puede imaginarse la vida sin Ana." ,img:"https://i.postimg.cc/435927gV/297984449-550103686866484-3075940321419240744-n.jpg"},
    {categoria:"recomendaciones", nombre:"Piense y hagase rico", stock:7, precio:700, autor:"NAPOLEÓN HILL", detalle:"Un clásico para alcanzar la riqueza. Tras más de veinte años investigando científicamente a los hombres más ricos de su época, Napoleon Hill aprendió el secreto de la riqueza del famoso industrial y escritor Andrew Carnegie. Carnegie no sólo llegó a ser multimillonario sino que hizo millonarios a una multitud de personas a las que enseñó su sabiduría. Piense y hágase rico es una obra diseñada a partir de una experiencia para conseguir el triunfo económico y personal de la humanidad entera. Gracias a este libro, la riqueza y la realización personal están al alcance de todas aquellas personas que lo deseen. No dejes el éxito en manos de unos pocos y lucha por tu trozo de pastel." ,img:"https://i.postimg.cc/wM3Lm6nJ/298041149-550104836866369-6789956472801174525-n.jpg"}
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
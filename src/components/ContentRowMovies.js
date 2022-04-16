import React from 'react';
import SmallCard from './SmallCard';

//Tarjetas superiores: 1 users - 1 products - 1 byRoom - 1 byTextures
//cambiar iconos: users     icon:'fa-user-check' | products: <FontAwesomeIcon icon="fa-solid fa-couch" /> | byRoom <FontAwesomeIcon icon="fa-solid fa-door-open" /> | byTexture: <FontAwesomeIcon icon="fa-solid fa-horse" />
//(opcional)darle funcionalidad a las tarjetas: products al mismo de action de products 
//color de los detalles de las tarjetas en negro todos 


/*  Cada set de datos es un objeto literal */

/* <!-- Total Products --> */

let totalProducts = {
    title: 'Total Products',
    color: '', 
    cuantity: "100",
    icon: 'fa-couch'
}
let productsFromApi = "";
/* <!-- Total users --> */

let totalUsers = {
    title:' Total Users', 
    color:'success', 
    cuantity: '100',
    icon:'fa-user-check'
}

/* <!-- By Texture --> */

let byTexture = {
    title:'Categories By Texture' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-horse'
}

/* <!-- Actors quantity --> */

let byRoom = {
    title:'Categories by room' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-door-open'
}


let cartProps = [totalProducts, totalUsers, byRoom, byTexture];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;
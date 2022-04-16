import React from 'react';
import SmallCard from './SmallCard';

//Tarjetas superiores: 1 users - 1 products - 1 byRoom - 1 byTextures
//cambiar iconos: users     icon:'fa-user-check' | products: <FontAwesomeIcon icon="fa-solid fa-couch" /> | byRoom <FontAwesomeIcon icon="fa-solid fa-door-open" /> | byTexture: <FontAwesomeIcon icon="fa-solid fa-horse" />
//(opcional)darle funcionalidad a las tarjetas: products al mismo de action de products 
//color de los detalles de las tarjetas en negro todos 


/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

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
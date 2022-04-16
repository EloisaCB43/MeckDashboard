import React from 'react';
import SmallCard from './SmallCard';

//Tarjetas superiores: 1 users - 1 products - 1 byRoom - 1 byTextures
//cambiar iconos: users     icon:'fa-user-check' | products: <FontAwesomeIcon icon="fa-solid fa-couch" /> | byRoom <FontAwesomeIcon icon="fa-solid fa-door-open" /> | byTexture: <FontAwesomeIcon icon="fa-solid fa-horse" />
//(opcional)darle funcionalidad a las tarjetas: products al mismo de action de products 
//color de los detalles de las tarjetas en negro todos 

//LLAMADO A LA API
/*  Cada set de datos es un objeto literal */

/* <!-- Total Products --> */

function TotalCards({products, users}){


let totalProducts = {
    title: 'Total Products',
    color: '', 
    quantity: `${products.count}`,
    // this.products.count,
    icon: 'fa-couch'
}

/* <!-- Total users --> */

let totalUsers = {
    title:' Total Users', 
    color:'success', 
    quantity: `${users.total}`,
    icon:'fa-user-check'
}

/* <!-- By Texture --> */

let byTexture = {
    title:'Categories By Texture' ,
    color:'warning',
    quantity:`${Object.keys(products.countByCategories.byTexture).length}`,
    icon:'fa-horse'
}

/* <!-- categories quantity --> */

let byRoom = {
    title:'Categories by room' ,
    color:'warning',
    quantity:`${Object.keys(products.countByCategories.byRoom).length}`,
    icon:'fa-door-open'
}



let cartProps = [totalProducts, totalUsers, byRoom, byTexture];

    return (
    
        <div className="row">
            
            {cartProps.map( (products, i) => {

                return <SmallCard {...products} key={i}/>
            
            })}

        </div>
    )
}

export default TotalCards;
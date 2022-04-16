import React from 'react';
import imagenFondo from '../assets/images/1-5.jpg';
//cambiar boton a negro que se torne blanco como el de Sign In, centrado y justo del size del texto interno
//traer de api foto, descripcion, precio y arriba de la descripcion el nombre del producto
// revisar size de la imagen

function LastMovieInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Product Name</h5>  
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <div>
                    <h6 className="m-0 font-weight-bold text-gray-800">Product Price</h6>  
                    </div>
                    <div>
                    <p>Description Product</p></div>
                    <a className="btn btn-dark" target="_blank" rel="nofollow" href="/">Product Detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;

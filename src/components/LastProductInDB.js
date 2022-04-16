import React from 'react';
// import imagenFondo from '../assets/images/1-5.jpg';

function LastProductInDB(lastProduct){

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                    {lastProduct && <>
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">LAST PRODUCT</h5>  
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.lastProduct.image} alt=" MeckImage "/>
                    </div>
                    <div>
                    <h6 className="m-8 font-weight-bold text-gray-800">{lastProduct.lastProduct.name}</h6>  
                    </div>
                    <div>
                    <h6 className="m-8 font-weight text-gray-800">$ {lastProduct.lastProduct.price}</h6>  
                    </div>
                    <div>
                    <p>{lastProduct.lastProduct.description}</p></div>
                    <a className="btn btn-dark" target="_blank" rel="nofollow" href={lastProduct.lastProduct.detail}>View Detail</a>
                </div></>}
            </div>
        </div>
    )
}

export default LastProductInDB;

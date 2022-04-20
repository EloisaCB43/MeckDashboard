import React from 'react';
import ChartRow from './ChartRow';

//llamado a la api de productos 

//pasar props de apicall al chartRow
//si no se hace llamada a la api aca quitar mapeo y dejar solo chartRow dentro del tbody

function Chart (products){
    let productsArray = products.products.data
    console.log("ARRAY DE CHART", productsArray)
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4" id='productsChart'>

            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>By Room</th>
                                <th>By Texture</th>
                                <th>Color</th>
                                <th>Detail</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                      
                        <tbody>
                            {
                            productsArray.map( ( oneProduct , i) => {
                                return <ChartRow { ...oneProduct} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;
import React from 'react';
//desde la prop traida de Chart darle dinamismo a las columnas
//mapeo de generos reemplazar por colores
//Agregar los iconos
//llamada a la api y agregar mapeo de todos los productos
//En la columna detail un ICONO DE OJITO que nos lleve al link del detail 
//en Edit ICONO DE LAPIZ y en Delete ICONO DE TARRITO

function ChartRow(props){
    return (
                <tr>
                    <td>{props.Title}</td>
                    <td>{props.Length}</td>
                    <td>{props.Rating}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.Awards}</td>
                    <td>icono de delete</td>
                </tr>
            )
    }
    
        

export default ChartRow;
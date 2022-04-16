import React from 'react';
//desde la prop traida de Chart darle dinamismo a las columnas
//mapeo de generos reemplazar por colores
//llamada a la api y agregar mapeo de todos los productos


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Title}</td>
                    <td>{props.Length}</td>
                    <td>{props.Rating}</td>
                    <td></td>
                    <td></td>
                    <td><ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul></td>
                    <td><i class="fas fa-eye"></i></td>
                    <td><i class="fas fa-pencil-alt"></i></td>
                    <td><i class="fas fa-trash-alt"></i></td>
                    
                </tr>
            )
    }
    
        

export default ChartRow;
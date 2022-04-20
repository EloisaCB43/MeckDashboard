import React from 'react';

function ChartRow(props){
    // console.log("ONE PRODUCT DENTRO DE CHART", props)
    return (
        <>
                <tr id="productsChart">
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                    <td>{props.byTexture}</td>
                    <td>{props.byRoom}</td>
                    <td><ul>
                            {props.color.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                                ) }
                        </ul></td>
                    <td><a href={props.detail}><i class="fas fa-eye"></i></a></td>
                    <td><i class="fas fa-pencil-alt"></i></td>
                    <td><i class="fas fa-trash-alt"></i></td>
                </tr>
                </>
            )
    }
    
        

export default ChartRow;
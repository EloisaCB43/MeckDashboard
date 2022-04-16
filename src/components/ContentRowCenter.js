import React from 'react';
import LastProductInDB from './LastProductInDB';
import CategoriesInDB from './CategoriesInDB';
function ContentRowCenter({products}){
    // console.log("PRODUCTS EN CONTENT ROW", products)
    let lastProduct = products.data.slice(-1).pop();
    // console.log("LAST PRODUCTS EN CONTENT ROW", lastProduct)
    // data.push(lastProduct)
    return (
        <div className="row">
            
            {/*<!-- Last Product in DB -->*/}
            {products && (<>
            <LastProductInDB lastProduct={lastProduct}/>
            {/*<!-- End content row last products in Data Base -->*/}

            {/*<!-- Categories in DB -->*/}
            <CategoriesInDB categories={products.countByCategories}/></>)}

        </div>
    )
}

export default ContentRowCenter;
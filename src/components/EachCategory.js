import React from "react";

function EachCategory({categoryKey, categoryObject, byRoom}){
  let productCount = null

  if(byRoom){
    productCount = categoryObject.categories.byRoom[categoryKey].products
  } else {
   productCount= categoryObject.categories.byTexture[categoryKey].products

  }

    return (
    <div className="col-lg-6 mb-4">
    <div className="card bg-dark text-white shadow">
          <div className="card-body">{`${categoryKey}: ${productCount}`}</div>
         </div>
            </div>
    )
}

export default  EachCategory;
import React from "react";

function EachCategory({categoryKey, categoryObject, byRoom}){
  let productCountRoom = categoryObject.categories.byRoom[categoryKey].products
  let productCountTexture= categoryObject.categories.byTexture[categoryKey].products

  console.log("EL BYROOM EN EACH CATEGORY", byRoom)
  
  // if(categoryKey && categoryObject){
  //    productCountRoom = categoryObject.categories.byRoom[categoryKey].products;
  //    productCountTexture= categoryObject.categories.byTexture[categoryKey].products;
  // }
  // console.log("el byRoom en each category", byRoom)
  
  // console.log("EACH CATEGORY PRODUCT COUNT ROOM", productCountRoom)

    return (
    <div className="col-lg-6 mb-4">
      {(byRoom) ?
        (<div className="card bg-dark text-white shadow">
          <div className="card-body">{`${categoryKey}: ${productCountRoom}`}</div>
         </div>) : (<div className="card bg-dark text-white shadow">
          <div className="card-body">{`${categoryKey}: ${productCountTexture}`}</div> 
        </div>)
      }

            </div>
    )
}

export default  EachCategory;
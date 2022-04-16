import {useState} from "react";
import EachCategory from './EachCategory';
//traer de la api los generos dentro de byroom y dentro de bytexture
//Modificar genresinDB para que muestre los generos dentro de ByRoom y byTexture (dentro de la misma tarjeta que muestre las dos opciones y que una se quede opaca mientras se muestra la otra)
//Que las tarjetas de cada categoria muestren el total de productos
//Chequear colores de las tarjetas
//ver si fondo negro y cajitas blancas con un mouseOver que las vuelva mas claras (gris violeta o mas claro)
//ver colores en ejecutables.txt
//Queremos que al apretar el <a> de byRoom se setee un state que le indique al codigo que mapee el array de byRoom y lo mismo con byTexture
//necesitamos una funcion que se ejecute con el evento onclick dentro de cada <a>

function CategoriesInDB(categories) {
  let byRoomCategories = Object.keys(categories.categories.byRoom)
  let byTextureCategories = Object.keys(categories.categories.byTexture)
  
  let [byRoom, setByRoom] = useState(true)
  let [byTexture, setByTexture] = useState(false)

const laFuncionDeByRoom =
function () {
if (byTexture){
  setByTexture(false)
  setByRoom(true)
} else {
  setByRoom(true)
}
}

const laFuncionDeByTexture =
function () {
  if (byRoom){
    setByRoom(false)
    setByTexture(true)
  } else {
    setByTexture(true)
  }
}


  return (
   
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3"> <ul className="nav nav-pills nav-fill">
  <li className="nav-item">
    <a className={`nav-link ${byRoom ? "active" : null}`} aria-current="page" onClick={laFuncionDeByRoom} >By Room</a>
  </li>
  <li className="nav-item">
    <a className={`nav-link ${byTexture ? 'active' : null}`} aria-current="page"  onClick={laFuncionDeByTexture}>By Texture</a>
  </li>
  </ul>
  
          {/* <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5> */}
        </div>
        <div className="card-body">
          <div className="row">
            {byRoom && categories &&  byRoomCategories.map(oneCategory => 
            <EachCategory categoryKey={oneCategory} categoryObject={categories} byRoom={byRoom}/>
              )}
               {byTexture && categories && byTextureCategories.map(oneCategory => 
            <EachCategory categoryKey={oneCategory} categoryObject={categories} byRoom={byRoom}/>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDB;

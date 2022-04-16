import React from "react";
//traer de la api los generos dentro de byroom y dentro de bytexture
//Modificar genresinDB para que muestre los generos dentro de ByRoom y byTexture (dentro de la misma tarjeta que muestre las dos opciones y que una se quede opaca mientras se muestra la otra)
//Que las tarjetas de cada categoria muestren el total de productos
//Chequear colores de las tarjetas
//ver si fondo negro y cajitas blancas con un mouseOver que las vuelva mas claras (gris violeta o mas claro)
//ver colores en ejecutables.txt
function LastMovieInDb() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Acción</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Animación</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Aventura</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Ciencia Ficción</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Comedia</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Documental</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Drama</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Fantasia</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Infantiles</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Musical</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;

import React from 'react';
import foto from '../assets/images/darth-vader.jpg';
//cambiar iconos -- agregar varita magica de crear 
//cambiar user avatar (opcional: funcionalidad de login)
//cambiar nombre de user
// Hacerlo negro de bg y palabritas e iconos en blanco
function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-gradient-primary topbar mb-4 static-top shadow">

					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					{/* <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button> */}

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						{/*<!-- Nav Item - New Product -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
							<span className="mr-2 d-none d-lg-inline text-white small">Add product</span>
								<i className="fas fa-magic fa-fw"></i>
								{/*<!-- Counter - Messages -->*/}
								{/* <span className="badge badge-danger badge-counter">7</span> */}
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-white small">Usuario de Meck</span>
								<img className="img-profile rounded-circle" src={foto} alt="Jordan Walke - Creador de React" width="60"/>
							</a>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;
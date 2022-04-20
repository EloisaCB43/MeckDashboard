import React from 'react';
import image from '../assets/images/logo-meck-design-black.png';

//Actions-NavItems: link acceso al sitio web - link acceso al github - link acceso a todos los productos - link acceso a todos los usuarios
//cambiar navItem Dashboard para que diga "Dashboard - Meck Design" y cambiar icono a uno a decidir OPCION => <FontAwesomeIcon icon="fa-solid fa-tree" />
//iconos de actions: github <FontAwesomeIcon icon="fa-brands fa-github" /> | sitio web <FontAwesomeIcon icon="fa-solid fa-globe" />  | products <FontAwesomeIcon icon="fa-solid fa-couch" /> | users <FontAwesomeIcon icon="fa-solid fa-user-group" />
//cambiar background color a negro y palabritas en blanco


function SideBar(props){
    // console.log("EL T PROPS", props)
    // const scrollToAnchor = ()=>{
    //     let anchorName = props.location.query.anchorName;
    //     if (anchorName) {
    //         let anchorElement = document.getElementById(anchorName);
    //         if(anchorElement) { anchorElement.scrollIntoView(); }
    //     }
    // }
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav pt-sm-3 bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Meck Design"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                    
                    <i className="fa-solid fa-keynote"></i> 
                        <span>Dashboard - Meck Design</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="http://localhost:4000">
                        <i className="fas fa-globe"></i>
                        <span>Go to website</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/kevald12/Grupo_6_MeckDesign">
                        <i className="fas fa-code-branch"></i>
                        <span>Go to Github</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/#productsChart">
                        <i className="fas fa-couch"></i>
                        <span>Products</span></a>
                </li>

                 {/*<!-- Nav Item - Tables -->*/}
                 <li className="nav-item">
                    <a 
                    // onClick={document.getElementById('productsChart').scrollIntoView()}
                    className="nav-link" href="/">
                        <i className="fas fa-user"></i>
                        <span>Users</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;
import React from 'react';
//Fondo negro con letras blancas como el footer del sitio
function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; Meck Dashboard 2022</span>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;
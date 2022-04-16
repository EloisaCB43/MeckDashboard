import React from 'react';
//Fondo negro con letras blancas como el footer del sitio
function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-gradient-footer">
				<div className="container my-auto">
					<div className="copyright text-center my-auto text-white">
						<span>Copyright &copy; Meck Dashboard 2022</span>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;
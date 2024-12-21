import React from "react";
function Navbar() {
	return (
		<>
			<div className="navbar navbar-expand-sm navbar-dark bg-success">Hello Keshia
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse">
				<ul class="navbar-nav mr-auto">
					<li className="nav-item">
						<a class="nav-link" href="/">Home <span class="sr-only"></span></a>
					</li>
					<li className="nav-item">
						<a class="nav-link" href="works">Works <span class="sr-only"></span></a>
					</li>	
					<li className="nav-item">
						<a class="nav-link" href="resume">Resume <span class="sr-only"></span></a>
					</li>			
				</ul>
				</div>
			</div>

		</>
	)
}

export default Navbar;
import React from "react";
import photo from "../images/photo.jpg"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
	const [darkTheme, setDarkTheme] = useState(true)
	const themeChange = () => {
		setDarkTheme(!darkTheme);
		document.documentElement.setAttribute("dark-theme",!darkTheme)
	}
	return (
		<>
			<div className="navbar navbar-expand-sm navbar-dark bg-primary m-auto px-3">Hello Keshia
				
				{darkTheme ?
				(<FontAwesomeIcon icon={faSun} onClick={themeChange} />)
				:
				(<FontAwesomeIcon icon={faMoon} onClick={themeChange} />)
				}
			{/* <img src= {photo} className="img-fluid"/> */}
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li className="nav-item active">
							<a class="nav-link" href="/">Home <span class="sr-only"></span></a>
						</li>
						<li className="nav-item">
							<a class="nav-link" href="works">Works</a>
						</li>
						<li className="nav-item">
							<a class="nav-link" href="resume">Resume</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Navbar;
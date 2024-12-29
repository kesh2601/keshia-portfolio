import React from "react";
import photo from "../../images/photo.jpg";
import "../Navbar/navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
	const [darkTheme, setDarkTheme] = useState(true)
	const themeChange = () => {
		setDarkTheme(!darkTheme);
		document.documentElement.setAttribute("theme",!darkTheme)
	}
	return (
		<>
			<div className="navbar p-3">Hello Keshia
				{/* <div className="icon-container">	
				<div class="circle"> */}
					{darkTheme ? (<FontAwesomeIcon icon={faSun} color="white" onClick={themeChange} />) : (<FontAwesomeIcon icon={faMoon} onClick={themeChange} />)}
				{/* </div>
				</div> */}
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav">
						<li className="nav-item active">
							<a class="nav-link" href="/">Home </a>
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
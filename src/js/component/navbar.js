import React from "react";
import { Link } from "react-router-dom";
import { Favoritos } from "./Favoritos.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<img src = "https://pngimg.com/d/star_wars_logo_PNG34.png" alt="Logo Star Wars" width="80px" style={{ marginLeft: '20px' }}/>
			</Link>
			<div className="ml-auto mr-3">
				<Favoritos />
			</div>
		</nav>
	);
};

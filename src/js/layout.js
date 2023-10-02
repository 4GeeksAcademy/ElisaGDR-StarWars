import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.js";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import { Personas } from "./component/Personas.jsx";
import { Vehiculos } from "./component/Vehiculos.jsx";
import { Planetas } from "./component/Planetas.jsx";
import { DetailedCharacter } from "./views/DetailedCharacter.jsx";
import { DetailedStarship } from "./views/DetailedStarship.jsx";
import { DetailedPlanet } from "./views/DetailedPlanet.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { idContact } = useParams();


	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personas" element={<Personas/>}/>
						<Route path="/detailed-character/:idContact" element={<DetailedCharacter />} />
						<Route path="/vehiculos" element={<Vehiculos/>}/>
						<Route path="/detailed-starship/:idContact" element={<DetailedStarship />} />
						<Route path="/planetas" element={<Planetas/>}/>
						<Route path="/detailed-planet/:idContact" element={<DetailedPlanet />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

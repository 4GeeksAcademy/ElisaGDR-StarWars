import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useState, useEffect, useContext } from "react";
import { Personas } from "../component/Personas.jsx";
import { Vehiculos } from "../component/Vehiculos.jsx";
import { Planetas } from "../component/Planetas.jsx";
import "../../styles/home.css";


export const Home = () => (
	<div className="text-center mt-5 bg-dark">
		<div>
			<Personas />
			<Vehiculos />
			<Planetas />
		</div>
	</div>
);

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailedPlanet } from "../views/DetailedPlanet.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export const Planetas = () => {

    const { store, actions } = useContext(Context);
    const addToFavorites = (planet) => {
        actions.addToFavorites(planet);
      };

    return (
        <div>
            <h1 style={{ color: "red", textAlign: "left", margin: "60px" }}>Planets</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                {store.planets.map((item, ContactId) =>
                    <div key={item.uid} className="card" style={{ width: "18rem", background: "#C0C0C0" }}>
                        <img
                            className="card-img-top m-auto"
                            src="https://ayay.co.uk/backgrounds/star_wars/locations/planet-alderaan.jpg"
                            style={{ width: "200px" }}
                            alt="Card image cap" />
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <Link to={"/detailed-planet/" + item.uid}>
                                    <button className="btn btn-outline-primary mr-3px">Learn more!</button>
                                </Link>
                                <button type="button" className="btn btn-outline-warning" onClick={() => addToFavorites(item)}><FontAwesomeIcon icon={faHeart} /></button>
                            </div>
                        </div>
                    </div>
                )};
            </div>
        </div>

    );
};
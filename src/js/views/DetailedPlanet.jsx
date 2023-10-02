import React, { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailedPlanet = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    actions.getDetailedPlanets(params.idContact);
    // const item = store.planetoid;
    // console.log(item);
    if (!store.planetoid.uid) {
         return (<Navigate to = "/planetas"/>) 
    } else {

    return (
        <div>
            <div className="card">
                <h5 className="card-header">{store.planetoid.properties.name}</h5>
                <div className="card-body d-flex justify-content-between align-items-center m-20px">
                    <img className="card-img-top"
                        src="https://exoplanets.nasa.gov/internal_resources/122"
                        style={{ width: "400px", margin: "20px" }}
                        alt="Card image cap" />
                    <p className="card-text"> {store.planetoid.description} </p>
                </div>
                <div className="d-flex justify-content-between align-items-center m-20px">
                    <span>Diameter: {store.planetoid.properties.diameter}</span>
                    <span>Gravity: {store.planetoid.properties.gravity}</span>
                    <span>Terrain: {store.planetoid.properties.terrain}</span>
                </div>
            </div>

        </div>
    );
};
};
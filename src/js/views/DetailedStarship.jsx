import React, { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const DetailedStarship = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    actions.getDetailedStarships(params.idContact);
    // const item = store.vehicles;
    // console.log(item);
    if (!store.vehicles.uid) {
         return (<Navigate to = "/vehiculos"/>) 
    } else {

    return (
        <div>
            <div className="card">
                <h5 className="card-header">{store.vehicles.properties.name}</h5>
                <div className="card-body d-flex justify-content-between align-items-center m-20px">
                    <img className="card-img-top"
                        src="https://lumiere-a.akamaihd.net/v1/images/databank_nabooroyalstarship_01_169_e61f677e.jpeg?region=0%2C0%2C1560%2C878"
                        style={{ width: "400px", margin: "20px" }}
                        alt="Card image cap" />
                    <p className="card-text"> {store.vehicles.description} </p>
                </div>
                <div className="d-flex justify-content-between align-items-center m-20px">
                    <span>Model: {store.vehicles.properties.model}</span>
                    <span>Starship Class:: {store.vehicles.properties.starship_class}</span>
                    <span>Hyperdrive Rating:: {store.vehicles.properties.hyperdrive_rating}</span>
                </div>
            </div>

        </div>
    );
};
};
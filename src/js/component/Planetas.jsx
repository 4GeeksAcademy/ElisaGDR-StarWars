import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Planetas = () => {

    const { store, actions } = useContext(Context);

    return (
        <div>
            <h1 style={{ color: "red", textAlign: "left", margin: "60px" }}>Planets</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                {store.planets.map((item) =>
                    <div className="card" style={{ width: "18rem", background: "#C0C0C0" }}>
                        <img
                            className="card-img-top m-auto"
                            src="https://static.wikia.nocookie.net/esstarwars/images/6/61/Mustafar-TROSGG.png/revision/latest?cb=20201111174744"
                            style={{ width: "200px" }}
                            alt="Card image cap" />
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-outline-primary mr-3px">Learn more!</button>
                                <button type="button" className="btn btn-outline-warning"><FontAwesomeIcon icon={faHeart} /></button>
                            </div>
                        </div>
                    </div>
                )};
            </div>
        </div>

    );
};
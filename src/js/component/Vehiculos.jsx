import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Vehiculos = () => {

    const { store, actions } = useContext(Context);

    return (
        <div>
            <h1 style={{ color: "red", textAlign: "left", margin: "60px" }}>Starships</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                {store.starships.map((item) =>
                    <div className="card" style={{ width: "18rem", background: "#C0C0C0" }}>
                        <img
                            className="card-img-top m-auto"
                            src="https://preview.free3d.com/img/2015/03/2408169433127191712/i4n8egp6.jpg"
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
import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { DetailedCharacter } from "../views/DetailedCharacter.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export const Personas = () => {

    const { store, actions } = useContext(Context);
    // store.characters = {};
    const addToFavorites = (character) => {
        actions.addToFavorites(character, 'character');
      };
    
    return (
        <div>
            <h1 style={{ color: "red", textAlign: "left", margin: "60px" }} >Characters</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                {store.users.map((item, ContactId) =>
                    <div key={item.uid} className="card" style={{ width: "18rem", background: "#C0C0C0" }}>
                        <img
                            className="card-img-top m-auto"
                            src="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-darth-maul-16x9-xl.jpg.adapt.crop1x1.320w.jpg"
                            style={{ width: "200px" }}
                            alt="Card image cap" />
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <Link to={"/detailed-character/" + item.uid}>
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
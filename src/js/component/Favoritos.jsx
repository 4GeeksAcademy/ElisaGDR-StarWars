import React, {useContext} from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export const Favoritos = () => {

    const { store, actions } = useContext(Context);
    const removeFromFavorites = (item) => {
        console.log('Removing from favorites:', item);
        const updatedFavorites = store.favorites.filter((fav) => fav.uid !== item.uid);
        actions.setStore({ favorites: updatedFavorites });
    };

    return (
        <div>
            <div className="btn-group">
                <button 
                    type="button"
                    className="btn btn-dark dropdown-toggle m-3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Favorites  {store.favorites.length}
                </button>
                <ul className="lista dropdown-menu dropdown-menu-end">
                    {store.favorites.map((favorite) => (
                        <li key={favorite.uid} className="dropdown-item">
                            
                                {favorite.name}
                                <button
                                    className="btn ml-5"
                                    onClick={() => removeFromFavorites(favorite)}>
                                    <FontAwesomeIcon icon={faXmark} style={{color: "#ea1a1a",}} />
                                </button>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
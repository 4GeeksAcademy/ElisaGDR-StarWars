import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Favoritos = () => {

    return (
        <div>
            <div className="btn-group">
                <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Favorites
                </button>
                <div className="dropdown-menu">
                    <Link to="#" className="dropdown-item">
                        Action
                    </Link>
                    <Link to="#" className="dropdown-item">
                        Action2
                    </Link>
                </div>
            </div>
        </div>
    );
 };
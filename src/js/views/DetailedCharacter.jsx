import React, { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const DetailedCharacter = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    actions.getDetailedCharacters(params.idContact);
    // const item = store.characters;
    // console.log(item);
    /* if (!store.characters.uid) {
         return (<Navigate to = "/personas"/>) 
    } else {
    */
    return (
        <div>
            <div className="card">
                <h5 className="card-header">{store.charactersDetails.name}</h5>
                <div className="card-body d-flex justify-content-between align-items-center m-20px">
                    <img className="card-img-top"
                        src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2017/04/Leia.jpg?fit=888%2C456&quality=50&strip=all&ssl=1"
                        style={{ width: "400px", margin: "20px" }}
                        alt="Card image cap" />
                    <p className="card-text"> {store.characters.description} </p>
                </div>
                <div className="d-flex justify-content-between align-items-center m-20px">
                    <span>Height: {store.charactersDetails.height}</span>
                    <span>Gender: {store.charactersDetails.gender}</span>
                    <span>Skin Color: {store.charactersDetails.skin_color}</span>
                </div>
            </div>

        </div>
    );
};
// };
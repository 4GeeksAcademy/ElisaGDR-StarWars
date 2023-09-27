import React from "react";
import { Link , useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const DetailedCharacter = () => {
    const { store, actions } = useContext(Context);
    const { idContact } = useParams();
    const character = store.characters.find((item) => item.uid === idContact);
  
    return (
        <div>
             {store.characters.map((item, idContact) =>
          
            <div key={item.idContact} className="card">
                <h5 className="card-header">{character.properties.name}</h5>
                <div className="card-body d-flex justify-content-between align-items-center m-20px">
                    <img className="card-img-top"
                        src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2017/04/Leia.jpg?fit=888%2C456&quality=50&strip=all&ssl=1"
                        style={{ width: "400px", margin: "20px"}}
                        alt="Card image cap" /> 
                    <p className="card-text"> {item.description} </p>
                </div>
                <div className="d-flex justify-content-between align-items-center m-20px">
                    <span>Height: {item.properties.height}</span>
                    <span>Gender: {item.properties.gender}</span>
                    <span>Skin Color: {item.properties.skin_color}</span>
                </div>
            </div>
                )};
        </div>
    );
};
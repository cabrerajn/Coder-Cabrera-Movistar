import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {

    return (
        <>
            <div>
            <div className="card">
                <h2>{item.title}</h2>
                <img src={item.pictureUrl} className="imgProd" />
                <p>{item.description}</p>
                <p>${item.price}</p>
                <p>Stock Disponible: {item.stock}</p>
                    <button> <Link to={"/item/" + item.id}>Ver detalles de producto</Link></button>
                
            </div> 
            </div>
        </>
    );
}
import React from "react";

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
                <button> Ver detalles de producto</button>
                
            </div> 
            </div>
        </>
    );
}
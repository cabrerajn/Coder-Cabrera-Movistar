import React from "react";
import { Link } from 'react-router-dom';
import MasMenos from "./MasMenos";


export default function ItemDetail({ producto }) {

    return (
        <>
            <div>
                {(producto.id) ?
                    <>
                        <div className="card">
                            <h2>{producto.title}</h2>
                            <img src={producto.pictureUrl} className="imgProd" />
                            <p>{producto.description}</p>
                            <p>${producto.price}</p>
                            <p>Stock Disponible: {producto.stock}</p>
                        </div>
                        <div className="itemDetail">
                            <button><Link to={"/"}>Volver</Link></button>
                         </div>
                        <div className="itemDetail">
                            <p>Cantidad<MasMenos tope={producto.stock} /></p>
                        </div>    
                        <div className="itemDetail">
                            <button>Comprar</button>
                        </div>
                    </>
                    :
                    <>Loading...</>
                }
                {/* <ComponenteQueTenemos stock={producto.stock} id={producto.id}/> */}
            </div>
        </>
    );
}
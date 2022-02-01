import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <>
            <div id="navbar">
                <ul>
                    <li><button className="boton-menu"><Link to={"/"}><img src="https://tienda.movistar.com.ar/media/logo/stores/1/logo-movistar.png" /></Link></button></li>
                    <li><button className="boton-menu">Alcatel</button></li>
                    <li><button className="boton-menu">Huawei</button></li>
                    <li><button className="boton-menu"><Link to={"/category/LG"}>LG</Link></button></li>
                    <li><button className="boton-menu"><Link to={"/category/Motorola"}>Motorola</Link></button></li>
                    <li><button className="boton-menu">Nokia</button></li>
                    <li><button className="boton-menu"><Link to={"/category/Samsung"}>Samsung</Link></button></li>
                    <li><button className="boton-menu">Sony</button></li>
                    <li><button className="boton-menu">TCL</button></li>
                    <CartWidget />
                </ul>
            </div>
            
        
        </>
    )
}
import React from "react";
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <>
            <div id="navbar">
                <ul>
                    <li><button className="boton-menu"><img src="https://tienda.movistar.com.ar/media/logo/stores/1/logo-movistar.png" /></button></li>
                    <li><button className="boton-menu">Alcatel</button></li>
                    <li><button className="boton-menu">Huawei</button></li>
                    <li><button className="boton-menu">LG</button></li>
                    <li><button className="boton-menu">Motorola</button></li>
                    <li><button className="boton-menu">Nokia</button></li>
                    <li><button className="boton-menu">Samsung</button></li>
                    <li><button className="boton-menu">Sony</button></li>
                    <li><button className="boton-menu">TCL</button></li>
                    <CartWidget />
                </ul>
            </div>
            
        
        </>
    )
}
import React, {useState} from "react";



export default function CuentaClic() {

    const [clics, setClics] = useState(0);


    return (
        <>
            <button onClick={()=>setClics(clics+1)}>Clickeame</button>
            <p>Me clickearon: {clics} veces</p>
        </>
    )
}
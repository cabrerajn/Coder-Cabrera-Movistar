import React, { useEffect, useState } from "react";


export default function Promises() {
    
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        //primer ejemplo
        const promise = new Promise((resolve, reject) => {
            const number = Math.floor(Math.random() * 10);
            setTimeout(
                () => (number > 5 ? resolve(number) : reject(new Error("Menor a 5"))),
                3000
            );
        });
    
        promise
            .then((number) => console.log(number))
            .catch((error) => console.error(error));

        //ejemplo con fetch 1
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => console.log(err));
    

        //ejemplo con fetch y renderizado de productos con map 
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                console.log(json);
            });
    }, []);

    return (
        <>
            <h1>prueba de promesas</h1>
            {items.map((item, key) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </>
    );
}



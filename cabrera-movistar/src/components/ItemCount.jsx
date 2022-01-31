import React, { useState } from "react";


export default function ItemCount() {
    
   
        const min = 1;
        const max = 100;
        const [add, setAdd] = useState(min);
  

        function adittion() {
            const newValue = add + 1;
            if (newValue <= max) {
                setAdd(newValue);
      
            }
        }

        function substraction() {
            const newValue = add - 1;
            if (newValue >= min) {
                setAdd(newValue);
            }
        }

        function onAdd() {
            alert(`compraste ${add} items!`);
        }
        return (
            <>
                <div className="ItemCount">
                    <button onClick={substraction}>-</button>
                    <span>{add}</span>
                    <button onClick={adittion}>+</button>
                    <button onClick={onAdd}>Agregar al carrito</button>
                </div>
            </>
        );
    ;
}

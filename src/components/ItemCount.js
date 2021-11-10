import { useState } from "react";
import './ItemCount.css';
const ItemCount = () => {
    const [Carrito, setCarrito] = useState(0)
    const add = () =>{
        if (Carrito < 10){
            setCarrito(Carrito +1)
        } else { alert('No hay más stock disponible!')}
    }
    const decreace = () => {
        if (Carrito > 0) setCarrito(Carrito -1)
    }
    return (
        <div className="card-ubicada">
                <button onClick={add}>agregar</button>
                <button onClick={decreace}>eliminar</button>
                <p className="carrito">
                 {Carrito}
                </p>
            </div>
    )
}
export default ItemCount
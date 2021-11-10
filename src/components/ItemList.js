import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import {item} from './Item';
import Producto from './ItemListContainer';

function ItemList(){
    const [productos, setProductos] = useState([]);
    useEffect (() => {
        const task = new Promise ((resolve) => {
            setTimeout(() =>{
                resolve (item);
            }, 4000);
        });
        task.then (
            (result) =>{
                setProductos(result);
                return "retorno uno"
            },
            (error) =>{
                console.log(error)
                return "error"
            },
        )
        .catch((err)=>{
            console.log("soy el catch ", err)
        })
        .finally(()=>{
            console.log("me ejecuto siempre")
        })
    }, []);

useEffect(() => {

},[productos])

console.log("productos ", productos)
    return(
        <div className="app">
            {productos && productos.map((producto)=> {
return( <Producto key={producto.id} name={producto.title} price={producto.price} img={producto.img} stock={producto.stock} id={producto.id} />)
            })}
        </div>
    )
}

export default ItemList;
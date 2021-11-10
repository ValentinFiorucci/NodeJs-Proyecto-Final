import React, { useEffect, useState } from 'react';
import { item } from './Item';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';

const ItemDetailContainer=()=>{
    const {id}= useParams(item)
    const[producto, setProducto] = useState([]);
    console.log(id)
    useEffect(()=>item.filter((e)=>{
        if(e.id===id){
            return setProducto(e)
        } 
        return null
    }),[])
    console.log(producto)
    return(
       <ItemDetail title={producto.title} price={producto.price} img={producto.img}/>

    )
}
export default ItemDetailContainer
import ItemCount from "./ItemCount";
const ItemDetail = ({ id,title, price, img, }) => {
    return ( 
        <div>
            <h5>{title}</h5>
            <p>{price}</p>
            <img src={img}></img>
            <ItemCount></ItemCount>
        </div>
    )
}

export default ItemDetail;
import './ItemListContainer.css';
import { Link } from "react-router-dom";
const Producto = ({img, id}) => {
    return ( 
    <div className = "card-img" >
         <img src = { img }class = "img"/>
        <Link to={`/detail/${id}`}>
            <button>Mas Info</button>
        </Link>
    </div>


    );
}
export default Producto;
import App from '../App';
import './NavBar.css';
import './CartWidget';
import img from './img/carrito.png'
import { Link } from "react-router-dom";
export const Navbar = () => {
    const styles = { backgroundColor: 'black' }
    const menu = { backgroundColor: 'black' }
    return ( <body style = { styles }>
        <div className = "container">
        <ul style = { menu }className = "menu">
        <Link to = { '/' }>
        <li> <a href = "#"> Inicio </a></li>
        </Link> <li > <a href = "#"> Carro </a></li>
        <img width = "50px" src = { img }/> 
        <a className = "marca"> KaderShop </a> 
        </ul> 
        </div> 
        </body>
    );
}
export default App
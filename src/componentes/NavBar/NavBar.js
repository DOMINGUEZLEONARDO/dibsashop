
import Car from "../CartWidget/Car"
import "../NavBar/navBarStyles.css"
import { NavLink, Link } from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h3 className="dibsa"> Dibsa Shop</h3>

            </Link>
            <div className="botones">
            
            <NavLink to={`/inicio`}  className={({isActive})=>isActive ? 'btn btn-primary': 'btn btn-primary'}>Inicio</NavLink>    
        
            <NavLink  to={`/category/calefaccion`}   className={({isActive})=>isActive ?  'btn btn-primary ': 'btn btn-primary'}>Calefaccion</NavLink>
        
                

            <NavLink to={`/category/ventilacion`}   className={({isActive})=>isActive ?'btn btn-primary': 'btn btn-primary'}>Ventilacion</NavLink>    
            

            

            </div>
            <Car />
            

        </nav>
    )
}
export default NavBar

import carrito from './asset/carrito.png'
import "../CartWidget/carStyles.css"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const Car = () => {
    const {totalQuantity } =useContext(CartContext)
    return (
        <Link to='/cart' className='car' style={{display: totalQuantity > 0 ? 'block': 'none'}}>
            <img src={carrito} alt="cart-widget" className='carrito'/>
            {totalQuantity}
            
        </Link>
    )
}

export default Car
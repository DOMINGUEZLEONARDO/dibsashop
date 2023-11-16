import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'


const Cart =() =>{
    const {cart, clearCart, totalQuantity } = useContext(CartContext)

    if(totalQuantity=== 0){
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Inicio</Link>
            </div>
        )
    }
    return(
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            
            <button onClick={()=> clearCart()}className='btn btn-warning'>Vaciar carrito</button>
            <Link to='/checkout' className='btn btn-info'>Finalizar Compra</Link>
        </div>
    )
}

export default Cart

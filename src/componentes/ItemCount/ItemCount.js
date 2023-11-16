import './ItemCount.css'
import { useState } from 'react' 

const ItemCount =({stock, inicial, onAdd})=>{
    const[quantity, setQuantity] = useState(inicial)

const increment = ()=>{
    if(quantity<stock){
        setQuantity(quantity+1)
    }
}

const decrement = ()=>{
    if(quantity > 1){
        setQuantity(quantity -1)


    }
}

return(
    <div className='Contador'>
        <div className='control'>
            <button className='btn btn-success' onClick={decrement}>-</button>
            <h4 className='Number'>{quantity}</h4>
            <button className='btn btn-success'onClick={increment}>+</button>
        </div>
        <div>
          <button className='btn btn-success' onClick={()=> onAdd(quantity)} disabled={!stock}>
            Agregar al carrito
          </button>
        </div>
    </div>
)
}

export default ItemCount
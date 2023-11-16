import './cartItem.css';
import React from "react";

import { useContext } from "react";
import Item from "../Item/Item";
import { CartContext } from '../../context/CartContext'
import Car from '../CartWidget/Car';
import  './cartItem.css';

const CartItem = ({name,price, quantity, description}) =>{
    
    return(
        
        <div className="cart-item">
            <h3 className='nombreProd'>{name}</h3>
            <h3 className='cantP'> Cantidad: {quantity}</h3>
            <h3 className='precioProd'> Total: ${price * quantity }</h3>
            
            
           
        </div>
    );
}

export default CartItem;
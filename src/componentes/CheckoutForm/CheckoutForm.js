import './checkoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({onConfirm})=>{
     const [name, setName] = useState('')
     const [telefono, setTelefono] = useState('')
     const [email, setEmail] = useState('')

     const handleConfirm = (event) =>{
        event.preventDefault()
        const userData = {
            name, telefono, email
        }
        onConfirm(userData)
     }

return(
    <div className='contenedor'>
        <form onSubmit={handleConfirm}className='form'>
            <label className='label'>
                Nombre
                <input
                className='input'
                type='text'
                value={name}
                onChange={({target})=> setName([target.value])}/>
            </label>
            <label className='label'>
                Telefono
                <input
                className='input'
                type='text'
                value={telefono}
                onChange={({target})=> setTelefono(target.value)}/>
            </label>
            <label className='label mail'>
                Email  
                <input
                className='input'
                type='text'
                value={email}
                onChange={({target})=> setEmail(target.value)}/>
            </label>
            <div className='label '>
                <button type='submit' className='btn btn-success  boton'>Crear orden de compra </button>
            </div>
         </form>
    </div>
)
}
export default CheckoutForm
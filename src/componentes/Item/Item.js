import '../Item/Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, name, img,price, stock, category})=>{

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="itemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="info">
                    Precio: ${price}
                </p>
                <p className="info">
                    Stock disponible :{stock}
                </p>
                
            </section>
            <footer className="ItemFooter">
              <Link to={`/item/${id}`}className='btn btn-dark' >Ver Detalle</Link>
              
            </footer>
        </article>

    )
}
export default Item
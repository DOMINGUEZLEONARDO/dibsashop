import { useState, useEffect } from "react"

import ItemList from '../ItemLista/ItemList'
import '../ItemList/ItemListContainer.css'
import {useParams} from 'react-router-dom'
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../service/firebase/FirebaseConfig'

const ItemListContainer = ({greeting}) =>{
    const [productos,setProductos]=useState([])
    const [loading, setLoading]=useState(true)
    
   const{category} =useParams()
    
        
   
    useEffect(()=>{
        setLoading(true)
       
            
   
    const collectionRef = category
    ?query(collection(db, 'productos'), where ('category','==', category))
    :collection(db,'productos')

    getDocs(collectionRef)
    .then(response=>{
        const productosAdapted = response.docs.map(doc=>{
            const data = doc.data()
            return{ id: doc.id, ...data}

        })
        setProductos(productosAdapted)
    })
    .catch(error =>{
        console.log(error)
    })
    .finally(()=>{
        setLoading(false)
    })
 },[category])



    return(
        <div>
            <h1 className="greeting">{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer
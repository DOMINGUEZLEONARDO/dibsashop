const productos = [
    {
        id: '1',
        name:'Estufa Garrafera',
        price: 12000,
        category:'calefaccion',
        img: 'https://hiperaudio.com.ar/wp-content/uploads/2023/05/estufa-garrafera-eiffel.png',
        
        stock: 50,
        description:'Estufa Garrafera con pico de seguridad'

    },
    {
        id: '2',
        name:'Estufa Halogena 3 velas',
        price: 9520,
        category:'calefaccion',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlnJoztVoSt6zbUJ-vLcJsIZTjRdaVlIQ-A&usqp=CAU',
        stock: 1200,
        description:'Estufa Halogena 3 velas 1200w'

    },
    {
        id: '3',
        name:'Ventilador Industrial 24" de pie',
        price: 15640,
        category:'ventilacion',
        img: 'https://minicuotas.ribeiro.com.ar/images/products/large/P00001023000.jpg',
        stock: 4000,
        description:'Ventilador Industrial 24" 1800w'

    },
    {
        id: '4',
        name:"Turbo Ventilador 20 pulgadas",
        price: 11500,
        category:'ventilacion',
        img: 'https://images.fravega.com/f1000/ab6869fee647003f9b26e2283d445678.jpg',
        stock: 620,
        description:"Turbo Ventilador 20 pulgadas 1500w metalico"

    },
]
export const getProductos=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}

export const getProductosById = (productosId) => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos.find(prod =>prod.id===productosId))
        },500)
       
    })
}



    

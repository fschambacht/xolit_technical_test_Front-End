import { useState } from "react"
import Tarjeta from './Tarjeta'
import './producto.css'

const Producto = () => {
  const [producto, setProducto] = useState([])

  const [productoAgregado, setProductoAgregado] = useState([])
  let count = {count: 1}

  const addProductos = (prop) => {
    
    productoAgregado.map(objeto => objeto.id === prop.id ? count.count += 1 : null)

    const newProd = {...prop, ...count}
    
    setProductoAgregado([
      ...productoAgregado,
      newProd
    ])
  }

  const getProductos = async () => {
    const peticion = await fetch('https://technical-test-xolit.herokuapp.com/products')
    const respuesta = await peticion.json()
    return setProducto(respuesta)
  }

  const factura = (arrayOriginal, propiedad) => {
    const nuevoArray = []
    const objetoBuscado = {}

    for(const obj in arrayOriginal) {
      objetoBuscado[arrayOriginal[obj][propiedad]] = arrayOriginal[obj]
    }

    for(const i in objetoBuscado) {
      nuevoArray.push(objetoBuscado[i])
    }
    return nuevoArray
  }
  
  return (
    <div onClick={getProductos} >
      {producto.length == 0
        ? <h2 className='click'>Ver Productos +</h2>
        : null}
      <Tarjeta
        producto={producto}
        addProductos={addProductos}
      ></Tarjeta>
      <ul>
        { 
          factura(productoAgregado,'id').map(prod => <li key={prod.id}>{prod.nombre}---{prod.count}</li>
        )
        }
      </ul>
    </div>
  )
}

export default Producto

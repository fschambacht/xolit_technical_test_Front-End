import { useState } from "react"
import Tarjeta from './Tarjeta'
import './producto.css'

const Producto = () => {
  const [producto, setProducto] = useState([])
  const [productoAgregado, setProductoAgregado] = useState([])

  const getProductos = async () => {
    const peticion = await fetch('http://127.0.0.1:8000/products')
    const respuesta = await peticion.json()
    return setProducto(respuesta)
  }

  const addProductos = (prop) => {
    productoAgregado.map(objeto => objeto.id === prop.id ? prop.count += 1 : null)

    setProductoAgregado([
      //...productoAgregado,
      prop,
    ])

    console.log(productoAgregado);
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
          productoAgregado.map(prod => prod.id ===  <li key={prod.count}>{prod.nombre}---{prod.count}</li>
        )
        }
      </ul>
    </div>
  )
}

export default Producto

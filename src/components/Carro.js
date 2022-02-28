import { useState } from 'react'
import './carro.css'
import Formulario from './Formulario'

const Carro = ({productoAgregado, factura}) => {
  const [renderFormulario, setRenderFormulario ] = useState(false)
  
  const enviarProductos = async () => {
    
    const seleccion = factura(productoAgregado, 'id')

    await fetch('https://technical-test-xolit.herokuapp.com/add/products', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(seleccion)
    })

    setRenderFormulario(true)

    console.log(seleccion)
  }
  
  return (
    <div>
      <div 
        className='carro'
        onClick={enviarProductos}
      >
        <label>Fin Agregar Productos</label>
        <img
          alt='imagen de carrrito de compra'
          className='img'
          src='https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/000000/external-shopping-cyber-monday-phatplus-lineal-color-phatplus.png'
        />
      </div>
      <div>
        {
          renderFormulario 
          ? <Formulario

          /> 
          : null
        }
      </div>
    </div>
  )
}

export default Carro

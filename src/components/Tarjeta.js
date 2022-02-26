import {useState} from 'react'
import './tarjeta.css'

const Tarjeta = ({ producto, addProductos }) => {
  let count = {count: 0}

  return (
    <div className='tarjeta'>
      { producto.map(prop => {
        return (
          <div 
            key={prop.id}
            className='producto'
          >
            <span>
              <label>Nombre</label>
              <h3>{prop.nombre}</h3>
            </span>
            <span>
              <label>Costo</label>
              <p>{prop.valorVentaConIva}</p>
            </span>
            <span>
              <label>un disp</label>
              <p>{prop.cantidadUnidadesInventario}</p>
            </span>
            <button
              onClick={() => {
                addProductos({...count, ...prop})
              }}
              type='button'
              children='Seleccionar'
            >
            </button>
          </div>
        )})
      }
    </div>
  )
}

export default Tarjeta

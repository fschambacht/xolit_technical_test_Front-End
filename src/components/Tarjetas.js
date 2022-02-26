import { useState } from 'react'
import Tarjeta from './Tarjeta'

const Tarjetas = ({ productom, addProductos, count }) => {

  return (
    <div>
      <Tarjeta
        producto={producto}
        addProductos={addProductos}
        count={count}
      >
      </Tarjeta>
    </div>
  )
}

export default Tarjetas

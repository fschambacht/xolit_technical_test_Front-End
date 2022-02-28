import Tarjeta from './Tarjeta'

const Tarjetas = ({ producto, addProductos}) => {

  return (
    <div>
      <Tarjeta
        producto={producto}
        addProductos={addProductos}
      >
      </Tarjeta>
    </div>
  )
}

export default Tarjetas

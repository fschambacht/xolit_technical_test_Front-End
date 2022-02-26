import './tarjeta.css'

const Tarjeta = ({ producto, addProductos, count }) => {
  return(
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
              addProductos(prop)
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
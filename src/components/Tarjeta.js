import './tarjeta.css'

const Tarjeta = ({ producto, productoAgregado, setProductoAgregado}) => {
 
  let count = {count: 1}

  const addProductos = (prop) => {
    
    productoAgregado.map(objeto => objeto.id === prop.id ? count.count += 1 : null)

    const newProd = {...prop, ...count}
    
    setProductoAgregado([
      ...productoAgregado,
      newProd
    ])
  }

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
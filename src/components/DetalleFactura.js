import Carro from "./Carro"

const DetalleFactura = ({productoAgregado, factura, getProductos }) => {
  return(
    <div>
      <ul>
        { 
          factura(productoAgregado, 'id').map(prod => 
          <li key={prod.id}>{prod.nombre}---{prod.count}</li>)
        }
      </ul>
      <div>
        <Carro
          factura={factura}
          productoAgregado={productoAgregado}
          getProductos={getProductos}
        >
        </Carro>
      </div>
    </div>
  )
}

export default DetalleFactura
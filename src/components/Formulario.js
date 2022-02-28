import { Card } from './Card'
import { Container } from './Container'
import UserForm from './UserForm'

const Formulario = ({ productosSeleccionados, getProductos }) => {
  
  
  const compraEnvio = async (users) => {
    
    await fetch('https://technical-test-xolit.herokuapp.com/shipping/bill', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify([users])
    })

    await fetch('https://technical-test-xolit.herokuapp.com/update/products', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(productosSeleccionados)
    })
    
    getProductos()

    document.location.reload()
  }
  
  const submit = (usuario) => {
    compraEnvio(usuario)
  }

  return (
    <div style={{ marginTop: '10px' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm
              submit={submit}
            />
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default Formulario
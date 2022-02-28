import { Card } from './Card'
import { Container } from './Container'
import UserForm from './UserForm'

const Formulario = () => {
  
  
  const compraEnvio = async (users) => {
    
    await fetch('https://technical-test-xolit.herokuapp.com/shipping/bill', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify([users])
    })
    
    console.log(users)
  }
  
  const submit = (usuario) => {
    compraEnvio(usuario)
  }

  return (
    <div style={{ marginTop: '15%' }}>
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
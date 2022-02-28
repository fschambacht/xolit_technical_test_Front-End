import { Button } from './Button'
import { Input } from './Input'
import { useFormulario } from './hooks/useFormulario'

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({ 
    full_name: '', 
    client_id: '', 
    shipping_address: '', 
    phone_number: '', 
    delivery_date: ''
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    submit(formulario)
    reset()
  }

  return(
    <form onSubmit={handleSubmit}>
      <Input
        name='full_name'
        placeholder='Andrés Felipe Schambach Tarazona'
        value={formulario.full_name}
        onChange={handleChange}
        label='Nombres y apellidos del cliente'
      />
      <Input
        name='client_id'
        type={'number'} 
        placeholder='1018440978'
        value={formulario.client_id}
        onChange={handleChange}
        label='Numero de documento de identificación (sin tipo)'
      />
      <Input
        name='shipping_address'
        placeholder='Calle 100 #10-20'
        value={formulario.shipping_address}
        onChange={handleChange}
        label='Dirección envió'
      />
      <Input
        name='phone_number'
        type={'number'} 
        placeholder='300456789'
        value={formulario.phone_number}
        onChange={handleChange}
        label='Teléfono de contacto'
      />
      <Input
        name='delivery_date'
        // type={'datetime-local'}
        placeholder='2022-02-22 16:16'
        value={formulario.delivery_date}
        onChange={handleChange}
        label='Fecha de entrega'
      />
      <Button
        children='Compra y Envió'
      />
    </form>
  )
}

export default UserForm

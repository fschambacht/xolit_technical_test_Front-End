import './Input.css'

export const Input = ({ label, ...rest }) => {
  return(
    <div className='field'>
      <label>{label}</label>
      <input {...rest}/>
    </div>
  )
}


import SocialButton from './SocialButton'
import Formulario from './Formulario'

const Registro = () => {
  return (
    <div className='container'>
      <h1>Crear tu Cuenta</h1>
      <div className='social-icon'>
        <SocialButton />
      </div>
      <span>O puedes usar tu Email para Registrarte</span>
      <Formulario />
    </div>
  )
}

export default Registro

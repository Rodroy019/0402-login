import SocialButton from './SocialButton'
import Formulario from './Formulario'

const Registro = () => {
  return (
    <>
      <div class='container'>
        <h1>Crear tu Cuenta</h1>
        <div class='social-icon'>
          <SocialButton />
        </div>
        <span>O puedes usar tu Email para Registrarte</span>
        <Formulario />
      </div>
    </>
  )
}

export default Registro

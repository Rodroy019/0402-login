import { useState } from 'react'
import Alerta from './Alerta'

const Formulario = () => {
  const [form, setForm] = useState({ nombre: '', email: '', pass: '', confirmarPass: '' })
  const [alerta, setAlerta] = useState(null)

  const validar = (e) => {
    e.preventDefault()
    if (form.pass !== form.confirmarPass) {
      setAlerta(<Alerta tipoVariant='danger' error='Error' descripcion='Las contraseñas no coinciden. Por favor, verifica tus contraseñas.' />)
      return
    }
    if (form.nombre === '' || form.email === '' || form.pass === '' || form.confirmarPass === '') {
      setAlerta(<Alerta tipoVariant='warning' error='Advertencia' descripcion='Por favor, completa todos los campos antes de continuar.' />)
      return
    }
    setAlerta(<Alerta tipoVariant='success' error='Éxito' descripcion='¡Tu cuenta ha sido creada exitosamente! ¡Bienvenido!' />)
  }
  return (
    <form onSubmit={validar}>
      <input
        type='text'
        placeholder='Nombre'
        value={form.nombre}
        onChange={e => {
          setForm({
            ...form,
            nombre: e.target.value
          })
        }}
      />
      <input
        type='email'
        placeholder='Email'
        value={form.email}
        onChange={e => {
          setForm({
            ...form,
            email: e.target.value
          })
        }}
      />
      <input
        type='password'
        placeholder='Contraseña'
        value={form.pass}
        onChange={e => {
          setForm({
            ...form,
            pass: e.target.value
          })
        }}
      />
      <input
        type='password'
        placeholder='Confirmar Contraseña'
        value={form.confirmarPass}
        onChange={e => {
          setForm({
            ...form,
            confirmarPass: e.target.value
          })
        }}
      />
      <button type='submit'>Crear Cuenta</button>
      <br />
      {alerta}
    </form>
  )
}

export default Formulario

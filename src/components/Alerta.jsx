import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'

const Alerta = (props) => {
  return (
    <Alert variant={props.tipoVariant}>
      <Alert.Heading>{props.error}</Alert.Heading>
      <p>
        {props.descripcion}
      </p>
    </Alert>
  )
}

export default Alerta

Alerta.propTypes = {
  tipoVariant: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired
}

import { useSelector } from 'react-redux'
import Card from './Card'

const Sorteio = (props) => {
  const aleatorio = useSelector(state => {
    const numero = Math.random()
    return parseInt(numero * (state.vlMaximo - state.vlMinimo)) + state.vlMinimo
  })

  return (
    <Card title="Sorteio de números" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{ aleatorio }</strong>
        </span>
      </div>
    </Card>
  )
}

export default Sorteio
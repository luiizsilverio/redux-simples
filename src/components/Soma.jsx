import { useSelector } from 'react-redux'
import Card from './Card'

const Soma = (props) => {
    const soma = useSelector(state => state.vlMinimo + state.vlMaximo)

    return (
      <Card title="Soma dos números" blue>
        <div>
          <span>
            <span>Resultado: </span>
            <strong>{ soma }</strong>
          </span>
        </div>
      </Card>
    )
}

export default Soma
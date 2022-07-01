import { useSelector } from 'react-redux'
import Card from './Card'

const Media = (props) => {
    const media = useSelector(state => ((state.vlMinimo + state.vlMaximo) / 2).toFixed(2))

    return (
      <Card title="Média dos números" green>
        <div>
          <span>
            <span>Resultado: </span>
            <strong>{ media }</strong>
          </span>
        </div>
      </Card>
    )
}

export default Media
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Card from './Card'
import './Intervalo.css'
import { actions } from '../store/appReducer'

const Intervalo = (props) => {
    const [vlmin, setVlmin] = useState(0)
    const [vlmax, setVlmax] = useState(10)
    const dispatch = useDispatch()

    function handleSetMin(value) {
      const valor = parseInt(value)
      setVlmin(valor)
      dispatch({ type: actions.ATUALIZA_MIN, vlMinimo: valor })
    }

    function handleSetMax(value) {
      const valor = parseInt(value)
      setVlmax(valor)
      dispatch({ type: actions.ATUALIZA_MAX, vlMaximo: valor })
    }

    return (
      <Card title="Intervalo de números" red>
        <div className="intervalo">
          <span>
            <strong>Mínimo:</strong>
            <input type="number" value={vlmin}
              onChange={(e) => handleSetMin(e.target.value)}
            />
          </span>
          <span>
            <strong>Máximo:</strong>
            <input type="number" value={vlmax}
              onChange={(e) => handleSetMax(e.target.value)}
            />
          </span>
        </div>
      </Card>
    )
}

export default Intervalo
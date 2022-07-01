const INITIAL_STATE = {
  vlMinimo: 0,
  vlMaximo: 10
}

const ATUALIZA_MIN = 'ATUALIZA_MIN'
const ATUALIZA_MAX = 'ATUALIZA_MAX'

export default function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LIMPA':
      return {...INITIAL_STATE}
    case ATUALIZA_MIN:
      return {...state, vlMinimo: action.vlMinimo}
    case ATUALIZA_MAX:
      return {...state, vlMaximo: action.vlMaximo}
    default:
      return state
  }
}

export { ATUALIZA_MIN, ATUALIZA_MAX }

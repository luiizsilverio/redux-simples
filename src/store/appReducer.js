const INITIAL_STATE = {
  vlMinimo: 0,
  vlMaximo: 10
}

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LIMPA':
      return {...INITIAL_STATE}
    case 'ATUALIZA_MIN':
      return {...state, vlMinimo: action.vlMinimo}
    case 'ATUALIZA_MAX':
      return {...state, vlMaximo: action.vlMaximo}
    default:
      return state
  }
}

export default appReducer

const INITIAL_STATE = {
  vlMinimo: 0,
  vlMaximo: 10
}

export const actions = {
  ATUALIZA_MIN: 'ATUALIZA_MIN',
  ATUALIZA_MAX: 'ATUALIZA_MAX',
  LIMPA: 'LIMPA'
}

export default function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.LIMPA:
      return {...INITIAL_STATE}
    case actions.ATUALIZA_MIN:
      return {...state, vlMinimo: action.vlMinimo}
    case actions.ATUALIZA_MAX:
      return {...state, vlMaximo: action.vlMaximo}
    default:
      return state
  }
}

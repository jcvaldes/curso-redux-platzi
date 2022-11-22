import { fromJS, setIn } from 'immutable'
import { SET_LOADING } from '../actions/types'

export interface PokemonState {
  loading: boolean
}
const defaultState = fromJS({
  loading: false
})

export const uiReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_LOADING: {
      // return { ...state, loading: action.payload }
      return setIn(state, ['loading'], action.payload)
    }
    default: {
      return state
    }
  }
}

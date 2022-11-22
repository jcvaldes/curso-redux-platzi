import { Pokemon } from './../../models/pokemon'
import { SET_POKEMONS } from './../actions/types'
export interface AppState {
  pokemons: Pokemon[]
}
const initialState: AppState = {
  pokemons: []
}

export const pokemonsReducer = (
  state: AppState = initialState,
  action: any
) => {
  switch (action.type) {
    case SET_POKEMONS: {
      return { ...state, pokemons: action.payload }
    }
    default: {
      return state
    }
  }
}

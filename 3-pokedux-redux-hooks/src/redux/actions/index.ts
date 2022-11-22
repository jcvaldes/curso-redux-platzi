import { Pokemon } from './../../models/pokemon'
import { SET_POKEMONS } from './types'

export const setPokemons = (payload: Pokemon[]) => ({
  type: SET_POKEMONS,
  payload
})

import { SET_FAVORITE, SET_LOADING } from './../actions/types'
import { IPokemonDetails, SET_POKEMONS } from '../actions/types'

export interface PokemonState {
  error: string
  loading: boolean
  pokemons: IPokemonDetails[]
}
const defaultState: PokemonState = {
  error: '',
  loading: false,
  pokemons: []
}

export const pokemonsReducer = (
  state: PokemonState = defaultState,
  action: any
) => {
  switch (action.type) {
    case SET_POKEMONS: {
      return { ...state, pokemons: action.payload }
    }
    case SET_FAVORITE: {
      const newPokemonsList = [...state.pokemons]
      const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId
      })
      if (currentPokemonIndex < 0) {
        return state
      }
      newPokemonsList[currentPokemonIndex].favorite =
        !newPokemonsList[currentPokemonIndex].favorite

      return { ...state, pokemons: newPokemonsList }
    }
    case SET_LOADING: {
      return { ...state, loading: action.payload, error: '' }
    }
    default: {
      return state
    }
  }
}

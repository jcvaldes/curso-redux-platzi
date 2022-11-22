import { SET_FAVORITE, SET_LOADING } from './../actions/types'
import { IPokemonDetails, SET_POKEMONS } from '../actions/types'
import { fromJS, get, getIn, setIn } from 'immutable'

export interface PokemonState {
  loading: boolean
  pokemons: IPokemonDetails[]
}
const defaultState = fromJS({
  loading: false,
  pokemons: []
})

export const pokemonsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_POKEMONS: {
      // return { ...state, pokemons: action.payload }
      return setIn(state, ['pokemons'], fromJS(action.payload))
    }
    case SET_FAVORITE: {
      // const newPokemonsList = [...state.pokemons]
      debugger
      // const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => {
      const currentPokemonIndex = (get(state, 'pokemons') as any).findIndex(
        (pokemon: any) => pokemon.get('id') === action.payload.pokemonId
      )

      if (currentPokemonIndex < 0) {
        return state
      }
      // newPokemonsList[currentPokemonIndex].favorite =
      //   !newPokemonsList[currentPokemonIndex].favorite
      const isFavorite = getIn(state, [
        'pokemons',
        currentPokemonIndex,
        'favorite'
      ])
      // return { ...state, pokemons: newPokemonsList }
      return setIn(
        state,
        ['pokemons', currentPokemonIndex, 'favorite'],
        !isFavorite
      )
    }
    case SET_LOADING: {
      // return { ...state, loading: action.payload }
      return setIn(state, ['loading'], action.payload)
    }
    default: {
      return state
    }
  }
}

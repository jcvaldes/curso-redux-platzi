import { legacy_createStore as createStore } from 'redux'
import { pokemonsReducer } from './reducers/pokemons'

export const store = createStore(pokemonsReducer)

import { compose, legacy_createStore as createStore } from 'redux'
import { pokemonsReducer } from './reducers/pokemons'
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(pokemonsReducer, composeEnhancers())

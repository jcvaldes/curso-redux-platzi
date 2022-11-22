import { composeWithDevTools } from 'redux-devtools-extension'
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from 'redux'

import { featuring, logger } from '../middlewares'
import { pokemonsReducer } from './reducers/pokemons'

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const middlewareEnhancer = applyMiddleware(logger, featuring)
export const store = createStore(
  pokemonsReducer,
  composeWithDevTools(middlewareEnhancer)
)

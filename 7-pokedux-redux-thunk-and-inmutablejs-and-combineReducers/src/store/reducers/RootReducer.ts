// si trabaja con immutable sino se impoirta con redux solamente
import { combineReducers } from 'redux-immutable'
import { pokemonsReducer } from './PokemonReducer'
import { uiReducer } from './UIReducer'

const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer
})

export default rootReducer

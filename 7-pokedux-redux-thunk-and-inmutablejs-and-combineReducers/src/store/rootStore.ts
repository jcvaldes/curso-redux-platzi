import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

// import { logger } from '../middlewares'
import rootReducer from './reducers/RootReducer'

const logger = createLogger()

const composedEnhancers = compose(
  applyMiddleware(thunk, logger),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = createStore(rootReducer, composedEnhancers)

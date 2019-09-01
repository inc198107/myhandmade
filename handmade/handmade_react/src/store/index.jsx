import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { saga } from '../sagas'
import RootReducer from '../reducers'

const sagaMiddleware = createSagaMiddleware();
const enhans = []
const middleware = [
  thunk,
  sagaMiddleware
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhans.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhans
)

const store = createStore(
  RootReducer,
  composedEnhancers
)

sagaMiddleware.run(saga);

export default store
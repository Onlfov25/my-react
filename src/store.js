import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const middleware = [sagaMiddleware, logger];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    );


const store = createStore(
    rootReducer,
    Immutable.Map({}),
    enhancer
  )

  // then run the saga
  // sagaMiddleware.run();

export default store;
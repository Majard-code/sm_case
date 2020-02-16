import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { mamaSaga } from './sagas';
import asteroids from './asteroids/AsteroidsReducer';
import asteroid from './asteroid/AsteroidReducer';

const reducers = combineReducers ({
    asteroids,
    asteroid,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore (reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mamaSaga);

export default store;
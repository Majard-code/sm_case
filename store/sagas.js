import { all } from 'redux-saga/effects';
import { asteroidsSaga } from './asteroids/AsteroidsSaga';
import { asteroidSaga } from './asteroid/AsteroidSaga';

export function* mamaSaga() {
  yield all([
    asteroidsSaga(),
    asteroidSaga(),
  ]);
}

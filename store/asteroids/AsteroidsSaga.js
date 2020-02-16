import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { NASA_API_KEY } from "../../utils/nasaApiKey";
import { selectAsteroid } from "./AsteroidsActions";
import { fetchAllAsteroidsStart, fetchAllAsteroidsSuccess, fetchAllAsteroidsFailed } from './AsteroidsActions';
import { fetchAsteroidById } from '../asteroid/AsteroidActions';

function* fetchAllAsteroids() {
  yield put(fetchAllAsteroidsStart());
  try {
      const data = yield call(() => axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-01-01&end_date=2020-01-01&api_key=${NASA_API_KEY}`
        ).then(res => res.data));
      yield put(fetchAllAsteroidsSuccess(data));
  } catch (e) {
      yield put(fetchAllAsteroidsFailed(e));
  };
};

function* selectAsteroidRun({ payload }) {
  yield put(selectAsteroid(payload));
  yield put(fetchAsteroidById(payload));
}

export function* asteroidsSaga() {
  yield takeLatest('FETCH_ALL_ASTEROIDS', fetchAllAsteroids);
  yield takeLatest('SELECT_ASTEROID_RUN', selectAsteroidRun);
}
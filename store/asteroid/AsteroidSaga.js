import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { NASA_API_KEY } from "../../utils/nasaApiKey";
import { fetchAsteroidByIdStart, fetchAsteroidByIdSuccess, fetchAsteroidByIdFailed } from './AsteroidActions';

function* fetchAsteroidById({ payload }) {
  yield put(fetchAsteroidByIdStart());
  try {
      const data = yield call(() => axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/${payload}?api_key=${NASA_API_KEY}`
        ).then(res => res.data));
      yield put(fetchAsteroidByIdSuccess(data));
  } catch (e) {
      yield put(fetchAsteroidByIdFailed(e));
  };
};

export function* asteroidSaga() {
  yield takeLatest('FETCH_ASTEROID_BY_ID', fetchAsteroidById);
}
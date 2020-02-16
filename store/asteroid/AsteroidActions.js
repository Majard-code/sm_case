export const FETCH_ASTEROID_BY_ID = 'FETCH_ASTEROID_BY_ID';
export const FETCH_ASTEROID_BY_ID_START = 'FETCH_ASTEROID_BY_ID_START';
export const FETCH_ASTEROID_BY_ID_SUCCESS = 'FETCH_ASTEROID_BY_ID_SUCCESS';
export const FETCH_ASTEROID_BY_ID_FAILED = 'FETCH_ASTEROID_BY_ID_FAILED';

export const fetchAsteroidById = id => ({ type: FETCH_ASTEROID_BY_ID, payload: id });
export const fetchAsteroidByIdStart = () => ({ type: FETCH_ASTEROID_BY_ID_START });
export const fetchAsteroidByIdSuccess = data => ({ type: FETCH_ASTEROID_BY_ID_SUCCESS, payload: data });
export const fetchAsteroidByIdFailed = error => ({ type: FETCH_ASTEROID_BY_ID_FAILED, payload: error });
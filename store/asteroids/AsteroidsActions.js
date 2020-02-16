export const FETCH_ALL_ASTEROIDS = 'FETCH_ALL_ASTEROIDS';
export const FETCH_ALL_ASTEROIDS_START = 'FETCH_ALL_ASTEROIDS_START';
export const FETCH_ALL_ASTEROIDS_SUCCESS = 'FETCH_ALL_ASTEROIDS_SUCCESS';
export const FETCH_ALL_ASTEROIDS_FAILED = 'FETCH_ALL_ASTEROIDS_FAILED';

export const SELECT_ASTEROID = 'SELECT_ASTEROID';
export const SELECT_ASTEROID_RUN = 'SELECT_ASTEROID_RUN';

export const fetchAllAsteroids = () => ({ type: FETCH_ALL_ASTEROIDS });
export const fetchAllAsteroidsStart = () => ({ type: FETCH_ALL_ASTEROIDS_START });
export const fetchAllAsteroidsSuccess = data => ({ type: FETCH_ALL_ASTEROIDS_SUCCESS, payload: data });
export const fetchAllAsteroidsFailed = error => ({ type: FETCH_ALL_ASTEROIDS_FAILED, payload: error });

export const selectAsteroid = id => ({ type: SELECT_ASTEROID, payload: id });
export const selectAsteroidRun = id => ({ type: SELECT_ASTEROID_RUN, payload: id });
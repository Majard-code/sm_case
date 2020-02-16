import { FETCH_ALL_ASTEROIDS_START, FETCH_ALL_ASTEROIDS_SUCCESS, SELECT_ASTEROID } from "./AsteroidsActions";

const initState = {
  data: null,
  isFetching: true,
  error: null,
  currentElement: null,
}

const asteroids = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ALL_ASTEROIDS_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_ALL_ASTEROIDS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      }
    case SELECT_ASTEROID:
      return {
        ...state,
        currentElement: action.payload,
      }
    default:
      return state;
  }
}

export default asteroids;
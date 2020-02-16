import { FETCH_ASTEROID_BY_ID_START, FETCH_ASTEROID_BY_ID_SUCCESS } from "./AsteroidActions";

const initState = {
  data: null,
  isFetching: true,
  error: null,
}

const asteroid = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ASTEROID_BY_ID_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_ASTEROID_BY_ID_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      }
    default:
      return state;
  }
}

export default asteroid;
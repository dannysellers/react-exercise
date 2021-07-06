// todo: load on the fly (with something like webpack), or via API
import cities from './us-cities.json';
import { ACTIONS } from "./constants";
/**
 * todo: assign cities `id` attr
 * type Cities = {
 *   "country": "US",
 *   "name": "Bay Minette",
 *   "location": {
 *     "lat": "30.88296",
 *     "lng": "-87.77305"
 *   },
 *   "details": {
 *     "likes": 0
 *   }
 * }
 */

const initialState = {
  cities,
  // todo: store only active city `id` here--filter `cities` in (memoized) selector
  activeCity: null, // i.e. `?CityType`
  searchTerm: ''
};

const baseReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      }
    case ACTIONS.SET_ACTIVE_CITY:
      return {
        ...state,
        activeCity: action.payload
      }
    default:
      return state;
  }
}

export default baseReducer;

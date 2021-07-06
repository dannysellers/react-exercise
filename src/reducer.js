// todo: load on the fly (with something like webpack), or via API
import cities from './us-cities.json';
import { ACTIONS } from "./constants";
/**
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
  searchTerm: ''
};

const baseReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      }
    default:
      return state;
  }
}

export default baseReducer;

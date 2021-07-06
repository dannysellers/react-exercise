// todo: load on the fly (with something like webpack), or via API
import cities from './us-cities.json';
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
  cities
};

const baseReducer = (action = {}) => {
  switch (action.type) {
    default:
      return initialState;
  }
}

export default baseReducer;

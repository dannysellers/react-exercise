import { ACTIONS } from "./constants";

export const setSearchTerm = (payload = '') => ({
  type: ACTIONS.SET_SEARCH_TERM,
  payload
});

export const setActiveCity = (payload = '') => ({
  type: ACTIONS.SET_ACTIVE_CITY,
  payload
});

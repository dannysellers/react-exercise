import { ACTIONS } from "./constants";

export const setSearchTerm = (payload = '') => ({
  type: ACTIONS.SET_SEARCH_TERM,
  payload
});

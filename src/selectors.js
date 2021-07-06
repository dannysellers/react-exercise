// todo: use createSelector for memoization
export const selectCitiesByName = (state) => {
  const { cities, searchTerm = '' } = state;

  if (searchTerm.length < 2) {
    // todo: alternatively, debounce filtering
    return [];
  }

  return cities.filter((city) => city.name.includes(searchTerm));
}

// todo: select city object by `id`
export const selectActiveCity = (state) => state.activeCity;

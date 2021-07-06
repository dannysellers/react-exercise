// todo: use createSelector for memoization
export const selectCitiesByName = (state, name = '') => {
  const { cities } = state;

  if (name === '' || name.length < 2) {
    // todo: alternatively, debounce filtering
    return [];
  }

  return cities.filter((city) => city.name.includes(name));
}

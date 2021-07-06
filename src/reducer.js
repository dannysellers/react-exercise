const initialState = {
  cities: []
};

const baseReducer = (action = {}) => {
  switch (action.type) {
    default:
      return initialState;
  }
}

export default baseReducer;

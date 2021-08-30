export function createReducer(initialState, fnMap) {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
}

export function reduceReducers(...reducers) {
  return (prev, current) => reducers.reduce((p, r) => r(p, current), prev);
}

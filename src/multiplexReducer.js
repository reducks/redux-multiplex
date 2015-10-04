const defaultGetId = (action) => action.meta && action.meta.__multiplex;

export default (actionTypes = [], getId = defaultGetId) => (reducer) => {
  return (state = {}, action) => {
    const objectState = typeof state.toObject === 'function' ? state.toObject() : state;

    if (!action || !('type' in action) || actionTypes.indexOf(action.type) === -1) {
      return objectState;
    }

    const id = getId(action);
    return ({
      ...state,
      [id]: reducer(objectState[id], action),
    });
  };
};

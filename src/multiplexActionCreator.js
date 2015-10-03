const defaultCreateAction = (action, id) => ({
  ...action,
  meta: {
    ...action.meta,
    id,
  },
});

export default (id, createAction = defaultCreateAction) => (actionCreator) => {
  return (...args) => createAction(actionCreator.apply(null, args), id);
};

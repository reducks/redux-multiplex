const defaultGetState = (state) => state;
const defaultGetId = (props) => props.id;

export default (reducer, getState = defaultGetState, getId = defaultGetId) => {
  const initalItemState = reducer(undefined, undefined);

  return (mapStateToProps) => (state, ownProps) => {
    const list = getState(state);
    const id = getId(ownProps);

    if (list.hasOwnProperty(id)) {
      return mapStateToProps(list[id], ownProps);
    }

    return mapStateToProps(initalItemState, ownProps);
  };
};

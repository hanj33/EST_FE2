export const addNumber = () => {
  return { type: "ADD" };
};
export const substractNumber = () => {
  return { type: "SUBSTRACT" };
};

const initialState = {
  stock: 5,
  goods: 0,
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        stock: state.stock - 1,
        goods: state.goods + 1,
      };
    case "SUBSTRACT":
      return {
        ...state,
        stock: state.stock + 1,
        goods: state.goods - 1,
      };
    default:
      return state;
  }
};

export default goodsReducer;

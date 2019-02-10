import { SET_ORDERS } from "../actionTypes";

const initialState = {
  orders: null
};
// const mainReducer = (state = initialState, action) => {
//   return state;
// };
// export default mainReducer;

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return {
        orders: {
          ...state,
          orders: action.orders
        }
      };
    default:
      return state;
  }
}
export default mainReducer;

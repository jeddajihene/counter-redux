import { DECREMENT, INCREMENT } from "../constants/count";

const initialState = {
  count: 0,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};
export default countReducer;

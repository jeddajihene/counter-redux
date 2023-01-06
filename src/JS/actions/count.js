import { DECREMENT, INCREMENT } from "../constants/count";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = (data) => {
  return {
    type: DECREMENT,
    payload: data,
  };
};

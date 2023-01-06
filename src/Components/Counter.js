import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { decrement, increment } from "../JS/actions/count";

const Counter = () => {
  const count = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>this is Counter</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement(3))}>-</button>
    </div>
  );
};

export default Counter;

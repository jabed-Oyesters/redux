import React from "react";

import {
  useSelector,
  useDispatch,
} from "react-redux";
import {
  decrement,
  increment,
} from "../redux/counter/actionType";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(
    (state) => state.value
  );
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div
      className="App"
      style={{ marginTop: "50px" }}
    >
      <p>{count}</p>
      <button
        onClick={() => handleIncrement(1)}
        style={{
          border: "none",
          padding: "10px",
          backgroundColor: "#64c7e3",
          marginRight: "20px",
        }}
      >
        increase
      </button>
      <button
        onClick={() => handleDecrement(1)}
        style={{
          border: "none",
          padding: "10px",
          backgroundColor: "#64c7e3",
        }}
      >
        decrease
      </button>
    </div>
  );
};

export default Counter;

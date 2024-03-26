import React from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./Features/Theme";

function ColorSelector() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const color = e.target.value;
    dispatch(changeColor(color));
  };

  return (
    <div>
      <input
        type="color"
        onChange={handleChange}
      />
    </div>
  );
}

export default ColorSelector;

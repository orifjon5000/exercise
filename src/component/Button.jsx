import React from "react";

function Button({ minus,plus, reset,value,children }) {
  return (
    <div>
      <button onClick={minus}> minus</button>
      {value}
      <button onClick={plus}>plus</button>
      <button onClick={reset}>reset</button>
      {children }
    </div>
  );
}
export default Button;

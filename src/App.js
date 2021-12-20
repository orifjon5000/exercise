import React, { useState } from "react";
import Button from "./component/Button";

export default function App() {
  const [item, setItem] = useState(0);
  const dikrement = () => {
    setItem(item - 1);
  };
  const ikrement = () => {
    setItem(item + 1);
  };const reset = () => {
    setItem(0);
  };
  return (
    <>
      <Button plus={ikrement} reset={reset} minus={dikrement} value={item} />
      <h4>bir balo</h4>
    </>
  );
}

// export default App;

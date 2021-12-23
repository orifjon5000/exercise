import React, { useState, useEffect } from "react";
import Button from "./component/Button";
import "./index.css";
import List from "./component/List.jsx";
export default function App() {
  const [item, setItem] = useState(0);
  const [data, setData] = useState([]);
  const [copy, setCopy] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setIsLoading(false);
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    setData(users);
    setCopy(users);
  };

  const onDelete = (id) => {
    const newData = data.filter((value) => value.id !== id);
    setData(newData);
  };
const Reset = () => {
  setData(copy)
}
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "hide" : "show"}
      </button>
      {isOpen && (
        <div
        //  plus={ikrement} reset={reset} minus={dikrement} value={item}
        >
          {data.length ?

          data.map((user) => (
            <List user = {user}  onDelete = {onDelete} />
          ))
        : <button onClick = {Reset}>Reset</button>}
        </div>
      )}
    </>
  );
}

// export default App;

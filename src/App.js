import React, { useState, useEffect } from "react";
import Button from "./component/Button";

export default function App() {
  const [item, setItem] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect ( () => {
    setIsLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setIsLoading(false)
        setData(users);
      })
      .catch((err) => {
        setIsLoading(false)
        console.log('erroe');
      });

    console.log("component did mount");
  }, []);
  const dikrement = () => {
    setItem(item - 1);
  };

  const ikrement = () => {
    setItem(item + 1);
  };
  const reset = () => {
    setItem(0);
  };
if(isLoading) return <h3>Loading...</h3>
  return (
    <>
      <Button plus={ikrement} reset={reset} minus={dikrement} value={item}>
      {/* <h4>bir balo</h4> */}
      <ul>
        {data.map(user=>(
          <li key={user.id}>
            {user.name}
            <button>ss</button>
          </li>
        ))}
      </ul>
      </Button>
    </>
  );
}

// export default App;

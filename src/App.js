import React, { useState, useEffect } from "react";
import Button from "./component/Button";
import "./index.css";

export default function App() {
  const [item, setItem] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isInfo, setIsInfo] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res.json())
    //     .then((users) => {
    //       setIsLoading(false)
    //       setData(users);
    //     })
    //     .catch((err) => {
    //       console.log('erroe');
    //     });

    setIsLoading(false);
    console.log("component did mount");
    fetchData();
  }, []);
  


  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    setData(users);
  };

  useEffect(() => {
    console.log("item uzgarsa bu ishledi");
  }, [item]);


  const dikrement = () => {
    setItem(item - 1);
  };

  const ikrement = () => {
    setItem(item + 1);
  };

  
  
  const reset = () => {
    setItem(0);
  };
  if (isLoading) return <h3>Loading...</h3>;
  return (
    <>
      <button onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "hide" : "show"}</button>
      {isOpen && (
        <div plus={ikrement} reset={reset} minus={dikrement} value={item}>
          {/* <h4>bir balo</h4> */}

            {data.map((user) => (
          <div class="ul">
              <div class="li" key={user.id} onClick={(id)=>setIsInfo(isInfo.id!==id)}>
                {user.name}
              </div>
                <button class="btn" onClick={()=>setData((id)=>user.filter((v)=>(v.id!==id)))}>delete </button>
                {isInfo && (<div>
                  {user.email}
                </div>)}
         </div>
            ))}
        </div>
      )}
    </>
  );
}

// export default App;

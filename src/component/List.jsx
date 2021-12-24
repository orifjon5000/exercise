import React, { useState } from "react";

export default function List({ user, onDelete }) {
  const [isInfo, setIsInfo] = useState(false);
  const setInfo = () => {
    setIsInfo(!isInfo);
  };
  return (
    <div className="ul" key={user.id}>
      <div className="li" onClick={setInfo}>
        {user.name}
      </div>
      <button className="btn" onClick={() => onDelete(user.id)}>
        delete{" "}
      </button>
      {isInfo && (
        <div>
          <p>E-mail:{user.email}</p>
          <p>adress:{user.adress}</p>
        </div>
      )}
    </div>
  );
}

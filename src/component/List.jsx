import React, {useState} from "react";

export default function List({ user, onDelete }) {
    const [isInfo, setIsInfo] = useState(true);
    const setInfo = () => {
      setIsInfo(!isInfo)
    }
  return (
    <div className="ul" key={user.id}>
      <div className="li" onClick={setInfo}>
        {user.name}
      </div>
      <button className="btn" onClick={() => onDelete(user.id)}>
        delete{" "}
      </button>
      {isInfo && <div>{user.email}</div>}
    </div>
  );
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Features/User";

function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user.value);

  const handleClick = () => {
    dispatch(login({ name, age, email }));
  };

  const handleClick2 = () => {
    dispatch(logout());
  };
  return (
    <div>
      {!user.name && (
        <div>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={age}
            type="text"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      )}
      {!user.name ? (
        <button onClick={handleClick}>Login</button>
      ) : (
        <button onClick={handleClick2}>Logout</button>
      )}
    </div>
  );
}

export default Login;

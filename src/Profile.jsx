import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);

  if (!user.name) {
    return;
  }

  return (
    <div style={{ color: theme }}>
      <h1>Profile Info</h1>
      <div>Name : {user.name}</div>
      <div>Age : {user.age}</div>
      <div>Email : {user.email}</div>
    </div>
  );
}

export default Profile;

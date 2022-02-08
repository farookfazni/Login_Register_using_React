import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
// import { firestore } from "../fire";

const Welcome = () => {
  const { user, logout } = useUserAuth(); // getting logout and user from userauth
  const handleLogout = async () => {
    try {
      await logout();
    } catch {}
  };
  return (
    <div>
      <h2>
        Welcome <br />
        {user && user.email}
      </h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;

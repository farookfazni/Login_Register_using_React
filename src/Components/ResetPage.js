import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
// import { firestore } from "../fire";

const ResetPassword = () => {
  const [email, setEmail] = useState(""); // thease react hooks defined to change the values of email password according the user entered value
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const {resetPassword} = useUserAuth(); // gettong resetpassword from userAuth
  const navigate = useNavigate(); // to navigate to anothe page using navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    navigate("/home"); // redracticting back to login page when user sign up
    try {
      await resetPassword(email);
      setMessage('Check your Inbox for futher instruction');
    }catch(err){
      setError(err.message);
    }
  };

  return (
    <div>
      <form className="ui form">
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button onClick={handleSubmit}>Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;

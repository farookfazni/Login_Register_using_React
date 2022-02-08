import React, {useState} from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {signup} = useUserAuth();
  const navigate = useNavigate(); // to navigate to anothe page using navigate hook

      // creating an handler to change values on click
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      navigate("/"); // redracticting back to login page when user sign up
      try {
        await signup(email,password);
      }catch(err){
        setError(err.message);
      }
    };

  return (
    <div className="ui main">
      <h2>SignUp</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <form className="ui form">
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
          {/* <p>{emailError}</p> */}
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          {/* <p>{passwordError}</p> */}
        </div>
        <div>
          <>
            <button onClick={handleSubmit}>Sign Up</button>
            <p>
              have an account? <Link to="/">Sign In</Link>
            </p>
          </>
        </div>
      </form>
    </div>
  );
};

export default Signup;

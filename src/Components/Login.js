import React, {useState} from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState(""); // thease react hooks defined to change the values of email password according the user entered value
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {loin} = useUserAuth();
  const navigate = useNavigate(); // to navigate to anothe page using navigate hook

    // creating an handler to change values on click
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      navigate("/home"); // redracticting back to login page when user sign up
      try {
        await loin(email,password);
      }catch(err){
        setError(err.message);
      }
    };

  return (
    <div className="ui main">
      <h2>Login</h2>
      {/* this is an error alert shows when it catches an error */}
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
          
        </div>
        <div>
          <>
            <button onClick={handleSubmit}>Sign In</button>
            <p>
              Don't have an account?<Link to="/signup">Sign up</Link>
            </p>
          </>
          <Link to="/resetPassword">Forget Password</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

import React from "react";
import { Routes, Route } from "react-router-dom";
// import './App.css';
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import { Col, Container, Row } from "react-bootstrap";
import Signup from "./Components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import ResetPassword from "./Components/ResetPage";

function App() {
  // const myuser = {
  //   email: "faznifarook@gmail.com",
  //   password: "faz123",
  // };
  // const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [hasAccount, setHasAccount] = useState(false);

  // const handleLogout = () => {
  // return signOut(auth);
  // };

  // const authListner = () => {
  //   onAuthStateChanged(auth,(user) => {
  //     if (user) {
  //       clearInputs();
  //       setUser(user);
  //     } else {
  //       setUser("");
  //     }
  //   });
  // };

  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              {/* using protected route to denie access without login */}
              <Route path="/home" element={<ProtectedRoute><Welcome/></ProtectedRoute>} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

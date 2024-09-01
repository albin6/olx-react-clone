import "./Login.css";
import React, { useContext, useState } from "react";
import { login } from "../../authentication";
import Logo from "../../assets/Logo";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/Context";
import BackButton from "../BackButton/BackButton";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userCredentials = await login(email, password);
      setUser(userCredentials.user);
      // alert('Login Successful', userCredentials.user)
      navigate("/");
    } catch (error) {
      setError("Failed to log in. Please check your email and password.");
      console.error(error);
      alert("Login failed");
    }
  }

  return (
    <>
      <div className="container">
        <BackButton />
        <div className="signupParentDiv">
          <div className="logo-container">
            <Logo className="logo" />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Email</label>
            <br />
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
            />
            <br />
            <br />
            <button className="signup-btn">Login</button>
          </form>
          <Link to={"/signup"}>Signup</Link>
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </>
  );
}

export default Login;

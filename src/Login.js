import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");

    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      if (res.data.success) {
        navigate("/home");
      } else {
        setError("Invalid username or password");
      }
    } catch {
      setError("Backend not running");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="brand">SPATIA</h1>
        <p className="subtitle">Beyond Blueprints</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <button className="signup-btn" onClick={() => setInfo("Signup disabled (demo only)")}>
          Signup
        </button>

        {error && <p className="error">{error}</p>}
        {info && <p className="info">{info}</p>}
      </div>
    </div>
  );
}

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  };

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "30px",
          }}
        >
          Login ✈️
        </h1>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            background: "#3b82f6",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
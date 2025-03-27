import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  
import "./SignIn.css";
import amazonLogo from "../../../Assets/amazonLogo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: email,  
        password: "password123", 
      });

      toast.success("Login Successful!", { position: "bottom-right" });

      localStorage.setItem("token", response.data.token); 
      setLoading(false);
      navigate("/"); 
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Invalid credentials. Try again!", { position: "bottom-right" });
      setLoading(false);
    }
  };

  return (
    <div className="signInContainer">
      <img 
        src={amazonLogo} 
        alt="Amazon Logo" 
        className="amazonLogoSignIn" 
        onClick={() => navigate("/")} 
        style={{ cursor: "pointer" }} 
      />

      <div className="signInBox">
        <h2>Sign-In</h2>
        <form onSubmit={handleSignIn}>
          <label>Email or mobile phone number</label>
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <button type="submit" className="signInButton" disabled={loading}>
            {loading ? "Signing In..." : "Continue"}
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's 
          <a href="#"> Conditions of Use</a> and 
          <a href="#"> Privacy Notice</a>.
        </p>

        <button 
          className="createAccountButton" 
          onClick={() => navigate("/register")}
        >
          Create your Amazon account
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;


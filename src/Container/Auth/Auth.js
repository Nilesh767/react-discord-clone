import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../../api/firebase";
import { toast, ToastContainer } from "react-toastify";

import discordWhiteLogo from "../../Assets/Discord-Logo-White.svg";
import discordWhiteWordmark from "../../Assets/Discord-Wordmark-White.svg";

import "./Auth.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => {
        toast.error(error.message);
      });

    history.push("/home");
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => {
        toast.error(error.message);
      });

    history.push("/home");
  };

  const signUpHandler = () => {
    setIsSignUp(!isSignUp);
  };

  const submitHandler = (event) => {
    isSignUp ? register(event) : signIn(event);
  };

  return (
    <div className="auth">
      <div className="authLogo">
        <img
          src={discordWhiteLogo}
          alt="discord white logo"
          style={{ width: "35px" }}
        />
        <img
          src={discordWhiteWordmark}
          alt="discord white wordwork"
          style={{ width: "144px" }}
        />
      </div>
      <div className="authBox">
        <div className="authHeader">
          <h2>{isSignUp ? "Create an account" : "Welcome back!"}</h2>
          {isSignUp ? (
            <span>&nbsp;</span>
          ) : (
            <h3>We're so excited to see you again!</h3>
          )}
        </div>
        <div className="authForm">
          <form>
            <input ref={emailRef} placeholder="Email Address" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button type="submit" onClick={submitHandler}>
              {isSignUp ? "Register" : "Login"}
            </button>
          </form>
          <div className="authFooter">
            {!isSignUp && <span>Need an account?</span>}
            <span className="authSwitch" onClick={signUpHandler}>
              {isSignUp ? (
                <span>Already have an account?</span>
              ) : (
                <span>Register</span>
              )}
            </span>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;

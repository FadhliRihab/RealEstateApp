import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, register } from '../redux/action/AuthAction';
import "./Login.css"


const Login = () => {
  const signUpButton = useRef(null);
  const signInButton = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    signUpButton.current.addEventListener('click', () => {
      container.current.classList.add('right-panel-active');
    });

    signInButton.current.addEventListener('click', () => {
      container.current.classList.remove('right-panel-active');
    });
  }, []);

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [firstName,setFirstName]=useState('')
   const [lastName,setLastName]=useState('')
   
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=()=>{
    dispatch(login({email,password},navigate))
  }
  const handleRegister=()=>{
    dispatch(register({firstName,lastName ,email,password},navigate))
}

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <div className="containerrr" id="containerrr" ref={container}>
        <div className="form-container sign-up-container">
          <div style={{backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "0 50px",
          height: "100%",
          textAlign: "center"}} >
            <h1 id='h1'>Create Account</h1>

            <input type="text" placeholder="First name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} id='input'  />
            <input type="text" placeholder="Last name" value={lastName} onChange={(e)=>setLastName(e.target.value)} id='input'   />
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} id='input'   />
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} id='input'   />
            <button onClick={handleRegister}>Sign Up</button>
          </div>
        </div>
        <div className="form-container sign-in-container">
          <div style={{backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "0 50px",
          height: "100%",
          textAlign: "center"}}>
            <h1>Sign in</h1>

            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} id='input'   />
            <input type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} id='input'   />
            <Link >Forgot your password?</Link>
            <button onClick={handleLogin}>Sign In</button>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" ref={signInButton}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" ref={signUpButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

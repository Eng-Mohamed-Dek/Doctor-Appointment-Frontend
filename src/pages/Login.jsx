import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { validateEmail , validatePassword} from "../helpers/validations";

const Login = () => {
  const [signup, setSignUp] =useState('signup')

  // state to get data from the inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // navigate config
  const navigate = useNavigate();

  // submitting data
  const handleSignUp = async (e) => {
    e.preventDefault();

    //validate name input
    if (!name) {
      setError("Please enter your name");
      return;
    }

    //validate email
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    //validate password
    if (!password) {
      setError("Please enter a password");
      return;
    }

    //validate password
    if (!validatePassword(password)) {
      setError("Password Must at least 8 characters");
      return;
    }

    // then clear the error after validation
    setError("")
  }
    

  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <div className="shadow-md w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-3xl mb-7 font-semibold text-center">{signup}</h4>
            {signup === 'signup' && <input
              name="fullName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="input-box"
            />}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="input-box"
              name="email"
            />
            {/* password component */}
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button className="btn" type="submit">
              {signup}
            </button>
          </form>

          {/* show an error if exists  */}
          {error && <p className="text-red-500 pb-1">{error}</p>}
               {signup === "signup" ? (
                  <p className="text-sm text-center mt-4">
                     Already have an account? <span className="text-blue-500 underline cursor-pointer" onClick={() => setSignUp('Login')}>Login</span>
                  </p>
               ) : (
                  <p className="text-sm text-center mt-4">
                     Create an Account? <span className="text-blue-500 underline cursor-pointer" onClick={() => setSignUp('signup')}>Signup</span>
                  </p>
               )}
        </div>
      </div>
    </>
  );
};

export default Login;

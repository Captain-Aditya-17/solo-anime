import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Backapi from "../utils/Backapi";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    Backapi.post("/users/login", {
      email,
      password
    }).then((res) => {
      localStorage.setItem('token', res.data.token); 
      navigate('/');
    }).catch((err) => {
      console.log(err.response.data);
    });
  };
  return (
    <div className="h-screen w-full bg-black flex p-4 gap-4 items-center justify-center text-white">
      <div className="w-full h-full gap-4 flex flex-col">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/736x/39/60/bf/3960bfbabe5ae9775c97b0c3e0b84181.jpg"
            alt=""
          />
        </div>
        <div className="w-full h-full flex gap-4">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/474x/1e/3c/6a/1e3c6acb1b12c78d112fff071b582edd.jpg"
              alt=""
            />
          </div>{" "}
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/474x/59/db/f3/59dbf37e8c2d2911e339b32d08c108d7.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl">Login</h1>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
              value={email}
              onChange={(e)=>setemail(e.target.value)}
                className="mt-2 p-2 rounded-md w-96"
                type="email"
                id="email"
                placeholder="example@.com"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Password</label>
              <input
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
                className="mt-2 p-2 rounded-md w-96 text-black"
                type="password"
                id="password"
                placeholder="********"
              />
            </div>
            <button className="px-8 py-2 w-full bg-[#E50014] text-xl rounded-md">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

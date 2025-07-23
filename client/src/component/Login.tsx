import React, { useState } from "react";
import "../styles/auth.css";
import { Link } from "react-router-dom";
import { login } from "../redux/actions/authAction";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch: Dispatch<any> = useDispatch();

  const initialState = { username: "", password: "" };
  const [data, setData] = useState(initialState);
  const { username, password } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(login(data));
  };

  return (
    <>
      <div className="register">
        <div className="form">
          <h2>Login</h2>
          <div className="input">
            <div className="inputBox">
              <label htmlFor="">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="example@test.com"
                onChange={handleChange}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="......."
                onChange={handleChange}
              />
            </div>
            <div className="inputBox">
              <button onClick={handleSubmit}>Login</button>
            </div>
          </div>

          <p className="signin">
            Dont have Account ?{" "}
            <Link to="/register" className="a">
              Click Here!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

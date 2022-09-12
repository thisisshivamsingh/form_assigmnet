import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginDetails } from "../../redux/actions";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const inputHandler = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [inputName]: value });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(loginDetails(form));
    navigate("./home");
  };

  const { name, email, number, address } = form;
  return (
    <div className="login-form">
      <h3>Login</h3>
      <form onSubmit={submitLogin}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={inputHandler}
          placeholder="Name"
          required
        />
        <br />
        <input
          type="text"
          value={email}
          name="email"
          onChange={inputHandler}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="number"
          value={number}
          name="number"
          onChange={inputHandler}
          placeholder="Phone Number"
          required
        />
        <br />
        <input
          type="text"
          name="address"
          value={address}
          onChange={inputHandler}
          placeholder="Write Your Address"
          required
        />
        <br />
        <button type="submit" className="login">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

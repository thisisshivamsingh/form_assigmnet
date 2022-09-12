import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginDetails } from "../redux/actions";

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
    <div>
      <h3>Login</h3>
      <form onSubmit={submitLogin}>
        <h5>Name: </h5>
        <input
          type="text"
          value={name}
          name="name"
          onChange={inputHandler}
          required
        />
        <h5>Email: </h5>
        <input
          type="text"
          value={email}
          name="email"
          onChange={inputHandler}
          required
        />
        <h5>Number: </h5>
        <input
          type="number"
          value={number}
          name="number"
          onChange={inputHandler}
          required
        />
        <h5>Address: </h5>
        <textarea
          placeholder="Write your address"
          type="text"
          name="address"
          value={address}
          onChange={inputHandler}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

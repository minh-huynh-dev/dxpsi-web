import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import { useNavigate } from "react-router-dom";
import UserService from "../Services/UserService";

function Create() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    fullName: "",
    nickName: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fullName: state.fullName,
      nicknName: state.nickName,
      age: parseInt(state.age),
      password: state.password,
    };
    UserService.createUser(userData)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div>
        <h1>Register or Create new account</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">
            Full Name
            <input
              type="text"
              name="fullName"
              value={state.fullName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="nickName">
            Nick Name
            <input
              type="text"
              name="nickName"
              value={state.nickName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="age">
            Age
            <input
              type="number"
              name="age"
              value={state.age}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="text"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default Create;

import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import UsersService from "../services/UsersService";

function CreateUser() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    nickName: "",
    age: "",
    password: "",
  });
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(data);
    UsersService.createUser(data).then((res) => {
      setData({
        fullName: "",
        nickName: "",
        age: "",
        password: "",
      });
      navigate("/");
    });
  };
  return (
    <>
      <Navbar />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>User Registration Form</h3>
          </div>
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="full name"
              value={data.fullName}
              onChange={handleChange}
              required="required"
            />
          </div>
          <div>
            <input
              type="text"
              name="nickName"
              placeholder="nickname"
              value={data.nickName}
              required="required"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              name="age"
              placeholder="age"
              required="required"
              value={data.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="password"
              required="required"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Submit Form</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateUser;

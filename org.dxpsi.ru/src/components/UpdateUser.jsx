import React, { useState } from "react";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import UsersService from "../services/UsersService";

function UpdateUser() {
  const location = useLocation();
  let navigate = useNavigate();
  const userID = location.state.id;   

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
    console.log(userID);
   


    console.log(data);

    UsersService.updateUser(data, data.id)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="row mt-5 mx-5">
        <table className="table table-striped table-bordered ">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Nick Name</th>
              <th>Age</th>
              <th>Password</th>
              <th>MongoDB ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{location.state.fullName}</td>
              <td>{location.state.nickName}</td>
              <td>{location.state.age}</td>
              <td>{location.state.password}</td>
              <td>{location.state.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* input for changing user information*/}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>User Update Form</h3>
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

export default UpdateUser;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import UsersService from "../services/UsersService";
import { useNavigate } from "react-router-dom";
function ListUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await UsersService.getAllUsers();
      setUsers(result.data);
    }
    fetchData();
  }, []);

  const deleteUser = (id) =>{
    if(window.confirm('Are you sure you want to delete this user?')){
      UsersService.deleteCustomer(id).then(res=>{

        console.log(res);
        window.location.reload(true); //reload page manually 

      }).catch(error =>{
        console.log(error);
      })
    }else{
      navigate("/list");
    }
  }


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
              <th>Kool Stuff</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.nickName}</td>
                <td>{user.age}</td>
                <td>{user.password}</td>
                <td>{user.id}</td>
                <td>
                  <button className="btn btn-info">Update</button>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn btn-danger"
                    onClick={ () => deleteUser(user.id)} 
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListUsers;

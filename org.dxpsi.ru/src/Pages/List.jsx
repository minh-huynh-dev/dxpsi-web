import React, { useState, useEffect } from "react";
import UserService from "../Services/UserService";
import Navbar from "../Component/Navbar";


function List() {
  // At the beginning, posts is an empty array
  const [users, setUsers] = useState([]);
  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await UserService.getAllUsers();
    setUsers(data);
  };
  const handleDelete = (user) => {
    UserService
      .deleteUser(user.id)
      .then((response) => console.log(response.status))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        {users.length > 0 ? (
          <div className="content">
            {users.map((user) => (
              <div key={user.id} className="post">
                <h2>{user.fullName}</h2>
                <p>{user.nickName}</p>
                <p>{user.age}</p>
                <p>{user.password}</p>
                <p>{user.id}</p>

                <button type="submit" onClick={handleDelete(user)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="loading">Loading... </p>
        )}
      </div>
    </>
  );
}

export default List;

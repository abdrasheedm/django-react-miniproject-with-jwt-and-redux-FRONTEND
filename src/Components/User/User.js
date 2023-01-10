import { useState, useEffect } from "react";
import API from "./../../Api";
import Table from "react-bootstrap/Table";
import '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function User() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  useEffect(() => {
    refreshUsers();
  }, []);

  const refreshUsers = () => {
    API.get("/signup/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(console.error);
  };

  const deleteItem = (email) => {
    API.post("/delete", {
      email : email,
    }).then((res) => {
      console.log("deleted")
      navigate("/users")
      refreshUsers() 
    })
  }
  const dispatch = useDispatch()

  const updateUser = (email) => {

    console.log(email)
    dispatch({
      type : 'updateUser',
      payload : email
      
    })
    navigate("/update-user")
  }
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-5">USER DETAILS</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th className="">Delete</th>
            <th>update</th>
          </tr>
        </thead>
        {users.map((user, index) => {
          return (
            <tbody>
              <td>{index + 1}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td><i className="fa-solid fa-trash-can" onClick={() => deleteItem(user.email)}></i></td>
              <td><i className="fa-solid fa-refresh" onClick={() => updateUser(user.email)}></i></td>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default User;

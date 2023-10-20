import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserView() {
  const params = useParams();
  console.log("User View", params);
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // On Load
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/users/${params.id}`, {
        withCredentials: true,
      });

      console.log("User Data:", response.data);

      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>UserView - {params.id}</div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">UserView</h6>
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="Loading" />
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>{user.country}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserView;

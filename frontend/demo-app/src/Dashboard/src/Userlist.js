import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function Userlist() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const apiUrl = 'http://localhost:8000/api/users/';

  useEffect(() => {
    getUsers();
    console.log("welcome");
  }, []);

  let getUsers = async () => {
    try {
      const users = await axios.get(apiUrl,{withCredentials:true})
      // setUserList(users.data.data)
      .then((users)=>{
        setUserList(users.data.data);
        console.log(users.data.data)
      })
      .then(()=>{
        setLoading(false);  
    
      })
      
      
    } catch (error) {
      console.log(error);
    }
  }

  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete the data?");
      if (confirmDelete) {
        await axios.delete(`${apiUrl}:${id}`);
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  }
  const getRowId = (row) => row._id;

  const columns = [
    // { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'username', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'E-Mail', flex: 1 },
    { field: 'isAdmin', headerName: 'IsAdmin', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div>
          <Link to={`/portal/user-view/${params.row._id}`} className='btn btn-primary btn-sm mr-1'>View</Link>
          <Link to={`/portal/user-edit/${params.row._id}`} className='btn btn-info btn-sm mr-1'>Edit</Link>
          <button onClick={() => handleDelete(params.row._id)} className='btn btn-danger btn-sm mr-1'>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User-List</h1>
        <Link to="/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Create User
        </Link>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          
          rows={userList}
          columns={columns}
          pageSize={5}
          loading={isLoading}
          getRowId={getRowId} 
        />
      </div>
    </>
  );
}

export default Userlist;

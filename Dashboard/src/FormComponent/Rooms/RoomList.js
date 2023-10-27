import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function RoomList() {
  const [roomList, setRoomList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/room'); // Replace with your API endpoint
      setRoomList(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const getRowId = (row) => row._id;

  const columns = [
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'maxPeople', headerName: 'Max People', flex: 1 },
    { field: 'desc', headerName: 'Description', flex: 1 },
    {
      field: 'roomNumbers',
      headerName: 'Room Numbers',
      flex: 2,
      renderCell: (params) => (
        <div>
          {params.row.roomNumbers.map((roomNumber) => (
            <div key={roomNumber.number}>
              Number: {roomNumber.number}, Unavailable Dates: {roomNumber.unavailableDates.join(', ')}
            </div>
          ))}
        </div>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div className="action-buttons">
          <Link to={`/portal/room-view/${params.row._id}`} className='btn btn-primary btn-sm'>View</Link>
          <Link to={`/portal/room-edit/${params.row._id}`} className='btn btn-info btn-sm'>Edit</Link>
          <button onClick={() => handleDelete(params.row._id)} className='btn btn-danger btn-sm'>Delete</button>
        </div>
      ),
    }
  ];

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete the data?");
      if (confirmDelete) {
        await axios.delete(`http://localhost:8000/api/room/${id}`);
        getRooms();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="room-list-container">
      <div className="header">
        <h1 className="h3 mb-0 text-gray-800">Room List</h1>
      </div>
      <div className="data-grid">
        <DataGrid
          rows={roomList}
          columns={columns}
          pageSize={5}
          loading={isLoading}
          getRowId={getRowId}
        />
      </div>
    </div>
  );
}

export default RoomList;

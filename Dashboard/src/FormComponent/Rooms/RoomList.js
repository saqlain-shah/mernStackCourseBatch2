import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function RoomList() {
  const [RoomList, setRoomList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const apiUrl = 'http://localhost:8000/api/room';
  useEffect(() => {
    getRooms();
  }, []);

  let getRooms = async () => {
    try {
      const rooms = await axios.get(apiUrl, { withCredentials: true });
      setRoomList(rooms.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const getRowId = (row) => row._id;
// eslint-disable-next-line
  const columns = [
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'maxPeople', headerName: 'MaxPeople', flex: 1 },
    { field: 'desc', headerName: 'Desc', flex: 1 },
    {
      field: 'roomNumbers',
      headerName: 'RoomNumbers',
      flex: 1,
      renderCell: (params) => (
        <div>
          {params.row.roomNumbers.map((roomNumber) => (
            <div key={roomNumber.number}>
              Number: {roomNumber.number}, Unavailable Dates: {roomNumber.unavailableDates.join(', ')}
            </div>
          ))}
        </div>
      )},
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div className="action-buttons">
          <Link to={`/portal/room-view/${params.row._id}`} className='btn btn-primary btn-sm'>View</Link>
          <Link to={`/portal/room-edit/${params.row._id}`} className='btn btn-info btn-sm'>Edit</Link>
          <button onClick={() => handleDelete(params.row._id, params.row.hotelid)} className='btn btn-danger btn-sm'>Delete</button>
        </div>
      )},
    ,
  ];
  
  let handleDelete = async (id, hotelid) => {
    const deleteUrl = `${apiUrl}/${id}/${hotelid}`; 
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete the data?");
      if (confirmDelete) {
        await axios.delete(deleteUrl);
        getRooms();
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="room-list-container">
      <div className="header">
        <h1 className="h3 mb-0 text-gray-800">Rooms-List</h1>
      </div>
      <div className="data-grid">
        <DataGrid
          rows={RoomList}
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

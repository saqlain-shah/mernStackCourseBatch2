import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

function RoomView() {
  const [room, setRoom] = useState({});
  const [isLoading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getRoomDetails();
  }, [id]);

  const getRoomDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/room/${id}`);
      setRoom(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete the room?");
      if (confirmDelete) {
        await axios.delete(`http://localhost:8000/api/room/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="room-view-container">
      <div className="header">
        <h1 className="h3 mb-0 text-gray-800">Room View</h1>
      </div>
      <div className="room-details">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2>Title{room.title}</h2>
            <p>Price: {room.price}</p>
            <p>Max People: {room.maxPeople}</p>
            <p>Description: {room.desc}</p>
            <div>
              <h3>Room Numbers</h3>
              {room.roomNumbers.map((roomNumber) => (
                <div key={roomNumber.number}>
                  Number: {roomNumber.number}, Unavailable Dates: {roomNumber.unavailableDates.join(', ')}
                </div>
              ))}
            </div>

          </div>
        )}
        <div className="actions">
          <Link to={`/portal/room-edit/${id}`} className='btn btn-info btn-sm'>Edit</Link>
          <button onClick={() => handleDelete(id)} className='btn btn-danger btn-sm'>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default RoomView;

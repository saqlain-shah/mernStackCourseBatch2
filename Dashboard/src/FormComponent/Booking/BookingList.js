import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
function BookingList() {
  const [bookingList, setBookingList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/booking/', { withCredentials: true });
      setBookingList(response.data.data);
      console.log("Response", response.data.data)
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }


  const getRowId = (row) => row._id;
  const columns = [
    { field: 'hotelId', headerName: 'Hotel ID', flex: 1 },
    { field: 'roomId', headerName: 'Room ID', flex: 1 },
    { field: 'toDate', headerName: 'To Date', flex: 1 },
    { field: 'fromDate', headerName: 'From Date', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div className="action-buttons">
          <Link to={`/portal/booking-view/${params.row._id}`} className='btn btn-primary btn-sm'>View</Link>
          <Link to={`/portal/booking-edit/${params.row._id}`} className='btn btn-info btn-sm'>Edit</Link>
          <button onClick={() => handleDelete(params.row._id)} className='btn btn-danger btn-sm'>Delete</button>
        </div>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete the booking?");
      if (confirmDelete) {
        await axios.delete(`http://localhost:8000/api/booking/checkout/${id}`); // Adjust the API route accordingly
        getBookings();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="booking-list-container">
      <div className="header">
        <h1 className="h3 mb-0 text-gray-800">Booking List</h1>
        <Link to="/portal/create-booking" className="create-button">
          <FontAwesomeIcon icon={faCalendar} className="creatingbooking mr-2" />
          Create Booking
        </Link>
      </div>
      <div className="data-grid">
        <DataGrid
          rows={bookingList}
          columns={columns}
          pageSize={5}
          loading={isLoading}
          getRowId={getRowId}
        />

      </div>
    </div>
  );
}

export default BookingList;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function HotelList() {
  const [hotelList, setHotelList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/hotel'); // Assuming you have set up your API route appropriately
      setHotelList(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const getRowId = (row) => row._id;

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'type', headerName: 'Type', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'distance', headerName: 'Distance', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'cheapestPrice', headerName: 'Cheapest Price', flex: 1 },
    {
      field: 'rooms',
      headerName: 'Rooms',
      flex: 1,
      valueGetter: (params) => params.row.rooms.join(', '),
    },
    {
      field: 'photos',
      headerName: 'Photos',
      flex: 3,
      renderCell: (params) => (
        <div className="photo-cell">
          
        </div>
      ),
    },
  
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div className="action-buttons">
          <Link to={`/portal/hotel-view/${params.row._id}`} className='btn btn-primary btn-sm'>View</Link>
          <Link to={`/portal/hotel-edit/${params.row._id}`} className='btn btn-info btn-sm'>Edit</Link>
          <button onClick={() => handleDelete(params.row._id)} className='btn btn-danger btn-sm'>Delete</button>
        </div>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete the data?");
      if (confirmDelete) {
        await axios.delete(`http://localhost:8000/api/hotel/${id}`); // Adjust the API route accordingly
        getHotels();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="hotel-list-container">
      <div className="header">
        <h1 className="h3 mb-0 text-gray-800">Hotel List</h1>
        <Link to="/portal/create-hotel" className="create-button">
          <FontAwesomeIcon icon={faHotel} className="creatinghotel mr-2" />
          Create Hotel
        </Link>
      </div>
      <div className="data-grid" style={{ height: 400, width: '100%', margin:'auto', backgroundColor:'white', marginTop:'50'}}>
        <DataGrid
          rows={hotelList}
          columns={columns}
          pageSize={5}
          loading={isLoading}
          getRowId={getRowId}
        />
      </div>
    </div>
  );
}

export default HotelList;





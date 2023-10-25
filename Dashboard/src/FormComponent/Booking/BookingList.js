import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function BookingList() {
  const [bookingList, setbookingList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const apiUrl = 'http://localhost:8000/api/booking/list/';

  useEffect(() => {
    getbookingList();
    console.log("welcome");
  }, []);

  let getbookingList = async () => {
    try {
      const users = await axios.get(apiUrl,{withCredentials:true})
        setbookingList(users.data);
        console.log(users.data)
        setLoading(false);       
    } catch (error) {
      console.log(error);
    }
  }
  const getRowId = (row) => row._id;

  const columns = [
    { field: 'hotelId', headerName: 'Hotel-Id', flex: 1 },
    { field: 'roomId', headerName: 'Room-Id', flex: 1 },
    { field: 'toDate', headerName: 'To-Date', flex: 1 },
    { field: 'fromDate', headerName: 'From-Date', flex: 1 },
  ];

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Booking-List</h1>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={bookingList}
          columns={columns}
          pageSize={5}
          loading={isLoading}
          getRowId={getRowId} 
        />
      </div>
    </>
  );
}

export default BookingList;

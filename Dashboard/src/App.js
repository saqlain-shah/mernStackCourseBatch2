import React, { useState } from 'react';
import Dashboard from './DashComponent/Dashboard';
import Portal from './DashComponent/Portal';
import UserCreate from './DashComponent/UserCreate';
import UserEdit from './DashComponent/UserEdit';
import BookingList from './FormComponent/Booking/BookingList';
import BookingView from './FormComponent/Booking/BookingView';
import Login from './FormComponent/Forms/Auth/Login';
import Register from './FormComponent/Forms/Auth/Register';
import CreateHotel from './FormComponent/Hotel/CreateHotel';
import HotelEdit from './FormComponent/Hotel/Hoteledit';
import HotelList from './FormComponent/Hotel/hotellist';
import HotelView from './FormComponent/Hotel/hotelsview';
import RoomList from './FormComponent/Rooms/RoomList';
import RoomView from './FormComponent/Rooms/RoomView';
import UserView from './FormComponent/User/UserView';
import Userlist from './FormComponent/User/Userlist';
import "./sb-admin-2.min.css";
import { Route, Routes } from 'react-router-dom';

import './sb-admin-2.min.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
    console.log("username",username)
  };

  return (
    <Routes>
      <Route path='/' element={loggedInUser ? <Portal username={loggedInUser} /> : <Login onLogin={handleLogin} />} />
      <Route path='/login' element={<Login onLogin={handleLogin} />} />
      <Route path='/register' element={<Register />} />
      <Route path='portal/dashboard' element={<Dashboard />} />
      <Route path='portal/create-hotel' element={<CreateHotel />} />
      <Route path='portal/hotel-list' element={<HotelList />} />
      <Route path='portal/hotel-view/:id' element={<HotelView />} />
      <Route path='portal/hotel-edit/:id' element={<HotelEdit />} />
      <Route path='create-user' element={<UserCreate />} />
      <Route path='portal/user-list' element={<Userlist/>}/>
      <Route path='portal/user-view/:id' element={<UserView />} />
      <Route path='portal/user-edit/:id' element={<UserEdit />} />
      <Route path='portal/booking-list' element={<BookingList />} />
      <Route path='portal/booking-view/:id' element={<BookingView />} />
      <Route path='portal/rooms-list' element={<RoomList />} />
      <Route path='portal/room-view/:id' element={<RoomView />} />
    </Routes>
  );
}

export default App;

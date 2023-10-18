import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import "./sb-admin-2.min.css";
import Dashboard from './Dashboard';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Forms/Auth/Login';
import Userlist from './Userlist';
import Portal from './Portal';
import UserCreate from './UserCreate';
import UserView from './UserView';
import UserEdit from './UserEdit';
import Register from './component/Forms/Auth/Register';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/portal' element={<Portal />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='user-list' element={<Userlist />} />
          <Route path='create-user' element={<UserCreate />} />
          <Route path='user-view/:id' element={<UserView />} />
          <Route path='user-edit/:id' element={<UserEdit />} />
          
        </Route>
      </Routes>
  );
}

export default App;

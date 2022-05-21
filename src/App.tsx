import React from 'react';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Dashboard from './components/dashboard/Dashboard';
import Card from './components/home/Card';
import { Routes, Route, Navigate } from 'react-router-dom';
import ManageStation from './components/dashboard/ManageStation';
import CreateNewStation from './components/dashboard/CreateNewStation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Card/>} />
      <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='create-station' element={<CreateNewStation/>} />
          <Route path='manage-station' element={<ManageStation/>} />
          <Route path='/dashboard' element={<Navigate to='create-station' />} />
      </Route>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;

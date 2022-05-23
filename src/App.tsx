import React, { useEffect } from 'react';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Dashboard from './components/dashboard/Dashboard';
import Card from './components/home/Card';
import { Routes, Route, Navigate } from 'react-router-dom';
import ManageStation from './components/dashboard/ManageStation';
import CreateNewStation from './components/dashboard/CreateNewStation';

// is Authenticated
import { isAuthenticated } from "./components/utils/isAuthenticate";
import PrivateRoute from './components/authentication/PrivateRoute';

function App() {

  useEffect(()=>{
    isAuthenticated()
  },[])

  return (
      <Routes>
        <Route path='/' element={<Card/>} />
        <Route path='/dashboard' element={ <PrivateRoute><Dashboard/></PrivateRoute> }>
            <Route path='create-station' element={ <PrivateRoute><CreateNewStation/></PrivateRoute> } />
            <Route path='manage-station' element={ <PrivateRoute><ManageStation/></PrivateRoute> } />
            <Route path='/dashboard' element={<Navigate to='create-station' />} />
        </Route>
        <Route path='/login' element={ <Login/> } />
        <Route path='/signup' element={ <Signup/> } />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
  );
}

export default App;

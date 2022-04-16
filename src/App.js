import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Login from './Component/user-auth/Login';
import Registration from './Component/user-auth/Registration';

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </>
  );
};

export default App;



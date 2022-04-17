

import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Component/Checkout';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import Notfound from './Component/Notfound';
import Requareauth from './Component/Requareauth';
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
        <Route path='*' element={<Notfound></Notfound>}></Route>
        <Route path='/checkout/:id' element={
          <Requareauth>
            <Checkout></Checkout>
          </Requareauth>
        }></Route>
      </Routes>
      <Footer></Footer>

    </>
  );
};

export default App;



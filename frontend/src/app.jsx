import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home.jsx";
import UserLogin from "./Components/userLogin.jsx";
import UserRegister from './Components/userRegister.jsx';
import CaptainLogin from './Components/CaptainLogin.jsx';
import CaptainRegister from './Components/CaptainRegister.jsx';

const app = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<UserLogin/>}></Route>
      <Route path='/register' element={<UserRegister/>}></Route>
      <Route path='/captainLogin' element={<CaptainLogin/>}></Route>
      <Route path='/captainRegister' element={<CaptainRegister/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default app
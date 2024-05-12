import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TrendsBar from './components/TrendsBar';
import Box from '@mui/material/Box';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';

const style = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#EBF5FB',
  fontFamily: 'Noto Sans JP',
  color: '#3F3F3F',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(24, 1fr)',
}

const Login = () => {
  return (
    <Box sx={style}>
      <TrendsBar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='resetpassword' element={<ForgotPassword/>} />
        </Routes>
    </Box>
  );
}

export default Login;



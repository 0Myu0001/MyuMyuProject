import * as React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import TrendsBar from './components/TrendsBar';
import Box from '@mui/material/Box';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignUp2 from './components/SignUp2';
import SignUp3 from './components/SignUp3';
import ForgotPassword from './components/ForgotPassword';
import { prepareCssVars } from '@mui/system';

const style = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#F2F8FF',
  fontFamily: 'Roboto',
  color: '#3F3F3F',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(24, 1fr)',
}

const SignUps = () => {
  const [step, setStep] = React.useState(0);

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  }; 

  switch (step) {
    default :
      return <SignUp handleNext={handleNext} />;
    case 1 :
      return <SignUp2 handleNext={handleNext}/>;
    case 2 :
      return <SignUp3 />;
  }
};

const Login = () => {
  return (
    <Box sx={style}>
      <TrendsBar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="signup" element={<SignUps />} />
          <Route path='resetpassword' element={<ForgotPassword/>} />
        </Routes>
    </Box>
  );
};

export default Login;



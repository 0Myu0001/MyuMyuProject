import * as React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
// @ts-expect-error TS(6142): Module './components/TrendsBar' was resolved to '/... Remove this comment to see the full error message
import TrendsBar from './components/TrendsBar';
import Box from '@mui/material/Box';
// @ts-expect-error TS(6142): Module './components/SignIn' was resolved to '/Use... Remove this comment to see the full error message
import SignIn from './components/SignIn';
// @ts-expect-error TS(6142): Module './components/SignUp' was resolved to '/Use... Remove this comment to see the full error message
import SignUp from './components/SignUp';
// @ts-expect-error TS(6142): Module './components/SignUp2' was resolved to '/Us... Remove this comment to see the full error message
import SignUp2 from './components/SignUp2';
// @ts-expect-error TS(6142): Module './components/SignUp3' was resolved to '/Us... Remove this comment to see the full error message
import SignUp3 from './components/SignUp3';
// @ts-expect-error TS(6142): Module './components/ForgotPassword' was resolved ... Remove this comment to see the full error message
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
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <SignUp handleNext={handleNext} />;
    case 1 :
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <SignUp2 handleNext={handleNext}/>;
    case 2 :
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <SignUp3 />;
  }
};

const Login = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box sx={style}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TrendsBar />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Routes>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/" element={<SignIn />} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="signup" element={<SignUps />} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path='resetpassword' element={<ForgotPassword/>} />
        </Routes>
    </Box>
  );
};

export default Login;



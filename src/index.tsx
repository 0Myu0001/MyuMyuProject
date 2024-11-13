import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
// @ts-expect-error TS(6142): Module './App' was resolved to '/Users/kei/Desktop... Remove this comment to see the full error message
import App from './App';
// @ts-expect-error TS(6142): Module './home' was resolved to '/Users/kei/Deskto... Remove this comment to see the full error message
import Home from './home';
import reportWebVitals from './reportWebVitals';
// @ts-expect-error TS(6142): Module './Login' was resolved to '/Users/kei/Deskt... Remove this comment to see the full error message
import Login from './Login';
// @ts-expect-error TS(6142): Module './components/PlayerProvider' was resolved ... Remove this comment to see the full error message
import { PlayerProvider } from './components/PlayerProvider';
// @ts-expect-error TS(6142): Module './components/BreakPoint' was resolved to '... Remove this comment to see the full error message
import { BreakPointsProvider } from './components/BreakPoint';

// @ts-expect-error TS(2345): Argument of type 'HTMLElement | null' is not assig... Remove this comment to see the full error message
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <BrowserRouter>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <PlayerProvider>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <BreakPointsProvider>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Routes>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route path='/home' element={<Home />}/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route path='/*' element={<App />}/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route path='/signin/*' element={<Login />} />
          </Routes>
        </BreakPointsProvider>
      </PlayerProvider>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
reportWebVitals();

import * as React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
// @ts-expect-error TS(6142): Module './components/BreakPoint' was resolved to '... Remove this comment to see the full error message
import { useBreakPoints } from "./components/BreakPoint";
import { useTheme } from "@mui/material/styles";
// @ts-expect-error TS(6142): Module './components/menu' was resolved to '/Users... Remove this comment to see the full error message
import Menu from "./components/menu";
// @ts-expect-error TS(6142): Module './components/MainPlayer' was resolved to '... Remove this comment to see the full error message
import MainPlayer from "./components/MainPlayer";
// @ts-expect-error TS(6142): Module './components/Search' was resolved to '/Use... Remove this comment to see the full error message
import Search from "./components/Search";
// @ts-expect-error TS(6142): Module './components/PlayingNext' was resolved to ... Remove this comment to see the full error message
import PlayingNext from "./components/PlayingNext";
// @ts-expect-error TS(6142): Module './components/TrendsBar' was resolved to '/... Remove this comment to see the full error message
import TrendsBar from "./components/TrendsBar";
import { Box } from "@mui/material";

const Home = () => {
  const theme = useTheme();
return (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.Fragment>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#F2F8FF",
          fontFamily: "Roboto",
          color: "#203F6F",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(24, 1fr)",
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TrendsBar />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Menu />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Routes>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/" element={<MainPlayer />} />
        </Routes>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Search />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PlayingNext />
      </Box>
    </div>
  </React.Fragment>
);
};

export default Home;

import * as React from "react";
import { Route, Routes } from "react-router-dom";
// @ts-expect-error TS(6142): Module './components/BreakPoint' was resolved to '... Remove this comment to see the full error message
import { useBreakPoints } from "./components/BreakPoint";
// @ts-expect-error TS(6142): Module './components/menu' was resolved to '/Users... Remove this comment to see the full error message
import MenuList from "./components/menu";
// @ts-expect-error TS(6142): Module './components/MainPlayer' was resolved to '... Remove this comment to see the full error message
import MainPlayer from "./components/MainPlayer";
// @ts-expect-error TS(6142): Module './components/MainExplorer' was resolved to... Remove this comment to see the full error message
import MainExplorer from "./components/MainExplorer";
// @ts-expect-error TS(6142): Module './components/MainLibrary' was resolved to ... Remove this comment to see the full error message
import MainLibrary from "./components/MainLibrary";
// @ts-expect-error TS(6142): Module './components/Playlist' was resolved to '/U... Remove this comment to see the full error message
import Playlist from "./components/Playlist";
// @ts-expect-error TS(6142): Module './components/Create' was resolved to '/Use... Remove this comment to see the full error message
import Create from "./components/Create";
// @ts-expect-error TS(6142): Module './components/NotificationWindow' was resol... Remove this comment to see the full error message
import NotificationWindow from "./components/NotificationWindow";
// @ts-expect-error TS(6142): Module './components/AccountPanel' was resolved to... Remove this comment to see the full error message
import AccountPanel from "./components/AccountPanel";
// @ts-expect-error TS(6142): Module './components/Search' was resolved to '/Use... Remove this comment to see the full error message
import Search from "./components/Search";
// @ts-expect-error TS(6142): Module './components/Player' was resolved to '/Use... Remove this comment to see the full error message
import Player from "./components/Player";
// @ts-expect-error TS(6142): Module './components/TrendsBar' was resolved to '/... Remove this comment to see the full error message
import TrendsBar from "./components/TrendsBar";
import Box from "@mui/material/Box";

const App = () => {
  const { mdMatches, smMatches } = useBreakPoints();

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#F2F8FF",
          fontFamily: "Roboto",
          color: "#203f6f",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(24, 1fr)",
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TrendsBar />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MenuList />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Routes>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/explore" element={<MainExplorer />} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/library" element={<MainLibrary />} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/notification" element={<NotificationWindow />} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/account" element={<AccountPanel />} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/create" element={<Create />} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path="/playlist/:playlistId" element={<Playlist />} />
        </Routes>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Search />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Player />
      </Box>
    </div>
  );
};

export default App;

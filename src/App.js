import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useBreakPoints } from "./components/BreakPoint";
import MenuList from "./components/menu";
import MainPlayer from "./components/MainPlayer";
import MainExplorer from "./components/MainExplorer";
import MainLibrary from "./components/MainLibrary";
import Playlist from "./components/Playlist";
import Create from "./components/Create";
import NotificationWindow from "./components/NotificationWindow";
import AccountPanel from "./components/AccountPanel";
import Search from "./components/Search";
import Player from "./components/Player";
import TrendsBar from "./components/TrendsBar";
import Box from "@mui/material/Box";

const App = () => {
  const { mdMatches, smMatches } = useBreakPoints();

  return (
    <div>
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
        <TrendsBar />
        <MenuList />
        <Routes>
          <Route path="/explore" element={<MainExplorer />} />
          <Route path="/library" element={<MainLibrary />} />
          <Route path="/notification" element={<NotificationWindow />} />
          <Route path="/account" element={<AccountPanel />} />
          <Route path="/create" element={<Create />} />
          <Route path="/playlist/:playlistId" element={<Playlist />} />
        </Routes>
        <Search />
        <Player />
      </Box>
    </div>
  );
};

export default App;

import * as React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { useBreakPoints } from "./components/BreakPoint";
import { useTheme } from "@mui/material/styles";
import Menu from "./components/menu";
import MainPlayer from "./components/MainPlayer";
import Search from "./components/Search";
import PlayingNext from "./components/PlayingNext";
import TrendsBar from "./components/TrendsBar";
import { Box } from "@mui/material";

const Home = () => {
  const theme = useTheme();
return (
  <React.Fragment>
    <div>
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
        <TrendsBar />
        <Menu />
        <Routes>
          <Route path="/" element={<MainPlayer />} />
        </Routes>
        <Search />
        <PlayingNext />
      </Box>
    </div>
  </React.Fragment>
);
};

export default Home;

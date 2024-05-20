import React from "react";
import TemporaryDrawer from "./components/TemporaryDrawer.tsx";
import "./App.css";
import TopAppBar from "./components/TopAppBar.tsx";
import { Outlet } from "react-router-dom";

const App = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <TopAppBar toggleDrawer={toggleDrawer} />
      <TemporaryDrawer toggleDrawer={toggleDrawer} isDrawerOpen={open} />
      <h3>10X your studying!</h3>
      <Outlet />
    </>
  );
};

export default App;

import React from "react";
import TemporaryDrawer from "./components/TemporaryDrawer/TemporaryDrawer.tsx";
import "./App.css";
import FlipCard from "./components/FlipCard/FlipCard.tsx";
import TopAppBar from "./components/TopAppBar/TopAppBar.tsx";

const App = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    console.log(`Toggling drawer to ${!open}`);
    setOpen(!open);
  };

  return (
    <>
      <TopAppBar toggleDrawer={toggleDrawer} />
      <TemporaryDrawer toggleDrawer={toggleDrawer} isDrawerOpen={open} />
      <h1>Tenzi</h1>
      <h3>10X your studying!</h3>
      <FlipCard />
    </>
  );
};

export default App;

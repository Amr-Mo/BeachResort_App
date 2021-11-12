import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

//components
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

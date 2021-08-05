import {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Topics from "./pages/Topics";
import LobbyPublic from "./pages/LobbyPublic";
import RoomChat from "./pages/RoomChat";
import "bootstrap/dist/css/bootstrap.min.css";
import actions from "./api";



function App() {
 
  

  return (
    <div className="App">
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/topics/:id' component={Topics} />
        <Route path='/lobbypublic/:id' component={LobbyPublic} />
        <Route path='/room/:id' component={RoomChat} />
      </Switch>
    </div>
  );
}

export default App;

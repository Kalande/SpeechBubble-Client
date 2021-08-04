import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Topics from "./pages/Topics";
import LobbyPublic from "./pages/LobbyPublic";
import RoomChat from "./pages/RoomChat";

import * as PATHS from "./utils/paths";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={PATHS.HOMEPAGE} component={HomePage} />
        <Route path={PATHS.TOPICS} component={Topics} />
        <Route path={PATHS.LOBBYPUBLIC} component={LobbyPublic} />
        <Route path={PATHS.ROOMCHAT} component={RoomChat} />
      </Switch>
    </div>
  );
}

export default App;

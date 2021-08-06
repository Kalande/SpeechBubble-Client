import {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Topics from "./pages/Topics";
import AllPublicLobbies from "./pages/AllPublicLobbies";
import RoomChat from "./pages/RoomChat";
import "bootstrap/dist/css/bootstrap.min.css";
import actions from "./api";
import PrivChat from './pages/PrivChat'
import HostForm from "./components.form/HostForm";


function App() {
 
  

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/:option/topics' component={Topics} />
        <Route path='/:topic/lobbies' component={AllPublicLobbies} />
        <Route path='/room/:name' component={RoomChat} />
        <Route path='/privateRoom/:privateId' component={PrivChat} />
        <Route path='/host/:topic/hostForm' component={HostForm} />
      </Switch>
    </div>
  );
}

export default App;

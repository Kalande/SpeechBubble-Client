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
import HostTopics from "./pages/HostTopics";
import UserForm from "./pages/UserForm";

function App() {
 
  

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path="/host/topics" render={(props) => <HostTopics {...props} />} />
        <Route exact path="/topics" render={(props) => <Topics {...props} />} />
        <Route path='/lobbies/:topic' component={AllPublicLobbies} />
        <Route exact path='/lobby/:id' component={RoomChat} />
        <Route path="/lobby/:id/user" render={(props) => <UserForm {...props} />} />
        <Route path='/privateRoom/:privateId' component={PrivChat} />
        <Route exact path="/create/:topic" render={(props) => <UserForm {...props} />} />
        <Route path='/create/:topic/hostForm' component={HostForm} />
      </Switch>
    </div>
  );
}

export default App;

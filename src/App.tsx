import React from 'react';
import './App.css';
import Register from "./views/Register";
import Login from "./views/Login";
import Kanban from "./views/Kanban";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Kanban} />
      <Route path="/signup" component={Register} />
      <Route path="/login" component={Login} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default App;
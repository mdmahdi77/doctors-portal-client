import React, { createContext, useState } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from './components/Home/Home/Home';
import Login from "./components/Login/Login/Login";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./components/AddDoctor/AddDoctor";

export const UserContext = createContext()

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      <h1>{userLoggedIn.email}</h1>
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/dashboard/allpatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/dashboard/appointment">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

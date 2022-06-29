import React from "react";
import { Redirect, Route } from "react-router-dom";
import Calendar from "../pages/Calendar";
import Clocks from "../pages/Clocks";
import CreateNT from "../pages/CreateNT";
import Dashboard from "../pages/Dashboard";
import Neotasks from "../pages/Neotasks";
import Settings from "../pages/Settings";

const Routes: React.FC = () => (
  <React.Fragment>
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/Calendar" component={Calendar} />
    <Route path="/Clocks" component={Clocks} />
    <Route path="/Neotasks" component={Neotasks} />
    <Route path="/Settings" component={Settings} />
    <Route path="/Add-Neotask" component={CreateNT} />
    {/* <Route path="/">
      <Redirect to="/Clocks"></Redirect>
    </Route> */}
  </React.Fragment>
);

export default Routes;

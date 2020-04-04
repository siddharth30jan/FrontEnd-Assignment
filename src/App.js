import React from "react";
import ContactDetail from "./components/contactDetect";
import Advisories from "./components/advisories";
import FollowUp from "./components/followUp";
import TestingEligibility from "./components/testingEligibility";
import Nav from "./components/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div class="wrapper d-flex align-items-stretch">
        <Nav />
        <Switch>
          <Route path="/adv" component={Advisories} />
          <Route path="/checkContact" component={ContactDetail} />
          <Route path="/testingEligibility" component={TestingEligibility} />
          <Route path="/followUp" component={FollowUp} />
          <FollowUp />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

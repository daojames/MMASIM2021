import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, withRouter, useHistory, Link, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';
import './AppCustomize.css';
import './AppHome.css';
import Start from './Start.js';
import Style from './Style.js';
import Customize from './Customize.js';
import Home from './Home.js';
import Gym from './Gym.js';
import Gyms from './Gyms.js';
import Twitter from './Twitter.js';
import Fight from './Fight.js';
import Fight1 from './Fight1.js';
import Fight2 from './Fight2.js';
import Fight3 from './Fight3.js';
import Fight4 from './Fight4.js';
import Fight5 from './Fight5.js';
import Fight6 from './Fight6.js';
import Fight7 from './Fight7.js';
import Fight8 from './Fight8.js';
import FighterC from './FighterC.js';
import Fighter1 from './Fighter1.js';
import Fighter2 from './Fighter2.js';
import Fighter3 from './Fighter3.js';
import Fighter4 from './Fighter4.js';
import Fighter5 from './Fighter5.js';
import Fighter6 from './Fighter6.js';
import Fighter7 from './Fighter7.js';
import Fighter8 from './Fighter8.js';
import Fighter9 from './Fighter9.js';
import Fighter10 from './Fighter10.js';
import Career from './Career.js';
import Replies1 from './Replies1.js';
import Replies2 from './Replies2.js';
import Replies3 from './Replies3.js';
import Replies4 from './Replies4.js';
import Tweet1 from './Tweet1.js';
import Tweet2 from './Tweet2.js';
import Offer1 from './Offer1.js';
import Offer2 from './Offer2.js';
import Offer3 from './Offer3.js';
import Offer4 from './Offer4.js';
import Offer5 from './Offer5.js';
import Tale1 from './Tale1.js';
import Tale2 from './Tale2.js';
import Tale3 from './Tale3.js';
import Tale4 from './Tale4.js';
import Tale5 from './Tale5.js';
import Contract1 from './Contract1.js';
import Contract2 from './Contract2.js';
import Contract3 from './Contract3.js';
import Contract4 from './Contract4.js';
import Contract5 from './Contract5.js';
import Bout0 from './Bout0.js';
import Round from './Round.js';

const Button = styled.button`
  background-color: transparent;
  color: white;
  padding: 30px 100px;
  font-size: 40px;
  border: 2px solid white;
  border-radius: 2px;
  outline: 0;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #616161;
  }
`

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/style" exact component={Style} />
          <Route path="/customize" exact component={Customize} />
          <Route path="/home" exact component={Home} />
          <Route path="/gym" exact component={Gym} />
          <Route path="/gyms" exact component={Gyms} />
          <Route path="/twitter" exact component={Twitter} />
          <Route path="/fight" exact component={Fight} />
          <Route path="/fight1" exact component={Fight1} />
          <Route path="/fight2" exact component={Fight2} />
          <Route path="/fight3" exact component={Fight3} />
          <Route path="/fight4" exact component={Fight4} />
          <Route path="/fight5" exact component={Fight5} />
          <Route path="/fight6" exact component={Fight6} />
          <Route path="/fight7" exact component={Fight7} />
          <Route path="/fight8" exact component={Fight8} />
          <Route path="/fighterC" exact component={FighterC} />
          <Route path="/fighter1" exact component={Fighter1} />
          <Route path="/fighter2" exact component={Fighter2} />
          <Route path="/fighter3" exact component={Fighter3} />
          <Route path="/fighter4" exact component={Fighter4} />
          <Route path="/fighter5" exact component={Fighter5} />
          <Route path="/fighter6" exact component={Fighter6} />
          <Route path="/fighter7" exact component={Fighter7} />
          <Route path="/fighter8" exact component={Fighter8} />
          <Route path="/fighter9" exact component={Fighter9} />
          <Route path="/fighter10" exact component={Fighter10} />
          <Route path="/career" exact component={Career} />
          <Route path="/replies1" exact component={Replies1} />
          <Route path="/replies2" exact component={Replies2} />
          <Route path="/replies3" exact component={Replies3} />
          <Route path="/replies4" exact component={Replies4} />
          <Route path="/tweet1" exact component={Tweet1} />
          <Route path="/tweet2" exact component={Tweet2} />
          <Route path="/offer1" exact component={Offer1} />
          <Route path="/offer2" exact component={Offer2} />
          <Route path="/offer3" exact component={Offer3} />
          <Route path="/offer4" exact component={Offer4} />
          <Route path="/offer5" exact component={Offer5} />
          <Route path="/tale1" exact component={Tale1} />
          <Route path="/tale2" exact component={Tale2} />
          <Route path="/tale3" exact component={Tale3} />
          <Route path="/tale4" exact component={Tale4} />
          <Route path="/tale5" exact component={Tale5} />
          <Route path="/contract1" exact component={Contract1} />
          <Route path="/contract2" exact component={Contract2} />
          <Route path="/contract3" exact component={Contract3} />
          <Route path="/contract4" exact component={Contract4} />
          <Route path="/contract5" exact component={Contract5} />
          <Route path="/bout0" exact component={Bout0} />
          <Route path="/round" exact component={Round} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
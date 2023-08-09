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
import STale from './STale.js';
import Tale1 from './Tale1.js';
import Tale2 from './Tale2.js';
import Tale3 from './Tale3.js';
import Tale4 from './Tale4.js';
import Tale5 from './Tale5.js';
import SContract from './SContract.js';
import Contract1 from './Contract1.js';
import Contract2 from './Contract2.js';
import Contract3 from './Contract3.js';
import Contract4 from './Contract4.js';
import Contract5 from './Contract5.js';
import Bout0 from './Bout0.js';
import Round from './Round.js';
import SRound from './SRound.js';
import Results from './Results.js';
import SResults from './SResults.js';
import Record from './Record.js';
import Card from './Card.js';
import Legacy from './Legacy.js';
import Schedule from './Schedule.js';
import StandingsMen from './StandingsMen.js';
import StandingsWomen from './StandingsWomen.js';
import SFighterM from './SFighterM.js';
import SFighterF from './SFighterF.js';
import SFighter1 from './SFighter1.js';
import SFighter2 from './SFighter2.js';
import SFighter3 from './SFighter3.js';
import SFighter4 from './SFighter4.js';
import SFighter5 from './SFighter5.js';
import SFighter6 from './SFighter6.js';
import SFighter7 from './SFighter7.js';
import SFighter8 from './SFighter8.js';
import Opponent from './Opponent.js';
import CardPFL from './CardPFL.js';
import ResultsPFL from './ResultsPFL.js';
import PlayoffsPFL from './PlayoffsPFL.js';
import PlayoffsPFLF from './PlayoffsPFLF.js';
import SFighterMP from './SFighterMP.js';
import SFighterFP from './SFighterFP.js';
import Manage from './Manage.js';
import StandingsUFC from './StandingsUFC.js';

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
          <Route path="/stale" exact component={STale} />
          <Route path="/tale1" exact component={Tale1} />
          <Route path="/tale2" exact component={Tale2} />
          <Route path="/tale3" exact component={Tale3} />
          <Route path="/tale4" exact component={Tale4} />
          <Route path="/tale5" exact component={Tale5} />
          <Route path="/scontract" exact component={SContract} />
          <Route path="/contract1" exact component={Contract1} />
          <Route path="/contract2" exact component={Contract2} />
          <Route path="/contract3" exact component={Contract3} />
          <Route path="/contract4" exact component={Contract4} />
          <Route path="/contract5" exact component={Contract5} />
          <Route path="/bout0" exact component={Bout0} />
          <Route path="/round" exact component={Round} />
          <Route path="/sround" exact component={SRound} />
          <Route path="/results" exact component={Results} />
          <Route path="/sresults" exact component={SResults} />
          <Route path="/record" exact component={Record} />
          <Route path="/card" exact component={Card} />
          <Route path="/legacy" exact component={Legacy} />
          <Route path="/schedule" exact component={Schedule} />
          <Route path="/standingsmen" exact component={StandingsMen} />
          <Route path="/standingswomen" exact component={StandingsWomen} />
          <Route path="/sfighterm" exact component={SFighterM} />
          <Route path="/sfighterf" exact component={SFighterF} />
          <Route path="/sfighter1" exact component={SFighter1} />
          <Route path="/sfighter2" exact component={SFighter2} />
          <Route path="/sfighter3" exact component={SFighter3} />
          <Route path="/sfighter4" exact component={SFighter4} />
          <Route path="/sfighter5" exact component={SFighter5} />
          <Route path="/sfighter6" exact component={SFighter6} />
          <Route path="/sfighter7" exact component={SFighter7} />
          <Route path="/sfighter8" exact component={SFighter8} />
          <Route path="/opponent" exact component={Opponent} />
          <Route path="/cardpfl" exact component={CardPFL} />
          <Route path="/resultspfl" exact component={ResultsPFL} />
          <Route path="/playoffspfl" exact component={PlayoffsPFL} />
          <Route path="/playoffspflf" exact component={PlayoffsPFLF} />
          <Route path="/sfightermp" exact component={SFighterMP} />
          <Route path="/sfighterfp" exact component={SFighterFP} />
          <Route path="/manage" exact component={Manage} />
          <Route path="/standingsufc" exact component={StandingsUFC} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
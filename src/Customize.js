import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';
import './AppCustomize.css';
import randomSchedule from './RandomSchedule.js';
import City from './City';

const Button4 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 14.322916666vw;
height: 5.330490405vh;
text-align: center;
margin-top: -0.53304904vh;
margin-left: 8.333333333vw;
margin-right: 8.333333333vw;
font-size: 2.083333333vw;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 2px solid white;
border-radius: 2px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const Input = styled.input`
background-color: transparent;
color: white;
padding: 0px;
margin-left: 2.604166666vw;
margin-right: 2.604166666vw;
width: 22.135416666vw;
height: 7.995735607vh;
text-align: center;
font-size: 1.5625vw;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 2px solid white;
border-radius: 2px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const Select = styled.select`
  background-color: transparent;
  color: white;
  padding: 0px;
  margin-left: 2.604166666vw;
  margin-right: 2.604166666vw;
  width: 22.135416666vw;
  height: 7.995735607vh;
  text-align: center;
  font-size: 1.5625vw;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  border: 2px solid white;
  border-radius: 2px;
  outline: 0;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #616161;
  }
`

class Customize extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        first: "JOHN",
        last: "DOE",
        weight: "FLYWEIGHT",
        cut: "3",
        height: "3",
        nation: "USA"
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    wc(str) {
      if (str == 'FLYWEIGHT'){
          return 1;
      }
      else if (str == 'BANTAMWEIGHT'){
          return 2;
      }
      else if (str == 'FEATHERWEIGHT'){
          return 3;
      }
      else if (str == 'LIGHTWEIGHT'){
          return 4;
      }
      else if (str == 'WELTERWEIGHT'){
          return 5;
      }
      else if (str == 'MIDDLEWEIGHT'){
          return 6;
      }
      else if (str == 'LIGHT HEAVYWEIGHT'){
          return 7;
      }
      else if (str == 'HEAVYWEIGHT'){
          return 8;
      }
      else if (str == 'WSTRAWWEIGHT'){
          return 9;
      }
      else if (str == 'WFLYWEIGHT'){
          return 10;
      }
      else if (str == 'WBANTAMWEIGHT'){
          return 11;
      }
  }

    handleInputChange = (event) => {
      event.preventDefault()
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = (event) => {
      const cFirst = this.capitalize(this.state.first)
      const cLast = this.capitalize(this.state.last)
      const cWeight = this.state.weight
      const cCut = this.state.cut
      const cHeight = this.state.height
      const cNation = this.capitalize(this.state.nation)
      let obj = {
        rank: 'NR',
        first: cFirst,
        last: cLast,
        weight: cWeight,
        cut: cCut,
        height: cHeight,
        nation: cNation,
        win: '0',
        loss: '0',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: (this.wc(cWeight) > 8 ? 'nrf0' : 'nr0')
      }

      sessionStorage.setItem('kow', 0);
      sessionStorage.setItem('subw', 0);
      sessionStorage.setItem('decw', 0);
      sessionStorage.setItem('kol', 0);
      sessionStorage.setItem('subl', 0);
      sessionStorage.setItem('decl', 0);
      sessionStorage.setItem('rankUFC', 'NR');
      sessionStorage.setItem('streakUFC', 0);
      sessionStorage.setItem('last', null);
      sessionStorage.setItem('next', null);

      sessionStorage.setItem('newCycle', 1);

      sessionStorage.setItem('nr0', null);
      sessionStorage.setItem('nrf0', null);
      sessionStorage.setItem('playerNR', null);
      sessionStorage.setItem('playerNRF', null);
      sessionStorage.setItem('wc', this.wc(cWeight));
      sessionStorage.setItem('wc0', this.wc(cWeight));
      sessionStorage.setItem('player', JSON.stringify(obj));
      sessionStorage.setItem('first', '1');
      sessionStorage.setItem('firstResults', 'true');
      sessionStorage.setItem('newSchedule', 1);
      sessionStorage.setItem('playerWin', 0);
      sessionStorage.setItem('playerLoss', 0);
      sessionStorage.setItem('playerSwin', 0);
      sessionStorage.setItem('playerSloss', 0);
      sessionStorage.setItem('playerPts', 0);
      sessionStorage.setItem('playerRate', 0);
      sessionStorage.setItem('playerKo', 0);
      sessionStorage.setItem('playerSub', 0);
      sessionStorage.setItem('playerKoTotal', 0);
      sessionStorage.setItem('playerSubTotal', 0);
      sessionStorage.setItem('w1res', 2);
      sessionStorage.setItem('w2res', 2);
      sessionStorage.setItem('w3res', 2);
      sessionStorage.setItem('w4res', 2);
      sessionStorage.setItem('w5res', 2);
      sessionStorage.setItem('w6res', 2);
      sessionStorage.setItem('w7res', 2);
      sessionStorage.setItem('w8res', 2);
      sessionStorage.setItem('month', 1);
      sessionStorage.setItem('year', 2021);
      sessionStorage.setItem('spd', 50);
      sessionStorage.setItem('balance', 0);
      sessionStorage.setItem('careerEarnings', 0);
      sessionStorage.setItem('followers', 5000);
      sessionStorage.setItem('rank', 'NR');
      sessionStorage.setItem('prev', 'NR');
      sessionStorage.setItem('ppv', 1);
      sessionStorage.setItem('gym', 'MCSWEENEY MMA');
      sessionStorage.setItem('org', 0);
      sessionStorage.setItem('playoffs', 0);
      sessionStorage.setItem('championship', 0);
      sessionStorage.setItem('pnchBuff', 0);
      sessionStorage.setItem('kickBuff', 0);
      sessionStorage.setItem('wrstBuff', 0);
      sessionStorage.setItem('grplBuff', 0);
      sessionStorage.setItem('clnhBuff', 0);
      sessionStorage.setItem('stmBuff', 0);
      sessionStorage.setItem('injury', 0);
      sessionStorage.setItem('playerStrength', 0);
      sessionStorage.setItem('playerSpeed', 0);
      sessionStorage.setItem('playerStamina', 0);
      sessionStorage.setItem('playerPunching', 0);
      sessionStorage.setItem('playerKicking', 0);
      sessionStorage.setItem('playerWrestling', 0);
      sessionStorage.setItem('playerGrappling', 0);
      sessionStorage.setItem('playerClinch', 0);
      sessionStorage.setItem('stance1', false);
      sessionStorage.setItem('stance2', false);
      sessionStorage.setItem('stance3', false);
      sessionStorage.setItem('guard1', false);
      sessionStorage.setItem('guard2', false);
      sessionStorage.setItem('guard3', false);
      sessionStorage.setItem('attack1', false);
      sessionStorage.setItem('attack2', false);
      sessionStorage.setItem('attack3', false);
      sessionStorage.setItem('attack4', false);
      sessionStorage.setItem('attack5', false);
      sessionStorage.setItem('attack6', false);
      sessionStorage.setItem('attack7', false);
      sessionStorage.setItem('attack8', false);
      sessionStorage.setItem('gymCamp', 4000);

      sessionStorage.setItem('prevFight', 0);
      sessionStorage.setItem('winStreak', 0);
      sessionStorage.setItem('lossStreak', 0);
      sessionStorage.setItem('winKO', 0);
      sessionStorage.setItem('winSUB', 0);
      sessionStorage.setItem('winDEC', 0);
      sessionStorage.setItem('lossKO', 0);
      sessionStorage.setItem('lossSUB', 0);
      sessionStorage.setItem('lossDEC', 0);
      sessionStorage.setItem('fin1', 0);
      sessionStorage.setItem('fin2', 0);
      sessionStorage.setItem('fin3', 0);
      sessionStorage.setItem('fin4', 0);
      sessionStorage.setItem('fin5', 0);

      sessionStorage.setItem('recRec1', 0);
      sessionStorage.setItem('recNam1', 0);
      sessionStorage.setItem('recRes1', 0);
      sessionStorage.setItem('recMet1', 0);
      sessionStorage.setItem('recRou1', 0);
      sessionStorage.setItem('recUfc1', 0);
      sessionStorage.setItem('recDat1', 0);
      sessionStorage.setItem('recRec2', 0);
      sessionStorage.setItem('recNam2', 0);
      sessionStorage.setItem('recRes2', 0);
      sessionStorage.setItem('recMet2', 0);
      sessionStorage.setItem('recRou2', 0);
      sessionStorage.setItem('recUfc2', 0);
      sessionStorage.setItem('recDat2', 0);
      sessionStorage.setItem('recRec3', 0);
      sessionStorage.setItem('recNam3', 0);
      sessionStorage.setItem('recRes3', 0);
      sessionStorage.setItem('recMet3', 0);
      sessionStorage.setItem('recRou3', 0);
      sessionStorage.setItem('recUfc3', 0);
      sessionStorage.setItem('recDat3', 0);
      sessionStorage.setItem('recRec4', 0);
      sessionStorage.setItem('recNam4', 0);
      sessionStorage.setItem('recRes4', 0);
      sessionStorage.setItem('recMet4', 0);
      sessionStorage.setItem('recRou4', 0);
      sessionStorage.setItem('recUfc4', 0);
      sessionStorage.setItem('recDat4', 0);
      sessionStorage.setItem('recRec5', 0);
      sessionStorage.setItem('recNam5', 0);
      sessionStorage.setItem('recRes5', 0);
      sessionStorage.setItem('recMet5', 0);
      sessionStorage.setItem('recRou5', 0);
      sessionStorage.setItem('recUfc5', 0);
      sessionStorage.setItem('recDat5', 0);
      sessionStorage.setItem('recRec6', 0);
      sessionStorage.setItem('recNam6', 0);
      sessionStorage.setItem('recRes6', 0);
      sessionStorage.setItem('recMet6', 0);
      sessionStorage.setItem('recRou6', 0);
      sessionStorage.setItem('recUfc6', 0);
      sessionStorage.setItem('recDat6', 0);
      sessionStorage.setItem('recRec7', 0);
      sessionStorage.setItem('recNam7', 0);
      sessionStorage.setItem('recRes7', 0);
      sessionStorage.setItem('recMet7', 0);
      sessionStorage.setItem('recRou7', 0);
      sessionStorage.setItem('recUfc7', 0);
      sessionStorage.setItem('recDat7', 0);
      sessionStorage.setItem('recRec8', 0);
      sessionStorage.setItem('recNam8', 0);
      sessionStorage.setItem('recRes8', 0);
      sessionStorage.setItem('recMet8', 0);
      sessionStorage.setItem('recRou8', 0);
      sessionStorage.setItem('recUfc8', 0);
      sessionStorage.setItem('recDat8', 0);
      sessionStorage.setItem('recRec9', 0);
      sessionStorage.setItem('recNam9', 0);
      sessionStorage.setItem('recRes9', 0);
      sessionStorage.setItem('recMet9', 0);
      sessionStorage.setItem('recRou9', 0);
      sessionStorage.setItem('recUfc9', 0);
      sessionStorage.setItem('recDat9', 0);
      sessionStorage.setItem('recRec10', 0);
      sessionStorage.setItem('recNam10', 0);
      sessionStorage.setItem('recRes10', 0);
      sessionStorage.setItem('recMet10', 0);
      sessionStorage.setItem('recRou10', 0);
      sessionStorage.setItem('recUfc10', 0);
      sessionStorage.setItem('recDat10', 0);
      sessionStorage.setItem('recRec11', 0);
      sessionStorage.setItem('recNam11', 0);
      sessionStorage.setItem('recRes11', 0);
      sessionStorage.setItem('recMet11', 0);
      sessionStorage.setItem('recRou11', 0);
      sessionStorage.setItem('recUfc11', 0);
      sessionStorage.setItem('recDat11', 0);

      sessionStorage.setItem('sigStrikes', 0);
      sessionStorage.setItem('totalStrikes', 0);
      sessionStorage.setItem('knockdowns', 0);
      sessionStorage.setItem('takedowns', 0);
      sessionStorage.setItem('takedownsTried', 0);
      sessionStorage.setItem('takedownsSuccess', 0);

      sessionStorage.setItem('card1', null);
      sessionStorage.setItem('card2', null);
      sessionStorage.setItem('card3', null);
      sessionStorage.setItem('card4', null);
      sessionStorage.setItem('card5', null);
      sessionStorage.setItem('card6', null);
      sessionStorage.setItem('card7', null);
      sessionStorage.setItem('card8', null);
      sessionStorage.setItem('card9', null);
      sessionStorage.setItem('card10', null);
      sessionStorage.setItem('card11', null);

      sessionStorage.setItem('card1a', null);
      sessionStorage.setItem('card2a', null);
      sessionStorage.setItem('card3a', null);
      sessionStorage.setItem('card4a', null);
      sessionStorage.setItem('card5a', null);
      sessionStorage.setItem('card6a', null);
      sessionStorage.setItem('card7a', null);
      sessionStorage.setItem('card8a', null);
      sessionStorage.setItem('card9a', null);
      sessionStorage.setItem('card10a', null);
      sessionStorage.setItem('card11a', null);

      sessionStorage.setItem('card1w', null);
      sessionStorage.setItem('card2w', null);
      sessionStorage.setItem('card3w', null);
      sessionStorage.setItem('card4w', null);
      sessionStorage.setItem('card5w', null);
      sessionStorage.setItem('card6w', null);
      sessionStorage.setItem('card7w', null);
      sessionStorage.setItem('card8w', null);
      sessionStorage.setItem('card9w', null);
      sessionStorage.setItem('card10w', null);
      sessionStorage.setItem('card11w', null);

      sessionStorage.setItem('oppName', null);
      sessionStorage.setItem('ranWeight1', null);
      sessionStorage.setItem('ranWeight2', null);
      sessionStorage.setItem('sFighter', null);

      sessionStorage.setItem('quarterSeedsM', null);
      sessionStorage.setItem('semiSeedsM', null);
      sessionStorage.setItem('finalSeedsM', null);
      sessionStorage.setItem('quarterSeedsF', null);
      sessionStorage.setItem('semiSeedsF', null);
      sessionStorage.setItem('finalSeedsF', null);

      sessionStorage.setItem('pflSeasons', 0);
      sessionStorage.setItem('pflPlayoffBerths', 0);
      sessionStorage.setItem('pflTitles', 0);
      sessionStorage.setItem('ufcFights', 0);
      sessionStorage.setItem('ufcTitleWins', 0);
      sessionStorage.setItem('ufcRankBest', 0);
      sessionStorage.setItem('ufcP4PBest', 'NR');
      sessionStorage.setItem('ufcBestWinStreak', 0);
      sessionStorage.setItem('ufcBestDefStreak', 0);
      sessionStorage.setItem('ufcMainEvents', 0);
      sessionStorage.setItem('ufcPotnBonuses', 0);
      sessionStorage.setItem('ufcFotnBonuses', 0);
      sessionStorage.setItem('contractPay', '$5,000 SHOW / $0 WIN');
      sessionStorage.setItem('legacyYear1', null);
      sessionStorage.setItem('legacyOrg1', null);
      sessionStorage.setItem('legacyRank1', null);
      sessionStorage.setItem('legacyRec1', null);
      sessionStorage.setItem('legacyRes1', null);
      sessionStorage.setItem('legacyPay1', null);
      sessionStorage.setItem('legacyYear2', null);
      sessionStorage.setItem('legacyOrg2', null);
      sessionStorage.setItem('legacyRank2', null);
      sessionStorage.setItem('legacyRec2', null);
      sessionStorage.setItem('legacyRes2', null);
      sessionStorage.setItem('legacyPay2', null);
      sessionStorage.setItem('legacyYear3', null);
      sessionStorage.setItem('legacyOrg3', null);
      sessionStorage.setItem('legacyRank3', null);
      sessionStorage.setItem('legacyRec3', null);
      sessionStorage.setItem('legacyRes3', null);
      sessionStorage.setItem('legacyPay3', null);
      sessionStorage.setItem('legacyYear4', null);
      sessionStorage.setItem('legacyOrg4', null);
      sessionStorage.setItem('legacyRank4', null);
      sessionStorage.setItem('legacyRec4', null);
      sessionStorage.setItem('legacyRes4', null);
      sessionStorage.setItem('legacyPay4', null);
      sessionStorage.setItem('legacyYear5', null);
      sessionStorage.setItem('legacyOrg5', null);
      sessionStorage.setItem('legacyRank5', null);
      sessionStorage.setItem('legacyRec5', null);
      sessionStorage.setItem('legacyRes5', null);
      sessionStorage.setItem('legacyPay5', null);
      sessionStorage.setItem('legacyYear6', null);
      sessionStorage.setItem('legacyOrg6', null);
      sessionStorage.setItem('legacyRank6', null);
      sessionStorage.setItem('legacyRec6', null);
      sessionStorage.setItem('legacyRes6', null);
      sessionStorage.setItem('legacyPay6', null);
      sessionStorage.setItem('legacyYear7', null);
      sessionStorage.setItem('legacyOrg7', null);
      sessionStorage.setItem('legacyRank7', null);
      sessionStorage.setItem('legacyRec7', null);
      sessionStorage.setItem('legacyRes7', null);
      sessionStorage.setItem('legacyPay7', null);
      sessionStorage.setItem('legacyYear8', null);
      sessionStorage.setItem('legacyOrg8', null);
      sessionStorage.setItem('legacyRank8', null);
      sessionStorage.setItem('legacyRec8', null);
      sessionStorage.setItem('legacyRes8', null);
      sessionStorage.setItem('legacyPay8', null);
      sessionStorage.setItem('legacyYear9', null);
      sessionStorage.setItem('legacyOrg9', null);
      sessionStorage.setItem('legacyRank9', null);
      sessionStorage.setItem('legacyRec9', null);
      sessionStorage.setItem('legacyRes9', null);
      sessionStorage.setItem('legacyPay9', null);

      sessionStorage.setItem('pay', 5000);

      sessionStorage.setItem('ufcPage', this.wc(cWeight));
      sessionStorage.setItem('ufcStandingsPage', '1');

      City();

      let nr1 = {
        rank: 'NR',
        first: 'SANCHIT',
        last: 'JAIN',
        height: '1',
        weight: '0',
        nation: 'INDIA',
        win: '0',
        loss: '0',
        strength: '30',
        speed: '100',
        stamina: '60',
        punching: '55',
        kicking: '35',
        wrestling: '30',
        grappling: '30',
        clinch: '30',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr1'
      }
      sessionStorage.setItem('nr1', JSON.stringify(nr1));

      let nr2 = {
        rank: 'NR',
        first: 'KHOA',
        last: 'DIEP',
        height: '3',
        weight: '0',
        nation: 'CANADA',
        win: '0',
        loss: '0',
        strength: '40',
        speed: '50',
        stamina: '60',
        punching: '50',
        kicking: '40',
        wrestling: '50',
        grappling: '50',
        clinch: '30',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr2'
      }
      sessionStorage.setItem('nr2', JSON.stringify(nr2));

      let nr3 = {
        rank: 'NR',
        first: 'BRYAN',
        last: 'HUYNH',
        height: '2',
        weight: '0',
        nation: 'VIETNAM',
        win: '0',
        loss: '0',
        strength: '45',
        speed: '50',
        stamina: '60',
        punching: '65',
        kicking: '45',
        wrestling: '35',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr3'
      }
      sessionStorage.setItem('nr3', JSON.stringify(nr3));

      let nr4 = {
        rank: 'NR',
        first: 'STEVE',
        last: 'JOHN',
        height: '2',
        weight: '0',
        nation: 'OMAN',
        win: '0',
        loss: '0',
        strength: '35',
        speed: '50',
        stamina: '70',
        punching: '85',
        kicking: '25',
        wrestling: '35',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr4'
      }
      sessionStorage.setItem('nr4', JSON.stringify(nr4));

      let nr5 = {
        rank: 'NR',
        first: 'BEN',
        last: 'GRAY',
        height: '2',
        weight: '0',
        nation: 'THAILAND',
        win: '0',
        loss: '0',
        strength: '95',
        speed: '25',
        stamina: '25',
        punching: '25',
        kicking: '25',
        wrestling: '95',
        grappling: '40',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr5'
      }
      sessionStorage.setItem('nr5', JSON.stringify(nr5));

      let nr6 = {
        rank: 'NR',
        first: 'ABDUS',
        last: 'QUADRI',
        height: '3',
        weight: '0',
        nation: 'RHODESIA',
        win: '0',
        loss: '0',
        strength: '50',
        speed: '50',
        stamina: '50',
        punching: '30',
        kicking: '30',
        wrestling: '80',
        grappling: '40',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr6'
      }
      sessionStorage.setItem('nr6', JSON.stringify(nr6));

      let nr7 = {
        rank: 'NR',
        first: 'HAMAAD',
        last: 'AKBAR',
        height: '1',
        weight: '0',
        nation: 'PAKISTAN',
        win: '0',
        loss: '0',
        strength: '45',
        speed: '50',
        stamina: '70',
        punching: '35',
        kicking: '35',
        wrestling: '45',
        grappling: '30',
        clinch: '60',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr7'
      }
      sessionStorage.setItem('nr7', JSON.stringify(nr7));

      let nr8 = {
        rank: 'NR',
        first: 'ABDUL',
        last: 'ELSALEH',
        height: '3',
        weight: '0',
        nation: 'PALESTINE',
        win: '0',
        loss: '0',
        strength: '60',
        speed: '50',
        stamina: '40',
        punching: '70',
        kicking: '50',
        wrestling: '30',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr8'
      }
      sessionStorage.setItem('nr8', JSON.stringify(nr8));

      let nr9 = {
        rank: 'NR',
        first: 'BRENDAN',
        last: 'FROST',
        height: '4',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '45',
        speed: '50',
        stamina: '50',
        punching: '35',
        kicking: '35',
        wrestling: '45',
        grappling: '80',
        clinch: '30',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr9'
      }
      sessionStorage.setItem('nr9', JSON.stringify(nr9));

      let nr10 = {
        rank: 'NR',
        first: 'KUSH',
        last: 'JAIN',
        height: '3',
        weight: '0',
        nation: 'INDIA',
        win: '0',
        loss: '0',
        strength: '30',
        speed: '60',
        stamina: '70',
        punching: '90',
        kicking: '30',
        wrestling: '20',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr10'
      }
      sessionStorage.setItem('nr10', JSON.stringify(nr10));

      let nr11 = {
        rank: 'NR',
        first: 'HENRY',
        last: 'NGUYEN',
        height: '1',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '75',
        speed: '50',
        stamina: '40',
        punching: '40',
        kicking: '40',
        wrestling: '35',
        grappling: '30',
        clinch: '60',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr11'
      }
      sessionStorage.setItem('nr11', JSON.stringify(nr11));

      let nr12 = {
        rank: 'NR',
        first: 'ERICK',
        last: 'DIEGO',
        height: '3',
        weight: '0',
        nation: 'MEXICO',
        win: '0',
        loss: '0',
        strength: '60',
        speed: '50',
        stamina: '40',
        punching: '30',
        kicking: '30',
        wrestling: '50',
        grappling: '80',
        clinch: '30',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr12'
      }
      sessionStorage.setItem('nr12', JSON.stringify(nr12));

      let nr13 = {
        rank: 'NR',
        first: 'JOHN',
        last: 'NGUYEN',
        height: '3',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '90',
        speed: '30',
        stamina: '30',
        punching: '90',
        kicking: '30',
        wrestling: '30',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr13'
      }
      sessionStorage.setItem('nr13', JSON.stringify(nr13));

      let nr14 = {
        rank: 'NR',
        first: 'JAMES',
        last: 'DAO',
        height: '3',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '50',
        speed: '50',
        stamina: '50',
        punching: '90',
        kicking: '30',
        wrestling: '30',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr14'
      }
      sessionStorage.setItem('nr14', JSON.stringify(nr14));

      let nr15 = {
        rank: 'NR',
        first: 'ANDREW',
        last: 'NGUYEN',
        height: '2',
        weight: '0',
        nation: 'VIETNAM',
        win: '0',
        loss: '0',
        strength: '55',
        speed: '50',
        stamina: '50',
        punching: '45',
        kicking: '45',
        wrestling: '35',
        grappling: '30',
        clinch: '60',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr15'
      }
      sessionStorage.setItem('nr15', JSON.stringify(nr15));

      let nr16 = {
        rank: 'NR',
        first: 'MICHAEL',
        last: 'DORSETT',
        height: '2',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '45',
        speed: '50',
        stamina: '60',
        punching: '25',
        kicking: '25',
        wrestling: '85',
        grappling: '40',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr16'
      }
      sessionStorage.setItem('nr16', JSON.stringify(nr16));

      let nr17 = {
        rank: 'NR',
        first: 'DANIEL',
        last: 'MORALES',
        height: '2',
        weight: '0',
        nation: 'MEXICO',
        win: '0',
        loss: '0',
        strength: '75',
        speed: '50',
        stamina: '30',
        punching: '45',
        kicking: '45',
        wrestling: '35',
        grappling: '30',
        clinch: '60',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr17'
      }
      sessionStorage.setItem('nr17', JSON.stringify(nr17));

      let nr18 = {
        rank: 'NR',
        first: 'HARRISON',
        last: 'EAGLE',
        height: '2',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '55',
        speed: '50',
        stamina: '50',
        punching: '85',
        kicking: '25',
        wrestling: '35',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr18'
      }
      sessionStorage.setItem('nr18', JSON.stringify(nr18));

      let nr19 = {
        rank: 'NR',
        first: 'JACOB',
        last: 'HERNANDEZ',
        height: '5',
        weight: '0',
        nation: 'MEXICO',
        win: '0',
        loss: '0',
        strength: '45',
        speed: '50',
        stamina: '40',
        punching: '65',
        kicking: '55',
        wrestling: '35',
        grappling: '50',
        clinch: '30',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr19'
      }
      sessionStorage.setItem('nr19', JSON.stringify(nr19));

      let nr20 = {
        rank: 'NR',
        first: 'KENT',
        last: 'EDSTROM',
        height: '3',
        weight: '0',
        nation: 'SWEDEN',
        win: '0',
        loss: '0',
        strength: '50',
        speed: '50',
        stamina: '50',
        punching: '90',
        kicking: '30',
        wrestling: '30',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr20'
      }
      sessionStorage.setItem('nr20', JSON.stringify(nr20));

      let nr21 = {
        rank: 'NR',
        first: 'AFFAN',
        last: 'AHMED',
        height: '1',
        weight: '0',
        nation: 'INDIA',
        win: '0',
        loss: '0',
        strength: '55',
        speed: '50',
        stamina: '60',
        punching: '75',
        kicking: '15',
        wrestling: '45',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr21'
      }
      sessionStorage.setItem('nr21', JSON.stringify(nr21));

      let nr22 = {
        rank: 'NR',
        first: 'TYRONE',
        last: 'MALDONADO',
        height: '5',
        weight: '0',
        nation: 'PUERTO RICO',
        win: '0',
        loss: '0',
        strength: '75',
        speed: '60',
        stamina: '20',
        punching: '65',
        kicking: '65',
        wrestling: '30',
        grappling: '10',
        clinch: '45',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr22'
      }
      sessionStorage.setItem('nr22', JSON.stringify(nr22));

      let nr23 = {
        rank: 'NR',
        first: 'ALEX',
        last: 'VAN LAERE',
        height: '4',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '55',
        speed: '50',
        stamina: '40',
        punching: '95',
        kicking: '35',
        wrestling: '25',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr23'
      }
      sessionStorage.setItem('nr23', JSON.stringify(nr23));

      let nr24 = {
        rank: 'NR',
        first: 'KUSHAGRA',
        last: 'DABRAL',
        height: '5',
        weight: '0',
        nation: 'INDIA',
        win: '0',
        loss: '0',
        strength: '35',
        speed: '50',
        stamina: '50',
        punching: '65',
        kicking: '55',
        wrestling: '35',
        grappling: '50',
        clinch: '30',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nr24'
      }
      sessionStorage.setItem('nr24', JSON.stringify(nr24));

      let nrf1 = {
        rank: 'NR',
        first: 'KAREN',
        last: 'NGUYEN',
        height: '3',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '40',
        speed: '50',
        stamina: '60',
        punching: '50',
        kicking: '40',
        wrestling: '50',
        grappling: '50',
        clinch: '30',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nrf1'
      }
      sessionStorage.setItem('nrf1', JSON.stringify(nrf1));

      let nrf2 = {
        rank: 'NR',
        first: 'GIOVANNA',
        last: 'RIVAS',
        height: '5',
        weight: '0',
        nation: 'MEXICO',
        win: '0',
        loss: '0',
        strength: '45',
        speed: '50',
        stamina: '40',
        punching: '100',
        kicking: '50',
        wrestling: '15',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nrf2'
      }
      sessionStorage.setItem('nrf2', JSON.stringify(nrf2));

      let nrf3 = {
        rank: 'NR',
        first: 'JENNIFER',
        last: 'NGUYEN',
        height: '3',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '30',
        speed: '50',
        stamina: '70',
        punching: '30',
        kicking: '30',
        wrestling: '80',
        grappling: '40',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nrf3'
      }
      sessionStorage.setItem('nrf3', JSON.stringify(nrf3));

      let nrf4 = {
        rank: 'NR',
        first: 'TIFFANY',
        last: 'NGUYEN',
        height: '5',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '35',
        speed: '50',
        stamina: '50',
        punching: '65',
        kicking: '55',
        wrestling: '35',
        grappling: '50',
        clinch: '30',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nrf4'
      }
      sessionStorage.setItem('nrf4', JSON.stringify(nrf4));

      let nrf5 = {
        rank: 'NR',
        first: 'SIERRA',
        last: 'PHAM',
        height: '2',
        weight: '0',
        nation: 'VIETNAM',
        win: '0',
        loss: '0',
        strength: '55',
        speed: '50',
        stamina: '50',
        punching: '45',
        kicking: '45',
        wrestling: '35',
        grappling: '30',
        clinch: '60',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nrf5'
      }
      sessionStorage.setItem('nrf5', JSON.stringify(nrf5));

      let nrf6 = {
        rank: 'NR',
        first: 'SIYEON',
        last: 'KIM',
        height: '4',
        weight: '0',
        nation: 'KOREA',
        win: '0',
        loss: '0',
        strength: '65',
        speed: '50',
        stamina: '30',
        punching: '55',
        kicking: '45',
        wrestling: '45',
        grappling: '50',
        clinch: '30',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nrf6'
      }
      sessionStorage.setItem('nrf6', JSON.stringify(nrf6));

      let nrf7 = {
        rank: 'NR',
        first: 'KAITLYN',
        last: 'NGUYEN',
        height: '4',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '25',
        speed: '50',
        stamina: '70',
        punching: '55',
        kicking: '55',
        wrestling: '25',
        grappling: '30',
        clinch: '60',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nrf7'
      }
      sessionStorage.setItem('nrf7', JSON.stringify(nrf7));

      let nrf8 = {
        rank: 'NR',
        first: 'CHRISTINE',
        last: 'LUU',
        height: '3',
        weight: '0',
        nation: 'VIETNAM',
        win: '0',
        loss: '0',
        strength: '70',
        speed: '50',
        stamina: '30',
        punching: '30',
        kicking: '30',
        wrestling: '80',
        grappling: '40',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nrf8'
      }
      sessionStorage.setItem('nrf8', JSON.stringify(nrf8));

      let nrf9 = {
        rank: 'NR',
        first: 'SAVANNA',
        last: 'PHAM',
        height: '1',
        weight: '0',
        nation: 'VIETNAM',
        win: '0',
        loss: '0',
        strength: '55',
        speed: '50',
        stamina: '60',
        punching: '75',
        kicking: '15',
        wrestling: '45',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nrf9'
      }
      sessionStorage.setItem('nrf9', JSON.stringify(nrf9));

      let nrf10 = {
        rank: 'NR',
        first: 'TERESA',
        last: 'VAN LAERE',
        height: '3',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '60',
        speed: '50',
        stamina: '40',
        punching: '50',
        kicking: '40',
        wrestling: '50',
        grappling: '50',
        clinch: '30',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nrf10'
      }
      sessionStorage.setItem('nrf10', JSON.stringify(nrf10));

      let nrf11 = {
        rank: 'NR',
        first: 'JOVITA',
        last: 'ROMANIZ',
        height: '2',
        weight: '0',
        nation: 'MEXICO',
        win: '0',
        loss: '0',
        strength: '75',
        speed: '50',
        stamina: '30',
        punching: '65',
        kicking: '45',
        wrestling: '35',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nrf11'
      }
      sessionStorage.setItem('nrf11', JSON.stringify(nrf11));

      let nrf12 = {
        rank: 'NR',
        first: 'AMANDA',
        last: 'YANG',
        height: '4',
        weight: '0',
        nation: 'CHINA',
        win: '0',
        loss: '0',
        strength: '25',
        speed: '50',
        stamina: '70',
        punching: '35',
        kicking: '35',
        wrestling: '45',
        grappling: '80',
        clinch: '30',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
        meth: '',
				rate: '0',
				ko: '0',
				sub: '0',
        prev: 'NR',
        code: 'nrf12'
      }
      sessionStorage.setItem('nrf12', JSON.stringify(nrf12));

      if (this.state.weight == 'WSTRAWWEIGHT' || this.state.weight == 'WFLYWEIGHT' || this.state.weight == 'WBANTAMWEIGHT') {
        let ran1 = Math.floor(Math.random() * (113 - 101) + 101);
        sessionStorage.setItem('abc1', ran1);

        let ran2 = Math.floor(Math.random() * (113 - 101) + 101);
        while(true) {
          if (ran2 != ran1) {
            break;
          }
          ran2 = Math.floor(Math.random() * (113 - 101) + 101);
        }
        sessionStorage.setItem('abc2', ran2);

        let ran3 = Math.floor(Math.random() * (113 - 101) + 101);
        while(true) {
          if (ran3 != ran1 && ran3 != ran2) {
            break;
          }
          ran3 = Math.floor(Math.random() * (113 - 101) + 101);
        }
        sessionStorage.setItem('abc3', ran3);

        let ran4 = Math.floor(Math.random() * (113 - 101) + 101);
        while(true) {
          if (ran4 != ran1 && ran4 != ran2 && ran4 != ran3) {
            break;
          }
          ran4 = Math.floor(Math.random() * (113 - 101) + 101);
        }
        sessionStorage.setItem('abc4', ran4);

        let ran5 = Math.floor(Math.random() * (113 - 101) + 101);
        while(true) {
          if (ran5 != ran1 && ran5 != ran2 && ran5 != ran3 && ran5 != ran4) {
            break;
          }
          ran5 = Math.floor(Math.random() * (113 - 101) + 101);
        }
        sessionStorage.setItem('abc5', ran5);

        if (ran1 == 101){
          sessionStorage.setItem('ABC1', JSON.stringify(nrf1));
        }
        else if (ran1 == 102){
          sessionStorage.setItem('ABC1', JSON.stringify(nrf2));
        }
        else if (ran1 == 103){
          sessionStorage.setItem('ABC1', JSON.stringify(nrf3));
        }
        else if (ran1 == 104){
          sessionStorage.setItem('ABC1', JSON.stringify(nrf4));
        }
        else if (ran1 == 105){
          sessionStorage.setItem('ABC1', JSON.stringify(nrf5));
        }
        else if (ran1 == 106){
          sessionStorage.setItem('ABC1', JSON.stringify(nrf6));
        }
        else if (ran1 == 107){
          sessionStorage.setItem('ABC1', JSON.stringify(nrf7));
        }
        else if (ran1 == 108){
          sessionStorage.setItem('ABC1', JSON.stringify(nrf8));
        }
        else if (ran1 == 109){
          sessionStorage.setItem('ABC1', JSON.stringify(nrf9));
        }
        else if (ran1 == 110){
          sessionStorage.setItem('ABC1', JSON.stringify(nrf10));
        }
        else if (ran1 == 111){
          sessionStorage.setItem('ABC1', JSON.stringify(nrf11));
        }
        else if (ran1 == 112){
          sessionStorage.setItem('ABC1', JSON.stringify(nrf12));
        }
        let gas = sessionStorage.getItem('ABC1');
        gas = JSON.parse(gas);
        console.log(gas.first)
        if (ran2 == 101){
          sessionStorage.setItem('ABC2', JSON.stringify(nrf1));
        }
        else if (ran2 == 102){
          sessionStorage.setItem('ABC2', JSON.stringify(nrf2));
        }
        else if (ran2 == 103){
          sessionStorage.setItem('ABC2', JSON.stringify(nrf3));
        }
        else if (ran2 == 104){
          sessionStorage.setItem('ABC2', JSON.stringify(nrf4));
        }
        else if (ran2 == 105){
          sessionStorage.setItem('ABC2', JSON.stringify(nrf5));
        }
        else if (ran2 == 106){
          sessionStorage.setItem('ABC2', JSON.stringify(nrf6));
        }
        else if (ran2 == 107){
          sessionStorage.setItem('ABC2', JSON.stringify(nrf7));
        }
        else if (ran2 == 108){
          sessionStorage.setItem('ABC2', JSON.stringify(nrf8));
        }
        else if (ran2 == 109){
          sessionStorage.setItem('ABC2', JSON.stringify(nrf9));
        }
        else if (ran2 == 110){
          sessionStorage.setItem('ABC2', JSON.stringify(nrf10));
        }
        else if (ran2 == 111){
          sessionStorage.setItem('ABC2', JSON.stringify(nrf11));
        }
        else if (ran2 == 112){
          sessionStorage.setItem('ABC2', JSON.stringify(nrf12));
        }
  
        if (ran3 == 101){
          sessionStorage.setItem('ABC3', JSON.stringify(nrf1));
        }
        else if (ran3 == 102){
          sessionStorage.setItem('ABC3', JSON.stringify(nrf2));
        }
        else if (ran3 == 103){
          sessionStorage.setItem('ABC3', JSON.stringify(nrf3));
        }
        else if (ran3 == 104){
          sessionStorage.setItem('ABC3', JSON.stringify(nrf4));
        }
        else if (ran3 == 105){
          sessionStorage.setItem('ABC3', JSON.stringify(nrf5));
        }
        else if (ran3 == 106){
          sessionStorage.setItem('ABC3', JSON.stringify(nrf6));
        }
        else if (ran3 == 107){
          sessionStorage.setItem('ABC3', JSON.stringify(nrf7));
        }
        else if (ran3 == 108){
          sessionStorage.setItem('ABC3', JSON.stringify(nrf8));
        }
        else if (ran3 == 109){
          sessionStorage.setItem('ABC3', JSON.stringify(nrf9));
        }
        else if (ran3 == 110){
          sessionStorage.setItem('ABC3', JSON.stringify(nrf10));
        }
        else if (ran3 == 111){
          sessionStorage.setItem('ABC3', JSON.stringify(nrf11));
        }
        else if (ran3 == 112){
          sessionStorage.setItem('ABC3', JSON.stringify(nrf12));
        }
  
        if (ran4 == 101){
          sessionStorage.setItem('ABC4', JSON.stringify(nrf1));
        }
        else if (ran4 == 102){
          sessionStorage.setItem('ABC4', JSON.stringify(nrf2));
        }
        else if (ran4 == 103){
          sessionStorage.setItem('ABC4', JSON.stringify(nrf3));
        }
        else if (ran4 == 104){
          sessionStorage.setItem('ABC4', JSON.stringify(nrf4));
        }
        else if (ran4 == 105){
          sessionStorage.setItem('ABC4', JSON.stringify(nrf5));
        }
        else if (ran4 == 106){
          sessionStorage.setItem('ABC4', JSON.stringify(nrf6));
        }
        else if (ran4 == 107){
          sessionStorage.setItem('ABC4', JSON.stringify(nrf7));
        }
        else if (ran4 == 108){
          sessionStorage.setItem('ABC4', JSON.stringify(nrf8));
        }
        else if (ran4 == 109){
          sessionStorage.setItem('ABC4', JSON.stringify(nrf9));
        }
        else if (ran4 == 110){
          sessionStorage.setItem('ABC4', JSON.stringify(nrf10));
        }
        else if (ran4 == 111){
          sessionStorage.setItem('ABC4', JSON.stringify(nrf11));
        }
        else if (ran4 == 112){
          sessionStorage.setItem('ABC4', JSON.stringify(nrf12));
        }
  
        if (ran5 == 101){
          sessionStorage.setItem('ABC5', JSON.stringify(nrf1));
        }
        else if (ran5 == 102){
          sessionStorage.setItem('ABC5', JSON.stringify(nrf2));
        }
        else if (ran5 == 103){
          sessionStorage.setItem('ABC5', JSON.stringify(nrf3));
        }
        else if (ran5 == 104){
          sessionStorage.setItem('ABC5', JSON.stringify(nrf4));
        }
        else if (ran5 == 105){
          sessionStorage.setItem('ABC5', JSON.stringify(nrf5));
        }
        else if (ran5 == 106){
          sessionStorage.setItem('ABC5', JSON.stringify(nrf6));
        }
        else if (ran5 == 107){
          sessionStorage.setItem('ABC5', JSON.stringify(nrf7));
        }
        else if (ran5 == 108){
          sessionStorage.setItem('ABC5', JSON.stringify(nrf8));
        }
        else if (ran5 == 109){
          sessionStorage.setItem('ABC5', JSON.stringify(nrf9));
        }
        else if (ran5 == 110){
          sessionStorage.setItem('ABC5', JSON.stringify(nrf10));
        }
        else if (ran5 == 111){
          sessionStorage.setItem('ABC5', JSON.stringify(nrf11));
        }
        else if (ran5 == 112){
          sessionStorage.setItem('ABC5', JSON.stringify(nrf12));
        }
      }
      else {
        let ran1 = Math.floor(Math.random() * (25 - 1) + 1);
        sessionStorage.setItem('abc1', ran1);

        let ran2 = Math.floor(Math.random() * (25 - 1) + 1);
        while(true) {
          if (ran2 != ran1) {
            break;
          }
          ran2 = Math.floor(Math.random() * (25 - 1) + 1);
        }
        sessionStorage.setItem('abc2', ran2);

        let ran3 = Math.floor(Math.random() * (25 - 1) + 1);
        while(true) {
          if (ran3 != ran1 && ran3 != ran2) {
            break;
          }
          ran3 = Math.floor(Math.random() * (25 - 1) + 1);
        }
        sessionStorage.setItem('abc3', ran3);

        let ran4 = Math.floor(Math.random() * (25 - 1) + 1);
        while(true) {
          if (ran4 != ran1 && ran4 != ran2 && ran4 != ran3) {
            break;
          }
          ran4 = Math.floor(Math.random() * (25 - 1) + 1);
        }
        sessionStorage.setItem('abc4', ran4);

        let ran5 = Math.floor(Math.random() * (25 - 1) + 1);
        while(true) {
          if (ran5 != ran1 && ran5 != ran2 && ran5 != ran3 && ran5 != ran4) {
            break;
          }
          ran5 = Math.floor(Math.random() * (25 - 1) + 1);
        }
        sessionStorage.setItem('abc5', ran5);
      
        if (ran1 == 1){
          sessionStorage.setItem('ABC1', JSON.stringify(nr1));
        }
        else if (ran1 == 2){
          sessionStorage.setItem('ABC1', JSON.stringify(nr2));
        }
        else if (ran1 == 3){
          sessionStorage.setItem('ABC1', JSON.stringify(nr3));
        }
        else if (ran1 == 4){
          sessionStorage.setItem('ABC1', JSON.stringify(nr4));
        }
        else if (ran1 == 5){
          sessionStorage.setItem('ABC1', JSON.stringify(nr5));
        }
        else if (ran1 == 6){
          sessionStorage.setItem('ABC1', JSON.stringify(nr6));
        }
        else if (ran1 == 7){
          sessionStorage.setItem('ABC1', JSON.stringify(nr7));
        }
        else if (ran1 == 8){
          sessionStorage.setItem('ABC1', JSON.stringify(nr8));
        }
        else if (ran1 == 9){
          sessionStorage.setItem('ABC1', JSON.stringify(nr9));
        }
        else if (ran1 == 10){
          sessionStorage.setItem('ABC1', JSON.stringify(nr10));
        }
        else if (ran1 == 11){
          sessionStorage.setItem('ABC1', JSON.stringify(nr11));
        }
        else if (ran1 == 12){
          sessionStorage.setItem('ABC1', JSON.stringify(nr12));
        }
        else if (ran1 == 13){
          sessionStorage.setItem('ABC1', JSON.stringify(nr13));
        }
        else if (ran1 == 14){
          sessionStorage.setItem('ABC1', JSON.stringify(nr14));
        }
        else if (ran1 == 15){
          sessionStorage.setItem('ABC1', JSON.stringify(nr15));
        }
        else if (ran1 == 16){
          sessionStorage.setItem('ABC1', JSON.stringify(nr16));
        }
        else if (ran1 == 17){
          sessionStorage.setItem('ABC1', JSON.stringify(nr17));
        }
        else if (ran1 == 18){
          sessionStorage.setItem('ABC1', JSON.stringify(nr18));
        }
        else if (ran1 == 19){
          sessionStorage.setItem('ABC1', JSON.stringify(nr19));
        }
        else if (ran1 == 20){
          sessionStorage.setItem('ABC1', JSON.stringify(nr20));
        }
        else if (ran1 == 21){
          sessionStorage.setItem('ABC1', JSON.stringify(nr21));
        }
        else if (ran1 == 22){
          sessionStorage.setItem('ABC1', JSON.stringify(nr22));
        }
        else if (ran1 == 23){
          sessionStorage.setItem('ABC1', JSON.stringify(nr23));
        }
        else if (ran1 == 24){
          sessionStorage.setItem('ABC1', JSON.stringify(nr24));
        }
        let gas = sessionStorage.getItem('ABC1');
        gas = JSON.parse(gas);
        console.log(gas.first)
        if (ran2 == 1){
          sessionStorage.setItem('ABC2', JSON.stringify(nr1));
        }
        else if (ran2 == 2){
          sessionStorage.setItem('ABC2', JSON.stringify(nr2));
        }
        else if (ran2 == 3){
          sessionStorage.setItem('ABC2', JSON.stringify(nr3));
        }
        else if (ran2 == 4){
          sessionStorage.setItem('ABC2', JSON.stringify(nr4));
        }
        else if (ran2 == 5){
          sessionStorage.setItem('ABC2', JSON.stringify(nr5));
        }
        else if (ran2 == 6){
          sessionStorage.setItem('ABC2', JSON.stringify(nr6));
        }
        else if (ran2 == 7){
          sessionStorage.setItem('ABC2', JSON.stringify(nr7));
        }
        else if (ran2 == 8){
          sessionStorage.setItem('ABC2', JSON.stringify(nr8));
        }
        else if (ran2 == 9){
          sessionStorage.setItem('ABC2', JSON.stringify(nr9));
        }
        else if (ran2 == 10){
          sessionStorage.setItem('ABC2', JSON.stringify(nr10));
        }
        else if (ran2 == 11){
          sessionStorage.setItem('ABC2', JSON.stringify(nr11));
        }
        else if (ran2 == 12){
          sessionStorage.setItem('ABC2', JSON.stringify(nr12));
        }
        else if (ran2 == 13){
          sessionStorage.setItem('ABC2', JSON.stringify(nr13));
        }
        else if (ran2 == 14){
          sessionStorage.setItem('ABC2', JSON.stringify(nr14));
        }
        else if (ran2 == 15){
          sessionStorage.setItem('ABC2', JSON.stringify(nr15));
        }
        else if (ran2 == 16){
          sessionStorage.setItem('ABC2', JSON.stringify(nr16));
        }
        else if (ran2 == 17){
          sessionStorage.setItem('ABC2', JSON.stringify(nr17));
        }
        else if (ran2 == 18){
          sessionStorage.setItem('ABC2', JSON.stringify(nr18));
        }
        else if (ran2 == 19){
          sessionStorage.setItem('ABC2', JSON.stringify(nr19));
        }
        else if (ran2 == 20){
          sessionStorage.setItem('ABC2', JSON.stringify(nr20));
        }
        else if (ran2 == 21){
          sessionStorage.setItem('ABC2', JSON.stringify(nr21));
        }
        else if (ran1 == 22){
          sessionStorage.setItem('ABC2', JSON.stringify(nr22));
        }
        else if (ran1 == 23){
          sessionStorage.setItem('ABC2', JSON.stringify(nr23));
        }
        else if (ran1 == 24){
          sessionStorage.setItem('ABC2', JSON.stringify(nr24));
        }
  
        if (ran3 == 1){
          sessionStorage.setItem('ABC3', JSON.stringify(nr1));
        }
        else if (ran3 == 2){
          sessionStorage.setItem('ABC3', JSON.stringify(nr2));
        }
        else if (ran3 == 3){
          sessionStorage.setItem('ABC3', JSON.stringify(nr3));
        }
        else if (ran3 == 4){
          sessionStorage.setItem('ABC3', JSON.stringify(nr4));
        }
        else if (ran3 == 5){
          sessionStorage.setItem('ABC3', JSON.stringify(nr5));
        }
        else if (ran3 == 6){
          sessionStorage.setItem('ABC3', JSON.stringify(nr6));
        }
        else if (ran3 == 7){
          sessionStorage.setItem('ABC3', JSON.stringify(nr7));
        }
        else if (ran3 == 8){
          sessionStorage.setItem('ABC3', JSON.stringify(nr8));
        }
        else if (ran3 == 9){
          sessionStorage.setItem('ABC3', JSON.stringify(nr9));
        }
        else if (ran3 == 10){
          sessionStorage.setItem('ABC3', JSON.stringify(nr10));
        }
        else if (ran3 == 11){
          sessionStorage.setItem('ABC3', JSON.stringify(nr11));
        }
        else if (ran3 == 12){
          sessionStorage.setItem('ABC3', JSON.stringify(nr12));
        }
        else if (ran3 == 13){
          sessionStorage.setItem('ABC3', JSON.stringify(nr13));
        }
        else if (ran3 == 14){
          sessionStorage.setItem('ABC3', JSON.stringify(nr14));
        }
        else if (ran3 == 15){
          sessionStorage.setItem('ABC3', JSON.stringify(nr15));
        }
        else if (ran3 == 16){
          sessionStorage.setItem('ABC3', JSON.stringify(nr16));
        }
        else if (ran3 == 17){
          sessionStorage.setItem('ABC3', JSON.stringify(nr17));
        }
        else if (ran3 == 18){
          sessionStorage.setItem('ABC3', JSON.stringify(nr18));
        }
        else if (ran3 == 19){
          sessionStorage.setItem('ABC3', JSON.stringify(nr19));
        }
        else if (ran3 == 20){
          sessionStorage.setItem('ABC3', JSON.stringify(nr20));
        }
        else if (ran3 == 21){
          sessionStorage.setItem('ABC3', JSON.stringify(nr21));
        }
        else if (ran1 == 22){
          sessionStorage.setItem('ABC3', JSON.stringify(nr22));
        }
        else if (ran1 == 23){
          sessionStorage.setItem('ABC3', JSON.stringify(nr23));
        }
        else if (ran1 == 24){
          sessionStorage.setItem('ABC3', JSON.stringify(nr24));
        }
  
        if (ran4 == 1){
          sessionStorage.setItem('ABC4', JSON.stringify(nr1));
        }
        else if (ran4 == 2){
          sessionStorage.setItem('ABC4', JSON.stringify(nr2));
        }
        else if (ran4 == 3){
          sessionStorage.setItem('ABC4', JSON.stringify(nr3));
        }
        else if (ran4 == 4){
          sessionStorage.setItem('ABC4', JSON.stringify(nr4));
        }
        else if (ran4 == 5){
          sessionStorage.setItem('ABC4', JSON.stringify(nr5));
        }
        else if (ran4 == 6){
          sessionStorage.setItem('ABC4', JSON.stringify(nr6));
        }
        else if (ran4 == 7){
          sessionStorage.setItem('ABC4', JSON.stringify(nr7));
        }
        else if (ran4 == 8){
          sessionStorage.setItem('ABC4', JSON.stringify(nr8));
        }
        else if (ran4 == 9){
          sessionStorage.setItem('ABC4', JSON.stringify(nr9));
        }
        else if (ran4 == 10){
          sessionStorage.setItem('ABC4', JSON.stringify(nr10));
        }
        else if (ran4 == 11){
          sessionStorage.setItem('ABC4', JSON.stringify(nr11));
        }
        else if (ran4 == 12){
          sessionStorage.setItem('ABC4', JSON.stringify(nr12));
        }
        else if (ran4 == 13){
          sessionStorage.setItem('ABC4', JSON.stringify(nr13));
        }
        else if (ran4 == 14){
          sessionStorage.setItem('ABC4', JSON.stringify(nr14));
        }
        else if (ran4 == 15){
          sessionStorage.setItem('ABC4', JSON.stringify(nr15));
        }
        else if (ran4 == 16){
          sessionStorage.setItem('ABC4', JSON.stringify(nr16));
        }
        else if (ran4 == 17){
          sessionStorage.setItem('ABC4', JSON.stringify(nr17));
        }
        else if (ran4 == 18){
          sessionStorage.setItem('ABC4', JSON.stringify(nr18));
        }
        else if (ran4 == 19){
          sessionStorage.setItem('ABC4', JSON.stringify(nr19));
        }
        else if (ran4 == 20){
          sessionStorage.setItem('ABC4', JSON.stringify(nr20));
        }
        else if (ran4 == 21){
          sessionStorage.setItem('ABC4', JSON.stringify(nr21));
        }
        else if (ran1 == 22){
          sessionStorage.setItem('ABC4', JSON.stringify(nr22));
        }
        else if (ran1 == 23){
          sessionStorage.setItem('ABC4', JSON.stringify(nr23));
        }
        else if (ran1 == 24){
          sessionStorage.setItem('ABC4', JSON.stringify(nr24));
        }
  
        if (ran5 == 1){
          sessionStorage.setItem('ABC5', JSON.stringify(nr1));
        }
        else if (ran5 == 2){
          sessionStorage.setItem('ABC5', JSON.stringify(nr2));
        }
        else if (ran5 == 3){
          sessionStorage.setItem('ABC5', JSON.stringify(nr3));
        }
        else if (ran5 == 4){
          sessionStorage.setItem('ABC5', JSON.stringify(nr4));
        }
        else if (ran5 == 5){
          sessionStorage.setItem('ABC5', JSON.stringify(nr5));
        }
        else if (ran5 == 6){
          sessionStorage.setItem('ABC5', JSON.stringify(nr6));
        }
        else if (ran5 == 7){
          sessionStorage.setItem('ABC5', JSON.stringify(nr7));
        }
        else if (ran5 == 8){
          sessionStorage.setItem('ABC5', JSON.stringify(nr8));
        }
        else if (ran5 == 9){
          sessionStorage.setItem('ABC5', JSON.stringify(nr9));
        }
        else if (ran5 == 10){
          sessionStorage.setItem('ABC5', JSON.stringify(nr10));
        }
        else if (ran5 == 11){
          sessionStorage.setItem('ABC5', JSON.stringify(nr11));
        }
        else if (ran5 == 12){
          sessionStorage.setItem('ABC5', JSON.stringify(nr12));
        }
        else if (ran5 == 13){
          sessionStorage.setItem('ABC5', JSON.stringify(nr13));
        }
        else if (ran5 == 14){
          sessionStorage.setItem('ABC5', JSON.stringify(nr14));
        }
        else if (ran5 == 15){
          sessionStorage.setItem('ABC5', JSON.stringify(nr15));
        }
        else if (ran5 == 16){
          sessionStorage.setItem('ABC5', JSON.stringify(nr16));
        }
        else if (ran5 == 17){
          sessionStorage.setItem('ABC5', JSON.stringify(nr17));
        }
        else if (ran5 == 18){
          sessionStorage.setItem('ABC5', JSON.stringify(nr18));
        }
        else if (ran5 == 19){
          sessionStorage.setItem('ABC5', JSON.stringify(nr19));
        }
        else if (ran5 == 20){
          sessionStorage.setItem('ABC5', JSON.stringify(nr20));
        }
        else if (ran5 == 21){
          sessionStorage.setItem('ABC5', JSON.stringify(nr21));
        }
        else if (ran1 == 22){
          sessionStorage.setItem('ABC5', JSON.stringify(nr22));
        }
        else if (ran1 == 23){
          sessionStorage.setItem('ABC5', JSON.stringify(nr23));
        }
        else if (ran1 == 24){
          sessionStorage.setItem('ABC5', JSON.stringify(nr24));
        }
      }   

      let twt1 = {
        month: 'JAN',
        year: 2021,
        msg: 'HAPPY TO SAY THAT I HAVE SIGNED WITH PFL!',
        replies: 1,
        rfirst: 'PFL',
        rlast: 'BOT',
        rmonth: 'JAN',
        ryear: '2021',
        rmsg: 'WIN THE 2021 PFL CHAMPIONSHIP FOR A LARGE REWARD!'
      }
      sessionStorage.setItem('twt1', JSON.stringify(twt1));

      let twt2 = {
        month: 'DEC',
        year: 2020,
        msg: 'BIG THINGS COMING SOON...',
        replies: 0,
        rfirst: '',
        rlast: '',
        rmonth: '',
        ryear: '',
        rmsg: 'NO REPLIES'
      }
      sessionStorage.setItem('twt2', JSON.stringify(twt2));

      let twt3 = {
        month: 'NOV',
        year: 2020,
        msg: 'JUST FINISHED SOME BAGWORK AT THE GYM',
        replies: 0,
        rfirst: '',
        rlast: '',
        rmonth: '',
        ryear: '',
        rmsg: 'NO REPLIES'
      }
      sessionStorage.setItem('twt3', JSON.stringify(twt3));

      let twt4 = {
        month: 'OCT',
        year: 2020,
        msg: 'SHOULDN\'T HAVE EATEN TACOS BEFORE TRAINING :(',
        replies: 0,
        rfirst: '',
        rlast: '',
        rmonth: '',
        ryear: '',
        rmsg: 'NO REPLIES'
      }
      sessionStorage.setItem('twt4', JSON.stringify(twt4));

      let fly1 = {
        code: 'fly1',
        rank: 'C',
        first: 'ALEXANDRE',
        last: 'PANTOJA',
        weight: '125',
        height: '5\'5\"',
        nation: 'BRAZIL',
        win: '26',
        loss: '5',
        strk: '4',
				ko: '8',
				sub: '10',
        dec: '8',
        kol: '0',
        subl: '0',
        decl: '5',
        strength: '70',
        speed: '65',
        stamina: '65',
        punching: '65',
        kicking: '45',
        wrestling: '75',
        grappling: '85',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let fly2 = {
        code: 'fly2',
        rank: '1',
        first: 'BRANDON',
        last: 'MORENO',
        weight: '125',
        height: '5\'7\"',
        nation: 'MEXICO',
        win: '21',
        loss: '7',
        strk: '-1',
				ko: '5',
				sub: '11',
        dec: '5',
        kol: '0',
        subl: '0',
        decl: '7',
        strength: '55',
        speed: '70',
        stamina: '80',
        punching: '90',
        kicking: '55',
        wrestling: '65',
        grappling: '70',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let fly3 = {
        code: 'fly3',
        rank: '2',
        first: 'DEIVESON',
        last: 'FIGUEIREDO',
        weight: '125',
        height: '5\'5\"',
        nation: 'BRAZIL',
        win: '21',
        loss: '3',
        strk: '-1',
				ko: '9',
				sub: '8',
        dec: '4',
        kol: '1',
        subl: '1',
        decl: '1',
        strength: '85',
        speed: '70',
        stamina: '45',
        punching: '75',
        kicking: '55',
        wrestling: '75',
        grappling: '85',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly4 = {
        code: 'fly4',
        rank: '3',
        first: 'AMIR',
        last: 'ALBAZI',
        weight: '115',
        height: '5\'5\"',
        nation: 'IRAQ',
        win: '17',
        loss: '1',
        strk: '6',
				ko: '5',
				sub: '9',
        dec: '3',
        kol: '0',
        subl: '0',
        decl: '1',
        strength: '75',
        speed: '60',
        stamina: '60',
        punching: '65',
        kicking: '50',
        wrestling: '80',
        grappling: '70',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly5 = {
        code: 'fly5',
        rank: '4',
        first: 'BRANDON',
        last: 'ROYVAL',
        weight: '125',
        height: '5\'9\"',
        nation: 'USA',
        win: '15',
        loss: '6',
        strk: '3',
				ko: '4',
				sub: '9',
        dec: '2',
        kol: '1',
        subl: '1',
        decl: '4',
        strength: '65',
        speed: '80',
        stamina: '60',
        punching: '75',
        kicking: '55',
        wrestling: '60',
        grappling: '80',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly6 = {
        code: 'fly6',
        rank: '5',
        first: 'KAI',
        last: 'KARA-FRANCE',
        weight: '125',
        height: '5\'4\"',
        nation: 'NEW ZEALAND',
        win: '24',
        loss: '11',
        strk: '-1',
				ko: '11',
				sub: '3',
        dec: '10',
        kol: '3',
        subl: '3',
        decl: '5',
        strength: '90',
        speed: '100',
        stamina: '80',
        punching: '85',
        kicking: '65',
        wrestling: '65',
        grappling: '75',
        clinch: '65',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly7 = {
        code: 'fly7',
        rank: '6',
        first: 'MATHEUS',
        last: 'NICOLAU',
        weight: '125',
        height: '5\'6\"',
        nation: 'BRAZIL',
        win: '19',
        loss: '3',
        strk: '-1',
				ko: '6',
				sub: '5',
        dec: '8',
        kol: '3',
        subl: '0',
        decl: '0',
        strength: '55',
        speed: '55',
        stamina: '70',
        punching: '55',
        kicking: '45',
        wrestling: '60',
        grappling: '75',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly8 = {
        code: 'fly8',
        rank: '7',
        first: 'ALEX',
        last: 'PEREZ',
        weight: '125',
        height: '5\'6\"',
        nation: 'USA',
        win: '24',
        loss: '7',
        strk: '-2',
				ko: '5',
				sub: '7',
        dec: '12',
        kol: '1',
        subl: '5',
        decl: '1',
        strength: '60',
        speed: '55',
        stamina: '60',
        punching: '55',
        kicking: '55',
        wrestling: '60',
        grappling: '65',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly9 = {
        code: 'fly9',
        rank: '8',
        first: 'MATT',
        last: 'SCHNELL',
        weight: '125',
        height: '5\'8\"',
        nation: 'USA',
        win: '16',
        loss: '7',
        strk: '-1',
				ko: '2',
				sub: '9',
        dec: '4',
        kol: '4',
        subl: '2',
        decl: '1',
        strength: '55',
        speed: '55',
        stamina: '55',
        punching: '55',
        kicking: '45',
        wrestling: '60',
        grappling: '80',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly10 = {
        code: 'fly10',
        rank: '9',
        first: 'MANEL',
        last: 'KAPE',
        weight: '125',
        height: '5\'6\"',
        nation: 'ANGOLA',
        win: '18',
        loss: '6',
        strk: '3',
				ko: '11',
				sub: '5',
        dec: '2',
        kol: '0',
        subl: '2',
        decl: '4',
        strength: '90',
        speed: '80',
        stamina: '45',
        punching: '80',
        kicking: '55',
        wrestling: '55',
        grappling: '45',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly11 = {
        code: 'fly11',
        rank: '10',
        first: 'TIM',
        last: 'ELLIOTT',
        weight: '125',
        height: '5\'7\"',
        nation: 'USA',
        win: '19',
        loss: '12',
        strk: '2',
				ko: '3',
				sub: '6',
        dec: '10',
        kol: '1',
        subl: '5',
        decl: '6',
        strength: '50',
        speed: '50',
        stamina: '70',
        punching: '65',
        kicking: '50',
        wrestling: '75',
        grappling: '65',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly12 = {
        code: 'fly12',
        rank: '11',
        first: 'MUHAMMAD',
        last: 'MOKAEV',
        weight: '125',
        height: '5\'9\"',
        nation: 'ENGLAND',
        win: '10',
        loss: '0',
        strk: '10',
				ko: '2',
				sub: '5',
        dec: '3',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '60',
        speed: '65',
        stamina: '60',
        punching: '55',
        kicking: '45',
        wrestling: '70',
        grappling: '90',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly13 = {
        code: 'fly13',
        rank: '12',
        first: 'SU',
        last: 'MUDAERJI',
        weight: '125',
        height: '5\'10\"',
        nation: 'CHINA',
        win: '16',
        loss: '5',
        strk: '-1',
				ko: '13',
				sub: '1',
        dec: '2',
        kol: '0',
        subl: '5',
        decl: '0',
        strength: '70',
        speed: '65',
        stamina: '55',
        punching: '75',
        kicking: '50',
        wrestling: '40',
        grappling: '35',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly14 = {
        code: 'fly14',
        rank: '13',
        first: 'TAGIR',
        last: 'ULANBEKOV',
        weight: '125',
        height: '5\'6\"',
        nation: 'RUSSIA',
        win: '14',
        loss: '2',
        strk: '1',
				ko: '1',
				sub: '7',
        dec: '6',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '60',
        speed: '50',
        stamina: '55',
        punching: '45',
        kicking: '40',
        wrestling: '80',
        grappling: '80',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly15 = {
        code: 'fly15',
        rank: '14',
        first: 'STEVE',
        last: 'ERCEG',
        weight: '125',
        height: '5\'8\"',
        nation: 'AUSTRALIA',
        win: '10',
        loss: '1',
        strk: '9',
				ko: '1',
				sub: '6',
        dec: '3',
        kol: '0',
        subl: '0',
        decl: '1',
        strength: '55',
        speed: '60',
        stamina: '65',
        punching: '55',
        kicking: '50',
        wrestling: '65',
        grappling: '75',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly16  = {
        code: 'fly16',
        rank: '15',
        first: 'DAVID',
        last: 'DVORAK',
        weight: '125',
        height: '5\'5\"',
        nation: 'CZECH REPUBLIC',
        win: '20',
        loss: '6',
        strk: '-3',
				ko: '8',
				sub: '8',
        dec: '4',
        kol: '1',
        subl: '0',
        decl: '5',
        strength: '60',
        speed: '55',
        stamina: '50',
        punching: '60',
        kicking: '50',
        wrestling: '60',
        grappling: '60',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly17 = {
        code: 'fly17',
        rank: 'NR',
        first: 'JEFF',
        last: 'MOLINA',
        weight: '125',
        height: '5\'6\"',
        nation: 'USA',
        win: '11',
        loss: '2',
        strk: '10',
				ko: '3',
				sub: '5',
        dec: '3',
        kol: '0',
        subl: '1',
        decl: '1',
        strength: '60',
        speed: '60',
        stamina: '60',
        punching: '65',
        kicking: '50',
        wrestling: '55',
        grappling: '65',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly18 = {
        code: 'fly18',
        rank: 'NR',
        first: 'ALLAN',
        last: 'NASCIMENTO',
        weight: '125',
        height: '5\'8\"',
        nation: 'BRAZIL',
        win: '20',
        loss: '6',
        strk: '2',
				ko: '1',
				sub: '15',
        dec: '4',
        kol: '0',
        subl: '0',
        decl: '6',
        strength: '50',
        speed: '50',
        stamina: '50',
        punching: '40',
        kicking: '35',
        wrestling: '55',
        grappling: '80',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly19 = {
        code: 'fly19',
        rank: 'NR',
        first: 'TYSON',
        last: 'NAM',
        weight: '125',
        height: '5\'7\"',
        nation: 'USA',
        win: '21',
        loss: '14',
        strk: '-2',
				ko: '13',
				sub: '1',
        dec: '7',
        kol: '3',
        subl: '1',
        decl: '10',
        strength: '60',
        speed: '60',
        stamina: '60',
        punching: '70',
        kicking: '55',
        wrestling: '55',
        grappling: '55',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly20 = {
        code: 'fly20',
        rank: 'NR',
        first: 'AZAT',
        last: 'MAKSUM',
        weight: '125',
        height: '5\'7\"',
        nation: 'KAZAKHSTAN',
        win: '17',
        loss: '0',
        strk: '17',
				ko: '5',
				sub: '6',
        dec: '5',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '60',
        speed: '60',
        stamina: '60',
        punching: '65',
        kicking: '50',
        wrestling: '65',
        grappling: '65',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly21 = {
        code: 'fly21',
        rank: 'NR',
        first: 'MALCOLM',
        last: 'GORDON',
        weight: '125',
        height: '5\'7\"',
        nation: 'CANADA',
        win: '14',
        loss: '7',
        strk: '-2',
				ko: '5',
				sub: '6',
        dec: '3',
        kol: '5',
        subl: '2',
        decl: '0',
        strength: '60',
        speed: '60',
        stamina: '60',
        punching: '60',
        kicking: '45',
        wrestling: '65',
        grappling: '70',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly22 = {
        code: 'fly22',
        rank: 'NR',
        first: 'JAKE',
        last: 'HADLEY',
        weight: '125',
        height: '5\'7\"',
        nation: 'ENGLAND',
        win: '10',
        loss: '2',
        strk: '-1',
				ko: '3',
				sub: '5',
        dec: '2',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '65',
        speed: '60',
        stamina: '55',
        punching: '65',
        kicking: '45',
        wrestling: '65',
        grappling: '75',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly23 = {
        code: 'fly23',
        rank: 'NR',
        first: 'JAFEL',
        last: 'FILHO',
        weight: '125',
        height: '5\'7\"',
        nation: 'BRAZIL',
        win: '15',
        loss: '3',
        strk: '1',
				ko: '5',
				sub: '9',
        dec: '1',
        kol: '0',
        subl: '2',
        decl: '1',
        strength: '70',
        speed: '60',
        stamina: '55',
        punching: '60',
        kicking: '45',
        wrestling: '60',
        grappling: '80',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fly24 = {
        code: 'fly24',
        rank: 'NR',
        first: 'JOSHUA',
        last: 'VAN',
        weight: '125',
        height: '5\'5\"',
        nation: 'MYANMAR',
        win: '8',
        loss: '1',
        strk: '6',
				ko: '5',
				sub: '2',
        dec: '1',
        kol: '0',
        subl: '1',
        decl: '0',
        strength: '70',
        speed: '65',
        stamina: '55',
        punching: '70',
        kicking: '60',
        wrestling: '55',
        grappling: '55',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban1 = {
        code: 'ban1',
        rank: 'C',
        first: 'ALJAMAIN',
        last: 'STERLING',
        weight: '135',
        height: '5\'7\"',
        nation: 'JAMAICA',
        win: '23',
        loss: '3',
        strk: '9',
				ko: '3',
				sub: '8',
        dec: '11',
        kol: '1',
        subl: '0',
        decl: '2',
        strength: '80',
        speed: '70',
        stamina: '75',
        punching: '65',
        kicking: '60',
        wrestling: '80',
        grappling: '85',
        clinch: '70',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let ban2 = {
        code: 'ban2',
        rank: '1',
        first: 'MERAB',
        last: 'DVALISHVILI',
        weight: '135',
        height: '5\'6\"',
        nation: 'GEORGIA',
        win: '16',
        loss: '4',
        strk: '9',
				ko: '3',
				sub: '1',
        dec: '12',
        kol: '0',
        subl: '1',
        decl: '3',
        strength: '80',
        speed: '80',
        stamina: '100',
        punching: '65',
        kicking: '50',
        wrestling: '80',
        grappling: '55',
        clinch: '75',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let ban3 = {
        code: 'ban3',
        rank: '2',
        first: 'SEAN',
        last: 'O\'MALLEY',
        weight: '135',
        height: '5\'11\"',
        nation: 'USA',
        win: '16',
        loss: '1',
        strk: '4',
				ko: '11',
				sub: '1',
        dec: '4',
        kol: '1',
        subl: '0',
        decl: '0',
        strength: '80',
        speed: '90',
        stamina: '75',
        punching: '100',
        kicking: '85',
        wrestling: '75',
        grappling: '60',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban4 = {
        code: 'ban4',
        rank: '3',
        first: 'HENRY',
        last: 'CEJUDO',
        weight: '125',
        height: '5\'4\"',
        nation: 'USA',
        win: '16',
        loss: '3',
        strk: '-1',
				ko: '8',
				sub: '0',
        dec: '8',
        kol: '1',
        subl: '0',
        decl: '2',
        strength: '85',
        speed: '70',
        stamina: '75',
        punching: '75',
        kicking: '60',
        wrestling: '90',
        grappling: '60',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban5 = {
        code: 'ban5',
        rank: '4',
        first: 'CORY',
        last: 'SANDHAGEN',
        weight: '135',
        height: '5\'11\"',
        nation: 'USA',
        win: '17',
        loss: '4',
        strk: '3',
				ko: '7',
				sub: '3',
        dec: '7',
        kol: '0',
        subl: '1',
        decl: '3',
        strength: '75',
        speed: '90',
        stamina: '80',
        punching: '90',
        kicking: '75',
        wrestling: '70',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban6 = {
        code: 'ban6',
        rank: '5',
        first: 'PETR',
        last: 'YAN',
        weight: '135',
        height: '5\'8\"',
        nation: 'RUSSIA',
        win: '16',
        loss: '5',
        strk: '-3',
				ko: '7',
				sub: '1',
        dec: '8',
        kol: '0',
        subl: '0',
        decl: '4',
        strength: '70',
        speed: '90',
        stamina: '85',
        punching: '95',
        kicking: '80',
        wrestling: '70',
        grappling: '50',
        clinch: '65',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban7 = {
        code: 'ban7',
        rank: '6',
        first: 'MARLON',
        last: 'VERA',
        weight: '135',
        height: '5\'8\"',
        nation: 'ECUADOR',
        win: '20',
        loss: '8',
        strk: '-1',
				ko: '8',
				sub: '8',
        dec: '4',
        kol: '0',
        subl: '0',
        decl: '8',
        strength: '90',
        speed: '60',
        stamina: '80',
        punching: '75',
        kicking: '60',
        wrestling: '55',
        grappling: '65',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban8 = {
        code: 'ban8',
        rank: '7',
        first: 'ROB',
        last: 'FONT',
        weight: '135',
        height: '5\'8\"',
        nation: 'CUBA',
        win: '20',
        loss: '7',
        strk: '-1',
				ko: '9',
				sub: '4',
        dec: '7',
        kol: '0',
        subl: '1',
        decl: '6',
        strength: '65',
        speed: '75',
        stamina: '85',
        punching: '80',
        kicking: '55',
        wrestling: '55',
        grappling: '55',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban9 = {
        code: 'ban9',
        rank: '8',
        first: 'SONG',
        last: 'YADONG',
        weight: '135',
        height: '5\'8\"',
        nation: 'CHINA',
        win: '20',
        loss: '7',
        strk: '1',
				ko: '9',
				sub: '3',
        dec: '8',
        kol: '2',
        subl: '0',
        decl: '4',
        strength: '85',
        speed: '85',
        stamina: '85',
        punching: '80',
        kicking: '65',
        wrestling: '65',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban10 = {
        code: 'ban10',
        rank: '9',
        first: 'DOMINICK',
        last: 'CRUZ',
        weight: '135',
        height: '5\'8\"',
        nation: 'USA',
        win: '24',
        loss: '4',
        strk: '-1',
				ko: '7',
				sub: '1',
        dec: '16',
        kol: '2',
        subl: '1',
        decl: '1',
        strength: '55',
        speed: '65',
        stamina: '75',
        punching: '75',
        kicking: '55',
        wrestling: '75',
        grappling: '45',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban11 = {
        code: 'ban11',
        rank: '10',
        first: 'PEDRO',
        last: 'MUNHOZ',
        weight: '135',
        height: '5\'6\"',
        nation: 'BRAZIL',
        win: '20',
        loss: '7',
        strk: '1',
				ko: '5',
				sub: '8',
        dec: '7',
        kol: '0',
        subl: '0',
        decl: '7',
        strength: '60',
        speed: '70',
        stamina: '70',
        punching: '70',
        kicking: '60',
        wrestling: '60',
        grappling: '70',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban12 = {
        code: 'ban12',
        rank: '11',
        first: 'UMAR',
        last: 'NURMAGOMEDOV',
        weight: '135',
        height: '5\'8\"',
        nation: 'RUSSIA',
        win: '16',
        loss: '0',
        strk: '16',
				ko: '2',
				sub: '7',
        dec: '7',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '70',
        speed: '70',
        stamina: '75',
        punching: '60',
        kicking: '45',
        wrestling: '90',
        grappling: '85',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban13 = {
        code: 'ban13',
        rank: '12',
        first: 'RICKY',
        last: 'SIMON',
        weight: '135',
        height: '5\'6\"',
        nation: 'USA',
        win: '20',
        loss: '4',
        strk: '-1',
				ko: '6',
				sub: '4',
        dec: '10',
        kol: '2',
        subl: '1',
        decl: '1',
        strength: '70',
        speed: '70',
        stamina: '70',
        punching: '65',
        kicking: '60',
        wrestling: '70',
        grappling: '65',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban14 = {
        code: 'ban14',
        rank: '13',
        first: 'JONATHAN',
        last: 'MARTINEZ',
        weight: '135',
        height: '5\'7\"',
        nation: 'USA',
        win: '18',
        loss: '4',
        strk: '5',
				ko: '8',
				sub: '2',
        dec: '8',
        kol: '1',
        subl: '0',
        decl: '2',
        strength: '55',
        speed: '75',
        stamina: '70',
        punching: '70',
        kicking: '70',
        wrestling: '60',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban15 = {
        code: 'ban15',
        rank: '14',
        first: 'ADRIAN',
        last: 'YANEZ',
        weight: '135',
        height: '5\'7\"',
        nation: 'USA',
        win: '16',
        loss: '4',
        strk: '-1',
				ko: '10',
				sub: '2',
        dec: '4',
        kol: '1',
        subl: '0',
        decl: '3',
        strength: '80',
        speed: '80',
        stamina: '60',
        punching: '80',
        kicking: '55',
        wrestling: '55',
        grappling: '60',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban16 = {
        code: 'ban16',
        rank: '15',
        first: 'CHRIS',
        last: 'GUTIERREZ',
        weight: '135',
        height: '5\'8\"',
        nation: 'USA',
        win: '19',
        loss: '5',
        strk: '-1',
				ko: '9',
				sub: '1',
        dec: '9',
        kol: '0',
        subl: '1',
        decl: '4',
        strength: '65',
        speed: '70',
        stamina: '65',
        punching: '65',
        kicking: '65',
        wrestling: '55',
        grappling: '55',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban17 = {
        code: 'ban17',
        rank: 'NR',
        first: 'SAID',
        last: 'NURMAGOMEDOV',
        weight: '135',
        height: '5\'8\"',
        nation: 'RUSSIA',
        win: '17',
        loss: '3',
        strk: '-1',
				ko: '4',
				sub: '5',
        dec: '8',
        kol: '0',
        subl: '0',
        decl: '3',
        strength: '70',
        speed: '65',
        stamina: '70',
        punching: '60',
        kicking: '45',
        wrestling: '80',
        grappling: '70',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban18 = {
        code: 'ban18',
        rank: 'NR',
        first: 'MONTEL',
        last: 'JACKSON',
        weight: '135',
        height: '5\'10\"',
        nation: 'USA',
        win: '13',
        loss: '2',
        strk: '4',
				ko: '7',
				sub: '1',
        dec: '5',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '75',
        speed: '75',
        stamina: '65',
        punching: '70',
        kicking: '55',
        wrestling: '70',
        grappling: '45',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban19 = {
        code: 'ban19',
        rank: 'NR',
        first: 'JAVID',
        last: 'BASHARAT',
        weight: '135',
        height: '5\'9\"',
        nation: 'AFGANISTAN',
        win: '14',
        loss: '0',
        strk: '14',
				ko: '5',
				sub: '6',
        dec: '3',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '55',
        speed: '75',
        stamina: '75',
        punching: '80',
        kicking: '60',
        wrestling: '70',
        grappling: '70',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban20 = {
        code: 'ban20',
        rank: 'NR',
        first: 'KYLER',
        last: 'PHILLIPS',
        weight: '135',
        height: '5\'8\"',
        nation: 'USA',
        win: '11',
        loss: '2',
        strk: '2',
				ko: '5',
				sub: '2',
        dec: '4',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '60',
        speed: '65',
        stamina: '60',
        punching: '65',
        kicking: '50',
        wrestling: '70',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban21 = {
        code: 'ban21',
        rank: 'NR',
        first: 'DANIEL',
        last: 'MARCOS',
        weight: '135',
        height: '5\'7\"',
        nation: 'PERU',
        win: '15',
        loss: '0',
        strk: '15',
				ko: '8',
				sub: '0',
        dec: '7',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '75',
        speed: '65',
        stamina: '55',
        punching: '70',
        kicking: '60',
        wrestling: '50',
        grappling: '45',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban22 = {
        code: 'ban22',
        rank: 'NR',
        first: 'CODY',
        last: 'GARBRANDT',
        weight: '135',
        height: '5\'8\"',
        nation: 'USA',
        win: '13',
        loss: '5',
        strk: '1',
				ko: '10',
				sub: '0',
        dec: '3',
        kol: '4',
        subl: '0',
        decl: '1',
        strength: '80',
        speed: '90',
        stamina: '60',
        punching: '75',
        kicking: '60',
        wrestling: '65',
        grappling: '45',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban23 = {
        code: 'ban23',
        rank: 'NR',
        first: 'KYUNG-HO',
        last: 'KANG',
        weight: '135',
        height: '5\'9\"',
        nation: 'SOUTH KOREA',
        win: '19',
        loss: '9',
        strk: '2',
				ko: '2',
				sub: '12',
        dec: '5',
        kol: '1',
        subl: '1',
        decl: '6',
        strength: '65',
        speed: '60',
        stamina: '50',
        punching: '60',
        kicking: '50',
        wrestling: '65',
        grappling: '80',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let ban24 = {
        code: 'ban24',
        rank: 'NR',
        first: 'CAMERON',
        last: 'SAAIMAN',
        weight: '135',
        height: '5\'8\"',
        nation: 'SOUTH AFRICA',
        win: '9',
        loss: '0',
        strk: '9',
				ko: '6',
				sub: '1',
        dec: '2',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '70',
        speed: '70',
        stamina: '70',
        punching: '70',
        kicking: '60',
        wrestling: '70',
        grappling: '60',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea1 = {
        code: 'fea1',
        rank: 'C',
        first: 'ALEXANDER',
        last: 'VOLKANOVSKI',
        weight: '145',
        height: '5\'6\"',
        nation: 'AUSTRALIA',
        win: '26',
        loss: '2',
        strk: '1',
				ko: '13',
				sub: '3',
        dec: '10',
        kol: '1',
        subl: '0',
        decl: '1',
        strength: '80',
        speed: '85',
        stamina: '90',
        punching: '95',
        kicking: '85',
        wrestling: '80',
        grappling: '65',
        clinch: '80',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let fea2 = {
        code: 'fea2',
        rank: '1',
        first: 'MAX',
        last: 'HOLLOWAY',
        weight: '145',
        height: '5\'11\"',
        nation: 'USA',
        win: '24',
        loss: '7',
        strk: '1',
				ko: '10',
				sub: '2',
        dec: '12',
        kol: '0',
        subl: '1',
        decl: '6',
        strength: '55',
        speed: '75',
        stamina: '100',
        punching: '90',
        kicking: '65',
        wrestling: '65',
        grappling: '55',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let fea3 = {
        code: 'fea3',
        rank: '2',
        first: 'YAIR',
        last: 'RODRIGUEZ',
        weight: '145',
        height: '5\'11\"',
        nation: 'MEXICO',
        win: '15',
        loss: '4',
        strk: '-1',
				ko: '5',
				sub: '4',
        dec: '6',
        kol: '3',
        subl: '0',
        decl: '1',
        strength: '75',
        speed: '100',
        stamina: '75',
        punching: '80',
        kicking: '100',
        wrestling: '65',
        grappling: '65',
        clinch: '65',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea4 = {
        code: 'fea4',
        rank: '3',
        first: 'BRIAN',
        last: 'ORTEGA',
        weight: '145',
        height: '5\'8\"',
        nation: 'USA',
        win: '15',
        loss: '3',
        strk: '-2',
				ko: '3',
				sub: '7',
        dec: '5',
        kol: '2',
        subl: '0',
        decl: '1',
        strength: '60',
        speed: '60',
        stamina: '85',
        punching: '75',
        kicking: '50',
        wrestling: '65',
        grappling: '100',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea5 = {
        code: 'fea5',
        rank: '4',
        first: 'ARNOLD',
        last: 'ALLEN',
        weight: '145',
        height: '5\'9\"',
        nation: 'ENGLAND',
        win: '19',
        loss: '2',
        strk: '-1',
				ko: '7',
				sub: '4',
        dec: '8',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '75',
        speed: '75',
        stamina: '65',
        punching: '80',
        kicking: '55',
        wrestling: '60',
        grappling: '60',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea6 = {
        code: 'fea6',
        rank: '5',
        first: 'ILIA',
        last: 'TOPURIA',
        weight: '145',
        height: '5\'8\"',
        nation: 'GEORGIA',
        win: '14',
        loss: '0',
        strk: '14',
				ko: '4',
				sub: '8',
        dec: '2',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '90',
        speed: '80',
        stamina: '80',
        punching: '85',
        kicking: '70',
        wrestling: '75',
        grappling: '90',
        clinch: '65',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea7 = {
        code: 'fea7',
        rank: '6',
        first: 'JOSH',
        last: 'EMMETT',
        weight: '145',
        height: '5\'6\"',
        nation: 'USA',
        win: '18',
        loss: '4',
        strk: '-2',
				ko: '6',
				sub: '2',
        dec: '10',
        kol: '1',
        subl: '1',
        decl: '2',
        strength: '100',
        speed: '70',
        stamina: '90',
        punching: '65',
        kicking: '55',
        wrestling: '60',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea8 = {
        code: 'fea8',
        rank: '7',
        first: 'CALVIN',
        last: 'KATTAR',
        weight: '145',
        height: '5\'11\"',
        nation: 'USA',
        win: '23',
        loss: '7',
        strk: '-2',
				ko: '11',
				sub: '2',
        dec: '10',
        kol: '1',
        subl: '1',
        decl: '5',
        strength: '70',
        speed: '75',
        stamina: '80',
        punching: '85',
        kicking: '60',
        wrestling: '55',
        grappling: '55',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea9 = {
        code: 'fea9',
        rank: '8',
        first: 'CHAN-SUNG',
        last: 'JUNG',
        weight: '145',
        height: '5\'9\"',
        nation: 'SOUTH KOREA',
        win: '17',
        loss: '7',
        strk: '-1',
				ko: '6',
				sub: '8',
        dec: '3',
        kol: '4',
        subl: '0',
        decl: '3',
        strength: '80',
        speed: '65',
        stamina: '65',
        punching: '75',
        kicking: '60',
        wrestling: '65',
        grappling: '70',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea10 = {
        code: 'fea10',
        rank: '9',
        first: 'GIGA',
        last: 'CHIKADZE',
        weight: '145',
        height: '6\'0\"',
        nation: 'GEORGIA',
        win: '14',
        loss: '3',
        strk: '-1',
				ko: '9',
				sub: '1',
        dec: '4',
        kol: '0',
        subl: '1',
        decl: '2',
        strength: '80',
        speed: '75',
        stamina: '70',
        punching: '70',
        kicking: '95',
        wrestling: '55',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea11 = {
        code: 'fea11',
        rank: '10',
        first: 'MOVSAR',
        last: 'EVLOEV',
        weight: '145',
        height: '5\'8\"',
        nation: 'RUSSIA',
        win: '17',
        loss: '0',
        strk: '17',
				ko: '3',
				sub: '4',
        dec: '10',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '80',
        speed: '65',
        stamina: '80',
        punching: '65',
        kicking: '50',
        wrestling: '90',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea12 = {
        code: 'fea12',
        rank: '11',
        first: 'SODIQ',
        last: 'YUSUFF',
        weight: '145',
        height: '5\'9\"',
        nation: 'NIGERIA',
        win: '13',
        loss: '2',
        strk: '2',
				ko: '6',
				sub: '1',
        dec: '6',
        kol: '1',
        subl: '0',
        decl: '1',
        strength: '65',
        speed: '80',
        stamina: '70',
        punching: '70',
        kicking: '55',
        wrestling: '50',
        grappling: '45',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea13 = {
        code: 'fea13',
        rank: '12',
        first: 'BRYCE',
        last: 'MITCHELL',
        weight: '145',
        height: '5\'9\"',
        nation: 'USA',
        win: '15',
        loss: '1',
        strk: '-1',
				ko: '0',
				sub: '9',
        dec: '6',
        kol: '0',
        subl: '1',
        decl: '0',
        strength: '65',
        speed: '65',
        stamina: '75',
        punching: '60',
        kicking: '45',
        wrestling: '80',
        grappling: '100',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea14 = {
        code: 'fea14',
        rank: '13',
        first: 'DAN',
        last: 'IGE',
        weight: '145',
        height: '5\'7\"',
        nation: 'USA',
        win: '17',
        loss: '6',
        strk: '2',
				ko: '5',
				sub: '5',
        dec: '7',
        kol: '0',
        subl: '0',
        decl: '6',
        strength: '75',
        speed: '75',
        stamina: '65',
        punching: '75',
        kicking: '55',
        wrestling: '55',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea15 = {
        code: 'fea15',
        rank: '14',
        first: 'EDSON',
        last: 'BARBOZA',
        weight: '145',
        height: '5\'11\"',
        nation: 'BRAZIL',
        win: '23',
        loss: '11',
        strk: '1',
				ko: '14',
				sub: '1',
        dec: '8',
        kol: '4',
        subl: '2',
        decl: '5',
        strength: '75',
        speed: '100',
        stamina: '60',
        punching: '75',
        kicking: '100',
        wrestling: '55',
        grappling: '45',
        clinch: '65',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea16 = {
        code: 'fea16',
        rank: '15',
        first: 'ALEX',
        last: 'CACERES',
        weight: '145',
        height: '5\'9\"',
        nation: 'USA',
        win: '21',
        loss: '13',
        strk: '2',
				ko: '4',
				sub: '7',
        dec: '10',
        kol: '1',
        subl: '7',
        decl: '5',
        strength: '60',
        speed: '70',
        stamina: '75',
        punching: '70',
        kicking: '60',
        wrestling: '45',
        grappling: '65',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea17 = {
        code: 'fea17',
        rank: 'NR',
        first: 'BILLY',
        last: 'QUARANTILLO',
        weight: '145',
        height: '5\'10\"',
        nation: 'USA',
        win: '18',
        loss: '5',
        strk: '1',
				ko: '8',
				sub: '5',
        dec: '5',
        kol: '2',
        subl: '0',
        decl: '3',
        strength: '65',
        speed: '65',
        stamina: '80',
        punching: '70',
        kicking: '50',
        wrestling: '55',
        grappling: '65',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea18 = {
        code: 'fea18',
        rank: 'NR',
        first: 'NATE',
        last: 'LANDWEHR',
        weight: '145',
        height: '5\'9\"',
        nation: 'USA',
        win: '17',
        loss: '5',
        strk: '-1',
				ko: '8',
				sub: '2',
        dec: '7',
        kol: '2',
        subl: '1',
        decl: '2',
        strength: '75',
        speed: '65',
        stamina: '65',
        punching: '70',
        kicking: '50',
        wrestling: '55',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea19 = {
        code: 'fea19',
        rank: 'NR',
        first: 'ANDRE',
        last: 'FILI',
        weight: '145',
        height: '5\'11\"',
        nation: 'USA',
        win: '22',
        loss: '10',
        strk: '-1',
				ko: '9',
				sub: '3',
        dec: '10',
        kol: '3',
        subl: '2',
        decl: '5',
        strength: '65',
        speed: '75',
        stamina: '65',
        punching: '70',
        kicking: '50',
        wrestling: '50',
        grappling: '45',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea20 = {
        code: 'fea20',
        rank: 'NR',
        first: 'RYAN',
        last: 'HALL',
        weight: '145',
        height: '5\'10\"',
        nation: 'USA',
        win: '9',
        loss: '2',
        strk: '1',
				ko: '2',
				sub: '3',
        dec: '4',
        kol: '1',
        subl: '0',
        decl: '1',
        strength: '40',
        speed: '40',
        stamina: '55',
        punching: '35',
        kicking: '60',
        wrestling: '50',
        grappling: '100',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea21 = {
        code: 'fea21',
        rank: 'NR',
        first: 'JOSHUA',
        last: 'CULIBAO',
        weight: '145',
        height: '5\'10\"',
        nation: 'AUSTRALIA',
        win: '11',
        loss: '2',
        strk: '-1',
				ko: '5',
				sub: '1',
        dec: '5',
        kol: '1',
        subl: '0',
        decl: '1',
        strength: '55',
        speed: '65',
        stamina: '65',
        punching: '65',
        kicking: '60',
        wrestling: '50',
        grappling: '40',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea22 = {
        code: 'fea22',
        rank: 'NR',
        first: 'CHARLES',
        last: 'JOURDAIN',
        weight: '145',
        height: '5\'9\"',
        nation: 'CANADA',
        win: '14',
        loss: '6',
        strk: '1',
				ko: '8',
				sub: '4',
        dec: '2',
        kol: '0',
        subl: '1',
        decl: '5',
        strength: '55',
        speed: '75',
        stamina: '75',
        punching: '70',
        kicking: '40',
        wrestling: '50',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea23 = {
        code: 'fea23',
        rank: 'NR',
        first: 'SEUNG-WOO',
        last: 'CHOI',
        weight: '145',
        height: '6\'0\"',
        nation: 'SOUTH KOREA',
        win: '10',
        loss: '6',
        strk: '-3',
				ko: '6',
				sub: '0',
        dec: '4',
        kol: '2',
        subl: '2',
        decl: '2',
        strength: '70',
        speed: '65',
        stamina: '60',
        punching: '70',
        kicking: '40',
        wrestling: '50',
        grappling: '40',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let fea24 = {
        code: 'fea24',
        rank: 'NR',
        first: 'DIEGO',
        last: 'LOPES',
        weight: '145',
        height: '5\'11\"',
        nation: 'BRAZIL',
        win: '22',
        loss: '6',
        strk: '1',
				ko: '8',
				sub: '12',
        dec: '2',
        kol: '2',
        subl: '0',
        decl: '4',
        strength: '70',
        speed: '60',
        stamina: '60',
        punching: '65',
        kicking: '50',
        wrestling: '55',
        grappling: '90',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig1 = {
        code: 'ligC',
        rank: 'C',
        first: 'ISLAM',
        last: 'MAKHACHEV',
        weight: '155',
        height: '5\'10\"',
        nation: 'RUSSIA',
        win: '24',
        loss: '1',
        strk: '12',
				ko: '4',
				sub: '11',
        dec: '9',
        kol: '1',
        subl: '0',
        decl: '0',
        strength: '85',
        speed: '65',
        stamina: '70',
        punching: '75',
        kicking: '50',
        wrestling: '100',
        grappling: '85',
        clinch: '70',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let lig2 = {
        code: 'lig2',
        rank: '1',
        first: 'CHARLES',
        last: 'OLIVEIRA',
        weight: '155',
        height: '5\'11\"',
        nation: 'BRAZIL',
        win: '34',
        loss: '9',
        strk: '1',
				ko: '10',
				sub: '21',
        dec: '3',
        kol: '4',
        subl: '4',
        decl: '1',
        strength: '80',
        speed: '80',
        stamina: '70',
        punching: '80',
        kicking: '75',
        wrestling: '85',
        grappling: '100',
        clinch: '75',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let lig3 = {
        code: 'lig3',
        rank: '2',
        first: 'JUSTIN',
        last: 'GAETHJE',
        weight: '155',
        height: '5\'11\"',
        nation: 'USA',
        win: '25',
        loss: '4',
        strk: '2',
				ko: '20',
				sub: '1',
        dec: '4',
        kol: '2',
        subl: '2',
        decl: '0',
        strength: '90',
        speed: '65',
        stamina: '65',
        punching: '95',
        kicking: '85',
        wrestling: '70',
        grappling: '55',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '3',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig4 = {
        code: 'lig4',
        rank: '3',
        first: 'DUSTIN',
        last: 'POIRIER',
        weight: '155',
        height: '5\'9\"',
        nation: 'USA',
        win: '29',
        loss: '8',
        strk: '-1',
				ko: '14',
				sub: '8',
        dec: '7',
        kol: '3',
        subl: '3',
        decl: '2',
        strength: '85',
        speed: '70',
        stamina: '75',
        punching: '95',
        kicking: '75',
        wrestling: '70',
        grappling: '70',
        clinch: '65',
				rate: '',
        meth: '',
        prev: '2',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig5 = {
        code: 'lig5',
        rank: '4',
        first: 'BENEIL',
        last: 'DARIUSH',
        weight: '155',
        height: '5\'10\"',
        nation: 'USA',
        win: '22',
        loss: '5',
        strk: '-1',
				ko: '5',
				sub: '8',
        dec: '9',
        kol: '4',
        subl: '1',
        decl: '0',
        strength: '75',
        speed: '60',
        stamina: '65',
        punching: '65',
        kicking: '50',
        wrestling: '90',
        grappling: '95',
        clinch: '65',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig6 = {
        code: 'lig6',
        rank: '5',
        first: 'MICHAEL',
        last: 'CHANDLER',
        weight: '155',
        height: '5\'8\"',
        nation: 'USA',
        win: '23',
        loss: '8',
        strk: '-1',
				ko: '11',
				sub: '7',
        dec: '5',
        kol: '4',
        subl: '1',
        decl: '3',
        strength: '90',
        speed: '85',
        stamina: '65',
        punching: '70',
        kicking: '50',
        wrestling: '80',
        grappling: '60',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig7 = {
        code: 'lig7',
        rank: '6',
        first: 'RAFAEL',
        last: 'FIZIEV',
        weight: '155',
        height: '5\'8\"',
        nation: 'AZERBAIJAN',
        win: '12',
        loss: '2',
        strk: '-1',
				ko: '8',
				sub: '1',
        dec: '3',
        kol: '1',
        subl: '0',
        decl: '1',
        strength: '80',
        speed: '80',
        stamina: '70',
        punching: '80',
        kicking: '70',
        wrestling: '55',
        grappling: '50',
        clinch: '70',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig8 = {
        code: 'lig8',
        rank: '7',
        first: 'MATEUSZ',
        last: 'GAMROT',
        weight: '155',
        height: '5\'10\"',
        nation: 'POLAND',
        win: '22',
        loss: '2',
        strk: '1',
				ko: '7',
				sub: '5',
        dec: '10',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '65',
        speed: '70',
        stamina: '70',
        punching: '65',
        kicking: '50',
        wrestling: '80',
        grappling: '90',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig9 = {
        code: 'lig9',
        rank: '8',
        first: 'ARMAN',
        last: 'TSARUKYAN',
        weight: '155',
        height: '5\'7\"',
        nation: 'ARMENIA',
        win: '20',
        loss: '3',
        strk: '2',
				ko: '8',
				sub: '5',
        dec: '7',
        kol: '1',
        subl: '0',
        decl: '2',
        strength: '80',
        speed: '70',
        stamina: '70',
        punching: '65',
        kicking: '50',
        wrestling: '90',
        grappling: '65',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig10 = {
        code: 'lig10',
        rank: '9',
        first: 'RAFAEL',
        last: 'DOS ANJOS',
        weight: '155',
        height: '5\'8\"',
        nation: 'BRAZIL',
        win: '32',
        loss: '14',
        strk: '1',
				ko: '5',
				sub: '11',
        dec: '16',
        kol: '3',
        subl: '1',
        decl: '10',
        strength: '60',
        speed: '70',
        stamina: '80',
        punching: '70',
        kicking: '55',
        wrestling: '70',
        grappling: '80',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig11 = {
        code: 'lig11',
        rank: '10',
        first: 'DAN',
        last: 'HOOKER',
        weight: '155',
        height: '6\'0\"',
        nation: 'NEW ZEALAND',
        win: '23',
        loss: '12',
        strk: '2',
				ko: '11',
				sub: '7',
        dec: '5',
        kol: '3',
        subl: '3',
        decl: '6',
        strength: '75',
        speed: '70',
        stamina: '75',
        punching: '80',
        kicking: '65',
        wrestling: '65',
        grappling: '60',
        clinch: '70',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig12 = {
        code: 'lig12',
        rank: '11',
        first: 'GRANT',
        last: 'DAWSON',
        weight: '155',
        height: '5\'10\"',
        nation: 'USA',
        win: '20',
        loss: '1',
        strk: '11',
				ko: '4',
				sub: '13',
        dec: '3',
        kol: '1',
        subl: '0',
        decl: '0',
        strength: '75',
        speed: '70',
        stamina: '75',
        punching: '50',
        kicking: '45',
        wrestling: '85',
        grappling: '85',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig13 = {
        code: 'lig13',
        rank: '12',
        first: 'JALIN',
        last: 'TURNER',
        weight: '155',
        height: '6\'3\"',
        nation: 'USA',
        win: '13',
        loss: '7',
        strk: '-2',
				ko: '9',
				sub: '4',
        dec: '0',
        kol: '3',
        subl: '0',
        decl: '4',
        strength: '65',
        speed: '75',
        stamina: '65',
        punching: '75',
        kicking: '50',
        wrestling: '65',
        grappling: '75',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig14 = {
        code: 'lig14',
        rank: '13',
        first: 'RENATO',
        last: 'MOICANO',
        weight: '155',
        height: '5\'11\"',
        nation: 'BRAZIL',
        win: '17',
        loss: '5',
        strk: '1',
				ko: '0',
				sub: '10',
        dec: '7',
        kol: '3',
        subl: '1',
        decl: '1',
        strength: '65',
        speed: '70',
        stamina: '65',
        punching: '60',
        kicking: '50',
        wrestling: '70',
        grappling: '85',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig15 = {
        code: 'lig15',
        rank: '14',
        first: 'MATT',
        last: 'FREVOLA',
        weight: '155',
        height: '5\'9\"',
        nation: 'USA',
        win: '11',
        loss: '3',
        strk: '3',
				ko: '4',
				sub: '3',
        dec: '4',
        kol: '2',
        subl: '0',
        decl: '1',
        strength: '85',
        speed: '75',
        stamina: '70',
        punching: '75',
        kicking: '50',
        wrestling: '70',
        grappling: '65',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig16 = {
        code: 'lig16',
        rank: '15',
        first: 'CARLOS DIEGO',
        last: 'FERREIRA',
        weight: '155',
        height: '5\'9\"',
        nation: 'BRAZIL',
        win: '18',
        loss: '5',
        strk: '1',
				ko: '4',
				sub: '7',
        dec: '7',
        kol: '3',
        subl: '0',
        decl: '2',
        strength: '75',
        speed: '70',
        stamina: '75',
        punching: '70',
        kicking: '50',
        wrestling: '65',
        grappling: '85',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig17 = {
        code: 'lig17',
        rank: 'NR',
        first: 'DREW',
        last: 'DOBER',
        weight: '155',
        height: '5\'8\"',
        nation: 'USA',
        win: '26',
        loss: '12',
        strk: '-1',
				ko: '10',
				sub: '9',
        dec: '7',
        kol: '2',
        subl: '4',
        decl: '6',
        strength: '95',
        speed: '75',
        stamina: '70',
        punching: '75',
        kicking: '50',
        wrestling: '55',
        grappling: '55',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig18 = {
        code: 'lig18',
        rank: 'NR',
        first: 'BOBBY',
        last: 'GREEN',
        weight: '155',
        height: '5\'10\"',
        nation: 'USA',
        win: '30',
        loss: '14',
        strk: '1',
				ko: '10',
				sub: '9',
        dec: '11',
        kol: '4',
        subl: '2',
        decl: '8',
        strength: '65',
        speed: '85',
        stamina: '80',
        punching: '75',
        kicking: '50',
        wrestling: '55',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig19 = {
        code: 'lig19',
        rank: 'NR',
        first: 'JOEL',
        last: 'ALVAREZ',
        weight: '155',
        height: '6\'3\"',
        nation: 'SPAIN',
        win: '20',
        loss: '3',
        strk: '1',
				ko: '3',
				sub: '17',
        dec: '0',
        kol: '2',
        subl: '0',
        decl: '1',
        strength: '75',
        speed: '70',
        stamina: '60',
        punching: '75',
        kicking: '55',
        wrestling: '55',
        grappling: '75',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig20 = {
        code: 'lig20',
        rank: 'NR',
        first: 'GURAM',
        last: 'KUTATELADZE',
        weight: '155',
        height: '5\'11\"',
        nation: 'GEORGIA',
        win: '12',
        loss: '4',
        strk: '-2',
				ko: '7',
				sub: '1',
        dec: '4',
        kol: '1',
        subl: '1',
        decl: '2',
        strength: '70',
        speed: '80',
        stamina: '80',
        punching: '80',
        kicking: '55',
        wrestling: '55',
        grappling: '55',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig21 = {
        code: 'lig21',
        rank: 'NR',
        first: 'PADDY',
        last: 'PIMBLETT',
        weight: '155',
        height: '5\'9\"',
        nation: 'ENGLAND',
        win: '20',
        loss: '3',
        strk: '6',
				ko: '5',
				sub: '10',
        dec: '5',
        kol: '0',
        subl: '1',
        decl: '2',
        strength: '75',
        speed: '70',
        stamina: '65',
        punching: '65',
        kicking: '50',
        wrestling: '60',
        grappling: '80',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig22 = {
        code: 'lig22',
        rank: 'NR',
        first: 'BENOIT',
        last: 'SAINT-DENIS',
        weight: '155',
        height: '5\'11\"',
        nation: 'FRANCE',
        win: '11',
        loss: '1',
        strk: '3',
				ko: '2',
				sub: '9',
        dec: '0',
        kol: '0',
        subl: '0',
        decl: '1',
        strength: '75',
        speed: '70',
        stamina: '65',
        punching: '65',
        kicking: '50',
        wrestling: '70',
        grappling: '85',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig23 = {
        code: 'lig23',
        rank: 'NR',
        first: 'TERRANCE',
        last: 'MCKINNEY',
        weight: '155',
        height: '5\'10\"',
        nation: 'USA',
        win: '13',
        loss: '6',
        strk: '-2',
				ko: '5',
				sub: '8',
        dec: '0',
        kol: '4',
        subl: '2',
        decl: '0',
        strength: '90',
        speed: '100',
        stamina: '60',
        punching: '70',
        kicking: '45',
        wrestling: '70',
        grappling: '80',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lig24 = {
        code: 'lig24',
        rank: 'NR',
        first: 'TONY',
        last: 'FERGUSON',
        weight: '155',
        height: '5\'11\"',
        nation: 'USA',
        win: '25',
        loss: '9',
        strk: '-6',
				ko: '12',
				sub: '8',
        dec: '5',
        kol: '2',
        subl: '3',
        decl: '4',
        strength: '70',
        speed: '65',
        stamina: '80',
        punching: '70',
        kicking: '60',
        wrestling: '65',
        grappling: '80',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel1 = {
        code: 'wel1',
        rank: 'C',
        first: 'LEON',
        last: 'EDWARDS',
        weight: '170',
        height: '6\'2\"',
        nation: 'ENGLAND',
        win: '21',
        loss: '3',
        strk: '11',
				ko: '7',
				sub: '3',
        dec: '11',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '70',
        speed: '85',
        stamina: '85',
        punching: '90',
        kicking: '85',
        wrestling: '75',
        grappling: '65',
        clinch: '70',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let wel2 = {
        code: 'wel2',
        rank: '1',
        first: 'KAMARU',
        last: 'USMAN',
        weight: '170',
        height: '6\'0\"',
        nation: 'NIGERIA',
        win: '20',
        loss: '3',
        strk: '-2',
				ko: '9',
				sub: '1',
        dec: '10',
        kol: '1',
        subl: '1',
        decl: '1',
        strength: '90',
        speed: '75',
        stamina: '90',
        punching: '70',
        kicking: '50',
        wrestling: '100',
        grappling: '50',
        clinch: '85',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let wel3 = {
        code: 'wel3',
        rank: '2',
        first: 'COLBY',
        last: 'COVINGTON',
        weight: '170',
        height: '5\'11\"',
        nation: 'USA',
        win: '17',
        loss: '3',
        strk: '1',
				ko: '4',
				sub: '4',
        dec: '9',
        kol: '1',
        subl: '1',
        decl: '1',
        strength: '50',
        speed: '75',
        stamina: '100',
        punching: '75',
        kicking: '60',
        wrestling: '90',
        grappling: '50',
        clinch: '70',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel4 = {
        code: 'wel4',
        rank: '3',
        first: 'BELAL',
        last: 'MUHAMMAD',
        weight: '170',
        height: '5\'10\"',
        nation: 'PALESTINE',
        win: '23',
        loss: '3',
        strk: '10',
				ko: '5',
				sub: '1',
        dec: '17',
        kol: '1',
        subl: '0',
        decl: '2',
        strength: '50',
        speed: '55',
        stamina: '80',
        punching: '55',
        kicking: '50',
        wrestling: '85',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel5 = {
        code: 'wel5',
        rank: '4',
        first: 'KHAMZAT',
        last: 'CHIMAEV',
        weight: '170',
        height: '6\'2\"',
        nation: 'SWEDEN',
        win: '12',
        loss: '0',
        strk: '12',
				ko: '6',
				sub: '5',
        dec: '1',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '90',
        speed: '75',
        stamina: '65',
        punching: '70',
        kicking: '50',
        wrestling: '100',
        grappling: '90',
        clinch: '65',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel6 = {
        code: 'wel6',
        rank: '5',
        first: 'GILBERT',
        last: 'BURNS',
        weight: '170',
        height: '5\'10\"',
        nation: 'BRAZIL',
        win: '22',
        loss: '6',
        strk: '-1',
				ko: '6',
				sub: '9',
        dec: '7',
        kol: '2',
        subl: '0',
        decl: '4',
        strength: '85',
        speed: '75',
        stamina: '75',
        punching: '70',
        kicking: '55',
        wrestling: '80',
        grappling: '100',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel7 = {
        code: 'wel7',
        rank: '6',
        first: 'SHAVKAT',
        last: 'RAKHMONOV',
        weight: '170',
        height: '6\'1\"',
        nation: 'KAZAKHSTAN',
        win: '17',
        loss: '0',
        strk: '17',
				ko: '8',
				sub: '9',
        dec: '0',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '75',
        speed: '80',
        stamina: '70',
        punching: '90',
        kicking: '70',
        wrestling: '70',
        grappling: '90',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel8 = {
        code: 'wel8',
        rank: '7',
        first: 'STEPHEN',
        last: 'THOMPSON',
        weight: '170',
        height: '6\'0\"',
        nation: 'USA',
        win: '17',
        loss: '6',
        strk: '1',
				ko: '8',
				sub: '1',
        dec: '8',
        kol: '1',
        subl: '0',
        decl: '5',
        strength: '70',
        speed: '90',
        stamina: '75',
        punching: '90',
        kicking: '85',
        wrestling: '50',
        grappling: '45',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel9 = {
        code: 'wel9',
        rank: '8',
        first: 'GEOFF',
        last: 'NEAL',
        weight: '170',
        height: '5\'11\"',
        nation: 'USA',
        win: '15',
        loss: '5',
        strk: '-1',
				ko: '9',
				sub: '2',
        dec: '4',
        kol: '1',
        subl: '2',
        decl: '2',
        strength: '85',
        speed: '70',
        stamina: '70',
        punching: '80',
        kicking: '45',
        wrestling: '60',
        grappling: '55',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel10 = {
        code: 'wel10',
        rank: '9',
        first: 'SEAN',
        last: 'BRADY',
        weight: '170',
        height: '5\'9\"',
        nation: 'USA',
        win: '15',
        loss: '1',
        strk: '-1',
				ko: '3',
				sub: '4',
        dec: '8',
        kol: '1',
        subl: '0',
        decl: '0',
        strength: '65',
        speed: '65',
        stamina: '75',
        punching: '55',
        kicking: '45',
        wrestling: '70',
        grappling: '85',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '8',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel11 = {
        code: 'wel11',
        rank: '10',
        first: 'VICENTE',
        last: 'LUQUE',
        weight: '170',
        height: '5\'11\"',
        nation: 'BRAZIL',
        win: '21',
        loss: '9',
        strk: '-2',
				ko: '11',
				sub: '8',
        dec: '2',
        kol: '1',
        subl: '2',
        decl: '6',
        strength: '85',
        speed: '75',
        stamina: '65',
        punching: '80',
        kicking: '55',
        wrestling: '60',
        grappling: '75',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel12 = {
        code: 'wel12',
        rank: '11',
        first: 'NEIL',
        last: 'MAGNY',
        weight: '170',
        height: '6\'3\"',
        nation: 'USA',
        win: '28',
        loss: '10',
        strk: '1',
				ko: '7',
				sub: '4',
        dec: '17',
        kol: '2',
        subl: '6',
        decl: '2',
        strength: '60',
        speed: '70',
        stamina: '80',
        punching: '70',
        kicking: '45',
        wrestling: '70',
        grappling: '55',
        clinch: '',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel13 = {
        code: 'wel13',
        rank: '12',
        first: 'KEVIN',
        last: 'HOLLAND',
        weight: '170',
        height: '6\'3\"',
        nation: 'USA',
        win: '25',
        loss: '9',
        strk: '2',
				ko: '14',
				sub: '7',
        dec: '4',
        kol: '1',
        subl: '3',
        decl: '5',
        strength: '80',
        speed: '75',
        stamina: '75',
        punching: '75',
        kicking: '65',
        wrestling: '60',
        grappling: '70',
        clinch: '55',
				rate: '',
        meth: '',
        prev: 'NR',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel14 = {
        code: 'wel14',
        rank: '13',
        first: 'IAN',
        last: 'GARRY',
        weight: '170',
        height: '6\'3\"',
        nation: 'IRELAND',
        win: '12',
        loss: '0',
        strk: '12',
				ko: '7',
				sub: '1',
        dec: '4',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '75',
        speed: '75',
        stamina: '75',
        punching: '85',
        kicking: '60',
        wrestling: '50',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '14',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel15 = {
        code: 'wel15',
        rank: '14',
        first: 'JACK',
        last: 'DELLA MADDALENA',
        weight: '170',
        height: '5\'11\"',
        nation: 'AUSTRALIA',
        win: '15',
        loss: '2',
        strk: '15',
				ko: '11',
				sub: '2',
        dec: '2',
        kol: '1',
        subl: '1',
        decl: '0',
        strength: '90',
        speed: '80',
        stamina: '65',
        punching: '85',
        kicking: '45',
        wrestling: '55',
        grappling: '45',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '13',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel16 = {
        code: 'wel16',
        rank: '15',
        first: 'MICHAEL',
        last: 'CHIESA',
        weight: '170',
        height: '6\'1\"',
        nation: 'USA',
        win: '18',
        loss: '7',
        strk: '-3',
				ko: '0',
				sub: '11',
        dec: '7',
        kol: '1',
        subl: '5',
        decl: '1',
        strength: '50',
        speed: '60',
        stamina: '70',
        punching: '45',
        kicking: '45',
        wrestling: '70',
        grappling: '80',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '12',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel17 = {
        code: 'wel17',
        rank: 'NR',
        first: 'MICHEL',
        last: 'PEREIRA',
        weight: '170',
        height: '6\'1\"',
        nation: 'BRAZIL',
        win: '28',
        loss: '11',
        strk: '5',
				ko: '10',
				sub: '6',
        dec: '11',
        kol: '1',
        subl: '1',
        decl: '7',
        strength: '75',
        speed: '85',
        stamina: '60',
        punching: '75',
        kicking: '55',
        wrestling: '55',
        grappling: '60',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel18 = {
        code: 'wel18',
        rank: 'NR',
        first: 'GABRIEL',
        last: 'BONFIM',
        weight: '170',
        height: '6\'1\"',
        nation: 'BRAZIL',
        win: '15',
        loss: '0',
        strk: '15',
				ko: '3',
				sub: '12',
        dec: '0',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '75',
        speed: '75',
        stamina: '70',
        punching: '60',
        kicking: '50',
        wrestling: '70',
        grappling: '90',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel19 = {
        code: 'wel19',
        rank: 'NR',
        first: 'RANDY',
        last: 'BROWN',
        weight: '170',
        height: '6\'3\"',
        nation: 'JAMAICA',
        win: '17',
        loss: '5',
        strk: '1',
				ko: '6',
				sub: '5',
        dec: '6',
        kol: '2',
        subl: '2',
        decl: '1',
        strength: '65',
        speed: '70',
        stamina: '75',
        punching: '75',
        kicking: '50',
        wrestling: '60',
        grappling: '60',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel20 = {
        code: 'wel20',
        rank: 'NR',
        first: 'GUNNAR',
        last: 'NELSON',
        weight: '170',
        height: '5\'11\"',
        nation: 'ICELAND',
        win: '19',
        loss: '5',
        strk: '2',
				ko: '3',
				sub: '14',
        dec: '2',
        kol: '1',
        subl: '0',
        decl: '4',
        strength: '60',
        speed: '65',
        stamina: '65',
        punching: '50',
        kicking: '40',
        wrestling: '70',
        grappling: '85',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel21 = {
        code: 'wel21',
        rank: 'NR',
        first: 'NICOLAS',
        last: 'DALBY',
        weight: '170',
        height: '5\'11\"',
        nation: 'DENMARK',
        win: '22',
        loss: '4',
        strk: '3',
				ko: '6',
				sub: '4',
        dec: '12',
        kol: '0',
        subl: '0',
        decl: '4',
        strength: '70',
        speed: '65',
        stamina: '80',
        punching: '65',
        kicking: '50',
        wrestling: '65',
        grappling: '55',
        clinch: '',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel22 = {
        code: 'wel22',
        rank: 'NR',
        first: 'MICHAEL',
        last: 'MORALES',
        weight: '170',
        height: '6\'0\"',
        nation: 'ECUADOR',
        win: '15',
        loss: '0',
        strk: '15',
				ko: '11',
				sub: '1',
        dec: '3',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '80',
        speed: '75',
        stamina: '75',
        punching: '80',
        kicking: '50',
        wrestling: '65',
        grappling: '55',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel23 = {
        code: 'wel23',
        rank: 'NR',
        first: 'SANTIAGO',
        last: 'PONZINIBBIO',
        weight: '170',
        height: '6\'0\"',
        nation: 'ARGENTINA',
        win: '29',
        loss: '7',
        strk: '-1',
				ko: '16',
				sub: '6',
        dec: '7',
        kol: '4',
        subl: '0',
        decl: '3',
        strength: '75',
        speed: '75',
        stamina: '70',
        punching: '75',
        kicking: '55',
        wrestling: '60',
        grappling: '60',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wel24 = {
        code: 'wel24',
        rank: 'NR',
        first: 'JAKE',
        last: 'MATTHEWS',
        weight: '170',
        height: '5\'11\"',
        nation: 'AUTRALIA',
        win: '19',
        loss: '6',
        strk: '1',
				ko: '5',
				sub: '8',
        dec: '6',
        kol: '1',
        subl: '3',
        decl: '2',
        strength: '75',
        speed: '70',
        stamina: '65',
        punching: '70',
        kicking: '45',
        wrestling: '65',
        grappling: '65',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid1 = {
        code: 'mid1',
        rank: 'C',
        first: 'ISRAEL',
        last: 'ADESANYA',
        weight: '185',
        height: '6\'4\"',
        nation: 'NIGERIA',
        win: '24',
        loss: '2',
        strk: '1',
				ko: '16',
				sub: '0',
        dec: '8',
        kol: '1',
        subl: '0',
        decl: '1',
        strength: '75',
        speed: '90',
        stamina: '100',
        punching: '100',
        kicking: '90',
        wrestling: '70',
        grappling: '50',
        clinch: '80',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let mid2 = {
        code: 'mid2',
        rank: '1',
        first: 'DRICUS',
        last: 'DU PLESSIS',
        weight: '185',
        height: '6\'1\"',
        nation: 'SOUTH AFRICA',
        win: '20',
        loss: '2',
        strk: '8',
				ko: '9',
				sub: '10',
        dec: '1',
        kol: '1',
        subl: '1',
        decl: '0',
        strength: '85',
        speed: '75',
        stamina: '80',
        punching: '80',
        kicking: '70',
        wrestling: '80',
        grappling: '70',
        clinch: '75',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let mid3 = {
        code: 'mid3',
        rank: '2',
        first: 'ROBERT',
        last: 'WHITTAKER',
        weight: '185',
        height: '5\'11\"',
        nation: 'AUSTRALIA',
        win: '24',
        loss: '7',
        strk: '-1',
				ko: '9',
				sub: '5',
        dec: '10',
        kol: '3',
        subl: '1',
        decl: '3',
        strength: '65',
        speed: '85',
        stamina: '85',
        punching: '85',
        kicking: '75',
        wrestling: '80',
        grappling: '60',
        clinch: '65',
				rate: '',
        meth: '',
        prev: '3',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid4 = {
        code: 'mid4',
        rank: '3',
        first: 'JARED',
        last: 'CANNONIER',
        weight: '185',
        height: '6\'0\"',
        nation: 'USA',
        win: '17',
        loss: '6',
        strk: '2',
				ko: '10',
				sub: '2',
        dec: '5',
        kol: '2',
        subl: '0',
        decl: '4',
        strength: '95',
        speed: '65',
        stamina: '80',
        punching: '75',
        kicking: '50',
        wrestling: '60',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '4',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid5 = {
        code: 'mid5',
        rank: '4',
        first: 'MARVIN',
        last: 'VETTORI',
        weight: '185',
        height: '6\'0\"',
        nation: 'ITALY',
        win: '19',
        loss: '7',
        strk: '-1',
				ko: '2',
				sub: '9',
        dec: '8',
        kol: '0',
        subl: '0',
        decl: '7',
        strength: '60',
        speed: '55',
        stamina: '100',
        punching: '60',
        kicking: '50',
        wrestling: '80',
        grappling: '65',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '5',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid6 = {
        code: 'mid6',
        rank: '5',
        first: 'SEAN',
        last: 'STRICKLAND',
        weight: '185',
        height: '6\'1\"',
        nation: 'USA',
        win: '27',
        loss: '5',
        strk: '2',
				ko: '11',
				sub: '4',
        dec: '12',
        kol: '2',
        subl: '0',
        decl: '3',
        strength: '65',
        speed: '65',
        stamina: '80',
        punching: '80',
        kicking: '45',
        wrestling: '60',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '6',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid7 = {
        code: 'mid7',
        rank: '6',
        first: 'PAULO',
        last: 'COSTA',
        weight: '185',
        height: '6\'1\"',
        nation: 'BRAZIL',
        win: '14',
        loss: '2',
        strk: '1',
				ko: '11',
				sub: '1',
        dec: '2',
        kol: '1',
        subl: '0',
        decl: '1',
        strength: '70',
        speed: '65',
        stamina: '55',
        punching: '75',
        kicking: '60',
        wrestling: '65',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '7',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid8 = {
        code: 'mid8',
        rank: '7',
        first: 'DEREK',
        last: 'BRUNSON',
        weight: '185',
        height: '6\'1\"',
        nation: 'USA',
        win: '23',
        loss: '9',
        strk: '-2',
				ko: '12',
				sub: '4',
        dec: '7',
        kol: '7',
        subl: '0',
        decl: '2',
        strength: '75',
        speed: '65',
        stamina: '55',
        punching: '65',
        kicking: '50',
        wrestling: '80',
        grappling: '60',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '8',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid9 = {
        code: 'mid9',
        rank: '8',
        first: 'ROMAN',
        last: 'DOLIDZE',
        weight: '185',
        height: '6\'3\"',
        nation: 'GEORGIA',
        win: '12',
        loss: '2',
        strk: '-1',
				ko: '7',
				sub: '3',
        dec: '2',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '80',
        speed: '70',
        stamina: '60',
        punching: '65',
        kicking: '55',
        wrestling: '60',
        grappling: '75',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '9',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid10 = {
        code: 'mid10',
        rank: '9',
        first: 'JACK',
        last: 'HERMANSSON',
        weight: '185',
        height: '6\'1\"',
        nation: 'NORWAY',
        win: '23',
        loss: '8',
        strk: '-1',
				ko: '11',
				sub: '6',
        dec: '6',
        kol: '3',
        subl: '2',
        decl: '3',
        strength: '65',
        speed: '70',
        stamina: '70',
        punching: '70',
        kicking: '55',
        wrestling: '70',
        grappling: '70',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '10',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid11 = {
        code: 'mid11',
        rank: '10',
        first: 'BRENDAN',
        last: 'ALLEN',
        weight: '185',
        height: '6\'2\"',
        nation: 'USA',
        win: '22',
        loss: '5',
        strk: '5',
				ko: '5',
				sub: '13',
        dec: '4',
        kol: '2',
        subl: '1',
        decl: '2',
        strength: '65',
        speed: '70',
        stamina: '65',
        punching: '65',
        kicking: '50',
        wrestling: '65',
        grappling: '90',
        clinch: '',
				rate: '',
        meth: '',
        prev: '11',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid12 = {
        code: 'mid12',
        rank: '11',
        first: 'KELVIN',
        last: 'GASTELUM',
        weight: '185',
        height: '5\'9\"',
        nation: 'MEXICO',
        win: '17',
        loss: '8',
        strk: '1',
				ko: '6',
				sub: '4',
        dec: '7',
        kol: '0',
        subl: '2',
        decl: '6',
        strength: '90',
        speed: '65',
        stamina: '75',
        punching: '70',
        kicking: '55',
        wrestling: '85',
        grappling: '60',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '12',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid13 = {
        code: 'mid13',
        rank: '12',
        first: 'NASSOURDINE',
        last: 'IMAVOV',
        weight: '185',
        height: '6\'3\"',
        nation: 'FRANCE',
        win: '12',
        loss: '4',
        strk: '-1',
				ko: '5',
				sub: '4',
        dec: '3',
        kol: '0',
        subl: '1',
        decl: '3',
        strength: '70',
        speed: '75',
        stamina: '65',
        punching: '75',
        kicking: '65',
        wrestling: '70',
        grappling: '65',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '13',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid14 = {
        code: 'mid14',
        rank: '13',
        first: 'PAUL',
        last: 'CRAIG',
        weight: '185',
        height: '6\'4\"',
        nation: 'SCOTLAND',
        win: '17',
        loss: '6',
        strk: '1',
				ko: '4',
				sub: '13',
        dec: '0',
        kol: '4',
        subl: '1',
        decl: '1',
        strength: '65',
        speed: '60',
        stamina: '65',
        punching: '60',
        kicking: '50',
        wrestling: '60',
        grappling: '90',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '14',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid15 = {
        code: 'mid15',
        rank: '14',
        first: 'CHRIS',
        last: 'CURTIS',
        weight: '185',
        height: '5\'10\"',
        nation: 'USA',
        win: '30',
        loss: '10',
        strk: '-1',
				ko: '17',
				sub: '1',
        dec: '12',
        kol: '1',
        subl: '1',
        decl: '8',
        strength: '80',
        speed: '70',
        stamina: '70',
        punching: '75',
        kicking: '55',
        wrestling: '60',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '15',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid16 = {
        code: 'mid16',
        rank: '15',
        first: 'ANDRE',
        last: 'MUNIZ',
        weight: '185',
        height: '6\'1\"',
        nation: 'BRAZIL',
        win: '23',
        loss: '6',
        strk: '-2',
				ko: '4',
				sub: '15',
        dec: '4',
        kol: '5',
        subl: '1',
        decl: '0',
        strength: '60',
        speed: '60',
        stamina: '65',
        punching: '60',
        kicking: '60',
        wrestling: '60',
        grappling: '95',
        clinch: '60',
				rate: '',
        meth: '',
        prev: 'NR',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid17 = {
        code: 'mid17',
        rank: 'NR',
        first: 'CAIO',
        last: 'BORRALHO',
        weight: '185',
        height: '6\'1\"',
        nation: 'BRAZIL',
        win: '13',
        loss: '1',
        strk: '6',
				ko: '4',
				sub: '4',
        dec: '6',
        kol: '0',
        subl: '0',
        decl: '1',
        strength: '70',
        speed: '70',
        stamina: '70',
        punching: '65',
        kicking: '55',
        wrestling: '65',
        grappling: '65',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid18 = {
        code: 'mid18',
        rank: 'NR',
        first: 'BRAD',
        last: 'TAVARES',
        weight: '185',
        height: '6\'1\"',
        nation: 'USA',
        win: '19',
        loss: '8',
        strk: '-2',
				ko: '5',
				sub: '2',
        dec: '12',
        kol: '4',
        subl: '0',
        decl: '4',
        strength: '70',
        speed: '65',
        stamina: '70',
        punching: '70',
        kicking: '65',
        wrestling: '70',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid19 = {
        code: 'mid19',
        rank: 'NR',
        first: 'JUN-YONG',
        last: 'PARK',
        weight: '185',
        height: '5\'10\"',
        nation: 'SOUTH KOREA',
        win: '17',
        loss: '5',
        strk: '4',
				ko: '5',
				sub: '6',
        dec: '6',
        kol: '1',
        subl: '2',
        decl: '2',
        strength: '60',
        speed: '75',
        stamina: '75',
        punching: '65',
        kicking: '50',
        wrestling: '65',
        grappling: '80',
        clinch: '',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid20 = {
        code: 'mid20',
        rank: 'NR',
        first: 'IKRAM',
        last: 'ALISKEROV',
        weight: '185',
        height: '6\'0\"',
        nation: 'RUSSIA',
        win: '14',
        loss: '1',
        strk: '6',
				ko: '5',
				sub: '5',
        dec: '3',
        kol: '1',
        subl: '0',
        decl: '0',
        strength: '75',
        speed: '65',
        stamina: '65',
        punching: '70',
        kicking: '50',
        wrestling: '70',
        grappling: '70',
        clinch: '',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid21 = {
        code: 'mid21',
        rank: 'NR',
        first: 'GERALD',
        last: 'MEERSCHAERT',
        weight: '185',
        height: '6\'1\"',
        nation: 'USA',
        win: '35',
        loss: '16',
        strk: '-1',
				ko: '6',
				sub: '27',
        dec: '2',
        kol: '4',
        subl: '8',
        decl: '4',
        strength: '55',
        speed: '60',
        stamina: '65',
        punching: '45',
        kicking: '40',
        wrestling: '70',
        grappling: '90',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid22 = {
        code: 'mid22',
        rank: 'NR',
        first: 'EDMEN',
        last: 'SHAHBAZYAN',
        weight: '185',
        height: '6\'2\"',
        nation: 'USA',
        win: '12',
        loss: '4',
        strk: '-1',
				ko: '10',
				sub: '1',
        dec: '1',
        kol: '3',
        subl: '0',
        decl: '1',
        strength: '70',
        speed: '70',
        stamina: '60',
        punching: '75',
        kicking: '55',
        wrestling: '55',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid23 = {
        code: 'mid23',
        rank: 'NR',
        first: 'ROMAN',
        last: 'KOPYLOV',
        weight: '185',
        height: '6\'0\"',
        nation: 'RUSSIA',
        win: '11',
        loss: '2',
        strk: '3',
				ko: '10',
				sub: '0',
        dec: '1',
        kol: '0',
        subl: '1',
        decl: '1',
        strength: '75',
        speed: '70',
        stamina: '65',
        punching: '75',
        kicking: '60',
        wrestling: '60',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let mid24 = {
        code: 'mid24',
        rank: 'NR',
        first: 'BO',
        last: 'NICKAL',
        weight: '185',
        height: '6\'1\"',
        nation: 'USA',
        win: '5',
        loss: '0',
        strk: '5',
				ko: '2',
				sub: '3',
        dec: '0',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '90',
        speed: '75',
        stamina: '65',
        punching: '70',
        kicking: '50',
        wrestling: '100',
        grappling: '80',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe1 = {
        code: 'lhe1',
        rank: 'C',
        first: 'JAMAHAL',
        last: 'HILL',
        weight: '205',
        height: '6\'4\"',
        nation: 'USA',
        win: '12',
        loss: '1',
        strk: '4',
				ko: '7',
				sub: '0',
        dec: '5',
        kol: '1',
        subl: '0',
        decl: '0',
        strength: '85',
        speed: '65',
        stamina: '75',
        punching: '85',
        kicking: '55',
        wrestling: '75',
        grappling: '55',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let lhe2 = {
        code: 'lhe2',
        rank: '1',
        first: 'JIRI',
        last: 'PROCHAZKA',
        weight: '205',
        height: '6\'4\"',
        nation: 'CZECH REPUBLIC',
        win: '29',
        loss: '3',
        strk: '13',
				ko: '25',
				sub: '3',
        dec: '1',
        kol: '2',
        subl: '1',
        decl: '0',
        strength: '100',
        speed: '90',
        stamina: '70',
        punching: '95',
        kicking: '70',
        wrestling: '65',
        grappling: '50',
        clinch: '75',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let lhe3 = {
        code: 'lhe3',
        rank: '2',
        first: 'MAGOMED',
        last: 'ANKALAEV',
        weight: '205',
        height: '6\'3\"',
        nation: 'RUSSIA',
        win: '18',
        loss: '1',
        strk: '9',
				ko: '10',
				sub: '0',
        dec: '8',
        kol: '0',
        subl: '1',
        decl: '0',
        strength: '70',
        speed: '70',
        stamina: '75',
        punching: '80',
        kicking: '50',
        wrestling: '75',
        grappling: '65',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe4 = {
        code: 'lhe4',
        rank: '3',
        first: 'ALEX',
        last: 'PEREIRA',
        weight: '205',
        height: '6\'4\"',
        nation: 'BRAZIL',
        win: '8',
        loss: '2',
        strk: '1',
				ko: '6',
				sub: '0',
        dec: '2',
        kol: '1',
        subl: '1',
        decl: '0',
        strength: '95',
        speed: '85',
        stamina: '80',
        punching: '100',
        kicking: '95',
        wrestling: '65',
        grappling: '50',
        clinch: '75',
				rate: '',
        meth: '',
        prev: 'NR',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe5 = {
        code: 'lhe5',
        rank: '4',
        first: 'JAN',
        last: 'BLACHOWICZ',
        weight: '205',
        height: '6\'2\"',
        nation: 'POLAND',
        win: '29',
        loss: '10',
        strk: '-1',
				ko: '9',
				sub: '9',
        dec: '11',
        kol: '2',
        subl: '2',
        decl: '6',
        strength: '90',
        speed: '65',
        stamina: '55',
        punching: '85',
        kicking: '100',
        wrestling: '70',
        grappling: '70',
        clinch: '80',
				rate: '',
        meth: '',
        prev: '3',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe6 = {
        code: 'lhe6',
        rank: '5',
        first: 'ALEKSANDAR',
        last: 'RAKIC',
        weight: '205',
        height: '6\'5\"',
        nation: 'AUSTRIA',
        win: '14',
        loss: '3',
        strk: '-1',
				ko: '9',
				sub: '1',
        dec: '4',
        kol: '1',
        subl: '1',
        decl: '1',
        strength: '70',
        speed: '85',
        stamina: '70',
        punching: '70',
        kicking: '100',
        wrestling: '65',
        grappling: '60',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '4',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe7 = {
        code: 'lhe7',
        rank: '6',
        first: 'NIKITA',
        last: 'KRYLOV',
        weight: '205',
        height: '6\'3\"',
        nation: 'UKRAINE',
        win: '30',
        loss: '9',
        strk: '3',
				ko: '12',
				sub: '16',
        dec: '2',
        kol: '1',
        subl: '6',
        decl: '2',
        strength: '85',
        speed: '75',
        stamina: '60',
        punching: '80',
        kicking: '50',
        wrestling: '80',
        grappling: '90',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '5',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe8 = {
        code: 'lhe8',
        rank: '7',
        first: 'JOHNNY',
        last: 'WALKER',
        weight: '205',
        height: '6\'5\"',
        nation: 'BRAZIL',
        win: '21',
        loss: '7',
        strk: '3',
				ko: '16',
				sub: '3',
        dec: '2',
        kol: '4',
        subl: '1',
        decl: '2',
        strength: '100',
        speed: '90',
        stamina: '45',
        punching: '75',
        kicking: '55',
        wrestling: '55',
        grappling: '70',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '6',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe9 = {
        code: 'lhe9',
        rank: '8',
        first: 'ANTHONY',
        last: 'SMITH',
        weight: '205',
        height: '6\'4\"',
        nation: 'USA',
        win: '36',
        loss: '18',
        strk: '-2',
				ko: '20',
				sub: '14',
        dec: '2',
        kol: '10',
        subl: '4',
        decl: '4',
        strength: '75',
        speed: '75',
        stamina: '80',
        punching: '70',
        kicking: '50',
        wrestling: '70',
        grappling: '70',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '7',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe10 = {
        code: 'lhe10',
        rank: '9',
        first: 'VOLKAN',
        last: 'OEZDEMIR',
        weight: '205',
        height: '6\'1\"',
        nation: 'SWITZERLAND',
        win: '18',
        loss: '7',
        strk: '-1',
				ko: '12',
				sub: '1',
        dec: '5',
        kol: '2',
        subl: '2',
        decl: '3',
        strength: '75',
        speed: '65',
        stamina: '65',
        punching: '75',
        kicking: '65',
        wrestling: '50',
        grappling: '45',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '8',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe11 = {
        code: 'lhe11',
        rank: '10',
        first: 'RYAN',
        last: 'SPANN',
        weight: '205',
        height: '6\'5\"',
        nation: 'USA',
        win: '21',
        loss: '8',
        strk: '-1',
				ko: '6',
				sub: '12',
        dec: '3',
        kol: '3',
        subl: '3',
        decl: '2',
        strength: '75',
        speed: '70',
        stamina: '70',
        punching: '70',
        kicking: '65',
        wrestling: '60',
        grappling: '70',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '9',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe12 = {
        code: 'lhe12',
        rank: '11',
        first: 'AZAMAT',
        last: 'MURZAKANOV',
        weight: '205',
        height: '5\'10\"',
        nation: 'RUSSIA',
        win: '13',
        loss: '0',
        strk: '13',
				ko: '9',
				sub: '1',
        dec: '3',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '80',
        speed: '75',
        stamina: '50',
        punching: '80',
        kicking: '55',
        wrestling: '60',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '10',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe13 = {
        code: 'lhe13',
        rank: '12',
        first: 'DOMINICK',
        last: 'REYES',
        weight: '205',
        height: '6\'3\"',
        nation: 'USA',
        win: '12',
        loss: '4',
        strk: '-4',
				ko: '7',
				sub: '2',
        dec: '3',
        kol: '3',
        subl: '0',
        decl: '1',
        strength: '80',
        speed: '70',
        stamina: '65',
        punching: '75',
        kicking: '55',
        wrestling: '55',
        grappling: '55',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '11',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe14 = {
        code: 'lhe14',
        rank: '13',
        first: 'KHALIL',
        last: 'ROUNTREE',
        weight: '205',
        height: '6\'1\"',
        nation: 'USA',
        win: '11',
        loss: '5',
        strk: '3',
				ko: '7',
				sub: '0',
        dec: '4',
        kol: '2',
        subl: '1',
        decl: '2',
        strength: '80',
        speed: '75',
        stamina: '60',
        punching: '65',
        kicking: '80',
        wrestling: '50',
        grappling: '45',
        clinch: '65',
				rate: '',
        meth: '',
        prev: '12',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe15 = {
        code: 'lhe15',
        rank: '14',
        first: 'ALONZO',
        last: 'MENIFIELD',
        weight: '205',
        height: '6\'0\"',
        nation: 'USA',
        win: '14',
        loss: '3',
        strk: '3',
				ko: '10',
				sub: '3',
        dec: '1',
        kol: '1',
        subl: '0',
        decl: '2',
        strength: '75',
        speed: '65',
        stamina: '45',
        punching: '70',
        kicking: '50',
        wrestling: '50',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '13',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe16 = {
        code: 'lhe16',
        rank: '15',
        first: 'DUSTIN',
        last: 'JACOBY',
        weight: '205',
        height: '6\'4\"',
        nation: 'USA',
        win: '19',
        loss: '7',
        strk: '1',
				ko: '12',
				sub: '1',
        dec: '6',
        kol: '1',
        subl: '2',
        decl: '4',
        strength: '85',
        speed: '75',
        stamina: '75',
        punching: '85',
        kicking: '65',
        wrestling: '45',
        grappling: '45',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '14',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe17 = {
        code: 'lhe17',
        rank: 'NR',
        first: 'KENNEDY',
        last: 'NZECHUKWU',
        weight: '205',
        height: '6\'5\"',
        nation: 'NIGERIA',
        win: '12',
        loss: '4',
        strk: '-1',
				ko: '8',
				sub: '1',
        dec: '3',
        kol: '2',
        subl: '1',
        decl: '1',
        strength: '75',
        speed: '65',
        stamina: '65',
        punching: '75',
        kicking: '50',
        wrestling: '55',
        grappling: '45',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe18 = {
        code: 'lhe18',
        rank: 'NR',
        first: 'CARLOS',
        last: 'ULBERG',
        weight: '205',
        height: '6\'4\"',
        nation: 'NEW ZEALAND',
        win: '8',
        loss: '1',
        strk: '4',
				ko: '6',
				sub: '0',
        dec: '2',
        kol: '1',
        subl: '0',
        decl: '0',
        strength: '90',
        speed: '80',
        stamina: '70',
        punching: '90',
        kicking: '75',
        wrestling: '55',
        grappling: '45',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe19 = {
        code: 'lhe19',
        rank: 'NR',
        first: 'ION',
        last: 'CUTELABA',
        weight: '205',
        height: '6\'1\"',
        nation: 'MOLDOVA',
        win: '17',
        loss: '9',
        strk: '1',
				ko: '13',
				sub: '2',
        dec: '2',
        kol: '3',
        subl: '4',
        decl: '1',
        strength: '90',
        speed: '80',
        stamina: '65',
        punching: '75',
        kicking: '50',
        wrestling: '75',
        grappling: '45',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe20 = {
        code: 'lhe20',
        rank: 'NR',
        first: 'DA-UN',
        last: 'JUNG',
        weight: '205',
        height: '6\'4\"',
        nation: 'SOUTH KOREA',
        win: '15',
        loss: '4',
        strk: '-2',
				ko: '11',
				sub: '2',
        dec: '2',
        kol: '1',
        subl: '1',
        decl: '2',
        strength: '75',
        speed: '75',
        stamina: '55',
        punching: '75',
        kicking: '50',
        wrestling: '50',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe21 = {
        code: 'lhe21',
        rank: 'NR',
        first: 'NICOLAE',
        last: 'NEGUMEREANU',
        weight: '205',
        height: '6\'0\"',
        nation: 'ROMANIA',
        win: '13',
        loss: '2',
        strk: '-1',
				ko: '8',
				sub: '3',
        dec: '2',
        kol: '1',
        subl: '0',
        decl: '1',
        strength: '80',
        speed: '60',
        stamina: '65',
        punching: '75',
        kicking: '50',
        wrestling: '50',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe22 = {
        code: 'lhe22',
        rank: 'NR',
        first: 'VITOR',
        last: 'PETRINO',
        weight: '205',
        height: '6\'2\"',
        nation: 'BRAZIL',
        win: '9',
        loss: '0',
        strk: '9',
				ko: '6',
				sub: '1',
        dec: '2',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '85',
        speed: '65',
        stamina: '60',
        punching: '75',
        kicking: '60',
        wrestling: '65',
        grappling: '65',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe23 = {
        code: 'lhe23',
        rank: 'NR',
        first: 'MODESTAS',
        last: 'BUKAUSKAS',
        weight: '205',
        height: '6\'3\"',
        nation: 'LITHUANIA',
        win: '15',
        loss: '5',
        strk: '4',
				ko: '9',
				sub: '2',
        dec: '4',
        kol: '3',
        subl: '1',
        decl: '1',
        strength: '55',
        speed: '65',
        stamina: '75',
        punching: '70',
        kicking: '50',
        wrestling: '50',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let lhe24 = {
        code: 'lhe24',
        rank: 'NR',
        first: 'TYSON',
        last: 'PEDRO',
        weight: '205',
        height: '6\'3\"',
        nation: 'AUSTRALIA',
        win: '9',
        loss: '4',
        strk: '-1',
				ko: '4',
				sub: '5',
        dec: '0',
        kol: '1',
        subl: '1',
        decl: '2',
        strength: '75',
        speed: '75',
        stamina: '55',
        punching: '70',
        kicking: '85',
        wrestling: '65',
        grappling: '65',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea1 = {
        code: 'hea1',
        rank: 'C',
        first: 'JON',
        last: 'JONES',
        weight: '248',
        height: '6\'4\"',
        nation: 'USA',
        win: '27',
        loss: '1',
        strk: '18',
				ko: '10',
				sub: '7',
        dec: '10',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '70',
        speed: '75',
        stamina: '85',
        punching: '80',
        kicking: '80',
        wrestling: '90',
        grappling: '80',
        clinch: '80',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let hea2 = {
        code: 'hea2',
        rank: '1',
        first: 'SERGEI',
        last: 'PAVLOVICH',
        weight: '261',
        height: '6\'3\"',
        nation: 'RUSSIA',
        win: '18',
        loss: '1',
        strk: '6',
				ko: '15',
				sub: '0',
        dec: '3',
        kol: '1',
        subl: '0',
        decl: '0',
        strength: '100',
        speed: '70',
        stamina: '70',
        punching: '80',
        kicking: '50',
        wrestling: '65',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let hea3 = {
        code: 'hea3',
        rank: '2',
        first: 'CYRIL',
        last: 'GANE',
        weight: '248',
        height: '6\'5\"',
        nation: 'FRANCE',
        win: '11',
        loss: '2',
        strk: '-1',
				ko: '5',
				sub: '4',
        dec: '4',
        kol: '0',
        subl: '1',
        decl: '1',
        strength: '50',
        speed: '95',
        stamina: '80',
        punching: '100',
        kicking: '85',
        wrestling: '40',
        grappling: '40',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea4 = {
        code: 'hea4',
        rank: '3',
        first: 'STIPE',
        last: 'MIOCIC',
        weight: '234',
        height: '6\'4\"',
        nation: 'USA',
        win: '20',
        loss: '4',
        strk: '-1',
				ko: '15',
				sub: '0',
        dec: '5',
        kol: '3',
        subl: '0',
        decl: '1',
        strength: '70',
        speed: '75',
        stamina: '80',
        punching: '80',
        kicking: '55',
        wrestling: '75',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea5 = {
        code: 'hea5',
        rank: '4',
        first: 'TOM',
        last: 'ASPINALL',
        weight: '257',
        height: '6\'5\"',
        nation: 'ENGLAND',
        win: '13',
        loss: '3',
        strk: '1',
				ko: '10',
				sub: '3',
        dec: '0',
        kol: '1',
        subl: '1',
        decl: '0',
        strength: '85',
        speed: '100',
        stamina: '65',
        punching: '85',
        kicking: '70',
        wrestling: '70',
        grappling: '70',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea6 = {
        code: 'hea6',
        rank: '5',
        first: 'CURTIS',
        last: 'BLAYDES',
        weight: '263',
        height: '6\'4\"',
        nation: 'USA',
        win: '17',
        loss: '4',
        strk: '-1',
				ko: '12',
				sub: '0',
        dec: '5',
        kol: '4',
        subl: '0',
        decl: '0',
        strength: '70',
        speed: '70',
        stamina: '70',
        punching: '65',
        kicking: '50',
        wrestling: '90',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea7 = {
        code: 'hea7',
        rank: '6',
        first: 'TAI',
        last: 'TUIVASA',
        weight: '265',
        height: '6\'2\"',
        nation: 'AUSTRALIA',
        win: '14',
        loss: '5',
        strk: '-2',
				ko: '13',
				sub: '0',
        dec: '1',
        kol: '3',
        subl: '1',
        decl: '1',
        strength: '100',
        speed: '65',
        stamina: '60',
        punching: '75',
        kicking: '65',
        wrestling: '55',
        grappling: '40',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea8 = {
        code: 'hea8',
        rank: '7',
        first: 'SERGEY',
        last: 'SPIVAK',
        weight: '256',
        height: '6\'3\"',
        nation: 'MOLDOVA',
        win: '16',
        loss: '3',
        strk: '3',
				ko: '7',
				sub: '7',
        dec: '2',
        kol: '2',
        subl: '0',
        decl: '1',
        strength: '65',
        speed: '65',
        stamina: '55',
        punching: '60',
        kicking: '45',
        wrestling: '60',
        grappling: '60',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '8',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea9 = {
        code: 'hea9',
        rank: '8',
        first: 'ALEXANDER',
        last: 'VOLKOV',
        weight: '258',
        height: '6\'7\"',
        nation: 'RUSSIA',
        win: '36',
        loss: '10',
        strk: '2',
				ko: '24',
				sub: '3',
        dec: '9',
        kol: '2',
        subl: '3',
        decl: '5',
        strength: '85',
        speed: '65',
        stamina: '70',
        punching: '85',
        kicking: '70',
        wrestling: '65',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '7',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea10 = {
        code: 'hea10',
        rank: '9',
        first: 'JAILTON',
        last: 'ALMEIDA',
        weight: '231',
        height: '6\'3\"',
        nation: 'BRAZIL',
        win: '19',
        loss: '2',
        strk: '14',
				ko: '7',
				sub: '12',
        dec: '0',
        kol: '1',
        subl: '0',
        decl: '1',
        strength: '80',
        speed: '90',
        stamina: '55',
        punching: '65',
        kicking: '45',
        wrestling: '100',
        grappling: '90',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea11 = {
        code: 'hea11',
        rank: '10',
        first: 'DERRICK',
        last: 'LEWIS',
        weight: '264',
        height: '6\'3\"',
        nation: 'USA',
        win: '27',
        loss: '11',
        strk: '1',
				ko: '22',
				sub: '1',
        dec: '4',
        kol: '7',
        subl: '2',
        decl: '2',
        strength: '100',
        speed: '70',
        stamina: '60',
        punching: '75',
        kicking: '50',
        wrestling: '65',
        grappling: '45',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea12 = {
        code: 'hea12',
        rank: '11',
        first: 'MARCIN',
        last: 'TYBURA',
        weight: '254',
        height: '6\'3\"',
        nation: 'POLAND',
        win: '24',
        loss: '8',
        strk: '-1',
				ko: '9',
				sub: '6',
        dec: '9',
        kol: '5',
        subl: '0',
        decl: '3',
        strength: '65',
        speed: '65',
        stamina: '75',
        punching: '70',
        kicking: '45',
        wrestling: '65',
        grappling: '45',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea13 = {
        code: 'hea13',
        rank: '12',
        first: 'JAIRZINHO',
        last: 'ROZENSTRUIK',
        weight: '265',
        height: '6\'2\"',
        nation: 'SURINAME',
        win: '13',
        loss: '5',
        strk: '-1',
				ko: '12',
				sub: '0',
        dec: '1',
        kol: '2',
        subl: '1',
        decl: '2',
        strength: '90',
        speed: '70',
        stamina: '65',
        punching: '90',
        kicking: '45',
        wrestling: '55',
        grappling: '45',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea14 = {
        code: 'hea14',
        rank: '13',
        first: 'ALEXANDER',
        last: 'ROMANOV',
        weight: '265',
        height: '6\'2\"',
        nation: 'MOLDOVA',
        win: '17',
        loss: '2',
        strk: '1',
				ko: '6',
				sub: '9',
        dec: '2',
        kol: '1',
        subl: '0',
        decl: '1',
        strength: '60',
        speed: '55',
        stamina: '50',
        punching: '50',
        kicking: '45',
        wrestling: '65',
        grappling: '80',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea15 = {
        code: 'hea15',
        rank: '14',
        first: 'CHRIS',
        last: 'DAUKAUS',
        weight: '243',
        height: '6\'2\"',
        nation: 'USA',
        win: '12',
        loss: '6',
        strk: '-3',
				ko: '11',
				sub: '0',
        dec: '1',
        kol: '5',
        subl: '1',
        decl: '0',
        strength: '85',
        speed: '45',
        stamina: '50',
        punching: '75',
        kicking: '45',
        wrestling: '50',
        grappling: '55',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea16 = {
        code: 'hea16',
        rank: '15',
        first: 'MARCOS ROGERIO',
        last: 'DE LIMA',
        weight: '262',
        height: '6\'1\"',
        nation: 'BRAZIL',
        win: '21',
        loss: '9',
        strk: '-1',
				ko: '14',
				sub: '3',
        dec: '4',
        kol: '2',
        subl: '5',
        decl: '2',
        strength: '60',
        speed: '50',
        stamina: '60',
        punching: '50',
        kicking: '45',
        wrestling: '45',
        grappling: '40',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea17 = {
        code: 'hea17',
        rank: 'NR',
        first: 'RODRIGO',
        last: 'NASCIMENTO',
        weight: '264',
        height: '6\'2\"',
        nation: 'BRAZIL',
        win: '10',
        loss: '1',
        strk: '2',
				ko: '2',
				sub: '6',
        dec: '2',
        kol: '1',
        subl: '0',
        decl: '0',
        strength: '50',
        speed: '50',
        stamina: '50',
        punching: '50',
        kicking: '40',
        wrestling: '60',
        grappling: '70',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea18 = {
        code: 'hea18',
        rank: 'NR',
        first: 'DON\'TALE',
        last: 'MAYES',
        weight: '262',
        height: '6\'6\"',
        nation: 'USA',
        win: '10',
        loss: '5',
        strk: '1',
				ko: '4',
				sub: '3',
        dec: '3',
        kol: '1',
        subl: '2',
        decl: '1',
        strength: '60',
        speed: '55',
        stamina: '50',
        punching: '65',
        kicking: '40',
        wrestling: '50',
        grappling: '40',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea19 = {
        code: 'hea19',
        rank: 'NR',
        first: 'AUGUSTO',
        last: 'SAKAI',
        weight: '265',
        height: '6\'3\"',
        nation: 'BRAZIL',
        win: '16',
        loss: '5',
        strk: '1',
				ko: '11',
				sub: '0',
        dec: '5',
        kol: '4',
        subl: '0',
        decl: '1',
        strength: '50',
        speed: '50',
        stamina: '50',
        punching: '50',
        kicking: '40',
        wrestling: '70',
        grappling: '40',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea20 = {
        code: 'hea20',
        rank: 'NR',
        first: 'BLAGOY',
        last: 'IVANOV',
        weight: '259',
        height: '5\'11\"',
        nation: 'BULGARIA',
        win: '19',
        loss: '6',
        strk: '-2',
				ko: '7',
				sub: '5',
        dec: '7',
        kol: '0',
        subl: '1',
        decl: '5',
        strength: '60',
        speed: '40',
        stamina: '40',
        punching: '40',
        kicking: '40',
        wrestling: '75',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea21 = {
        code: 'hea21',
        rank: 'NR',
        first: 'ANDREI',
        last: 'ARLOVSKY',
        weight: '245',
        height: '6\'3\"',
        nation: 'BELARUS',
        win: '34',
        loss: '22',
        strk: '-2',
				ko: '17',
				sub: '3',
        dec: '14',
        kol: '12',
        subl: '3',
        decl: '7',
        strength: '40',
        speed: '55',
        stamina: '75',
        punching: '70',
        kicking: '50',
        wrestling: '50',
        grappling: '45',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea22 = {
        code: 'hea22',
        rank: 'NR',
        first: 'MARTIN',
        last: 'BUDAY',
        weight: '265',
        height: '6\'4\"',
        nation: 'SLOVAK REPUBLIC',
        win: '12',
        loss: '1',
        strk: '11',
				ko: '6',
				sub: '2',
        dec: '4',
        kol: '0',
        subl: '0',
        decl: '1',
        strength: '55',
        speed: '55',
        stamina: '55',
        punching: '55',
        kicking: '45',
        wrestling: '55',
        grappling: '45',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea23 = {
        code: 'hea23',
        rank: 'NR',
        first: 'JUSTIN',
        last: 'TAFA',
        weight: '265',
        height: '6\'0\"',
        nation: 'AUSTRALIA',
        win: '6',
        loss: '3',
        strk: '1',
				ko: '6',
				sub: '0',
        dec: '0',
        kol: '1',
        subl: '0',
        decl: '2',
        strength: '95',
        speed: '65',
        stamina: '40',
        punching: '75',
        kicking: '55',
        wrestling: '50',
        grappling: '40',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let hea24 = {
        code: 'hea24',
        rank: 'NR',
        first: 'PARKER',
        last: 'PORTER',
        weight: '249',
        height: '6\'0\"',
        nation: 'USA',
        win: '14',
        loss: '8',
        strk: '1',
				ko: '5',
				sub: '4',
        dec: '5',
        kol: '4',
        subl: '3',
        decl: '0',
        strength: '65',
        speed: '45',
        stamina: '50',
        punching: '65',
        kicking: '40',
        wrestling: '50',
        grappling: '40',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst1 = {
        code: 'wst1',
        rank: 'C',
        first: 'WEILI',
        last: 'ZHANG',
        weight: '115',
        height: '5\'4\"',
        nation: 'CHINA',
        win: '23',
        loss: '3',
        strk: '2',
				ko: '11',
				sub: '8',
        dec: '4',
        kol: '1',
        subl: '0',
        decl: '2',
        strength: '90',
        speed: '85',
        stamina: '85',
        punching: '80',
        kicking: '70',
        wrestling: '70',
        grappling: '70',
        clinch: '80',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let wst2 = {
        code: 'wst2',
        rank: '1',
        first: 'CARLA',
        last: 'ESPARZA',
        weight: '115',
        height: '5\'1\"',
        nation: 'USA',
        win: '19',
        loss: '7',
        strk: '-1',
				ko: '4',
				sub: '4',
        dec: '11',
        kol: '2',
        subl: '2',
        decl: '3',
        strength: '75',
        speed: '65',
        stamina: '80',
        punching: '65',
        kicking: '50',
        wrestling: '85',
        grappling: '60',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let wst3 = {
        code: 'wst3',
        rank: '2',
        first: 'ROSE',
        last: 'NAMAJUNAS',
        weight: '115',
        height: '5\'5\"',
        nation: 'USA',
        win: '11',
        loss: '5',
        strk: '-1',
				ko: '2',
				sub: '5',
        dec: '4',
        kol: '1',
        subl: '1',
        decl: '3',
        strength: '40',
        speed: '100',
        stamina: '80',
        punching: '85',
        kicking: '80',
        wrestling: '60',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst4 = {
        code: 'wst4',
        rank: '3',
        first: 'YAN',
        last: 'XIAONAN',
        weight: '115',
        height: '5\'5\"',
        nation: 'CHINA',
        win: '17',
        loss: '3',
        strk: '2',
				ko: '8',
				sub: '0',
        dec: '9',
        kol: '1',
        subl: '1',
        decl: '1',
        strength: '85',
        speed: '85',
        stamina: '80',
        punching: '80',
        kicking: '70',
        wrestling: '60',
        grappling: '45',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst5 = {
        code: 'wst5',
        rank: '4',
        first: 'AMANDA',
        last: 'LEMOS',
        weight: '115',
        height: '5\'4\"',
        nation: 'BRAZIL',
        win: '13',
        loss: '2',
        strk: '2',
				ko: '8',
				sub: '3',
        dec: '2',
        kol: '1',
        subl: '1',
        decl: '0',
        strength: '70',
        speed: '75',
        stamina: '65',
        punching: '80',
        kicking: '50',
        wrestling: '65',
        grappling: '65',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst6 = {
        code: 'wst6',
        rank: '5',
        first: 'JESSICA',
        last: 'ANDRADE',
        weight: '115',
        height: '5\'2\"',
        nation: 'BRAZIL',
        win: '24',
        loss: '12',
        strk: '-2',
				ko: '9',
				sub: '8',
        dec: '7',
        kol: '5',
        subl: '4',
        decl: '3',
        strength: '90',
        speed: '80',
        stamina: '75',
        punching: '75',
        kicking: '55',
        wrestling: '65',
        grappling: '70',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst7 = {
        code: 'wst7',
        rank: '6',
        first: 'VIRNA',
        last: 'JANDIROBA',
        weight: '115',
        height: '5\'3\"',
        nation: 'BRAZIL',
        win: '19',
        loss: '3',
        strk: '2',
				ko: '1',
				sub: '13',
        dec: '5',
        kol: '0',
        subl: '0',
        decl: '3',
        strength: '50',
        speed: '60',
        stamina: '80',
        punching: '40',
        kicking: '45',
        wrestling: '70',
        grappling: '80',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst8 = {
        code: 'wst8',
        rank: '7',
        first: 'MACKENZIE',
        last: 'DERN',
        weight: '115',
        height: '5\'4\"',
        nation: 'USA',
        win: '13',
        loss: '3',
        strk: '1',
				ko: '0',
				sub: '7',
        dec: '6',
        kol: '0',
        subl: '0',
        decl: '3',
        strength: '55',
        speed: '55',
        stamina: '70',
        punching: '40',
        kicking: '40',
        wrestling: '65',
        grappling: '100',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst9 = {
        code: 'wst9',
        rank: '8',
        first: 'MARINA',
        last: 'RODRIGUEZ',
        weight: '115',
        height: '5\'7\"',
        nation: 'BRAZIL',
        win: '16',
        loss: '3',
        strk: '-2',
				ko: '6',
				sub: '1',
        dec: '9',
        kol: '1',
        subl: '0',
        decl: '2',
        strength: '60',
        speed: '75',
        stamina: '70',
        punching: '80',
        kicking: '65',
        wrestling: '55',
        grappling: '40',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst10 = {
        code: 'wst10',
        rank: '9',
        first: 'TECIA',
        last: 'TORRES',
        weight: '115',
        height: '5\'1\"',
        nation: 'USA',
        win: '13',
        loss: '6',
        strk: '-1',
				ko: '1',
				sub: '1',
        dec: '11',
        kol: '0',
        subl: '0',
        decl: '6',
        strength: '40',
        speed: '70',
        stamina: '75',
        punching: '55',
        kicking: '75',
        wrestling: '50',
        grappling: '60',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst11 = {
        code: 'wst11',
        rank: '10',
        first: 'TATIANA',
        last: 'SUAREZ',
        weight: '115',
        height: '5\'5\"',
        nation: 'USA',
        win: '10',
        loss: '0',
        strk: '10',
				ko: '2',
				sub: '5',
        dec: '3',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '60',
        speed: '55',
        stamina: '55',
        punching: '55',
        kicking: '45',
        wrestling: '95',
        grappling: '65',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst12 = {
        code: 'wst12',
        rank: '11',
        first: 'LUANA',
        last: 'PINHEIRO',
        weight: '115',
        height: '5\'2\"',
        nation: 'BRAZIL',
        win: '11',
        loss: '1',
        strk: '9',
				ko: '2',
				sub: '5',
        dec: '3',
        kol: '0',
        subl: '0',
        decl: '1',
        strength: '55',
        speed: '55',
        stamina: '55',
        punching: '55',
        kicking: '45',
        wrestling: '60',
        grappling: '75',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst13 = {
        code: 'wst13',
        rank: '12',
        first: 'MICHELLE',
        last: 'WATERSON',
        weight: '115',
        height: '5\'3\"',
        nation: 'USA',
        win: '18',
        loss: '11',
        strk: '-3',
				ko: '3',
				sub: '9',
        dec: '6',
        kol: '1',
        subl: '4',
        decl: '6',
        strength: '45',
        speed: '65',
        stamina: '55',
        punching: '55',
        kicking: '100',
        wrestling: '55',
        grappling: '70',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst14 = {
        code: 'wst14',
        rank: '13',
        first: 'TABATHA',
        last: 'RICCI',
        weight: '115',
        height: '5\'2\"',
        nation: 'BRAZIL',
        win: '9',
        loss: '1',
        strk: '4',
				ko: '1',
				sub: '3',
        dec: '5',
        kol: '1',
        subl: '0',
        decl: '0',
        strength: '50',
        speed: '50',
        stamina: '75',
        punching: '55',
        kicking: '45',
        wrestling: '60',
        grappling: '65',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst15 = {
        code: 'wst15',
        rank: '14',
        first: 'ANGELA',
        last: 'HILL',
        weight: '115',
        height: '5\'3\"',
        nation: 'USA',
        win: '15',
        loss: '13',
        strk: '-1',
				ko: '5',
				sub: '0',
        dec: '10',
        kol: '0',
        subl: '2',
        decl: '11',
        strength: '35',
        speed: '50',
        stamina: '55',
        punching: '65',
        kicking: '60',
        wrestling: '50',
        grappling: '40',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst16 = {
        code: 'wst16',
        rank: '15',
        first: 'KAROLINA',
        last: 'KOWALKIEWICZ',
        weight: '115',
        height: '5\'3\"',
        nation: 'POLAND',
        win: '15',
        loss: '7',
        strk: '3',
				ko: '1',
				sub: '3',
        dec: '11',
        kol: '1',
        subl: '2',
        decl: '4',
        strength: '35',
        speed: '60',
        stamina: '75',
        punching: '70',
        kicking: '50',
        wrestling: '40',
        grappling: '35',
        clinch: '55',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst17 = {
        code: 'wst17',
        rank: 'NR',
        first: 'GILLIAN',
        last: 'ROBERTSON',
        weight: '115',
        height: '5\'5\"',
        nation: 'CANADA',
        win: '12',
        loss: '8',
        strk: '-1',
				ko: '1',
				sub: '9',
        dec: '2',
        kol: '1',
        subl: '1',
        decl: '6',
        strength: '40',
        speed: '55',
        stamina: '45',
        punching: '45',
        kicking: '35',
        wrestling: '65',
        grappling: '80',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst18 = {
        code: 'wst18',
        rank: 'NR',
        first: 'POLYANA',
        last: 'VIENA',
        weight: '115',
        height: '5\'5\"',
        nation: 'BRAZIL',
        win: '13',
        loss: '5',
        strk: '1',
				ko: '5',
				sub: '8',
        dec: '0',
        kol: '0',
        subl: '1',
        decl: '4',
        strength: '65',
        speed: '65',
        stamina: '40',
        punching: '60',
        kicking: '45',
        wrestling: '65',
        grappling: '80',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst19 = {
        code: 'wst19',
        rank: 'NR',
        first: 'CHEYENNE',
        last: 'VLISMAS',
        weight: '115',
        height: '5\'3\"',
        nation: 'USA',
        win: '7',
        loss: '3',
        strk: '-1',
				ko: '2',
				sub: '0',
        dec: '5',
        kol: '0',
        subl: '0',
        decl: '3',
        strength: '45',
        speed: '60',
        stamina: '55',
        punching: '70',
        kicking: '55',
        wrestling: '40',
        grappling: '30',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst20 = {
        code: 'wst20',
        rank: 'NR',
        first: 'YAZMIN',
        last: 'JAUREGUI',
        weight: '115',
        height: '5\'3\"',
        nation: 'MEXICO',
        win: '10',
        loss: '1',
        strk: '-1',
				ko: '7',
				sub: '0',
        dec: '3',
        kol: '1',
        subl: '0',
        decl: '0',
        strength: '70',
        speed: '70',
        stamina: '70',
        punching: '80',
        kicking: '50',
        wrestling: '60',
        grappling: '40',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst21 = {
        code: 'wst21',
        rank: 'NR',
        first: 'LOMA',
        last: 'LOOKBOONMEE',
        weight: '115',
        height: '5\'1\"',
        nation: 'THAILAND',
        win: '8',
        loss: '3',
        strk: '2',
				ko: '1',
				sub: '1',
        dec: '6',
        kol: '0',
        subl: '1',
        decl: '2',
        strength: '55',
        speed: '55',
        stamina: '55',
        punching: '60',
        kicking: '60',
        wrestling: '50',
        grappling: '50',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst22 = {
        code: 'wst22',
        rank: 'NR',
        first: 'LUPITA',
        last: 'GODINEZ',
        weight: '115',
        height: '5\'2\"',
        nation: 'MEXICO',
        win: '10',
        loss: '3',
        strk: '2',
				ko: '0',
				sub: '2',
        dec: '8',
        kol: '0',
        subl: '0',
        decl: '3',
        strength: '40',
        speed: '55',
        stamina: '70',
        punching: '65',
        kicking: '35',
        wrestling: '40',
        grappling: '45',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst23 = {
        code: 'wst23',
        rank: 'NR',
        first: 'VANESSA',
        last: 'DEMOPOULOS',
        weight: '115',
        height: '5\'2\"',
        nation: 'GREECE',
        win: '9',
        loss: '5',
        strk: '-1',
				ko: '1',
				sub: '4',
        dec: '4',
        kol: '0',
        subl: '0',
        decl: '5',
        strength: '45',
        speed: '50',
        stamina: '50',
        punching: '50',
        kicking: '40',
        wrestling: '50',
        grappling: '60',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wst24 = {
        code: 'wst24',
        rank: 'NR',
        first: 'DIANA',
        last: 'BELBITA',
        weight: '115',
        height: '5\'7\"',
        nation: 'ROMANIA',
        win: '15',
        loss: '7',
        strk: '1',
				ko: '6',
				sub: '4',
        dec: '5',
        kol: '0',
        subl: '4',
        decl: '3',
        strength: '60',
        speed: '55',
        stamina: '55',
        punching: '60',
        kicking: '50',
        wrestling: '60',
        grappling: '60',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl1 = {
        code: 'wfl1',
        rank: 'C',
        first: 'ALEXA',
        last: 'GRASSO',
        weight: '125',
        height: '5\'5\"',
        nation: 'MEXICO',
        win: '16',
        loss: '3',
        strk: '5',
				ko: '4',
				sub: '2',
        dec: '10',
        kol: '0',
        subl: '1',
        decl: '2',
        strength: '65',
        speed: '80',
        stamina: '80',
        punching: '100',
        kicking: '55',
        wrestling: '65',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let wfl2 = {
        code: 'wfl2',
        rank: '1',
        first: 'VALENTINA',
        last: 'SHEVCHENKO',
        weight: '125',
        height: '5\'5\"',
        nation: 'KYRGYZSTAN',
        win: '23',
        loss: '4',
        strk: '-1',
				ko: '8',
				sub: '7',
        dec: '8',
        kol: '1',
        subl: '1',
        decl: '2',
        strength: '80',
        speed: '80',
        stamina: '80',
        punching: '90',
        kicking: '85',
        wrestling: '80',
        grappling: '70',
        clinch: '80',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let wfl3 = {
        code: 'wfl3',
        rank: '2',
        first: 'MANON',
        last: 'FIOROT',
        weight: '125',
        height: '5\'7\"',
        nation: 'FRANCE',
        win: '10',
        loss: '1',
        strk: '10',
				ko: '6',
				sub: '0',
        dec: '4',
        kol: '0',
        subl: '0',
        decl: '1',
        strength: '60',
        speed: '60',
        stamina: '60',
        punching: '80',
        kicking: '75',
        wrestling: '60',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl4 = {
        code: 'wfl4',
        rank: '3',
        first: 'ERIN',
        last: 'BLANCHFIELD',
        weight: '125',
        height: '5\'4\"',
        nation: 'USA',
        win: '11',
        loss: '1',
        strk: '8',
				ko: '2',
				sub: '4',
        dec: '5',
        kol: '0',
        subl: '0',
        decl: '1',
        strength: '60',
        speed: '60',
        stamina: '60',
        punching: '60',
        kicking: '50',
        wrestling: '65',
        grappling: '90',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl5 = {
        code: 'wfl5',
        rank: '4',
        first: 'TAILA',
        last: 'SANTOS',
        weight: '125',
        height: '5\'6\"',
        nation: 'BRAZIL',
        win: '19',
        loss: '2',
        strk: '-1',
				ko: '10',
				sub: '3',
        dec: '6',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '80',
        speed: '60',
        stamina: '65',
        punching: '65',
        kicking: '50',
        wrestling: '75',
        grappling: '80',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl6 = {
        code: 'wfl6',
        rank: '5',
        first: 'KATLYN',
        last: 'CHOOKAGIAN',
        weight: '125',
        height: '5\'9\"',
        nation: 'USA',
        win: '18',
        loss: '5',
        strk: '-1',
				ko: '2',
				sub: '1',
        dec: '15',
        kol: '2',
        subl: '0',
        decl: '3',
        strength: '35',
        speed: '75',
        stamina: '85',
        punching: '80',
        kicking: '70',
        wrestling: '60',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl7 = {
        code: 'wfl7',
        rank: '6',
        first: 'LAUREN',
        last: 'MURPHY',
        weight: '125',
        height: '5\'5\"',
        nation: 'USA',
        win: '16',
        loss: '6',
        strk: '-1',
				ko: '8',
				sub: '1',
        dec: '7',
        kol: '1',
        subl: '0',
        decl: '5',
        strength: '60',
        speed: '50',
        stamina: '70',
        punching: '60',
        kicking: '45',
        wrestling: '60',
        grappling: '40',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl8 = {
        code: 'wfl8',
        rank: '7',
        first: 'MAYCEE',
        last: 'BARBER',
        weight: '125',
        height: '5\'5\"',
        nation: 'USA',
        win: '13',
        loss: '2',
        strk: '5',
				ko: '6',
				sub: '2',
        dec: '5',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '60',
        speed: '60',
        stamina: '60',
        punching: '75',
        kicking: '50',
        wrestling: '60',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl9 = {
        code: 'wfl9',
        rank: '8',
        first: 'JENNIFER',
        last: 'MAIA',
        weight: '125',
        height: '5\'4\"',
        nation: 'BRAZIL',
        win: '21',
        loss: '9',
        strk: '2',
				ko: '4',
				sub: '5',
        dec: '12',
        kol: '1',
        subl: '1',
        decl: '7',
        strength: '55',
        speed: '55',
        stamina: '55',
        punching: '60',
        kicking: '60',
        wrestling: '55',
        grappling: '55',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl10 = {
        code: 'wfl10',
        rank: '9',
        first: 'VIVIANE',
        last: 'ARAUJO',
        weight: '125',
        height: '5\'5\"',
        nation: 'BRAZIL',
        win: '11',
        loss: '5',
        strk: '-2',
				ko: '3',
				sub: '4',
        dec: '4',
        kol: '1',
        subl: '0',
        decl: '4',
        strength: '55',
        speed: '55',
        stamina: '55',
        punching: '55',
        kicking: '45',
        wrestling: '60',
        grappling: '75',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl11 = {
        code: 'wfl11',
        rank: '10',
        first: 'AMANDA',
        last: 'RIBAS',
        weight: '125',
        height: '5\'4\"',
        nation: 'BRAZIL',
        win: '12',
        loss: '4',
        strk: '-1',
				ko: '3',
				sub: '4',
        dec: '5',
        kol: '3',
        subl: '0',
        decl: '1',
        strength: '55',
        speed: '55',
        stamina: '55',
        punching: '55',
        kicking: '45',
        wrestling: '60',
        grappling: '80',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl12 = {
        code: 'wfl12',
        rank: '11',
        first: 'CASEY',
        last: 'O\'NEILL',
        weight: '125',
        height: '5\'6\"',
        nation: 'SCOTLAND',
        win: '9',
        loss: '1',
        strk: '-1',
				ko: '3',
				sub: '2',
        dec: '4',
        kol: '0',
        subl: '0',
        decl: '1',
        strength: '60',
        speed: '60',
        stamina: '55',
        punching: '65',
        kicking: '55',
        wrestling: '60',
        grappling: '55',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl13 = {
        code: 'wfl13',
        rank: '12',
        first: 'ANDREA',
        last: 'LEE',
        weight: '125',
        height: '5\'7\"',
        nation: 'USA',
        win: '13',
        loss: '7',
        strk: '-2',
				ko: '3',
				sub: '5',
        dec: '5',
        kol: '0',
        subl: '1',
        decl: '6',
        strength: '50',
        speed: '60',
        stamina: '45',
        punching: '70',
        kicking: '60',
        wrestling: '60',
        grappling: '60',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl14 = {
        code: 'wfl14',
        rank: '13',
        first: 'TRACY',
        last: 'CORTEZ',
        weight: '125',
        height: '5\'5\"',
        nation: 'USA',
        win: '10',
        loss: '1',
        strk: '10',
				ko: '1',
				sub: '1',
        dec: '8',
        kol: '0',
        subl: '1',
        decl: '0',
        strength: '35',
        speed: '55',
        stamina: '50',
        punching: '55',
        kicking: '45',
        wrestling: '60',
        grappling: '75',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl15 = {
        code: 'wfl15',
        rank: '14',
        first: 'JASMINE',
        last: 'JASUDAVICIUS',
        weight: '125',
        height: '5\'7\"',
        nation: 'CANADA',
        win: '9',
        loss: '2',
        strk: '2',
				ko: '2',
				sub: '1',
        dec: '6',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '60',
        speed: '50',
        stamina: '65',
        punching: '50',
        kicking: '45',
        wrestling: '60',
        grappling: '45',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl16 = {
        code: 'wfl16',
        rank: '15',
        first: 'MIRANDA',
        last: 'MAVERICK',
        weight: '125',
        height: '5\'3\"',
        nation: 'USA',
        win: '12',
        loss: '5',
        strk: '1',
				ko: '1',
				sub: '7',
        dec: '4',
        kol: '0',
        subl: '0',
        decl: '5',
        strength: '65',
        speed: '55',
        stamina: '55',
        punching: '45',
        kicking: '45',
        wrestling: '65',
        grappling: '80',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl17 = {
        code: 'wfl17',
        rank: 'NR',
        first: 'NATALIA',
        last: 'SILVA',
        weight: '125',
        height: '5\'4\"',
        nation: 'BRAZIL',
        win: '15',
        loss: '5',
        strk: '9',
				ko: '5',
				sub: '7',
        dec: '2',
        kol: '1',
        subl: '2',
        decl: '2',
        strength: '65',
        speed: '60',
        stamina: '50',
        punching: '65',
        kicking: '60',
        wrestling: '60',
        grappling: '80',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl18 = {
        code: 'wfl18',
        rank: 'NR',
        first: 'JOANNE',
        last: 'WOOD',
        weight: '125',
        height: '5\'6\"',
        nation: 'SCOTLAND',
        win: '16',
        loss: '8',
        strk: '1',
				ko: '5',
				sub: '1',
        dec: '10',
        kol: '0',
        subl: '5',
        decl: '3',
        strength: '45',
        speed: '50',
        stamina: '60',
        punching: '50',
        kicking: '40',
        wrestling: '45',
        grappling: '40',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl19 = {
        code: 'wfl19',
        rank: 'NR',
        first: 'MARYNA',
        last: 'MOROZ',
        weight: '125',
        height: '5\'7\"',
        nation: 'UKRAINE',
        win: '11',
        loss: '4',
        strk: '-1',
				ko: '1',
				sub: '6',
        dec: '4',
        kol: '0',
        subl: '0',
        decl: '4',
        strength: '45',
        speed: '55',
        stamina: '50',
        punching: '60',
        kicking: '40',
        wrestling: '60',
        grappling: '75',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl20 = {
        code: 'wfl20',
        rank: 'NR',
        first: 'KARINE',
        last: 'SILVA',
        weight: '125',
        height: '5\'5\"',
        nation: 'BRAZIL',
        win: '16',
        loss: '4',
        strk: '7',
				ko: '8',
				sub: '8',
        dec: '0',
        kol: '1',
        subl: '2',
        decl: '1',
        strength: '70',
        speed: '60',
        stamina: '50',
        punching: '55',
        kicking: '50',
        wrestling: '70',
        grappling: '85',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl21 = {
        code: 'wfl21',
        rank: 'NR',
        first: 'MOLLY',
        last: 'MCCANN',
        weight: '125',
        height: '5\'4\"',
        nation: 'ENGLAND',
        win: '13',
        loss: '6',
        strk: '-2',
				ko: '6',
				sub: '0',
        dec: '7',
        kol: '0',
        subl: '3',
        decl: '3',
        strength: '60',
        speed: '60',
        stamina: '50',
        punching: '65',
        kicking: '50',
        wrestling: '45',
        grappling: '35',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl22 = {
        code: 'wf;22',
        rank: 'NR',
        first: 'ARIANE',
        last: 'LIPSKI',
        weight: '125',
        height: '5\'6\"',
        nation: 'BRAZIL',
        win: '16',
        loss: '8',
        strk: '2',
				ko: '6',
				sub: '3',
        dec: '7',
        kol: '4',
        subl: '0',
        decl: '4',
        strength: '60',
        speed: '55',
        stamina: '60',
        punching: '60',
        kicking: '50',
        wrestling: '50',
        grappling: '60',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl23 = {
        code: 'wfl23',
        rank: 'NR',
        first: 'MONTANA',
        last: 'DE LA ROSA',
        weight: '125',
        height: '5\'7\"',
        nation: 'USA',
        win: '12',
        loss: '8',
        strk: '-2',
				ko: '1',
				sub: '8',
        dec: '3',
        kol: '1',
        subl: '2',
        decl: '5',
        strength: '40',
        speed: '50',
        stamina: '50',
        punching: '50',
        kicking: '40',
        wrestling: '55',
        grappling: '80',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wfl24 = {
        code: 'wfl24',
        rank: 'NR',
        first: 'ANTONINA',
        last: 'SHEVCHENKO',
        weight: '125',
        height: '5\'8\"',
        nation: 'KYRGYZSTAN',
        win: '10',
        loss: '4',
        strk: '1',
				ko: '3',
				sub: '1',
        dec: '6',
        kol: '1',
        subl: '1',
        decl: '2',
        strength: '55',
        speed: '60',
        stamina: '60',
        punching: '70',
        kicking: '65',
        wrestling: '50',
        grappling: '50',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba1 = {
        code: 'wba1',
        rank: 'C',
        first: 'AMANDA',
        last: 'NUNES',
        weight: '135',
        height: '5\'8\"',
        nation: 'BRAZIL',
        win: '23',
        loss: '5',
        strk: '2',
				ko: '13',
				sub: '4',
        dec: '6',
        kol: '2',
        subl: '2',
        decl: '1',
        strength: '90',
        speed: '80',
        stamina: '80',
        punching: '85',
        kicking: '60',
        wrestling: '75',
        grappling: '75',
        clinch: '75',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: ''
      }
      
      let wba2 = {
        code: 'wba2',
        rank: '1',
        first: 'JULIANNA',
        last: 'PENA',
        weight: '135',
        height: '5\'7\"',
        nation: 'USA',
        win: '11',
        loss: '5',
        strk: '-1',
				ko: '3',
				sub: '5',
        dec: '3',
        kol: '1',
        subl: '2',
        decl: '2',
        strength: '65',
        speed: '65',
        stamina: '65',
        punching: '65',
        kicking: '50',
        wrestling: '70',
        grappling: '80',
        clinch: '60',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba3 = {
        code: 'wba3',
        rank: '2',
        first: 'RAQUEL',
        last: 'PENNINGTON',
        weight: '135',
        height: '5\'7\"',
        nation: 'USA',
        win: '15',
        loss: '8',
        strk: '5',
				ko: '1',
				sub: '4',
        dec: '10',
        kol: '1',
        subl: '1',
        decl: '6',
        strength: '60',
        speed: '60',
        stamina: '80',
        punching: '60',
        kicking: '50',
        wrestling: '60',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba4 = {
        code: 'wba4',
        rank: '3',
        first: 'MAYRA',
        last: 'BUENO SILVA',
        weight: '135',
        height: '5\'7\"',
        nation: 'BRAZIL',
        win: '11',
        loss: '2',
        strk: '4',
				ko: '1',
				sub: '8',
        dec: '2',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '60',
        speed: '60',
        stamina: '60',
        punching: '60',
        kicking: '50',
      wrestling: '60',
        grappling: '90',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba5 = {
        code: 'wba5',
        rank: '4',
        first: 'KETLEN',
        last: 'VIERA',
        weight: '135',
        height: '5\'8\"',
        nation: 'BRAZIL',
        win: '14',
        loss: '3',
        strk: '1',
				ko: '2',
				sub: '4',
        dec: '8',
        kol: '1',
        subl: '0',
        decl: '2',
        strength: '80',
        speed: '60',
        stamina: '65',
        punching: '60',
        kicking: '50',
        wrestling: '80',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba6 = {
        code: 'wba6',
        rank: '5',
        first: 'IRENE',
        last: 'ALDANA',
        weight: '135',
        height: '5\'9\"',
        nation: 'MEXICO',
        win: '14',
        loss: '7',
        strk: '-1',
				ko: '8',
				sub: '3',
        dec: '3',
        kol: '2',
        subl: '0',
        decl: '5',
        strength: '85',
        speed: '60',
        stamina: '55',
        punching: '80',
        kicking: '50',
        wrestling: '55',
        grappling: '60',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba7 = {
        code: 'wba7',
        rank: '6',
        first: 'HOLLY',
        last: 'HOLM',
        weight: '135',
        height: '5\'8\"',
        nation: 'USA',
        win: '15',
        loss: '7',
        strk: '-1',
				ko: '8',
				sub: '0',
        dec: '7',
        kol: '1',
        subl: '2',
        decl: '4',
        strength: '60',
        speed: '75',
        stamina: '85',
        punching: '85',
        kicking: '70',
        wrestling: '60',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba8 = {
        code: 'wba8',
        rank: '7',
        first: 'PANNIE',
        last: 'KIANZAD',
        weight: '135',
        height: '5\'7\"',
        nation: 'SWEDEN',
        win: '16',
        loss: '7',
        strk: '-1',
				ko: '3',
				sub: '0',
        dec: '13',
        kol: '1',
        subl: '2',
        decl: '4',
        strength: '55',
        speed: '60',
        stamina: '65',
        punching: '75',
        kicking: '50',
        wrestling: '55',
        grappling: '55',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba9 = {
        code: 'wba9',
        rank: '8',
        first: 'YANA',
        last: 'SANTOS',
        weight: '135',
        height: '5\'8\"',
        nation: 'RUSSIA',
        win: '14',
        loss: '8',
        strk: '-3',
				ko: '7',
				sub: '1',
        dec: '6',
        kol: '3',
        subl: '2',
        decl: '3',
        strength: '60',
        speed: '65',
        stamina: '75',
        punching: '70',
        kicking: '70',
        wrestling: '55',
        grappling: '45',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba10 = {
        code: 'wba10',
        rank: '9',
        first: 'KAROL',
        last: 'ROSA',
        weight: '135',
        height: '5\'7\"',
        nation: 'BRAZIL',
        win: '17',
        loss: '5',
        strk: '1',
				ko: '4',
				sub: '2',
        dec: '11',
        kol: '0',
        subl: '2',
        decl: '3',
        strength: '75',
        speed: '55',
        stamina: '60',
        punching: '60',
        kicking: '50',
        wrestling: '55',
        grappling: '45',
        clinch: '65',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba11 = {
        code: 'wba11',
        rank: '10',
        first: 'MACY',
        last: 'CHIASSON',
        weight: '135',
        height: '5\'11\"',
        nation: 'USA',
        win: '8',
        loss: '3',
        strk: '-1',
				ko: '2',
				sub: '2',
        dec: '4',
        kol: '1',
        subl: '1',
        decl: '1',
        strength: '70',
        speed: '55',
        stamina: '55',
        punching: '60',
        kicking: '45',
        wrestling: '55',
        grappling: '45',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba12 = {
        code: 'wba12',
        rank: '11',
        first: 'NORMA',
        last: 'DUMONT',
        weight: '135',
        height: '5\'7\"',
        nation: 'BRAZIL',
        win: '10',
        loss: '2',
        strk: '3',
				ko: '0',
				sub: '2',
        dec: '8',
        kol: '1',
        subl: '0',
        decl: '1',
        strength: '75',
        speed: '55',
        stamina: '60',
        punching: '60',
        kicking: '45',
        wrestling: '60',
        grappling: '55',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba13 = {
        code: 'wba13',
        rank: '12',
        first: 'MIESHA',
        last: 'TATE',
        weight: '135',
        height: '5\'6\"',
        nation: 'USA',
        win: '19',
        loss: '9',
        strk: '-2',
				ko: '4',
				sub: '7',
        dec: '8',
        kol: '2',
        subl: '3',
        decl: '4',
        strength: '50',
        speed: '50',
        stamina: '55',
        punching: '50',
        kicking: '45',
        wrestling: '60',
        grappling: '75',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba14 = {
        code: 'wba14',
        rank: '13',
        first: 'JULIA',
        last: 'AVILA',
        weight: '135',
        height: '5\'7\"',
        nation: 'USA',
        win: '9',
        loss: '2',
        strk: '1',
				ko: '4',
				sub: '2',
        dec: '3',
        kol: '1',
        subl: '0',
        decl: '1',
        strength: '60',
        speed: '50',
        stamina: '50',
        punching: '60',
        kicking: '45',
        wrestling: '50',
        grappling: '50',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba15 = {
        code: 'wba15',
        rank: '14',
        first: 'JOSIANE',
        last: 'NUNES',
        weight: '135',
        height: '5\'2\"',
        nation: 'BRAZIL',
        win: '10',
        loss: '1',
        strk: '9',
				ko: '7',
				sub: '0',
        dec: '3',
        kol: '0',
        subl: '0',
        decl: '1',
        strength: '90',
        speed: '75',
        stamina: '70',
        punching: '75',
        kicking: '45',
        wrestling: '55',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba16 = {
        code: 'wba16',
        rank: '15',
        first: 'CHELSEA',
        last: 'CHANDLER',
        weight: '135',
        height: '5\'8\"',
        nation: 'USA',
        win: '5',
        loss: '2',
        strk: '-1',
				ko: '2',
				sub: '1',
        dec: '2',
        kol: '0',
        subl: '0',
        decl: '2',
        strength: '65',
        speed: '45',
        stamina: '50',
        punching: '50',
        kicking: '45',
        wrestling: '50',
        grappling: '70',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba17 = {
        code: 'wba17',
        rank: 'NR',
        first: 'AILIN',
        last: 'PEREZ',
        weight: '135',
        height: '5\'5\"',
        nation: 'ARGENTINA',
        win: '8',
        loss: '2',
        strk: '1',
				ko: '4',
				sub: '1',
        dec: '3',
        kol: '0',
        subl: '1',
        decl: '0',
        strength: '50',
        speed: '50',
        stamina: '50',
        punching: '60',
        kicking: '40',
        wrestling: '60',
        grappling: '45',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba18 = {
        code: 'wba18',
        rank: 'NR',
        first: 'HAILEY',
        last: 'COWAN',
        weight: '135',
        height: '5\'8\"',
        nation: 'USA',
        win: '7',
        loss: '3',
        strk: '-1',
				ko: '2',
				sub: '2',
        dec: '3',
        kol: '0',
        subl: '2',
        decl: '1',
        strength: '50',
        speed: '50',
        stamina: '50',
        punching: '50',
        kicking: '40',
        wrestling: '50',
        grappling: '40',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba19 = {
        code: 'wba19',
        rank: 'NR',
        first: 'JAMEY-LYN',
        last: 'HORTH',
        weight: '135',
        height: '5\'7\"',
        nation: 'CANADA',
        win: '6',
        loss: '0',
        strk: '6',
				ko: '3',
				sub: '2',
        dec: '1',
        kol: '0',
        subl: '0',
        decl: '0',
        strength: '60',
        speed: '50',
        stamina: '50',
        punching: '60',
        kicking: '60',
        wrestling: '50',
        grappling: '50',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba20 = {
        code: 'wba20',
        rank: 'NR',
        first: 'IRINA',
        last: 'ALEKSEEVA',
        weight: '135',
        height: '5\'8\"',
        nation: 'RUSSIA',
        win: '5',
        loss: '1',
        strk: '2',
				ko: '1',
				sub: '2',
        dec: '2',
        kol: '0',
        subl: '0',
        decl: '1',
        strength: '60',
        speed: '55',
        stamina: '50',
        punching: '50',
        kicking: '40',
        wrestling: '60',
        grappling: '60',
        clinch: '50',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba21 = {
        code: 'wba21',
        rank: 'NR',
        first: 'TAMIRES',
        last: 'VIDAL',
        weight: '135',
        height: '5\'6\"',
        nation: 'BRAZIL',
        win: '7',
        loss: '1',
        strk: '6',
				ko: '1',
				sub: '2',
        dec: '3',
        kol: '0',
        subl: '1',
        decl: '0',
        strength: '60',
        speed: '55',
        stamina: '50',
        punching: '55',
        kicking: '40',
        wrestling: '50',
        grappling: '50',
        clinch: '45',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba22 = {
        code: 'wba22',
        rank: 'NR',
        first: 'LUCIE',
        last: 'PUDILOVA',
        weight: '135',
        height: '5\'8\"',
        nation: 'CZECH REPUBLIC',
        win: '14',
        loss: '8',
        strk: '-1',
				ko: '3',
				sub: '2',
        dec: '9',
        kol: '0',
        subl: '1',
        decl: '7',
        strength: '50',
        speed: '50',
        stamina: '60',
        punching: '60',
        kicking: '50',
        wrestling: '55',
        grappling: '45',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba23 = {
        code: 'wba23',
        rank: 'NR',
        first: 'JOSELYNE',
        last: 'EDWARDS',
        weight: '135',
        height: '5\'8\"',
        nation: 'PANAMA',
        win: '13',
        loss: '4',
        strk: '3',
				ko: '5',
				sub: '3',
        dec: '5',
        kol: '0',
        subl: '1',
        decl: '3',
        strength: '55',
        speed: '50',
        stamina: '50',
        punching: '55',
        kicking: '40',
        wrestling: '50',
        grappling: '40',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }
      
      let wba24 = {
        code: 'wba24',
        rank: 'NR',
        first: 'STEPHANIE',
        last: 'EGGER',
        weight: '135',
        height: '5\'6\"',
        nation: 'SWITZERLAND',
        win: '8',
        loss: '4',
        strk: '-1',
				ko: '3',
				sub: '4',
        dec: '1',
        kol: '0',
        subl: '2',
        decl: '2',
        strength: '55',
        speed: '50',
        stamina: '45',
        punching: '50',
        kicking: '40',
        wrestling: '60',
        grappling: '50',
        clinch: '40',
				rate: '',
        meth: '',
        prev: '',
        lastf: '',
        nextf: '',
        p4p: '0'
      }

      sessionStorage.setItem('fly1', JSON.stringify(fly1));
      sessionStorage.setItem('fly2', JSON.stringify(fly2));
      sessionStorage.setItem('fly3', JSON.stringify(fly3));
      sessionStorage.setItem('fly4', JSON.stringify(fly4));
      sessionStorage.setItem('fly5', JSON.stringify(fly5));
      sessionStorage.setItem('fly6', JSON.stringify(fly6));
      sessionStorage.setItem('fly7', JSON.stringify(fly7));
      sessionStorage.setItem('fly8', JSON.stringify(fly8));
      sessionStorage.setItem('fly9', JSON.stringify(fly9));
      sessionStorage.setItem('fly10', JSON.stringify(fly10));
      sessionStorage.setItem('fly11', JSON.stringify(fly11));
      sessionStorage.setItem('fly12', JSON.stringify(fly12));
      sessionStorage.setItem('fly13', JSON.stringify(fly13));
      sessionStorage.setItem('fly14', JSON.stringify(fly14));
      sessionStorage.setItem('fly15', JSON.stringify(fly15));
      sessionStorage.setItem('fly16', JSON.stringify(fly16));
      sessionStorage.setItem('fly17', JSON.stringify(fly17));
      sessionStorage.setItem('fly18', JSON.stringify(fly18));
      sessionStorage.setItem('fly19', JSON.stringify(fly19));
      sessionStorage.setItem('fly20', JSON.stringify(fly20));
      sessionStorage.setItem('fly21', JSON.stringify(fly21));
      sessionStorage.setItem('fly22', JSON.stringify(fly22));
      sessionStorage.setItem('fly23', JSON.stringify(fly23));
      sessionStorage.setItem('fly24', JSON.stringify(fly24));
      sessionStorage.setItem('ban1', JSON.stringify(ban1));
      sessionStorage.setItem('ban2', JSON.stringify(ban2));
      sessionStorage.setItem('ban3', JSON.stringify(ban3));
      sessionStorage.setItem('ban4', JSON.stringify(ban4));
      sessionStorage.setItem('ban5', JSON.stringify(ban5));
      sessionStorage.setItem('ban6', JSON.stringify(ban6));
      sessionStorage.setItem('ban7', JSON.stringify(ban7));
      sessionStorage.setItem('ban8', JSON.stringify(ban8));
      sessionStorage.setItem('ban9', JSON.stringify(ban9));
      sessionStorage.setItem('ban10', JSON.stringify(ban10));
      sessionStorage.setItem('ban11', JSON.stringify(ban11));
      sessionStorage.setItem('ban12', JSON.stringify(ban12));
      sessionStorage.setItem('ban13', JSON.stringify(ban13));
      sessionStorage.setItem('ban14', JSON.stringify(ban14));
      sessionStorage.setItem('ban15', JSON.stringify(ban15));
      sessionStorage.setItem('ban16', JSON.stringify(ban16));
      sessionStorage.setItem('ban17', JSON.stringify(ban17));
      sessionStorage.setItem('ban18', JSON.stringify(ban18));
      sessionStorage.setItem('ban19', JSON.stringify(ban19));
      sessionStorage.setItem('ban20', JSON.stringify(ban20));
      sessionStorage.setItem('ban21', JSON.stringify(ban21));
      sessionStorage.setItem('ban22', JSON.stringify(ban22));
      sessionStorage.setItem('ban23', JSON.stringify(ban23));
      sessionStorage.setItem('ban24', JSON.stringify(ban24));
      sessionStorage.setItem('fea1', JSON.stringify(fea1));
      sessionStorage.setItem('fea2', JSON.stringify(fea2));
      sessionStorage.setItem('fea3', JSON.stringify(fea3));
      sessionStorage.setItem('fea4', JSON.stringify(fea4));
      sessionStorage.setItem('fea5', JSON.stringify(fea5));
      sessionStorage.setItem('fea6', JSON.stringify(fea6));
      sessionStorage.setItem('fea7', JSON.stringify(fea7));
      sessionStorage.setItem('fea8', JSON.stringify(fea8));
      sessionStorage.setItem('fea9', JSON.stringify(fea9));
      sessionStorage.setItem('fea10', JSON.stringify(fea10));
      sessionStorage.setItem('fea11', JSON.stringify(fea11));
      sessionStorage.setItem('fea12', JSON.stringify(fea12));
      sessionStorage.setItem('fea13', JSON.stringify(fea13));
      sessionStorage.setItem('fea14', JSON.stringify(fea14));
      sessionStorage.setItem('fea15', JSON.stringify(fea15));
      sessionStorage.setItem('fea16', JSON.stringify(fea16));
      sessionStorage.setItem('fea17', JSON.stringify(fea17));
      sessionStorage.setItem('fea18', JSON.stringify(fea18));
      sessionStorage.setItem('fea19', JSON.stringify(fea19));
      sessionStorage.setItem('fea20', JSON.stringify(fea20));
      sessionStorage.setItem('fea21', JSON.stringify(fea21));
      sessionStorage.setItem('fea22', JSON.stringify(fea22));
      sessionStorage.setItem('fea23', JSON.stringify(fea23));
      sessionStorage.setItem('fea24', JSON.stringify(fea24));
      sessionStorage.setItem('lig1', JSON.stringify(lig1));
      sessionStorage.setItem('lig2', JSON.stringify(lig2));
      sessionStorage.setItem('lig3', JSON.stringify(lig3));
      sessionStorage.setItem('lig4', JSON.stringify(lig4));
      sessionStorage.setItem('lig5', JSON.stringify(lig5));
      sessionStorage.setItem('lig6', JSON.stringify(lig6));
      sessionStorage.setItem('lig7', JSON.stringify(lig7));
      sessionStorage.setItem('lig8', JSON.stringify(lig8));
      sessionStorage.setItem('lig9', JSON.stringify(lig9));
      sessionStorage.setItem('lig10', JSON.stringify(lig10));
      sessionStorage.setItem('lig11', JSON.stringify(lig11));
      sessionStorage.setItem('lig12', JSON.stringify(lig12));
      sessionStorage.setItem('lig13', JSON.stringify(lig13));
      sessionStorage.setItem('lig14', JSON.stringify(lig14));
      sessionStorage.setItem('lig15', JSON.stringify(lig15));
      sessionStorage.setItem('lig16', JSON.stringify(lig16));
      sessionStorage.setItem('lig17', JSON.stringify(lig17));
      sessionStorage.setItem('lig18', JSON.stringify(lig18));
      sessionStorage.setItem('lig19', JSON.stringify(lig19));
      sessionStorage.setItem('lig20', JSON.stringify(lig20));
      sessionStorage.setItem('lig21', JSON.stringify(lig21));
      sessionStorage.setItem('lig22', JSON.stringify(lig22));
      sessionStorage.setItem('lig23', JSON.stringify(lig23));
      sessionStorage.setItem('lig24', JSON.stringify(lig24));
      sessionStorage.setItem('wel1', JSON.stringify(wel1));
      sessionStorage.setItem('wel2', JSON.stringify(wel2));
      sessionStorage.setItem('wel3', JSON.stringify(wel3));
      sessionStorage.setItem('wel4', JSON.stringify(wel4));
      sessionStorage.setItem('wel5', JSON.stringify(wel5));
      sessionStorage.setItem('wel6', JSON.stringify(wel6));
      sessionStorage.setItem('wel7', JSON.stringify(wel7));
      sessionStorage.setItem('wel8', JSON.stringify(wel8));
      sessionStorage.setItem('wel9', JSON.stringify(wel9));
      sessionStorage.setItem('wel10', JSON.stringify(wel10));
      sessionStorage.setItem('wel11', JSON.stringify(wel11));
      sessionStorage.setItem('wel12', JSON.stringify(wel12));
      sessionStorage.setItem('wel13', JSON.stringify(wel13));
      sessionStorage.setItem('wel14', JSON.stringify(wel14));
      sessionStorage.setItem('wel15', JSON.stringify(wel15));
      sessionStorage.setItem('wel16', JSON.stringify(wel16));
      sessionStorage.setItem('wel17', JSON.stringify(wel17));
      sessionStorage.setItem('wel18', JSON.stringify(wel18));
      sessionStorage.setItem('wel19', JSON.stringify(wel19));
      sessionStorage.setItem('wel20', JSON.stringify(wel20));
      sessionStorage.setItem('wel21', JSON.stringify(wel21));
      sessionStorage.setItem('wel22', JSON.stringify(wel22));
      sessionStorage.setItem('wel23', JSON.stringify(wel23));
      sessionStorage.setItem('wel24', JSON.stringify(wel24));
      sessionStorage.setItem('mid1', JSON.stringify(mid1));
      sessionStorage.setItem('mid2', JSON.stringify(mid2));
      sessionStorage.setItem('mid3', JSON.stringify(mid3));
      sessionStorage.setItem('mid4', JSON.stringify(mid4));
      sessionStorage.setItem('mid5', JSON.stringify(mid5));
      sessionStorage.setItem('mid6', JSON.stringify(mid6));
      sessionStorage.setItem('mid7', JSON.stringify(mid7));
      sessionStorage.setItem('mid8', JSON.stringify(mid8));
      sessionStorage.setItem('mid9', JSON.stringify(mid9));
      sessionStorage.setItem('mid10', JSON.stringify(mid10));
      sessionStorage.setItem('mid11', JSON.stringify(mid11));
      sessionStorage.setItem('mid12', JSON.stringify(mid12));
      sessionStorage.setItem('mid13', JSON.stringify(mid13));
      sessionStorage.setItem('mid14', JSON.stringify(mid14));
      sessionStorage.setItem('mid15', JSON.stringify(mid15));
      sessionStorage.setItem('mid16', JSON.stringify(mid16));
      sessionStorage.setItem('mid17', JSON.stringify(mid17));
      sessionStorage.setItem('mid18', JSON.stringify(mid18));
      sessionStorage.setItem('mid19', JSON.stringify(mid19));
      sessionStorage.setItem('mid20', JSON.stringify(mid20));
      sessionStorage.setItem('mid21', JSON.stringify(mid21));
      sessionStorage.setItem('mid22', JSON.stringify(mid22));
      sessionStorage.setItem('mid23', JSON.stringify(mid23));
      sessionStorage.setItem('mid24', JSON.stringify(mid24));
      sessionStorage.setItem('lhe1', JSON.stringify(lhe1));
      sessionStorage.setItem('lhe2', JSON.stringify(lhe2));
      sessionStorage.setItem('lhe3', JSON.stringify(lhe3));
      sessionStorage.setItem('lhe4', JSON.stringify(lhe4));
      sessionStorage.setItem('lhe5', JSON.stringify(lhe5));
      sessionStorage.setItem('lhe6', JSON.stringify(lhe6));
      sessionStorage.setItem('lhe7', JSON.stringify(lhe7));
      sessionStorage.setItem('lhe8', JSON.stringify(lhe8));
      sessionStorage.setItem('lhe9', JSON.stringify(lhe9));
      sessionStorage.setItem('lhe10', JSON.stringify(lhe10));
      sessionStorage.setItem('lhe11', JSON.stringify(lhe11));
      sessionStorage.setItem('lhe12', JSON.stringify(lhe12));
      sessionStorage.setItem('lhe13', JSON.stringify(lhe13));
      sessionStorage.setItem('lhe14', JSON.stringify(lhe14));
      sessionStorage.setItem('lhe15', JSON.stringify(lhe15));
      sessionStorage.setItem('lhe16', JSON.stringify(lhe16));
      sessionStorage.setItem('lhe17', JSON.stringify(lhe17));
      sessionStorage.setItem('lhe18', JSON.stringify(lhe18));
      sessionStorage.setItem('lhe19', JSON.stringify(lhe19));
      sessionStorage.setItem('lhe20', JSON.stringify(lhe20));
      sessionStorage.setItem('lhe21', JSON.stringify(lhe21));
      sessionStorage.setItem('lhe22', JSON.stringify(lhe22));
      sessionStorage.setItem('lhe23', JSON.stringify(lhe23));
      sessionStorage.setItem('lhe24', JSON.stringify(lhe24));
      sessionStorage.setItem('hea1', JSON.stringify(hea1));
      sessionStorage.setItem('hea2', JSON.stringify(hea2));
      sessionStorage.setItem('hea3', JSON.stringify(hea3));
      sessionStorage.setItem('hea4', JSON.stringify(hea4));
      sessionStorage.setItem('hea5', JSON.stringify(hea5));
      sessionStorage.setItem('hea6', JSON.stringify(hea6));
      sessionStorage.setItem('hea7', JSON.stringify(hea7));
      sessionStorage.setItem('hea8', JSON.stringify(hea8));
      sessionStorage.setItem('hea9', JSON.stringify(hea9));
      sessionStorage.setItem('hea10', JSON.stringify(hea10));
      sessionStorage.setItem('hea11', JSON.stringify(hea11));
      sessionStorage.setItem('hea12', JSON.stringify(hea12));
      sessionStorage.setItem('hea13', JSON.stringify(hea13));
      sessionStorage.setItem('hea14', JSON.stringify(hea14));
      sessionStorage.setItem('hea15', JSON.stringify(hea15));
      sessionStorage.setItem('hea16', JSON.stringify(hea16));
      sessionStorage.setItem('hea17', JSON.stringify(hea17));
      sessionStorage.setItem('hea18', JSON.stringify(hea18));
      sessionStorage.setItem('hea19', JSON.stringify(hea19));
      sessionStorage.setItem('hea20', JSON.stringify(hea20));
      sessionStorage.setItem('hea21', JSON.stringify(hea21));
      sessionStorage.setItem('hea22', JSON.stringify(hea22));
      sessionStorage.setItem('hea23', JSON.stringify(hea23));
      sessionStorage.setItem('hea24', JSON.stringify(hea24));
      sessionStorage.setItem('wst1', JSON.stringify(wst1));
      sessionStorage.setItem('wst2', JSON.stringify(wst2));
      sessionStorage.setItem('wst3', JSON.stringify(wst3));
      sessionStorage.setItem('wst4', JSON.stringify(wst4));
      sessionStorage.setItem('wst5', JSON.stringify(wst5));
      sessionStorage.setItem('wst6', JSON.stringify(wst6));
      sessionStorage.setItem('wst7', JSON.stringify(wst7));
      sessionStorage.setItem('wst8', JSON.stringify(wst8));
      sessionStorage.setItem('wst9', JSON.stringify(wst9));
      sessionStorage.setItem('wst10', JSON.stringify(wst10));
      sessionStorage.setItem('wst11', JSON.stringify(wst11));
      sessionStorage.setItem('wst12', JSON.stringify(wst12));
      sessionStorage.setItem('wst13', JSON.stringify(wst13));
      sessionStorage.setItem('wst14', JSON.stringify(wst14));
      sessionStorage.setItem('wst15', JSON.stringify(wst15));
      sessionStorage.setItem('wst16', JSON.stringify(wst16));
      sessionStorage.setItem('wst17', JSON.stringify(wst17));
      sessionStorage.setItem('wst18', JSON.stringify(wst18));
      sessionStorage.setItem('wst19', JSON.stringify(wst19));
      sessionStorage.setItem('wst20', JSON.stringify(wst20));
      sessionStorage.setItem('wst21', JSON.stringify(wst21));
      sessionStorage.setItem('wst22', JSON.stringify(wst22));
      sessionStorage.setItem('wst23', JSON.stringify(wst23));
      sessionStorage.setItem('wst24', JSON.stringify(wst24));
      sessionStorage.setItem('wfl1', JSON.stringify(wfl1));
      sessionStorage.setItem('wfl2', JSON.stringify(wfl2));
      sessionStorage.setItem('wfl3', JSON.stringify(wfl3));
      sessionStorage.setItem('wfl4', JSON.stringify(wfl4));
      sessionStorage.setItem('wfl5', JSON.stringify(wfl5));
      sessionStorage.setItem('wfl6', JSON.stringify(wfl6));
      sessionStorage.setItem('wfl7', JSON.stringify(wfl7));
      sessionStorage.setItem('wfl8', JSON.stringify(wfl8));
      sessionStorage.setItem('wfl9', JSON.stringify(wfl9));
      sessionStorage.setItem('wfl10', JSON.stringify(wfl10));
      sessionStorage.setItem('wfl11', JSON.stringify(wfl11));
      sessionStorage.setItem('wfl12', JSON.stringify(wfl12));
      sessionStorage.setItem('wfl13', JSON.stringify(wfl13));
      sessionStorage.setItem('wfl14', JSON.stringify(wfl14));
      sessionStorage.setItem('wfl15', JSON.stringify(wfl15));
      sessionStorage.setItem('wfl16', JSON.stringify(wfl16));
      sessionStorage.setItem('wfl17', JSON.stringify(wfl17));
      sessionStorage.setItem('wfl18', JSON.stringify(wfl18));
      sessionStorage.setItem('wfl19', JSON.stringify(wfl19));
      sessionStorage.setItem('wfl20', JSON.stringify(wfl20));
      sessionStorage.setItem('wfl21', JSON.stringify(wfl21));
      sessionStorage.setItem('wfl22', JSON.stringify(wfl22));
      sessionStorage.setItem('wfl23', JSON.stringify(wfl23));
      sessionStorage.setItem('wfl24', JSON.stringify(wfl24));
      sessionStorage.setItem('wba1', JSON.stringify(wba1));
      sessionStorage.setItem('wba2', JSON.stringify(wba2));
      sessionStorage.setItem('wba3', JSON.stringify(wba3));
      sessionStorage.setItem('wba4', JSON.stringify(wba4));
      sessionStorage.setItem('wba5', JSON.stringify(wba5));
      sessionStorage.setItem('wba6', JSON.stringify(wba6));
      sessionStorage.setItem('wba7', JSON.stringify(wba7));
      sessionStorage.setItem('wba8', JSON.stringify(wba8));
      sessionStorage.setItem('wba9', JSON.stringify(wba9));
      sessionStorage.setItem('wba10', JSON.stringify(wba10));
      sessionStorage.setItem('wba11', JSON.stringify(wba11));
      sessionStorage.setItem('wba12', JSON.stringify(wba12));
      sessionStorage.setItem('wba13', JSON.stringify(wba13));
      sessionStorage.setItem('wba14', JSON.stringify(wba14));
      sessionStorage.setItem('wba15', JSON.stringify(wba15));
      sessionStorage.setItem('wba16', JSON.stringify(wba16));
      sessionStorage.setItem('wba17', JSON.stringify(wba17));
      sessionStorage.setItem('wba18', JSON.stringify(wba18));
      sessionStorage.setItem('wba19', JSON.stringify(wba19));
      sessionStorage.setItem('wba20', JSON.stringify(wba20));
      sessionStorage.setItem('wba21', JSON.stringify(wba21));
      sessionStorage.setItem('wba22', JSON.stringify(wba22));
      sessionStorage.setItem('wba23', JSON.stringify(wba23));
      sessionStorage.setItem('wba24', JSON.stringify(wba24));
  }

    capitalize(str) {
      return str.toUpperCase();
    }

    render() {
      const {first} = this.state
      const {last} = this.state
      const {weight} = this.state
      const {cut} = this.state
      const {height} = this.state
      return (
        <div className="App">
          <div className="App-header">
            <div className="App-header-styleTop">
              <img src={logo} alt='logo' className="App-logo1"/>
              CUSTOMIZE FIGHTER
            </div>
            <div className="App-customize">
              <text className="Cust-text-1">FIRST NAME</text>
              <text className="Cust-text-2">LAST NAME</text>
              <br/>

              <form>
                <label>
                  <Input
                    name="first"
                    type="input"
                    checked={this.state.first}
                    onChange={this.handleInputChange} />
                </label>
                <label>
                  <Input
                    name="last"
                    type="input"
                    checked={this.state.last}
                    onChange={this.handleInputChange} />
                    <br/><br/>
                    <text className="Cust-text-3">WEIGHTCLASS</text>
                    <text className="Cust-text-4">WEIGHT CUT</text>
                    <br/>
                  </label>
                  <label>
                    <Select name="weight" onChange={this.handleInputChange}>
                      <option selected value="FLYWEIGHT">125 FLYWEIGHT</option>
                      <option value="BANTAMWEIGHT">135 BANTAMWEIGHT</option>
                      <option value="FEATHERWEIGHT">145 FEATHERWEIGHT</option>
                      <option value="LIGHTWEIGHT">155 LIGHTWEIGHT</option>
                      <option value="WELTERWEIGHT">170 WELTERWEIGHT</option>
                      <option value="MIDDLEWEIGHT">185 MIDDLEWEIGHT</option>
                      <option value="LIGHT HEAVYWEIGHT">205 LIGHT HEAVYWEIGHT</option>
                      <option value="HEAVYWEIGHT">265 HEAVYWEIGHT</option>
                      <option value="WSTRAWWEIGHT" style={{color: '#FC46AA'}}>115 W. STRAWWEIGHT</option>
                      <option value="WFLYWEIGHT" style={{color: '#FC46AA'}}>125 W. FLYWEIGHT</option>
                      <option value="WBANTAMWEIGHT" style={{color: '#FC46AA'}}>135 W. BANTAMWEIGHT</option>
                    </Select>
                  </label>
                  <label>
                    <Select name="cut" onChange={this.handleInputChange}>
                      <option value="1">4%</option>
                      <option value="2">7%</option>
                      <option selected value="3">10%</option>
                      <option value="4">13%</option>
                      <option value="5">16%</option>
                    </Select>
                  </label>
                  <br/><br/>
                  <text className="Cust-text-5">HEIGHT</text>
                  <text className="Cust-text-6">NATION</text>
                  <br/>
                  <label>
                    <Select name="height" onChange={this.handleInputChange}>
                      <option value="5">LANKY</option>
                      <option value="4">TALLER</option>
                      <option selected value="3">AVERAGE</option>
                      <option value="2">SHORTER</option>
                      <option value="1">STOCKY</option>
                    </Select>
                  </label>
                  <label>
                    <Input
                      name="nation"
                      type="input"
                      checked={this.state.nation}
                      onChange={this.handleInputChange} />
                  </label>
                  <br/><br/>
                  <div className="Customize-desc1-CUSTOMIZE1">
                        <Link to='./home'><Button4 onClick={this.handleSubmit}>CONTINUE</Button4></Link>
                  </div>
              </form>
              <br/>
              <div className="Customize-desc1-CUSTOMIZE2"><u>Weight Cut Percentage</u><br/><b>4%</b>: -20 Strength, +20 Stamina<br/><b>7%</b>: -10 Strength, +10 Stamina<br/><b>10%</b>: -0 Strength, +0 Stamina<br/><b>13%</b>: +10 Strength, -10 Stamina<br/><b>16%</b>: +20 Strength, -20 Stamina</div>
              <div className="Customize-desc1-CUSTOMIZE3"><u>Height</u><br/><b>Lanky</b>: -15 Strength, +15 Punching, +15 Kicking, -15 Wrestling<br/><b>Taller</b>: -5 Strength, +5 Punching, +5 Kicking, -5 Wrestling<br/><b>Average</b>: -0 Strength, +0 Punching, +0 Kicking, -0 Wrestling<br/><b>Shorter</b>: +5 Strength, -5 Punching, -5 Kicking, +5 Wrestling<br/><b>Stocky</b>: +15 Strength, -15 Punching, -15 Kicking, +15 Wrestling</div>
            </div>
          </div>
        </div>
      );
    }
  }

export default Customize;
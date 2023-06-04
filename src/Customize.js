import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';
import './AppCustomize.css';
import randomSchedule from './RandomSchedule.js';

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
        code: (this.wc(cWeight) > 8 ? 'nrf0' : 'nr0')
      }

      sessionStorage.setItem('nr0', null);
      sessionStorage.setItem('nrf0', null);
      sessionStorage.setItem('playerNR', null);
      sessionStorage.setItem('playerNRF', null);
      sessionStorage.setItem('wc', this.wc(cWeight));
      sessionStorage.setItem('wc0', this.wc(cWeight));
      sessionStorage.setItem('player', JSON.stringify(obj));
      sessionStorage.setItem('first', 1);
      sessionStorage.setItem('newSchedule', 1);
      sessionStorage.setItem('playerWin', 0);
      sessionStorage.setItem('playerLoss', 0);
      sessionStorage.setItem('playerSwin', 0);
      sessionStorage.setItem('playerSloss', 0);
      sessionStorage.setItem('playerPts', 0);
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
      sessionStorage.setItem('balance', 100000);
      sessionStorage.setItem('careerEarnings', 0);
      sessionStorage.setItem('followers', 5000);
      sessionStorage.setItem('rank', 'NR');
      sessionStorage.setItem('ppv', 1);
      sessionStorage.setItem('gym', 'NONE');
      sessionStorage.setItem('org', 0);
      sessionStorage.setItem('playoffs', 0);
      sessionStorage.setItem('championship', 0);
      sessionStorage.setItem('pnchBuff', 0);
      sessionStorage.setItem('kickBuff', 0);
      sessionStorage.setItem('wrstBuff', 0);
      sessionStorage.setItem('grplBuff', 0);
      sessionStorage.setItem('clnhBuff', 0);
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
      sessionStorage.setItem('gymMonth', 0);
      sessionStorage.setItem('gymCamp', 0);

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
        code: 'nr4'
      }
      sessionStorage.setItem('nr4', JSON.stringify(nr4));

      let nr5 = {
        rank: 'NR',
        first: 'BEN',
        last: 'GRAY',
        height: '2',
        weight: '0',
        nation: 'TAIWAN',
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
        speed: '50',
        stamina: '70',
        punching: '90',
        kicking: '30',
        wrestling: '30',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
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
        code: 'nr18'
      }
      sessionStorage.setItem('nr18', JSON.stringify(nr18));

      let nr19 = {
        rank: 'NR',
        first: 'JIMMY',
        last: 'TRAN',
        height: '3',
        weight: '0',
        nation: 'USA',
        win: '0',
        loss: '0',
        strength: '60',
        speed: '50',
        stamina: '40',
        punching: '90',
        kicking: '30',
        wrestling: '30',
        grappling: '30',
        clinch: '40',
        swin: '0',
        sloss: '0',
        pts: '0',
				strk: '0',
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
        code: 'nrf9'
      }
      sessionStorage.setItem('nrf9', JSON.stringify(nrf9));

      let nrf10 = {
        rank: 'NR',
        first: 'PRIYA',
        last: 'KANDRU',
        height: '3',
        weight: '0',
        nation: 'INDIA',
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

      let flyC = {
        rank: '1',
        first: 'BRANDON',
        last: 'MORENO',
        weight: '125',
        height: '5\'7\"',
        nation: 'MEXICO',
        win: '18',
        loss: '5',
        strength: '65',
        speed: '50',
        stamina: '70',
        punching: '60',
        kicking: '50',
        wrestling: '60',
        grappling: '90',
        clinch: '35'
      }
      sessionStorage.setItem('flyC', JSON.stringify(flyC));

      let fly1 = {
        rank: '1',
        first: 'DEIVESON',
        last: 'FIGUEIREDO',
        weight: '125',
        height: '5\'5\"',
        nation: 'BRAZIL',
        win: '20',
        loss: '1',
        strength: '85',
        speed: '80',
        stamina: '70',
        punching: '75',
        kicking: '50',
        wrestling: '50',
        grappling: '80',
        clinch: '50'
      }
      sessionStorage.setItem('fly1', JSON.stringify(fly1));

      let fly2 = {
        rank: '2',
        first: 'ASKAR',
        last: 'ASKAROV',
        weight: '125',
        height: '5\'6\"',
        nation: 'RUSSIA',
        win: '14',
        loss: '0',
        strength: '50',
        speed: '55',
        stamina: '75',
        punching: '50',
        kicking: '40',
        wrestling: '75',
        grappling: '70',
        clinch: '35'
      }
      sessionStorage.setItem('fly2', JSON.stringify(fly2));

      let fly3 = {
        rank: '3',
        first: 'ALEXANDRE',
        last: 'PANTOJA',
        weight: '125',
        height: '5\'5\"',
        nation: 'BRAZIL',
        win: '23',
        loss: '5',
        strength: '70',
        speed: '50',
        stamina: '85',
        punching: '70',
        kicking: '65',
        wrestling: '60',
        grappling: '75',
        clinch: '45'
      }
      sessionStorage.setItem('fly3', JSON.stringify(fly3));

      let fly4 = {
        rank: '4',
        first: 'ALEX',
        last: 'PEREZ',
        weight: '125',
        height: '5\'6\"',
        nation: 'USA',
        win: '24',
        loss: '6',
        strength: '50',
        speed: '75',
        stamina: '80',
        punching: '60',
        kicking: '60',
        wrestling: '60',
        grappling: '70',
        clinch: '50'
      }
      sessionStorage.setItem('fly4', JSON.stringify(fly4));

      let fly5 = {
        rank: '5',
        first: 'JOSEPH',
        last: 'BENAVIDEZ',
        weight: '125',
        height: '5\'4\"',
        nation: 'USA',
        win: '28',
        loss: '8',
        strength: '65',
        speed: '50',
        stamina: '60',
        punching: '70',
        kicking: '65',
        wrestling: '50',
        grappling: '70',
        clinch: '55'
      }
      sessionStorage.setItem('fly5', JSON.stringify(fly5));

      let fly6 = {
        rank: '6',
        first: 'BRANDON',
        last: 'ROYVAL',
        weight: '125',
        height: '5\'9\"',
        nation: 'USA',
        win: '12',
        loss: '5',
        strength: '55',
        speed: '70',
        stamina: '65',
        punching: '70',
        kicking: '50',
        wrestling: '70',
        grappling: '75',
        clinch: '45'
      }
      sessionStorage.setItem('fly6', JSON.stringify(fly6));

      let fly7 = {
        rank: '7',
        first: 'KAI',
        last: 'KARA-FRANCE',
        weight: '125',
        height: '5\'4\"',
        nation: 'NEW ZEALAND',
        win: '22',
        loss: '9',
        strength: '70',
        speed: '80',
        stamina: '80',
        punching: '80',
        kicking: '70',
        wrestling: '60',
        grappling: '50',
        clinch: '55'
      }
      sessionStorage.setItem('fly7', JSON.stringify(fly7));

      let fly8 = {
        rank: '8',
        first: 'ROGERIO',
        last: 'BONTORIN',
        weight: '125',
        height: '5\'5\"',
        nation: 'BRAZIL',
        win: '16',
        loss: '3',
        strength: '80',
        speed: '50',
        stamina: '70',
        punching: '55',
        kicking: '50',
        wrestling: '60',
        grappling: '80',
        clinch: '25'
      }
      sessionStorage.setItem('fly8', JSON.stringify(fly8));

      let fly9 = {
        rank: '9',
        first: 'MATT',
        last: 'SCHNELL',
        weight: '125',
        height: '5\'8\"',
        nation: 'USA',
        win: '15',
        loss: '5',
        strength: '45',
        speed: '60',
        stamina: '55',
        punching: '55',
        kicking: '60',
        wrestling: '55',
        grappling: '75',
        clinch: '30'
      }
      sessionStorage.setItem('fly9', JSON.stringify(fly9));

      let fly10 = {
        rank: '10',
        first: '-',
        last: '-',
        weight: '-',
        height: '-',
        nation: '-',
        win: '-',
        loss: '-',
        strength: '-',
        speed: '-',
        stamina: '-',
        punching: '-',
        kicking: '-',
        wrestling: '-',
        grappling: '-',
        clinch: '-'
      }
      sessionStorage.setItem('fly10', JSON.stringify(fly10));

      let banC = {
        rank: 'C',
        first: 'PETR',
        last: 'YAN',
        weight: '135',
        height: '5\'7\"',
        nation: 'RUSSIA',
        win: '15',
        loss: '2',
        strength: '80',
        speed: '70',
        stamina: '75',
        punching: '90',
        kicking: '75',
        wrestling: '70',
        grappling: '60',
        clinch: '65'
      }
      sessionStorage.setItem('banC', JSON.stringify(banC));

      let ban1 = {
        rank: '1',
        first: 'ALJAMAIN',
        last: 'STERLING',
        weight: '135',
        height: '5\'7\"',
        nation: 'JAMAICA',
        win: '20',
        loss: '3',
        strength: '55',
        speed: '55',
        stamina: '65',
        punching: '55',
        kicking: '55',
        wrestling: '75',
        grappling: '80',
        clinch: '55'
      }
      sessionStorage.setItem('ban1', JSON.stringify(ban1));

      let ban2 = {
        rank: '2',
        first: 'CORY',
        last: 'SANDHAGEN',
        weight: '135',
        height: '5\'11\"',
        nation: 'USA',
        win: '14',
        loss: '2',
        strength: '75',
        speed: '75',
        stamina: '75',
        punching: '75',
        kicking: '75',
        wrestling: '60',
        grappling: '75',
        clinch: '50'
      }
      sessionStorage.setItem('ban2', JSON.stringify(ban2));

      let ban3 = {
        rank: '3',
        first: 'ROB',
        last: 'FONT',
        weight: '135',
        height: '5\'8\"',
        nation: 'USA',
        win: '18',
        loss: '4',
        strength: '80',
        speed: '75',
        stamina: '70',
        punching: '75',
        kicking: '75',
        wrestling: '70',
        grappling: '75',
        clinch: '50'
      }
      sessionStorage.setItem('ban3', JSON.stringify(ban3));

      let ban4 = {
        rank: '4',
        first: 'CODY',
        last: 'GARBRANDT',
        weight: '135',
        height: '5\'7\"',
        nation: 'USA',
        win: '12',
        loss: '3',
        strength: '90',
        speed: '90',
        stamina: '50',
        punching: '80',
        kicking: '70',
        wrestling: '70',
        grappling: '50',
        clinch: '50'
      }
      sessionStorage.setItem('ban4', JSON.stringify(ban4));
      
      let ban5 = {
        rank: '5',
        first: 'JOSE',
        last: 'ALDO',
        weight: '135',
        height: '5\'7\"',
        nation: 'BRAZIL',
        win: '29',
        loss: '7',
        strength: '75',
        speed: '85',
        stamina: '40',
        punching: '80',
        kicking: '70',
        wrestling: '70',
        grappling: '55',
        clinch: '55'
      }
      sessionStorage.setItem('ban5', JSON.stringify(ban5));

      let ban6 = {
        rank: '6',
        first: 'MARLON',
        last: 'MORAES',
        weight: '135',
        height: '5\'6\"',
        nation: 'BRAZIL',
        win: '23',
        loss: '8',
        strength: '80',
        speed: '75',
        stamina: '45',
        punching: '70',
        kicking: '70',
        wrestling: '70',
        grappling: '70',
        clinch: '50'
      }
      sessionStorage.setItem('ban6', JSON.stringify(ban6));

      let ban7 = {
        rank: '7',
        first: 'FRANKIE',
        last: 'EDGAR',
        weight: '135',
        height: '5\'6\"',
        nation: 'USA',
        win: '24',
        loss: '9',
        strength: '55',
        speed: '50',
        stamina: '75',
        punching: '60',
        kicking: '55',
        wrestling: '80',
        grappling: '80',
        clinch: '50'
      }
      sessionStorage.setItem('ban7', JSON.stringify(ban7));

      let ban8 = {
        rank: '8',
        first: 'PEDRO',
        last: 'MUNHOZ',
        weight: '135',
        height: '5\'6\"',
        nation: 'BRAZIL',
        win: '19',
        loss: '5',
        strength: '70',
        speed: '55',
        stamina: '65',
        punching: '70',
        kicking: '65',
        wrestling: '65',
        grappling: '75',
        clinch: '45'
      }
      sessionStorage.setItem('ban8', JSON.stringify(ban8));

      let ban9 = {
        rank: '9',
        first: 'DOMINICK',
        last: 'CRUZ',
        weight: '135',
        height: '5\'8\"',
        nation: 'USA',
        win: '23',
        loss: '3',
        strength: '70',
        speed: '75',
        stamina: '85',
        punching: '80',
        kicking: '70',
        wrestling: '65',
        grappling: '60',
        clinch: '60'
      }
      sessionStorage.setItem('ban9', JSON.stringify(ban9));

      let ban10 = {
        rank: '10',
        first: '-',
        last: '-',
        weight: '-',
        height: '-',
        nation: '-',
        win: '-',
        loss: '-',
        strength: '-',
        speed: '-',
        stamina: '-',
        punching: '-',
        kicking: '-',
        wrestling: '-',
        grappling: '-',
        clinch: '-'
      }
      sessionStorage.setItem('ban10', JSON.stringify(ban10));

      let feaC = {
        rank: 'C',
        first: 'ALEXANDER',
        last: 'VOLKANOVSKI',
        weight: '145',
        height: '5\'6\"',
        nation: 'AUSTRALIA',
        win: '22',
        loss: '1',
        strength: '75',
        speed: '70',
        stamina: '75',
        punching: '75',
        kicking: '75',
        wrestling: '75',
        grappling: '70',
        clinch: '70'
      }
      sessionStorage.setItem('feaC', JSON.stringify(feaC));

      let fea1 = {
        rank: '1',
        first: 'MAX',
        last: 'HOLLOWAY',
        weight: '145',
        height: '5\'11\"',
        nation: 'USA',
        win: '22',
        loss: '6',
        strength: '50',
        speed: '80',
        stamina: '100',
        punching: '90',
        kicking: '65',
        wrestling: '65',
        grappling: '65',
        clinch: '55'
      }
      sessionStorage.setItem('fea1', JSON.stringify(fea1));

      let fea2 = {
        rank: '2',
        first: 'BRIAN',
        last: 'ORTEGA',
        weight: '145',
        height: '5\'8\"',
        nation: 'USA',
        win: '15',
        loss: '1',
        strength: '75',
        speed: '75',
        stamina: '85',
        punching: '70',
        kicking: '60',
        wrestling: '65',
        grappling: '80',
        clinch: '55'
      }
      sessionStorage.setItem('fea2', JSON.stringify(fea2));

      let fea3 = {
        rank: '3',
        first: 'YAIR',
        last: 'RODRIGUEZ',
        weight: '145',
        height: '5\'11\"',
        nation: 'MEXICO',
        win: '13',
        loss: '2',
        strength: '65',
        speed: '75',
        stamina: '75',
        punching: '80',
        kicking: '75',
        wrestling: '50',
        grappling: '60',
        clinch: '55'
      }
      sessionStorage.setItem('fea3', JSON.stringify(fea3));

      let fea4 = {
        rank: '4',
        first: 'CHAN-SUNG',
        last: 'JUNG',
        weight: '145',
        height: '5\'9\"',
        nation: 'SOUTH KOREA',
        win: '16',
        loss: '6',
        strength: '75',
        speed: '70',
        stamina: '60',
        punching: '75',
        kicking: '75',
        wrestling: '75',
        grappling: '75',
        clinch: '60'
      }
      sessionStorage.setItem('fea4', JSON.stringify(fea4));

      let fea5 = {
        rank: '5',
        first: 'CALVIN',
        last: 'KATTAR',
        weight: '145',
        height: '5\'11\"',
        nation: 'USA',
        win: '22',
        loss: '5',
        strength: '65',
        speed: '65',
        stamina: '75',
        punching: '80',
        kicking: '60',
        wrestling: '50',
        grappling: '55',
        clinch: '50'
      }
      sessionStorage.setItem('fea5', JSON.stringify(fea5));

      let fea6 = {
        rank: '6',
        first: 'JOSH',
        last: 'EMMETT',
        weight: '145',
        height: '5\'6\"',
        nation: 'USA',
        win: '16',
        loss: '2',
        strength: '70',
        speed: '55',
        stamina: '60',
        punching: '65',
        kicking: '60',
        wrestling: '70',
        grappling: '55',
        clinch: '45'
      }
      sessionStorage.setItem('fea6', JSON.stringify(fea6));

      let fea7 = {
        rank: '7',
        first: 'ARNOLD',
        last: 'ALLEN',
        weight: '145',
        height: '5\'8\"',
        nation: 'ENGLAND',
        win: '17',
        loss: '1',
        strength: '45',
        speed: '75',
        stamina: '75',
        punching: '55',
        kicking: '50',
        wrestling: '70',
        grappling: '65',
        clinch: '35'
      }
      sessionStorage.setItem('fea7', JSON.stringify(fea7));

      let fea8 = {
        rank: '8',
        first: 'DAN',
        last: 'IGE',
        weight: '145',
        height: '5\'7\"',
        nation: 'USA',
        win: '15',
        loss: '3',
        strength: '50',
        speed: '60',
        stamina: '60',
        punching: '55',
        kicking: '50',
        wrestling: '60',
        grappling: '70',
        clinch: '35'
      }
      sessionStorage.setItem('fea8', JSON.stringify(fea8));

      let fea9 = {
        rank: '9',
        first: 'EDSON',
        last: 'BARBOZA',
        weight: '145',
        height: '5\'11\"',
        nation: 'BRAZIL',
        win: '22',
        loss: '9',
        strength: '80',
        speed: '85',
        stamina: '70',
        punching: '80',
        kicking: '80',
        wrestling: '55',
        grappling: '65',
        clinch: '65'
      }
      sessionStorage.setItem('fea9', JSON.stringify(fea9));

      let fea10 = {
        rank: '10',
        first: '-',
        last: '-',
        weight: '-',
        height: '-',
        nation: '-',
        win: '-',
        loss: '-',
        strength: '-',
        speed: '-',
        stamina: '-',
        punching: '-',
        kicking: '-',
        wrestling: '-',
        grappling: '-',
        clinch: '-'
      }
      sessionStorage.setItem('fea10', JSON.stringify(fea10));

      let ligC = {
        rank: 'C',
        first: 'CHARLES',
        last: 'OLIVEIRA',
        weight: '155',
        height: '5\'10\"',
        nation: 'BRAZIL',
        win: '31',
        loss: '8',
        strength: '75',
        speed: '75',
        stamina: '75',
        punching: '80',
        kicking: '75',
        wrestling: '75',
        grappling: '100',
        clinch: '50'
      }
      sessionStorage.setItem('ligC', JSON.stringify(ligC));

      let lig1 = {
        rank: '1',
        first: 'DUSTIN',
        last: 'POIRIER',
        weight: '155',
        height: '5\'9\"',
        nation: 'USA',
        win: '27',
        loss: '6',
        strength: '80',
        speed: '75',
        stamina: '80',
        punching: '85',
        kicking: '75',
        wrestling: '75',
        grappling: '75',
        clinch: '60'
      }
      sessionStorage.setItem('lig1', JSON.stringify(lig1));

      let lig2 = {
        rank: '2',
        first: 'JUSTIN',
        last: 'GAETHJE',
        weight: '155',
        height: '5\'11\"',
        nation: 'USA',
        win: '22',
        loss: '3',
        strength: '85',
        speed: '75',
        stamina: '60',
        punching: '75',
        kicking: '75',
        wrestling: '75',
        grappling: '45',
        clinch: '45'
      }
      sessionStorage.setItem('lig2', JSON.stringify(lig2));

      let lig3 = {
        rank: '3',
        first: 'BENEIL',
        last: 'DARIUSH',
        weight: '155',
        height: '5\'10\"',
        nation: 'USA',
        win: '20',
        loss: '4',
        strength: '75',
        speed: '65',
        stamina: '65',
        punching: '65',
        kicking: '55',
        wrestling: '70',
        grappling: '80',
        clinch: '55'
      }
      sessionStorage.setItem('lig3', JSON.stringify(lig3));

      let lig4 = {
        rank: '4',
        first: 'MICHAEL',
        last: 'CHANDLER',
        weight: '155',
        height: '5\'8\"',
        nation: 'USA',
        win: '22',
        loss: '6',
        strength: '95',
        speed: '90',
        stamina: '70',
        punching: '80',
        kicking: '65',
        wrestling: '85',
        grappling: '70',
        clinch: '50'
      }
      sessionStorage.setItem('lig4', JSON.stringify(lig4));

      let lig5 = {
        rank: '5',
        first: 'CONOR',
        last: 'MCGREGOR',
        weight: '155',
        height: '5\'9\"',
        nation: 'IRELAND',
        win: '22',
        loss: '5',
        strength: '95',
        speed: '85',
        stamina: '45',
        punching: '95',
        kicking: '70',
        wrestling: '70',
        grappling: '40',
        clinch: '70'
      }
      sessionStorage.setItem('lig5', JSON.stringify(lig5));

      let lig6 = {
        rank: '6',
        first: 'TONY',
        last: 'FERGUSON',
        weight: '155',
        height: '6\'0\"',
        nation: 'USA',
        win: '25',
        loss: '5',
        strength: '75',
        speed: '75',
        stamina: '100',
        punching: '70',
        kicking: '65',
        wrestling: '80',
        grappling: '85',
        clinch: '55'
      }
      sessionStorage.setItem('lig6', JSON.stringify(lig6));

      let lig7 = {
        rank: '7',
        first: 'RAFAEL',
        last: 'DOS ANJOS',
        weight: '155',
        height: '5\'9\"',
        nation: 'BRAZIL',
        win: '30',
        loss: '13',
        strength: '50',
        speed: '75',
        stamina: '80',
        punching: '70',
        kicking: '70',
        wrestling: '65',
        grappling: '75',
        clinch: '70'
      }
      sessionStorage.setItem('lig7', JSON.stringify(lig7));

      let lig8 = {
        rank: '8',
        first: 'DAN',
        last: 'HOOKER',
        weight: '155',
        height: '6\'0\"',
        nation: 'NEW ZEALAND',
        win: '20',
        loss: '10',
        strength: '80',
        speed: '75',
        stamina: '60',
        punching: '85',
        kicking: '70',
        wrestling: '65',
        grappling: '65',
        clinch: '65'
      }
      sessionStorage.setItem('lig8', JSON.stringify(lig8));

      let lig9 = {
        rank: '9',
        first: 'PAUL',
        last: 'FELDER',
        weight: '155',
        height: '5\'10\"',
        nation: 'USA',
        win: '17',
        loss: '6',
        strength: '80',
        speed: '75',
        stamina: '75',
        punching: '75',
        kicking: '65',
        wrestling: '60',
        grappling: '55',
        clinch: '55'
      }
      sessionStorage.setItem('lig9', JSON.stringify(lig9));

      let lig10 = {
        rank: '10',
        first: '-',
        last: '-',
        weight: '-',
        height: '-',
        nation: '-',
        win: '-',
        loss: '-',
        strength: '-',
        speed: '-',
        stamina: '-',
        punching: '-',
        kicking: '-',
        wrestling: '-',
        grappling: '-',
        clinch: '-'
      }
      sessionStorage.setItem('lig10', JSON.stringify(lig10));

      let welC = {
        rank: 'C',
        first: 'KAMARU',
        last: 'USMAN',
        weight: '170',
        height: '6\'0\"',
        nation: 'NIGERIA',
        win: '19',
        loss: '1',
        strength: '85',
        speed: '75',
        stamina: '85',
        punching: '70',
        kicking: '55',
        wrestling: '100',
        grappling: '60',
        clinch: '80'
      }
      sessionStorage.setItem('welC', JSON.stringify(welC));

      let wel1 = {
        rank: '1',
        first: 'COLBY',
        last: 'COVINGTON',
        weight: '5\'11\"',
        height: '170',
        nation: 'USA',
        win: '16',
        loss: '2',
        strength: '70',
        speed: '75',
        stamina: '100',
        punching: '75',
        kicking: '55',
        wrestling: '95',
        grappling: '60',
        clinch: '75'
      }
      sessionStorage.setItem('wel1', JSON.stringify(wel1));

      let wel2 = {
        rank: '2',
        first: 'GILBERT',
        last: 'BURNS',
        weight: '170',
        height: '5\'10\"',
        nation: 'BRAZIL',
        win: '19',
        loss: '4',
        strength: '85',
        speed: '80',
        stamina: '75',
        punching: '75',
        kicking: '60',
        wrestling: '75',
        grappling: '85',
        clinch: '55'
      }
      sessionStorage.setItem('wel2', JSON.stringify(wel2));

      let wel3 = {
        rank: '3',
        first: 'LEON',
        last: 'EDWARDS',
        weight: '170',
        height: '6\'2\"',
        nation: 'JAMAICA',
        win: '18',
        loss: '3',
        strength: '55',
        speed: '80',
        stamina: '80',
        punching: '85',
        kicking: '70',
        wrestling: '55',
        grappling: '55',
        clinch: '50'
      }
      sessionStorage.setItem('wel3', JSON.stringify(wel3));

      let wel4 = {
        rank: '4',
        first: 'STEPHEN',
        last: 'THOMPSON',
        weight: '170',
        height: '6\'0\"',
        nation: 'USA',
        win: '16',
        loss: '4',
        strength: '75',
        speed: '80',
        stamina: '80',
        punching: '90',
        kicking: '80',
        wrestling: '55',
        grappling: '55',
        clinch: '55'
      }
      sessionStorage.setItem('wel4', JSON.stringify(wel4));

      let wel5 = {
        rank: '5',
        first: 'VICENTE',
        last: 'LUQUE',
        weight: '170',
        height: '5\'11\"',
        nation: 'BRAZIL',
        win: '20',
        loss: '7',
        strength: '85',
        speed: '80',
        stamina: '60',
        punching: '85',
        kicking: '60',
        wrestling: '65',
        grappling: '80',
        clinch: '70'
      }
      sessionStorage.setItem('wel5', JSON.stringify(wel5));

      let wel6 = {
        rank: '6',
        first: 'MICHAEL',
        last: 'CHIESA',
        weight: '170',
        height: '6\'1\"',
        nation: 'USA',
        win: '18',
        loss: '4',
        strength: '65',
        speed: '65',
        stamina: '75',
        punching: '50',
        kicking: '35',
        wrestling: '90',
        grappling: '85',
        clinch: '35'
      }
      sessionStorage.setItem('wel6', JSON.stringify(wel6));

      let wel7 = {
        rank: '7',
        first: 'JORGE',
        last: 'MASVIDAL',
        weight: '170',
        height: '5\'11\"',
        nation: 'USA',
        win: '35',
        loss: '15',
        strength: '80',
        speed: '80',
        stamina: '75',
        punching: '80',
        kicking: '70',
        wrestling: '65',
        grappling: '50',
        clinch: '55'
      }
      sessionStorage.setItem('wel7', JSON.stringify(wel7));

      let wel8 = {
        rank: '8',
        first: 'NEIL',
        last: 'MAGNY',
        weight: '170',
        height: '6\'3\"',
        nation: 'USA',
        win: '25',
        loss: '8',
        strength: '65',
        speed: '65',
        stamina: '75',
        punching: '70',
        kicking: '60',
        wrestling: '70',
        grappling: '50',
        clinch: '45'
      }
      sessionStorage.setItem('wel8', JSON.stringify(wel8));

      let wel9 = {
        rank: '9',
        first: 'DEMIAN',
        last: 'MAIA',
        weight: '170',
        height: '6\'0\"',
        nation: 'BRAZIL',
        win: '28',
        loss: '10',
        strength: '45',
        speed: '55',
        stamina: '70',
        punching: '35',
        kicking: '30',
        wrestling: '65',
        grappling: '85',
        clinch: '20'
      }
      sessionStorage.setItem('wel9', JSON.stringify(wel9));

      let wel10 = {
        rank: '10',
        first: '-',
        last: '-',
        weight: '-',
        height: '-',
        nation: '-',
        win: '-',
        loss: '-',
        strength: '-',
        speed: '-',
        stamina: '-',
        punching: '-',
        kicking: '-',
        wrestling: '-',
        grappling: '-',
        clinch: '-'
      }
      sessionStorage.setItem('wel10', JSON.stringify(wel10));

      let midC = {
        rank: 'C',
        first: 'ISRAEL',
        last: 'ADESANYA',
        weight: '185',
        height: '6\'4\"',
        nation: 'NIGERIA',
        win: '20',
        loss: '1',
        strength: '80',
        speed: '85',
        stamina: '90',
        punching: '100',
        kicking: '85',
        wrestling: '70',
        grappling: '50',
        clinch: '70'
      }
      sessionStorage.setItem('midC', JSON.stringify(midC));

      let mid1 = {
        rank: '1',
        first: 'ROBERT',
        last: 'WHITTAKER',
        weight: '185',
        height: '5\'11\"',
        nation: 'AUSTRALIA',
        win: '23',
        loss: '5',
        strength: '75',
        speed: '85',
        stamina: '80',
        punching: '85',
        kicking: '70',
        wrestling: '70',
        grappling: '60',
        clinch: '65'
      }
      sessionStorage.setItem('mid1', JSON.stringify(mid1));

      let mid2 = {
        rank: '2',
        first: 'PAULO',
        last: 'COSTA',
        weight: '185',
        height: '6\'0\"',
        nation: 'BRAZIL',
        win: '13',
        loss: '1',
        strength: '95',
        speed: '50',
        stamina: '45',
        punching: '75',
        kicking: '60',
        wrestling: '60',
        grappling: '65',
        clinch: '60'
      }
      sessionStorage.setItem('mid2', JSON.stringify(mid2));

      let mid3 = {
        rank: '3',
        first: 'MARVIN',
        last: 'VETTORI',
        weight: '185',
        height: '6\'0\"',
        nation: 'ITALY',
        win: '17',
        loss: '4',
        strength: '70',
        speed: '60',
        stamina: '70',
        punching: '60',
        kicking: '50',
        wrestling: '85',
        grappling: '75',
        clinch: '50'
      }
      sessionStorage.setItem('mid3', JSON.stringify(mid3));

      let mid4 = {
        rank: '4',
        first: 'JARED',
        last: 'CANNONIER',
        weight: '185',
        height: '5\'11\"',
        nation: 'USA',
        win: '13',
        loss: '5',
        strength: '80',
        speed: '75',
        stamina: '60',
        punching: '75',
        kicking: '70',
        wrestling: '60',
        grappling: '55',
        clinch: '55'
      }
      sessionStorage.setItem('mid4', JSON.stringify(mid4));

      let mid5 = {
        rank: '5',
        first: 'DEREK',
        last: 'BRUNSON',
        weight: '185',
        height: '6\'1\"',
        nation: 'USA',
        win: '22',
        loss: '7',
        strength: '85',
        speed: '75',
        stamina: '65',
        punching: '75',
        kicking: '60',
        wrestling: '90',
        grappling: '60',
        clinch: '50'
      }
      sessionStorage.setItem('mid5', JSON.stringify(mid5));

      let mid6 = {
        rank: '6',
        first: 'DARREN',
        last: 'TILL',
        weight: '185',
        height: '6\'0\"',
        nation: 'ENGLAND',
        win: '18',
        loss: '3',
        strength: '80',
        speed: '75',
        stamina: '55',
        punching: '80',
        kicking: '70',
        wrestling: '65',
        grappling: '60',
        clinch: '70'
      }
      sessionStorage.setItem('mid6', JSON.stringify(mid6));

      let mid7 = {
        rank: '7',
        first: 'JACK',
        last: 'HERMANSSON',
        weight: '185',
        height: '6\'1\"',
        nation: 'SWEDEN',
        win: '21',
        loss: '6',
        strength: '75',
        speed: '75',
        stamina: '75',
        punching: '75',
        kicking: '65',
        wrestling: '65',
        grappling: '75',
        clinch: '50'
      }
      sessionStorage.setItem('mid7', JSON.stringify(mid7));

      let mid8 = {
        rank: '8',
        first: 'URIAH',
        last: 'HALL',
        weight: '185',
        height: '6\'0\"',
        nation: 'USA',
        win: '17',
        loss: '9',
        strength: '85',
        speed: '75',
        stamina: '55',
        punching: '80',
        kicking: '75',
        wrestling: '60',
        grappling: '55',
        clinch: '60'
      }
      sessionStorage.setItem('mid8', JSON.stringify(mid8));

      let mid9 = {
        rank: '9',
        first: 'KELVIN',
        last: 'GASTELUM',
        weight: '185',
        height: '5\'9\"',
        nation: 'USA',
        win: '16',
        loss: '7',
        strength: '85',
        speed: '55',
        stamina: '80',
        punching: '75',
        kicking: '55',
        wrestling: '90',
        grappling: '70',
        clinch: '50'
      }
      sessionStorage.setItem('mid9', JSON.stringify(mid9));

      let mid10 = {
        rank: '10',
        first: '-',
        last: '-',
        weight: '-',
        height: '-',
        nation: '-',
        win: '-',
        loss: '-',
        strength: '-',
        speed: '-',
        stamina: '-',
        punching: '-',
        kicking: '-',
        wrestling: '-',
        grappling: '-',
        clinch: '-'
      }
      sessionStorage.setItem('mid10', JSON.stringify(mid10));

      let lheC = {
        rank: 'C',
        first: 'JAN',
        last: 'BLACHOWICZ',
        weight: '205',
        height: '6\'2\"',
        nation: 'POLAND',
        win: '28',
        loss: '8',
        strength: '85',
        speed: '70',
        stamina: '80',
        punching: '80',
        kicking: '70',
        wrestling: '65',
        grappling: '75',
        clinch: '60'
      }
      sessionStorage.setItem('lheC', JSON.stringify(lheC));

      let lhe1 = {
        rank: '1',
        first: 'GLOVER',
        last: 'TEIXEIRA',
        weight: '205',
        height: '6\'2\"',
        nation: 'BRAZIL',
        win: '32',
        loss: '7',
        strength: '80',
        speed: '55',
        stamina: '70',
        punching: '70',
        kicking: '55',
        wrestling: '80',
        grappling: '80',
        clinch: '55'
      }
      sessionStorage.setItem('lhe1', JSON.stringify(lhe1));

      let lhe2 = {
        rank: '2',
        first: 'JIRI',
        last: 'PROCHAZKA',
        weight: '205',
        height: '6\'4\"',
        nation: 'CZECH REPUBLIC',
        win: '28',
        loss: '3',
        strength: '95',
        speed: '75',
        stamina: '65',
        punching: '85',
        kicking: '65',
        wrestling: '55',
        grappling: '50',
        clinch: '75'
      }
      sessionStorage.setItem('lhe2', JSON.stringify(lhe2));

      let lhe3 = {
        rank: '3',
        first: 'ALEKSANDAR',
        last: 'RAKIC',
        weight: '205',
        height: '6\'4\"',
        nation: 'AUSTRIA',
        win: '14',
        loss: '2',
        strength: '75',
        speed: '80',
        stamina: '75',
        punching: '75',
        kicking: '75',
        wrestling: '80',
        grappling: '65',
        clinch: '70'
      }
      sessionStorage.setItem('lhe3', JSON.stringify(lhe3));

      let lhe4 = {
        rank: '4',
        first: 'THIAGO',
        last: 'SANTOS',
        weight: '205',
        height: '6\'2\"',
        nation: 'BRAZIL',
        win: '21',
        loss: '9',
        strength: '90',
        speed: '80',
        stamina: '65',
        punching: '85',
        kicking: '65',
        wrestling: '55',
        grappling: '55',
        clinch: '75'
      }
      sessionStorage.setItem('lhe4', JSON.stringify(lhe4));

      let lhe5 = {
        rank: '5',
        first: 'DOMINICK',
        last: 'REYES',
        weight: '205',
        height: '6\'4\"',
        nation: 'USA',
        win: '12',
        loss: '3',
        strength: '80',
        speed: '75',
        stamina: '55',
        punching: '80',
        kicking: '65',
        wrestling: '65',
        grappling: '60',
        clinch: '55'
      }
      sessionStorage.setItem('lhe5', JSON.stringify(lhe5));

      let lhe6 = {
        rank: '6',
        first: 'ANTHONY',
        last: 'SMITH',
        weight: '205',
        height: '6\'4\"',
        nation: 'USA',
        win: '35',
        loss: '16',
        strength: '75',
        speed: '70',
        stamina: '65',
        punching: '75',
        kicking: '70',
        wrestling: '65',
        grappling: '75',
        clinch: '55'
      }
      sessionStorage.setItem('lhe6', JSON.stringify(lhe6));

      let lhe7 = {
        rank: '7',
        first: 'MAGOMED',
        last: 'ANKALAEV',
        weight: '205',
        height: '6\'3\"',
        nation: 'RUSSIA',
        win: '15',
        loss: '1',
        strength: '75',
        speed: '75',
        stamina: '75',
        punching: '75',
        kicking: '65',
        wrestling: '75',
        grappling: '60',
        clinch: '50'
      }
      sessionStorage.setItem('lhe7', JSON.stringify(lhe7));

      let lhe8 = {
        rank: '8',
        first: 'VOLKAN',
        last: 'OEZDEMIR',
        weight: '205',
        height: '6\'1\"',
        nation: 'SWITZERLAND',
        win: '17',
        loss: '5',
        strength: '80',
        speed: '75',
        stamina: '75',
        punching: '80',
        kicking: '70',
        wrestling: '65',
        grappling: '55',
        clinch: '50'
      }
      sessionStorage.setItem('lhe8', JSON.stringify(lhe8));

      let lhe9 = {
        rank: '9',
        first: 'NIKITA',
        last: 'KRYLOV',
        weight: '205',
        height: '6\'3\"',
        nation: 'UKRAINE',
        win: '26',
        loss: '8',
        strength: '70',
        speed: '70',
        stamina: '70',
        punching: '75',
        kicking: '65',
        wrestling: '80',
        grappling: '80',
        clinch: '50'
      }
      sessionStorage.setItem('lhe9', JSON.stringify(lhe9));

      let lhe10 = {
        rank: '10',
        first: '-',
        last: '-',
        weight: '-',
        height: '-',
        nation: '-',
        win: '-',
        loss: '-',
        strength: '-',
        speed: '-',
        stamina: '-',
        punching: '-',
        kicking: '-',
        wrestling: '-',
        grappling: '-',
        clinch: '-'
      }
      sessionStorage.setItem('lhe10', JSON.stringify(lhe10));

      let heaC = {
        rank: 'C',
        first: 'FRANCIS',
        last: 'NGANNOU',
        weight: '265',
        height: '6\'4\"',
        nation: 'CAMEROON',
        win: '16',
        loss: '3',
        strength: '100',
        speed: '75',
        stamina: '55',
        punching: '80',
        kicking: '65',
        wrestling: '50',
        grappling: '40',
        clinch: '45'
      }
      sessionStorage.setItem('heaC', JSON.stringify(heaC));

      let hea1 = {
        rank: '1',
        first: 'STIPE',
        last: 'MIOCIC',
        weight: '235',
        height: '6\'4\"',
        nation: 'USA',
        win: '20',
        loss: '4',
        strength: '80',
        speed: '85',
        stamina: '75',
        punching: '75',
        kicking: '60',
        wrestling: '80',
        grappling: '55',
        clinch: '55'
      }
      sessionStorage.setItem('hea1', JSON.stringify(hea1));

      let hea2 = {
        rank: '2',
        first: 'DERRICK',
        last: 'LEWIS',
        weight: '265',
        height: '6\'3\"',
        nation: 'USA',
        win: '25',
        loss: '7',
        strength: '95',
        speed: '50',
        stamina: '50',
        punching: '75',
        kicking: '60',
        wrestling: '60',
        grappling: '40',
        clinch: '55'
      }
      sessionStorage.setItem('hea2', JSON.stringify(hea2));

      let hea3 = {
        rank: '3',
        first: 'CIRYL',
        last: 'GANE',
        weight: '245',
        height: '6\'5\"',
        nation: 'FRANCE',
        win: '8',
        loss: '0',
        strength: '65',
        speed: '80',
        stamina: '75',
        punching: '90',
        kicking: '70',
        wrestling: '70',
        grappling: '70',
        clinch: '70'
      }
      sessionStorage.setItem('hea3', JSON.stringify(hea3));

      let hea4 = {
        rank: '4',
        first: 'CURTIS',
        last: 'BLAYDES',
        weight: '260',
        height: '6\'4\"',
        nation: 'USA',
        win: '14',
        loss: '3',
        strength: '80',
        speed: '75',
        stamina: '75',
        punching: '70',
        kicking: '55',
        wrestling: '80',
        grappling: '55',
        clinch: '45'
      }
      sessionStorage.setItem('hea4', JSON.stringify(hea4));

      let hea5 = {
        rank: '5',
        first: 'ALEXANDER',
        last: 'VOLKOV',
        weight: '265',
        height: '6\'7\"',
        nation: 'RUSSIA',
        win: '33',
        loss: '8',
        strength: '80',
        speed: '75',
        stamina: '75',
        punching: '80',
        kicking: '70',
        wrestling: '60',
        grappling: '60',
        clinch: '60'
      }
      sessionStorage.setItem('hea5', JSON.stringify(hea5));

      let hea6 = {
        rank: '6',
        first: 'JAIRZINHO',
        last: 'ROZENSTRUIK',
        weight: '255',
        height: '6\'2\"',
        nation: 'SURINAME',
        win: '11',
        loss: '2',
        strength: '90',
        speed: '75',
        stamina: '70',
        punching: '90',
        kicking: '60',
        wrestling: '45',
        grappling: '40',
        clinch: '55'
      }
      sessionStorage.setItem('hea6', JSON.stringify(hea6));

      let hea7 = {
        rank: '7',
        first: 'SHAMIL',
        last: 'ABDURAKHIMOV',
        weight: '260',
        height: '6\'3\"',
        nation: 'RUSSIA',
        win: '20',
        loss: '5',
        strength: '65',
        speed: '75',
        stamina: '75',
        punching: '70',
        kicking: '60',
        wrestling: '65',
        grappling: '55',
        clinch: '50'
      }
      sessionStorage.setItem('hea7', JSON.stringify(hea7));

      let hea8 = {
        rank: '8',
        first: 'WALT',
        last: 'HARRIS',
        weight: '255',
        height: '6\'5\"',
        nation: 'USA',
        win: '13',
        loss: '9',
        strength: '85',
        speed: '75',
        stamina: '60',
        punching: '85',
        kicking: '65',
        wrestling: '50',
        grappling: '45',
        clinch: '55'
      }
      sessionStorage.setItem('hea8', JSON.stringify(hea8));

      let hea9 = {
        rank: '9',
        first: 'AUGUSTO',
        last: 'SAKAI',
        weight: '260',
        height: '6\'3\"',
        nation: 'BRAZIL',
        win: '15',
        loss: '2',
        strength: '70',
        speed: '75',
        stamina: '80',
        punching: '65',
        kicking: '50',
        wrestling: '80',
        grappling: '60',
        clinch: '30'
      }
      sessionStorage.setItem('hea9', JSON.stringify(hea9));

      let hea10 = {
        rank: '10',
        first: '-',
        last: '-',
        weight: '-',
        height: '-',
        nation: '-',
        win: '-',
        loss: '-',
        strength: '-',
        speed: '-',
        stamina: '-',
        punching: '-',
        kicking: '-',
        wrestling: '-',
        grappling: '-',
        clinch: '-'
      }
      sessionStorage.setItem('hea10', JSON.stringify(hea10));

      let wstC = {
        rank: 'C',
        first: 'ROSE',
        last: 'NAMAJUNAS',
        weight: '115',
        height: '5\'5\"',
        nation: 'USA',
        win: '10',
        loss: '4',
        strength: '45',
        speed: '90',
        stamina: '65',
        punching: '90',
        kicking: '80',
        wrestling: '70',
        grappling: '80',
        clinch: '40'
      }
      sessionStorage.setItem('wstC', JSON.stringify(wstC));
      
      let wst1 = {
        rank: '1',
        first: 'ZHANG',
        last: 'WEILI',
        weight: '115',
        height: '5\'4\"',
        nation: 'CHINA',
        win: '21',
        loss: '2',
        strength: '85',
        speed: '80',
        stamina: '70',
        punching: '80',
        kicking: '55',
        wrestling: '70',
        grappling: '80',
        clinch: '70'
      }
      sessionStorage.setItem('wst1', JSON.stringify(wst1));
      
      let wst2 = {
        rank: '2',
        first: 'JOANNA',
        last: 'JEDRZEJCZYK',
        weight: '115',
        height: '5\'6\"',
        nation: 'POLAND',
        win: '16',
        loss: '4',
        strength: '40',
        speed: '80',
        stamina: '90',
        punching: '85',
        kicking: '75',
        wrestling: '30',
        grappling: '25',
        clinch: '70'
      }
      sessionStorage.setItem('wst2', JSON.stringify(wst2));
 
      let wst3 = {
        rank: '3',
        first: 'CARLA',
        last: 'ESPARZA',
        weight: '115',
        height: '5\'1\"',
        nation: 'USA',
        win: '18',
        loss: '6',
        strength: '55',
        speed: '50',
        stamina: '85',
        punching: '30',
        kicking: '25',
        wrestling: '90',
        grappling: '65',
        clinch: '40'
      }
      sessionStorage.setItem('wst3', JSON.stringify(wst3));
 
      let wst4 = {
        rank: '4',
        first: 'YAN',
        last: 'XIAONAN',
        weight: '115',
        height: '5\'5\"',
        nation: 'CHINA',
        win: '13',
        loss: '2',
        strength: '75',
        speed: '75',
        stamina: '80',
        punching: '80',
        kicking: '70',
        wrestling: '30',
        grappling: '35',
        clinch: '70'
      }
      sessionStorage.setItem('wst4', JSON.stringify(wst4));
 
      let wst5 = {
        rank: '5',
        first: 'MARINA',
        last: 'RODRIGUEZ',
        weight: '115',
        height: '5\'6\"',
        nation: 'BRAZIL',
        win: '14',
        loss: '1',
        strength: '75',
        speed: '70',
        stamina: '70',
        punching: '90',
        kicking: '65',
        wrestling: '35',
        grappling: '40',
        clinch: '60'
      }
      sessionStorage.setItem('wst5', JSON.stringify(wst5));
 
      let wst6 = {
        rank: '6',
        first: 'MACKENZIE',
        last: 'DERN',
        weight: '115',
        height: '5\'4\"',
        nation: 'USA',
        win: '11',
        loss: '1',
        strength: '65',
        speed: '50',
        stamina: '50',
        punching: '30',
        kicking: '20',
        wrestling: '75',
        grappling: '80',
        clinch: '35'
      }
      sessionStorage.setItem('wst6', JSON.stringify(wst6));
 
      let wst7 = {
        rank: '7',
        first: 'NINA',
        last: 'NUNES',
        weight: '115',
        height: '5\'5\"',
        nation: 'USA',
        win: '10',
        loss: '7',
        strength: '40',
        speed: '50',
        stamina: '50',
        punching: '60',
        kicking: '65',
        wrestling: '50',
        grappling: '60',
        clinch: '40'
      }
      sessionStorage.setItem('wst7', JSON.stringify(wst7));
 
      let wst8 = {
        rank: '8',
        first: 'CLAUDIA',
        last: 'GADELHA',
        weight: '115',
        height: '5\'4\"',
        nation: 'BRAZIL',
        win: '18',
        loss: '5',
        strength: '40',
        speed: '45',
        stamina: '60',
        punching: '30',
        kicking: '25',
        wrestling: '65',
        grappling: '75',
        clinch: '45'
      }
      sessionStorage.setItem('wst8', JSON.stringify(wst8));
 
      let wst9 = {
        rank: '9',
        first: 'MICHELLE',
        last: 'WATERSON',
        weight: '115',
        height: '5\'3\"',
        nation: 'USA',
        win: '18',
        loss: '9',
        strength: '45',
        speed: '70',
        stamina: '70',
        punching: '70',
        kicking: '80',
        wrestling: '70',
        grappling: '75',
        clinch: '45'
      }
      sessionStorage.setItem('wst9', JSON.stringify(wst9));
 
      let wst10 = {
        rank: '10',
        first: '-',
        last: '-',
        weight: '-',
        height: '-',
        nation: '-',
        win: '-',
        loss: '-',
        strength: '-',
        speed: '-',
        stamina: '-',
        punching: '-',
        kicking: '-',
        wrestling: '-',
        grappling: '-',
        clinch: '-'
      }
      sessionStorage.setItem('wst10', JSON.stringify(wst10));
 
      let wflC = {
        rank: 'C',
        first: 'VALENTINA',
        last: 'SHEVCHENKO',
        weight: '125',
        height: '5\'5\"',
        nation: 'KYRGYZSTAN',
        win: '21',
        loss: '3',
        strength: '80',
        speed: '80',
        stamina: '80',
        punching: '80',
        kicking: '75',
        wrestling: '75',
        grappling: '70',
        clinch: '75'
      }
      sessionStorage.setItem('wflC', JSON.stringify(wflC));
 
      let wfl1 = {
        rank: '1',
        first: 'JESSICA',
        last: 'ANDRADE',
        weight: '125',
        height: '5\'2\"',
        nation: 'BRAZIL',
        win: '21',
        loss: '9',
        strength: '90',
        speed: '80',
        stamina: '70',
        punching: '75',
        kicking: '40',
        wrestling: '75',
        grappling: '75',
        clinch: '60'
      }
      sessionStorage.setItem('wfl1', JSON.stringify(wfl1));
 
      let wfl2 = {
        rank: '2',
        first: 'KATLYN',
        last: 'CHOOKAGIAN',
        weight: '125',
        height: '5\'9\"',
        nation: 'USA',
        win: '16',
        loss: '4',
        strength: '35',
        speed: '70',
        stamina: '85',
        punching: '80',
        kicking: '70',
        wrestling: '30',
        grappling: '50',
        clinch: '60'
      }
      sessionStorage.setItem('wfl2', JSON.stringify(wfl2));
 
      let wfl3 = {
        rank: '3',
        first: 'LAUREN',
        last: 'MURPHY',
        weight: '125',
        height: '5\'5\"',
        nation: 'USA',
        win: '15',
        loss: '4',
        strength: '75',
        speed: '60',
        stamina: '70',
        punching: '55',
        kicking: '30',
        wrestling: '80',
        grappling: '50',
        clinch: '45'
      }
      sessionStorage.setItem('wfl3', JSON.stringify(wfl3));
 
      let wfl4 = {
        rank: '4',
        first: 'JENNIFER',
        last: 'MAIA',
        weight: '125',
        height: '5\'4\"',
        nation: 'BRAZIL',
        win: '19',
        loss: '7',
        strength: '75',
        speed: '65',
        stamina: '70',
        punching: '35',
        kicking: '20',
        wrestling: '70',
        grappling: '75',
        clinch: '50'
      }
      sessionStorage.setItem('wfl4', JSON.stringify(wfl4));
 
      let wfl5 = {
        rank: '5',
        first: 'CYNTHIA',
        last: 'CALVILLO',
        weight: '125',
        height: '5\'4\"',
        nation: 'USA',
        win: '9',
        loss: '2',
        strength: '40',
        speed: '50',
        stamina: '55',
        punching: '75',
        kicking: '60',
        wrestling: '70',
        grappling: '70',
        clinch: '65'
      }
      sessionStorage.setItem('wfl5', JSON.stringify(wfl5));
 
      let wfl6 = {
        rank: '6',
        first: 'JOANNE',
        last: 'CALDERWOOD',
        weight: '125',
        height: '5\'6\"',
        nation: 'SCOTLAND',
        win: '15',
        loss: '6',
        strength: '50',
        speed: '60',
        stamina: '65',
        punching: '65',
        kicking: '35',
        wrestling: '60',
        grappling: '60',
        clinch: '50'
      }
      sessionStorage.setItem('wfl6', JSON.stringify(wfl6));
 
      let wfl7 = {
        rank: '7',
        first: 'VIVIANE',
        last: 'ARAUJO',
        weight: '125',
        height: '5\'5\"',
        nation: 'BRAZIL',
        win: '10',
        loss: '3',
        strength: '50',
        speed: '50',
        stamina: '50',
        punching: '50',
        kicking: '40',
        wrestling: '60',
        grappling: '75',
        clinch: '50'
      }
      sessionStorage.setItem('wfl7', JSON.stringify(wfl7));
 
      let wfl8 = {
        rank: '8',
        first: 'JESSICA',
        last: 'EYE',
        weight: '125',
        height: '5\'6\"',
        nation: 'USA',
        win: '15',
        loss: '10',
        strength: '40',
        speed: '40',
        stamina: '70',
        punching: '45',
        kicking: '30',
        wrestling: '55',
        grappling: '45',
        clinch: '45'
      }
      sessionStorage.setItem('wfl8', JSON.stringify(wfl8));
 
      let wfl9 = {
        rank: '9',
        first: 'ROXANNE',
        last: 'MODAFFERI',
        weight: '125',
        height: '5\'6\"',
        nation: 'USA',
        win: '25',
        loss: '18',
        strength: '50',
        speed: '45',
        stamina: '70',
        punching: '45',
        kicking: '30',
        wrestling: '70',
        grappling: '60',
        clinch: '50'
      }
      sessionStorage.setItem('wfl9', JSON.stringify(wfl9));
 
      let wfl10 = {
        rank: '10',
        first: '-',
        last: '-',
        weight: '-',
        height: '-',
        nation: '-',
        win: '-',
        loss: '-',
        strength: '-',
        speed: '-',
        stamina: '-',
        punching: '-',
        kicking: '-',
        wrestling: '-',
        grappling: '-',
        clinch: '-'
      }
      sessionStorage.setItem('wfl10', JSON.stringify(wfl10));
 
      let wbaC = {
        rank: 'C',
        first: 'AMANDA',
        last: 'NUNES',
        weight: '135',
        height: '5\'8\"',
        nation: 'BRAZIL',
        win: '21',
        loss: '4',
        strength: '100',
        speed: '75',
        stamina: '75',
        punching: '80',
        kicking: '50',
        wrestling: '70',
        grappling: '70',
        clinch: '70'
      }
      sessionStorage.setItem('wbaC', JSON.stringify(wbaC));
 
      let wba1 = {
        rank: '1',
        first: 'GERMAINE',
        last: 'DE RANDAMIE',
        weight: '135',
        height: '5\'9\"',
        nation: 'NETHERLANDS',
        win: '10',
        loss: '4',
        strength: '80',
        speed: '75',
        stamina: '70',
        punching: '95',
        kicking: '70',
        wrestling: '40',
        grappling: '35',
        clinch: '70'
      }
      sessionStorage.setItem('wba1', JSON.stringify(wba1));
 
      let wba2 = {
        rank: '2',
        first: 'HOLLY',
        last: 'HOLM',
        weight: '135',
        height: '5\'8\"',
        nation: 'USA',
        win: '14',
        loss: '5',
        strength: '80',
        speed: '75',
        stamina: '80',
        punching: '80',
        kicking: '75',
        wrestling: '70',
        grappling: '45',
        clinch: '60'
      }
      sessionStorage.setItem('wba2', JSON.stringify(wba2));
 
      let wba3 = {
        rank: '3',
        first: 'ASPEN',
        last: 'LADD',
        weight: '135',
        height: '5\'6\"',
        nation: 'USA',
        win: '9',
        loss: '1',
        strength: '90',
        speed: '80',
        stamina: '65',
        punching: '90',
        kicking: '60',
        wrestling: '50',
        grappling: '50',
        clinch: '50'
      }
      sessionStorage.setItem('wba3', JSON.stringify(wba3));
 
      let wba4 = {
        rank: '4',
        first: 'IRENE',
        last: 'ALDANA',
        weight: '135',
        height: '5\'9\"',
        nation: 'MEXICO',
        win: '13',
        loss: '6',
        strength: '80',
        speed: '70',
        stamina: '50',
        punching: '80',
        kicking: '65',
        wrestling: '60',
        grappling: '50',
        clinch: '65'
      }
      sessionStorage.setItem('wba4', JSON.stringify(wba4));
 
      let wba5 = {
        rank: '5',
        first: 'JULIANNA',
        last: 'PENA',
        weight: '135',
        height: '5\'7\"',
        nation: 'USA',
        win: '10',
        loss: '4',
        strength: '50',
        speed: '60',
        stamina: '55',
        punching: '50',
        kicking: '30',
        wrestling: '60',
        grappling: '70',
        clinch: '50'
      }
      sessionStorage.setItem('wba5', JSON.stringify(wba5));
 
      let wba6 = {
        rank: '6',
        first: 'YANA',
        last: 'KUNITSKAYA',
        weight: '135',
        height: '5\'8\"',
        nation: 'RUSSIA',
        win: '14',
        loss: '6',
        strength: '75',
        speed: '70',
        stamina: '60',
        punching: '75',
        kicking: '65',
        wrestling: '55',
        grappling: '55',
        clinch: '60'
      }
      sessionStorage.setItem('wba6', JSON.stringify(wba6));
 
      let wba7 = {
        rank: '7',
        first: 'KETLEN',
        last: 'VIEIRA',
        weight: '135',
        height: '5\'8\"',
        nation: 'BRAZIL',
        win: '11',
        loss: '2',
        strength: '45',
        speed: '50',
        stamina: '60',
        punching: '35',
        kicking: '30',
        wrestling: '65',
        grappling: '65',
        clinch: '40'
      }
      sessionStorage.setItem('wba7', JSON.stringify(wba7));
 
      let wba8 = {
        rank: '8',
        first: 'MIESHA',
        last: 'TATE',
        weight: '135',
        height: '5\'6\"',
        nation: 'USA',
        win: '19',
        loss: '7',
        strength: '50',
        speed: '60',
        stamina: '70',
        punching: '50',
        kicking: '35',
        wrestling: '80',
        grappling: '80',
        clinch: '60'
      }
      sessionStorage.setItem('wba8', JSON.stringify(wba8));
 
      let wba9 = {
        rank: '9',
        first: 'SARA',
        last: 'MCMANN',
        weight: '135',
        height: '5\'6\"',
        nation: 'USA',
        win: '12',
        loss: '6',
        strength: '70',
        speed: '60',
        stamina: '60',
        punching: '30',
        kicking: '20',
        wrestling: '80',
        grappling: '80',
        clinch: '50'
      }
      sessionStorage.setItem('wba9', JSON.stringify(wba9));
 
      let wba10 = {
        rank: '10',
        first: '-',
        last: '-',
        weight: '-',
        height: '-',
        nation: '-',
        win: '-',
        loss: '-',
        strength: '-',
        speed: '-',
        stamina: '-',
        punching: '-',
        kicking: '-',
        wrestling: '-',
        grappling: '-',
        clinch: '-'
      }
      sessionStorage.setItem('wba10', JSON.stringify(wba10));
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
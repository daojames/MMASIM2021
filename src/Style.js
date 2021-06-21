import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import boxing from './combatstats_boxing.png';
import kickboxing from './combatstats_kickboxing.png';
import muaythai from './combatstats_muaythai.png';
import wrestling from './combatstats_wrestling.png';
import bjj from './combatstats_bjj.png';
import freestyle from './combatstats_freestyle.png';
import './App.css';

const Button = styled.button`
  background-color: transparent;
  color: white;
  padding: 2.132196162vh;
  width: 14.322916666vw;
  height: 9.808102345vh;
  text-align: center;
  margin: 1.066098081vh;
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

function Style() {
  const [boxingShown, setBoxingShown] = useState(false);
  const [kickboxingShown, setKickboxingShown] = useState(false);
  const [muaythaiShown, setMuaythaiShown] = useState(false);
  const [wrestlingShown, setWrestlingShown] = useState(false);
  const [bjjShown, setBjjShown] = useState(false);
  const [freestyleShown, setFreestyleShown] = useState(false);
  const [blankShown, setBlankShown] = useState(false);

  function goBoxing() {
    setBoxingShown(true);
    setKickboxingShown(false);
    setMuaythaiShown(false);
    setWrestlingShown(false);
    setBjjShown(false);
    setFreestyleShown(false);
    sessionStorage.setItem('style', 1);
    console.log(sessionStorage.getItem('style'))
  }
  function goKickboxing() {
    setBoxingShown(false);
    setKickboxingShown(true);
    setMuaythaiShown(false);
    setWrestlingShown(false);
    setBjjShown(false);
    setFreestyleShown(false);
    sessionStorage.setItem('style', 2);
    console.log(sessionStorage.getItem('style'))
  }
  function goMuaythai() {
    setBoxingShown(false);
    setKickboxingShown(false);
    setMuaythaiShown(true);
    setWrestlingShown(false);
    setBjjShown(false);
    setFreestyleShown(false);
    sessionStorage.setItem('style', 3);
    console.log(sessionStorage.getItem('style'))
  }
  function goWrestling() {
    setBoxingShown(false);
    setKickboxingShown(false);
    setMuaythaiShown(false);
    setWrestlingShown(true);
    setBjjShown(false);
    setFreestyleShown(false);
    sessionStorage.setItem('style', 4);
    console.log(sessionStorage.getItem('style'))
  }
  function goBjj() {
    setBoxingShown(false);
    setKickboxingShown(false);
    setMuaythaiShown(false);
    setWrestlingShown(false);
    setBjjShown(true);
    setFreestyleShown(false);
    sessionStorage.setItem('style', 5);
    console.log(sessionStorage.getItem('style'))
  }
  function goFreestyle() {
    setBoxingShown(false);
    setKickboxingShown(false);
    setMuaythaiShown(false);
    setWrestlingShown(false);
    setBjjShown(false);
    setFreestyleShown(true);
    sessionStorage.setItem('style', 6);
    console.log(sessionStorage.getItem('style'))
  }

    return(
        <div className="App">
            <div className="App-header">
              <div className="App-header-styleTop">
                <img src={logo} alt='logo' className="App-logo1"  />
                SELECT A STYLE
              </div>
              <div className="App-header-style">
              <Link to='./customize'><Button onMouseEnter={goBoxing}>BOXING</Button></Link>
              <Link to='./customize'><Button onMouseEnter={goKickboxing}>KICKBOXING</Button></Link>
              <Link to='./customize'><Button onMouseEnter={goMuaythai}>MUAY THAI</Button></Link>
              <Link to='./customize'><Button onMouseEnter={goWrestling}>WRESTLING</Button></Link>
              <Link to='./customize'><Button onMouseEnter={goBjj}>BJJ</Button></Link>
              <Link to='./customize'><Button onMouseEnter={goFreestyle}>FREESTYLE</Button></Link>
              </div>
              {boxingShown && (
                <div>
                  <div className="Style-desc">Combat sport revolving solely around punches</div>
                  <img src={boxing} alt='logo' className="App-combatstats" />
                </div>
              )}
              {kickboxingShown && (
                <div>
                  <div className="Style-desc">Combat sport utilizing punches and kicks</div>
                  <img src={kickboxing} alt='logo' className="App-combatstats" />
                </div>
              )}
              {muaythaiShown && (
                <div>
                  <div className="Style-desc">Combat sport involving punches, elbows, kicks, knees, and clinch fighting</div>
                  <img src={muaythai} alt='logo' className="App-combatstats" />
                </div>
              )}
              {wrestlingShown && (
                <div>
                  <div className="Style-desc">Combat sport focusing on takedowns and pins</div>
                  <img src={wrestling} alt='logo' className="App-combatstats" />
                </div>
              )}
              {bjjShown && (
                <div>
                  <div className="Style-desc">Combat sport based on grappling and submission holds</div>
                  <img src={bjj} alt='logo' className="App-combatstats" />
                </div>
              )}
              {freestyleShown && (
                <div>
                  <div className="Style-desc">Combat style incorporating both stand-up and ground combat</div>
                  <img src={freestyle} alt='logo' className="App-combatstats" />
                </div>
              )}
          </div>
        </div>
    )
}

export default Style;
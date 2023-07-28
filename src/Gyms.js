import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactTooltip from "react-tooltip";
import logo from './mmasim2021logo.png';
import './App.css';

const Button = styled.button`
background-color: transparent;
color: white;
padding: 5px;
width: 900px;
height: 100px;
text-align: center;
margin: 0px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 10px solid white;
border-radius: 2px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const Bronze = styled.button`
background-color: transparent;
color: white;
padding: 5px;
width: 900px;
height: 100px;
text-align: center;
margin: 0px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 10px solid #CD7F32;
border-radius: 2px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const Silver = styled.button`
background-color: transparent;
color: white;
padding: 5px;
width: 900px;
height: 100px;
text-align: center;
margin: 0px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 10px solid #C0C0C0;
border-radius: 2px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const Gold = styled.button`
background-color: transparent;
color: white;
padding: 5px;
width: 900px;
height: 100px;
text-align: center;
margin: 0px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 10px solid #FFD700;
border-radius: 2px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const Diamond = styled.button`
background-color: transparent;
color: white;
padding: 5px;
width: 900px;
height: 100px;
text-align: center;
margin: 0px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 10px solid #00E891;
border-radius: 2px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const Buttonb = styled.button`
background-color: transparent;
color: white;
padding: 5px;
width: 900px;
height: 100px;
text-align: center;
margin: 0px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Buttona = styled.button`
background-color: transparent;
color: white;
padding: 5px;
width: 20px;
text-align: center;
margin: 0px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 2px;
outline: 0;
`

const Button1 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 275px;
height: 50px;
text-align: center;
margin: 10px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button2 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 275px;
height: 50px;
text-align: center;
margin: 10px;
font-size: 100px;
font-family: 'Roboto', sans-serif;
font-style: italic; 
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button3 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 275px;
height: 20px;
text-align: center;
margin-top: -5px;
margin-left: 160px;
margin-right: 160px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic; 
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button4 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 275px;
height: 50px;
text-align: center;
margin-top: -5px;
margin-left: 160px;
margin-right: 160px;
font-size: 40px;
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

class Gym1 extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            att: ((sessionStorage.getItem('gym') == 'AMERICAN TOP TEAM') ? true : false),
            ckb: ((sessionStorage.getItem('gym') == 'CITY KICKBOXING') ? true : false),
            kcf: ((sessionStorage.getItem('gym') == 'KILL CLIFF FC') ? true : false),
            aka: ((sessionStorage.getItem('gym') == 'AMERICAN KICKBOXING ACADEMY') ? true : false),
            tmt: ((sessionStorage.getItem('gym') == 'TIGER MUAY THAI') ? true : false),
            sbg: ((sessionStorage.getItem('gym') == 'XTREME COUTURE') ? true : false),
            cba: ((sessionStorage.getItem('gym') == 'CHUTE BOXE ACADEMY') ? true : false),
            nvu: ((sessionStorage.getItem('gym') == 'TEAM ALPHA MALE') ? true : false),
            eft: ((sessionStorage.getItem('gym') == 'ELEVATION FIGHT TEAM') ? true : false),
            jwm: ((sessionStorage.getItem('gym') == 'MCSWEENEY MMA') ? true : false)
        }
        this.gymATT = this.gymATT.bind(this);
        this.gymCKB = this.gymCKB.bind(this);
        this.gymKCF = this.gymKCF.bind(this);
        this.gymAKA = this.gymAKA.bind(this);
        this.gymTMT = this.gymTMT.bind(this);
        this.gymXCT = this.gymXCT.bind(this);
        this.gymCBA = this.gymCBA.bind(this);
        this.gymTAM = this.gymTAM.bind(this);
        this.gymEFT = this.gymEFT.bind(this);
        this.gymMCS = this.gymMCS.bind(this);
    }
    
    calcMonth(month){
        switch(month){
            case '1':
                return 'JANUARY';
                break;
            case '2':
                return 'FEBRUARY';
                break;
            case '3':
                return 'MARCH';
                break;
            case '4':
                return 'APRIL';
                break;
            case '5':
                return 'MAY';
                break;
            case '6':
                return 'JUNE';
                break;
            case '7':
                return 'JULY';
                break;
            case '8':
                return 'AUGUST';
                break;
            case '9':
                return 'SEPTEMBER';
                break;
            case '10':
                return 'OCTOBER';
                break;
            case '11':
                return 'NOVEMBER';
                break;
            case '12':
                return 'DECEMBER';
                break;
            case '13':
                sessionStorage.setItem('month', 1);
                sessionStorage.setItem('year', (parseInt(sessionStorage.getItem('year')) + 1));
                return 'JANUARY';
                break;
        }
    }

    gymATT = (event) => {
        if (parseInt(sessionStorage.getItem('balance')) >= 200000){
            this.setState({
                att: true,
                ckb: false,
                kcf: false,
                aka: false,
                tmt: false,
                sbg: false,
                cba: false,
                nvu: false,
                eft: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'AMERICAN TOP TEAM');
            sessionStorage.setItem('pnchBuff', 10);
            sessionStorage.setItem('kickBuff', 10);
            sessionStorage.setItem('wrstBuff', 5);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('stmBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 200000);
            sessionStorage.setItem('gymCamp', 100000);
        }
    }

    gymCKB = (event) => {
        if (parseInt(sessionStorage.getItem('balance')) >= 50000){
            this.setState({
                att: false,
                ckb: true,
                kcf: false,
                aka: false,
                tmt: false,
                sbg: false,
                cba: false,
                nvu: false,
                eft: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'CITY KICKBOXING');
            sessionStorage.setItem('pnchBuff', 5);
            sessionStorage.setItem('kickBuff', 10);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('stmBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 50000);
            sessionStorage.setItem('gymCamp', 25000);
        }
    }
    
    gymKCF = (event) => {
        if (parseInt(sessionStorage.getItem('balance')) >= 200000){
            this.setState({
                att: false,
                ckb: false,
                kcf: true,
                aka: false,
                tmt: false,
                sbg: false,
                cba: false,
                nvu: false,
                eft: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'KILL CLIFF FC');
            sessionStorage.setItem('pnchBuff', 5);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 10);
            sessionStorage.setItem('grplBuff', 10);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('stmBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 200000);
            sessionStorage.setItem('gymCamp', 100000);
        }
    }
    
    gymAKA = (event) => {
        if (parseInt(sessionStorage.getItem('balance')) >= 100000){
            this.setState({
                att: false,
                ckb: false,
                kcf: false,
                aka: true,
                tmt: false,
                sbg: false,
                cba: false,
                nvu: false,
                eft: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'AMERICAN KICKBOXING ACADEMY');
            sessionStorage.setItem('pnchBuff', 10);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 10);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('stmBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 100000);
            sessionStorage.setItem('gymCamp', 50000);
        }
    }

    gymTMT = (event) => {
        if (parseInt(sessionStorage.getItem('balance')) >= 100000){
            this.setState({
                att: false,
                ckb: false,
                kcf: false,
                aka: false,
                tmt: true,
                sbg: false,
                cba: false,
                nvu: false,
                eft: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'TIGER MUAY THAI');
            sessionStorage.setItem('pnchBuff', 5);
            sessionStorage.setItem('kickBuff', 5);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 10);
            sessionStorage.setItem('stmBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 100000);
            sessionStorage.setItem('gymCamp', 50000);
        }
    }
    
    gymXCT = (event) => {
        if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: false,
                ckb: false,
                kcf: false,
                aka: false,
                tmt: false,
                sbg: true,
                cba: false,
                nvu: false,
                eft: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'XTREME COUTURE');
            sessionStorage.setItem('pnchBuff', 5);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 5);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('stmBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 20000);
            sessionStorage.setItem('gymCamp', 10000);
        }
    }
    
    gymCBA = (event) => {
        if (parseInt(sessionStorage.getItem('balance')) >= 50000){
            this.setState({
                att: false,
                ckb: false,
                kcf: false,
                aka: false,
                tmt: false,
                sbg: false,
                cba: true,
                nvu: false,
                eft: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'CHUTE BOXE ACADEMY');
            sessionStorage.setItem('pnchBuff', 5);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 10);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('stmBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 50000);
            sessionStorage.setItem('gymCamp', 25000);
        }
    }
    
    gymTAM = (event) => {
        if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: false,
                ckb: false,
                kcf: false,
                aka: false,
                tmt: false,
                sbg: false,
                cba: false,
                nvu: true,
                eft: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'TEAM ALPHA MALE');
            sessionStorage.setItem('pnchBuff', 10);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('stmBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 20000);
            sessionStorage.setItem('gymCamp', 10000);
        }
    }
    
    gymEFT = (event) => {
        if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: false,
                ckb: false,
                kcf: false,
                aka: false,
                tmt: false,
                sbg: false,
                cba: false,
                nvu: false,
                eft: true,
                jwm: false
            })
            sessionStorage.setItem('gym', 'ELEVATION FIGHT TEAM');
            sessionStorage.setItem('pnchBuff', 0);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('stmBuff', 10);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 20000);
            sessionStorage.setItem('gymCamp', 10000);
        }
    }

    gymMCS = (event) => {
        if (parseInt(sessionStorage.getItem('balance')) >= 0){
            this.setState({
                att: false,
                ckb: false,
                kcf: false,
                aka: false,
                tmt: false,
                sbg: false,
                cba: false,
                nvu: false,
                eft: false,
                jwm: true
            })
            sessionStorage.setItem('gym', 'MCSWEENEY MMA');
            sessionStorage.setItem('pnchBuff', 0);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('stmBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 0);
            sessionStorage.setItem('gymCamp', 4000);
        }
    }

    fightBuffs() {
        if (sessionStorage.getItem('gym') == 'NONE') {
            return 'NONE';
        }
        else if (sessionStorage.getItem('gym') == 'AMERICAN TOP TEAM') {
            return '+10 PUNCHING, +10 KICKING, +5 WRESTLING';
        }
        else if (sessionStorage.getItem('gym') == 'CITY KICKBOXING') {
            return '+10 KICKING, +5 PUNCHING';
        }
        else if (sessionStorage.getItem('gym') == 'KILL CLIFF FC') {
            return '+10 WRESTLING, +10 GRAPPLING, +5 PUNCHING';
        }
        else if (sessionStorage.getItem('gym') == 'AMERICAN KICKBOXING ACADEMY') {
            return '+10 WRESTLING, +10 PUNCHING';
        }
        else if (sessionStorage.getItem('gym') == 'TIGER MUAY THAI') {
            return '+10 CLINCH, +5 PUNCHING, +5 KICKING';
        }
        else if (sessionStorage.getItem('gym') == 'XTREME COUTURE') {
            return '+5 PUNCHING, +5 WRESTLING';
        }
        else if (sessionStorage.getItem('gym') == 'CHUTE BOXE ACADEMY') {
            return '+10 GRAPPLING, +5 PUNCHING';
        }
        else if (sessionStorage.getItem('gym') == 'TEAM ALPHA MALE') {
            return '+10 PUNCHING';
        }
        else if (sessionStorage.getItem('gym') == 'ELEVATION FIGHT TEAM') {
            return '+10 STAMINA';
        }
        else if (sessionStorage.getItem('gym') == 'MCSWEENEY MMA') {
            return 'NONE';
        }
    }

    render() {
        let strength = sessionStorage.getItem('str');
        let speed = sessionStorage.getItem('spd');
        let stamina = sessionStorage.getItem('stm');
        let punch = sessionStorage.getItem('punch');
        let kick = sessionStorage.getItem('kick');
        let wrestling = sessionStorage.getItem('wrestling');
        let grappling = sessionStorage.getItem('grappling');
        let clinch = sessionStorage.getItem('clinch');
        let month = sessionStorage.getItem('month');
        let year = sessionStorage.getItem('year');
        let white = "\xa0\xa0\xa0\xa0\xa0\xa0";
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -730 }} />
                        GYM MEMBERSHIP<br/><br/>
                    </div>
                    <div style={{marginTop: 106, marginBottom: -10, fontSize: 40}}>
                        <Buttonb><text style={{ color: 'gray' }}>CURRENT GYM</text><br/><b>{sessionStorage.getItem('gym')}</b></Buttonb>
                        <Buttona></Buttona>
                        <Buttonb><text style={{ color: 'gray' }}>FIGHT BUFFS</text><br/><b>{this.fightBuffs()}</b></Buttonb>
                    </div>
                    <div className="App-customize1" style={{marginTop: 25}}>
                    <Link to='./gyms'><Button data-tip data-for="10" className={this.state.jwm ? "att1" : "att0"} onClick={this.gymMCS}>MCSWEENEY MMA</Button></Link>
                        <ReactTooltip class="Membership" id="10" place="top" effect="solid"><text style={{ color: 'grey' }}>PLANO, TEXAS</text><br/><b>-$4,000</b>/FIGHT<br/><br/><text style={{ color: 'grey' }}>FIGHT BUFFS</text><br/>NONE<br/><br/><text style={{ color: 'grey' }}>CLICK TO SIGN</text><br/><b>-$0</b><br/>‎</ReactTooltip>
                        <Buttona></Buttona>
                        <Link to='./gyms'><Bronze data-tip data-for="9" className={this.state.eft ? "att1" : "att0"} onClick={this.gymEFT}>ELEVATION FIGHT TEAM</Bronze></Link>
                        <ReactTooltip class="Membership" id="9" place="top" effect="solid"><text style={{ color: 'grey' }}>AURORA, COLORADO</text><br/><b>-$10,000</b>/FIGHT<br/><br/><text style={{ color: 'grey' }}>FIGHT BUFFS</text><br/>STM <b>+10</b><br/><br/><text style={{ color: 'grey' }}>CLICK TO SIGN</text><br/><b>-$20,000</b><br/>‎</ReactTooltip>
                    </div>
                    <div className="App-customize1" style={{marginTop: 10}}>
                        <Link to='./gyms'><Bronze data-tip data-for="8" className={this.state.nvu ? "att1" : "att0"} onClick={this.gymTAM}>TEAM ALPHA MALE</Bronze></Link>
                        <ReactTooltip class="Membership" id="8" place="top" effect="solid"><text style={{ color: 'grey' }}>SACRAMENTO, CALIFORNIA</text><br/><b>-$10,000</b>/FIGHT<br/><br/><text style={{ color: 'grey' }}>FIGHT BUFFS</text><br/>PNCH <b>+10</b><br/><br/><text style={{ color: 'grey' }}>CLICK TO SIGN</text><br/><b>-$20,000</b><br/>‎</ReactTooltip>
                        <Buttona></Buttona>
                        <Link to='./gyms'><Bronze data-tip data-for="6" className={this.state.sbg ? "att1" : "att0"} onClick={this.gymXCT}>XTREME COUTURE</Bronze></Link>
                        <ReactTooltip class="Membership" id="6" place="top" effect="solid"><text style={{ color: 'grey' }}>LAS VEGAS, NEVADA</text><br/><b>-$10,000</b>/FIGHT<br/><br/><text style={{ color: 'grey' }}>FIGHT BUFFS</text><br/>PNCH <b>+5</b><br/>WRST <b>+5</b><br/><br/><text style={{ color: 'grey' }}>CLICK TO SIGN</text><br/><b>-$20,000</b><br/>‎</ReactTooltip>
                    </div>
                    <div className="App-customize1" style={{marginTop: 10}}>
                        <Link to='./gyms'><Silver data-tip data-for="7" className={this.state.cba ? "att1" : "att0"} onClick={this.gymCBA}>CHUTE BOXE ACADEMY</Silver></Link>
                        <ReactTooltip class="Membership" id="7" place="top" effect="solid"><text style={{ color: 'grey' }}>CURITIBA, BRAZIL</text><br/><b>-$25,000</b>/FIGHT<br/><br/><text style={{ color: 'grey' }}>FIGHT BUFFS</text><br/>GRPL <b>+10</b><br/>PNCH <b>+5</b><br/><br/><text style={{ color: 'grey' }}>CLICK TO SIGN</text><br/><b>-$50,000</b><br/>‎</ReactTooltip>
                        <Buttona></Buttona>
                        <Link to='./gyms'><Silver data-tip data-for="2" className={this.state.ckb ? "att1" : "att0"} onClick={this.gymCKB}>CITY KICKBOXING</Silver></Link>
                        <ReactTooltip class="Membership" id="2" place="top" effect="solid"><text style={{ color: 'grey' }}>AUCKLAND, NEW ZEALAND</text><br/><b>-$25,000</b>/FIGHT<br/><br/><text style={{ color: 'grey' }}>FIGHT BUFFS</text><br/>KICK <b>+10</b><br/>PNCH <b>+5</b><br/><br/><text style={{ color: 'grey' }}>CLICK TO SIGN</text><br/><b>-$50,000</b><br/>‎</ReactTooltip>
                    </div>
                    <div className="App-customize1" style={{marginTop: 10}}>
                        <Link to='./gyms'><Gold data-tip data-for="5" className={this.state.tmt ? "att1" : "att0"} onClick={this.gymTMT}>TIGER MUAY THAI</Gold></Link>
                        <ReactTooltip class="Membership" id="5" place="top" effect="solid"><text style={{ color: 'grey' }}>PHUKET, THAILAND</text><br/><b>-$50,000</b>/FIGHT<br/><br/><text style={{ color: 'grey' }}>FIGHT BUFFS</text><br/>CLNC <b>+10</b><br/>PNCH <b>+5</b><br/>KICK <b>+5</b><br/><br/><text style={{ color: 'grey' }}>CLICK TO SIGN</text><br/><b>-$100,000</b><br/>‎</ReactTooltip>
                        <Buttona></Buttona>
                        <Link to='./gyms'><Gold data-tip data-for="4" className={this.state.aka ? "att1" : "att0"} onClick={this.gymAKA}>AMERICAN KICKBOXING ACADEMY</Gold></Link>
                        <ReactTooltip class="Membership" id="4" place="top" effect="solid"><text style={{ color: 'grey' }}>SAN JOSE, CALIFORNIA</text><br/><b>-$50,000</b>/FIGHT<br/><br/><text style={{ color: 'grey' }}>FIGHT BUFFS</text><br/>WRST <b>+10</b><br/>PNCH <b>+10</b><br/><br/><text style={{ color: 'grey' }}>CLICK TO SIGN</text><br/><b>-$100,000</b><br/>‎</ReactTooltip>
                    </div>
                    <div className="App-customize1" style={{marginTop: 10}}>
                        <Link to='./gyms'><Diamond data-tip data-for="3" className={this.state.kcf ? "att1" : "att0"} onClick={this.gymKCF}>KILL CLIFF FC</Diamond></Link>
                        <ReactTooltip class="Membership" id="3" place="top" effect="solid"><text style={{ color: 'grey' }}>DEERFIELD BEACH, FLORIDA</text><br/><b>-$100,000</b>/FIGHT<br/><br/><text style={{ color: 'grey' }}>FIGHT BUFFS</text><br/>WRST <b>+10</b><br/>GRPL <b>+10</b><br/>PNCH <b>+5</b><br/><br/><text style={{ color: 'grey' }}>CLICK TO SIGN</text><br/><b>-$200,000</b><br/>‎</ReactTooltip>
                        <Buttona></Buttona>
                        <Link to='./gyms'><Diamond data-tip data-for="1" className={this.state.att ? "att1" : "att0"} onClick={this.gymATT}>AMERICAN TOP TEAM</Diamond></Link>
                        <ReactTooltip class="Membership" id="1" place="top" effect="solid"><text style={{ color: 'grey' }}>COCONUT CREEK, FLORIDA</text><br/><b>-$100,000</b>/FIGHT<br/><br/><text style={{ color: 'grey' }}>FIGHT BUFFS</text><br/>PNCH <b>+10</b><br/>KICK <b>+10</b><br/>WRST <b>+5</b><br/><br/><text style={{ color: 'grey' }}>CLICK TO SIGN</text><br/><b>-$200,000</b><br/>‎</ReactTooltip>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: 26, fontSize: 30 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./gym'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gym1;
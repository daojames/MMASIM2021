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
border: 2px solid white;
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
            snf: ((sessionStorage.getItem('gym') == 'SANFORD MMA') ? true : false),
            aka: ((sessionStorage.getItem('gym') == 'AMERICAN KICKBOXING ACADEMY') ? true : false),
            tmt: ((sessionStorage.getItem('gym') == 'TIGER MUAY THAI') ? true : false),
            sbg: ((sessionStorage.getItem('gym') == 'SBG IRELAND') ? true : false),
            cgj: ((sessionStorage.getItem('gym') == 'CESAR GRACIE JIU JITSU') ? true : false),
            nvu: ((sessionStorage.getItem('gym') == 'NOVA UNIÃO') ? true : false),
            oxs: ((sessionStorage.getItem('gym') == 'ONX SPORTS') ? true : false),
            jwm: ((sessionStorage.getItem('gym') == 'JACKSON WINK MMA') ? true : false)
        }
        this.gymATT = this.gymATT.bind(this);
        this.gymCKB = this.gymCKB.bind(this);
        this.gymSNF = this.gymSNF.bind(this);
        this.gymAKA = this.gymAKA.bind(this);
        this.gymTMT = this.gymTMT.bind(this);
        this.gymSBG = this.gymSBG.bind(this);
        this.gymCGJ = this.gymCGJ.bind(this);
        this.gymNVU = this.gymNVU.bind(this);
        this.gymOXS = this.gymOXS.bind(this);
        this.gymJWM = this.gymJWM.bind(this);
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
        if (sessionStorage.getItem('gym') == 'AMERICAN TOP TEAM'){
            sessionStorage.setItem('gym', 'NONE');
            this.setState({
                att: false
            })
        }
        else if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: true,
                ckb: false,
                snf: false,
                aka: false,
                tmt: false,
                sbg: false,
                cgj: false,
                nvu: false,
                oxs: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'AMERICAN TOP TEAM');
            sessionStorage.setItem('pnchBuff', 5);
            sessionStorage.setItem('kickBuff', 10);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 19000);
            sessionStorage.setItem('gymMonth', 800);
            sessionStorage.setItem('gymCamp', 10000);
        }
    }

    gymCKB = (event) => {
        if (sessionStorage.getItem('gym') == 'CITY KICKBOXING'){
            sessionStorage.setItem('gym', 'NONE');
            this.setState({
                ckb: false
            })
        }
        else if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: false,
                ckb: true,
                snf: false,
                aka: false,
                tmt: false,
                sbg: false,
                cgj: false,
                nvu: false,
                oxs: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'CITY KICKBOXING');
            sessionStorage.setItem('pnchBuff', 10);
            sessionStorage.setItem('kickBuff', 5);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 14500);
            sessionStorage.setItem('gymMonth', 900);
            sessionStorage.setItem('gymCamp', 12500);
        }
    }
    
    gymSNF = (event) => {
        if (sessionStorage.getItem('gym') == 'SANFORD MMA'){
            sessionStorage.setItem('gym', 'NONE');
            this.setState({
                snf: false
            })
        }
        else if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: false,
                ckb: false,
                snf: true,
                aka: false,
                tmt: false,
                sbg: false,
                cgj: false,
                nvu: false,
                oxs: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'SANFORD MMA');
            sessionStorage.setItem('pnchBuff', 10);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 5);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 15000);
            sessionStorage.setItem('gymMonth', 900);
            sessionStorage.setItem('gymCamp', 12500);
        }
    }
    
    gymAKA = (event) => {
        if (sessionStorage.getItem('gym') == 'AMERICAN KICKBOXING ACADEMY'){
            sessionStorage.setItem('gym', 'NONE');
            this.setState({
                aka: false
            })
        }
        else if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: false,
                ckb: false,
                snf: false,
                aka: true,
                tmt: false,
                sbg: false,
                cgj: false,
                nvu: false,
                oxs: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'AMERICAN KICKBOXING ACADEMY');
            sessionStorage.setItem('pnchBuff', 5);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 10);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 20000);
            sessionStorage.setItem('gymMonth', 800);
            sessionStorage.setItem('gymCamp', 10000);
        }
    }

    gymTMT = (event) => {
        if (sessionStorage.getItem('gym') == 'TIGER MUAY THAI'){
            sessionStorage.setItem('gym', 'NONE');
            this.setState({
                tmt: false
            })
        }
        else if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: false,
                ckb: false,
                snf: false,
                aka: false,
                tmt: true,
                sbg: false,
                cgj: false,
                nvu: false,
                oxs: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'TIGER MUAY THAI');
            sessionStorage.setItem('pnchBuff', 5);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 10);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 18000);
            sessionStorage.setItem('gymMonth', 600);
            sessionStorage.setItem('gymCamp', 8000);
        }
    }
    
    gymSBG = (event) => {
        if (sessionStorage.getItem('gym') == 'SBG IRELAND'){
            sessionStorage.setItem('gym', 'NONE');
            this.setState({
                sbg: false
            })
        }
        else if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: false,
                ckb: false,
                snf: false,
                aka: false,
                tmt: false,
                sbg: true,
                cgj: false,
                nvu: false,
                oxs: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'SBG IRELAND');
            sessionStorage.setItem('pnchBuff', 10);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 5);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 14000);
            sessionStorage.setItem('gymMonth', 800);
            sessionStorage.setItem('gymCamp', 11500);
        }
    }
    
    gymCGJ = (event) => {
        if (sessionStorage.getItem('gym') == 'CESAR GRACIE JIU JITSU'){
            sessionStorage.setItem('gym', 'NONE');
            this.setState({
                cgj: false
            })
        }
        else if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: false,
                ckb: false,
                snf: false,
                aka: false,
                tmt: false,
                sbg: false,
                cgj: true,
                nvu: false,
                oxs: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'CESAR GRACIE JIU JITSU');
            sessionStorage.setItem('pnchBuff', 10);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 5);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 14500);
            sessionStorage.setItem('gymMonth', 850);
            sessionStorage.setItem('gymCamp', 12000);
        }
    }
    
    gymNVU = (event) => {
        if (sessionStorage.getItem('gym') == 'NOVA UNIÃO'){
            sessionStorage.setItem('gym', 'NONE');
            this.setState({
                nvu: false
            })
        }
        else if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: false,
                ckb: false,
                snf: false,
                aka: false,
                tmt: false,
                sbg: false,
                cgj: false,
                nvu: true,
                oxs: false,
                jwm: false
            })
            sessionStorage.setItem('gym', 'NOVA UNIÃO');
            sessionStorage.setItem('pnchBuff', 5);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 10);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 19000);
            sessionStorage.setItem('gymMonth', 700);
            sessionStorage.setItem('gymCamp', 9000);
        }
    }
    
    gymOXS = (event) => {
        if (sessionStorage.getItem('gym') == 'ONX SPORTS'){
            sessionStorage.setItem('gym', 'NONE');
            this.setState({
                oxs: false
            })
        }
        else if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: false,
                ckb: false,
                snf: false,
                aka: false,
                tmt: false,
                sbg: false,
                cgj: false,
                nvu: false,
                oxs: true,
                jwm: false
            })
            sessionStorage.setItem('gym', 'ONX SPORTS');
            sessionStorage.setItem('pnchBuff', 15);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 0);
            sessionStorage.setItem('grplBuff', 0);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 10000);
            sessionStorage.setItem('gymMonth', 1000);
            sessionStorage.setItem('gymCamp', 15000);
        }
    }

    gymJWM = (event) => {
        if (sessionStorage.getItem('gym') == 'JACKSON WINK MMA'){
            sessionStorage.setItem('gym', 'NONE');
            this.setState({
                jwm: false
            })
        }
        else if (parseInt(sessionStorage.getItem('balance')) >= 20000){
            this.setState({
                att: false,
                ckb: false,
                snf: false,
                aka: false,
                tmt: false,
                sbg: false,
                cgj: false,
                nvu: false,
                oxs: false,
                jwm: true
            })
            sessionStorage.setItem('gym', 'JACKSON WINK MMA');
            sessionStorage.setItem('pnchBuff', 5);
            sessionStorage.setItem('kickBuff', 0);
            sessionStorage.setItem('wrstBuff', 5);
            sessionStorage.setItem('grplBuff', 5);
            sessionStorage.setItem('clnhBuff', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - 19500);
            sessionStorage.setItem('gymMonth', 750);
            sessionStorage.setItem('gymCamp', 9500);
        }
    }

    fightBuffs() {
        if (sessionStorage.getItem('gym') == 'NONE') {
            return 'NONE';
        }
        else if (sessionStorage.getItem('gym') == 'AMERICAN TOP TEAM') {
            return '+10 KICKING, +5 PUNCHING';
        }
        else if (sessionStorage.getItem('gym') == 'CITY KICKBOXING') {
            return '+10 PUNCHING, +5 KICKING';
        }
        else if (sessionStorage.getItem('gym') == 'SANFORD MMA') {
            return '+10 PUNCHING, +5 WRESTLING';
        }
        else if (sessionStorage.getItem('gym') == 'AMERICAN KICKBOXING ACADEMY') {
            return '+10 WRESTLING, +5 PUNCHING';
        }
        else if (sessionStorage.getItem('gym') == 'TIGER MUAY THAI') {
            return '+10 CLINCH, +5 PUNCHING';
        }
        else if (sessionStorage.getItem('gym') == 'SBG IRELAND') {
            return '+10 PUNCHING, +5 CLINCH';
        }
        else if (sessionStorage.getItem('gym') == 'CESAR GRACIE JIU JITSU') {
            return '+10 PUNCHING, +5 GRAPPLING';
        }
        else if (sessionStorage.getItem('gym') == 'NOVA UNIÃO') {
            return '+10 GRAPPLING, +5 PUNCHING';
        }
        else if (sessionStorage.getItem('gym') == 'ONX SPORTS') {
            return '+15 PUNCHING';
        }
        else if (sessionStorage.getItem('gym') == 'JACKSON WINK MMA') {
            return '+5 PUNCHING, +5 WRESTLING, +5 GRAPPLING';
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
                        <Buttonb>CURRENT GYM<br/><b>{sessionStorage.getItem('gym')}</b></Buttonb>
                        <Buttona></Buttona>
                        <Buttonb>FIGHT BUFFS<br/><b>{this.fightBuffs()}</b></Buttonb>
                    </div>
                    <div className="App-customize1" style={{marginTop: 25}}>
                        <Link to='./gyms'><Button data-tip data-for="1" className={this.state.att ? "att1" : "att0"} onClick={this.gymATT}>AMERICAN TOP TEAM</Button></Link>
                        <ReactTooltip class="Membership" id="1" place="top" effect="solid">COCONUT CREEK, FLORIDA<br/><b>$10000</b>/FIGHT, <b>$800</b>/MONTH<br/><br/><u>FIGHT BUFF</u><br/>KICK +10<br/>PNCH +5<br/><br/>CLICK TO SIGN<br/><b>$19000</b></ReactTooltip>
                        <Buttona></Buttona>
                        <Link to='./gyms'><Button data-tip data-for="2" className={this.state.ckb ? "att1" : "att0"} onClick={this.gymCKB}>CITY KICKBOXING</Button></Link>
                        <ReactTooltip class="Membership" id="2" place="top" effect="solid">AUCKLAND, NEW ZEALAND<br/><b>$12500</b>/FIGHT, <b>$900</b>/MONTH<br/><br/><u>FIGHT BUFF</u><br/>PNCH +10<br/>KICK +5<br/><br/>CLICK TO SIGN<br/><b>$14500</b></ReactTooltip>
                    </div>
                    <div className="App-customize1" style={{marginTop: 10}}>
                        <Link to='./gyms'><Button data-tip data-for="3" className={this.state.snf ? "att1" : "att0"} onClick={this.gymSNF}>SANFORD MMA</Button></Link>
                        <ReactTooltip class="Membership" id="3" place="top" effect="solid">FORT LAUDERDALE, FLORIDA<br/><b>$12500</b>/FIGHT, <b>$900</b>/MONTH<br/><br/><u>FIGHT BUFF</u><br/>PNCH +10<br/>WRST +5<br/><br/>CLICK TO SIGN<br/><b>$15000</b></ReactTooltip>
                        <Buttona></Buttona>
                        <Link to='./gyms'><Button data-tip data-for="4" className={this.state.aka ? "att1" : "att0"} onClick={this.gymAKA}>AMERICAN KICKBOXING ACADEMY</Button></Link>
                        <ReactTooltip class="Membership" id="4" place="top" effect="solid">SAN JOSE, CALIFORNIA<br/><b>$10000</b>/FIGHT, <b>$800</b>/MONTH<br/><br/><u>FIGHT BUFF</u><br/>WRST +10<br/>PNCH +5<br/><br/>CLICK TO SIGN<br/><b>$20000</b></ReactTooltip>
                    </div>
                    <div className="App-customize1" style={{marginTop: 10}}>
                        <Link to='./gyms'><Button data-tip data-for="5" className={this.state.tmt ? "att1" : "att0"} onClick={this.gymTMT}>TIGER MUAY THAI</Button></Link>
                        <ReactTooltip class="Membership" id="5" place="top" effect="solid">PHUKET, THAILAND<br/><b>$8000</b>/FIGHT, <b>$600</b>/MONTH<br/><br/><u>FIGHT BUFF</u><br/>CLNH +10<br/>PNCH +5<br/><br/>CLICK TO SIGN<br/><b>$18000</b></ReactTooltip>
                        <Buttona></Buttona>
                        <Link to='./gyms'><Button data-tip data-for="6" className={this.state.sbg ? "att1" : "att0"} onClick={this.gymSBG}>SBG IRELAND</Button></Link>
                        <ReactTooltip class="Membership" id="6" place="top" effect="solid">DUBLIN, IRELAND<br/><b>$11500</b>/FIGHT, <b>$800</b>/MONTH<br/><br/><u>FIGHT BUFF</u><br/>PNCH +10<br/>CLNH +5<br/><br/>CLICK TO SIGN<br/><b>$14000</b></ReactTooltip>
                    </div>
                    <div className="App-customize1" style={{marginTop: 10}}>
                        <Link to='./gyms'><Button data-tip data-for="7" className={this.state.cgj ? "att1" : "att0"} onClick={this.gymCGJ}>CESAR GRACIE JIU JITSU</Button></Link>
                        <ReactTooltip class="Membership" id="7" place="top" effect="solid">SAN FRANCISCO, CALIFORNIA<br/><b>$12000</b>/FIGHT, <b>$850</b>/MONTH<br/><br/><u>FIGHT BUFF</u><br/>PNCH +10<br/>GRPL +5<br/><br/>CLICK TO SIGN<br/><b>$14500</b></ReactTooltip>
                        <Buttona></Buttona>
                        <Link to='./gyms'><Button data-tip data-for="8" className={this.state.nvu ? "att1" : "att0"} onClick={this.gymNVU}>NOVA UNIÃO</Button></Link>
                        <ReactTooltip class="Membership" id="8" place="top" effect="solid">RIO DE JANEIRO, BRAZIL<br/><b>$9000</b>/FIGHT, <b>$700</b>/MONTH<br/><br/><u>FIGHT BUFF</u><br/>GRPL +10<br/>PNCH +5<br/><br/>CLICK TO SIGN<br/><b>$19000</b></ReactTooltip>
                    </div>
                    <div className="App-customize1" style={{marginTop: 10}}>
                        <Link to='./gyms'><Button data-tip data-for="9" className={this.state.oxs ? "att1" : "att0"} onClick={this.gymOXS}>ONX SPORTS</Button></Link>
                        <ReactTooltip class="Membership" id="9" place="top" effect="solid">DENVER, COLORADO<br/><b>$15000</b>/FIGHT, <b>$1000</b>/MONTH<br/><br/><u>FIGHT BUFF</u><br/>PNCH +15<br/><br/>CLICK TO SIGN<br/><b>$10000</b></ReactTooltip>
                        <Buttona></Buttona>
                        <Link to='./gyms'><Button data-tip data-for="10" className={this.state.jwm ? "att1" : "att0"} onClick={this.gymJWM}>JACKSON WINK MMA</Button></Link>
                        <ReactTooltip class="Membership" id="10" place="top" effect="solid">ALBUQUERQUE, NEW MEXICO<br/><b>$9500</b>/FIGHT, <b>$750</b>/MONTH<br/><br/><u>FIGHT BUFF</u><br/>PNCH +5<br/>WRST +5<br/>GRPL +5<br/><br/>CLICK TO SIGN<br/><b>$19500</b></ReactTooltip>
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
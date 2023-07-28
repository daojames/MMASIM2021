import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';
import returnFighterM from './ReturnFighterM.js';
import returnFighterF from './ReturnFighterF.js';
import getFlag from './GetFlag.js';

const Button = styled.button`
background-color: transparent;
color: white;
padding: 2.132196162vh;
width: 14.322916666vw;
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

const ButtonG = styled.button`
background-color: grey;
color: white;
padding: 2.132196162vh;
width: 14.322916666vw;
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

const Button1 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 14.322916666vw;
height: 5.330490405vh;
text-align: center;
margin: 1.066098081vh;
font-size: 1.5625vw;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button1a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 800px;
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
width: 14.322916666vw;
height: 5.330490405vh;
text-align: center;
margin: 1.066098081vh;
font-size: 5.208333333vw;
font-family: 'Roboto', sans-serif;
font-style: italic; 
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button2a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 800px;
height: 100px;
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
width: 14.322916666vw;
height: 1.041666666vh;
text-align: center;
margin-top: -0.53304904vh;
margin-left: 8.333333333vw;
margin-right: 8.333333333vw;
font-size: 3.198294243vh;
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
width: 14.322916666vw;
height: 5.330490405vh;
text-align: center;
margin-top: -0.53304904vh;
margin-left: 8.333333333vw;
margin-right: 8.333333333vw;
font-size: 2.08334vw;
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

const Button6 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 700px;
height: 50px;
text-align: center;
margin-top: 0px;
margin-left: 0px;
margin-right: 0px;
font-size: 50px;
border: 0px;
font-family: 'Roboto', sans-serif;
font-style: italic;
`

const Flag = styled.button`
position: absolute;
pointer-events: none;
background-color: transparent;
color: white;
padding: 0px;
text-align: left;
font-size: 0px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

class Offer1 extends React.Component {
    weightCalc(str) {
        if(str == "FLYWEIGHT"){
            return '125';
        }
        else if(str == "BANTAMWEIGHT"){
            return '135';
        }
        else if(str == "FEATHERWEIGHT"){
            return '145';
        }
        else if(str == 'LIGHTWEIGHT'){
            return '155';
        }
        else if(str == 'WELTERWEIGHT'){
            return '170';
        }
        else if(str == 'MIDDLEWEIGHT'){
            return '185';
        }
        else if(str == 'LIGHT HEAVYWEIGHT'){
            return '205';
        }
        else if(str == 'HEAVYWEIGHT'){
            return '265';
        }
        else if(str == 'WSTRAWWEIGHT'){
            return '115';
        }
        else if(str == 'WFLYWEIGHT'){
            return '125';
        }
        else if(str == 'WBANTAMWEIGHT'){
            return '135';
        }
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
                sessionStorage.setItem('year', ((parseInt(sessionStorage.getItem('year')) + 1)));
                return 'JANUARY';
                break;
        }
    }

    getFirst() {
        let data = this.getOppObj();
        return data.first;
    }

    getLast() {
        let data = this.getOppObj();
        return data.last;
    }

    getWeight() {
        let str = sessionStorage.getItem('wc');
        if(str == 1){
            return 125;
        }
        else if(str == 2) {
            return 135;
        }
        else if(str == 3) {
            return 145;
        }
        else if(str == 4) {
            return 155;
        }
        else if(str == 5) {
            return 170;
        }
        else if(str == 6) {
            return 185;
        }
        else if(str == 7) {
            return 205;
        }
        else if(str == 8) {
            return 265;
        }
        else if(str == 9) {
            return 115;
        }
        else if(str == 10) {
            return 125;
        }
        else if(str == 11) {
            return 135;
        }
    }

    getHeight() {
        let data = this.getOppObj();
        let hgt = data.height;
        let wc = sessionStorage.getItem('wc');
        if (wc == 1 || wc == 10){
            if (hgt == 1){
                return '5\'2\"';
            }
            else if (hgt == 2){
                return '5\'4\"';
            }
            else if (hgt == 3){
                return '5\'5\"';
            }
            else if (hgt == 4){
                return '5\'6\"';
            }
            else if (hgt == 5){
                return '5\'8\"';
            }
        }
        else if (wc == 9){
            if (hgt == 1){
                return '5\'1\"';
            }
            else if (hgt == 2){
                return '5\'3\"';
            }
            else if (hgt == 3){
                return '5\'4\"';
            }
            else if (hgt == 4){
                return '5\'5\"';
            }
            else if (hgt == 5){
                return '5\'7\"';
            }
        }
        else if (wc == 11){
            if (hgt == 1){
                return '5\'3\"';
            }
            else if (hgt == 2){
                return '5\'5\"';
            }
            else if (hgt == 3){
                return '5\'6\"';
            }
            else if (hgt == 4){
                return '5\'7\"';
            }
            else if (hgt == 5){
                return '5\'9\"';
            }
        }
        else if (wc == 2){
            if (hgt == 1){
                return '5\'4\"';
            }
            else if (hgt == 2){
                return '5\'6\"';
            }
            else if (hgt == 3){
                return '5\'7\"';
            }
            else if (hgt == 4){
                return '5\'8\"';
            }
            else if (hgt == 5){
                return '5\'10\"';
            }
        }
        else if (wc == 3){
            if (hgt == 1){
                return '5\'6\"';
            }
            else if (hgt == 2){
                return '5\'8\"';
            }
            else if (hgt == 3){
                return '5\'9\"';
            }
            else if (hgt == 4){
                return '5\'10\"';
            }
            else if (hgt == 5){
                return '6\'0\"';
            }
        }
        else if (wc == 4){
            if (hgt == 1){
                return '5\'7\"';
            }
            else if (hgt == 2){
                return '5\'9\"';
            }
            else if (hgt == 3){
                return '5\'10\"';
            }
            else if (hgt == 4){
                return '5\'11\"';
            }
            else if (hgt == 5){
                return '6\'1\"';
            }
        }
        else if (wc == 5){
            if (hgt == 1){
                return '5\'8\"';
            }
            else if (hgt == 2){
                return '5\'10\"';
            }
            else if (hgt == 3){
                return '5\'11\"';
            }
            else if (hgt == 4){
                return '6\'0\"';
            }
            else if (hgt == 5){
                return '6\'2\"';
            }
        }
        else if (wc == 6){
            if (hgt == 1){
                return '5\'10\"';
            }
            else if (hgt == 2){
                return '6\'0\"';
            }
            else if (hgt == 3){
                return '6\'1\"';
            }
            else if (hgt == 4){
                return '6\'2\"';
            }
            else if (hgt == 5){
                return '6\'4\"';
            }
        }
        else if (wc == 7){
            if (hgt == 1){
                return '5\'11\"';
            }
            else if (hgt == 2){
                return '6\'1\"';
            }
            else if (hgt == 3){
                return '6\'2\"';
            }
            else if (hgt == 4){
                return '6\'3\"';
            }
            else if (hgt == 5){
                return '6\'5\"';
            }
        }
        else if (wc == 8){
            if (hgt == 1){
                return '6\'0\"';
            }
            else if (hgt == 2){
                return '6\'2\"';
            }
            else if (hgt == 3){
                return '6\'3\"';
            }
            else if (hgt == 4){
                return '6\'4\"';
            }
            else if (hgt == 5){
                return '6\'6\"';
            }
        }
    }

    getStrength() {
        let data = this.getOppObj();
        return data.strength;
    }

    getSpeed() {
        let data = this.getOppObj();
        return data.speed;
    }

    getStamina() {
        let data = this.getOppObj();
        return data.stamina;
    }

    getPunching() {
        let data = this.getOppObj();
        return data.punching;
    }

    getKicking() {
        let data = this.getOppObj();
        return data.kicking;
    }

    getWrestling() {
        let data = this.getOppObj();
        return data.wrestling;
    }

    getGrappling() {
        let data = this.getOppObj();
        return data.grappling;
    }

    getClinch() {
        let data = this.getOppObj();
        return data.clinch;
    }

    getNation() {
        let data = this.getOppObj();
        return data.nation;
    }

    getWin() {
        let data = this.getOppObj();
        return data.win;
    }

    getLoss() {
        let data = this.getOppObj();
        return data.loss;
    }

    getRate() {
        let data = this.getOppObj();
        return data.rate;
    }

    getKo() {
        let data = this.getOppObj();
        return data.ko;
    }

    getSub() {
        let data = this.getOppObj();
        return data.sub;
    }

    getOppObj() {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);

        if (data.weight != 'WSTRAWWEIGHT' && data.weight != 'WFLYWEIGHT' && data.weight != 'WBANTAMWEIGHT') {
            switch (parseInt(sessionStorage.getItem('month'))) {
                case 1:
                    return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w1f1p2'))));
                break;
                case 2:
                    return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w2f1p2'))));
                break;
                case 3:
                    return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w3f1p2'))));
                break;
                case 4:
                    return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w4f1p2'))));
                break;
                case 5:
                    return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w5f1p2'))));
                break;
                case 6:
                    return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w6f1p2'))));
                break;
                case 7:
                    return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w7f1p2'))));
                break;
                case 8:
                    return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w8f1p2'))));
                break;
                default:
                    return JSON.parse(sessionStorage.getItem('nr' + sessionStorage.getItem('oppNum')));
                break;
            }
        }
        else {
            switch (parseInt(sessionStorage.getItem('month'))) {
                case 1:
                    return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w1f1m2'))));
                break;
                case 2:
                    return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w2f1m2'))));
                break;
                case 3:
                    return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w3f1m2'))));
                break;
                case 4:
                    return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w4f1m2'))));
                break;
                case 5:
                    return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w5f1m2'))));
                break;
                case 6:
                    return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w6f1m2'))));
                break;
                case 7:
                    return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w7f1m2'))));
                break;
                case 8:
                    return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w8f1m2'))));
                break;
                default:
                    return JSON.parse(sessionStorage.getItem('nrf' + (parseInt(sessionStorage.getItem('oppNum')) - 100)));
                break;
            }
        }
    }

    notFirst() {
        sessionStorage.setItem('first', 'false');
    }

    progressTime() {
        sessionStorage.setItem('month', (parseInt(sessionStorage.getItem('month')) + 1));
    }

    getRank() {
        let data = this.getOppObj();
        let rank = data.rank;
        if (rank == 'NR'){
            return 'NR ';
        }
        else if (rank == 'C'){
            return 'C';
        }
        else {
            return rank;
        }
    }

    handleFight = (event) => {
  
    }

    getColor(x) {
        let data = this.getOppObj();

        switch(data.nation) {
            case 'USA':
                return '#3A5EAB';
            break;
            case 'MEXICO':
                return '#006341';
            break;
            case 'INDIA':
                return '#FF671F';
            break;
            case 'VIETNAM':
                return '#FFCD00';
            break;
            case 'PALESTINE':
                return '#149954';
            break;
            case 'CANADA':
                return '#D80621';
            break;
            case 'OMAN':
                return '#C8102E';
            break;
            case 'PAKISTAN':
                return '#115740';
            break;
            case 'PUERTO RICO':
                return '#3A5EAB';
            break;
            case 'SWEDEN':
                return '#006AA7';
            break;
            case 'CHINA':
                return '#EE1C25';
            break;
            case 'KOREA':
                return '#FFFFFF';
            break;
            case 'THAILAND':
                return '#00247D';
            break;
            case 'RHODESIA':
                return '#0F4B32';
            break;
            default:
                return '#FFFFFF';
            break;
        }
    }

    render() {
        let month = sessionStorage.getItem('month');
        let year = sessionStorage.getItem('year');
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -173 }} />
                        FIGHTER PROFILE<br/><br/>
                        <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 130, marginRight: 120, fontSize: 70, marginTop: -70 }}><text style={{ color: 'grey' }}>{this.getRank()}</text> <b>{this.getFirst(sessionStorage.getItem('wc'))} {this.getLast(sessionStorage.getItem('wc'))}</b> <text style={{ color: 'grey' }}>{this.getWin()} - {this.getLoss()}</text><br/></div>
                        <Button6></Button6>
                        <Flag style={{ marginTop: -470 }}><img src={getFlag(9)} width="123" height="70"></img></Flag>
                        <div className="App-customize2" style={{marginTop: 10}}>
                            <Button1>FINISH RATE</Button1>
                            <Button1>KO</Button1>
                            <Button1>SUB</Button1>
                            <Button1>WEIGHT</Button1>
                            <Button1>HEIGHT</Button1>
                        </div>
                        <div className="App-customize3" style={{marginTop: -20}}>
                            <Button2><b>{this.getRate()}%</b></Button2>
                            <Button2><b>{this.getKo()}</b></Button2>
                            <Button2><b>{this.getSub()}</b></Button2>
                            <Button2><b>{this.getWeight()}</b></Button2>
                            <Button2><b>{this.getHeight()}</b></Button2>
                        </div>
                        <div className="App-customize2" style={{marginTop: 25}}>
                            <Button1>STRENGTH</Button1>
                            <Button1>SPEED</Button1>
                            <Button1>STAMINA</Button1>
                        </div>
                        <div className="App-customize3" style={{marginTop: -20}}>
                            <Button2><b>{this.getStrength()}</b></Button2>
                            <Button2><b>{this.getSpeed()}</b></Button2>
                            <Button2><b>{this.getStamina()}</b></Button2>
                        </div>
                        <div className="App-customize2" style={{marginTop: 25}}>
                            <Button1>PUNCHING</Button1>
                            <Button1>KICKING</Button1>
                            <Button1>WRESTLING</Button1>
                            <Button1>GRAPPLING</Button1>
                            <Button1>CLINCH</Button1>
                        </div>
                        <div className="App-customize3" style={{marginTop: -20}}>
                            <Button2><b>{this.getPunching()}</b></Button2>
                            <Button2><b>{this.getKicking()}</b></Button2>
                            <Button2><b>{this.getWrestling()}</b></Button2>
                            <Button2><b>{this.getGrappling()}</b></Button2>
                            <Button2><b>{this.getClinch()}</b></Button2>
                        </div>
                        <div className="App-header-style1" style={{marginTop: 23, marginBottom: -131}}>
                            <Link to='/stale'><Button onClick={this.handleFight}>FIGHT</Button></Link>
                        </div>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: 837 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./schedule'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Offer1;
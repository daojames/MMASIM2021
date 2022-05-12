import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';

const Button = styled.button`
background-color: transparent;
color: white;
padding: 20px;
width: 275px;
text-align: center;
margin: 10px;
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

class Offer5 extends React.Component {
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

    getOppObj() {
        let num = parseInt(sessionStorage.getItem('abc5'));
        let no = null;

        switch(num) {
            case 1:
                no = 'nr1';
            break;
            case 2:
                no = 'nr2';
            break;
            case 3:
                no = 'nr3';
            break;
            case 4:
                no = 'nr4';
            break;
            case 5:
                no = 'nr5';
            break;
            case 6:
                no = 'nr6';
            break;
            case 7:
                no = 'nr7';
            break;
            case 8:
                no = 'nr8';
            break;
            case 9:
                no = 'nr9';
            break;
            case 10:
                no = 'nr10';
            break;
            case 11:
                no = 'nr11';
            break;
            case 12:
                no = 'nr12';
            break;
            case 13:
                no = 'nr13';
            break;
            case 14:
                no = 'nr14';
            break;
            case 15:
                no = 'nr15';
            break;
            case 16:
                no = 'nr16';
            break;
            case 17:
                no = 'nr17';
            break;
            case 18:
                no = 'nr18';
            break;
            case 19:
                no = 'nr19';
            break;
            case 20:
                no = 'nr20';
            break;
            case 21:
                no = 'nr21';
            break;
            case 22:
                no = 'nr22';
            break;
            case 23:
                no = 'nr23';
            break;
            case 24:
                no = 'nr24';
            break;
            case 101:
                no = 'nrf1';
            break;
            case 102:
                no = 'nrf2';
            break;
            case 103:
                no = 'nrf3';
            break;
            case 104:
                no = 'nrf4';
            break;
            case 105:
                no = 'nrf5';
            break;
            case 106:
                no = 'nrf6';
            break;
            case 107:
                no = 'nrf7';
            break;
            case 108:
                no = 'nrf8';
            break;
            case 109:
                no = 'nrf9';
            break;
            case 110:
                no = 'nrf10';
            break;
            case 111:
                no = 'nrf11';
            break;
            case 112:
                no = 'nrf12';
            break;
        }
        let data = sessionStorage.getItem(no);
        data = JSON.parse(data);
        return data;
    }

    notFirst() {
        sessionStorage.setItem('first', false);
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

    render() {
        let month = sessionStorage.getItem('month');
        let year = sessionStorage.getItem('year');
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -173 }} />
                        FIGHTER PROFILE<br/><br/>
                        <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 130, marginRight: 120, fontSize: 70, marginTop: -70 }}><b>{this.getFirst(sessionStorage.getItem('wc'))} {this.getLast(sessionStorage.getItem('wc'))}</b><br/></div>
                        <Button6>{this.getNation()}</Button6>
                        <div className="App-customize2" style={{marginTop: 10}}>
                            <Button1>RANK</Button1>
                            <Button1>WINS</Button1>
                            <Button1>LOSSES</Button1>
                            <Button1>WEIGHT</Button1>
                            <Button1>HEIGHT</Button1>
                        </div>
                        <div className="App-customize3" style={{marginTop: -20}}>
                            <Button2><b>{this.getRank()}</b></Button2>
                            <Button2><b>{this.getWin()}</b></Button2>
                            <Button2><b>{this.getLoss()}</b></Button2>
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
                        <div className="App-customize3" style={{marginTop: 15, marginBottom: -113}}>
                            <Link to='/tale5'><Button onClick={this.handleFight}>TAPE</Button></Link>
                        </div>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: 833 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./fight'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Offer5;
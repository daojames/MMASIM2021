import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';
import returnFighterM from './ReturnFighterM';
import returnFighterF from './ReturnFighterF';
import getFlag from './GetFlag';

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

const Rec = styled.button`
position: absolute;
pointer-events: none;
background-color: transparent;
color: grey;
padding: 0px;
width: 280px;
text-align: center;
font-size: 70px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Type = styled.button`
position: absolute;
pointer-events: none;
background-color: transparent;
color: grey;
padding: 0px;
width: 120px;
text-align: center;
font-size: 22px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Num = styled.button`
position: absolute;
pointer-events: none;
background-color: transparent;
color: white;
padding: 0px;
width: 120px;
text-align: center;
font-size: 45px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Name1 = styled.button`
position: absolute;
pointer-events: none;
background-color: transparent;
color: white;
padding: 0px;
text-align: center;
font-size: 70px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Name2 = styled.button`
position: absolute;
pointer-events: none;
background-color: transparent;
color: white;
padding: 0px;
text-align: center;
font-size: 70px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Line = styled.button`
position: absolute;
pointer-events: none;
background-color: transparent;
color: white;
height: 1px;
width: 500px;
padding: 0px;
text-align: center;
font-size: 0px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 1px solid white;
border-radius: 0px;
outline: 0;
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

const Button1d = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 700px;
height: 50px;
text-align: center;
margin: 10px;
font-size: 40px;
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
width: 200px;
height: 50px;
text-align: center;
margin: 10px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button1al = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 170px;
height: 150px;
text-align: center;
margin: 0px;
font-size: 70px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button1ar = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 170px;
height: 150px;
text-align: center;
margin: 0px;
font-size: 70px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button1b = styled.button`
background-color: transparent;
color: grey;
padding: 0px;
width: 300px;
height: 150px;
text-align: center;
margin-left: 10px;
margin-right: 10px;
font-size: 50px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button1cl = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 700px;
height: 50px;
text-align: right;
margin: 10px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button1cr = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 700px;
height: 50px;
text-align: left;
margin: 10px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
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

class STale extends React.Component {
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

    heightCalc(str, height){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(str == "FLYWEIGHT" || str == "WFLYWEIGHT"){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'2\"');
                    return '5\'2\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '5\'4\"');
                    return '5\'4\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '5\'5\"');
                    return '5\'5\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '5\'6\"');
                    return '5\'6\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '5\'8\"');
                    return '5\'8\"';
                }
            }
            else if(str == "WSTRAWWEIGHT"){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'1\"');
                    return '5\'1\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '5\'3\"');
                    return '5\'3\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '5\'4\"');
                    return '5\'4\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '5\'5\"');
                    return '5\'5\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '5\'7\"');
                    return '5\'7\"';
                }
            }
            if(str == "WBANTAMWEIGHT"){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'3\"');
                    return '5\'3\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '5\'5\"');
                    return '5\'5\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '5\'6\"');
                    return '5\'6\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '5\'7\"');
                    return '5\'7\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '5\'9\"');
                    return '5\'9\"';
                }
            }
            else if(str == "BANTAMWEIGHT"){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'4\"');
                    return '5\'4\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '5\'6\"');
                    return '5\'6\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '5\'7\"');
                    return '5\'7\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '5\'8\"');
                    return '5\'8\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '5\'10\"');
                    return '5\'10\"';
                }
            }
            else if(str == "FEATHERWEIGHT"){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'6\"');
                    return '5\'6\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '5\'8\"');
                    return '5\'8\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '5\'9\"');
                    return '5\'9\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '5\'10\"');
                    return '5\'10\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '6\'0\"');
                    return '6\'0\"';
                }
            }
            else if(str == 'LIGHTWEIGHT'){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'7\"');
                    return '5\'7\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '5\'9\"');
                    return '5\'9\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '5\'10\"');
                    return '5\'10\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '5\'11\"');
                    return '5\'11\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '6\'1\"');
                    return '6\'1\"';
                }
            }
            else if(str == 'WELTERWEIGHT'){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'8\"');
                    return '5\'8\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '5\'10\"');
                    return '5\'10\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '5\'11\"');
                    return '5\'11\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '6\'0\"');
                    return '6\'0\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '6\'2\"');
                    return '6\'2\"';
                }
            }
            else if(str == 'MIDDLEWEIGHT'){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'10\"');
                    return '5\'10\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '6\'0\"');
                    return '6\'0\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '6\'1\"');
                    return '6\'1\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '6\'2\"');
                    return '6\'2\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '6\'4\"');
                    return '6\'4\"';
                }
            }
            else if(str == 'LIGHT HEAVYWEIGHT'){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'11\"');
                    return '5\'11\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '6\'1\"');
                    return '6\'1\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '6\'2\"');
                    return '6\'2\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '6\'3\"');
                    return '6\'3\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '6\'5\"');
                    return '6\'5\"';
                }
            }
            else if(str == 'HEAVYWEIGHT'){
                if(height == "1"){
                    sessionStorage.setItem('height', '6\'0\"');
                    return '6\'0\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '6\'2\"');
                    return '6\'2\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '6\'3\"');
                    return '6\'3\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '6\'4\"');
                    return '6\'4\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '6\'6\"');
                    return '6\'6\"';
                }
            }
        }
        else {
            let value = sessionStorage.getItem('height');
            return value;
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

    getRate() {
        let data = this.getOppObj();
        return data.rate; 
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

    getStrk() {
        let data = this.getOppObj();
        return data.strk;
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
            return 'NR';
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

    ftin(hgt) {
        if (hgt == '5\'1\"') {
            return 61;
        }
        else if (hgt == '5\'2\"') {
            return 62;
        }
        else if (hgt == '5\'3\"') {
            return 63;
        }
        else if (hgt == '5\'4\"') {
            return 64;
        }
        else if (hgt == '5\'5\"') {
            return 65;
        }
        else if (hgt == '5\'6\"') {
            return 66;
        }
        else if (hgt == '5\'7\"') {
            return 67;
        }
        else if (hgt == '5\'8\"') {
            return 68;
        }
        else if (hgt == '5\'9\"') {
            return 69;
        }
        else if (hgt == '5\'10\"') {
            return 70;
        }
        else if (hgt == '5\'11\"') {
            return 71;
        }
        else if (hgt == '6\'0\"') {
            return 72;
        }
        else if (hgt == '6\'1\"') {
            return 73;
        }
        else if (hgt == '6\'2\"') {
            return 74;
        }
        else if (hgt == '6\'3\"') {
            return 75;
        }
        else if (hgt == '6\'4\"') {
            return 76;
        }
        else if (hgt == '6\'5\"') {
            return 77;
        }
        else if (hgt == '6\'6\"') {
            return 78;
        }
    }

    comx(x, y){
        let a = parseInt(x);
        let b = parseInt(y);
        if (a > b){
            return '> ';
        }
    }

    comy(x, y){
        let a = parseInt(x);
        let b = parseInt(y);
        if (a < b){
            return ' <';
        }
    }

    playerPunching0() {
        if (sessionStorage.getItem('pnchBuff') != 0){
            sessionStorage.setItem('playerPunching', parseInt(sessionStorage.getItem('punch')) + parseInt(sessionStorage.getItem('pnchBuff')));
            return parseInt(sessionStorage.getItem('punch')) + parseInt(sessionStorage.getItem('pnchBuff'));
        }
    }

    playerPunching1() {
        if (sessionStorage.getItem('pnchBuff') == 0){
            sessionStorage.setItem('playerPunching', sessionStorage.getItem('punch'));
            return parseInt(sessionStorage.getItem('punch'));
        }
    }

    playerPunching2() {
        if (sessionStorage.getItem('pnchBuff') != 0){
            sessionStorage.setItem('playerPunching', parseInt(sessionStorage.getItem('punch')) + parseInt(sessionStorage.getItem('pnchBuff')));
            return parseInt(sessionStorage.getItem('punch')) + parseInt(sessionStorage.getItem('pnchBuff'));
        }
        if (sessionStorage.getItem('pnchBuff') == 0){
            sessionStorage.setItem('playerPunching', sessionStorage.getItem('punch'));
            return parseInt(sessionStorage.getItem('punch'));
        }
    }
    
    playerKicking0() {
        if (sessionStorage.getItem('kickBuff') != 0){
            sessionStorage.setItem('playerKicking', parseInt(sessionStorage.getItem('kick')) + parseInt(sessionStorage.getItem('kickBuff')));
            return parseInt(sessionStorage.getItem('kick')) + parseInt(sessionStorage.getItem('kickBuff'));
        }
    }

    playerKicking1() {
        if (sessionStorage.getItem('kickBuff') == 0){
            sessionStorage.setItem('playerKicking', sessionStorage.getItem('kick'));
            return parseInt(sessionStorage.getItem('kick'));
        }
    }

    playerKicking2() {
        if (sessionStorage.getItem('kickBuff') != 0){
            sessionStorage.setItem('playerKicking', parseInt(sessionStorage.getItem('kick')) + parseInt(sessionStorage.getItem('kickBuff')));
            return parseInt(sessionStorage.getItem('kick')) + parseInt(sessionStorage.getItem('kickBuff'));
        }
        if (sessionStorage.getItem('kickBuff') == 0){
            sessionStorage.setItem('playerKicking', sessionStorage.getItem('kick'));
            return parseInt(sessionStorage.getItem('kick'));
        }
    }
    
    playerWrestling0() {
        if (sessionStorage.getItem('wrstBuff') != 0){
            sessionStorage.setItem('playerWrestling', parseInt(sessionStorage.getItem('wrestling')) + parseInt(sessionStorage.getItem('wrstBuff')));
            return parseInt(sessionStorage.getItem('wrestling')) + parseInt(sessionStorage.getItem('wrstBuff'));
        }
    }

    playerWrestling1() {
        if (sessionStorage.getItem('wrstBuff') == 0){
            sessionStorage.setItem('playerWrestling', sessionStorage.getItem('wrestling'));
            return parseInt(sessionStorage.getItem('wrestling'));
        }
    }

    playerWrestling2() {
        if (sessionStorage.getItem('wrstBuff') != 0){
            sessionStorage.setItem('playerWrestling', parseInt(sessionStorage.getItem('wrestling')) + parseInt(sessionStorage.getItem('wrstBuff')));
            return parseInt(sessionStorage.getItem('wrestling')) + parseInt(sessionStorage.getItem('wrstBuff'));
        }
        if (sessionStorage.getItem('wrstBuff') == 0){
            sessionStorage.setItem('playerWrestling', sessionStorage.getItem('wrestling'));
            return parseInt(sessionStorage.getItem('wrestling'));
        }
    }
    
    playerGrappling0() {
        if (sessionStorage.getItem('grplBuff') != 0){
            sessionStorage.setItem('playerGrappling', parseInt(sessionStorage.getItem('grappling')) + parseInt(sessionStorage.getItem('grplBuff')));
            return parseInt(sessionStorage.getItem('grappling')) + parseInt(sessionStorage.getItem('grplBuff'));
        }
    }

    playerGrappling1() {
        if (sessionStorage.getItem('grplBuff') == 0){
            sessionStorage.setItem('playerGrappling', sessionStorage.getItem('grappling'));
            return parseInt(sessionStorage.getItem('grappling'));
        }
    }

    playerGrappling2() {
        if (sessionStorage.getItem('grplBuff') != 0){
            sessionStorage.setItem('playerGrappling', parseInt(sessionStorage.getItem('grappling')) + parseInt(sessionStorage.getItem('grplBuff')));
            return parseInt(sessionStorage.getItem('grappling')) + parseInt(sessionStorage.getItem('grplBuff'));
        }
        if (sessionStorage.getItem('grplBuff') == 0){
            sessionStorage.setItem('playerGrappling', sessionStorage.getItem('grappling'));
            return parseInt(sessionStorage.getItem('grappling'));
        }
    }
    
    playerClinch0() {
        if (sessionStorage.getItem('clnhBuff') != 0){
            sessionStorage.setItem('playerClinch', parseInt(sessionStorage.getItem('clinch')) + parseInt(sessionStorage.getItem('clnhBuff')));
            return parseInt(sessionStorage.getItem('clinch')) + parseInt(sessionStorage.getItem('clnhBuff'));
        }
    }

    playerClinch1() {
        if (sessionStorage.getItem('clnhBuff') == 0){
            sessionStorage.setItem('playerClinch', sessionStorage.getItem('clinch'));
            return parseInt(sessionStorage.getItem('clinch'));
        }
    }

    playerClinch2() {
        if (sessionStorage.getItem('clnhBuff') != 0){
            sessionStorage.setItem('playerClinch', parseInt(sessionStorage.getItem('clinch')) + parseInt(sessionStorage.getItem('clnhBuff')));
            return parseInt(sessionStorage.getItem('clinch')) + parseInt(sessionStorage.getItem('clnhBuff'));
        }
        if (sessionStorage.getItem('clnhBuff') == 0){
            sessionStorage.setItem('playerClinch', sessionStorage.getItem('clinch'));
            return parseInt(sessionStorage.getItem('clinch'));
        }
    }

    playerOverall() {
        return parseInt((parseInt(sessionStorage.getItem('str')) + parseInt(sessionStorage.getItem('spd')) + parseInt(sessionStorage.getItem('stm')) + parseInt(sessionStorage.getItem('playerPunching')) + parseInt(sessionStorage.getItem('playerKicking')) + parseInt(sessionStorage.getItem('playerWrestling')) + parseInt(sessionStorage.getItem('playerGrappling')) + parseInt(sessionStorage.getItem('playerClinch'))) / 8);
    }

    oppOverall() {
        return parseInt((parseInt(this.getStrength()) + parseInt(this.getSpeed()) + parseInt(this.getStamina()) + parseInt(this.getPunching()) + parseInt(this.getKicking()) + parseInt(this.getWrestling()) + parseInt(this.getGrappling()) + parseInt(this.getClinch())) / 8);
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

    getColor(x) {
        let nation = null;
        if (x == 0) {
            let data = JSON.parse(sessionStorage.getItem('player'));
            nation = data.nation;
        }
        else {
            let data = this.getOppObj();
            nation = data.nation;
        }

        switch(nation) {
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

    getSpace(x) {
        if (x === 'NR') {
            return '\xa0\xa0\xa0\xa0\xa0';
        }
        else if (parseInt(x) > 9) {
            return '\xa0\xa0\xa0\xa0';
        }
        else {
            return '\xa0\xa0';
        }
    }

    getHeightComp(x) {
        let data = JSON.parse(sessionStorage.getItem('player'));
        let player = (parseInt(this.heightCalc(data.weight, data.height).substring(0, this.heightCalc(data.weight, data.height).indexOf('\''))) * 12) + parseInt(this.heightCalc(data.weight, data.height).substring(2, this.heightCalc(data.weight, data.height).indexOf('\"')));
        let opp = (parseInt(this.getHeight().substring(0, this.getHeight().indexOf('\''))) * 12) + parseInt(this.getHeight().substring(2, this.getHeight().indexOf('\"')));

        let diff = player - opp;

        if (diff > 2) {
            if (x == 0) {
                return '#FF0063';
            }
            else {
                return '#FFFFFF';
            }
        }
        else if (diff < -2) {
            if (x == 0) {
                return '#FFFFFF';
            }
            else {
                return '#FF0063';
            }
        }
        else {
            return '#FFFFFF';
        }
    }

    getStrkComp(x) {
        let player = parseInt(sessionStorage.getItem('winStreak'))
        let opp = this.getStrk();

        let diff = player - opp;

        if (diff > 2) {
            if (x == 0) {
                return '#FF0063';
            }
            else {
                return '#FFFFFF';
            }
        }
        else if (diff < -2) {
            if (x == 0) {
                return '#FFFFFF';
            }
            else {
                return '#FF0063';
            }
        }
        else {
            return '#FFFFFF';
        }
    }

    getRateComp(x) {
        let player = parseInt(sessionStorage.getItem('playerRate'));
        let opp = this.getRate();

        let diff = player - opp;

        if (diff > 33) {
            if (x == 0) {
                return '#FF0064';
            }
            else {
                return '#FFFFFF';
            }
        }
        else if (diff < -33) {
            if (x == 0) {
                return '#FFFFFF';
            }
            else {
                return '#FF0064';
            }
        }
        else {
            return '#FFFFFF';
        }
    }

    getComp(x, y, z) {
        let diff = parseInt(x) - parseInt(y);

        if (z == 1) {
            diff = diff * -1;
        }

        if (parseInt(diff) > 0) {
            switch(Math.floor(diff / 5)) {
                case 0:
                    return '#FFFFFF';
                break;
                case 1:
                    return '#FFA0A0';
                break;
                case 2:
                    return '#FF9595';
                break;
                case 3:
                    return '#FF8A8A';
                break;
                case 4:
                    return '#FF7F7F';
                break;
                case 5:
                    return '#FF7474';
                break;
                case 6:
                    return '#FF6969';
                break;
                case 7:
                    return '#FF5E5E';
                break;
                case 8:
                    return '#FF5353';
                break;
                case 9:
                    return '#FF4848';
                break;
                case 10:
                    return '#FF3D3D';
                break;
                default:
                    return '#FF3232';
                break;
            }
        }
        else if (diff == 0) {
            return '#FFFFFF';
        }
        else {
            switch(Math.floor(diff / -5)) {
                case 0:
                    return '#FFFFFF';
                break;
                case 1:
                    return '#BEBEFF';
                break;
                case 2:
                    return '#B5B5FF';
                break;
                case 3:
                    return '#ACACFF';
                break;
                case 4:
                    return '#A3A3FF';
                break;
                case 5:
                    return '#9A9AFF';
                break;
                case 6:
                    return '#9191FF';
                break;
                case 7:
                    return '#8888FF';
                break;
                case 8:
                    return '#7F7FFF';
                break;
                case 9:
                    return '#7676FF';
                break;
                case 10:
                    return '#6D6DFF';
                break;
                default:
                    return '#6464FF';
                break;
            }
        }
    }

    getOvrlComp(x, y, z) {
        let diff = parseInt(x) - parseInt(y);

        if (z == 1) {
            diff = diff * -1;
        }

        if (parseInt(diff) > 0) {
            switch(diff) {
                case 0:
                    return '#FFFFFF';
                break;
                case 1:
                    return '#FFBEBE';
                break;
                case 2:
                    return '#FFB5B5';
                break;
                case 3:
                    return '#FFACAC';
                break;
                case 4:
                    return '#FFA3A3';
                break;
                case 5:
                    return '#FF9A9A';
                break;
                case 6:
                    return '#FF9191';
                break;
                case 7:
                    return '#FF8888';
                break;
                case 8:
                    return '#FF7F7F';
                break;
                case 9:
                    return '#FF7676';
                break;
                case 10:
                    return '#FF6D6D';
                break;
                default:
                    return '#FF6464';
                break;
            }
        }
        else if (diff == 0) {
            return '#FFFFFF';
        }
        else {
            switch(-diff) {
                case 0:
                    return '#FFFFFF';
                break;
                case 1:
                    return '#BEBEFF';
                break;
                case 2:
                    return '#B5B5FF';
                break;
                case 3:
                    return '#ACACFF';
                break;
                case 4:
                    return '#A3A3FF';
                break;
                case 5:
                    return '#9A9AFF';
                break;
                case 6:
                    return '#9191FF';
                break;
                case 7:
                    return '#8888FF';
                break;
                case 8:
                    return '#7F7FFF';
                break;
                case 9:
                    return '#7676FF';
                break;
                case 10:
                    return '#6D6DFF';
                break;
                default:
                    return '#6464FF';
                break;
            }
        }
    }

    getBout() {
        let month = parseInt(sessionStorage.getItem('month'));

        if (month == 11) {
            return 'CHAMPIONSHIP';
        }
        else if (month == 10) {
            return 'SEMIFINALS';
        }
        else if (month == 9) {
            return 'QUARTERFINALS';
        }
        else {
            return 'BOUT';
        }
    }

    render() {
        let month = sessionStorage.getItem('month');
        let year = sessionStorage.getItem('year');
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let x = '\xa0\xa0\xa0\xa0\xa0';
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -367 }} />
                        <b>PFL {(data.weight == 'WSTRAWWEIGHT') ? 'WOMEN\'S STRAWWEIGHT' : (data.weight == 'WFLYWEIGHT') ? 'WOMEN\'S FLYWEIGHT' : (data.weight == 'WBANTAMWEIGHT') ? 'WOMEN\'S BANTAMWEIGHT' : data.weight}</b>
                        <div className="App-customize2" style={{marginTop: -20, marginBottom: 30}}>
                            <Button1d>{this.getBout()}</Button1d>
                        </div>
                        <Flag style={{marginTop: 600, marginRight: 1600}}><img src={getFlag(0)} width="140" height="80"></img></Flag>
                        <Rec style={{marginTop: 600, marginRight: 1130}}>{sessionStorage.getItem('playerWin')} - {sessionStorage.getItem('playerLoss')}</Rec>
                        <Flag style={{marginTop: 600, marginLeft: 1000}}><img src={getFlag(9)} width="140" height="80"></img></Flag>
                        <Rec style={{marginTop: 600, marginLeft: 1470}}>{this.getWin()} - {this.getLoss()}</Rec>
                        <Name1 style={{marginRight: 1300, marginTop: 350, lineHeight: 0.9}}><text style={{color: 'grey'}}>{sessionStorage.getItem('rank')}</text> <b>{data.first}{this.getSpace(sessionStorage.getItem('rank'))}<br/>{data.last}</b></Name1>
                        <Name2 style={{marginLeft: 1300, marginTop: 350, lineHeight: 0.9}}><text style={{color: 'grey'}}>{this.getRank()}</text> <b>{this.getFirst()}{this.getSpace(this.getRank())}<br/>{this.getLast()}</b></Name2>
                        <Line style={{marginRight: 1300, marginTop: 490}}></Line>
                        <Line style={{marginLeft: 1300, marginTop: 490}}></Line>
                        <Type style={{marginBottom: 520, marginRight: 1300}}><b>OVRL</b></Type>
                        <Num style={{marginBottom: 440, marginRight: 1310, color: this.getOvrlComp(this.playerOverall(), this.oppOverall(), 0)}}>{this.playerOverall()}</Num>
                        <Type style={{marginBottom: 520, marginLeft: 1300}}><b>OVRL</b></Type>
                        <Num style={{marginBottom: 440, marginLeft: 1290, color: this.getOvrlComp(this.playerOverall(), this.oppOverall(), 1)}}>{this.oppOverall()}</Num>
                        <Type style={{marginBottom: 340, marginRight: 1500}}><b>STR</b></Type>
                        <Num style={{marginBottom: 260, marginRight: 1510, color: this.getComp(sessionStorage.getItem('str'), this.getStrength(), 0)}}>{sessionStorage.getItem('str')}</Num>
                        <Type style={{marginBottom: 340, marginLeft: 1100}}><b>STR</b></Type>
                        <Num style={{marginBottom: 260, marginLeft: 1100, color: this.getComp(sessionStorage.getItem('str'), this.getStrength(), 1)}}>{this.getStrength()}</Num>
                        <Type style={{marginBottom: 340, marginRight: 1300}}><b>SPD</b></Type>
                        <Num style={{marginBottom: 260, marginRight: 1310, color: this.getComp(sessionStorage.getItem('spd'), this.getSpeed(), 0)}}>{sessionStorage.getItem('spd')}</Num>
                        <Type style={{marginBottom: 340, marginLeft: 1300}}><b>SPD</b></Type>
                        <Num style={{marginBottom: 260, marginLeft: 1290, color: this.getComp(sessionStorage.getItem('spd'), this.getSpeed(), 1)}}>{this.getSpeed()}</Num>
                        <Type style={{marginBottom: 340, marginRight: 1100}}><b>STM</b></Type>
                        <Num style={{marginBottom: 260, marginRight: 1110, color: this.getComp(sessionStorage.getItem('stm'), this.getStamina(), 0)}}>{sessionStorage.getItem('stm')}</Num>
                        <Type style={{marginBottom: 340, marginLeft: 1500}}><b>STM</b></Type>
                        <Num style={{marginBottom: 260, marginLeft: 1500, color: this.getComp(sessionStorage.getItem('stm'), this.getStamina(), 1)}}>{this.getStamina()}</Num>
                        <Type style={{marginBottom: 160, marginRight: 1700}}><b>PNCH</b></Type>
                        <Num style={{marginBottom: 80, marginRight: 1710, color: this.getComp(this.playerPunching2(), this.getPunching(), 0)}}>{this.playerPunching2()}</Num>
                        <Type style={{marginBottom: 160, marginLeft: 900}}><b>PNCH</b></Type>
                        <Num style={{marginBottom: 80, marginLeft: 890, color: this.getComp(this.playerPunching2(), this.getPunching(), 1)}}>{this.getPunching()}</Num>
                        <Type style={{marginBottom: 160, marginRight: 1500}}><b>KICK</b></Type>
                        <Num style={{marginBottom: 80, marginRight: 1510, color: this.getComp(this.playerKicking2(), this.getKicking(), 0)}}>{this.playerKicking2()}</Num>
                        <Type style={{marginBottom: 160, marginLeft: 1100}}><b>KICK</b></Type>
                        <Num style={{marginBottom: 80, marginLeft: 1100, color: this.getComp(this.playerKicking2(), this.getKicking(), 1)}}>{this.getKicking()}</Num>
                        <Type style={{marginBottom: 160, marginRight: 1300}}><b>WRST</b></Type>
                        <Num style={{marginBottom: 80, marginRight: 1310, color: this.getComp(this.playerWrestling2(), this.getWrestling(), 0)}}>{this.playerWrestling2()}</Num>
                        <Type style={{marginBottom: 160, marginLeft: 1300}}><b>WRST</b></Type>
                        <Num style={{marginBottom: 80, marginLeft: 1290, color: this.getComp(this.playerWrestling2(), this.getWrestling(), 1)}}>{this.getWrestling()}</Num>
                        <Type style={{marginBottom: 160, marginRight: 1100}}><b>GRPL</b></Type>
                        <Num style={{marginBottom: 80, marginRight: 1110, color: this.getComp(this.playerGrappling2(), this.getGrappling(), 0)}}>{this.playerGrappling2()}</Num>
                        <Type style={{marginBottom: 160, marginLeft: 1500}}><b>GRPL</b></Type>
                        <Num style={{marginBottom: 80, marginLeft: 1500, color: this.getComp(this.playerGrappling2(), this.getGrappling(), 1)}}>{this.getGrappling()}</Num>
                        <Type style={{marginBottom: 160, marginRight: 900}}><b>CLNC</b></Type>
                        <Num style={{marginBottom: 80, marginRight: 910, color: this.getComp(this.playerClinch2(), this.getClinch(), 0)}}>{this.playerClinch2()}</Num>
                        <Type style={{marginBottom: 160, marginLeft: 1700}}><b>CLNC</b></Type>
                        <Num style={{marginBottom: 80, marginLeft: 1690, color: this.getComp(this.playerClinch2(), this.getClinch(), 1)}}>{this.getClinch()}</Num>
                        <div className="App-tale" style={{marginTop: -10}}>
                            <Button1al><b>{this.weightCalc(data.weight)}</b></Button1al>
                            <Button1b>WEIGHT</Button1b>
                            <Button1ar><b>{this.getWeight()}</b></Button1ar>
                        </div>
                        <div className="App-tale" style={{marginTop: -10}}>
                            <Button1al><text style={{color: this.getHeightComp(0)}}><b>{this.heightCalc(data.weight, data.height)}</b></text></Button1al>
                            <Button1b>HEIGHT</Button1b>
                            <Button1ar><text style={{color: this.getHeightComp()}}><b>{this.getHeight()}</b></text></Button1ar>
                        </div>
                        <div className="App-tale" style={{marginTop: -10}}>
                            <Button1al style={{color: this.getStrkComp(0)}}><b>{sessionStorage.getItem('winStreak')}</b></Button1al>
                            <Button1b>WIN STREAK</Button1b>
                            <Button1ar style={{color: this.getStrkComp()}}><b>{this.getStrk()}</b></Button1ar>
                        </div>
                        <div className="App-tale" style={{marginTop: -10, marginBottom: 30}}>
                            <Button1al style={{color: this.getRateComp(0)}}><b>{sessionStorage.getItem('playerRate')}%</b></Button1al>
                            <Button1b>FINISH RATE</Button1b>
                            <Button1ar style={{color: this.getRateComp()}}><b>{this.getRate()}%</b></Button1ar>
                        </div>
                        <div className="App-header-style1" style={{marginTop: -11, marginBottom: -325}}>
                            <Link to='/scontract'><Button onClick={this.handleFight}>CONTRACT</Button></Link>
                        </div>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: 837 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./opponent'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default STale;
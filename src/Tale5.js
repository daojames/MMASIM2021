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
width: 700px;
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
width: 700px;
height: 50px;
text-align: right;
margin: 0px;
font-size: 35px;
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
width: 700px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 35px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button1b = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 220px;
height: 50px;
text-align: center;
margin-left: 10px;
margin-right: 10px;
font-size: 35px;
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

class Tale5 extends React.Component {
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
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.first;
    }

    getLast() {
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.last;
    }

    getWeight() {
        let str = sessionStorage.getItem('wc');
        if (str == 9) {
            return 115;
        }
        else if(str == 1 || str == 10){
            return 125;
        }
        else if(str == 2 || str == 11) {
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
    }

    getHeight() {
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
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
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.strength;
    }

    getSpeed() {
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.speed;
    }

    getStamina() {
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.stamina;
    }

    getPunching() {
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.punching;
    }

    getKicking() {
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.kicking;
    }

    getWrestling() {
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.wrestling;
    }

    getGrappling() {
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.grappling;
    }

    getClinch() {
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.clinch;
    }

    getNation() {
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.nation;
    }

    getWin() {
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.win;
    }

    getLoss() {
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        return data.loss;
    }

    notFirst() {
        sessionStorage.setItem('first', false);
    }

    progressTime() {
        sessionStorage.setItem('month', (parseInt(sessionStorage.getItem('month')) + 1));
    }

    getRank() {
        let data = sessionStorage.getItem('ABC5');
            data = JSON.parse(data);
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

    render() {
        let month = sessionStorage.getItem('month');
        let year = sessionStorage.getItem('year');
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data)
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -366 }} />
                        TALE OF THE TAPE
                        <div className="App-customize2" style={{marginTop: -20}}>
                            <Button1d>{(data.weight == 'WSTRAWWEIGHT') ? 'WOMEN\'S STRAWWEIGHT' : (data.weight == 'WFLYWEIGHT') ? 'WOMEN\'S FLYWEIGHT' : (data.weight == 'WBANTAMWEIGHT') ? 'WOMEN\'S BANTAMWEIGHT' : data.weight} BOUT</Button1d>
                        </div>
                        <div className="App-customize2" style={{marginTop: 20}}>
                            <Button1cl><text style={{color: 'grey'}}>{sessionStorage.getItem('rank')}</text> <b>{data.first} {data.last}</b></Button1cl>
                            <Button1a><b>{'\xa0'}v.</b></Button1a>
                            <Button1cr><text style={{color: 'grey'}}>{this.getRank()}</text> <b>{this.getFirst()} {this.getLast()}</b></Button1cr>
                        </div>
                        <div className="App-customize2" style={{marginTop: 0}}>
                            <Button1al>{sessionStorage.getItem('playerWin')} - {sessionStorage.getItem('playerLoss')}</Button1al>
                            <Button1b><b>RECORD</b></Button1b>
                            <Button1ar>{this.getWin()} - {this.getLoss()}</Button1ar>
                        </div>
                        <div className="App-customize2" style={{marginTop: -10}}>
                            <Button1al>{data.nation}</Button1al>
                            <Button1b><b>NATION</b></Button1b>
                            <Button1ar>{this.getNation()}</Button1ar>
                        </div>
                        <div className="App-customize2" style={{marginTop: -10}}>
                            <Button1al>{this.weightCalc(data.weight)}</Button1al>
                            <Button1b><b>WEIGHT</b></Button1b>
                            <Button1ar>{this.getWeight()}</Button1ar>
                        </div>
                        <div className="App-customize2" style={{marginTop: -10}}>
                            <Button1al>{this.heightCalc(data.weight, data.height)}</Button1al>
                            <Button1b><b>HEIGHT</b></Button1b>
                            <Button1ar>{this.getHeight()}</Button1ar>
                        </div>
                        <div className="App-customize2" style={{marginTop: -10}}>
                            <Button1al><text style={{color: 'red' }}>{this.comx(sessionStorage.getItem('str'),this.getStrength())}</text>{sessionStorage.getItem('str')}</Button1al>
                            <Button1b><b>STRENGTH</b></Button1b>
                            <Button1ar>{this.getStrength()}<text style={{color: 'red'}}>{this.comy(sessionStorage.getItem('str'),this.getStrength())}</text></Button1ar>
                        </div>
                        <div className="App-customize2" style={{marginTop: -10}}>
                            <Button1al><text style={{color: 'red'}}>{this.comx(sessionStorage.getItem('spd'),this.getSpeed())}</text>{sessionStorage.getItem('spd')}</Button1al>
                            <Button1b><b>SPEED</b></Button1b>
                            <Button1ar>{this.getSpeed()}<text style={{color: 'red'}}>{this.comy(sessionStorage.getItem('spd'),this.getSpeed())}</text></Button1ar>
                        </div>
                        <div className="App-customize2" style={{marginTop: -10}}>
                            <Button1al><text style={{color: 'red'}}>{this.comx(sessionStorage.getItem('stm'),this.getStamina())}</text>{sessionStorage.getItem('stm')}</Button1al>
                            <Button1b><b>STAMINA</b></Button1b>
                            <Button1ar>{this.getStamina()}<text style={{color: 'red'}}>{this.comy(sessionStorage.getItem('stm'),this.getStamina())}</text></Button1ar>
                        </div>
                        <div className="App-customize2" style={{marginTop: -10}}>
                            <Button1al><text style={{color: 'red'}}>{this.comx(this.playerPunching2(),this.getPunching())}</text><text style={{color: 'green'}}>{this.playerPunching0()}</text>{this.playerPunching1()}</Button1al>
                            <Button1b><b>PUNCHING</b></Button1b>
                            <Button1ar>{this.getPunching()}<text style={{color: 'red'}}>{this.comy(this.playerPunching2(),this.getPunching())}</text></Button1ar>
                        </div>
                        <div className="App-customize2" style={{marginTop: -10}}>
                            <Button1al><text style={{color: 'red'}}>{this.comx(this.playerKicking2(),this.getKicking())}</text><text style={{color: 'green'}}>{this.playerKicking0()}</text>{this.playerKicking1()}</Button1al>
                            <Button1b><b>KICKING</b></Button1b>
                            <Button1ar>{this.getKicking()}<text style={{color: 'red'}}>{this.comy(this.playerKicking2(),this.getKicking())}</text></Button1ar>
                        </div>
                        <div className="App-customize2" style={{marginTop: -10}}>
                            <Button1al><text style={{color: 'red'}}>{this.comx(this.playerWrestling2(),this.getWrestling())}</text><text style={{color: 'green'}}>{this.playerWrestling0()}</text>{this.playerWrestling1()}</Button1al>
                            <Button1b><b>WRESTLING</b></Button1b>
                            <Button1ar>{this.getWrestling()}<text style={{color: 'red'}}>{this.comy(this.playerWrestling2(),this.getWrestling())}</text></Button1ar>
                        </div>
                        <div className="App-customize2" style={{marginTop: -10}}>
                            <Button1al><text style={{color: 'red'}}>{this.comx(this.playerGrappling2(),this.getGrappling())}</text><text style={{color: 'green'}}>{this.playerGrappling0()}</text>{this.playerGrappling1()}</Button1al>
                            <Button1b><b>GRAPPLING</b></Button1b>
                            <Button1ar>{this.getGrappling()}<text style={{color: 'red'}}>{this.comy(this.playerGrappling2(),this.getGrappling())}</text></Button1ar>
                        </div>
                        <div className="App-customize2" style={{marginTop: -10}}>
                            <Button1al><text style={{color: 'red'}}>{this.comx(this.playerClinch2(),this.getClinch())}</text><text style={{color: 'green'}}>{this.playerClinch0()}</text>{this.playerClinch1()}</Button1al>
                            <Button1b><b>CLINCH</b></Button1b>
                            <Button1ar>{this.getClinch()}<text style={{color: 'red'}}>{this.comy(this.playerClinch2(),this.getClinch())}</text></Button1ar>
                        </div>
                        <div className="App-customize2" style={{marginTop: -10}}>
                            <Button1al><text style={{color: 'yellow'}}>{this.comx(this.playerOverall(),this.oppOverall())}</text>{this.playerOverall()}</Button1al>
                            <Button1b><b>OVERALL</b></Button1b>
                            <Button1ar>{this.oppOverall()}<text style={{color: 'yellow'}}>{this.comy(this.playerOverall(),this.oppOverall())}</text></Button1ar>
                        </div>
                        <div className="App-customize3" style={{marginTop: 2, marginBottom: -306}}>
                            <Link to='/contract5'><Button onClick={this.handleFight}>CONTRACT</Button></Link>
                        </div>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: 833 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./offer5'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tale5;
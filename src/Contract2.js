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

const Button1e = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 1900px;
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

const Button1f = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 30px;
height: 30px;
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

class Contract2 extends React.Component {
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
    }

    heightCalc(str, height){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(str == "FLYWEIGHT"){
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
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        return data.first;
    }

    getLast() {
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
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
    }

    getHeight() {
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        let hgt = data.height;
        let wc = sessionStorage.getItem('wc');
        if (wc == 1){
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
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        return data.strength;
    }

    getSpeed() {
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        return data.speed;
    }

    getStamina() {
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        return data.stamina;
    }

    getPunching() {
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        return data.punching;
    }

    getKicking() {
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        return data.kicking;
    }

    getWrestling() {
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        return data.wrestling;
    }

    getGrappling() {
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        return data.grappling;
    }

    getClinch() {
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        return data.clinch;
    }

    getNation() {
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        return data.nation;
    }

    getWin() {
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        return data.win;
    }

    getLoss() {
        let data = sessionStorage.getItem('ABC2');
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
        let data = sessionStorage.getItem('ABC2');
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
        let data = sessionStorage.getItem('ABC2');
        data = JSON.parse(data);
        sessionStorage.setItem('oppRank', data.rank);
        sessionStorage.setItem('oppFirst', data.first);
        sessionStorage.setItem('oppLast', data.last);
        sessionStorage.setItem('oppHeight', data.height);
        sessionStorage.setItem('oppWeight', data.weight);
        sessionStorage.setItem('oppNation', data.nation);
        sessionStorage.setItem('oppWin', data.win);
        sessionStorage.setItem('oppLoss', data.loss);
        sessionStorage.setItem('oppStrength', data.strength);
        sessionStorage.setItem('oppSpeed', data.speed);
        sessionStorage.setItem('oppStamina', data.stamina);
        sessionStorage.setItem('oppPunching', data.punching);
        sessionStorage.setItem('oppKicking', data.kicking);
        sessionStorage.setItem('oppWrestling', data.wrestling);
        sessionStorage.setItem('oppGrappling', data.grappling);
        sessionStorage.setItem('oppClinch', data.clinch);

        sessionStorage.setItem('oppStance', '?');
        sessionStorage.setItem('oppGuard', '?');
        sessionStorage.setItem('oppAtt1', '?');
        sessionStorage.setItem('oppAtt2', '?');
        sessionStorage.setItem('oppAtt3', '?');
        
        if (sessionStorage.getItem('injury') == 0) {
            sessionStorage.setItem('playerStrength', sessionStorage.getItem('str'));
            sessionStorage.setItem('playerSpeed', sessionStorage.getItem('spd'));
            sessionStorage.setItem('playerStamina', sessionStorage.getItem('stm'));
        }
        sessionStorage.setItem('playerPunching', parseInt(sessionStorage.getItem('punch')) + parseInt(sessionStorage.getItem('pnchBuff')));
        sessionStorage.setItem('playerKicking', parseInt(sessionStorage.getItem('kick')) + parseInt(sessionStorage.getItem('kickBuff')));
        sessionStorage.setItem('playerWrestling', parseInt(sessionStorage.getItem('wrestling')) + parseInt(sessionStorage.getItem('wrstBuff')));
        sessionStorage.setItem('playerGrappling', parseInt(sessionStorage.getItem('grappling')) + parseInt(sessionStorage.getItem('grplBuff')));
        sessionStorage.setItem('playerClinch', parseInt(sessionStorage.getItem('clinch')) + parseInt(sessionStorage.getItem('clnhBuff')));

        sessionStorage.setItem('mmaBuff', 0);
        sessionStorage.setItem('bladedBuff', 0);
        sessionStorage.setItem('thaiBuff', 0);

        sessionStorage.setItem('longBuff', 0);
        sessionStorage.setItem('longNerf', 0);
        sessionStorage.setItem('highBuff', 0);
        sessionStorage.setItem('highNerf', 0);
        sessionStorage.setItem('lowBuff', 0);
        sessionStorage.setItem('lowNerf', 0);
        sessionStorage.setItem('reactNerf', 0);
        sessionStorage.setItem('feinted', 0);
        sessionStorage.setItem('tookdown', 0);
        sessionStorage.setItem('clinched', 0);

        sessionStorage.setItem('mmaBuff1', 0);
        sessionStorage.setItem('bladedBuff1', 0);
        sessionStorage.setItem('thaiBuff1', 0);

        sessionStorage.setItem('longBuff1', 0);
        sessionStorage.setItem('longNerf1', 0);
        sessionStorage.setItem('highBuff1', 0);
        sessionStorage.setItem('highNerf1', 0);
        sessionStorage.setItem('lowBuff1', 0);
        sessionStorage.setItem('lowNerf1', 0);
        sessionStorage.setItem('reactNerf1', 0);
        sessionStorage.setItem('feinted1', 0);
        sessionStorage.setItem('tookdown1', 0);

        sessionStorage.setItem('playerStance', '?');
        sessionStorage.setItem('playerGuard', '?');
        sessionStorage.setItem('playerStm', 200 + ((parseInt(sessionStorage.getItem('stm')) - 50) * 1.5));
        sessionStorage.setItem('oppStm', 200 + ((parseInt(data.stamina) - 50) * 1.5));
        sessionStorage.setItem('playerStatus', 1000);
        sessionStorage.setItem('oppStatus', 1000);
        
        sessionStorage.setItem('att1', '?');
        sessionStorage.setItem('att2', '?');
        sessionStorage.setItem('att3', '?');
        
        sessionStorage.setItem('round', 1);
        
        sessionStorage.setItem('mCount', 0);
        sessionStorage.setItem('move01', '');
        sessionStorage.setItem('move02', '');
        sessionStorage.setItem('move03', '');
        sessionStorage.setItem('move04', '');
        sessionStorage.setItem('move05', '');
        sessionStorage.setItem('move06', '');
        sessionStorage.setItem('move07', '');
        sessionStorage.setItem('move08', '');
        sessionStorage.setItem('move09', '');
        sessionStorage.setItem('move10', '');
        sessionStorage.setItem('move11', '');
        sessionStorage.setItem('move12', '');
        sessionStorage.setItem('move13', '');
        sessionStorage.setItem('move14', '');
        sessionStorage.setItem('move15', '');
        sessionStorage.setItem('move16', '');
        
        sessionStorage.setItem('info01', '');
        sessionStorage.setItem('info02', '');
        sessionStorage.setItem('info03', '');
        sessionStorage.setItem('info04', '');
        sessionStorage.setItem('info05', '');
        sessionStorage.setItem('info06', '');
        sessionStorage.setItem('info07', '');
        sessionStorage.setItem('info08', '');
        sessionStorage.setItem('info09', '');
        sessionStorage.setItem('info10', '');
        sessionStorage.setItem('info11', '');
        sessionStorage.setItem('info12', '');
        sessionStorage.setItem('info13', '');
        sessionStorage.setItem('info14', '');
        sessionStorage.setItem('info15', '');
        sessionStorage.setItem('info16', '');
        
        sessionStorage.setItem('name01', '');
        sessionStorage.setItem('name02', '');
        sessionStorage.setItem('name03', '');
        sessionStorage.setItem('name04', '');
        sessionStorage.setItem('name05', '');
        sessionStorage.setItem('name06', '');
        sessionStorage.setItem('name07', '');
        sessionStorage.setItem('name08', '');
        sessionStorage.setItem('name09', '');
        sessionStorage.setItem('name10', '');
        sessionStorage.setItem('name11', '');
        sessionStorage.setItem('name12', '');
        sessionStorage.setItem('name13', '');
        sessionStorage.setItem('name14', '');
        sessionStorage.setItem('name15', '');
        sessionStorage.setItem('name16', '');
        
        sessionStorage.setItem('ctr01', '');
        sessionStorage.setItem('ctr02', '');
        sessionStorage.setItem('ctr03', '');
        sessionStorage.setItem('ctr04', '');
        sessionStorage.setItem('ctr05', '');
        sessionStorage.setItem('ctr06', '');
        sessionStorage.setItem('ctr07', '');
        sessionStorage.setItem('ctr08', '');
        sessionStorage.setItem('ctr09', '');
        sessionStorage.setItem('ctr10', '');
        sessionStorage.setItem('ctr11', '');
        sessionStorage.setItem('ctr12', '');
        sessionStorage.setItem('ctr13', '');
        sessionStorage.setItem('ctr14', '');
        sessionStorage.setItem('ctr15', '');
        sessionStorage.setItem('ctr16', '');

        sessionStorage.setItem('countering', 0);
        sessionStorage.setItem('countering1', 0);
        sessionStorage.setItem('win', 0);
        sessionStorage.setItem('win1', 0);
        sessionStorage.setItem('bell', 0);
        sessionStorage.setItem('dec', 0);
        sessionStorage.setItem('control', 0);
        sessionStorage.setItem('control1', 0);
        sessionStorage.setItem('totalDmg', 0);
        sessionStorage.setItem('totalDmg1', 0);
        sessionStorage.setItem('round1', 0);
        sessionStorage.setItem('round2', 0);
        sessionStorage.setItem('round3', 0);
        sessionStorage.setItem('round4', 0);
        sessionStorage.setItem('round5', 0);
        sessionStorage.setItem('sub', 0);
        sessionStorage.setItem('ko', 0);
        sessionStorage.setItem('tko', 0);
        sessionStorage.setItem('points', 0);
        sessionStorage.setItem('points1', 0);
    }

    ftin(hgt) {
        if (hgt == '5\'2\"') {
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

    ifCtitle() {
        if (sessionStorage.getItem('rank') == 'C' || this.getRank() == 'C'){
            sessionStorage.setItem('title', true);
            return 'YES';
        }
        else {
            sessionStorage.setItem('title', false);
            return 'NO';
        }
    }

    ifCrounds() {
        if (sessionStorage.getItem('rank') == 'C' || this.getRank() == 'C'){
            sessionStorage.setItem('rounds', 5);
            return '5';
        }
        else {
            sessionStorage.setItem('rounds', 3);
            return '3';
        }
    }

    getOppNum() {
        let num = sessionStorage.getItem('oppNum');
        let money = 0;

        if (num == 1){
            let data = sessionStorage.getItem('nr1');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 2){
            let data = sessionStorage.getItem('nr2');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 3){
            let data = sessionStorage.getItem('nr3');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 4){
            let data = sessionStorage.getItem('nr4');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 5){
            let data = sessionStorage.getItem('nr5');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 6){
            let data = sessionStorage.getItem('nr6');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 7){
            let data = sessionStorage.getItem('nr7');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 8){
            let data = sessionStorage.getItem('nr8');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 9){
            let data = sessionStorage.getItem('nr9');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 10){
            let data = sessionStorage.getItem('nr10');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 11){
            let data = sessionStorage.getItem('nr11');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 12){
            let data = sessionStorage.getItem('nr12');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 13){
            let data = sessionStorage.getItem('nr13');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 14){
            let data = sessionStorage.getItem('nr14');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 15){
            let data = sessionStorage.getItem('nr15');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 16){
            let data = sessionStorage.getItem('nr16');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 17){
            let data = sessionStorage.getItem('nr17');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 18){
            let data = sessionStorage.getItem('nr18');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 19){
            let data = sessionStorage.getItem('nr19');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 20){
            let data = sessionStorage.getItem('nr20');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 21){
            let data = sessionStorage.getItem('nr21');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 101) {
            let data = sessionStorage.getItem('nrf1');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 102) {
            let data = sessionStorage.getItem('nrf2');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 103) {
            let data = sessionStorage.getItem('nrf3');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 104) {
            let data = sessionStorage.getItem('nrf4');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 105) {
            let data = sessionStorage.getItem('nrf5');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 106) {
            let data = sessionStorage.getItem('nrf6');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 107) {
            let data = sessionStorage.getItem('nrf7');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 108) {
            let data = sessionStorage.getItem('nrf8');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }
        else if (num == 109) {
            let data = sessionStorage.getItem('nrf9');
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 2) + (2000 * parseInt(data.win));
        }

        return money;
    }

    calcPay() {
        let rank = sessionStorage.getItem('rank');
        let followers = sessionStorage.getItem('followers');
        let pay = null;
        if (rank == 'NR'){
            pay = this.getOppNum();
            sessionStorage.setItem('pay', pay);
            return pay;
        }
        else if (rank == 'C'){
            pay = this.getOppNum() * 7.5;
            sessionStorage.setItem('pay', pay);
            return pay; 
        }
        else {
            pay = this.getOppNum() * 5;
            sessionStorage.setItem('pay', pay);
            return pay; 
        }
    }

    ifCwin() {
        if (sessionStorage.getItem('rank') == 'C' || this.getRank() == 'C'){
            return '0';
        }
        else {
            return this.calcPay();
        }
    }

    getGuaranteed0() {
        if (sessionStorage.getItem('gym') == 'NONE'){
            return '$' + this.calcPay();
        }
        else {
            if (this.calcPay() >= sessionStorage.getItem('gymCamp')){
                return '$' + (parseInt(this.calcPay()) - sessionStorage.getItem('gymCamp'));
            }
        }
    }

    getGuaranteed1() {
        if (sessionStorage.getItem('gym') == 'NONE') {
            return '';
        }
        else if (this.calcPay() < sessionStorage.getItem('gymCamp')){
            return '$' + Math.abs(parseInt(this.calcPay()) - sessionStorage.getItem('gymCamp'));
        }
    }

    getCamp() {
        return '$' + sessionStorage.getItem('gymCamp');
    }

    render() {
        let month = sessionStorage.getItem('month');
        let year = sessionStorage.getItem('year');
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data)
        let num = sessionStorage.getItem('abc2');
        sessionStorage.setItem('oppNum', num);
        let whitespace = "\xa0\xa0\xa0";
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -366 }} />
                        CONTRACT
                        <div className="App-customize2" style={{marginTop: -20}}>
                            <Button1e><text style={{color: 'grey'}}>{sessionStorage.getItem('rank')}</text> <b>{data.first} {data.last}</b>{whitespace}v.{whitespace}<text style={{color: 'grey'}}>{this.getRank()}</text> <b>{this.getFirst()} {this.getLast()}</b></Button1e>
                        </div>
                        <div className="App-customize2-1" style={{marginTop: 0}}></div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>WEIGHTCLASS</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr>{(data.weight == 'WSTRAWWEIGHT') ? 'WOMEN\'S STRAWWEIGHT' : (data.weight == 'WFLYWEIGHT') ? 'WOMEN\'S FLYWEIGHT' : (data.weight == 'WBANTAMWEIGHT') ? 'WOMEN\'S BANTAMWEIGHT' : data.weight}</Button1cr>
                        </div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>TITLE BOUT</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr>{this.ifCtitle()}</Button1cr>
                        </div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>ROUNDS</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr>{this.ifCrounds()}</Button1cr>
                        </div>
                        <div className="App-customize2-1" style={{marginTop: 0}}></div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>TO SHOW</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr><text style={{color: 'green'}}>${this.calcPay()}</text></Button1cr>
                        </div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>WIN BONUS</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr>${this.ifCwin()}</Button1cr>
                        </div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>POTN BONUS</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr>$50000</Button1cr>
                        </div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>FOTN BONUS</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr>$50000</Button1cr>
                        </div>
                        <div className="App-customize2-1" style={{marginTop: 0}}></div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>TRAINING CAMP</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr><text style={{color: 'red'}}>{this.getCamp()}</text> {sessionStorage.getItem('gym')}</Button1cr>
                        </div>
                        <div className="App-customize2-1" style={{marginTop: 0}}></div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>GUARANTEED PROFIT</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr><text style={{color: 'green'}}>{this.getGuaranteed0()}</text><text style={{color: 'red'}}>{this.getGuaranteed1()}</text></Button1cr>
                        </div>
                        <div className="App-customize3" style={{marginTop: 14, marginBottom: -306}}>
                            <Link to='/bout0'><Button onClick={this.handleFight}>SIGN</Button></Link>
                        </div>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: 833 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./tale2'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contract2;
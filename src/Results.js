import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';
import {randomNR} from './RandomNR.js';

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

const Button4a = styled.button`
background-color: transparent;
color: gray;
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
border: 2px solid gray;
border-radius: 2px;
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

class Results extends React.Component {
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

    calcMonth1(month){
        switch(month){
            case '1':
                return 'JAN';
                break;
            case '2':
                return 'FEB';
                break;
            case '3':
                return 'MAR';
                break;
            case '4':
                return 'APR';
                break;
            case '5':
                return 'MAY';
                break;
            case '6':
                return 'JUN';
                break;
            case '7':
                return 'JUL';
                break;
            case '8':
                return 'AUG';
                break;
            case '9':
                return 'SEP';
                break;
            case '10':
                return 'OCT';
                break;
            case '11':
                return 'NOV';
                break;
            case '12':
                return 'DEC';
                break;
        }
    }

    getFirst() {
        let data = sessionStorage.getItem('ABC1');
        data = JSON.parse(data);
        return data.first;
    }

    getLast() {
        let data = sessionStorage.getItem('ABC1');
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
        let data = sessionStorage.getItem('ABC1');
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
        let data = sessionStorage.getItem('ABC1');
        data = JSON.parse(data);
        return data.strength;
    }

    getSpeed() {
        let data = sessionStorage.getItem('ABC1');
        data = JSON.parse(data);
        return data.speed;
    }

    getStamina() {
        let data = sessionStorage.getItem('ABC1');
        data = JSON.parse(data);
        return data.stamina;
    }

    getPunching() {
        let data = sessionStorage.getItem('ABC1');
        data = JSON.parse(data);
        return data.punching;
    }

    getKicking() {
        let data = sessionStorage.getItem('ABC1');
        data = JSON.parse(data);
        return data.kicking;
    }

    getWrestling() {
        let data = sessionStorage.getItem('ABC1');
        data = JSON.parse(data);
        return data.wrestling;
    }

    getGrappling() {
        let data = sessionStorage.getItem('ABC1');
        data = JSON.parse(data);
        return data.grappling;
    }

    getClinch() {
        let data = sessionStorage.getItem('ABC1');
        data = JSON.parse(data);
        return data.clinch;
    }

    getNation() {
        let data = sessionStorage.getItem('ABC1');
        data = JSON.parse(data);
        return data.nation;
    }

    getWin() {
        let data = sessionStorage.getItem('ABC1');
        data = JSON.parse(data);
        return data.win;
    }

    getLoss() {
        let data = sessionStorage.getItem('ABC1');
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
        let data = sessionStorage.getItem('ABC1');
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

    getUfc() {
        let mon = 0;
        switch(parseInt(sessionStorage.getItem('month'))) {
            case 1:
                mon = 0;
            break;
            case 2:
                mon = 1;
            break;
            case 3:
                mon = 2;
            break;
            case 4:
                mon = 3;
            break;
            case 5:
                mon = 4;
            break;
            case 6:
                mon = 5;
            break;
            case 7:
                mon = 6;
            break;
            case 8:
                mon = 7;
            break;
            case 9:
                mon = 8;
            break;
            case 10:
                mon = 9;
            break;
            case 11:
                mon = 10;
            break;
            case 12:
                mon = 11;
            break;
        }

        let ufc = ((parseInt(sessionStorage.getItem('year')) - 2021) * 12) + 265 + mon;
        return ufc;
    }

    handleFight = (event) => {
        let payType = sessionStorage.getItem('payType');

        if (payType == 1) {
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) + parseInt(this.calcPurse()));
            sessionStorage.setItem('careerEarnings', parseInt(sessionStorage.getItem('careerEarnings')) + parseInt(this.calcPurse()));
        }
        else if (payType == 2) {
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) + (parseInt(this.calcPurse()) - parseInt(sessionStorage.getItem('gymCamp'))));
            sessionStorage.setItem('careerEarnings', parseInt(sessionStorage.getItem('careerEarnings')) + (parseInt(this.calcPurse()) - parseInt(sessionStorage.getItem('gymCamp'))));
        }
        else if (payType == 3) {
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) + (parseInt(this.calcPurse()) - parseInt(sessionStorage.getItem('gymCamp'))));
            sessionStorage.setItem('careerEarnings', parseInt(sessionStorage.getItem('careerEarnings')) + (parseInt(this.calcPurse()) - parseInt(sessionStorage.getItem('gymCamp'))));
        }
        else {
            console.log('pay error')
        }

        sessionStorage.setItem('payType', 0);

        if (sessionStorage.getItem('win') == 1) {
            sessionStorage.setItem('playerWin', parseInt(sessionStorage.getItem('playerWin')) + 1);
            sessionStorage.setItem('prevFight', 1);
            sessionStorage.setItem('winStreak', parseInt(sessionStorage.getItem('winStreak')) + 1);
            sessionStorage.setItem('lossStreak', 0);
        }
        else {
            sessionStorage.setItem('playerLoss', parseInt(sessionStorage.getItem('playerLoss')) + 1);
            sessionStorage.setItem('prevFight', 2);
            sessionStorage.setItem('lossStreak', parseInt(sessionStorage.getItem('lossStreak')) + 1);
            sessionStorage.setItem('winStreak', 0);
        }

        let ko = sessionStorage.getItem('ko');
        let tko = sessionStorage.getItem('tko');
        let sub = sessionStorage.getItem('sub');

        let round = parseInt(sessionStorage.getItem('round')) - 1;
            switch(round) {
                case 1:
                    if (sessionStorage.getItem('win') == 1) {
                        if (ko == 1 || tko == 1) {
                            sessionStorage.setItem('winKO', parseInt(sessionStorage.getItem('winKO')) + 1);
                            sessionStorage.setItem('fin1', parseInt(sessionStorage.getItem('fin1')) + 1);
                        }
                        else if (sub == 1){
                            sessionStorage.setItem('winSUB', parseInt(sessionStorage.getItem('winSUB')) + 1);
                            sessionStorage.setItem('fin1', parseInt(sessionStorage.getItem('fin1')) + 1);
                        }
                        else {
                            sessionStorage.setItem('winDEC', parseInt(sessionStorage.getItem('winDEC')) + 1);
                        }
                    }
                    else {
                        if (ko == 1 || tko == 1) {
                            sessionStorage.setItem('lossKO', parseInt(sessionStorage.getItem('lossKO')) + 1);
                        }
                        else if (sub == 1){
                            sessionStorage.setItem('lossSUB', parseInt(sessionStorage.getItem('lossSUB')) + 1);
                        }
                        else {
                            sessionStorage.setItem('lossDEC', parseInt(sessionStorage.getItem('lossDEC')) + 1);
                        }
                    }
                break;
                case 2:
                    if (sessionStorage.getItem('win') == 1) {
                        if (ko == 1 || tko == 1) {
                            sessionStorage.setItem('winKO', parseInt(sessionStorage.getItem('winKO')) + 1);
                            sessionStorage.setItem('fin2', parseInt(sessionStorage.getItem('fin2')) + 1);
                        }
                        else if (sub == 1){
                            sessionStorage.setItem('winSUB', parseInt(sessionStorage.getItem('winSUB')) + 1);
                            sessionStorage.setItem('fin2', parseInt(sessionStorage.getItem('fin2')) + 1);
                        }
                        else {
                            sessionStorage.setItem('winDEC', parseInt(sessionStorage.getItem('winDEC')) + 1);
                        }
                    }
                    else {
                        if (ko == 1 || tko == 1) {
                            sessionStorage.setItem('lossKO', parseInt(sessionStorage.getItem('lossKO')) + 1);
                        }
                        else if (sub == 1){
                            sessionStorage.setItem('lossSUB', parseInt(sessionStorage.getItem('lossSUB')) + 1);
                        }
                        else {
                            sessionStorage.setItem('lossDEC', parseInt(sessionStorage.getItem('lossDEC')) + 1);
                        }
                    }
                break;
                case 3:
                    if (sessionStorage.getItem('win') == 1) {
                        if (ko == 1 || tko == 1) {
                            sessionStorage.setItem('winKO', parseInt(sessionStorage.getItem('winKO')) + 1);
                            sessionStorage.setItem('fin3', parseInt(sessionStorage.getItem('fin3')) + 1);
                        }
                        else if (sub == 1){
                            sessionStorage.setItem('winSUB', parseInt(sessionStorage.getItem('winSUB')) + 1);
                            sessionStorage.setItem('fin3', parseInt(sessionStorage.getItem('fin3')) + 1);
                        }
                        else {
                            sessionStorage.setItem('winDEC', parseInt(sessionStorage.getItem('winDEC')) + 1);
                        }
                    }
                    else {
                        if (ko == 1 || tko == 1) {
                            sessionStorage.setItem('lossKO', parseInt(sessionStorage.getItem('lossKO')) + 1);
                        }
                        else if (sub == 1){
                            sessionStorage.setItem('lossSUB', parseInt(sessionStorage.getItem('lossSUB')) + 1);
                        }
                        else {
                            sessionStorage.setItem('lossDEC', parseInt(sessionStorage.getItem('lossDEC')) + 1);
                        }
                    }
                break;
                case 4:
                    if (sessionStorage.getItem('win') == 1) {
                        if (ko == 1 || tko == 1) {
                            sessionStorage.setItem('winKO', parseInt(sessionStorage.getItem('winKO')) + 1);
                            sessionStorage.setItem('fin4', parseInt(sessionStorage.getItem('fin4')) + 1);
                        }
                        else if (sub == 1){
                            sessionStorage.setItem('winSUB', parseInt(sessionStorage.getItem('winSUB')) + 1);
                            sessionStorage.setItem('fin4', parseInt(sessionStorage.getItem('fin4')) + 1);
                        }
                        else {
                            sessionStorage.setItem('winDEC', parseInt(sessionStorage.getItem('winDEC')) + 1);
                        }
                    }
                    else {
                        if (ko == 1 || tko == 1) {
                            sessionStorage.setItem('lossKO', parseInt(sessionStorage.getItem('lossKO')) + 1);
                        }
                        else if (sub == 1){
                            sessionStorage.setItem('lossSUB', parseInt(sessionStorage.getItem('lossSUB')) + 1);
                        }
                        else {
                            sessionStorage.setItem('lossDEC', parseInt(sessionStorage.getItem('lossDEC')) + 1);
                        }
                    }
                break;
                case 5:
                    if (sessionStorage.getItem('win') == 1) {
                        if (ko == 1 || tko == 1) {
                            sessionStorage.setItem('winKO', parseInt(sessionStorage.getItem('winKO')) + 1);
                            sessionStorage.setItem('fin5', parseInt(sessionStorage.getItem('fin5')) + 1);
                        }
                        else if (sub == 1){
                            sessionStorage.setItem('winSUB', parseInt(sessionStorage.getItem('winSUB')) + 1);
                            sessionStorage.setItem('fin5', parseInt(sessionStorage.getItem('fin5')) + 1);
                        }
                        else {
                            sessionStorage.setItem('winDEC', parseInt(sessionStorage.getItem('winDEC')) + 1);
                        }
                    }
                    else {
                        if (ko == 1 || tko == 1) {
                            sessionStorage.setItem('lossKO', parseInt(sessionStorage.getItem('lossKO')) + 1);
                        }
                        else if (sub == 1){
                            sessionStorage.setItem('lossSUB', parseInt(sessionStorage.getItem('lossSUB')) + 1);
                        }
                        else {
                            sessionStorage.setItem('lossDEC', parseInt(sessionStorage.getItem('lossDEC')) + 1);
                        }
                    }
                break;
            }

            let num = parseInt(sessionStorage.getItem('oppNum'));
            if (num > 100) {
                for (let i = 101; i < 110; ++i) {
                    if (i == num) {
                        let x = 'nrf' + (num - 100);
                        let data = sessionStorage.getItem(x);
                        data = JSON.parse(data);

                        let rec = sessionStorage.getItem('playerWin') + ' - ' + sessionStorage.getItem('playerLoss');
                        let name = data.first + ' ' + data.last;
                        let res = (sessionStorage.getItem('win') == 1) ? 'WIN' : 'LOSS';
                        let met = (sessionStorage.getItem('ko') == 1) ? 'KO' : (sessionStorage.getItem('tko') == 1) ? 'TKO' : (sessionStorage.getItem('sub') == 1) ? 'SUB' : 'DEC';
                        let ufc = this.getUfc();
                        let date = this.calcMonth1(sessionStorage.getItem('month')) + ' ' + sessionStorage.getItem('year');

                        this.record(rec, name, res, met, round, ufc, date);
                    }
                }
            }
            else {
                for (let i = 1; i < 22; ++i) {
                    if (i == num) {
                        let x = 'nr' + num;
                        let data = sessionStorage.getItem(x);
                        data = JSON.parse(data);

                        let rec = sessionStorage.getItem('playerWin') + ' - ' + sessionStorage.getItem('playerLoss');
                        let name = data.first + ' ' + data.last;
                        let res = (sessionStorage.getItem('win') == 1) ? 'WIN' : 'LOSS';
                        let met = (sessionStorage.getItem('ko') == 1) ? 'KO' : (sessionStorage.getItem('tko') == 1) ? 'TKO' : (sessionStorage.getItem('sub') == 1) ? 'SUB' : 'DEC';
                        let ufc = this.getUfc();
                        let date = this.calcMonth1(sessionStorage.getItem('month')) + ' ' + sessionStorage.getItem('year');

                        this.record(rec, name, res, met, round, ufc, date);
                    }
                }
            }

            sessionStorage.setItem('month', parseInt(sessionStorage.getItem('month')) + 1);

            if (sessionStorage.getItem('rank') == 'NR') {
                sessionStorage.setItem('followers', parseInt(Math.pow(parseInt(sessionStorage.getItem('followers')), 1.015)));
                randomNR();
            }
    }

    record(rec, nam, res, met, rou, ufc, dat) {
        sessionStorage.setItem('recRec11', sessionStorage.getItem('recRec10'));
        sessionStorage.setItem('recNam11', sessionStorage.getItem('recNam10'));
        sessionStorage.setItem('recRes11', sessionStorage.getItem('recRes10'));
        sessionStorage.setItem('recMet11', sessionStorage.getItem('recMet10'));
        sessionStorage.setItem('recRou11', sessionStorage.getItem('recRou10'));
        sessionStorage.setItem('recUfc11', sessionStorage.getItem('recUfc10'));
        sessionStorage.setItem('recDat11', sessionStorage.getItem('recDat10'));

        sessionStorage.setItem('recRec10', sessionStorage.getItem('recRec9'));
        sessionStorage.setItem('recNam10', sessionStorage.getItem('recNam9'));
        sessionStorage.setItem('recRes10', sessionStorage.getItem('recRes9'));
        sessionStorage.setItem('recMet10', sessionStorage.getItem('recMet9'));
        sessionStorage.setItem('recRou10', sessionStorage.getItem('recRou9'));
        sessionStorage.setItem('recUfc10', sessionStorage.getItem('recUfc9'));
        sessionStorage.setItem('recDat10', sessionStorage.getItem('recDat9'));

        sessionStorage.setItem('recRec9', sessionStorage.getItem('recRec8'));
        sessionStorage.setItem('recNam9', sessionStorage.getItem('recNam8'));
        sessionStorage.setItem('recRes9', sessionStorage.getItem('recRes8'));
        sessionStorage.setItem('recMet9', sessionStorage.getItem('recMet8'));
        sessionStorage.setItem('recRou9', sessionStorage.getItem('recRou8'));
        sessionStorage.setItem('recUfc9', sessionStorage.getItem('recUfc8'));
        sessionStorage.setItem('recDat9', sessionStorage.getItem('recDat8'));
        
        sessionStorage.setItem('recRec8', sessionStorage.getItem('recRec7'));
        sessionStorage.setItem('recNam8', sessionStorage.getItem('recNam7'));
        sessionStorage.setItem('recRes8', sessionStorage.getItem('recRes7'));
        sessionStorage.setItem('recMet8', sessionStorage.getItem('recMet7'));
        sessionStorage.setItem('recRou8', sessionStorage.getItem('recRou7'));
        sessionStorage.setItem('recUfc8', sessionStorage.getItem('recUfc7'));
        sessionStorage.setItem('recDat8', sessionStorage.getItem('recDat7'));
        
        sessionStorage.setItem('recRec7', sessionStorage.getItem('recRec6'));
        sessionStorage.setItem('recNam7', sessionStorage.getItem('recNam6'));
        sessionStorage.setItem('recRes7', sessionStorage.getItem('recRes6'));
        sessionStorage.setItem('recMet7', sessionStorage.getItem('recMet6'));
        sessionStorage.setItem('recRou7', sessionStorage.getItem('recRou6'));
        sessionStorage.setItem('recUfc7', sessionStorage.getItem('recUfc6'));
        sessionStorage.setItem('recDat7', sessionStorage.getItem('recDat6'));
        
        sessionStorage.setItem('recRec6', sessionStorage.getItem('recRec5'));
        sessionStorage.setItem('recNam6', sessionStorage.getItem('recNam5'));
        sessionStorage.setItem('recRes6', sessionStorage.getItem('recRes5'));
        sessionStorage.setItem('recMet6', sessionStorage.getItem('recMet5'));
        sessionStorage.setItem('recRou6', sessionStorage.getItem('recRou5'));
        sessionStorage.setItem('recUfc6', sessionStorage.getItem('recUfc5'));
        sessionStorage.setItem('recDat6', sessionStorage.getItem('recDat5'));
        
        sessionStorage.setItem('recRec5', sessionStorage.getItem('recRec4'));
        sessionStorage.setItem('recNam5', sessionStorage.getItem('recNam4'));
        sessionStorage.setItem('recRes5', sessionStorage.getItem('recRes4'));
        sessionStorage.setItem('recMet5', sessionStorage.getItem('recMet4'));
        sessionStorage.setItem('recRou5', sessionStorage.getItem('recRou4'));
        sessionStorage.setItem('recUfc5', sessionStorage.getItem('recUfc4'));
        sessionStorage.setItem('recDat5', sessionStorage.getItem('recDat4'));
        
        sessionStorage.setItem('recRec4', sessionStorage.getItem('recRec3'));
        sessionStorage.setItem('recNam4', sessionStorage.getItem('recNam3'));
        sessionStorage.setItem('recRes4', sessionStorage.getItem('recRes3'));
        sessionStorage.setItem('recMet4', sessionStorage.getItem('recMet3'));
        sessionStorage.setItem('recRou4', sessionStorage.getItem('recRou3'));
        sessionStorage.setItem('recUfc4', sessionStorage.getItem('recUfc3'));
        sessionStorage.setItem('recDat4', sessionStorage.getItem('recDat3'));
        
        sessionStorage.setItem('recRec3', sessionStorage.getItem('recRec2'));
        sessionStorage.setItem('recNam3', sessionStorage.getItem('recNam2'));
        sessionStorage.setItem('recRes3', sessionStorage.getItem('recRes2'));
        sessionStorage.setItem('recMet3', sessionStorage.getItem('recMet2'));
        sessionStorage.setItem('recRou3', sessionStorage.getItem('recRou2'));
        sessionStorage.setItem('recUfc3', sessionStorage.getItem('recUfc2'));
        sessionStorage.setItem('recDat3', sessionStorage.getItem('recDat2'));
        
        sessionStorage.setItem('recRec2', sessionStorage.getItem('recRec1'));
        sessionStorage.setItem('recNam2', sessionStorage.getItem('recNam1'));
        sessionStorage.setItem('recRes2', sessionStorage.getItem('recRes1'));
        sessionStorage.setItem('recMet2', sessionStorage.getItem('recMet1'));
        sessionStorage.setItem('recRou2', sessionStorage.getItem('recRou1'));
        sessionStorage.setItem('recUfc2', sessionStorage.getItem('recUfc1'));
        sessionStorage.setItem('recDat2', sessionStorage.getItem('recDat1'));
        
        sessionStorage.setItem('recRec1', rec);
        sessionStorage.setItem('recNam1', nam);
        sessionStorage.setItem('recRes1', res);
        sessionStorage.setItem('recMet1', met);
        sessionStorage.setItem('recRou1', rou);
        sessionStorage.setItem('recUfc1', ufc);
        sessionStorage.setItem('recDat1', dat);
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
    
    calcPurse() {
        let pay = parseInt(this.calcPay());
        if (sessionStorage.getItem('win') == 1) {
            pay = pay + parseInt(this.ifCwin());
        }
        if (parseInt(sessionStorage.getItem('playerStatus')) - parseInt(sessionStorage.getItem('oppStatus')) >= 500) {
            pay = pay + 50000;
        }
        if (sessionStorage.getItem('playerStatus') <= 500 && sessionStorage.getItem('oppStatus') <= 500) {
            pay = pay + 50000;
        }

        return pay;
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
            sessionStorage.setItem('payType', 1);
            return '$' + this.calcPurse();
        }
        else {
            if (this.calcPay() >= sessionStorage.getItem('gymCamp')){
                sessionStorage.setItem('payType', 2);
                return '$' + (parseInt(this.calcPurse()) - parseInt(sessionStorage.getItem('gymCamp')));
            }
        }
    }

    getGuaranteed1() {
        if (sessionStorage.getItem('gym') == 'NONE') {
            return '';
        }
        else if (this.calcPay() < sessionStorage.getItem('gymCamp')){
            sessionStorage.setItem('payType', 3);
            return '$' + (Math.abs(parseInt(this.calcPurse()) - parseInt(sessionStorage.getItem('gymCamp'))));
        }
    }

    getCamp() {
        return '$' + sessionStorage.getItem('gymCamp');
    }

    getVia() {
        let ko = sessionStorage.getItem('ko');
        let tko = sessionStorage.getItem('tko');
        let sub = sessionStorage.getItem('sub');

        if (ko == 1) {
            return 'KNOCKOUT';
        }
        else if (tko == 1) {
            return 'TECHNICAL KNOCKOUT';
        }
        else if (sub == 1){
            return 'SUBMISSION';
        }
        else {
            return 'UNANIMOUS DECISION';
        }
    }

    getPoints() {
        let points = sessionStorage.getItem('points');
        let points1 = sessionStorage.getItem('points1');
        let round = '';

        if (sessionStorage.getItem('ko') == 0 && sessionStorage.getItem('tko') == 0 && sessionStorage.getItem('sub') == 0) {
            if (sessionStorage.getItem('win') == 1) {
                return points + ' - ' + points1;
            }
            else {
                return points1 + ' - ' + points;
            }
        }
        else {
            let round = parseInt(sessionStorage.getItem('round')) - 1;
            switch(round) {
                case 0:
                    return '0ST ROUND';
                break;
                case 1:
                    return '1ST ROUND';
                break;
                case 2:
                    return '2ND ROUND';
                break;
                case 3:
                    return '3RD ROUND';
                break;
                case 4:
                    return '4TH ROUND';
                break;
                case 5:
                    return '5TH ROUND';
                break;
            }
        }
    }

    render() {
        let month = sessionStorage.getItem('month');
        let year = sessionStorage.getItem('year');
        let data = sessionStorage.getItem('player');
        sessionStorage.setItem('payType', 0);
        data = JSON.parse(data)
        let whitespace = "\xa0\xa0\xa0";
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -366 }} />
                        RESULTS
                        <div className="App-customize2" style={{marginTop: -20}}>
                            <Button1e><text style={{color: 'grey'}}>{(sessionStorage.getItem('win') == 1) ? sessionStorage.getItem('rank') : sessionStorage.getItem('oppRank')}</text> <b>{(sessionStorage.getItem('win') == 1) ? data.first : sessionStorage.getItem('oppFirst')} {(sessionStorage.getItem('win') == 1) ? data.last : sessionStorage.getItem('oppLast')}</b>{whitespace}DEF.{whitespace}<text style={{color: 'grey'}}>{(sessionStorage.getItem('win') == 1) ? sessionStorage.getItem('oppRank') : sessionStorage.getItem('rank')}</text> <b>{(sessionStorage.getItem('win') == 1) ? sessionStorage.getItem('oppFirst') : data.first} {(sessionStorage.getItem('win') == 1) ? sessionStorage.getItem('oppLast') : data.last}</b></Button1e>
                        </div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><center>VIA <b>{this.getVia()}</b></center></Button1cl>
                        </div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><center>{this.getPoints()}</center></Button1cl>
                        </div>
                        <div className="App-customize2-1" style={{marginTop: 0}}></div>
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
                            <Button1cr><text style={(sessionStorage.getItem('win') == 1) ? {color: 'green'} : {color: 'white'}}>${this.ifCwin()}</text></Button1cr>
                        </div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>POTN BONUS</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr><text style={(parseInt(sessionStorage.getItem('playerStatus')) - parseInt(sessionStorage.getItem('oppStatus')) >= 500) ? {color: 'green'} : {color: 'white'}}>$50000</text></Button1cr>
                        </div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>FOTN BONUS</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr><text style={(parseInt(sessionStorage.getItem('playerStatus')) <= 500 && parseInt(sessionStorage.getItem('oppStatus')) <= 500) ? {color: 'green'} : {color: 'white'}}>$50000</text></Button1cr>
                        </div>
                        <div className="App-customize2-1" style={{marginTop: 0}}></div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>TRAINING CAMP</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr><text style={{color: 'red'}}>{this.getCamp()}</text> {sessionStorage.getItem('gym')}</Button1cr>
                        </div>
                        <div className="App-customize2-1" style={{marginTop: 0}}></div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>FIGHT PURSE</b></Button1cl>
                            <Button1f></Button1f>
                            <Button1cr><text style={{color: 'green'}}>{this.getGuaranteed0()}</text><text style={{color: 'red'}}>{this.getGuaranteed1()}</text></Button1cr>
                        </div>
                        <div className="App-customize3" style={{marginTop: 14, marginBottom: -306}}>
                            <Link to='/home'><Button onClick={this.handleFight}>HOME</Button></Link>
                        </div>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: 833 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Button4a>BACK</Button4a>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;
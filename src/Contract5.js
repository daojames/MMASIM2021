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

class Contract5 extends React.Component {
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
        let data = sessionStorage.getItem('ABC5');
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
        let data = sessionStorage.getItem('ABC5');
        data = JSON.parse(data);
        sessionStorage.setItem('oppRank', data.rank);
        sessionStorage.setItem('oppFirst', data.first);
        sessionStorage.setItem('oppLast', data.last);
        sessionStorage.setItem('oppHieght', data.height);
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
        
        sessionStorage.setItem('playerStance', '?');
        sessionStorage.setItem('playerGuard', '?');
        sessionStorage.setItem('playerStm', 150 + parseInt(sessionStorage.getItem('stm')));
        sessionStorage.setItem('oppStm', 150 + parseInt(data.stamina));
        sessionStorage.setItem('playerStatus', 1000);
        sessionStorage.setItem('oppStatus', 1000);
        
        sessionStorage.setItem('att1', '?');
        sessionStorage.setItem('att2', '?');
        sessionStorage.setItem('att3', '?');

        sessionStorage.setItem('round', 1);
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

    calcPay() {
        let rank = sessionStorage.getItem('rank');
        let followers = sessionStorage.getItem('followers');
        let pay = null;
        if (rank == 'NR'){
            pay = followers * 2;
            sessionStorage.setItem('pay', pay);
            return pay;
        }
        else if (rank == 'C'){
            pay = followers * 7.5;
            sessionStorage.setItem('pay', pay);
            return pay; 
        }
        else {
            pay = followers * 5;
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
                            <Button1cr>{data.weight}</Button1cr>
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
                            <Button1cr>${this.calcPay()}</Button1cr>
                        </div>
                        <div className="App-customize2-0" style={{marginTop: 0}}>
                            <Button1cl><b>KO BONUS</b></Button1cl>
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
                        <Link to='./tale5'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contract5;
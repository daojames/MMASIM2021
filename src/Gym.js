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

const Buttona = styled.button`
background-color: transparent;
color: white;
padding: 20px;
width: 717px;
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

class Gym extends React.Component { 
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
            case '14':
                sessionStorage.setItem('month', 2);
                sessionStorage.setItem('year', (parseInt(sessionStorage.getItem('year')) + 1));
                return 'FEBRUARY';
                break;
            case '15':
                sessionStorage.setItem('month', 3);
                sessionStorage.setItem('year', (parseInt(sessionStorage.getItem('year')) + 1));
                return 'MARCH';
                break;
            case '16':
                sessionStorage.setItem('month', 4);
                sessionStorage.setItem('year', (parseInt(sessionStorage.getItem('year')) + 1));
                return 'APRIL';
                break;
        }
    }

    gymStrength = (event) => {
        let value = parseInt(sessionStorage.getItem('str'));
        let price = (parseInt(sessionStorage.getItem('str'))/100) * 10000;
        if(value < 100 && (parseInt(sessionStorage.getItem('balance')) >= price)){
            sessionStorage.setItem('str', (parseInt(sessionStorage.getItem('str')) + 5));
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - price);
        }
    }

    gymSpeed = (event) => {
        let value = parseInt(sessionStorage.getItem('spd'));
        let price = (parseInt(sessionStorage.getItem('spd'))/100) * 10000;
        if(value < 100 && (parseInt(sessionStorage.getItem('balance')) >= price)){
            sessionStorage.setItem('spd', (parseInt(sessionStorage.getItem('spd')) + 5));
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - price);
        }
    }

    gymStamina = (event) => {
        let value = parseInt(sessionStorage.getItem('stm'));
        let price = (parseInt(sessionStorage.getItem('stm'))/100) * 10000;
        if(value < 100 && (parseInt(sessionStorage.getItem('balance')) >= price)){
            sessionStorage.setItem('stm', (parseInt(sessionStorage.getItem('stm')) + 5));
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - price);
        }
    }

    gymPunching = (event) => {
        let value = parseInt(sessionStorage.getItem('punch'));
        let price = (parseInt(sessionStorage.getItem('punch'))/100) * 10000;
        if(value < 100 && (parseInt(sessionStorage.getItem('balance')) >= price)){
            sessionStorage.setItem('punch', (parseInt(sessionStorage.getItem('punch')) + 5));
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - price);
        }
    }

    gymKicking = (event) => {
        let value = parseInt(sessionStorage.getItem('kick'));
        let price = (parseInt(sessionStorage.getItem('kick'))/100) * 10000;
        if(value < 100 && (parseInt(sessionStorage.getItem('balance')) >= price)){
            sessionStorage.setItem('kick', (parseInt(sessionStorage.getItem('kick')) + 5));
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - price);
        }
    }

    gymWrestling = (event) => {
        let value = parseInt(sessionStorage.getItem('wrestling'));
        let price = (parseInt(sessionStorage.getItem('wrestling'))/100) * 10000;
        if(value < 100 && (parseInt(sessionStorage.getItem('balance')) >= price)){
            sessionStorage.setItem('wrestling', (parseInt(sessionStorage.getItem('wrestling')) + 5));
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - price);
        }
    }

    gymGrappling = (event) => {
        let value = parseInt(sessionStorage.getItem('grappling'));
        let price = (parseInt(sessionStorage.getItem('grappling'))/100) * 10000;
        if(value < 100 && (parseInt(sessionStorage.getItem('balance')) >= price)){
            sessionStorage.setItem('grappling', (parseInt(sessionStorage.getItem('grappling')) + 5));
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - price);
        }
    }

    gymClinch = (event) => {
        let value = parseInt(sessionStorage.getItem('clinch'));
        let price = (parseInt(sessionStorage.getItem('clinch'))/100) * 10000;
        if(value < 100 && (parseInt(sessionStorage.getItem('balance')) >= price)){
            sessionStorage.setItem('clinch', (parseInt(sessionStorage.getItem('clinch')) + 5));
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - price);
        }
    }

    injury = (event) => {
        let price = 0;
        if (sessionStorage.getItem('injury') == 0){
            price = 0;
        }
        else if (sessionStorage.getItem('injury') == 1){
            price = 500;
        }
        else if (sessionStorage.getItem('injury') == 2){
            price = 1000;
        }
        else if (sessionStorage.getItem('injury') == 3){
            price = 2000;
        }
        let time = 0;
        if (sessionStorage.getItem('injury') == 0){
            time = 0;
        }
        else if (sessionStorage.getItem('injury') == 1){
            time = 1;
        }
        else if (sessionStorage.getItem('injury') == 2){
            time = 2;
        }
        else if (sessionStorage.getItem('injury') == 3){
            time = 4;
        }
        if ((parseInt(sessionStorage.getItem('balance')) >= price)) {
            sessionStorage.setItem('injury', 0);
            sessionStorage.setItem('balance', parseInt(sessionStorage.getItem('balance')) - price);
            sessionStorage.setItem('month', (parseInt(sessionStorage.getItem('month')) + time));
            sessionStorage.setItem('playerStrength', parseInt(sessionStorage.getItem('str')));
            sessionStorage.setItem('playerSpeed', parseInt(sessionStorage.getItem('spd')));
            sessionStorage.setItem('playerStamina', parseInt(sessionStorage.getItem('stm')));
        }
    }


    strengthPrice() {
        if (sessionStorage.getItem('str') >= 100){
            return 'MAX';
        }
        else {
            return '$' + ((parseInt(sessionStorage.getItem('str'))/100) * 10000);
        }
    }
    
    speedPrice() {
        if (sessionStorage.getItem('spd') >= 100){
            return 'MAX';
        }
        else {
            return '$' + ((parseInt(sessionStorage.getItem('spd'))/100) * 10000);
        }
    }
    
    staminaPrice() {
        if (sessionStorage.getItem('stm') >= 100){
            return 'MAX';
        }
        else {
            return '$' + ((parseInt(sessionStorage.getItem('stm'))/100) * 10000);
        }
    }
    
    punchingPrice() {
        if (sessionStorage.getItem('punch') >= 100){
            return 'MAX';
        }
        else {
            return '$' + ((parseInt(sessionStorage.getItem('punch'))/100) * 10000);
        }
    }
    
    kickingPrice() {
        if (sessionStorage.getItem('kick') >= 100){
            return 'MAX';
        }
        else {
            return '$' + ((parseInt(sessionStorage.getItem('kick'))/100) * 10000);
        }
    }
    
    wrestlingPrice() {
        if (sessionStorage.getItem('wrestling') >= 100){
            return 'MAX';
        }
        else {
            return '$' + ((parseInt(sessionStorage.getItem('wrestling'))/100) * 10000);
        }
    }
    
    grapplingPrice() {
        if (sessionStorage.getItem('grappling') >= 100){
            return 'MAX';
        }
        else {
            return '$' + ((parseInt(sessionStorage.getItem('grappling'))/100) * 10000);
        }
    }
    
    clinchPrice() {
        if (sessionStorage.getItem('clinch') >= 100){
            return 'MAX';
        }
        else {
            return '$' + ((parseInt(sessionStorage.getItem('clinch'))/100) * 10000);
        }
    }

    getInjury0() {
        if (sessionStorage.getItem('injury') == 0){
            return 'HEALTHY';
        }
    }

    getInjury1() {
        if (sessionStorage.getItem('injury') == 1){
            return 'MINOR INJURY';
        }
    }

    getInjury2() {
        if (sessionStorage.getItem('injury') == 2){
            return 'MODERATE INJURY';
        }
    }

    getInjury3() {
        if (sessionStorage.getItem('injury') == 3){
            return 'SEVERE INJURY';
        }
    }

    getInjuryPrice() {
        if (sessionStorage.getItem('injury') == 0){
            return '$0';
        }
        else if (sessionStorage.getItem('injury') == 1){
            return '$500';
        }
        else if (sessionStorage.getItem('injury') == 2){
            return '$1000';
        }
        else if (sessionStorage.getItem('injury') == 3){
            return '$2000';
        }
    }

    getInjuryTime() {
        if (sessionStorage.getItem('injury') == 0){
            return 0;
        }
        else if (sessionStorage.getItem('injury') == 1){
            return 1;
        }
        else if (sessionStorage.getItem('injury') == 2){
            return 2;
        }
        else if (sessionStorage.getItem('injury') == 3){
            return 4;
        }
    }

    getStrength0() {
        if (sessionStorage.getItem('injury') == 0){
            return parseInt(sessionStorage.getItem('str'));
        }
    }

    getStrength1() {
        if (sessionStorage.getItem('injury') == 1){
            return parseInt(parseInt(sessionStorage.getItem('str')) * 0.5);
        }
    }

    getStrength2() {
        if (sessionStorage.getItem('injury') == 2){
            return parseInt(parseInt(sessionStorage.getItem('str')) * 0.25);
        }
    }

    getStrength3() {
        if (sessionStorage.getItem('injury') == 3){
            console.log('asd')
            return parseInt(parseInt(sessionStorage.getItem('str')) * 0.1);
        }
    }

    getSpeed0() {
        if (sessionStorage.getItem('injury') == 0){
            return parseInt(sessionStorage.getItem('spd'));
        }
    }

    getSpeed1() {
        if (sessionStorage.getItem('injury') == 1){
            return parseInt(parseInt(sessionStorage.getItem('spd')) * 0.5);
        }
    }

    getSpeed2() {
        if (sessionStorage.getItem('injury') == 2){
            return parseInt(parseInt(sessionStorage.getItem('spd')) * 0.25);
        }
    }

    getSpeed3() {
        if (sessionStorage.getItem('injury') == 3){
            console.log('asd')
            return parseInt(parseInt(sessionStorage.getItem('spd')) * 0.1);
        }
    }

    getStamina0() {
        if (sessionStorage.getItem('injury') == 0){
            return parseInt(sessionStorage.getItem('stm'));
        }
    }

    getStamina1() {
        if (sessionStorage.getItem('injury') == 1){
            return parseInt(parseInt(sessionStorage.getItem('stm')) * 0.5);
        }
    }

    getStamina2() {
        if (sessionStorage.getItem('injury') == 2){
            return parseInt(parseInt(sessionStorage.getItem('stm')) * 0.25);
        }
    }

    getStamina3() {
        if (sessionStorage.getItem('injury') == 3){
            console.log('asd')
            return parseInt(parseInt(sessionStorage.getItem('stm')) * 0.1);
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
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -425 }} />
                        GYM<br/><br/>
                        <div className="App-customize2" style={{marginTop: 0}}>
                            <Button1>STRENGTH</Button1>
                            <Button1>SPEED</Button1>
                            <Button1>STAMINA</Button1>
                        </div>
                        <div className="App-customize3" style={{marginTop: -20}}>
                            <Button2><b><text style={{color: 'white'}}>{this.getStrength0()}</text><text style={{color: 'yellow'}}>{this.getStrength1()}</text><text style={{color: 'orange'}}>{this.getStrength2()}</text><text style={{color: 'red'}}>{this.getStrength3()}</text></b></Button2>
                            <Button2><b><text style={{color: 'white'}}>{this.getSpeed0()}</text><text style={{color: 'yellow'}}>{this.getSpeed1()}</text><text style={{color: 'orange'}}>{this.getSpeed2()}</text><text style={{color: 'red'}}>{this.getSpeed3()}</text></b></Button2>
                            <Button2><b><text style={{color: 'white'}}>{this.getStamina0()}</text><text style={{color: 'yellow'}}>{this.getStamina1()}</text><text style={{color: 'orange'}}>{this.getStamina2()}</text><text style={{color: 'red'}}>{this.getStamina3()}</text></b></Button2>
                        </div>
                        <div className="App-customize2" style={{marginTop: 25}}>
                            <Button1>PUNCHING</Button1>
                            <Button1>KICKING</Button1>
                            <Button1>WRESTLING</Button1>
                            <Button1>GRAPPLING</Button1>
                            <Button1>CLINCH</Button1>
                        </div>
                        <div className="App-customize3" style={{marginTop: -20}}>
                            <Button2><b>{punch}</b></Button2>
                            <Button2><b>{kick}</b></Button2>
                            <Button2><b>{wrestling}</b></Button2>
                            <Button2><b>{grappling}</b></Button2>
                            <Button2><b>{clinch}</b></Button2>
                        </div>
                    </div>
                    <div className="App-customize1" style={{marginTop: 492}}>
                        <Link to='./gym'><Button data-tip data-for="1" onClick={this.gymStrength}>STRENGTH</Button></Link>
                        <ReactTooltip class="Membership" id="1" place="top" effect="solid">+5 STRENGTH<br/><b>{this.strengthPrice()}</b></ReactTooltip>
                        <Link to='./gym'><Button data-tip data-for="2" onClick={this.gymSpeed}>SPEED</Button></Link>
                        <ReactTooltip class="Membership" id="2" place="top" effect="solid">+5 SPEED<br/><b>{this.speedPrice()}</b></ReactTooltip>
                        <Link to='./gym'><Button data-tip data-for="3" onClick={this.gymStamina}>STAMINA</Button></Link>
                        <ReactTooltip class="Membership" id="3" place="top" effect="solid">+5 STAMINA<br/><b>{this.staminaPrice()}</b></ReactTooltip>
                    </div>
                    <div className="App-customize1" style={{marginTop: 0}}>
                        <Link to='./gym'><Button data-tip data-for="4" onClick={this.gymPunching}>PUNCHING</Button></Link>
                        <ReactTooltip class="Membership" id="4" place="top" effect="solid">+5 PUNCHING<br/><b>{this.punchingPrice()}</b></ReactTooltip>
                        <Link to='./gym'><Button data-tip data-for="5" onClick={this.gymKicking}>KICKING</Button></Link>
                        <ReactTooltip class="Membership" id="5" place="top" effect="solid">+5 KICKING<br/><b>{this.kickingPrice()}</b></ReactTooltip>
                        <Link to='./gym'><Button data-tip data-for="6" onClick={this.gymWrestling}>WRESTLING</Button></Link>
                        <ReactTooltip class="Membership" id="6" place="top" effect="solid">+5 WRESTLING<br/><b>{this.wrestlingPrice()}</b></ReactTooltip>
                        <Link to='./gym'><Button data-tip data-for="7" onClick={this.gymGrappling}>GRAPPLING</Button></Link>
                        <ReactTooltip class="Membership" id="7" place="top" effect="solid">+5 GRAPPLING<br/><b>{this.grapplingPrice()}</b></ReactTooltip>
                        <Link to='./gym'><Button data-tip data-for="8" onClick={this.gymClinch}>CLINCH</Button></Link>
                        <ReactTooltip class="Membership" id="8" place="top" effect="solid">+5 CLINCH<br/><b>{this.clinchPrice()}</b></ReactTooltip>
                    </div>
                    <div className="App-customize1" style={{marginTop: 0}}>
                        <Link to='./gyms'><Buttona data-tip data-for="10">GYM MEMBERSHIP</Buttona></Link>
                        <ReactTooltip class="Membership" id="10" place="top" effect="solid">JOIN MMA GYM & TRAINING CAMP</ReactTooltip>
                        <Link to='./gym'><Buttona data-tip data-for="9" onClick={this.injury}><text style={{color: 'green'}}><b>{this.getInjury0()}</b></text><text style={{color: 'yellow'}}><b>{this.getInjury1()}</b></text><text style={{color: 'orange'}}><b>{this.getInjury2()}</b></text><text style={{color: 'red'}}><b>{this.getInjury3()}</b></text></Buttona></Link>
                        <ReactTooltip class="Membership" id="9" place="top" effect="solid">TREAT INJURY<br/><b>{this.getInjuryPrice()}</b><br/><b>{this.getInjuryTime()} MONTHS</b></ReactTooltip>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: 15, fontSize: 30 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./home'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gym;
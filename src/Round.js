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
width: 300px;
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

class Round extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stance1: ((sessionStorage.getItem('stance1') == '0') ? true : false),
            stance2: ((sessionStorage.getItem('stance2') == '0') ? true : false),
            stance3: ((sessionStorage.getItem('stance3') == '0') ? true : false),
            playerStance: sessionStorage.getItem('playerStance'),
            guard1: ((sessionStorage.getItem('guard1') == '0') ? true : false),
            guard2: ((sessionStorage.getItem('guard2') == '0') ? true : false),
            guard3: ((sessionStorage.getItem('guard3') == '0') ? true : false),
            playerGuard: sessionStorage.getItem('playerGuard'),
            attack1: ((sessionStorage.getItem('attack1') == '0') ? true : false),
            attack2: ((sessionStorage.getItem('attack2') == '0') ? true : false),
            attack3: ((sessionStorage.getItem('attack3') == '0') ? true : false),
            attack4: ((sessionStorage.getItem('attack4') == '0') ? true : false),
            attack5: ((sessionStorage.getItem('attack5') == '0') ? true : false),
            attack6: ((sessionStorage.getItem('attack6') == '0') ? true : false),
            attack7: ((sessionStorage.getItem('attack7') == '0') ? true : false),
            attack8: ((sessionStorage.getItem('attack8') == '0') ? true : false),
            playerAttack1: sessionStorage.getItem('att1'),
            playerAttack2: sessionStorage.getItem('att2'),
            playerAttack3: sessionStorage.getItem('att3')
        }
        this.sta1 = this.sta1.bind(this);
        this.sta2 = this.sta2.bind(this);
        this.sta3 = this.sta3.bind(this);
        this.gua1 = this.gua1.bind(this);
        this.gua2 = this.gua2.bind(this);
        this.gua3 = this.gua3.bind(this);
        this.gua4 = this.gua4.bind(this);
        this.att1 = this.att1.bind(this);
        this.att2 = this.att2.bind(this);
        this.att3 = this.att3.bind(this);
        this.att4 = this.att4.bind(this);
        this.att5 = this.att5.bind(this);
        this.att6 = this.att6.bind(this);
        this.att7 = this.att7.bind(this);
        this.att8 = this.att8.bind(this);
    }

    sta1 = (event) => {
        sessionStorage.setItem('stance1', true);
        sessionStorage.setItem('stance2', false);
        sessionStorage.setItem('stance3', false);
        this.setState({
            sta1: true,
            sta2: false,
            sta3: false,
            playerStance: 'MMA'
        })
    }

    sta2 = (event) => {
        sessionStorage.setItem('stance1', false);
        sessionStorage.setItem('stance2', true);
        sessionStorage.setItem('stance3', false);
        this.setState({
            sta1: false,
            sta2: true,
            sta3: false,
            playerStance: 'BLADED'
        })
    }

    sta3 = (event) => {
        sessionStorage.setItem('stance1', false);
        sessionStorage.setItem('stance2', false);
        sessionStorage.setItem('stance3', true);
        this.setState({
            sta1: false,
            sta2: false,
            sta3: true,
            playerStance: 'THAI'
        })
    }

    gua1 = (event) => {
        sessionStorage.setItem('guard1', true);
        sessionStorage.setItem('guard2', false);
        sessionStorage.setItem('guard3', false);
        sessionStorage.setItem('guard4', false);
        this.setState({
            gua1: true,
            gua2: false,
            gua3: false,
            gua4: false,
            playerGuard: 'LONG'
        })
    }

    gua2 = (event) => {
        sessionStorage.setItem('guard1', false);
        sessionStorage.setItem('guard2', true);
        sessionStorage.setItem('guard3', false);
        sessionStorage.setItem('guard4', false);
        this.setState({
            gua1: false,
            gua2: true,
            gua3: false,
            gua4: false,
            playerGuard: 'HIGH'
        })
    }

    gua3 = (event) => {
        sessionStorage.setItem('guard1', false);
        sessionStorage.setItem('guard2', false);
        sessionStorage.setItem('guard3', true);
        sessionStorage.setItem('guard4', false);
        this.setState({
            gua1: false,
            gua2: false,
            gua3: true,
            gua4: false,
            playerGuard: 'LOW'
        })
    }

    gua4 = (event) => {
        sessionStorage.setItem('guard1', false);
        sessionStorage.setItem('guard2', false);
        sessionStorage.setItem('guard3', false);
        sessionStorage.setItem('guard4', true);
        this.setState({
            gua1: false,
            gua2: false,
            gua3: false,
            gua4: true,
            playerGuard: 'REACTIVE'
        })
    }

    att1 = (event) => {
        if (sessionStorage.getItem('att1') == 'BRAWL' || sessionStorage.getItem('att2') == 'BRAWL' || sessionStorage.getItem('att3') == 'BRAWL') {
        }
        else {
            sessionStorage.setItem('attack1', true);
            sessionStorage.setItem('attack2', false);
            sessionStorage.setItem('attack3', false);
            sessionStorage.setItem('attack4', false);
            sessionStorage.setItem('attack5', false);
            sessionStorage.setItem('attack6', false);
            sessionStorage.setItem('attack7', false);
            sessionStorage.setItem('attack8', false);
            this.attSwap('BRAWL');
            this.setState({
                att1: true,
                att2: ((sessionStorage.getItem('att1') == 'BLITZ' || sessionStorage.getItem('att2') == 'BLITZ' || sessionStorage.getItem('att3') == 'BLITZ') ? true : false),
                att3: ((sessionStorage.getItem('att1') == 'PRESSURE' || sessionStorage.getItem('att2') == 'PRESSURE' || sessionStorage.getItem('att3') == 'PRESSURE') ? true : false),
                att4: ((sessionStorage.getItem('att1') == 'POWER' || sessionStorage.getItem('att2') == 'POWER' || sessionStorage.getItem('att3') == 'POWER') ? true : false),
                att5: ((sessionStorage.getItem('att1') == 'FEINT' || sessionStorage.getItem('att2') == 'FEINT' || sessionStorage.getItem('att3') == 'FEINT') ? true : false),
                att6: ((sessionStorage.getItem('att1') == 'LOW KICK' || sessionStorage.getItem('att2') == 'LOW KICK' || sessionStorage.getItem('att3') == 'LOW KICK') ? true : false),
                att7: ((sessionStorage.getItem('att1') == 'TAKEDOWN' || sessionStorage.getItem('att2') == 'TAKEDOWN' || sessionStorage.getItem('att3') == 'TAKEDOWN') ? true : false),
                att8: ((sessionStorage.getItem('att1') == 'CLINCH' || sessionStorage.getItem('att2') == 'CLINCH' || sessionStorage.getItem('att3') == 'CLINCH') ? true : false),
                playerAttack1: sessionStorage.getItem('att1'),
                playerAttack2: sessionStorage.getItem('att2'),
                playerAttack3: sessionStorage.getItem('att3')
            })
        }
    }

    att2 = (event) => {
        if (sessionStorage.getItem('att1') == 'BLITZ' || sessionStorage.getItem('att2') == 'BLITZ' || sessionStorage.getItem('att3') == 'BLITZ') {
        }
        else {
            sessionStorage.setItem('attack1', false);
            sessionStorage.setItem('attack2', true);
            sessionStorage.setItem('attack3', false);
            sessionStorage.setItem('attack4', false);
            sessionStorage.setItem('attack5', false);
            sessionStorage.setItem('attack6', false);
            sessionStorage.setItem('attack7', false);
            sessionStorage.setItem('attack8', false);
            this.attSwap('BLITZ');
            this.setState({
                att1: ((sessionStorage.getItem('att1') == 'BRAWL' || sessionStorage.getItem('att2') == 'BRAWL' || sessionStorage.getItem('att3') == 'BRAWL') ? true : false),
                att2: true,
                att3: ((sessionStorage.getItem('att1') == 'PRESSURE' || sessionStorage.getItem('att2') == 'PRESSURE' || sessionStorage.getItem('att3') == 'PRESSURE') ? true : false),
                att4: ((sessionStorage.getItem('att1') == 'POWER' || sessionStorage.getItem('att2') == 'POWER' || sessionStorage.getItem('att3') == 'POWER') ? true : false),
                att5: ((sessionStorage.getItem('att1') == 'FEINT' || sessionStorage.getItem('att2') == 'FEINT' || sessionStorage.getItem('att3') == 'FEINT') ? true : false),
                att6: ((sessionStorage.getItem('att1') == 'LOW KICK' || sessionStorage.getItem('att2') == 'LOW KICK' || sessionStorage.getItem('att3') == 'LOW KICK') ? true : false),
                att7: ((sessionStorage.getItem('att1') == 'TAKEDOWN' || sessionStorage.getItem('att2') == 'TAKEDOWN' || sessionStorage.getItem('att3') == 'TAKEDOWN') ? true : false),
                att8: ((sessionStorage.getItem('att1') == 'CLINCH' || sessionStorage.getItem('att2') == 'CLINCH' || sessionStorage.getItem('att3') == 'CLINCH') ? true : false),
                playerAttack1: sessionStorage.getItem('att1'),
                playerAttack2: sessionStorage.getItem('att2'),
                playerAttack3: sessionStorage.getItem('att3')
            })
        }
    }

    att3 = (event) => {
        if (sessionStorage.getItem('att1') == 'PRESSURE' || sessionStorage.getItem('att2') == 'PRESSURE' || sessionStorage.getItem('att3') == 'PRESSURE') {
        }
        else {
            sessionStorage.setItem('attack1', false);
            sessionStorage.setItem('attack2', false);
            sessionStorage.setItem('attack3', true);
            sessionStorage.setItem('attack4', false);
            sessionStorage.setItem('attack5', false);
            sessionStorage.setItem('attack6', false);
            sessionStorage.setItem('attack7', false);
            sessionStorage.setItem('attack8', false);
            this.attSwap('PRESSURE');
            this.setState({
                att1: ((sessionStorage.getItem('att1') == 'BRAWL' || sessionStorage.getItem('att2') == 'BRAWL' || sessionStorage.getItem('att3') == 'BRAWL') ? true : false),
                att2: ((sessionStorage.getItem('att1') == 'BLITZ' || sessionStorage.getItem('att2') == 'BLITZ' || sessionStorage.getItem('att3') == 'BLITZ') ? true : false),
                att3: true,
                att4: ((sessionStorage.getItem('att1') == 'POWER' || sessionStorage.getItem('att2') == 'POWER' || sessionStorage.getItem('att3') == 'POWER') ? true : false),
                att5: ((sessionStorage.getItem('att1') == 'FEINT' || sessionStorage.getItem('att2') == 'FEINT' || sessionStorage.getItem('att3') == 'FEINT') ? true : false),
                att6: ((sessionStorage.getItem('att1') == 'LOW KICK' || sessionStorage.getItem('att2') == 'LOW KICK' || sessionStorage.getItem('att3') == 'LOW KICK') ? true : false),
                att7: ((sessionStorage.getItem('att1') == 'TAKEDOWN' || sessionStorage.getItem('att2') == 'TAKEDOWN' || sessionStorage.getItem('att3') == 'TAKEDOWN') ? true : false),
                att8: ((sessionStorage.getItem('att1') == 'CLINCH' || sessionStorage.getItem('att2') == 'CLINCH' || sessionStorage.getItem('att3') == 'CLINCH') ? true : false),
                playerAttack1: sessionStorage.getItem('att1'),
                playerAttack2: sessionStorage.getItem('att2'),
                playerAttack3: sessionStorage.getItem('att3')
            })
        }
    }

    att4 = (event) => {
        if (sessionStorage.getItem('att1') == 'POWER' || sessionStorage.getItem('att2') == 'POWER' || sessionStorage.getItem('att3') == 'POWER') {
        }
        else {
            sessionStorage.setItem('attack1', false);
            sessionStorage.setItem('attack2', false);
            sessionStorage.setItem('attack3', false);
            sessionStorage.setItem('attack4', true);
            sessionStorage.setItem('attack5', false);
            sessionStorage.setItem('attack6', false);
            sessionStorage.setItem('attack7', false);
            sessionStorage.setItem('attack8', false);
            this.attSwap('POWER');
            this.setState({
                att1: ((sessionStorage.getItem('att1') == 'BRAWL' || sessionStorage.getItem('att2') == 'BRAWL' || sessionStorage.getItem('att3') == 'BRAWL') ? true : false),
                att2: ((sessionStorage.getItem('att1') == 'BLITZ' || sessionStorage.getItem('att2') == 'BLITZ' || sessionStorage.getItem('att3') == 'BLITZ') ? true : false),
                att3: ((sessionStorage.getItem('att1') == 'PRESSURE' || sessionStorage.getItem('att2') == 'PRESSURE' || sessionStorage.getItem('att3') == 'PRESSURE') ? true : false),
                att4: true,
                att5: ((sessionStorage.getItem('att1') == 'FEINT' || sessionStorage.getItem('att2') == 'FEINT' || sessionStorage.getItem('att3') == 'FEINT') ? true : false),
                att6: ((sessionStorage.getItem('att1') == 'LOW KICK' || sessionStorage.getItem('att2') == 'LOW KICK' || sessionStorage.getItem('att3') == 'LOW KICK') ? true : false),
                att7: ((sessionStorage.getItem('att1') == 'TAKEDOWN' || sessionStorage.getItem('att2') == 'TAKEDOWN' || sessionStorage.getItem('att3') == 'TAKEDOWN') ? true : false),
                att8: ((sessionStorage.getItem('att1') == 'CLINCH' || sessionStorage.getItem('att2') == 'CLINCH' || sessionStorage.getItem('att3') == 'CLINCH') ? true : false),
                playerAttack1: sessionStorage.getItem('att1'),
                playerAttack2: sessionStorage.getItem('att2'),
                playerAttack3: sessionStorage.getItem('att3')
            })
        }
    }

    att5 = (event) => {
        if (sessionStorage.getItem('att1') == 'FEINT' || sessionStorage.getItem('att2') == 'FEINT' || sessionStorage.getItem('att3') == 'FEINT') {
        }
        else {
            sessionStorage.setItem('attack1', false);
            sessionStorage.setItem('attack2', false);
            sessionStorage.setItem('attack3', false);
            sessionStorage.setItem('attack4', false);
            sessionStorage.setItem('attack5', true);
            sessionStorage.setItem('attack6', false);
            sessionStorage.setItem('attack7', false);
            sessionStorage.setItem('attack8', false);
            this.attSwap('FEINT');
            this.setState({
                att1: ((sessionStorage.getItem('att1') == 'BRAWL' || sessionStorage.getItem('att2') == 'BRAWL' || sessionStorage.getItem('att3') == 'BRAWL') ? true : false),
                att2: ((sessionStorage.getItem('att1') == 'BLITZ' || sessionStorage.getItem('att2') == 'BLITZ' || sessionStorage.getItem('att3') == 'BLITZ') ? true : false),
                att3: ((sessionStorage.getItem('att1') == 'PRESSURE' || sessionStorage.getItem('att2') == 'PRESSURE' || sessionStorage.getItem('att3') == 'PRESSURE') ? true : false),
                att4: ((sessionStorage.getItem('att1') == 'POWER' || sessionStorage.getItem('att2') == 'POWER' || sessionStorage.getItem('att3') == 'POWER') ? true : false),
                att5: true,
                att6: ((sessionStorage.getItem('att1') == 'LOW KICK' || sessionStorage.getItem('att2') == 'LOW KICK' || sessionStorage.getItem('att3') == 'LOW KICK') ? true : false),
                att7: ((sessionStorage.getItem('att1') == 'TAKEDOWN' || sessionStorage.getItem('att2') == 'TAKEDOWN' || sessionStorage.getItem('att3') == 'TAKEDOWN') ? true : false),
                att8: ((sessionStorage.getItem('att1') == 'CLINCH' || sessionStorage.getItem('att2') == 'CLINCH' || sessionStorage.getItem('att3') == 'CLINCH') ? true : false),
                playerAttack1: sessionStorage.getItem('att1'),
                playerAttack2: sessionStorage.getItem('att2'),
                playerAttack3: sessionStorage.getItem('att3')
            })
        }
    }

    att6 = (event) => {
        if (sessionStorage.getItem('att1') == 'LOW KICK' || sessionStorage.getItem('att2') == 'LOW KICK' || sessionStorage.getItem('att3') == 'LOW KICK') {
        }
        else {
            sessionStorage.setItem('attack1', false);
            sessionStorage.setItem('attack2', false);
            sessionStorage.setItem('attack3', false);
            sessionStorage.setItem('attack4', false);
            sessionStorage.setItem('attack5', false);
            sessionStorage.setItem('attack6', true);
            sessionStorage.setItem('attack7', false);
            sessionStorage.setItem('attack8', false);
            this.attSwap('LOW KICK');
            this.setState({
                att1: ((sessionStorage.getItem('att1') == 'BRAWL' || sessionStorage.getItem('att2') == 'BRAWL' || sessionStorage.getItem('att3') == 'BRAWL') ? true : false),
                att2: ((sessionStorage.getItem('att1') == 'BLITZ' || sessionStorage.getItem('att2') == 'BLITZ' || sessionStorage.getItem('att3') == 'BLITZ') ? true : false),
                att3: ((sessionStorage.getItem('att1') == 'PRESSURE' || sessionStorage.getItem('att2') == 'PRESSURE' || sessionStorage.getItem('att3') == 'PRESSURE') ? true : false),
                att4: ((sessionStorage.getItem('att1') == 'POWER' || sessionStorage.getItem('att2') == 'POWER' || sessionStorage.getItem('att3') == 'POWER') ? true : false),
                att5: ((sessionStorage.getItem('att1') == 'FEINT' || sessionStorage.getItem('att2') == 'FEINT' || sessionStorage.getItem('att3') == 'FEINT') ? true : false),
                att6: true,
                att7: ((sessionStorage.getItem('att1') == 'TAKEDOWN' || sessionStorage.getItem('att2') == 'TAKEDOWN' || sessionStorage.getItem('att3') == 'TAKEDOWN') ? true : false),
                att8: ((sessionStorage.getItem('att1') == 'CLINCH' || sessionStorage.getItem('att2') == 'CLINCH' || sessionStorage.getItem('att3') == 'CLINCH') ? true : false),
                playerAttack1: sessionStorage.getItem('att1'),
                playerAttack2: sessionStorage.getItem('att2'),
                playerAttack3: sessionStorage.getItem('att3')
            })
        }
    }

    att7 = (event) => {
        if (sessionStorage.getItem('att1') == 'TAKEDOWN' || sessionStorage.getItem('att2') == 'TAKEDOWN' || sessionStorage.getItem('att3') == 'TAKEDOWN') {
        }
        else {
            sessionStorage.setItem('attack1', false);
            sessionStorage.setItem('attack2', false);
            sessionStorage.setItem('attack3', false);
            sessionStorage.setItem('attack4', false);
            sessionStorage.setItem('attack5', false);
            sessionStorage.setItem('attack6', false);
            sessionStorage.setItem('attack7', true);
            sessionStorage.setItem('attack8', false);
            this.attSwap('TAKEDOWN');
            this.setState({
                att1: ((sessionStorage.getItem('att1') == 'BRAWL' || sessionStorage.getItem('att2') == 'BRAWL' || sessionStorage.getItem('att3') == 'BRAWL') ? true : false),
                att2: ((sessionStorage.getItem('att1') == 'BLITZ' || sessionStorage.getItem('att2') == 'BLITZ' || sessionStorage.getItem('att3') == 'BLITZ') ? true : false),
                att3: ((sessionStorage.getItem('att1') == 'PRESSURE' || sessionStorage.getItem('att2') == 'PRESSURE' || sessionStorage.getItem('att3') == 'PRESSURE') ? true : false),
                att4: ((sessionStorage.getItem('att1') == 'POWER' || sessionStorage.getItem('att2') == 'POWER' || sessionStorage.getItem('att3') == 'POWER') ? true : false),
                att5: ((sessionStorage.getItem('att1') == 'FEINT' || sessionStorage.getItem('att2') == 'FEINT' || sessionStorage.getItem('att3') == 'FEINT') ? true : false),
                att6: ((sessionStorage.getItem('att1') == 'LOW KICK' || sessionStorage.getItem('att2') == 'LOW KICK' || sessionStorage.getItem('att3') == 'LOW KICK') ? true : false),
                att7: true,
                att8: ((sessionStorage.getItem('att1') == 'CLINCH' || sessionStorage.getItem('att2') == 'CLINCH' || sessionStorage.getItem('att3') == 'CLINCH') ? true : false),
                playerAttack1: sessionStorage.getItem('att1'),
                playerAttack2: sessionStorage.getItem('att2'),
                playerAttack3: sessionStorage.getItem('att3')
            })
        }
    }

    att8 = (event) => {
        if (sessionStorage.getItem('att1') == 'CLINCH' || sessionStorage.getItem('att2') == 'CLINCH' || sessionStorage.getItem('att3') == 'CLINCH') {
        }
        else {
            sessionStorage.setItem('attack1', false);
            sessionStorage.setItem('attack2', false);
            sessionStorage.setItem('attack3', false);
            sessionStorage.setItem('attack4', false);
            sessionStorage.setItem('attack5', false);
            sessionStorage.setItem('attack6', false);
            sessionStorage.setItem('attack7', false);
            sessionStorage.setItem('attack8', true);
            this.attSwap('CLINCH');
            this.setState({
                att1: ((sessionStorage.getItem('att1') == 'BRAWL' || sessionStorage.getItem('att2') == 'BRAWL' || sessionStorage.getItem('att3') == 'BRAWL') ? true : false),
                att2: ((sessionStorage.getItem('att1') == 'BLITZ' || sessionStorage.getItem('att2') == 'BLITZ' || sessionStorage.getItem('att3') == 'BLITZ') ? true : false),
                att3: ((sessionStorage.getItem('att1') == 'PRESSURE' || sessionStorage.getItem('att2') == 'PRESSURE' || sessionStorage.getItem('att3') == 'PRESSURE') ? true : false),
                att4: ((sessionStorage.getItem('att1') == 'POWER' || sessionStorage.getItem('att2') == 'POWER' || sessionStorage.getItem('att3') == 'POWER') ? true : false),
                att5: ((sessionStorage.getItem('att1') == 'FEINT' || sessionStorage.getItem('att2') == 'FEINT' || sessionStorage.getItem('att3') == 'FEINT') ? true : false),
                att6: ((sessionStorage.getItem('att1') == 'LOW KICK' || sessionStorage.getItem('att2') == 'LOW KICK' || sessionStorage.getItem('att3') == 'LOW KICK') ? true : false),
                att7: ((sessionStorage.getItem('att1') == 'TAKEDOWN' || sessionStorage.getItem('att2') == 'TAKEDOWN' || sessionStorage.getItem('att3') == 'TAKEDOWN') ? true : false),
                att8: true,
                playerAttack1: sessionStorage.getItem('att1'),
                playerAttack2: sessionStorage.getItem('att2'),
                playerAttack3: sessionStorage.getItem('att3')
            })
        }
    }

    attSwap(att) {
        sessionStorage.setItem('att3', sessionStorage.getItem('att2'));
        sessionStorage.setItem('att2', sessionStorage.getItem('att1'));
        sessionStorage.setItem('att1', att);
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

    stColor(st) {
        if (st >= 950) {
            return '#FFFFFF';
        }
        else if (st >= 900) {
            return '#FFF2F2';
        }
        else if (st >= 850) {
            return '#FFE6E6'
        }
        else if (st >= 800) {
            return '#FFD9D9'
        }
        else if (st >= 750) {
            return '#FFCCCC'
        }
        else if (st >= 700) {
            return '#FFBFBF'
        }
        else if (st >= 650) {
            return '#FFB3B3'
        }
        else if (st >= 600) {
            return '#FFA6A6'
        }
        else if (st >= 550) {
            return '#FF9999'
        }
        else if (st >= 500) {
            return '#FF8C8C'
        }
        else if (st >= 450) {
            return '#FF8080'
        }
        else if (st >= 400) {
            return '#FF7373'
        }
        else if (st >= 350) {
            return '#FF6666'
        }
        else if (st >= 300) {
            return '#FF5959'
        }
        else if (st >= 250) {
            return '#FF4D4D'
        }
        else if (st >= 200) {
            return '#FF4040'
        }
        else if (st >= 150) {
            return '#FF3333'
        }
        else if (st >= 100) {
            return '#FF2626'
        }
        else if (st >= 50) {
            return '#FF1A1A'
        }
        else if (st >= 1) {
            return '#FF0D0D'
        }
        else if (st <= 0) {
            return '#FF0000'
        }
    }

    playerSt(st) {
        if (st >= 900) {
            return 'HEALTHY';
        }
        else if (st >= 600) {
            return 'CONSCIOUS'
        }
        else if (st >= 300) {
            return 'WORN'
        }
        else if (st >= 100) {
            return 'WEAK'
        }
        else if (st >= 1) {
            return 'IN TROUBLE'
        }
        else if (st < 1) {
            return 'UNCONSCIOUS';
        }
    }

    attDesc1a() {
        if (sessionStorage.getItem('att1') == 'BRAWL'){
            return 'BRAWL';
        }
        else if (sessionStorage.getItem('att1') == 'BLITZ'){
            return 'BLITZ';
        }
        else if (sessionStorage.getItem('att1') == 'PRESSURE'){
            return 'PRESSURE';
        }
        else if (sessionStorage.getItem('att1') == 'POWER'){
            return 'POWER';
        }
        else if (sessionStorage.getItem('att1') == 'FEINT'){
            return 'FEINT';
        }
        else if (sessionStorage.getItem('att1') == 'LOW KICK'){
            return 'LOW KICK';
        }
        else if (sessionStorage.getItem('att1') == 'TAKEDOWN'){
            return 'TAKEDOWN';
        }
        else if (sessionStorage.getItem('att1') == 'CLINCH'){
            return 'CLINCH';
        }
    }

    attDesc2a() {
        if (sessionStorage.getItem('att2') == 'BRAWL'){
            return 'BRAWL';
        }
        else if (sessionStorage.getItem('att2') == 'BLITZ'){
            return 'BLITZ';
        }
        else if (sessionStorage.getItem('att2') == 'PRESSURE'){
            return 'PRESSURE';
        }
        else if (sessionStorage.getItem('att2') == 'POWER'){
            return 'POWER';
        }
        else if (sessionStorage.getItem('att2') == 'FEINT'){
            return 'FEINT';
        }
        else if (sessionStorage.getItem('att2') == 'LOW KICK'){
            return 'LOW KICK';
        }
        else if (sessionStorage.getItem('att2') == 'TAKEDOWN'){
            return 'TAKEDOWN';
        }
        else if (sessionStorage.getItem('att2') == 'CLINCH'){
            return 'CLINCH';
        }
    }

    attDesc3a() {
        if (sessionStorage.getItem('att3') == 'BRAWL'){
            return 'BRAWL';
        }
        else if (sessionStorage.getItem('att3') == 'BLITZ'){
            return 'BLITZ';
        }
        else if (sessionStorage.getItem('att3') == 'PRESSURE'){
            return 'PRESSURE';
        }
        else if (sessionStorage.getItem('att3') == 'POWER'){
            return 'POWER';
        }
        else if (sessionStorage.getItem('att3') == 'FEINT'){
            return 'FEINT';
        }
        else if (sessionStorage.getItem('att3') == 'LOW KICK'){
            return 'LOW KICK';
        }
        else if (sessionStorage.getItem('att3') == 'TAKEDOWN'){
            return 'TAKEDOWN';
        }
        else if (sessionStorage.getItem('att3') == 'CLINCH'){
            return 'CLINCH';
        }
    }

    attDesc1b() {
        if (sessionStorage.getItem('att1') == 'BRAWL'){
            return 'THROW A FEW STRIKES';
        }
        else if (sessionStorage.getItem('att1') == 'BLITZ'){
            return 'QUICKLY COVER DISTANCE AND THROW STRIKES';
        }
        else if (sessionStorage.getItem('att1') == 'PRESSURE'){
            return 'HIGH VOLUME OF STRIKES';
        }
        else if (sessionStorage.getItem('att1') == 'POWER'){
            return 'HEAVY BUT TAXING STRIKES';
        }
        else if (sessionStorage.getItem('att1') == 'FEINT'){
            return 'FAKE ATTACK TO REDUCE OPPONENT REACTION';
        }
        else if (sessionStorage.getItem('att1') == 'LOW KICK'){
            return 'KICK CALF TO REDUCE OPPONENT SPEED';
        }
        else if (sessionStorage.getItem('att1') == 'TAKEDOWN'){
            return 'TAKE OPPONENT DOWN TO GROUND';
        }
        else if (sessionStorage.getItem('att1') == 'CLINCH'){
            return 'STRIKE INTO A CLINCH';
        }
    }

    attDesc2b() {
        if (sessionStorage.getItem('att2') == 'BRAWL'){
            return 'THROW A FEW STRIKES';
        }
        else if (sessionStorage.getItem('att2') == 'BLITZ'){
            return 'QUICKLY COVER DISTANCE AND THROW STRIKES';
        }
        else if (sessionStorage.getItem('att2') == 'PRESSURE'){
            return 'HIGH VOLUME OF STRIKES';
        }
        else if (sessionStorage.getItem('att2') == 'POWER'){
            return 'HEAVY BUT TAXING STRIKES';
        }
        else if (sessionStorage.getItem('att2') == 'FEINT'){
            return 'FAKE ATTACK TO REDUCE OPPONENT REACTION';
        }
        else if (sessionStorage.getItem('att2') == 'LOW KICK'){
            return 'KICK CALF TO REDUCE OPPONENT SPEED';
        }
        else if (sessionStorage.getItem('att2') == 'TAKEDOWN'){
            return 'TAKE OPPONENT DOWN TO GROUND';
        }
        else if (sessionStorage.getItem('att2') == 'CLINCH'){
            return 'STRIKE INTO A CLINCH';
        }
    }

    attDesc3b() {
        if (sessionStorage.getItem('att3') == 'BRAWL'){
            return 'THROW A FEW STRIKES';
        }
        else if (sessionStorage.getItem('att3') == 'BLITZ'){
            return 'QUICKLY COVER DISTANCE AND THROW STRIKES';
        }
        else if (sessionStorage.getItem('att3') == 'PRESSURE'){
            return 'HIGH VOLUME OF STRIKES';
        }
        else if (sessionStorage.getItem('att3') == 'POWER'){
            return 'HEAVY BUT TAXING STRIKES';
        }
        else if (sessionStorage.getItem('att3') == 'FEINT'){
            return 'FAKE ATTACK TO REDUCE OPPONENT REACTION';
        }
        else if (sessionStorage.getItem('att3') == 'LOW KICK'){
            return 'KICK CALF TO REDUCE OPPONENT SPEED';
        }
        else if (sessionStorage.getItem('att3') == 'TAKEDOWN'){
            return 'TAKE OPPONENT DOWN TO GROUND';
        }
        else if (sessionStorage.getItem('att3') == 'CLINCH'){
            return 'STRIKE INTO A CLINCH';
        }
    }

    attDesc1c() {
        if (sessionStorage.getItem('att1') == 'BRAWL'){
            return '6';
        }
        else if (sessionStorage.getItem('att1') == 'BLITZ'){
            return '8';
        }
        else if (sessionStorage.getItem('att1') == 'PRESSURE'){
            return '10';
        }
        else if (sessionStorage.getItem('att1') == 'POWER'){
            return '12';
        }
        else if (sessionStorage.getItem('att1') == 'FEINT'){
            return '1';
        }
        else if (sessionStorage.getItem('att1') == 'LOW KICK'){
            return '4';
        }
        else if (sessionStorage.getItem('att1') == 'TAKEDOWN'){
            return '12';
        }
        else if (sessionStorage.getItem('att1') == 'CLINCH'){
            return '8';
        }
    }

    attDesc2c() {
        if (sessionStorage.getItem('att2') == 'BRAWL'){
            return '6';
        }
        else if (sessionStorage.getItem('att2') == 'BLITZ'){
            return '8';
        }
        else if (sessionStorage.getItem('att2') == 'PRESSURE'){
            return '10';
        }
        else if (sessionStorage.getItem('att2') == 'POWER'){
            return '12';
        }
        else if (sessionStorage.getItem('att2') == 'FEINT'){
            return '1';
        }
        else if (sessionStorage.getItem('att2') == 'LOW KICK'){
            return '4';
        }
        else if (sessionStorage.getItem('att2') == 'TAKEDOWN'){
            return '12';
        }
        else if (sessionStorage.getItem('att2') == 'CLINCH'){
            return '8';
        }
    }

    attDesc3c() {
        if (sessionStorage.getItem('att3') == 'BRAWL'){
            return '6';
        }
        else if (sessionStorage.getItem('att3') == 'BLITZ'){
            return '8';
        }
        else if (sessionStorage.getItem('att3') == 'PRESSURE'){
            return '10';
        }
        else if (sessionStorage.getItem('att3') == 'POWER'){
            return '12';
        }
        else if (sessionStorage.getItem('att3') == 'FEINT'){
            return '1';
        }
        else if (sessionStorage.getItem('att3') == 'LOW KICK'){
            return '4';
        }
        else if (sessionStorage.getItem('att3') == 'TAKEDOWN'){
            return '12';
        }
        else if (sessionStorage.getItem('att3') == 'CLINCH'){
            return '8';
        }
    }

    mover0 = (event) => {
        sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 2);
        sessionStorage.setItem('mCount', parseInt(sessionStorage.getItem('mCount')) + 2);
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let first = data.first;
        let last = data.last;
 
        let hit = this.getHit('STICK');
        let dmg = this.getDamage(hit, 'STICK');

        let name = last;
        let msg = 'THROWS 2 JABS';
        let info = hit + '/2 HIT, ' + dmg + ' DMG';

        let name1 = sessionStorage.getItem('oppLast');
        let msg1 = 'THROWS 4 STRIKES';
        let info1 = '2/4 HIT, 30 DMG';
        if (sessionStorage.getItem('mCount') == 2){
            sessionStorage.setItem('name01', name);
            sessionStorage.setItem('move01', msg);
            sessionStorage.setItem('info01', info);

            sessionStorage.setItem('name02', name1);
            sessionStorage.setItem('move02', msg1);
            sessionStorage.setItem('info02', info1);
        }
        else if (sessionStorage.getItem('mCount') == 4){
            sessionStorage.setItem('name03', name);
            sessionStorage.setItem('move03', msg);
            sessionStorage.setItem('info03', info);

            sessionStorage.setItem('name04', name1);
            sessionStorage.setItem('move04', msg1);
            sessionStorage.setItem('info04', info1);
        }
        else if (sessionStorage.getItem('mCount') == 6){
            sessionStorage.setItem('name05', name);
            sessionStorage.setItem('move05', msg);
            sessionStorage.setItem('info05', info);

            sessionStorage.setItem('name06', name1);
            sessionStorage.setItem('move06', msg1);
            sessionStorage.setItem('info06', info1);
        }
        else if (sessionStorage.getItem('mCount') == 8){
            sessionStorage.setItem('name07', name);
            sessionStorage.setItem('move07', msg);
            sessionStorage.setItem('info07', info);

            sessionStorage.setItem('name08', name1);
            sessionStorage.setItem('move08', msg1);
            sessionStorage.setItem('info08', info1);
        }
        else if (sessionStorage.getItem('mCount') == 10){
            sessionStorage.setItem('name09', name);
            sessionStorage.setItem('move09', msg);
            sessionStorage.setItem('info09', info);

            sessionStorage.setItem('name10', name1);
            sessionStorage.setItem('move10', msg1);
            sessionStorage.setItem('info10', info1);
        }
        else if (sessionStorage.getItem('mCount') == 12){
            sessionStorage.setItem('name11', name);
            sessionStorage.setItem('move11', msg);
            sessionStorage.setItem('info11', info);

            sessionStorage.setItem('name12', name1);
            sessionStorage.setItem('move12', msg1);
            sessionStorage.setItem('info12', info1);
        }
        else if (sessionStorage.getItem('mCount') == 14){
            sessionStorage.setItem('name13', name);
            sessionStorage.setItem('move13', msg);
            sessionStorage.setItem('info13', info);

            sessionStorage.setItem('name14', name1);
            sessionStorage.setItem('move14', msg1);
            sessionStorage.setItem('info14', info1);
        }
        else if (sessionStorage.getItem('mCount') == 16){
            sessionStorage.setItem('name15', name);
            sessionStorage.setItem('move15', msg);
            sessionStorage.setItem('info15', info);

            sessionStorage.setItem('name16', name1);
            sessionStorage.setItem('move16', msg1);
            sessionStorage.setItem('info16', info1);
        }
    }

    calcPer(att) {
        let playerStr = parseInt(sessionStorage.getItem('playerStrength'));
        let playerSpd = parseInt(sessionStorage.getItem('playerSpeed'));
        let playerStm = parseInt(sessionStorage.getItem('playerStamina'));
        let playerPunching = parseInt(sessionStorage.getItem('playerPunching'));
        let playerKicking = parseInt(sessionStorage.getItem('playerKicking'));
        let playerWrestling = parseInt(sessionStorage.getItem('playerWrestling'));
        let playerGrappling = parseInt(sessionStorage.getItem('playerGrappling'));
        let playerClinch = parseInt(sessionStorage.getItem('playerClinch'));
        let playerMmaBuff = parseInt(sessionStorage.getItem('mmaBuff'));
        let playerBladedBuff = parseInt(sessionStorage.getItem('bladedBuff'));
        let playerThaiBuff = parseInt(sessionStorage.getItem('thaiBuff'));
        let playerLongBuff = parseInt(sessionStorage.getItem('longBuff'));
        let playerLongNerf = parseInt(sessionStorage.getItem('longNerf'));
        let playerHighBuff = parseInt(sessionStorage.getItem('highBuff'));
        let playerHighNerf = parseInt(sessionStorage.getItem('highNerf'));
        let playerLowBuff = parseInt(sessionStorage.getItem('lowBuff'));
        let playerLowNerf = parseInt(sessionStorage.getItem('lowNerf'));
        let playerReactNerf = parseInt(sessionStorage.getItem('reactNerf'));

        let oppStr = parseInt(sessionStorage.getItem('oppStrength'));
        let oppSpd = parseInt(sessionStorage.getItem('oppSpeed'));
        let oppStm = parseInt(sessionStorage.getItem('oppStamina'));
        let oppPunching = parseInt(sessionStorage.getItem('oppPunching'));
        let oppKicking = parseInt(sessionStorage.getItem('oppKicking'));
        let oppWrestling = parseInt(sessionStorage.getItem('oppWrestling'));
        let oppGrappling = parseInt(sessionStorage.getItem('oppGrappling'));
        let oppClinch = parseInt(sessionStorage.getItem('oppClinch'));
        let oppMmaBuff = parseInt(sessionStorage.getItem('mmaBuff1'));
        let oppBladedBuff = parseInt(sessionStorage.getItem('bladedBuff1'));
        let oppThaiBuff = parseInt(sessionStorage.getItem('thaiBuff1'));
        let oppLongBuff = parseInt(sessionStorage.getItem('longBuff1'));
        let oppLongNerf = parseInt(sessionStorage.getItem('longNerf1'));
        let oppHighBuff = parseInt(sessionStorage.getItem('highBuff1'));
        let oppHighNerf = parseInt(sessionStorage.getItem('highNerf1'));
        let oppLowBuff = parseInt(sessionStorage.getItem('lowBuff1'));
        let oppLowNerf = parseInt(sessionStorage.getItem('lowNerf1'));
        let oppReactNerf = parseInt(sessionStorage.getItem('reactNerf1'));

        let per = 0;
        per = (1.5 * (playerPunching + playerBladedBuff) - 1.5 * (oppPunching + oppHighBuff)) + (playerSpd - oppSpd);
        if (att == 'STICK') {
            if (per >= 0){
                return Math.round(70 + (Math.pow(per, .63)));
            }
            else {
                let per1 = Math.abs(per);
                return Math.round(70 - (Math.pow(per1, .63)));
            }
        }
        else if (att == 'BRAWL' || att == 'POWER' || att == 'PRESSURE'){
            if (per >= 0){
                return Math.round(30 + (Math.pow(per, .63)));
            }
            else {
                let per1 = Math.abs(per);
                return Math.round(30 - (Math.pow(per1, .63)));
            }
        }
        else if (att == 'BLITZ'){
            let bPer = ((playerSpd * 2) - (oppSpd + oppPunching + oppHighBuff));
            if (bPer >= 0){
                return Math.round(30 + (Math.pow(bPer, .63)));
            }
            else {
                let bPer1 = Math.abs(bPer);
                return Math.round(30 - (Math.pow(bPer1, .63)));
            }
        }
    }

    getHit(att) {
        let playerStr = parseInt(sessionStorage.getItem('playerStrength'));
        let playerSpd = parseInt(sessionStorage.getItem('playerSpeed'));
        let playerStm = parseInt(sessionStorage.getItem('playerStamina'));
        let playerPunching = parseInt(sessionStorage.getItem('playerPunching'));
        let playerKicking = parseInt(sessionStorage.getItem('playerKicking'));
        let playerWrestling = parseInt(sessionStorage.getItem('playerWrestling'));
        let playerGrappling = parseInt(sessionStorage.getItem('playerGrappling'));
        let playerClinch = parseInt(sessionStorage.getItem('playerClinch'));
        let playerMmaBuff = parseInt(sessionStorage.getItem('mmaBuff'));
        let playerBladedBuff = parseInt(sessionStorage.getItem('bladedBuff'));
        let playerThaiBuff = parseInt(sessionStorage.getItem('thaiBuff'));
        let playerLongBuff = parseInt(sessionStorage.getItem('longBuff'));
        let playerLongNerf = parseInt(sessionStorage.getItem('longNerf'));
        let playerHighBuff = parseInt(sessionStorage.getItem('highBuff'));
        let playerHighNerf = parseInt(sessionStorage.getItem('highNerf'));
        let playerLowBuff = parseInt(sessionStorage.getItem('lowBuff'));
        let playerLowNerf = parseInt(sessionStorage.getItem('lowNerf'));
        let playerReactNerf = parseInt(sessionStorage.getItem('reactNerf'));

        let oppStr = parseInt(sessionStorage.getItem('oppStrength'));
        let oppSpd = parseInt(sessionStorage.getItem('oppSpeed'));
        let oppStm = parseInt(sessionStorage.getItem('oppStamina'));
        let oppPunching = parseInt(sessionStorage.getItem('oppPunching'));
        let oppKicking = parseInt(sessionStorage.getItem('oppKicking'));
        let oppWrestling = parseInt(sessionStorage.getItem('oppWrestling'));
        let oppGrappling = parseInt(sessionStorage.getItem('oppGrappling'));
        let oppClinch = parseInt(sessionStorage.getItem('oppClinch'));
        let oppMmaBuff = parseInt(sessionStorage.getItem('mmaBuff1'));
        let oppBladedBuff = parseInt(sessionStorage.getItem('bladedBuff1'));
        let oppThaiBuff = parseInt(sessionStorage.getItem('thaiBuff1'));
        let oppLongBuff = parseInt(sessionStorage.getItem('longBuff1'));
        let oppLongNerf = parseInt(sessionStorage.getItem('longNerf1'));
        let oppHighBuff = parseInt(sessionStorage.getItem('highBuff1'));
        let oppHighNerf = parseInt(sessionStorage.getItem('highNerf1'));
        let oppLowBuff = parseInt(sessionStorage.getItem('lowBuff1'));
        let oppLowNerf = parseInt(sessionStorage.getItem('lowNerf1'));
        let oppReactNerf = parseInt(sessionStorage.getItem('reactNerf1'));

        let per = 0;
        let hit = 0;
        per = (1.5 * (playerPunching + playerBladedBuff) - 1.5 * (oppPunching + oppHighBuff)) + (playerSpd - oppSpd);
        if (att == 'STICK') {
            let ran1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
            if (per >= 0){
                if (ran1 <= 70 + (Math.pow(per, .63))) {
                    console.log(70 + (Math.pow(per, .63)))
                    ++hit;
                }
            }
            else {
                let per1 = Math.abs(per);
                if (ran1 <= 70 - (Math.pow(per1, .63))) {
                    console.log(70 - (Math.pow(per1, .63)))
                    ++hit;
                }
            }
        }
        else if (att == 'BRAWL' || att == 'POWER'){
            for (let i = 0; i < 4; ++i){
                let ran1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
                if (per >= 0){
                    if (ran1 <= 30 + (Math.pow(per, .63))) {
                        console.log(30 + (Math.pow(per, .63)))
                        ++hit;
                    }
                }
                else {
                    let per1 = Math.abs(per);
                    if (ran1 <= 30 - (Math.pow(per1, .63))) {
                        console.log(30 - (Math.pow(per1, .63)))
                        ++hit;
                    }
                }
            }
        }
        else if (att == 'PRESSURE'){
            for (let i = 0; i < 8; ++i){
                let ran1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
                if (per >= 0){
                    if (ran1 <= 30 + (Math.pow(per, .63))) {
                        console.log(30 + (Math.pow(per, .63)))
                        ++hit;
                    }
                }
                else {
                    let per1 = Math.abs(per);
                    if (ran1 <= 30 - (Math.pow(per1, .63))) {
                        console.log(30 - (Math.pow(per1, .63)))
                        ++hit;
                    }
                }
            }
        }
        else if (att == 'BLITZ'){
            let bPer = ((playerSpd * 2) - (oppSpd + oppPunching + oppHighBuff));
            for (let i = 0; i < 4; ++i){
                let ran1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
                if (bPer >= 0){
                    if (ran1 <= 30 + (Math.pow(bPer, .63))) {
                        console.log(30 + (Math.pow(bPer, .63)))
                        ++hit;
                    }
                }
                else {
                    let bPer1 = Math.abs(bPer);
                    if (ran1 <= 30 - (Math.pow(bPer1, .63))) {
                        console.log(30 - (Math.pow(bPer1, .63)))
                        ++hit;
                    }
                }
            }
        }


        return hit;
    }

    getHit1(att) {
        let playerStr = parseInt(sessionStorage.getItem('playerStrength'));
        let playerSpd = parseInt(sessionStorage.getItem('playerSpeed'));
        let playerStm = parseInt(sessionStorage.getItem('playerStamina'));
        let playerPunching = parseInt(sessionStorage.getItem('playerPunching'));
        let playerKicking = parseInt(sessionStorage.getItem('playerKicking'));
        let playerWrestling = parseInt(sessionStorage.getItem('playerWrestling'));
        let playerGrappling = parseInt(sessionStorage.getItem('playerGrappling'));
        let playerClinch = parseInt(sessionStorage.getItem('playerClinch'));
        let playerMmaBuff = parseInt(sessionStorage.getItem('mmaBuff'));
        let playerBladedBuff = parseInt(sessionStorage.getItem('bladedBuff'));
        let playerThaiBuff = parseInt(sessionStorage.getItem('thaiBuff'));
        let playerLongBuff = parseInt(sessionStorage.getItem('longBuff'));
        let playerLongNerf = parseInt(sessionStorage.getItem('longNerf'));
        let playerHighBuff = parseInt(sessionStorage.getItem('highBuff'));
        let playerHighNerf = parseInt(sessionStorage.getItem('highNerf'));
        let playerLowBuff = parseInt(sessionStorage.getItem('lowBuff'));
        let playerLowNerf = parseInt(sessionStorage.getItem('lowNerf'));
        let playerReactNerf = parseInt(sessionStorage.getItem('reactNerf'));

        let oppStr = parseInt(sessionStorage.getItem('oppStrength'));
        let oppSpd = parseInt(sessionStorage.getItem('oppSpeed'));
        let oppStm = parseInt(sessionStorage.getItem('oppStamina'));
        let oppPunching = parseInt(sessionStorage.getItem('oppPunching'));
        let oppKicking = parseInt(sessionStorage.getItem('oppKicking'));
        let oppWrestling = parseInt(sessionStorage.getItem('oppWrestling'));
        let oppGrappling = parseInt(sessionStorage.getItem('oppGrappling'));
        let oppClinch = parseInt(sessionStorage.getItem('oppClinch'));
        let oppMmaBuff = parseInt(sessionStorage.getItem('mmaBuff1'));
        let oppBladedBuff = parseInt(sessionStorage.getItem('bladedBuff1'));
        let oppThaiBuff = parseInt(sessionStorage.getItem('thaiBuff1'));
        let oppLongBuff = parseInt(sessionStorage.getItem('longBuff1'));
        let oppLongNerf = parseInt(sessionStorage.getItem('longNerf1'));
        let oppHighBuff = parseInt(sessionStorage.getItem('highBuff1'));
        let oppHighNerf = parseInt(sessionStorage.getItem('highNerf1'));
        let oppLowBuff = parseInt(sessionStorage.getItem('lowBuff1'));
        let oppLowNerf = parseInt(sessionStorage.getItem('lowNerf1'));
        let oppReactNerf = parseInt(sessionStorage.getItem('reactNerf1'));

        let per = 0;
        let hit = 0;
        per = (1.5 * (oppPunching + oppBladedBuff) - 1.5 * (playerPunching + playerHighBuff)) + (oppSpd - playerSpd);
        if (att == 'STICK') {
            let ran1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
            if (per >= 0){
                if (ran1 <= 70 + (Math.pow(per, .63))) {
                    console.log(70 + (Math.pow(per, .63)))
                    ++hit;
                }
            }
            else {
                let per1 = Math.abs(per);
                if (ran1 <= 70 - (Math.pow(per1, .63))) {
                    console.log(70 - (Math.pow(per1, .63)))
                    ++hit;
                }
            }
        }
        else if (att == 'BRAWL' || att == 'POWER'){
            for (let i = 0; i < 4; ++i){
                let ran1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
                if (per >= 0){
                    if (ran1 <= 30 + (Math.pow(per, .63))) {
                        console.log(30 + (Math.pow(per, .63)))
                        ++hit;
                    }
                }
                else {
                    let per1 = Math.abs(per);
                    if (ran1 <= 30 - (Math.pow(per1, .63))) {
                        console.log(30 - (Math.pow(per1, .63)))
                        ++hit;
                    }
                }
            }
        }
        else if (att == 'PRESSURE'){
            for (let i = 0; i < 8; ++i){
                let ran1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
                if (per >= 0){
                    if (ran1 <= 30 + (Math.pow(per, .63))) {
                        console.log(30 + (Math.pow(per, .63)))
                        ++hit;
                    }
                }
                else {
                    let per1 = Math.abs(per);
                    if (ran1 <= 30 - (Math.pow(per1, .63))) {
                        console.log(30 - (Math.pow(per1, .63)))
                        ++hit;
                    }
                }
            }
        }
        else if (att == 'BLITZ'){
            let bPer = ((oppSpd * 2) - (playerSpd + playerPunching + playerHighBuff));
            for (let i = 0; i < 4; ++i){
                let ran1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
                if (bPer >= 0){
                    if (ran1 <= 30 + (Math.pow(bPer, .63))) {
                        console.log(30 + (Math.pow(bPer, .63)))
                        ++hit;
                    }
                }
                else {
                    let bPer1 = Math.abs(bPer);
                    if (ran1 <= 30 - (Math.pow(bPer1, .63))) {
                        console.log(30 - (Math.pow(bPer1, .63)))
                        ++hit;
                    }
                }
            }
        }


        return hit;
    }

    getDamage(hit, att) {
        let playerStr = parseInt(sessionStorage.getItem('playerStrength'));
        let playerBladedBuff = parseInt(sessionStorage.getItem('bladedBuff'));
        let playerThaiBuff = parseInt(sessionStorage.getItem('thaiBuff'));
        let playerReactNerf = parseInt(sessionStorage.getItem('reactNerf'));

        let oppStr = parseInt(sessionStorage.getItem('oppStrength'));
        let oppBladedBuff = parseInt(sessionStorage.getItem('bladedBuff'));
        let oppThaiBuff = parseInt(sessionStorage.getItem('thaiBuff'));
        let oppReactNerf = parseInt(sessionStorage.getItem('reactNerf'));

        let dmg = 0;

        if (att == 'POWER'){
            for (let i = 0; i < hit; ++i){
                let ran1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
                if (ran1 <= 5) {
                    dmg += 1000;
                }
                else if (ran1 <= 15) {
                    dmg += 200;
                }
                else {
                    dmg += (((playerStr - 50) / 5) + 40 + playerBladedBuff + oppReactNerf);
                }
            }
        }
        else if (att == 'STICK'){
            dmg = hit * (((playerStr - 50) / 10) + 10 + playerBladedBuff + oppReactNerf);
        }
        else {
            dmg = hit * (((playerStr - 50) / 5) + 20 + playerBladedBuff + oppReactNerf);
        }
        sessionStorage.setItem('oppStatus', parseInt(sessionStorage.getItem('oppStatus')) - dmg);
        return dmg;
    }

    getDamage1(hit, att) {
        let playerStr = parseInt(sessionStorage.getItem('playerStrength'));
        let playerBladedBuff = parseInt(sessionStorage.getItem('bladedBuff'));
        let playerThaiBuff = parseInt(sessionStorage.getItem('thaiBuff'));
        let playerReactNerf = parseInt(sessionStorage.getItem('reactNerf'));

        let oppStr = parseInt(sessionStorage.getItem('oppStrength'));
        let oppBladedBuff = parseInt(sessionStorage.getItem('bladedBuff'));
        let oppThaiBuff = parseInt(sessionStorage.getItem('thaiBuff'));
        let oppReactNerf = parseInt(sessionStorage.getItem('reactNerf'));

        let dmg = 0;

        if (att == 'POWER'){
            for (let i = 0; i < hit; ++i){
                let ran1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
                if (ran1 <= 5) {
                    dmg += 1000;
                }
                else if (ran1 <= 15) {
                    dmg += 200;
                }
                else {
                    dmg += (((oppStr - 50) / 5) + 40 + oppBladedBuff + playerReactNerf);
                }
            }
        }
        else if (att == 'STICK'){
            dmg = hit * (((oppStr - 50) / 10) + 10 + oppBladedBuff + playerReactNerf);
        }
        else {
            dmg = hit * (((oppStr - 50) / 5) + 20 + oppBladedBuff + playerReactNerf);
        }
        sessionStorage.setItem('playerStatus', parseInt(sessionStorage.getItem('playerStatus')) - dmg);
        return dmg;
    }

    counterCalc(re, att) {
        let per = Math.pow(parseInt(sessionStorage.getItem('oppPunching')), .75);
        let ctr = 0;

        if (parseInt(sessionStorage.getItem('reactNerf1')) == 0){
            return 0;
        }
        else {
            if (att == 'STICK' || att == 'BRAWL' || att == 'PRESSURE' || att == 'POWER' || att == 'LOW KICK' || att == 'CLINCH' || att == 'TAKEDOWN') {
                for (let i = 0; i < re; ++i) {
                    let ran = Math.floor(Math.random() * (100 - 1 + 1) + 1);
                    if (ran <= per) {
                        ++ctr;
                    }
                }
            }
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm')) - ctr);
            return ctr;
        }
    }

    counterCalc1(re, att) {
        let per = Math.pow(parseInt(sessionStorage.getItem('playerPunching')), .75);
        let ctr = 0;
        console.log('reactNerf: ' + sessionStorage.getItem('reactNerf'))
        if (parseInt(sessionStorage.getItem('reactNerf')) == 0){
            return 0;
        }
        else {
            console.log('PING!')
            if (att == 'STICK' || att == 'BRAWL' || att == 'PRESSURE' || att == 'POWER' || att == 'LOW KICK' || att == 'CLINCH' || att == 'TAKEDOWN') {
                for (let i = 0; i < re; ++i) {
                    let ran = Math.floor(Math.random() * (100 - 1 + 1) + 1);
                    if (ran <= per) {
                        ++ctr;
                    }
                }
            }
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - ctr);
            return ctr;
        }
    }

    counterInfo(ctr, ctrDmg) {
        let o = '\xa0\xa0';
        if (ctr == 0) {
            return '';
        }
        else {
            let str = o + 'COUNTERED! ' + ctrDmg + ' DMG';
            return str;
        }
    }

    getOppMsg1(att) {
        if (att == 'BRAWL') {
            return 'THROWS 4 STRIKES';
        }
        else if (att == 'BLITZ') {
            return 'BLITZES IN WITH 4 STRIKES';
        }
        else if (att == 'PRESSURE') {
            return 'THROWS 8 STRIKES';
        }
    }

    getOppHitMax(att) {
        if (att == 'PRESSURE') {
            return 8;
        }
        else if (att == 'LOW KICK' || att == 'TAKEDOWN') {
            return 1;
        }
        else {
            return 4;
        }
    }

    getOppMsg() {
        let arr = new Array(4);
        let ran = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        let hit = 0;
        let ctr = 0;
        if (ran >= 80) {
            arr[0] = 'STICK';
            arr[1] = 'THROWS 2 JABS';
            hit = this.getHit1('STICK');
            arr[2] = hit + '/2 HIT, ' + this.getDamage1(hit, 'STICK') + ' DMG'
            ctr = this.counterCalc1(2 - hit, 'STICK');
            if (ctr > 0) {
                arr[3] = this.counterInfo(ctr, this.getDamage(ctr, 'STICK'));
            }
            else {
                arr[3] = '';
            }
        }
        else if (ran >= 45) {
            arr[0] = sessionStorage.getItem('oppAtt1');
            arr[1] = this.getOppMsg1(arr[0]);
            hit = this.getHit1(arr[0]);
            arr[2] = hit + '/' + this.getOppHitMax(arr[0]) + ' HIT, ' + this.getDamage1(hit, arr[0]) + ' DMG'
            ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
            if (ctr > 0) {
                arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
            }
            else {
                arr[3] = '';
            }
            console.log(arr[0])
        }
        else if (ran >= 20) {
            arr[0] = sessionStorage.getItem('oppAtt2');
            arr[1] = this.getOppMsg1(arr[0]);
            hit = this.getHit1(arr[0]);
            arr[2] = hit + '/' + this.getOppHitMax(arr[0]) + ' HIT, ' + this.getDamage1(hit, arr[0]) + ' DMG'
            ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
            if (ctr > 0) {
                arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
            }
            else {
                arr[3] = '';
            }
            console.log(arr[0])
        }
        else {
            arr[0] = sessionStorage.getItem('oppAtt3');
            arr[1] = this.getOppMsg1(arr[0]);
            hit = this.getHit1(arr[0]);
            arr[2] = hit + '/' + this.getOppHitMax(arr[0]) + ' HIT, ' + this.getDamage1(hit, arr[0]) + ' DMG'
            ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
            if (ctr > 0) {
                arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
            }
            else {
                arr[3] = '';
            }
            console.log(arr[0])
        }
        console.log('hit: ' + hit)
        console.log('hitMax: ' + this.getOppHitMax(arr[0]))
        console.log('ctr: ' + ctr)
        console.log('ctrInfo: ' + arr[3])
        return arr;
    }
    
    mover1 = (event) => {
        sessionStorage.setItem('mCount', parseInt(sessionStorage.getItem('mCount')) + 2);
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let first = data.first;
        let last = data.last;
        let o = '\xa0\xa0';

        let hit = 0;
        let dmg = 0;
        let ctr = 0;
        let ctrDmg = 0;

        let name = '';
        let msg = '';
        let info = '';
        let cinfo = '';

        let arr;
        let name1 = '';
        let msg1 = '';
        let info1 = '';
        let cinfo1 = '';

        if (sessionStorage.getItem('att1') == 'BRAWL'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 6);

            hit = this.getHit('BRAWL');
            dmg = this.getDamage(hit, 'BRAWL');
            ctr = this.counterCalc(4 - hit, 1);
            ctrDmg = this.getDamage1(ctr, 'BRAWL');

            name = last;
            msg = 'THROWS 4 STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            arr = this.getOppMsg();
            name1 = sessionStorage.getItem('oppLast');
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }

        if (sessionStorage.getItem('att1') == 'BLITZ'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 8);
            
            hit = this.getHit('BLITZ');
            dmg = this.getDamage(hit, 'BLITZ');

            name = last;
            msg = 'BLITZES IN WITH 4 STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att1') == 'PRESSURE'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 10);
            
            hit = this.getHit('PRESSURE');
            dmg = this.getDamage(hit, 'PRESSURE');
            ctr = this.counterCalc(8 - hit, 1);
            ctrDmg = this.getDamage1(ctr, 'PRESSURE');
            
            name = last;
            msg = 'THROWS 8 STRIKES';
            info = '4/8 HIT, 60 DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att1') == 'POWER'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 12);
            
            hit = this.getHit('POWER');
            dmg = this.getDamage(hit, 'POWER');
            ctr = this.counterCalc(4 - hit, 1);
            ctrDmg = this.getDamage1(ctr, 'POWER');

            name = last;
            msg = 'THROWS 4 HEAVY STRIKES';
            info = '2/4 HIT, 60 DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att1') == 'FEINT'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 1);
            name = last;
            msg = 'FEINTS A STRIKE';
            info = 'OPPONENT GUARD REDUCED FOR THE ROUND';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att1') == 'LOW KICK'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);
            name = last;
            msg = 'THROWS A CALF KICK';
            info = '1/1 HIT, OPPONENT SPEED REDUCED';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att1') == 'TAKEDOWN'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 12);
            name = last;
            msg = 'ATTEMPTS A TAKEDOWN';
            info = 'SUCCESSFUL';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att1') == 'CLINCH'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 8);
            name = last;
            msg = 'THROWS 4 STRIKES AND CLINCHES';
            info = '2/4 HIT, 30 DMG';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('mCount') == 2){
            sessionStorage.setItem('name01', name);
            sessionStorage.setItem('move01', msg);
            sessionStorage.setItem('info01', info);
            sessionStorage.setItem('ctr01', cinfo);

            sessionStorage.setItem('name02', name1);
            sessionStorage.setItem('move02', msg1);
            sessionStorage.setItem('info02', info1);
            sessionStorage.setItem('ctr02', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 4){
            sessionStorage.setItem('name03', name);
            sessionStorage.setItem('move03', msg);
            sessionStorage.setItem('info03', info);
            sessionStorage.setItem('ctr03', cinfo);

            sessionStorage.setItem('name04', name1);
            sessionStorage.setItem('move04', msg1);
            sessionStorage.setItem('info04', info1);
            sessionStorage.setItem('ctr04', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 6){
            sessionStorage.setItem('name05', name);
            sessionStorage.setItem('move05', msg);
            sessionStorage.setItem('info05', info);
            sessionStorage.setItem('ctr05', cinfo);

            sessionStorage.setItem('name06', name1);
            sessionStorage.setItem('move06', msg1);
            sessionStorage.setItem('info06', info1);
            sessionStorage.setItem('ctr06', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 8){
            sessionStorage.setItem('name07', name);
            sessionStorage.setItem('move07', msg);
            sessionStorage.setItem('info07', info);
            sessionStorage.setItem('ctr07', cinfo);

            sessionStorage.setItem('name08', name1);
            sessionStorage.setItem('move08', msg1);
            sessionStorage.setItem('info08', info1);
            sessionStorage.setItem('ctr08', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 10){
            sessionStorage.setItem('name09', name);
            sessionStorage.setItem('move09', msg);
            sessionStorage.setItem('info09', info);
            sessionStorage.setItem('ctr09', cinfo);

            sessionStorage.setItem('name10', name1);
            sessionStorage.setItem('move10', msg1);
            sessionStorage.setItem('info10', info1);
            sessionStorage.setItem('ctr10', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 12){
            sessionStorage.setItem('name11', name);
            sessionStorage.setItem('move11', msg);
            sessionStorage.setItem('info11', info);
            sessionStorage.setItem('ctr11', cinfo);

            sessionStorage.setItem('name12', name1);
            sessionStorage.setItem('move12', msg1);
            sessionStorage.setItem('info12', info1);
            sessionStorage.setItem('ctr12', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 14){
            sessionStorage.setItem('name13', name);
            sessionStorage.setItem('move13', msg);
            sessionStorage.setItem('info13', info);
            sessionStorage.setItem('ctr13', cinfo);

            sessionStorage.setItem('name14', name1);
            sessionStorage.setItem('move14', msg1);
            sessionStorage.setItem('info14', info1);
            sessionStorage.setItem('ctr14', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 16){
            sessionStorage.setItem('name15', name);
            sessionStorage.setItem('move15', msg);
            sessionStorage.setItem('info15', info);
            sessionStorage.setItem('ctr15', cinfo);

            sessionStorage.setItem('name16', name1);
            sessionStorage.setItem('move16', msg1);
            sessionStorage.setItem('info16', info1);
            sessionStorage.setItem('ctr16', cinfo1);
        }
    }

    mover2 = (event) => {
        sessionStorage.setItem('mCount', parseInt(sessionStorage.getItem('mCount')) + 2);
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let first = data.first;
        let last = data.last;
        let o = '\xa0\xa0';

        let hit = 0;
        let dmg = 0;
        let ctr = 0;
        let ctrDmg = 0;

        let name = '';
        let msg = '';
        let info = '';
        let cinfo = '';

        let name1 = '';
        let msg1 = '';
        let info1 = '';
        let cinfo1 = '';

        if (sessionStorage.getItem('att2') == 'BRAWL'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 6);
            
            hit = this.getHit('BRAWL');
            dmg = this.getDamage(hit, 'BRAWL');
            ctr = this.counterCalc(4 - hit, 1);
            ctrDmg = this.getDamage1(ctr, 'BRAWL');

            name = last;
            msg = 'THROWS 4 STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att2') == 'BLITZ'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 8);
            
            hit = this.getHit('BLITZ');
            dmg = this.getDamage(hit, 'BLITZ');

            name = last;
            msg = 'BLITZES IN WITH 4 STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att2') == 'PRESSURE'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 10);
            
            hit = this.getHit('PRESSURE');
            dmg = this.getDamage(hit, 'PRESSURE');
            ctr = this.counterCalc(8 - hit, 1);
            ctrDmg = this.getDamage1(ctr, 'PRESSURE');
            
            name = last;
            msg = 'THROWS 8 STRIKES';
            info = '4/8 HIT, 60 DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att2') == 'POWER'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 12);
            
            hit = this.getHit('POWER');
            dmg = this.getDamage(hit, 'POWER');
            ctr = this.counterCalc(4 - hit, 1);
            ctrDmg = this.getDamage1(ctr, 'POWER');

            name = last;
            msg = 'THROWS 4 HEAVY STRIKES';
            info = '2/4 HIT, 60 DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att2') == 'FEINT'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 1);
            name = last;
            msg = 'FEINTS A STRIKE';
            info = 'OPPONENT GUARD REDUCED FOR THE ROUND';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att2') == 'LOW KICK'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);
            name = last;
            msg = 'THROWS A CALF KICK';
            info = '1/1 HIT, OPPONENT SPEED REDUCED';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att2') == 'TAKEDOWN'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 12);
            name = last;
            msg = 'ATTEMPTS A TAKEDOWN';
            info = 'SUCCESSFUL';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att2') == 'CLINCH'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 8);
            name = last;
            msg = 'THROWS 4 STRIKES AND CLINCHES';
            info = '2/4 HIT, 30 DMG';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('mCount') == 2){
            sessionStorage.setItem('name01', name);
            sessionStorage.setItem('move01', msg);
            sessionStorage.setItem('info01', info);
            sessionStorage.setItem('ctr01', cinfo);

            sessionStorage.setItem('name02', name1);
            sessionStorage.setItem('move02', msg1);
            sessionStorage.setItem('info02', info1);
            sessionStorage.setItem('ctr02', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 4){
            sessionStorage.setItem('name03', name);
            sessionStorage.setItem('move03', msg);
            sessionStorage.setItem('info03', info);
            sessionStorage.setItem('ctr03', cinfo);

            sessionStorage.setItem('name04', name1);
            sessionStorage.setItem('move04', msg1);
            sessionStorage.setItem('info04', info1);
            sessionStorage.setItem('ctr04', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 6){
            sessionStorage.setItem('name05', name);
            sessionStorage.setItem('move05', msg);
            sessionStorage.setItem('info05', info);
            sessionStorage.setItem('ctr05', cinfo);

            sessionStorage.setItem('name06', name1);
            sessionStorage.setItem('move06', msg1);
            sessionStorage.setItem('info06', info1);
            sessionStorage.setItem('ctr06', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 8){
            sessionStorage.setItem('name07', name);
            sessionStorage.setItem('move07', msg);
            sessionStorage.setItem('info07', info);
            sessionStorage.setItem('ctr07', cinfo);

            sessionStorage.setItem('name08', name1);
            sessionStorage.setItem('move08', msg1);
            sessionStorage.setItem('info08', info1);
            sessionStorage.setItem('ctr08', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 10){
            sessionStorage.setItem('name09', name);
            sessionStorage.setItem('move09', msg);
            sessionStorage.setItem('info09', info);
            sessionStorage.setItem('ctr09', cinfo);

            sessionStorage.setItem('name10', name1);
            sessionStorage.setItem('move10', msg1);
            sessionStorage.setItem('info10', info1);
            sessionStorage.setItem('ctr10', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 12){
            sessionStorage.setItem('name11', name);
            sessionStorage.setItem('move11', msg);
            sessionStorage.setItem('info11', info);
            sessionStorage.setItem('ctr11', cinfo);

            sessionStorage.setItem('name12', name1);
            sessionStorage.setItem('move12', msg1);
            sessionStorage.setItem('info12', info1);
            sessionStorage.setItem('ctr12', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 14){
            sessionStorage.setItem('name13', name);
            sessionStorage.setItem('move13', msg);
            sessionStorage.setItem('info13', info);
            sessionStorage.setItem('ctr13', cinfo);

            sessionStorage.setItem('name14', name1);
            sessionStorage.setItem('move14', msg1);
            sessionStorage.setItem('info14', info1);
            sessionStorage.setItem('ctr14', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 16){
            sessionStorage.setItem('name15', name);
            sessionStorage.setItem('move15', msg);
            sessionStorage.setItem('info15', info);
            sessionStorage.setItem('ctr15', cinfo);

            sessionStorage.setItem('name16', name1);
            sessionStorage.setItem('move16', msg1);
            sessionStorage.setItem('info16', info1);
            sessionStorage.setItem('ctr16', cinfo1);
        }
    }
    
    mover3 = (event) => {
        sessionStorage.setItem('mCount', parseInt(sessionStorage.getItem('mCount')) + 2);
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let first = data.first;
        let last = data.last;
        let o = '\xa0\xa0';
        
        let hit = 0;
        let dmg = 0;
        let ctr = 0;
        let ctrDmg = 0;

        let name = '';
        let msg = '';
        let info = '';
        let cinfo = '';

        let arr;
        let name1 = '';
        let msg1 = '';
        let info1 = '';
        let cinfo1 = '';

        if (sessionStorage.getItem('att3') == 'BRAWL'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 6);

            hit = this.getHit('BRAWL');
            dmg = this.getDamage(hit, 'BRAWL');
            ctr = this.counterCalc(4 - hit, 1);
            ctrDmg = this.getDamage1(ctr, 'BRAWL');

            name = last;
            msg = 'THROWS 4 STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            arr = this.getOppMsg();
            name1 = sessionStorage.getItem('oppLast');
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }

        if (sessionStorage.getItem('att3') == 'BLITZ'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 8);
            
            hit = this.getHit('BLITZ');
            dmg = this.getDamage(hit, 'BLITZ');

            name = last;
            msg = 'BLITZES IN WITH 4 STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att3') == 'PRESSURE'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 10);
            
            hit = this.getHit('PRESSURE');
            dmg = this.getDamage(hit, 'PRESSURE');
            ctr = this.counterCalc(8 - hit, 1);
            ctrDmg = this.getDamage1(ctr, 'PRESSURE');
            
            name = last;
            msg = 'THROWS 8 STRIKES';
            info = '4/8 HIT, 60 DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att3') == 'POWER'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 12);
            
            hit = this.getHit('POWER');
            dmg = this.getDamage(hit, 'POWER');
            ctr = this.counterCalc(4 - hit, 1);
            ctrDmg = this.getDamage1(ctr, 'POWER');

            name = last;
            msg = 'THROWS 4 HEAVY STRIKES';
            info = '2/4 HIT, 60 DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att3') == 'FEINT'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 1);
            name = last;
            msg = 'FEINTS A STRIKE';
            info = 'OPPONENT GUARD REDUCED FOR THE ROUND';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att3') == 'LOW KICK'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);
            name = last;
            msg = 'THROWS A CALF KICK';
            info = '1/1 HIT, OPPONENT SPEED REDUCED';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att3') == 'TAKEDOWN'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 12);
            name = last;
            msg = 'ATTEMPTS A TAKEDOWN';
            info = 'SUCCESSFUL';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('att3') == 'CLINCH'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 8);
            name = last;
            msg = 'THROWS 4 STRIKES AND CLINCHES';
            info = '2/4 HIT, 30 DMG';
            cinfo = '';

            name1 = sessionStorage.getItem('oppLast');
            msg1 = 'THROWS 4 STRIKES';
            info1 = '2/4 HIT, 30 DMG';
            cinfo1 = '';
        }

        if (sessionStorage.getItem('mCount') == 2){
            sessionStorage.setItem('name01', name);
            sessionStorage.setItem('move01', msg);
            sessionStorage.setItem('info01', info);
            sessionStorage.setItem('ctr01', cinfo);

            sessionStorage.setItem('name02', name1);
            sessionStorage.setItem('move02', msg1);
            sessionStorage.setItem('info02', info1);
            sessionStorage.setItem('ctr02', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 4){
            sessionStorage.setItem('name03', name);
            sessionStorage.setItem('move03', msg);
            sessionStorage.setItem('info03', info);
            sessionStorage.setItem('ctr03', cinfo);

            sessionStorage.setItem('name04', name1);
            sessionStorage.setItem('move04', msg1);
            sessionStorage.setItem('info04', info1);
            sessionStorage.setItem('ctr04', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 6){
            sessionStorage.setItem('name05', name);
            sessionStorage.setItem('move05', msg);
            sessionStorage.setItem('info05', info);
            sessionStorage.setItem('ctr05', cinfo);

            sessionStorage.setItem('name06', name1);
            sessionStorage.setItem('move06', msg1);
            sessionStorage.setItem('info06', info1);
            sessionStorage.setItem('ctr06', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 8){
            sessionStorage.setItem('name07', name);
            sessionStorage.setItem('move07', msg);
            sessionStorage.setItem('info07', info);
            sessionStorage.setItem('ctr07', cinfo);

            sessionStorage.setItem('name08', name1);
            sessionStorage.setItem('move08', msg1);
            sessionStorage.setItem('info08', info1);
            sessionStorage.setItem('ctr08', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 10){
            sessionStorage.setItem('name09', name);
            sessionStorage.setItem('move09', msg);
            sessionStorage.setItem('info09', info);
            sessionStorage.setItem('ctr09', cinfo);

            sessionStorage.setItem('name10', name1);
            sessionStorage.setItem('move10', msg1);
            sessionStorage.setItem('info10', info1);
            sessionStorage.setItem('ctr10', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 12){
            sessionStorage.setItem('name11', name);
            sessionStorage.setItem('move11', msg);
            sessionStorage.setItem('info11', info);
            sessionStorage.setItem('ctr11', cinfo);

            sessionStorage.setItem('name12', name1);
            sessionStorage.setItem('move12', msg1);
            sessionStorage.setItem('info12', info1);
            sessionStorage.setItem('ctr12', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 14){
            sessionStorage.setItem('name13', name);
            sessionStorage.setItem('move13', msg);
            sessionStorage.setItem('info13', info);
            sessionStorage.setItem('ctr13', cinfo);

            sessionStorage.setItem('name14', name1);
            sessionStorage.setItem('move14', msg1);
            sessionStorage.setItem('info14', info1);
            sessionStorage.setItem('ctr14', cinfo1);
        }
        else if (sessionStorage.getItem('mCount') == 16){
            sessionStorage.setItem('name15', name);
            sessionStorage.setItem('move15', msg);
            sessionStorage.setItem('info15', info);
            sessionStorage.setItem('ctr15', cinfo);

            sessionStorage.setItem('name16', name1);
            sessionStorage.setItem('move16', msg1);
            sessionStorage.setItem('info16', info1);
            sessionStorage.setItem('ctr16', cinfo1);
        }
    }

    render() {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let first = data.first;
        let last = data.last;
        let weight = data.weight;
        let cut = data.cut;
        let height = data.height;
        let nation = data.nation;
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
        let w = '\xa0\xa0';
        let w1 = '\xa0';

        let playerStm = sessionStorage.getItem('playerStm');
        let oppStm = sessionStorage.getItem('oppStm');
        let playerStatus = sessionStorage.getItem('playerStatus');
        let oppStatus = sessionStorage.getItem('oppStatus');
        return(
            <div className="App-header1">
                <div className="App-header-styleTop">
                    <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -730 }} />
                    ROUND {sessionStorage.getItem('round')}<br/><br/>
                </div>
                <div className="App-customize1b" style={{ textAlign: 'left', marginLeft: 40, marginRight: 120, marginTop: -10 }}>
                    <text style={{color: 'grey'}}>{sessionStorage.getItem('rank')}</text> <b>{first} {last}</b>
                </div>
                <div className="App-customize1c" style={{ textAlign: 'right', marginLeft: 1375, marginTop: -110 }}>
                    <text style={{color: 'grey'}}>{sessionStorage.getItem('oppRank')}</text> <b>{sessionStorage.getItem('oppFirst')} {sessionStorage.getItem('oppLast')}</b>
                </div>
                <div className="App-customize1b" style={{ textAlign: 'left', fontSize: 20, marginLeft: 40, marginRight: 120, marginTop: -80 }}>
                    <text style={{color: 'grey'}}>STATUS</text> <text style={{color: this.stColor(playerStatus)}}><b>{this.playerSt(playerStatus)}</b></text>
                </div>
                <div className="App-customize1c" style={{ textAlign: 'right', fontSize: 20, marginLeft: 1375, marginTop: -110 }}>
                <text style={{color: this.stColor(oppStatus)}}><b>{this.playerSt(oppStatus)}</b></text> <text style={{color: 'grey'}}>STATUS</text>
                </div>
                <div className="App-customize1b" style={{ textAlign: 'left', fontSize: 20, marginLeft: 40, marginRight: 120, marginTop: -90 }}>
                <text style={{color: 'grey'}}>STAMINA</text> <b>{playerStm}</b>
                </div>
                <div className="App-customize1c" style={{ textAlign: 'right', fontSize: 20, marginLeft: 1375, marginTop: -110 }}>
                <b>{oppStm}</b> <text style={{color: 'grey'}}>STAMINA</text>
                </div>
                <div className="App-customize1b" style={{ textAlign: 'left', fontSize: 15, marginLeft: 40, marginRight: 120, marginTop: 620 }}>
                <text style={{color: 'grey'}}>STANCE</text> <b>{this.state.playerStance}</b>
                </div>
                <div className="App-customize1c" style={{ textAlign: 'right', fontSize: 15, marginLeft: 1375, marginTop: -110 }}>
                <b>{sessionStorage.getItem('oppStance')}</b> <text style={{color: 'grey'}}>STANCE</text>
                </div>
                <div className="App-customize1b" style={{ textAlign: 'left', fontSize: 15, marginLeft: 40, marginRight: 120, marginTop: -90 }}>
                <text style={{color: 'grey'}}>GUARD</text> <b>{this.state.playerGuard}</b>
                </div>
                <div className="App-customize1c" style={{ textAlign: 'right', fontSize: 15, marginLeft: 1375, marginTop: -110 }}>
                <b>{sessionStorage.getItem('oppGuard')}</b> <text style={{color: 'grey'}}>GUARD</text>
                </div>
                <div className="App-customize1b" style={{ textAlign: 'left', fontSize: 15, marginLeft: 40, marginRight: 120, marginTop: -90 }}>
                <text style={{color: 'grey'}}>ATTACK 1</text> <b>{this.state.playerAttack1}</b>
                </div>
                <div className="App-customize1c" style={{ textAlign: 'right', fontSize: 15, marginLeft: 1375, marginTop: -110 }}>
                <b>{sessionStorage.getItem('oppAtt1')}</b> <text style={{color: 'grey'}}>ATTACK 1</text>
                </div>
                <div className="App-customize1b" style={{ textAlign: 'left', fontSize: 15, marginLeft: 40, marginRight: 120, marginTop: -90 }}>
                <text style={{color: 'grey'}}>ATTACK 2</text> <b>{this.state.playerAttack2}</b>
                </div>
                <div className="App-customize1c" style={{ textAlign: 'right', fontSize: 15, marginLeft: 1375, marginTop: -110 }}>
                <b>{sessionStorage.getItem('oppAtt2')}</b> <text style={{color: 'grey'}}>ATTACK 2</text>
                </div>
                <div className="App-customize1b" style={{ textAlign: 'left', fontSize: 15, marginLeft: 40, marginRight: 120, marginTop: -90 }}>
                <text style={{color: 'grey'}}>ATTACK 3</text> <b>{this.state.playerAttack3}</b>
                </div>
                <div className="App-customize1c" style={{ textAlign: 'right', fontSize: 15, marginLeft: 1375, marginTop: -110 }}>
                <b>{sessionStorage.getItem('oppAtt3')}</b> <text style={{color: 'grey'}}>ATTACK 3</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -875, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name01')}</text>{w1}{sessionStorage.getItem('move01')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info01')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr01')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name02')}</text>{w1}{sessionStorage.getItem('move02')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info02')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr02')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name03')}</text>{w1}{sessionStorage.getItem('move03')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info03')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr03')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name04')}</text>{w1}{sessionStorage.getItem('move04')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info04')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr04')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name05')}</text>{w1}{sessionStorage.getItem('move05')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info05')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr05')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name06')}</text>{w1}{sessionStorage.getItem('move06')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info06')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr06')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name07')}</text>{w1}{sessionStorage.getItem('move07')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info07')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr07')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name08')}</text>{w1}{sessionStorage.getItem('move08')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info08')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr08')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name09')}</text>{w1}{sessionStorage.getItem('move09')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info09')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr09')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name10')}</text>{w1}{sessionStorage.getItem('move10')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info10')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr10')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name11')}</text>{w1}{sessionStorage.getItem('move11')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info11')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr11')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name12')}</text>{w1}{sessionStorage.getItem('move12')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info12')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr12')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name13')}</text>{w1}{sessionStorage.getItem('move13')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info13')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr13')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name14')}</text>{w1}{sessionStorage.getItem('move14')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info14')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr14')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name15')}</text>{w1}{sessionStorage.getItem('move15')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info15')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr15')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    <text style={{color: 'yellow'}}>{sessionStorage.getItem('name16')}</text>{w1}{sessionStorage.getItem('move16')}{w}<text style={{color: 'red'}}>{sessionStorage.getItem('info16')}</text><text style={{color: 'orange'}}>{sessionStorage.getItem('ctr16')}</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -60}}>
                    <Link to='./round'><Button data-tip data-for="4" onClick={this.mover0}>STICK</Button></Link>
                    <ReactTooltip class="Membership" id="4" place="top" effect="float"><text style={{fontSize: 30}}>STICK & MOVE</text> {this.calcPer('STICK')}% ACC.<br/>LIGHT AND CONSERVATIVE JABS<br/><b>2 STAMINA</b></ReactTooltip>
                    <Link to='./round'><Button data-tip data-for="1" onClick={this.mover1}>{sessionStorage.getItem('att1')}</Button></Link>
                    <ReactTooltip class="Membership" id="1" place="top" effect="float"><text style={{fontSize: 30}}>{this.attDesc1a()}</text> {this.calcPer(sessionStorage.getItem('att1'))}% ACC.<br/>{this.attDesc1b()}<br/><b>{this.attDesc1c()} STAMINA</b></ReactTooltip>
                    <Link to='./round'><Button data-tip data-for="2" onClick={this.mover2}>{sessionStorage.getItem('att2')}</Button></Link>
                    <ReactTooltip class="Membership" id="2" place="top" effect="float"><text style={{fontSize: 30}}>{this.attDesc2a()}</text> {this.calcPer(sessionStorage.getItem('att2'))}% ACC.<br/>{this.attDesc2b()}<br/><b>{this.attDesc2c()} STAMINA</b></ReactTooltip>
                    <Link to='./round'><Button data-tip data-for="3" onClick={this.mover3}>{sessionStorage.getItem('att3')}</Button></Link>
                    <ReactTooltip class="Membership" id="3" place="top" effect="float"><text style={{fontSize: 30}}>{this.attDesc3a()}</text> {this.calcPer(sessionStorage.getItem('att3'))}% ACC.<br/>{this.attDesc3b()}<br/><b>{this.attDesc3c()} STAMINA</b></ReactTooltip>
                </div>
                <div className="App-customize1a" style={{marginTop: 0}}>
                    <Link to='./bout0'><Button>FIGHT</Button></Link>
                </div>
            </div>
        )
    }
}

export default Round;
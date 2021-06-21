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
                <b>?</b> <text style={{color: 'grey'}}>STANCE</text>
                </div>
                <div className="App-customize1b" style={{ textAlign: 'left', fontSize: 15, marginLeft: 40, marginRight: 120, marginTop: -90 }}>
                <text style={{color: 'grey'}}>GUARD</text> <b>{this.state.playerGuard}</b>
                </div>
                <div className="App-customize1c" style={{ textAlign: 'right', fontSize: 15, marginLeft: 1375, marginTop: -110 }}>
                <b>?</b> <text style={{color: 'grey'}}>GUARD</text>
                </div>
                <div className="App-customize1b" style={{ textAlign: 'left', fontSize: 15, marginLeft: 40, marginRight: 120, marginTop: -90 }}>
                <text style={{color: 'grey'}}>ATTACK 1</text> <b>{this.state.playerAttack1}</b>
                </div>
                <div className="App-customize1c" style={{ textAlign: 'right', fontSize: 15, marginLeft: 1375, marginTop: -110 }}>
                <b>?</b> <text style={{color: 'grey'}}>ATTACK 1</text>
                </div>
                <div className="App-customize1b" style={{ textAlign: 'left', fontSize: 15, marginLeft: 40, marginRight: 120, marginTop: -90 }}>
                <text style={{color: 'grey'}}>ATTACK 2</text> <b>{this.state.playerAttack2}</b>
                </div>
                <div className="App-customize1c" style={{ textAlign: 'right', fontSize: 15, marginLeft: 1375, marginTop: -110 }}>
                <b>?</b> <text style={{color: 'grey'}}>ATTACK 2</text>
                </div>
                <div className="App-customize1b" style={{ textAlign: 'left', fontSize: 15, marginLeft: 40, marginRight: 120, marginTop: -90 }}>
                <text style={{color: 'grey'}}>ATTACK 3</text> <b>{this.state.playerAttack3}</b>
                </div>
                <div className="App-customize1c" style={{ textAlign: 'right', fontSize: 15, marginLeft: 1375, marginTop: -110 }}>
                <b>?</b> <text style={{color: 'grey'}}>ATTACK 3</text>
                </div>
                <div className="App-customize1a" style={{marginTop: -875, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -75, fontSize: 22}}>
                    asd
                </div>
                <div className="App-customize1a" style={{marginTop: -60}}>
                    <Button data-tip data-for="4" >STICK</Button>
                    <ReactTooltip class="Membership" id="4" place="top" effect="float"><text style={{fontSize: 30}}>STICK & MOVE</text><br/>LIGHT AND CONSERVATIVE JABS<br/><b>2 STAMINA</b></ReactTooltip>
                    <Button data-tip data-for="1" >{sessionStorage.getItem('att1')}</Button>
                    <ReactTooltip class="Membership" id="1" place="top" effect="float"><text style={{fontSize: 30}}>{this.attDesc1a()}</text><br/>{this.attDesc1b()}<br/><b>1 STAMINA</b></ReactTooltip>
                    <Button data-tip data-for="2" >{sessionStorage.getItem('att2')}</Button>
                    <ReactTooltip class="Membership" id="2" place="top" effect="float"><text style={{fontSize: 30}}>{this.attDesc2a()}</text><br/>{this.attDesc2b()}<br/><b>5 STAMINA</b></ReactTooltip>
                    <Button data-tip data-for="3" >{sessionStorage.getItem('att3')}</Button>
                    <ReactTooltip class="Membership" id="3" place="top" effect="float"><text style={{fontSize: 30}}>{this.attDesc3a()}</text><br/>{this.attDesc3b()}<br/><b>10 STAMINA</b></ReactTooltip>
                </div>
                <div className="App-customize1a" style={{marginTop: 0}}>
                    <Link to='./bout0'><Button>FIGHT</Button></Link>
                </div>
            </div>
        )
    }
}

export default Round;
import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactTooltip from "react-tooltip";
import logo from './mmasim2021logo.png';
import './App.css';
import Random from './Random.js';

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
            playerAttack3: sessionStorage.getItem('att3'),
            pos: this.posState()
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
        this.posState = this.posState.bind(this);
    }

    posState = (event) => {
        if (parseInt(sessionStorage.getItem('clinched')) == 1) {
            this.setState({
                pos: 1
            })
        }
        else if (parseInt(sessionStorage.getItem('tookdown')) == 1) {
            this.setState({
                pos: 2
            })
        }
        else if (parseInt(sessionStorage.getItem('tookdown1')) == 1) {
            this.setState({
                pos: 3
            })
        }
        else {
            this.setState({
                pos: 0
            })
        }
    }

    pos() {
        if (parseInt(sessionStorage.getItem('clinched')) == 1) {
            return 1;
        }
        else if (parseInt(sessionStorage.getItem('tookdown')) == 1) {
            return 2;
        }
        else if (parseInt(sessionStorage.getItem('tookdown1')) == 1) {
            return 3;
        }
        else {
            return 0;
        }
    }

    clinched(x) {
        if (x == 1) {
            sessionStorage.setItem('clinched', 1);
            sessionStorage.setItem('tookdown', 0);
            sessionStorage.setItem('tookdown1', 0);
            this.posState();
        }
        else {
            sessionStorage.setItem('clinched', 0);
            this.posState();
        }
    }

    tookdown(x) {
        if (x == 1) {
            sessionStorage.setItem('tookdown', 1);
            sessionStorage.setItem('clinched', 0);
            sessionStorage.setItem('tookdown1', 0);
            this.posState();
        }
        else {
            sessionStorage.setItem('tookdown', 0);
            this.posState();
        }
    }

    tookdown1(x) {
        if (x == 1) {
            sessionStorage.setItem('tookdown1', 1);
            sessionStorage.setItem('tookdown', 0);
            sessionStorage.setItem('clinched', 0);
            this.posState();
        }
        else {
            sessionStorage.setItem('tookdown1', 0);
            this.posState();
        }
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

    getRounds() {
        let rank = sessionStorage.getItem('rank');
        let oppRank = sessionStorage.getItem('oppRank');

        if (rank == 'C' || oppRank == 'C' || rank == '1' || oppRank == '1' || rank == '2' || oppRank == '2' || rank == '3' || oppRank == '3' || rank == '4' || oppRank == '4' || rank == '5' || oppRank == '5') {
            return 5;
        }
        else {
            return 3;
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
        if (st == 1000) {
            return 'UNTOUCHED';
        }
        if (st > 900) {
            return 'EXCEPTIONAL';
        }
        else if (st > 700) {
            return 'HEALTHY'
        }
        else if (st > 500) {
            return 'CONSCIOUS';
        }
        else if (st > 300) {
            return 'WORN'
        }
        else if (st > 100) {
            return 'WEAK'
        }
        else if (st > 0) {
            return 'IN TROUBLE'
        }
        else if (st <= 0) {
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
            return 'FAKE ATTACK TO INC. ACCURACY OF NEXT MOVE';
        }
        else if (sessionStorage.getItem('att1') == 'LOW KICK'){
            return 'KICK LOW TO REDUCE OPPONENT SPEED';
        }
        else if (sessionStorage.getItem('att1') == 'TAKEDOWN'){
            return 'TAKE OPPONENT DOWN TO GROUND';
        }
        else if (sessionStorage.getItem('att1') == 'CLINCH'){
            return 'ENTER A CLINCH';
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
            return 'FAKE ATTACK TO INC. ACCURACY OF NEXT MOVE';
        }
        else if (sessionStorage.getItem('att2') == 'LOW KICK'){
            return 'KICK LOW TO REDUCE OPPONENT SPEED';
        }
        else if (sessionStorage.getItem('att2') == 'TAKEDOWN'){
            return 'TAKE OPPONENT DOWN TO GROUND';
        }
        else if (sessionStorage.getItem('att2') == 'CLINCH'){
            return 'ENTER A CLINCH';
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
            return 'FAKE ATTACK TO INC. ACCURACY OF NEXT MOVE';
        }
        else if (sessionStorage.getItem('att3') == 'LOW KICK'){
            return 'KICK LOW TO REDUCE OPPONENT SPEED';
        }
        else if (sessionStorage.getItem('att3') == 'TAKEDOWN'){
            return 'TAKE OPPONENT DOWN TO GROUND';
        }
        else if (sessionStorage.getItem('att3') == 'CLINCH'){
            return 'ENTER A CLINCH';
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
            return '12';
        }
        else if (sessionStorage.getItem('att1') == 'POWER'){
            return '18';
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
            return '4';
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
            return '12';
        }
        else if (sessionStorage.getItem('att2') == 'POWER'){
            return '18';
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
            return '4';
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
            return '12';
        }
        else if (sessionStorage.getItem('att3') == 'POWER'){
            return '16';
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
            return '4';
        }
    }

    mover0 = (event) => {
        if (sessionStorage.getItem('win') == 1 || sessionStorage.getItem('win1') == 1 || sessionStorage.getItem('bell') == 1) {
            return;
        }
        
        if (sessionStorage.getItem('tookdown') == 1) {
            sessionStorage.setItem('control1', parseInt(sessionStorage.getItem('control1')) + 1);
        }

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

        if (this.pos() == 0) {
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 2);
    
            hit = this.getHit('STICK');
            dmg = this.getDamage(hit, 'STICK');

            name = last;
            msg = 'THROWS 2 JABS';
            info = hit + '/2 HIT, ' + dmg + ' DMG';
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (this.pos() == 1){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 2);

            hit = this.getHit('KNEE');
            dmg = this.getDamage(hit, 'KNEE');

            name = last;
            msg = 'THROWS A KNEE';
            info = hit + '/1 HIT, ' + dmg + ' DMG';
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (this.pos() == 2){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 2);
            dmg = this.getDamage(0, 'x');

            name = last;
            msg = 'DOES NOTHING ' + dmg;
            info = dmg;
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (this.pos() == 3){
            dmg = this.getDamage(0, 'x');

            name = last;
            msg = 'DOES NOTHING ' + dmg;
            info = dmg;
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
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
            sessionStorage.setItem('bell', 1);
            sessionStorage.setItem('name15', name);
            sessionStorage.setItem('move15', msg);
            sessionStorage.setItem('info15', info);
            sessionStorage.setItem('ctr15', cinfo);

            sessionStorage.setItem('name16', name1);
            sessionStorage.setItem('move16', msg1);
            sessionStorage.setItem('info16', info1);
            sessionStorage.setItem('ctr16', cinfo1);
            
            if (sessionStorage.getItem('round') == this.getRounds() && sessionStorage.getItem('tko') == 0) {
                sessionStorage.setItem('dec', 1);
            }
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
        per = (1.5 * (playerPunching) - 1.5 * (oppPunching)) + (.8 * (playerSpd - oppSpd));
        if (att == 'STICK') {
            if (per >= 0){
                return Math.round(70 + (Math.pow(per, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1());
            }
            else {
                let per1 = Math.abs(per);
                return Math.round(70 - (Math.pow(per1, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1());
            }
        }
        else if (att == 'BRAWL' || att == 'PRESSURE'){
            if (per >= 0){
                return Math.round(30 + (Math.pow(per, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1());
            }
            else {
                let per1 = Math.abs(per);
                return Math.round(30 - (Math.pow(per1, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1());
            }
        }
        else if (att == 'POWER'){
            if (per >= 0){
                return Math.round(20 + (Math.pow(per, .45)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1());
            }
            else {
                let per1 = Math.abs(per);
                return Math.round(20 - (Math.pow(per1, .45)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1());
            }
        }
        else if (att == 'BLITZ'){
            let bPer = ((playerSpd * 2) - (oppSpd + oppPunching));
            if (bPer >= 0){
                return Math.round(30 + (Math.pow(bPer, .63)) - oppBladedBuff - oppHighBuff + oppLowNerf + oppLongNerf + this.getFeinted1());
            }
            else {
                let bPer1 = Math.abs(bPer);
                return Math.round(30 - (Math.pow(bPer1, .63)) - oppBladedBuff - oppHighBuff + oppLowNerf + oppLongNerf + this.getFeinted1());
            }
        }
        else if (att == 'FEINT'){
            let fPer = parseInt(25 + Math.pow(playerPunching, .9));
            return fPer;
        }
        else if (att == 'LOW KICK'){
            let kPer = (1.5 * (playerKicking) - 1.5 * (oppKicking)) + (.8 * (playerSpd - oppSpd));
            if (kPer >= 0) {
                return Math.round(70 + (Math.pow(kPer, .63)) + playerThaiBuff - oppThaiBuff - oppLongBuff + this.getFeinted1());
            }
            else {
                let per1 = Math.abs(kPer);
                return Math.round(70 - (Math.pow(per1, .63)) + playerThaiBuff - oppThaiBuff - oppLongBuff + this.getFeinted1());
            }
        }
        else if (att == 'TAKEDOWN'){
            let tPer = Math.round(20 + Math.pow(playerWrestling, .75) - Math.pow(oppWrestling, .75) + this.getFeinted1() + playerMmaBuff - oppMmaBuff - oppLowBuff + oppHighNerf + (.8 * (playerSpd - oppSpd)) + (.8 * (playerStr - oppStr)));
            return tPer;
        }
        else if (att == 'CLINCH'){
            let cPer = (4 * (playerClinch) - 4 * (oppClinch)) + (.8 * (playerSpd - oppSpd));
            if (cPer >= 0){
                return Math.round(30 + (Math.pow(cPer, .63)) + this.getFeinted1());
            }
            else {
                cPer = Math.abs(cPer);
                return Math.round(30 - (Math.pow(cPer, .63)) + this.getFeinted1());
            }
        }
        else if (att == 'KNEE'){
            let cPer = parseInt(60 + Math.pow(playerClinch, .9) - Math.pow(oppClinch, .9) + (.8 * (playerSpd - oppSpd)));
            return cPer;
        }
        else if (att == 'ELBOW'){
            let cPer = parseInt(40 + Math.pow(playerClinch, .9) - Math.pow(oppClinch, .9) + (.8 * (playerSpd - oppSpd)));
            return cPer;
        }
        else if (att == 'EXIT'){
            let cPer = parseInt(35 + Math.pow(playerClinch, .9) - Math.pow(oppClinch, .9) + (.8 * (playerSpd - oppSpd)) + (.8 * (playerStr - oppStr)));
            return cPer;
        }
        else if (att == 'TRIP'){
            let cPer = parseInt(25 + Math.pow(playerClinch, .9) - Math.pow(oppClinch, .9) + (.8 * (playerSpd - oppSpd)) + (.8 * (playerStr - oppStr)));
            return cPer;
        }
        else if (att == 'GET UP'){
            return 100;
        }
        else if (att == 'G&P'){
            return 80;
        }
        else if (att == 'SUBMISSIONtop'){
            let sPer = parseInt(15 + Math.pow(playerGrappling, .65) - Math.pow(oppGrappling, .65));
            return sPer;
        }
        else if (att == 'ESCAPE'){
            let ePer = 5 + parseInt(30 + Math.pow(playerWrestling, .75) - Math.pow(oppWrestling, .75) + (.8 * (playerSpd - oppSpd)) + (.8 * (playerStr - oppStr)));
            return ePer;
        }
        else if (att == 'REVERSE'){
            let ePer = parseInt(20 + Math.pow(playerWrestling, .6) - Math.pow(oppWrestling, .6) + (.8 * (playerSpd - oppSpd)) + (.8 * (playerStr - oppStr)));
            return ePer;
        }
        else if (att == 'SUBMISSIONbot'){
            let sPer = parseInt(10 + Math.pow(playerGrappling, .55) - Math.pow(oppGrappling, .55));
            return sPer;
        }
    }

    getFeinted() {
        if (sessionStorage.getItem('feinted') == 1) {
            return 15;
        }
        else {
            return 0;
        }
    }

    getFeinted1() {
        if (sessionStorage.getItem('feinted1') == 1) {
            return 15;
        }
        else {
            return 0;
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
        per = (1.5 * (playerPunching) - 1.5 * (oppPunching)) + (.8 * (playerSpd - oppSpd));
        if (att == 'STICK') {
            for (let i = 0; i < 2; ++i) {
                let ran1 = Random();
                if (per >= 0){
                    if (ran1 <= 70 + (Math.pow(per, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1()) {
                        console.log(70 + (Math.pow(per, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1())
                        ++hit;
                        sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                    }
                }
                else {
                    let per1 = Math.abs(per);
                    if (ran1 <= 70 - (Math.pow(per1, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1()) {
                        console.log(70 - (Math.pow(per1, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1())
                        ++hit;
                        sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                    }
                }
            }
            sessionStorage.setItem('totalStrikes', parseInt(sessionStorage.getItem('totalStrikes')) + 2);
        }
        else if (att == 'BRAWL'){
            for (let i = 0; i < 4; ++i){
                let ran1 = Random();
                if (per >= 0){
                    if (ran1 <= 30 + (Math.pow(per, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1()) {
                        console.log(30 + (Math.pow(per, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1())
                        ++hit;
                        sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                    }
                }
                else {
                    let per1 = Math.abs(per);
                    if (ran1 <= 30 - (Math.pow(per1, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1()) {
                        console.log(30 - (Math.pow(per1, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1())
                        ++hit;
                        sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                    }
                }
            }
            sessionStorage.setItem('totalStrikes', parseInt(sessionStorage.getItem('totalStrikes')) + 4);
        }
        else if (att == 'POWER'){
            for (let i = 0; i < 4; ++i){
                let ran1 = Random();
                if (per >= 0){
                    if (ran1 <= 20 + (Math.pow(per, .45)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1()) {
                        console.log(20 + (Math.pow(per, .45)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1())
                        ++hit;
                        sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                    }
                }
                else {
                    let per1 = Math.abs(per);
                    if (ran1 <= 20 - (Math.pow(per1, .45)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1()) {
                        console.log(20 - (Math.pow(per1, .45)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1())
                        ++hit;
                        sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                    }
                }
            }
            sessionStorage.setItem('totalStrikes', parseInt(sessionStorage.getItem('totalStrikes')) + 4);
        }
        else if (att == 'PRESSURE'){
            for (let i = 0; i < 8; ++i){
                let ran1 = Random();
                if (per >= 0){
                    if (ran1 <= 30 + (Math.pow(per, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1()) {
                        console.log(30 + (Math.pow(per, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1())
                        ++hit;
                        sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                    }
                }
                else {
                    let per1 = Math.abs(per);
                    if (ran1 <= 30 - (Math.pow(per1, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1()) {
                        console.log(30 - (Math.pow(per1, .63)) + playerBladedBuff - oppBladedBuff - oppHighBuff + oppLongNerf + this.getFeinted1())
                        ++hit;
                        sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                    }
                }
            }
            sessionStorage.setItem('totalStrikes', parseInt(sessionStorage.getItem('totalStrikes')) + 8);
        }
        else if (att == 'BLITZ'){
            let bPer = ((playerSpd * 2) - (oppSpd + oppPunching));
            for (let i = 0; i < 4; ++i){
                let ran1 = Random();
                if (bPer >= 0){
                    if (ran1 <= 30 + (Math.pow(bPer, .63)) - oppBladedBuff - oppHighBuff + oppLowNerf + oppLongNerf + this.getFeinted1()) {
                        console.log(30 + (Math.pow(bPer, .63)) - oppBladedBuff - oppHighBuff + oppLowNerf + oppLongNerf + this.getFeinted1())
                        ++hit;
                        sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                    }
                }
                else {
                    let bPer1 = Math.abs(bPer);
                    if (ran1 <= 30 - (Math.pow(bPer1, .63)) - oppBladedBuff - oppHighBuff + oppLowNerf + oppLongNerf + this.getFeinted1()) {
                        console.log(30 - (Math.pow(bPer1, .63)) - oppBladedBuff - oppHighBuff + oppLowNerf + oppLongNerf + this.getFeinted1())
                        ++hit;
                        sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                    }
                }
            }
            sessionStorage.setItem('totalStrikes', parseInt(sessionStorage.getItem('totalStrikes')) + 4);
        }
        else if (att == 'LOW KICK'){
            let kPer = (1.5 * (playerKicking) - 1.5 * (oppKicking)) + (.8 * (playerSpd - oppSpd));
            let ran1 = Random();
            if (kPer >= 0){
                if (ran1 <= 70 + (Math.pow(kPer, .63)) + playerThaiBuff - oppThaiBuff - oppLongBuff + this.getFeinted1()) {
                    console.log(70 + (Math.pow(kPer, .63)) + playerThaiBuff - oppThaiBuff - oppLongBuff + this.getFeinted1())
                    ++hit;
                    sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                }
            }
            else {
                let per1 = Math.abs(kPer);
                if (ran1 <= 70 - (Math.pow(per1, .63)) + playerThaiBuff - oppThaiBuff - oppLongBuff + this.getFeinted1()) {
                    console.log(70 - (Math.pow(per1, .63)) + playerThaiBuff - oppThaiBuff - oppLongBuff + this.getFeinted1())
                    ++hit;
                    sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                }
            }
            sessionStorage.setItem('totalStrikes', parseInt(sessionStorage.getItem('totalStrikes')) + 1);
        }
        else if (att == 'FEINT') {
            let fPer = parseInt(25 + Math.pow(playerPunching, .9));
            let ran = Random();
            if (ran <= fPer) {
                ++hit;
                sessionStorage.setItem('feinted1', 1);
            }
        }
        else if (att == 'TAKEDOWN') {
            let tPer = parseInt(35 + Math.pow(playerWrestling, .75) - Math.pow(oppWrestling, .75) + this.getFeinted1() + playerMmaBuff - oppMmaBuff - oppLowBuff + oppHighNerf + (.8 * (playerSpd - oppSpd)) + (.8 * (playerStr - oppStr)));
            let ran = Random();
            if (tPer < 0) {
            }
            else if (ran <= tPer) {
                ++hit;
                sessionStorage.setItem('takedowns', parseInt(sessionStorage.getItem('takedowns')) + 1);
                this.tookdown1(1);
            }
        }
        else if (att == 'CLINCH'){
            let cPer = (4 * (playerClinch) - 4 * (oppClinch)) + (.8 * (playerSpd - oppSpd));
            for (let i = 0; i < 1; ++i){
                let ran1 = Random();
                if (cPer >= 0){
                    if (ran1 <= 30 + (Math.pow(cPer, .63)) + this.getFeinted1()) {
                        console.log(30 + (Math.pow(cPer, .63)) + this.getFeinted1())
                        ++hit;
                        this.clinched(1);
                    }
                }
                else {
                    let per1 = Math.abs(cPer);
                    if (ran1 <= 30 - (Math.pow(per1, .63)) + this.getFeinted1()) {
                        console.log(30 - (Math.pow(per1, .63)) + this.getFeinted1())
                        ++hit;
                        this.clinched(1);
                    }
                }
            }
        }
        else if (att == 'KNEE') {
            let cPer = parseInt(60 + Math.pow(playerClinch, .9) - Math.pow(oppClinch, .9) + (.8 * (playerSpd - oppSpd)));
            let ran1 = Random();
            if (cPer >= 0){
                if (ran1 <= cPer) {
                    console.log(cPer)
                    ++hit;
                    sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                }
            }
            sessionStorage.setItem('totalStrikes', parseInt(sessionStorage.getItem('totalStrikes')) + 1);
        }
        else if (att == 'ELBOW') {
            let cPer = parseInt(40 + Math.pow(playerClinch, .9) - Math.pow(oppClinch, .9) + (.8 * (playerSpd - oppSpd)));
            let ran1 = Random();
            if (cPer >= 0){
                if (ran1 <= cPer) {
                    console.log(cPer)
                    ++hit;
                    sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                }
            }
            sessionStorage.setItem('totalStrikes', parseInt(sessionStorage.getItem('totalStrikes')) + 1);
        }
        else if (att == 'EXIT') {
            let cPer = parseInt(35 + Math.pow(playerClinch, .9) - Math.pow(oppClinch, .9) + (.8 * (playerSpd - oppSpd)) + (.8 * (playerStr - oppStr)));
            let ran1 = Random();
            if (cPer >= 0){
                if (ran1 <= cPer) {
                    console.log(cPer)
                    ++hit;
                    this.clinched(0);
                }
            }
        }
        else if (att == 'TRIP') {
            let cPer = parseInt(25 + Math.pow(playerClinch, .9) - Math.pow(oppClinch, .9) + (.8 * (playerSpd - oppSpd)) + (.8 * (playerStr - oppStr)));
            let ran1 = Random();
            if (cPer >= 0){
                if (ran1 <= cPer) {
                    console.log(cPer)
                    ++hit;
                    sessionStorage.setItem('takedowns', parseInt(sessionStorage.getItem('takedowns')) + 1);
                    this.clinched(0);
                    this.tookdown1(1);
                }
            }
        }
        else if (att == 'GET UP') {
            this.tookdown1(0);
        }
        else if (att == 'G&P') {
            for (let i = 0; i < 4; ++i) {
                let ran1 = Random();
                if (ran1 <= 80) {
                    ++hit;
                    sessionStorage.setItem('sigStrikes', parseInt(sessionStorage.getItem('sigStrikes')) + 1);
                }
            }
            sessionStorage.setItem('totalStrikes', parseInt(sessionStorage.getItem('totalStrikes')) + 4);
        }
        else if (att == 'SUBMISSIONtop') {
            let sPer = parseInt(15 + Math.pow(playerGrappling, .65) - Math.pow(oppGrappling, .65));
            let ran1 = Random();
            if (sPer <= 0) {
            }
            else if (ran1 <= sPer) {
                ++hit;
                sessionStorage.setItem('win', 1);
                sessionStorage.setItem('sub', 1);
            }
        }
        else if (att == 'ESCAPE') {
            let ePer = 5 + parseInt(30 + Math.pow(playerWrestling, .75) - Math.pow(oppWrestling, .75) + (.8 * (playerSpd - oppSpd)) + (.8 * (playerStr - oppStr)));
            let ran = Random();
            if (ePer < 0) {
            }
            else if (ran <= ePer) {
                ++hit;
                this.tookdown(0);
            }
        }
        else if (att == 'REVERSE') {
            let ePer = parseInt(20 + Math.pow(playerWrestling, .6) - Math.pow(oppWrestling, .6) + (.8 * (playerSpd - oppSpd)) + (.8 * (playerStr - oppStr)));
            let ran = Random();
            if (ePer < 0) {
            }
            else if (ran <= ePer) {
                ++hit;
                this.tookdown1(1);
            }
        }
        else if (att == 'SUBMISSIONbot') {
            let sPer = parseInt(10 + Math.pow(playerGrappling, .55) - Math.pow(oppGrappling, .55));
            let ran1 = Random();
            if (sPer <= 0) {
            }
            else if (ran1 <= sPer) {
                ++hit;
                sessionStorage.setItem('win', 1);
                sessionStorage.setItem('sub', 1);
            }
        }
        if (sessionStorage.getItem('oppStm') <= 0) {
            sessionStorage.setItem('win', 1);
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
        per = (1.5 * (oppPunching) - 1.5 * (playerPunching)) + (.8 * (oppSpd - playerSpd));
        if (att == 'STICK') {
            for (let i = 0; i < 2; ++i) {
                let ran1 = Random();
                if (per >= 0){
                    if (ran1 <= 70 + (Math.pow(per, .63)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted()) {
                        console.log(70 + (Math.pow(per, .63)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted())
                        ++hit;
                    }
                }
                else {
                    let per1 = Math.abs(per);
                    if (ran1 <= 70 - (Math.pow(per1, .63)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted()) {
                        console.log(70 - (Math.pow(per1, .63)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted())
                        ++hit;
                    }
                }
            }
        }
        else if (att == 'BRAWL'){
            for (let i = 0; i < 4; ++i){
                let ran1 = Random();
                if (per >= 0){
                    if (ran1 <= 30 + (Math.pow(per, .63)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted()) {
                        console.log(30 + (Math.pow(per, .63)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted())
                        ++hit;
                    }
                }
                else {
                    let per1 = Math.abs(per);
                    if (ran1 <= 30 - (Math.pow(per1, .63)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted()) {
                        console.log(30 - (Math.pow(per1, .63)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted())
                        ++hit;
                    }
                }
            }
        }
        else if (att == 'POWER'){
            for (let i = 0; i < 4; ++i){
                let ran1 = Random();
                if (per >= 0){
                    if (ran1 <= 20 + (Math.pow(per, .45)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted()) {
                        console.log(20 + (Math.pow(per, .45)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted())
                        ++hit;
                    }
                }
                else {
                    let per1 = Math.abs(per);
                    if (ran1 <= 20 - (Math.pow(per1, .45)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted()) {
                        console.log(20 - (Math.pow(per1, .45)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted())
                        ++hit;
                    }
                }
            }
        }
        else if (att == 'PRESSURE'){
            for (let i = 0; i < 8; ++i){
                let ran1 = Random();
                if (per >= 0){
                    if (ran1 <= 30 + (Math.pow(per, .63)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted()) {
                        console.log(30 + (Math.pow(per, .63)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted())
                        ++hit;
                    }
                }
                else {
                    let per1 = Math.abs(per);
                    if (ran1 <= 30 - (Math.pow(per1, .63)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted()) {
                        console.log(30 - (Math.pow(per1, .63)) + oppBladedBuff - playerBladedBuff - playerHighBuff + playerLongBuff + this.getFeinted())
                        ++hit;
                    }
                }
            }
        }
        else if (att == 'BLITZ'){
            let bPer = ((oppSpd * 2) - (playerSpd + playerPunching));
            for (let i = 0; i < 4; ++i){
                let ran1 = Random();
                if (bPer >= 0){
                    if (ran1 <= 30 + (Math.pow(bPer, .63)) - playerBladedBuff - playerHighBuff + playerLowNerf + playerLongNerf + this.getFeinted()) {
                        console.log(30 + (Math.pow(bPer, .63)) - playerBladedBuff - playerHighBuff + playerLowNerf + playerLongNerf + this.getFeinted())
                        ++hit;
                    }
                }
                else {
                    let bPer1 = Math.abs(bPer);
                    if (ran1 <= 30 - (Math.pow(bPer1, .63)) - playerBladedBuff - playerHighBuff + playerLowNerf + playerLongNerf + this.getFeinted()) {
                        console.log(30 - (Math.pow(bPer1, .63)) - playerBladedBuff - playerHighBuff + playerLowNerf + playerLongNerf + this.getFeinted())
                        ++hit;
                    }
                }
            }
        }
        else if (att == 'LOW KICK'){
            let kPer = (1.5 * (oppKicking) - 1.5 * (playerKicking)) + (.8 * (oppSpd - playerSpd));
            let ran1 = Random();
            if (kPer >= 0){
                if (ran1 <= 70 + (Math.pow(kPer, .63)) + oppThaiBuff - playerThaiBuff - playerLongBuff + this.getFeinted()) {
                    console.log(70 + (Math.pow(kPer, .63)) + oppThaiBuff - playerThaiBuff - playerLongBuff + this.getFeinted())
                    ++hit;
                }
            }
            else {
                let per1 = Math.abs(kPer);
                if (ran1 <= 70 - (Math.pow(per1, .63)) + oppThaiBuff - playerThaiBuff - playerLongBuff + this.getFeinted()) {
                    console.log(70 - (Math.pow(per1, .63)) + oppThaiBuff - playerThaiBuff - playerLongBuff + this.getFeinted())
                    ++hit;
                }
            }
        }
        else if (att == 'FEINT') {
            let fPer = parseInt(25 + Math.pow(oppPunching, .9));
            let ran = Random();
            if (ran <= fPer) {
                ++hit;
                sessionStorage.setItem('feinted', 1);
            }
        }
        else if (att == 'TAKEDOWN') {
            let tPer = parseInt(35 + Math.pow(oppWrestling, .75) - Math.pow(playerWrestling, .75) + this.getFeinted() - playerMmaBuff + oppMmaBuff + playerHighNerf - playerLowBuff + (.8 * (oppSpd - playerSpd)) + (.8 * (oppStr - playerStr)));
            let ran = Random();
            if (tPer < 0) {
            }
            else if (ran <= tPer) {
                ++hit;
                sessionStorage.setItem('takedownsSuccess', parseInt(sessionStorage.getItem('takedownsSuccess')) + 1);
                this.tookdown(1);
            }
            sessionStorage.setItem('takedownsTried', parseInt(sessionStorage.getItem('takedownsTried')) + 1);
        }
        else if (att == 'CLINCH'){
            let cPer = (4 * (oppClinch) - 4 * (playerClinch)) + (.8 * (oppSpd - playerSpd));
            for (let i = 0; i < 1; ++i){
                let ran1 = Random();
                if (cPer >= 0){
                    if (ran1 <= 30 + (Math.pow(cPer, .63)) + this.getFeinted()) {
                        console.log(30 + (Math.pow(cPer, .63)) + this.getFeinted())
                        ++hit;
                        this.clinched(1);
                    }
                }
                else {
                    let per1 = Math.abs(cPer);
                    if (ran1 <= 30 - (Math.pow(per1, .63)) + this.getFeinted()) {
                        console.log(30 - (Math.pow(per1, .63)) + this.getFeinted())
                        ++hit;
                        this.clinched(1);
                    }
                }
            }
        }
        else if (att == 'KNEE') {
            let cPer = parseInt(60 + Math.pow(oppClinch, .9) - Math.pow(playerClinch, .9) + (.8 * (oppSpd - playerSpd)));
            let ran1 = Random();
            if (cPer >= 0){
                if (ran1 <= cPer) {
                    console.log(cPer)
                    ++hit;
                }
            }
        }
        else if (att == 'ELBOW') {
            let cPer = parseInt(40 + Math.pow(oppClinch, .9) - Math.pow(playerClinch, .9) + (.8 * (oppSpd - playerSpd)));
            let ran1 = Random();
            if (cPer >= 0){
                if (ran1 <= cPer) {
                    console.log(cPer)
                    ++hit;
                }
            }
        }
        else if (att == 'EXIT') {
            let cPer = parseInt(35 + Math.pow(oppClinch, .9) - Math.pow(playerClinch, .9) + (.8 * (oppSpd - playerSpd)) + (.8 * (oppStr - playerStr)));
            let ran1 = Random();
            if (cPer >= 0){
                if (ran1 <= cPer) {
                    console.log(cPer)
                    ++hit;
                    this.clinched(0);
                }
            }
        }
        else if (att == 'TRIP') {
            let cPer = parseInt(25 + Math.pow(oppClinch, .9) - Math.pow(playerClinch, .9) + (.8 * (oppSpd - playerSpd)) + (.8 * (oppStr - playerStr)));
            let ran1 = Random();
            if (cPer >= 0){
                if (ran1 <= cPer) {
                    console.log(cPer)
                    ++hit;
                    sessionStorage.setItem('takedownsSuccess', parseInt(sessionStorage.getItem('takedownsSuccess')) + 1);
                    this.clinched(0);
                    this.tookdown(1);
                }
            }
        }
        else if (att == 'GET UP') {
            this.tookdown(0);
        }
        else if (att == 'G&P') {
            for (let i = 0; i < 4; ++i) {
                let ran1 = Random();
                if (ran1 <= 80) {
                    ++hit;
                }
            }
        }
        else if (att == 'SUBMISSIONtop') {
            let sPer = parseInt(15 + Math.pow(oppGrappling, .65) - Math.pow(playerGrappling, .65));
            let ran1 = Random();
            if (sPer <= 0) {
            }
            else if (ran1 <= sPer) {
                ++hit;
                sessionStorage.setItem('win1', 1);
                sessionStorage.setItem('sub', 1);
            }
        }
        else if (att == 'ESCAPE') {
            let ePer = parseInt(35 + Math.pow(oppWrestling, .75) - Math.pow(playerWrestling, .75) + (.8 * (oppSpd - playerSpd)) + (.8 * (oppStr - playerStr)));
            let ran = Random();
            if (ePer < 0) {
            }
            else if (ran <= ePer) {
                ++hit;
                this.tookdown1(0);
            }
        }
        else if (att == 'REVERSE') {
            let ePer = parseInt(20 + Math.pow(oppWrestling, .6) - Math.pow(playerWrestling, .6) + (.8 * (oppSpd - playerSpd)) + (.8 * (oppStr - playerStr)));
            let ran = Random();
            if (ePer < 0) {
            }
            else if (ran <= ePer) {
                ++hit;
                this.tookdown(1);
            }
        }
        else if (att == 'SUBMISSIONbot') {
            let sPer = parseInt(10 + Math.pow(oppGrappling, .55) - Math.pow(playerGrappling, .55));
            let ran1 = Random();
            if (sPer <= 0) {
            }
            else if (ran1 <= sPer) {
                ++hit;
                sessionStorage.setItem('win1', 1);
                sessionStorage.setItem('sub', 1);
            }
        }
        if (sessionStorage.getItem('playerStm') <= 0) {
            sessionStorage.setItem('win1', 1);
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
        let kd = 0;

        if (att == 'POWER'){
            let koChance = playerStr / 12;
            let kdChance = (playerStr / 6) + koChance;
            console.log('koChance: ' + koChance)
            console.log('kdChance: ' + kdChance)
            for (let i = 0; i < hit; ++i){
                let ran1 = Random();
                if (ran1 <= koChance) {
                    dmg += 1000;
                    kd = 2;
                }
                else if (ran1 <= kdChance) {
                    dmg += 200;
                    kd = 1;
                }
                else {
                    dmg += ((playerStr / 2.5) + 20 + playerBladedBuff + oppReactNerf);
                }
            }
        }
        else if (att == 'STICK'){
            dmg = hit * (((playerStr - 50) / 10) + 10 + playerBladedBuff + oppReactNerf);
        }
        else if (att == 'LOW KICK') {
            dmg = hit * (((playerStr - 50) / 10) + 10 + playerThaiBuff + oppReactNerf);

            let kicking = parseInt(sessionStorage.getItem('playerKicking'));
            let thai = (playerThaiBuff > 0) ? 1.2 : 1;

            if (hit > 0) {
                sessionStorage.setItem('oppSpeed', parseInt(sessionStorage.getItem('oppSpeed')) - (parseInt(sessionStorage.getItem('oppSpeed')) <= 0 ? 0 : Math.pow(kicking / 5, .63) * thai));
                (parseInt(sessionStorage.getItem('oppSpeed')) < 0 ? sessionStorage.setItem('oppSpeed', 0) : sessionStorage.setItem('oppSpeed', parseInt(sessionStorage.getItem('oppSpeed'))));
            }
        }
        else if (att == 'KNEE') {
            dmg = hit * (((playerStr - 50) / 10) + 15);
        }
        else if (att == 'ELBOW') {
            dmg = hit * (((playerStr - 50) / 5) + 30);
        }
        else if (att == 'G&P') {
            let koChance = playerStr / 20;
            console.log('koChance: ' + koChance)
            let ran1 = Random();
            for (let i = 0; i < hit; ++i){
                if (ran1 <= koChance) {
                    dmg += 1000;
                }
                else {
                    dmg += (((playerStr - 50) / 10) + 10);
                }
            }
        }
        else if (att == 'x') {
            dmg = '';
        }
        else {
            let koChance = playerStr / 35;
            let kdChance = (playerStr / 12) + koChance;
            console.log('koChance: ' + koChance)
            console.log('kdChance: ' + kdChance)
            for (let i = 0; i < hit; ++i){
                let ran1 = Random();
                if (ran1 <= koChance) {
                    dmg += 1000;
                    kd = 2;
                }
                else if (ran1 <= kdChance) {
                    dmg += 200;
                    kd = 1;
                }
                else {
                    dmg += (((playerStr - 50) / 5) + 20 + playerBladedBuff + oppReactNerf);
                }
            }
        }

        if (dmg != '') {
            sessionStorage.setItem('oppStatus', parseInt(sessionStorage.getItem('oppStatus')) - dmg);
        }
        console.log('COUNTERING: ' + sessionStorage.getItem('countering'))
        sessionStorage.setItem('feinted1', 0);

        if (!isNaN(dmg)) {
            sessionStorage.setItem('totalDmg', parseInt(sessionStorage.getItem('totalDmg')) + dmg)
        }

        if (kd == 1) {
            if (sessionStorage.getItem('oppStatus') <= 0) {
                sessionStorage.setItem('win', 1);
                sessionStorage.setItem('ko', 1);
                return 'KNOCKOUT! ' + dmg;
            }
            else {
                sessionStorage.setItem('knockdowns', parseInt(sessionStorage.getItem('knockdowns')) + 1);
                this.tookdown1(1);
                return 'KNOCKDOWN! ' + dmg;
            }
        }
        else if (kd == 2) {
            sessionStorage.setItem('win', 1);
            sessionStorage.setItem('ko', 1);
            return 'KNOCKOUT! ' + dmg;
        }
        else if (sessionStorage.getItem('oppStatus') <= 0) {
            sessionStorage.setItem('win', 1);
            sessionStorage.setItem('tko', 1);
            return 'TKO! ' + dmg;
        }
        else if (sessionStorage.getItem('oppStm') <= 0) {
            sessionStorage.setItem('tko', 1);
            return 'TKO! ' + dmg;
        }
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
        let kd = 0;

        if (att == 'POWER'){
            let koChance = oppStr / 12;
            let kdChance = (oppStr / 6) + koChance;
            for (let i = 0; i < hit; ++i){
                let ran1 = Random();
                if (ran1 <= koChance) {
                    dmg += 1000;
                    kd = 2;
                }
                else if (ran1 <= kdChance) {
                    dmg += 200;
                    kd = 1;
                }
                else {
                    dmg += ((oppStr / 2.5) + 20 + oppBladedBuff + playerReactNerf);
                }
            }
        }
        else if (att == 'STICK'){
            dmg = hit * (((oppStr - 50) / 10) + 10 + oppBladedBuff + playerReactNerf);
        }
        else if (att == 'LOW KICK') {
            dmg = hit * (((oppStr - 50) / 10) + 10 + oppThaiBuff + playerReactNerf);

            let kicking = parseInt(sessionStorage.getItem('oppKicking'));
            let thai = (oppThaiBuff > 0) ? 1.2 : 1;

            if (hit > 0) {
                sessionStorage.setItem('playerSpeed', parseInt(sessionStorage.getItem('playerSpeed')) - (parseInt(sessionStorage.getItem('playerSpeed')) <= 0 ? 0 : Math.pow(kicking / 5, .63) * thai));
                (parseInt(sessionStorage.getItem('playerSpeed')) < 0 ? sessionStorage.setItem('playerSpeed', 0) : sessionStorage.setItem('playerSpeed', parseInt(sessionStorage.getItem('playerSpeed'))));
            }
        }
        else if (att == 'KNEE') {
            dmg = hit * (((oppStr - 50) / 10) + 15);
        }
        else if (att == 'ELBOW') {
            dmg = hit * (((oppStr - 50) / 5) + 30);
        }
        else if (att == 'G&P') {
            let koChance = oppStr / 20;
            let ran1 = Random();
            for (let i = 0; i < hit; ++i){
                if (ran1 <= koChance) {
                    dmg += 1000;
                }
                else {
                    dmg += (((oppStr - 50) / 10) + 10);
                }
            }
        }
        else if (att == 'x') {
            dmg = '';
        }
        else {
            let koChance = playerStr / 35;
            let kdChance = (playerStr / 12) + koChance;
            for (let i = 0; i < hit; ++i){
                let ran1 = Random();
                if (ran1 <= koChance) {
                    dmg += 1000;
                    kd = 2;
                }
                else if (ran1 <= kdChance) {
                    dmg += 200;
                    kd = 1;
                }
                else {
                    dmg += (((oppStr - 50) / 5) + 20 + oppBladedBuff + playerReactNerf);
                }
            }
        }

        if (dmg != '') {
            sessionStorage.setItem('playerStatus', parseInt(sessionStorage.getItem('playerStatus')) - dmg);
        }
        console.log('COUNTERING1: ' + sessionStorage.getItem('countering1'))
        sessionStorage.setItem('feinted', 0);

        if (!isNaN(dmg)) {
            sessionStorage.setItem('totalDmg1', parseInt(sessionStorage.getItem('totalDmg1')) + dmg)
        }

        if (kd == 1) {
            if (sessionStorage.getItem('playerStatus') <= 0) {
                sessionStorage.setItem('win1', 1);
                sessionStorage.setItem('ko', 1);
                return 'KNOCKOUT! ' + dmg;
            }
            else {
                this.tookdown(1);
                return 'KNOCKDOWN! ' + dmg;
            }
        }
        if (kd == 2) {
            sessionStorage.setItem('win1', 1);
            sessionStorage.setItem('ko', 1);
            return 'KNOCKOUT! ' + dmg;
        }
        else if (sessionStorage.getItem('playerStatus') <= 0) {
            sessionStorage.setItem('win1', 1);
            sessionStorage.setItem('tko', 1);
            return 'TKO! ' + dmg;
        }
        else if (sessionStorage.getItem('playerStm') <= 0) {
            sessionStorage.setItem('tko', 1);
            return 'TKO! ' + dmg;
        }
        return dmg;
    }

    counterCalc(re, att) {
        let per = Math.pow(parseInt(sessionStorage.getItem('oppPunching')), .75);
        let ctr = 0;

        if (parseInt(sessionStorage.getItem('reactNerf1')) == 0){
            return 0;
        }
        else {
            if (att == 'BRAWL' || att == 'PRESSURE' || att == 'POWER' || att == 'LOW KICK' || att == 'CLINCH' || att == 'TAKEDOWN') {
                for (let i = 0; i < re; ++i) {
                    let ran = Random();
                    if (ran <= per) {
                        ++ctr;
                    }
                }
            }
            if (ctr > 0) {
                sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm')) - (ctr + 2));
            }
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
            if (att == 'BRAWL' || att == 'PRESSURE' || att == 'POWER' || att == 'LOW KICK' || att == 'CLINCH' || att == 'TAKEDOWN') {
                for (let i = 0; i < re; ++i) {
                    let ran = Random();
                    if (ran <= per) {
                        ++ctr;
                    }
                }
            }
            if (ctr > 0) {
                sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - (ctr + 2));
            }
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
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 6));
            return 'THROWS 4 STRIKES';
        }
        else if (att == 'BLITZ') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 8));
            return 'BLITZES IN WITH 4 STRIKES';
        }
        else if (att == 'PRESSURE') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 12));
            return 'THROWS 8 STRIKES';
        }
        else if (att == 'POWER') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 16));
            return 'THROWS 4 HEAVY STRIKES';
        }
        else if (att == 'FEINT') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 1));
            return 'FEINTS A STRIKE';
        }
        else if (att == 'LOW KICK') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 4));
            return 'THROWS A LOW KICK';
        }
        else if (att == 'CLINCH') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 4));
            return 'ATTEMPTS TO CLINCH';
        }
        else if (att == 'TAKEDOWN') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 12));
            return 'ATTEMPTS A TAKEDOWN';
        }
        else if (att == 'STALL') {
            return 'DOES NOTHING';
        }
        else if (att == 'ESCAPE') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 6));
            return 'ATTEMPTS TO STAND UP';
        }
        else if (att == 'REVERSE') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 10));
            return 'ATTEMPTS A REVERSAL';
        }
        else if (att == 'SUBMISSIONbot') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 10));
            return 'ATTEMPTS A SUBMISSION FROM BOTTOM';
        }
        else if (att == 'GET UP') {
            return 'LETS PLAYER UP';
        }
        else if (att == 'G&P') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 4));
            return 'THROWS 4 GROUND & POUND';
        }
        else if (att == 'SUBMISSIONtop') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 10));
            return 'ATTEMPTS A SUBMISSION FROM TOP';
        }
        else if (att == 'KNEE') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 2));
            return 'THROWS A KNEE';
        }
        else if (att == 'ELBOW') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 4));
            return 'THROWS AN ELBOW';
        }
        else if (att == 'EXIT') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 4));
            return 'ATTEMPTS TO EXIT CLINCH';
        }
        else if (att == 'TRIP') {
            sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm') - 6));
            return 'ATTEMPTS A TRIP';
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
        if (sessionStorage.getItem('tookdown1') == 1) {
            sessionStorage.setItem('control', parseInt(sessionStorage.getItem('control')) + 1);
        }

        let arr = new Array(4);
        let ran = Random();
        let hit = 0;
        let ctr = 0;
        let dmg = '';
        if (sessionStorage.getItem('win') == 1) {
            arr[0] = '';
            arr[1] = '';
            arr[2] = '';
            arr[3] = '';
        }
        else if (this.pos() == 0) {
            if (parseInt(sessionStorage.getItem('oppStm') <= 70)){
                if (ran >= 50) {
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
                else if (ran >= 30) {
                    arr[0] = sessionStorage.getItem('oppAtt1');
                    if (arr[0] == 'TAKEDOWN') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                    else if (arr[0] == 'CLINCH') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                    else if (arr[0] == 'FEINT') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        if (sessionStorage.getItem('playerStm') <= 0) {
                            sessionStorage.setItem('tko', 1);
                            if (hit > 0) {
                                arr[2] = 'SUCCESSFUL! TKO!';
                            }
                            else {
                                arr[2] = 'FAILED! TKO!';
                            }
                        }
                        else {
                            if (hit > 0) {
                                arr[2] = 'SUCCESSFUL!';
                            }
                            else {
                                arr[2] = 'FAILED!';
                            }
                        }
                        arr[3] = '';
                        console.log(arr[0])
                    }
                    else {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        arr[2] = hit + '/' + this.getOppHitMax(arr[0]) + ' HIT, ' + this.getDamage1(hit, arr[0]) + ' DMG' + this.getKicked1(hit, 1);
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                }
                else if (ran >= 10) {
                    arr[0] = sessionStorage.getItem('oppAtt2');
                    if (arr[0] == 'TAKEDOWN') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                    else if (arr[0] == 'CLINCH') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                    else if (arr[0] == 'FEINT') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        if (sessionStorage.getItem('playerStm') <= 0) {
                            sessionStorage.setItem('tko', 1);
                            if (hit > 0) {
                                arr[2] = 'SUCCESSFUL! TKO!';
                            }
                            else {
                                arr[2] = 'FAILED! TKO!';
                            }
                        }
                        else {
                            if (hit > 0) {
                                arr[2] = 'SUCCESSFUL!';
                            }
                            else {
                                arr[2] = 'FAILED!';
                            }
                        }
                        arr[3] = '';
                        console.log(arr[0])
                    }
                    else {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        arr[2] = hit + '/' + this.getOppHitMax(arr[0]) + ' HIT, ' + this.getDamage1(hit, arr[0]) + ' DMG' + this.getKicked1(hit, 2);
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                }
                else {
                    arr[0] = sessionStorage.getItem('oppAtt3');
                    if (arr[0] == 'TAKEDOWN') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                    else if (arr[0] == 'CLINCH') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                    else if (arr[0] == 'FEINT') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        if (sessionStorage.getItem('playerStm') <= 0) {
                            sessionStorage.setItem('tko', 1);
                            if (hit > 0) {
                                arr[2] = 'SUCCESSFUL! TKO!';
                            }
                            else {
                                arr[2] = 'FAILED! TKO!';
                            }
                        }
                        else {
                            if (hit > 0) {
                                arr[2] = 'SUCCESSFUL!';
                            }
                            else {
                                arr[2] = 'FAILED!';
                            }
                        }
                        arr[3] = '';
                        console.log(arr[0])
                    }
                    else {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        arr[2] = hit + '/' + this.getOppHitMax(arr[0]) + ' HIT, ' + this.getDamage1(hit, arr[0]) + ' DMG' + this.getKicked1(hit, 3);
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                }
            }
            else {
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
                    if (arr[0] == 'TAKEDOWN') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                    else if (arr[0] == 'FEINT') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        if (sessionStorage.getItem('playerStm') <= 0) {
                            sessionStorage.setItem('tko', 1);
                            if (hit > 0) {
                                arr[2] = 'SUCCESSFUL! TKO!';
                            }
                            else {
                                arr[2] = 'FAILED! TKO!';
                            }
                        }
                        else {
                            if (hit > 0) {
                                arr[2] = 'SUCCESSFUL!';
                            }
                            else {
                                arr[2] = 'FAILED!';
                            }
                        }
                        arr[3] = '';
                        console.log(arr[0])
                    }
                    else {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        arr[2] = hit + '/' + this.getOppHitMax(arr[0]) + ' HIT, ' + this.getDamage1(hit, arr[0]) + ' DMG' + this.getKicked1(hit, 1);
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                }
                else if (ran >= 20) {
                    arr[0] = sessionStorage.getItem('oppAtt2');
                    if (arr[0] == 'TAKEDOWN') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                    else if (arr[0] == 'FEINT') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        if (sessionStorage.getItem('playerStm') <= 0) {
                            sessionStorage.setItem('tko', 1);
                            if (hit > 0) {
                                arr[2] = 'SUCCESSFUL! TKO!';
                            }
                            else {
                                arr[2] = 'FAILED! TKO!';
                            }
                        }
                        else {
                            if (hit > 0) {
                                arr[2] = 'SUCCESSFUL!';
                            }
                            else {
                                arr[2] = 'FAILED!';
                            }
                        }
                        arr[3] = '';
                        console.log(arr[0])
                    }
                    else {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        arr[2] = hit + '/' + this.getOppHitMax(arr[0]) + ' HIT, ' + this.getDamage1(hit, arr[0]) + ' DMG' + this.getKicked1(hit, 2);
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                }
                else {
                    arr[0] = sessionStorage.getItem('oppAtt3');
                    if (arr[0] == 'TAKEDOWN') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                    else if (arr[0] == 'FEINT') {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        if (sessionStorage.getItem('playerStm') <= 0) {
                            sessionStorage.setItem('tko', 1);
                            if (hit > 0) {
                                arr[2] = 'SUCCESSFUL! TKO!';
                            }
                            else {
                                arr[2] = 'FAILED! TKO!';
                            }
                        }
                        else {
                            if (hit > 0) {
                                arr[2] = 'SUCCESSFUL!';
                            }
                            else {
                                arr[2] = 'FAILED!';
                            }
                        }
                        arr[3] = '';
                        console.log(arr[0])
                    }
                    else {
                        arr[1] = this.getOppMsg1(arr[0]);
                        hit = this.getHit1(arr[0]);
                        arr[2] = hit + '/' + this.getOppHitMax(arr[0]) + ' HIT, ' + this.getDamage1(hit, arr[0]) + ' DMG' + this.getKicked1(hit, 3);
                        ctr = this.counterCalc1(this.getOppHitMax(arr[0]) - hit, arr[0]);
                        if (ctr > 0) {
                            arr[3] = this.counterInfo(ctr, this.getDamage(ctr, arr[0]));
                        }
                        else {
                            arr[3] = '';
                        }
                        console.log(arr[0])
                    }
                }
            }
        }
        else if (this.pos() == 1) {
            if (parseInt(sessionStorage.getItem('oppStm') <= 70)){
                if (ran >= 50) {
                    arr[0] = 'KNEE';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('KNEE');
                    arr[2] = hit + '/1 HIT, ' + this.getDamage1(hit, 'KNEE') + ' DMG';
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 35) {
                    arr[0] = 'ELBOW';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('ELBOW');
                    arr[2] = hit + '/1 HIT, ' + this.getDamage1(hit, 'ELBOW') + ' DMG';
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 10) {
                    arr[0] = 'EXIT';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('EXIT');
                    dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                    arr[3] = '';
                    console.log(arr[0])
                }
                else {
                    arr[0] = 'TRIP';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('TRIP');
                    dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                    arr[3] = '';
                    console.log(arr[0])
                }
            }
            else if (parseInt(sessionStorage.getItem('oppPunching')) > parseInt(sessionStorage.getItem('oppWrestling')) || parseInt(sessionStorage.getItem('oppKicking')) > parseInt(sessionStorage.getItem('oppWrestling')) || parseInt(sessionStorage.getItem('oppClinch')) > parseInt(sessionStorage.getItem('oppWrestling'))) {
                if (ran >= 70) {
                    arr[0] = 'KNEE';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('KNEE');
                    arr[2] = hit + '/1 HIT, ' + this.getDamage1(hit, 'KNEE') + ' DMG';
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 40) {
                    arr[0] = 'ELBOW';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('ELBOW');
                    arr[2] = hit + '/1 HIT, ' + this.getDamage1(hit, 'ELBOW') + ' DMG';
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 10) {
                    arr[0] = 'EXIT';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('EXIT');
                    dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                    arr[3] = '';
                    console.log(arr[0])
                }
                else {
                    arr[0] = 'TRIP';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('TRIP');
                    dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                    arr[3] = '';
                    console.log(arr[0])
                }
            }
            else {
                if (ran >= 65) {
                    arr[0] = 'KNEE';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('KNEE');
                    arr[2] = hit + '/1 HIT, ' + this.getDamage1(hit, 'KNEE') + ' DMG';
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 45) {
                    arr[0] = 'ELBOW';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('ELBOW');
                    arr[2] = hit + '/1 HIT, ' + this.getDamage1(hit, 'ELBOW') + ' DMG';
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 35) {
                    arr[0] = 'EXIT';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('EXIT');
                    dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                    arr[3] = '';
                    console.log(arr[0])
                }
                else {
                    arr[0] = 'TRIP';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('TRIP');
                    dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                    arr[3] = '';
                    console.log(arr[0])
                }
            }
        }
        else if (this.pos() == 2) {
            if (parseInt(sessionStorage.getItem('oppStm') <= 70)){
                if (ran >= 50) {
                    arr[0] = 'STALL';
                    arr[1] = this.getOppMsg1(arr[0]);
                    dmg = this.getDamage1(0, 'x');
                    arr[2] = dmg;
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 45) {
                    arr[0] = 'GET UP';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('GET UP');
                    dmg = this.getDamage1(0, 'x');
                    arr[2] = dmg;
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 15) {
                    arr[0] = 'G&P';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('G&P');
                    arr[2] =  hit + '/4 HIT, ' + this.getDamage1(hit, 'G&P') + ' DMG';
                    arr[3] = '';
                    console.log(arr[0])
                }
                else {
                    arr[0] = 'SUBMISSIONtop';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('SUBMISSIONtop');
                    dmg = this.getDamage1(0, 'x');
                    if (hit > 0) {
                        arr[2] = 'SUCCESSFUL!';
                        sessionStorage.setItem('win1', 1);
                    }
                    else {
                        arr[2] = 'FAILED! ' + dmg;
                    }
                    arr[3] = '';
                    console.log(arr[0])
                }
            }
            else if (parseInt(sessionStorage.getItem('oppPunching')) > parseInt(sessionStorage.getItem('oppWrestling')) || parseInt(sessionStorage.getItem('oppKicking')) > parseInt(sessionStorage.getItem('oppWrestling'))) {
                if (ran >= 95) {
                    arr[0] = 'STALL';
                    arr[1] = this.getOppMsg1(arr[0]);
                    dmg = this.getDamage1(0, 'x');
                    arr[2] = dmg;
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 35) {
                    arr[0] = 'GET UP';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('GET UP');
                    dmg = this.getDamage1(0, 'x');
                    arr[2] = dmg;
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 15) {
                    arr[0] = 'G&P';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('G&P');
                    arr[2] =  hit + '/4 HIT, ' + this.getDamage1(hit, 'G&P') + ' DMG';
                    arr[3] = '';
                    console.log(arr[0])
                }
                else {
                    arr[0] = 'SUBMISSIONtop';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('SUBMISSIONtop');
                    dmg = this.getDamage1(0, 'x');
                    if (hit > 0) {
                        arr[2] = 'SUCCESSFUL!';
                        sessionStorage.setItem('win1', 1);
                    }
                    else {
                        arr[2] = 'FAILED! ' + dmg;
                    }
                    arr[3] = '';
                    console.log(arr[0])
                }
            }
            else {
                if (ran >= 90) {
                    arr[0] = 'STALL';
                    arr[1] = this.getOppMsg1(arr[0]);
                    dmg = this.getDamage1(0, 'x');
                    arr[2] = dmg;
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 85) {
                    arr[0] = 'GET UP';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('GET UP');
                    dmg = this.getDamage1(0, 'x');
                    arr[2] = dmg;
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 25) {
                    arr[0] = 'G&P';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('G&P');
                    arr[2] =  hit + '/4 HIT, ' + this.getDamage1(hit, 'G&P') + ' DMG';
                    arr[3] = '';
                    console.log(arr[0])
                }
                else {
                    arr[0] = 'SUBMISSIONtop';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('SUBMISSIONtop');
                    dmg = this.getDamage1(0, 'x');
                    if (hit > 0) {
                        arr[2] = 'SUCCESSFUL!';
                        sessionStorage.setItem('win1', 1);
                    }
                    else {
                        arr[2] = 'FAILED! ' + dmg;
                    }
                    arr[3] = '';
                    console.log(arr[0])
                }
            }
        }
        else if (this.pos() == 3) {
            if (parseInt(sessionStorage.getItem('oppStm') <= 70)){
                if (ran >= 70) {
                    arr[0] = 'STALL';
                    arr[1] = this.getOppMsg1(arr[0]);
                    dmg = this.getDamage1(0, 'x');
                    arr[2] = dmg;
                    arr[3] = '';
                    console.log(arr[0])
                    sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm')) - 2);
                }
                else if (ran >= 35) {
                    arr[0] = 'ESCAPE';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('ESCAPE');
                    dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 15) {
                    arr[0] = 'REVERSE';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('REVERSE');
                    dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                    arr[3] = '';
                    console.log(arr[0])
                }
                else {
                    arr[0] = 'SUBMISSIONbot';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('SUBMISSIONbot');
                    dmg = this.getDamage1(0, 'x');
                    if (hit > 0) {
                        arr[2] = 'SUCCESSFUL!';
                        sessionStorage.setItem('win1', 1);
                    }
                    else {
                        arr[2] = 'FAILED! ' + dmg;
                    }
                    arr[3] = '';
                    console.log(arr[0])
                }
            }
            else if (parseInt(sessionStorage.getItem('oppPunching')) > parseInt(sessionStorage.getItem('oppWrestling')) || parseInt(sessionStorage.getItem('oppKicking')) > parseInt(sessionStorage.getItem('oppWrestling'))) {
                if (ran >= 95) {
                    arr[0] = 'STALL';
                    arr[1] = this.getOppMsg1(arr[0]);
                    dmg = this.getDamage1(0, 'x');
                    arr[2] = dmg;
                    arr[3] = '';
                    console.log(arr[0])
                    sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm')) - 2);
                }
                else if (ran >= 35) {
                    arr[0] = 'ESCAPE';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('ESCAPE');
                    dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 15) {
                    arr[0] = 'REVERSE';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('REVERSE');
                    dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                    arr[3] = '';
                    console.log(arr[0])
                }
                else {
                    arr[0] = 'SUBMISSIONbot';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('SUBMISSIONbot');
                    dmg = this.getDamage1(0, 'x');
                    if (hit > 0) {
                        arr[2] = 'SUCCESSFUL!';
                        sessionStorage.setItem('win1', 1);
                    }
                    else {
                        arr[2] = 'FAILED! ' + dmg;
                    }
                    arr[3] = '';
                    console.log(arr[0])
                }
            }
            else {
                if (ran >= 90) {
                    arr[0] = 'STALL';
                    arr[1] = this.getOppMsg1(arr[0]);
                    dmg = this.getDamage1(0, 'x');
                    arr[2] = dmg;
                    arr[3] = '';
                    console.log(arr[0])
                    sessionStorage.setItem('oppStm', parseInt(sessionStorage.getItem('oppStm')) - 2);
                }
                else if (ran >= 55) {
                    arr[0] = 'ESCAPE';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('ESCAPE');
                    dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                    arr[3] = '';
                    console.log(arr[0])
                }
                else if (ran >= 25) {
                    arr[0] = 'REVERSE';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('REVERSE');
                    dmg = this.getDamage1(0, 'x');
                        if (hit > 0) {
                            arr[2] = 'SUCCESSFUL! ' + dmg;
                        }
                        else {
                            arr[2] = 'FAILED! ' + dmg;
                        }
                    arr[3] = '';
                    console.log(arr[0])
                }
                else {
                    arr[0] = 'SUBMISSIONbot';
                    arr[1] = this.getOppMsg1(arr[0]);
                    hit = this.getHit1('SUBMISSIONbot');
                    dmg = this.getDamage1(0, 'x');
                    if (hit > 0) {
                        arr[2] = 'SUCCESSFUL!';
                        sessionStorage.setItem('win1', 1);
                    }
                    else {
                        arr[2] = 'FAILED! ' + dmg;
                    }
                    arr[3] = '';
                    console.log(arr[0])
                }
            }
        }
        console.log('hit: ' + hit)
        console.log('hitMax: ' + this.getOppHitMax(arr[0]))
        console.log('ctr: ' + ctr)
        console.log('ctrInfo: ' + arr[3])
        return arr;
    }

    getKicked(hit) {
        if (hit > 0) {
            return ', OPPONENT SPEED REDUCED';
        }
        else {
            return '';
        }
    }

    getKicked1(hit, num) {
        if (num == 1 && sessionStorage.getItem('oppAtt1') == 'LOW KICK') {
            if (hit > 0) {
                return ', PLAYER SPEED REDUCED';
            }
            else {
                return '';
            }
        }
        else if (num == 2 && sessionStorage.getItem('oppAtt2') == 'LOW KICK') {
            if (hit > 0) {
                return ', PLAYER SPEED REDUCED';
            }
            else {
                return '';
            }
        }
        else if (num == 3 && sessionStorage.getItem('oppAtt3') == 'LOW KICK') {
            if (hit > 0) {
                return ', PLAYER SPEED REDUCED';
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    }
    
    mover1 = (event) => {
        if (sessionStorage.getItem('win') == 1 || sessionStorage.getItem('win1') == 1 || sessionStorage.getItem('bell') == 1) {
            return;
        }
        
        if (sessionStorage.getItem('tookdown') == 1) {
            sessionStorage.setItem('control1', parseInt(sessionStorage.getItem('control1')) + 1);
        }

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

        if (this.pos() == 1){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);

            hit = this.getHit('ELBOW');
            dmg = this.getDamage(hit, 'ELBOW');

            name = last;
            msg = 'THROWS AN ELBOW';
            info = hit + '/1 HIT, ' + dmg + ' DMG';
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (this.pos() == 2){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 6);

            hit = this.getHit('ESCAPE');
            dmg = this.getDamage(0, 'x');

            name = last;
            msg = 'ATTEMPTS TO STAND UP';
            if (hit > 0) {
                info = 'SUCCESSFUL! ' + dmg;
            }
            else {
                info = 'FAILED! ' + dmg;
            }
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (this.pos() == 3){
            hit = this.getHit('GET UP');
            dmg = this.getDamage(0, 'x');

            name = last;
            msg = 'LETS OPPONENT UP ' + dmg;
            info = dmg;
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att1') == 'BRAWL'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 6);

            hit = this.getHit('BRAWL');
            dmg = this.getDamage(hit, 'BRAWL');
            ctr = this.counterCalc(4 - hit, 'BRAWL');
            ctrDmg = this.getDamage1(ctr, 'BRAWL');

            name = last;
            msg = 'THROWS 4 STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att1') == 'BLITZ'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 8);
            
            hit = this.getHit('BLITZ');
            dmg = this.getDamage(hit, 'BLITZ');

            name = last;
            msg = 'BLITZES IN WITH 4 STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att1') == 'PRESSURE'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 12);
            
            hit = this.getHit('PRESSURE');
            dmg = this.getDamage(hit, 'PRESSURE');
            ctr = this.counterCalc(8 - hit, 'PRESSURE');
            ctrDmg = this.getDamage1(ctr, 'PRESSURE');
            
            name = last;
            msg = 'THROWS 8 STRIKES';
            info = hit + '/8 HIT, ' + dmg + ' DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att1') == 'POWER'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 16);
            
            hit = this.getHit('POWER');
            dmg = this.getDamage(hit, 'POWER');
            ctr = this.counterCalc(4 - hit, 'POWER');
            ctrDmg = this.getDamage1(ctr, 'POWER');

            name = last;
            msg = 'THROWS 4 HEAVY STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att1') == 'FEINT'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 1);
            
            hit = this.getHit('FEINT');

            name = last;
            msg = 'FEINTS A STRIKE';
            if (sessionStorage.getItem('oppStm') <= 0) {
                sessionStorage.setItem('tko', 1);
                if (hit > 0) {
                    info = 'SUCCESSFUL! TKO!';
                }
                else {
                    info = 'FAILED! TKO!';
                }
            }
            else {
                if (hit > 0) {
                    info = 'SUCCESSFUL!';
                }
                else {
                    info = 'FAILED!';
                }
            }
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att1') == 'LOW KICK'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);

            hit = this.getHit('LOW KICK');
            dmg = this.getDamage(hit, 'LOW KICK');
            ctr = this.counterCalc(1 - hit, 'LOW KICK');
            ctrDmg = this.getDamage1(ctr, 'LOW KICK');
            
            name = last;
            msg = 'THROWS A LOW KICK';
            info = hit + '/1 HIT, ' + dmg + ' DMG' + this.getKicked(hit);
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att1') == 'TAKEDOWN'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 12);
            
            hit = this.getHit('TAKEDOWN');
            dmg = this.getDamage(0, 'x');
            ctr = this.counterCalc(1 - hit, 'TAKEDOWN');
            ctrDmg = this.getDamage1(ctr, 'TAKEDOWN');
            
            name = last;
            msg = 'ATTEMPTS A TAKEDOWN';
            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            if (hit > 0) {
                info = 'SUCCESSFUL! ' + dmg;
                arr = this.getOppMsg();
            }
            else {
                info = 'FAILED! ' + dmg;
                arr = this.getOppMsg();
            }
            cinfo = this.counterInfo(ctr, ctrDmg);

            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att1') == 'CLINCH'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);
            
            hit = this.getHit('CLINCH');
            dmg = this.getDamage(0, 'x');
            ctr = this.counterCalc(1 - hit, 'CLINCH');
            ctrDmg = this.getDamage1(ctr, 'CLINCH');

            name = last;
            msg = 'ATTEMPTS TO CLINCH';
            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            if (hit > 0) {
                info = 'SUCCESSFUL! ' + dmg;
                arr = this.getOppMsg();
            }
            else {
                info = 'FAILED! ' + dmg;
                arr = this.getOppMsg();
            }
            cinfo = this.counterInfo(ctr, ctrDmg);

            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
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
            sessionStorage.setItem('bell', 1);
            sessionStorage.setItem('name15', name);
            sessionStorage.setItem('move15', msg);
            sessionStorage.setItem('info15', info);
            sessionStorage.setItem('ctr15', cinfo);

            sessionStorage.setItem('name16', name1);
            sessionStorage.setItem('move16', msg1);
            sessionStorage.setItem('info16', info1);
            sessionStorage.setItem('ctr16', cinfo1);
            
            if (sessionStorage.getItem('round') == this.getRounds() && sessionStorage.getItem('tko') == 0) {
                sessionStorage.setItem('dec', 1);
            }
        }
    }

    mover2 = (event) => {
        if (sessionStorage.getItem('win') == 1 || sessionStorage.getItem('win1') == 1 || sessionStorage.getItem('bell') == 1) {
            return;
        }
        
        if (sessionStorage.getItem('tookdown') == 1) {
            sessionStorage.setItem('control1', parseInt(sessionStorage.getItem('control1')) + 1);
        }

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

        if (this.pos() == 1){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);

            hit = this.getHit('EXIT');
            dmg = this.getDamage(0, 'x');

            name = last;
            msg = 'ATTEMPTS TO EXIT CLINCH';
            if (hit > 0) {
                info = 'SUCCESSFUL! ' + dmg;
            }
            else {
                info = 'FAILED! ' + dmg;
            }
            cinfo = '';

            arr = this.getOppMsg();
            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (this.pos() == 2){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 10);

            hit = this.getHit('REVERSE');
            dmg = this.getDamage(0, 'x');

            name = last;
            msg = 'ATTEMPTS A REVERSAL';
            if (hit > 0) {
                info = 'SUCCESSFUL! ' + dmg;
            }
            else {
                info = 'FAILED! ' + dmg;
            }
            cinfo = '';

            arr = this.getOppMsg();
            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (this.pos() == 3){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);

            hit = this.getHit('G&P');
            dmg = this.getDamage(hit, 'G&P');

            name = last;
            msg = 'THROWS GROUND & POUND';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = '';

            arr = this.getOppMsg();
            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att2') == 'BRAWL'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 6);

            hit = this.getHit('BRAWL');
            dmg = this.getDamage(hit, 'BRAWL');
            ctr = this.counterCalc(4 - hit, 'BRAWL');
            ctrDmg = this.getDamage1(ctr, 'BRAWL');

            name = last;
            msg = 'THROWS 4 STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att2') == 'BLITZ'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 8);
            
            hit = this.getHit('BLITZ');
            dmg = this.getDamage(hit, 'BLITZ');

            name = last;
            msg = 'BLITZES IN WITH 4 STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att2') == 'PRESSURE'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 12);
            
            hit = this.getHit('PRESSURE');
            dmg = this.getDamage(hit, 'PRESSURE');
            ctr = this.counterCalc(8 - hit, 'PRESSURE');
            ctrDmg = this.getDamage1(ctr, 'PRESSURE');
            
            name = last;
            msg = 'THROWS 8 STRIKES';
            info = hit + '/8 HIT, ' + dmg + ' DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att2') == 'POWER'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 16);
            
            hit = this.getHit('POWER');
            dmg = this.getDamage(hit, 'POWER');
            ctr = this.counterCalc(4 - hit, 'POWER');
            ctrDmg = this.getDamage1(ctr, 'POWER');

            name = last;
            msg = 'THROWS 4 HEAVY STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att2') == 'FEINT'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 1);
            
            hit = this.getHit('FEINT');

            name = last;
            msg = 'FEINTS A STRIKE';
            if (sessionStorage.getItem('oppStm') <= 0) {
                sessionStorage.setItem('tko', 1);
                if (hit > 0) {
                    info = 'SUCCESSFUL! TKO!';
                }
                else {
                    info = 'FAILED! TKO!';
                }
            }
            else {
                if (hit > 0) {
                    info = 'SUCCESSFUL!';
                }
                else {
                    info = 'FAILED!';
                }
            }
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att2') == 'LOW KICK'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);

            hit = this.getHit('LOW KICK');
            dmg = this.getDamage(hit, 'LOW KICK');
            ctr = this.counterCalc(1 - hit, 'LOW KICK');
            ctrDmg = this.getDamage1(ctr, 'LOW KICK');
            
            name = last;
            msg = 'THROWS A LOW KICK';
            info = hit + '/1 HIT, ' + dmg + ' DMG' + this.getKicked(hit);
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att2') == 'TAKEDOWN'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 12);
            
            hit = this.getHit('TAKEDOWN');
            dmg = this.getDamage(0, 'x');
            ctr = this.counterCalc(1 - hit, 'TAKEDOWN');
            ctrDmg = this.getDamage1(ctr, 'TAKEDOWN');
            
            name = last;
            msg = 'ATTEMPTS A TAKEDOWN';
            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            if (hit > 0) {
                info = 'SUCCESSFUL! ' + dmg;
                arr = this.getOppMsg();
            }
            else {
                info = 'FAILED! ' + dmg;
                arr = this.getOppMsg();
            }
            cinfo = this.counterInfo(ctr, ctrDmg);

            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att2') == 'CLINCH'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);
            
            hit = this.getHit('CLINCH');
            dmg = this.getDamage(0, 'x');
            ctr = this.counterCalc(1 - hit, 'CLINCH');
            ctrDmg = this.getDamage1(ctr, 'CLINCH');

            name = last;
            msg = 'ATTEMPTS TO CLINCH';
            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            if (hit > 0) {
                info = 'SUCCESSFUL! ' + dmg;
                arr = this.getOppMsg();
            }
            else {
                info = 'FAILED! ' + dmg;
                arr = this.getOppMsg();
            }
            cinfo = this.counterInfo(ctr, ctrDmg);

            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
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
            sessionStorage.setItem('bell', 1);
            sessionStorage.setItem('name15', name);
            sessionStorage.setItem('move15', msg);
            sessionStorage.setItem('info15', info);
            sessionStorage.setItem('ctr15', cinfo);

            sessionStorage.setItem('name16', name1);
            sessionStorage.setItem('move16', msg1);
            sessionStorage.setItem('info16', info1);
            sessionStorage.setItem('ctr16', cinfo1);
            
            if (sessionStorage.getItem('round') == this.getRounds() && sessionStorage.getItem('tko') == 0) {
                sessionStorage.setItem('dec', 1);
            }
        }
    }
    
    mover3 = (event) => {
        if (sessionStorage.getItem('win') == 1 || sessionStorage.getItem('win1') == 1 || sessionStorage.getItem('bell') == 1) {
            return;
        }

        if (sessionStorage.getItem('tookdown') == 1) {
            sessionStorage.setItem('control1', parseInt(sessionStorage.getItem('control1')) + 1);
        }

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

        if (this.pos() == 1){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);

            hit = this.getHit('TRIP');
            dmg = this.getDamage(0, 'x');

            name = last;
            msg = 'ATTEMPTS A TRIP';
            if (hit > 0) {
                info = 'SUCCESSFUL! ' + dmg;
            }
            else {
                info = 'FAILED! ' + dmg;
            }
            cinfo = '';

            arr = this.getOppMsg();
            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (this.pos() == 2){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 10);

            hit = this.getHit('SUBMISSIONbot');
            dmg = this.getDamage(0, 'x');

            name = last;
            msg = 'ATTEMPTS A SUBMISSION FROM BOTTOM';
            if (hit > 0) {
                info = 'SUCCESSFUL!';
            }
            else {
                info = 'FAILED! ' + dmg;
            }
            cinfo = '';

            arr = this.getOppMsg();
            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (this.pos() == 3){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 10);

            hit = this.getHit('SUBMISSIONtop');
            dmg = this.getDamage(0, 'x');

            name = last;
            msg = 'ATTEMPTS A SUBMISSION FROM TOP';
            if (hit > 0) {
                info = 'SUCCESSFUL!';
            }
            else {
                info = 'FAILED! ' + dmg;
            }
            cinfo = '';

            arr = this.getOppMsg();
            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att3') == 'BRAWL'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 6);

            hit = this.getHit('BRAWL');
            dmg = this.getDamage(hit, 'BRAWL');
            ctr = this.counterCalc(4 - hit, 'BRAWL');
            ctrDmg = this.getDamage1(ctr, 'BRAWL');

            name = last;
            msg = 'THROWS 4 STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att3') == 'BLITZ'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 8);
            
            hit = this.getHit('BLITZ');
            dmg = this.getDamage(hit, 'BLITZ');

            name = last;
            msg = 'BLITZES IN WITH 4 STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att3') == 'PRESSURE'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 12);
            
            hit = this.getHit('PRESSURE');
            dmg = this.getDamage(hit, 'PRESSURE');
            ctr = this.counterCalc(8 - hit, 'PRESSURE');
            ctrDmg = this.getDamage1(ctr, 'PRESSURE');
            
            name = last;
            msg = 'THROWS 8 STRIKES';
            info = hit + '/8 HIT, ' + dmg + ' DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att3') == 'POWER'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 16);
            
            hit = this.getHit('POWER');
            dmg = this.getDamage(hit, 'POWER');
            ctr = this.counterCalc(4 - hit, 'POWER');
            ctrDmg = this.getDamage1(ctr, 'POWER');

            name = last;
            msg = 'THROWS 4 HEAVY STRIKES';
            info = hit + '/4 HIT, ' + dmg + ' DMG';
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att3') == 'FEINT'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 1);
            
            hit = this.getHit('FEINT');

            name = last;
            msg = 'FEINTS A STRIKE';
            if (sessionStorage.getItem('oppStm') <= 0) {
                sessionStorage.setItem('tko', 1);
                if (hit > 0) {
                    info = 'SUCCESSFUL! TKO!';
                }
                else {
                    info = 'FAILED! TKO!';
                }
            }
            else {
                if (hit > 0) {
                    info = 'SUCCESSFUL!';
                }
                else {
                    info = 'FAILED!';
                }
            }
            cinfo = '';

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att3') == 'LOW KICK'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);

            hit = this.getHit('LOW KICK');
            dmg = this.getDamage(hit, 'LOW KICK');
            ctr = this.counterCalc(1 - hit, 'LOW KICK');
            ctrDmg = this.getDamage1(ctr, 'LOW KICK');
            
            name = last;
            msg = 'THROWS A LOW KICK';
            info = hit + '/1 HIT, ' + dmg + ' DMG' + this.getKicked(hit);
            cinfo = this.counterInfo(ctr, ctrDmg);

            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            arr = this.getOppMsg();
            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att3') == 'TAKEDOWN'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 12);
            
            hit = this.getHit('TAKEDOWN');
            dmg = this.getDamage(0, 'x');
            ctr = this.counterCalc(1 - hit, 'TAKEDOWN');
            ctrDmg = this.getDamage1(ctr, 'TAKEDOWN');
            
            name = last;
            msg = 'ATTEMPTS A TAKEDOWN';
            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            if (hit > 0) {
                info = 'SUCCESSFUL! ' + dmg;
                arr = this.getOppMsg();
            }
            else {
                info = 'FAILED! ' + dmg;
                arr = this.getOppMsg();
            }
            cinfo = this.counterInfo(ctr, ctrDmg);

            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
        }
        else if (sessionStorage.getItem('att3') == 'CLINCH'){
            sessionStorage.setItem('playerStm', parseInt(sessionStorage.getItem('playerStm')) - 4);
            
            hit = this.getHit('CLINCH');
            dmg = this.getDamage(0, 'x');
            ctr = this.counterCalc(1 - hit, 'CLINCH');
            ctrDmg = this.getDamage1(ctr, 'CLINCH');

            name = last;
            msg = 'ATTEMPTS TO CLINCH';
            name1 = (sessionStorage.getItem('win') == 0) ? sessionStorage.getItem('oppLast') : '';
            if (hit > 0) {
                info = 'SUCCESSFUL! ' + dmg;
                arr = this.getOppMsg();
            }
            else {
                info = 'FAILED! ' + dmg;
                arr = this.getOppMsg();
            }
            cinfo = this.counterInfo(ctr, ctrDmg);

            msg1 = arr[1];
            info1 = arr[2];
            cinfo1 = arr[3];
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
            sessionStorage.setItem('bell', 1);
            sessionStorage.setItem('name15', name);
            sessionStorage.setItem('move15', msg);
            sessionStorage.setItem('info15', info);
            sessionStorage.setItem('ctr15', cinfo);

            sessionStorage.setItem('name16', name1);
            sessionStorage.setItem('move16', msg1);
            sessionStorage.setItem('info16', info1);
            sessionStorage.setItem('ctr16', cinfo1);
            
            if (sessionStorage.getItem('round') == this.getRounds() && sessionStorage.getItem('tko') == 0) {
                sessionStorage.setItem('dec', 1);
            }
        }
    }

    nextRound() {
        if (sessionStorage.getItem('bell') == 0 && sessionStorage.getItem('ko') == 0 && sessionStorage.getItem('tko') == 0 && sessionStorage.getItem('sub') == 0){
        }
        else {
            let round = parseInt(sessionStorage.getItem('round'));
            sessionStorage.setItem('round', round + 1);
            sessionStorage.setItem('bell', 0);

            sessionStorage.setItem('clinched', 0);
            sessionStorage.setItem('tookdown', 0);
            sessionStorage.setItem('tookdown1', 0);
            sessionStorage.setItem('feinted', 0);
            sessionStorage.setItem('feinted1', 0);

            sessionStorage.setItem('mCount', 0);

            sessionStorage.setItem('name01', '');
            sessionStorage.setItem('move01', '');
            sessionStorage.setItem('info01', '');
            sessionStorage.setItem('ctr01', '');

            sessionStorage.setItem('name02', '');
            sessionStorage.setItem('move02', '');
            sessionStorage.setItem('info02', '');
            sessionStorage.setItem('ctr02', '');

            sessionStorage.setItem('name03', '');
            sessionStorage.setItem('move03', '');
            sessionStorage.setItem('info03', '');
            sessionStorage.setItem('ctr03', '');

            sessionStorage.setItem('name04', '');
            sessionStorage.setItem('move04', '');
            sessionStorage.setItem('info04', '');
            sessionStorage.setItem('ctr04', '');
            
            sessionStorage.setItem('name05', '');
            sessionStorage.setItem('move05', '');
            sessionStorage.setItem('info05', '');
            sessionStorage.setItem('ctr05', '');

            sessionStorage.setItem('name06', '');
            sessionStorage.setItem('move06', '');
            sessionStorage.setItem('info06', '');
            sessionStorage.setItem('ctr06', '');
            
            sessionStorage.setItem('name07', '');
            sessionStorage.setItem('move07', '');
            sessionStorage.setItem('info07', '');
            sessionStorage.setItem('ctr07', '');

            sessionStorage.setItem('name08', '');
            sessionStorage.setItem('move08', '');
            sessionStorage.setItem('info08', '');
            sessionStorage.setItem('ctr08', '');
            
            sessionStorage.setItem('name09', '');
            sessionStorage.setItem('move09', '');
            sessionStorage.setItem('info09', '');
            sessionStorage.setItem('ctr09', '');

            sessionStorage.setItem('name10', '');
            sessionStorage.setItem('move10', '');
            sessionStorage.setItem('info10', '');
            sessionStorage.setItem('ctr10', '');
            
            sessionStorage.setItem('name11', '');
            sessionStorage.setItem('move11', '');
            sessionStorage.setItem('info11', '');
            sessionStorage.setItem('ctr11', '');

            sessionStorage.setItem('name12', '');
            sessionStorage.setItem('move12', '');
            sessionStorage.setItem('info12', '');
            sessionStorage.setItem('ctr12', '');
            
            sessionStorage.setItem('name13', '');
            sessionStorage.setItem('move13', '');
            sessionStorage.setItem('info13', '');
            sessionStorage.setItem('ctr13', '');

            sessionStorage.setItem('name14', '');
            sessionStorage.setItem('move14', '');
            sessionStorage.setItem('info14', '');
            sessionStorage.setItem('ctr14', '');
            
            sessionStorage.setItem('name15', '');
            sessionStorage.setItem('move15', '');
            sessionStorage.setItem('info15', '');
            sessionStorage.setItem('ctr15', '');

            sessionStorage.setItem('name16', '');
            sessionStorage.setItem('move16', '');
            sessionStorage.setItem('info16', '');
            sessionStorage.setItem('ctr16', '');

            let totalDmg = parseInt(sessionStorage.getItem('totalDmg'));
            let totalDmg1 = parseInt(sessionStorage.getItem('totalDmg1'));
            let control = parseInt(sessionStorage.getItem('control'));
            let control1 = parseInt(sessionStorage.getItem('control1'));
            if ((Math.abs(totalDmg - totalDmg1)) < 40) {
                if (control > control1) {
                    switch(round) {
                        case 1:
                            sessionStorage.setItem('round1', 1);
                        break;
                        case 2:
                            sessionStorage.setItem('round2', 1);
                        break;
                        case 3:
                            sessionStorage.setItem('round3', 1);
                        break;
                        case 4:
                            sessionStorage.setItem('round4', 1);
                        break;
                        case 5:
                            sessionStorage.setItem('round5', 1);
                        break;
                    }
                    console.log('PLAYER WON ROUND')
                }
                else if (control < control1) {
                    switch(round) {
                        case 1:
                            sessionStorage.setItem('round1', 2);
                        break;
                        case 2:
                            sessionStorage.setItem('round2', 2);
                        break;
                        case 3:
                            sessionStorage.setItem('round3', 2);
                        break;
                        case 4:
                            sessionStorage.setItem('round4', 2);
                        break;
                        case 5:
                            sessionStorage.setItem('round5', 2);
                        break;
                    }
                    console.log('OPP WON ROUND')
                }
                else {
                    if (totalDmg < totalDmg1) {
                        switch(round) {
                            case 1:
                                sessionStorage.setItem('round1', 2);
                            break;
                            case 2:
                                sessionStorage.setItem('round2', 2);
                            break;
                            case 3:
                                sessionStorage.setItem('round3', 2);
                            break;
                            case 4:
                                sessionStorage.setItem('round4', 2);
                            break;
                            case 5:
                                sessionStorage.setItem('round5', 2);
                            break;
                        }
                        console.log('OPP WON ROUND')
                    }
                    else {
                        switch(round) {
                            case 1:
                                sessionStorage.setItem('round1', 1);
                            break;
                            case 2:
                                sessionStorage.setItem('round2', 1);
                            break;
                            case 3:
                                sessionStorage.setItem('round3', 1);
                            break;
                            case 4:
                                sessionStorage.setItem('round4', 1);
                            break;
                            case 5:
                                sessionStorage.setItem('round5', 1);
                            break;
                        }
                        console.log('PLAYER WON ROUND')
                    }
                }
            }
            else if (Math.abs(totalDmg - totalDmg1) > 350) {
                if (totalDmg > totalDmg1) {
                    switch(round) {
                        case 1:
                            sessionStorage.setItem('round1', 3);
                        break;
                        case 2:
                            sessionStorage.setItem('round2', 3);
                        break;
                        case 3:
                            sessionStorage.setItem('round3', 3);
                        break;
                        case 4:
                            sessionStorage.setItem('round4', 3);
                        break;
                        case 5:
                            sessionStorage.setItem('round5', 3);
                        break;
                    }
                    console.log('PLAYER WON ROUND***')
                }
                else {
                    switch(round) {
                        case 1:
                            sessionStorage.setItem('round1', 4);
                        break;
                        case 2:
                            sessionStorage.setItem('round2', 4);
                        break;
                        case 3:
                            sessionStorage.setItem('round3', 4);
                        break;
                        case 4:
                            sessionStorage.setItem('round4', 4);
                        break;
                        case 5:
                            sessionStorage.setItem('round5', 4);
                        break;
                    }
                    console.log('OPP WON ROUND***')
                }
            }
            else {
                if (totalDmg > totalDmg1) {
                    switch(round) {
                        case 1:
                            sessionStorage.setItem('round1', 1);
                        break;
                        case 2:
                            sessionStorage.setItem('round2', 1);
                        break;
                        case 3:
                            sessionStorage.setItem('round3', 1);
                        break;
                        case 4:
                            sessionStorage.setItem('round4', 1);
                        break;
                        case 5:
                            sessionStorage.setItem('round5', 1);
                        break;
                    }
                    console.log('PLAYER WON ROUND')
                }
                else {
                    switch(round) {
                        case 1:
                            sessionStorage.setItem('round1', 2);
                        break;
                        case 2:
                            sessionStorage.setItem('round2', 2);
                        break;
                        case 3:
                            sessionStorage.setItem('round3', 2);
                        break;
                        case 4:
                            sessionStorage.setItem('round4', 2);
                        break;
                        case 5:
                            sessionStorage.setItem('round5', 2);
                        break;
                    }
                    console.log('OPP WON ROUND')
                }
            }

            if (sessionStorage.getItem('win') == 0 && sessionStorage.getItem('win1') == 0) {
                let points = parseInt(sessionStorage.getItem('points'));
                let points1 = parseInt(sessionStorage.getItem('points1'));

                if (round == 1) {
                    switch(parseInt(sessionStorage.getItem('round1'))) {
                        case 1:
                            points = points + 10;
                            points1 = points1 + 9;
                        break;
                        case 2:
                            points = points + 9;
                            points1 = points1 + 10;
                        break;
                        case 3:
                            points = points + 10;
                            points1 = points1 + 8;
                        break;
                        case 4:
                            points = points + 8;
                            points1 = points1 + 10;
                        break;
                    }
                }
                else if (round == 2) {
                    switch(parseInt(sessionStorage.getItem('round2'))) {
                        case 1:
                            points = points + 10;
                            points1 = points1 + 9;
                        break;
                        case 2:
                            points = points + 9;
                            points1 = points1 + 10;
                        break;
                        case 3:
                            points = points + 10;
                            points1 = points1 + 8;
                        break;
                        case 4:
                            points = points + 8;
                            points1 = points1 + 10;
                        break;
                    }
                }
                else if (round == 3) {
                    switch(parseInt(sessionStorage.getItem('round3'))) {
                        case 1:
                            points = points + 10;
                            points1 = points1 + 9;
                        break;
                        case 2:
                            points = points + 9;
                            points1 = points1 + 10;
                        break;
                        case 3:
                            points = points + 10;
                            points1 = points1 + 8;
                        break;
                        case 4:
                            points = points + 8;
                            points1 = points1 + 10;
                        break;
                    }
                }
                else if (round == 4) {
                    switch(parseInt(sessionStorage.getItem('round4'))) {
                        case 1:
                            points = points + 10;
                            points1 = points1 + 9;
                        break;
                        case 2:
                            points = points + 9;
                            points1 = points1 + 10;
                        break;
                        case 3:
                            points = points + 10;
                            points1 = points1 + 8;
                        break;
                        case 4:
                            points = points + 8;
                            points1 = points1 + 10;
                        break;
                    }
                }
                else if (round == 5) {
                    switch(parseInt(sessionStorage.getItem('round5'))) {
                        case 1:
                            points = points + 10;
                            points1 = points1 + 9;
                        break;
                        case 2:
                            points = points + 9;
                            points1 = points1 + 10;
                        break;
                        case 3:
                            points = points + 10;
                            points1 = points1 + 8;
                        break;
                        case 4:
                            points = points + 8;
                            points1 = points1 + 10;
                        break;
                    }
                }

                sessionStorage.setItem('points', points);
                sessionStorage.setItem('points1', points1);

                if (sessionStorage.getItem('dec') == 1) {
                    if (points > points1) {
                        sessionStorage.setItem('win', 1);
                    }
                    else {
                        sessionStorage.setItem('win1', 1);
                    }
                }

                sessionStorage.setItem('totalDmg', 0);
                sessionStorage.setItem('totalDmg1', 0);
            }
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
                    <Link to='./round'><Button data-tip data-for="4" style={(sessionStorage.getItem('win') == 1 || sessionStorage.getItem('win1') == 1 || sessionStorage.getItem('bell') == 1) ? {border: '2px solid gray', color: 'gray'} : {}} onClick={this.mover0}>{(this.pos() == 0) ? 'STICK' : (this.pos() == 1) ? 'KNEE' : 'STALL'}</Button></Link>
                    <ReactTooltip class="Membership" id="4" place="top" effect="float"><text style={{fontSize: 30}}>{(this.pos() == 0) ? 'STICK & MOVE' : (this.pos() == 1) ? 'KNEE' : 'STALL'}</text> <text style={sessionStorage.getItem('feinted1') == 1 ? {color: 'green'} : {}}>{(this.pos() == 0) ? this.calcPer('STICK') : (this.pos() == 1) ? this.calcPer('KNEE') : 100}% ACC.</text><br/>{(this.pos() == 0) ? 'LIGHT & CONSERVATIVE JABS' : (this.pos() == 1) ? 'RELIABLE CLINCH STRIKE' : 'DO NOTHING'}<br/><b>{(this.pos() == 0 || this.pos() == 1 || this.pos() == 2) ? '2 STAMINA' : '0 STAMINA'}</b></ReactTooltip>
                    <Link to='./round'><Button data-tip data-for="1" style={(sessionStorage.getItem('win') == 1 || sessionStorage.getItem('win1') == 1 || sessionStorage.getItem('bell') == 1) ? {border: '2px solid gray', color: 'gray'} : {}} onClick={this.mover1}>{(this.pos() == 0) ? sessionStorage.getItem('att1') : (this.pos() == 1) ? 'ELBOW' : (this.pos() == 2) ? 'ESCAPE' : 'GET UP'}</Button></Link>
                    <ReactTooltip class="Membership" id="1" place="top" effect="float"><text style={{fontSize: 30}}>{(this.pos() == 0) ? this.attDesc1a() : (this.pos() == 1) ? 'ELBOW' : (this.pos() == 2) ? 'ESCAPE' : 'GET UP'}</text> <text style={sessionStorage.getItem('feinted1') == 1 ? {color: 'green'} : {}}>{(this.pos() == 0) ? this.calcPer(sessionStorage.getItem('att1')) : (this.pos() == 1) ? this.calcPer('ELBOW') : (this.pos() == 2) ? this.calcPer('ESCAPE') : this.calcPer('GET UP')}% ACC.</text><br/>{(this.pos() == 0) ? this.attDesc1b() : (this.pos() == 1) ? 'HEAVY CLINCH STRIKE' : (this.pos() == 2) ? 'ATTEMPT TO STAND UP' : 'LET OPPONENT UP'}<br/><b>{(this.pos() == 0) ? this.attDesc1c() : (this.pos() == 1) ? '4' : (this.pos() == 2) ? '6' : '0'} STAMINA</b></ReactTooltip>
                    <Link to='./round'><Button data-tip data-for="2" style={(sessionStorage.getItem('win') == 1 || sessionStorage.getItem('win1') == 1 || sessionStorage.getItem('bell') == 1) ? {border: '2px solid gray', color: 'gray'} : {}} onClick={this.mover2}>{(this.pos() == 0) ? sessionStorage.getItem('att2') : (this.pos() == 1) ? 'EXIT' : (this.pos() == 2) ? 'REVERSE' : 'G & P'}</Button></Link>
                    <ReactTooltip class="Membership" id="2" place="top" effect="float"><text style={{fontSize: 30}}>{(this.pos() == 0) ? this.attDesc2a() : (this.pos() == 1) ? 'EXIT' : (this.pos() == 2) ? 'REVERSE' : 'GROUND & POUND'}</text> <text style={sessionStorage.getItem('feinted1') == 1 ? {color: 'green'} : {}}>{(this.pos() == 0) ? this.calcPer(sessionStorage.getItem('att2')) : (this.pos() == 1) ? this.calcPer('EXIT') : (this.pos() == 2) ? this.calcPer('REVERSE') : this.calcPer('G&P')}% ACC.</text><br/>{(this.pos() == 0) ? this.attDesc2b() : (this.pos() == 1) ? 'ATTEMPT TO EXIT CLINCH' : (this.pos() == 2) ? 'ATTEMPT TO GAIN TOP POSITION' : 'STRIKE OPPONENT'}<br/><b>{(this.pos() == 0) ? this.attDesc2c() : (this.pos() == 1) ? '4' : (this.pos() == 2) ? '10' : '4'} STAMINA</b></ReactTooltip>
                    <Link to='./round'><Button data-tip data-for="3" style={(sessionStorage.getItem('win') == 1 || sessionStorage.getItem('win1') == 1 || sessionStorage.getItem('bell') == 1) ? {border: '2px solid gray', color: 'gray'} : {}} onClick={this.mover3}>{(this.pos() == 0) ? sessionStorage.getItem('att3') : (this.pos() == 1) ? 'TRIP' : (this.pos() == 2) ? 'SUBMISSION' : 'SUBMISSION'}</Button></Link>
                    <ReactTooltip class="Membership" id="3" place="top" effect="float"><text style={{fontSize: 30}}>{(this.pos() == 0) ? this.attDesc3a() : (this.pos() == 1) ? 'TRIP' : (this.pos() == 2) ? 'SUBMISSION' : 'SUBMISSION'}</text> <text style={sessionStorage.getItem('feinted1') == 1 ? {color: 'green'} : {}}>{(this.pos() == 0) ? this.calcPer(sessionStorage.getItem('att3')) : (this.pos() == 1) ? this.calcPer('TRIP') : (this.pos() == 2) ? this.calcPer('SUBMISSIONbot') : this.calcPer('SUBMISSIONtop')}% ACC.</text><br/>{(this.pos() == 0) ? this.attDesc3b() : (this.pos() == 1) ? 'ATTEMPT TO BRING TO GROUND' : (this.pos() == 2) ? 'ATTEMPT SUBMISSION FROM BOTTOM POSITION' : 'ATTEMPT SUBMISSION FROM TOP POSITION'}<br/><b>{(this.pos() == 0) ? this.attDesc3c() : (this.pos() == 1) ? '6' : (this.pos() == 2) ? '10' : '10'} STAMINA</b></ReactTooltip>
                </div>
                <div className="App-customize1a" style={{marginTop: 0}}>
                    <Link to={(sessionStorage.getItem('win') == 1 || sessionStorage.getItem('win1') == 1 || sessionStorage.getItem('dec') == 1) ? './results' : './round'}><Button style={(sessionStorage.getItem('win') == 0 && sessionStorage.getItem('win1') == 0 && sessionStorage.getItem('bell') == 0) ? {border: '2px solid gray', color: 'gray'} : {}} onClick={this.nextRound}><text>NEXT</text></Button></Link>
                </div>
            </div>
        )
    }
}

export default Round;
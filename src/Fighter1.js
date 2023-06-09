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

class Fighter1 extends React.Component {
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

    getFirst(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.first;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.first;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.first;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.first;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.first;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.first;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.first;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.first;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.first;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.first;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.first;
        }
    }

    getLast(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.last;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.last;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.last;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.last;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.last;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.last;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.last;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.last;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.last;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.last;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.last;
        }
    }

    getWeight(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.weight;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.weight;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.weight;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.weight;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.weight;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.weight;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.weight;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.weight;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.weight;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.weight;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.weight;
        }
    }

    getHeight(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.height;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.height;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.height;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.height;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.height;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.height;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.height;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.height;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.height;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.height;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.height;
        }
    }

    getStrength(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.strength;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.strength;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.strength;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.strength;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.strength;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.strength;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.strength;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.strength;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.strength;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.strength;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.strength;
        }
    }

    getSpeed(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.speed;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.speed;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.speed;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.speed;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.speed;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.speed;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.speed;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.speed;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.speed;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.speed;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.speed;
        }
    }

    getStamina(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.stamina;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.stamina;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.stamina;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.stamina;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.stamina;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.stamina;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.stamina;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.stamina;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.stamina;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.stamina;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.stamina;
        }
    }

    getPunching(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.punching;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.punching;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.punching;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.punching;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.punching;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.punching;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.punching;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.punching;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.punching;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.punching;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.punching;
        }
    }

    getKicking(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.kicking;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.kicking;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.kicking;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.kicking;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.kicking;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.kicking;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.kicking;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.kicking;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.kicking;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.kicking;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.kicking;
        }
    }

    getWrestling(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.wrestling;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.wrestling;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.wrestling;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.wrestling;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.wrestling;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.wrestling;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.wrestling;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.wrestling;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.wrestling;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.wrestling;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.wrestling;
        }
    }

    getGrappling(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.grappling;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.grappling;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.grappling;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.grappling;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.grappling;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.grappling;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.grappling;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.grappling;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.grappling;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.grappling;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.grappling;
        }
    }

    getClinch(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.clinch;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.clinch;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.clinch;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.clinch;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.clinch;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.clinch;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.clinch;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.clinch;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.clinch;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.clinch;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.clinch;
        }
    }

    getNation(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.nation;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.nation;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.nation;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.nation;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.nation;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.nation;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.nation;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.nation;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.nation;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.nation;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.nation;
        }
    }

    getWin(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.win;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.win;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.win;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.win;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.win;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.win;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.win;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.win;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.win;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.win;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.win;
        }
    }

    getLoss(str) {
        let data = '';
        if(str == 1){
            data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            return data.loss;
        }
        else if(str == 2) {
            data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            return data.loss;
        }
        else if(str == 3) {
            data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            return data.loss;
        }
        else if(str == 4) {
            data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            return data.loss;
        }
        else if(str == 5) {
            data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            return data.loss;
        }
        else if(str == 6) {
            data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            return data.loss;
        }
        else if(str == 7) {
            data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            return data.loss;
        }
        else if(str == 8) {
            data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            return data.loss;
        }
        else if(str == 9) {
            data = sessionStorage.getItem('wst1');
            data = JSON.parse(data);
            return data.loss;
        }
        else if(str == 10) {
            data = sessionStorage.getItem('wfl1');
            data = JSON.parse(data);
            return data.loss;
        }
        else if(str == 11) {
            data = sessionStorage.getItem('wba1');
            data = JSON.parse(data);
            return data.loss;
        }
    }

    notFirst() {
        sessionStorage.setItem('first', 'false');
    }

    progressTime() {
        sessionStorage.setItem('month', (parseInt(sessionStorage.getItem('month')) + 1));
    }

    render() {
        let month = sessionStorage.getItem('month');
        let year = sessionStorage.getItem('year');
        let wc = sessionStorage.getItem('wc');
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -155 }} />
                        FIGHTER PROFILE<br/><br/>
                        <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 130, marginRight: 120, fontSize: 70, marginTop: -70 }}><b>{this.getFirst(sessionStorage.getItem('wc'))} {this.getLast(sessionStorage.getItem('wc'))}</b><br/></div>
                        <Button6>{this.getNation(sessionStorage.getItem('wc'))}</Button6>
                        <div className="App-customize2" style={{marginTop: 40}}>
                            <Button1>RANK</Button1>
                            <Button1>WINS</Button1>
                            <Button1>LOSSES</Button1>
                            <Button1>WEIGHT</Button1>
                            <Button1>HEIGHT</Button1>
                        </div>
                        <div className="App-customize3" style={{marginTop: -20}}>
                            <Button2><b>1</b></Button2>
                            <Button2><b>{this.getWin(sessionStorage.getItem('wc'))}</b></Button2>
                            <Button2><b>{this.getLoss(sessionStorage.getItem('wc'))}</b></Button2>
                            <Button2><b>{this.getWeight(sessionStorage.getItem('wc'))}</b></Button2>
                            <Button2><b>{this.getHeight(sessionStorage.getItem('wc'))}</b></Button2>
                        </div>
                        <div className="App-customize2" style={{marginTop: 25}}>
                            <Button1>STRENGTH</Button1>
                            <Button1>SPEED</Button1>
                            <Button1>STAMINA</Button1>
                        </div>
                        <div className="App-customize3" style={{marginTop: -20}}>
                            <Button2><b>{this.getStrength(sessionStorage.getItem('wc'))}</b></Button2>
                            <Button2><b>{this.getSpeed(sessionStorage.getItem('wc'))}</b></Button2>
                            <Button2><b>{this.getStamina(sessionStorage.getItem('wc'))}</b></Button2>
                        </div>
                        <div className="App-customize2" style={{marginTop: 25}}>
                            <Button1>PUNCHING</Button1>
                            <Button1>KICKING</Button1>
                            <Button1>WRESTLING</Button1>
                            <Button1>GRAPPLING</Button1>
                            <Button1>CLINCH</Button1>
                        </div>
                        <div className="App-customize3" style={{marginTop: -20}}>
                            <Button2><b>{this.getPunching(sessionStorage.getItem('wc'))}</b></Button2>
                            <Button2><b>{this.getKicking(sessionStorage.getItem('wc'))}</b></Button2>
                            <Button2><b>{this.getWrestling(sessionStorage.getItem('wc'))}</b></Button2>
                            <Button2><b>{this.getGrappling(sessionStorage.getItem('wc'))}</b></Button2>
                            <Button2><b>{this.getClinch(sessionStorage.getItem('wc'))}</b></Button2>
                        </div>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: 833 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to={(wc == 1) ? './fight1' : (wc == 2) ? './fight2' : (wc == 3) ? './fight3' : (wc == 4) ? './fight4' : (wc == 5) ? './fight5' : (wc == 6) ? './fight6' : (wc == 7) ? './fight7' : (wc == 8) ? './fight8' : (wc == 9) ? './fight9' : (wc == 10) ? './fight10' : './fight11'}><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fighter1;
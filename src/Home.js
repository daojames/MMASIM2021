import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';
import './AppHome.css';
import randomSchedule from "./RandomSchedule";
import ReactTooltip from "react-tooltip";

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
font-size: 1.5625vw;
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

class Home extends React.Component {
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

    waweightCalc(str, cut){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(str == "WSTRAWWEIGHT"){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '119');
                    return '119';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '123');
                    return '123';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '127');
                    return '127';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '132');
                    return '132';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '138');
                    return '138';
                }
            }
            else if(str == "FLYWEIGHT" || str == "WFLYWEIGHT"){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '130');
                    return '130';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '134');
                    return '134';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '138');
                    return '138';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '141');
                    return '141';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '145');
                    return '145';
                }
            }
            else if(str == "BANTAMWEIGHT" || str == "WBANTAMWEIGHT"){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '140');
                    return '140';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '144');
                    return '144';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '149');
                    return '149';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '153');
                    return '153';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '157');
                    return '157';
                }
            }
            else if(str == "FEATHERWEIGHT"){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '151');
                    return '151';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '155');
                    return '155';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '160');
                    return '160';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '164');
                    return '164';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '168');
                    return '168';
                }
            }
            else if(str == 'LIGHTWEIGHT'){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '161');
                    return '161';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '166');
                    return '166';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '171');
                    return '171';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '175');
                    return '175';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '180');
                    return '180';
                }
            }
            else if(str == 'WELTERWEIGHT'){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '177');
                    return '177';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '182');
                    return '182';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '187');
                    return '187';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '192');
                    return '192';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '197');
                    return '197';
                }
            }
            else if(str == 'MIDDLEWEIGHT'){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '192');
                    return '192';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '198');
                    return '198';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '204');
                    return '204';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '209');
                    return '209';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '215');
                    return '215';
                }
            }
            else if(str == 'LIGHT HEAVYWEIGHT'){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '213');
                    return '213';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '219');
                    return '219';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '226');
                    return '226';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '232');
                    return '232';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '238');
                    return '238';
                }
            }
            else if(str == 'HEAVYWEIGHT'){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '276');
                    return '276';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '284');
                    return '284';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '292');
                    return '292';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '299');
                    return '299';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '307');
                    return '307';
                }
            }
        }
        else {
            let value = sessionStorage.getItem('waweight');
            return value;
        }
    }

    heightCalc(str, height){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(str == "WSTRAWWEIGHT"){
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
            else if(str == "WBANTAMWEIGHT"){
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
            else if(str == "FLYWEIGHT" || str == "WFLYWEIGHT"){
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

    strengthCalc(height, cut) {
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(height == 1){
                if(cut == 1){
                    sessionStorage.setItem('str', '45');
                    return '45';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '55');
                    return '55';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '65');
                    return '65';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '75');
                    return '75';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '85');
                    return '85';
                }
            }
            else if(height == 2){
                if(cut == 1){
                    sessionStorage.setItem('str', '35');
                    return '35';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '45');
                    return '45';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '55');
                    return '55';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '65');
                    return '65';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '75');
                    return '75';
                }
            }
            else if(height == 3){
                if(cut == 1){
                    sessionStorage.setItem('str', '30');
                    return '30';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '40');
                    return '40';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '50');
                    return '50';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '60');
                    return '60';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '70');
                    return '70';
                }
            }
            else if(height == 4){
                if(cut == 1){
                    sessionStorage.setItem('str', '25');
                    return '25';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '35');
                    return '35';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '45');
                    return '45';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '55');
                    return '55';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '65');
                    return '65';
                }
            }
            else if(height == 5){
                if(cut == 1){
                    sessionStorage.setItem('str', '15');
                    return '15';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '25');
                    return '25';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '35');
                    return '35';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '45');
                    return '45';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '55');
                    return '55';
                }
            }
        }
        else {
            let value = sessionStorage.getItem('str');
            return value;
        }
    }

    staminaCalc(cut) {
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(cut == 1){
                sessionStorage.setItem('stm', '70');
                return '70';
            }
            else if(cut == 2){
                sessionStorage.setItem('stm', '60');
                return '60';
            }
            else if(cut == 3){
                sessionStorage.setItem('stm', '50');
                return '50';
            }
            else if(cut == 4){
                sessionStorage.setItem('stm', '40');
                return '40';
            }
            else if(cut == 5){
                sessionStorage.setItem('stm', '30');
                return '30';
            }
        }
        else {
            let value = sessionStorage.getItem('stm');
            return value;
        }    
    }

    calcPunch(style, height){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(style == 1){
                if(height == 1){
                    sessionStorage.setItem('punch', '75');
                    return '75';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '85');
                    return '85';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '90');
                    return '90';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '95');
                    return '95';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '100');
                    return '100';
                }
            }
            else if(style == 2){
                if(height == 1){
                    sessionStorage.setItem('punch', '55');
                    return '55';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '65');
                    return '65';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '70');
                    return '70';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '75');
                    return '75';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '85');
                    return '85';
                }
            }
            else if(style == 3){
                if(height == 1){
                    sessionStorage.setItem('punch', '35');
                    return '35';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '45');
                    return '45';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '55');
                    return '55';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '65');
                    return '65';
                }
            }
            else if(style == 4){
                if(height == 1){
                    sessionStorage.setItem('punch', '15');
                    return '15';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '25');
                    return '25';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '35');
                    return '35';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '45');
                    return '45';
                }
            }
            else if(style == 5){
                if(height == 1){
                    sessionStorage.setItem('punch', '15');
                    return '15';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '25');
                    return '25';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '35');
                    return '35';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '45');
                    return '45';
                }
            }
            else if(style == 6){
                if(height == 1){
                    sessionStorage.setItem('punch', '35');
                    return '35';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '45');
                    return '45';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '55');
                    return '55';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '65');
                    return '65';
                }
            }
        }
        else {
            let value = sessionStorage.getItem('punch');
            return value;
        }  
    }

    calcKick(style, height){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(style == 1){
                if(height == 1){
                    sessionStorage.setItem('kick', '15');
                    return '15';
                }
                else if(height == 2){
                    sessionStorage.setItem('kick', '25');
                    return '25';
                }
                else if(height == 3){
                    sessionStorage.setItem('kick', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('kick', '35');
                    return '35';
                }
                else if(height == 5){
                    sessionStorage.setItem('kick', '50');
                    return '50';
                }
            }
            else if(style == 2){
                if(height == 1){
                    sessionStorage.setItem('kick', '35');
                    return '35';
                }
                else if(height == 2){
                    sessionStorage.setItem('kick', '45');
                    return '45';
                }
                else if(height == 3){
                    sessionStorage.setItem('kick', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('kick', '55');
                    return '55';
                }
                else if(height == 5){
                    sessionStorage.setItem('kick', '65');
                    return '65';
                }
            }
            else if(style == 3){
                if(height == 1){
                    sessionStorage.setItem('kick', '35');
                    return '35';
                }
                else if(height == 2){
                    sessionStorage.setItem('kick', '45');
                    return '45';
                }
                else if(height == 3){
                    sessionStorage.setItem('kick', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('kick', '55');
                    return '55';
                }
                else if(height == 5){
                    sessionStorage.setItem('kick', '65');
                    return '65';
                }
            }
            else if(style == 4){
                if(height == 1){
                    sessionStorage.setItem('kick', '15');
                    return '15';
                }
                else if(height == 2){
                    sessionStorage.setItem('kick', '25');
                    return '25';
                }
                else if(height == 3){
                    sessionStorage.setItem('kick', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('kick', '35');
                    return '35';
                }
                else if(height == 5){
                    sessionStorage.setItem('kick', '45');
                    return '45';
                }
            }
            else if(style == 5){
                if(height == 1){
                    sessionStorage.setItem('kick', '15');
                    return '15';
                }
                else if(height == 2){
                    sessionStorage.setItem('kick', '25');
                    return '25';
                }
                else if(height == 3){
                    sessionStorage.setItem('kick', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('kick', '35');
                    return '35';
                }
                else if(height == 5){
                    sessionStorage.setItem('kick', '45');
                    return '45';
                }
            }
            else if(style == 6){
                if(height == 1){
                    sessionStorage.setItem('kick', '25');
                    return '25';
                }
                else if(height == 2){
                    sessionStorage.setItem('kick', '35');
                    return '35';
                }
                else if(height == 3){
                    sessionStorage.setItem('kick', '40');
                    return '40';
                }
                else if(height == 4){
                    sessionStorage.setItem('kick', '45');
                    return '45';
                }
                else if(height == 5){
                    sessionStorage.setItem('kick', '55');
                    return '55';
                }
            }
        }
        else {
            let value = sessionStorage.getItem('kick');
            return value;
        }  
    }

    calcWrestling(style, height){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(style == 1){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '45');
                    return '45';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '35');
                    return '35';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '25');
                    return '25';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '15');
                    return '15';
                }
            }
            else if(style == 2){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '45');
                    return '45';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '35');
                    return '35';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '25');
                    return '25';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '15');
                    return '15';
                }
            }
            else if(style == 3){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '45');
                    return '45';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '35');
                    return '35';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '25');
                    return '25';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '15');
                    return '15';
                }
            }
            else if(style == 4){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '95');
                    return '95';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '85');
                    return '85';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '80');
                    return '80';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '75');
                    return '75';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '65');
                    return '65';
                }
            }
            else if(style == 5){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '65');
                    return '65';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '55');
                    return '55';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '45');
                    return '45';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '35');
                    return '35';
                }
            }
            else if(style == 6){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '65');
                    return '65';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '55');
                    return '55';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '45');
                    return '45';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '35');
                    return '35';
                }
            }
        }
        else {
            let value = sessionStorage.getItem('wrestling');
            return value;
        }  
    }

    calcGrappling(style){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(style == 1){
                sessionStorage.setItem('grappling', '30');
                return '30';
            }
            else if(style == 2){
                sessionStorage.setItem('grappling', '30');
                return '30';
            }
            else if(style == 3){
                sessionStorage.setItem('grappling', '30');
                return '30';
            }
            else if(style == 4){
                sessionStorage.setItem('grappling', '40');
                return '40';
            }
            else if(style == 5){
                sessionStorage.setItem('grappling', '80');
                return '80';
            }
            else if(style == 6){
                sessionStorage.setItem('grappling', '50');
                return '50';
            }
        }
        else {
            let value = sessionStorage.getItem('grappling');
            return value;
        }
    }

    calcClinch(style){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(style == 1){
                sessionStorage.setItem('clinch', '40');
                return '40';
            }
            else if(style == 2){
                sessionStorage.setItem('clinch', '40');
                return '40';
            }
            else if(style == 3){
                sessionStorage.setItem('clinch', '60');
                return '60';
            }
            else if(style == 4){
                sessionStorage.setItem('clinch', '40');
                return '40';
            }
            else if(style == 5){
                sessionStorage.setItem('clinch', '30');
                return '30';
            }
            else if(style == 6){
                sessionStorage.setItem('clinch', '30');
                return '30';
            }
        }
        else {
            let value = sessionStorage.getItem('clinch');
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

    notFirst() {
        sessionStorage.setItem('first', false);
    }

    progressTime() {
        sessionStorage.setItem('month', (parseInt(sessionStorage.getItem('month')) + 1));
    }

    wc(str) {
        if (str == 'FLYWEIGHT'){
            return 1;
        }
        else if (str == 'BANTAMWEIGHT'){
            return 2;
        }
        else if (str == 'FEATHERWEIGHT'){
            return 3;
        }
        else if (str == 'LIGHTWEIGHT'){
            return 4;
        }
        else if (str == 'WELTERWEIGHT'){
            return 5;
        }
        else if (str == 'MIDDLEWEIGHT'){
            return 6;
        }
        else if (str == 'LIGHT HEAVYWEIGHT'){
            return 7;
        }
        else if (str == 'HEAVYWEIGHT'){
            return 8;
        }
        else if (str == 'WSTRAWWEIGHT'){
            return 9;
        }
        else if (str == 'WFLYWEIGHT'){
            return 10;
        }
        else if (str == 'WBANTAMWEIGHT'){
            return 11;
        }
    }

    nr0First() {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let nr0 = {
            rank: 'NR',
            first: data.first,
            last: data.last,
            height: data.height,
            weight: data.weight,
            nation: data.nation,
            win: '0',
            loss: '0',
            strength: this.strengthCalc(data.height, data.cut),
            speed: sessionStorage.getItem('spd'),
            stamina: this.staminaCalc(data.cut),
            punching: this.calcPunch(sessionStorage.getItem('style'), data.height),
            kicking: this.calcKick(sessionStorage.getItem('style'), data.height),
            wrestling: this.calcWrestling(sessionStorage.getItem('style'), data.height),
            grappling: this.calcGrappling(sessionStorage.getItem('style')),
            clinch: this.calcClinch(sessionStorage.getItem('style')),
            swin: '0',
            sloss: '0',
            pts: '0',
            code: (this.wc(data.weight) > 8 ? 'nrf0' : 'nr0')
          }
          sessionStorage.setItem(nr0.code, JSON.stringify(nr0));
    }
    
    nr0() {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let nr0 = {
            rank: sessionStorage.getItem('rank'),
            first: data.first,
            last: data.last,
            height: data.height,
            weight: data.weight,
            nation: data.nation,
            win: sessionStorage.getItem('playerWin'),
            loss: sessionStorage.getItem('playerLoss'),
            strength: sessionStorage.getItem('str'),
            speed: sessionStorage.getItem('spd'),
            stamina: sessionStorage.getItem('stm'),
            punching: sessionStorage.getItem('punch'),
            kicking: sessionStorage.getItem('kick'),
            wrestling: sessionStorage.getItem('wrestling'),
            grappling: sessionStorage.getItem('grappling'),
            clinch: sessionStorage.getItem('clinch'),
            swin: sessionStorage.getItem('playerSwin'),
            sloss: sessionStorage.getItem('playerSloss'),
            pts: sessionStorage.getItem('playerPts'),
            code: (this.wc(data.weight) > 8 ? 'nrf0' : 'nr0')
          }
          sessionStorage.setItem(nr0.code, JSON.stringify(nr0));
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
        let style = sessionStorage.getItem('style');
        let win = sessionStorage.getItem('win');
        let loss = sessionStorage.getItem('loss');
        let month = sessionStorage.getItem('month');
        let year = sessionStorage.getItem('year');
        if (parseInt(sessionStorage.getItem('first')) == 1){
            this.nr0First();
        }
        else {
            this.nr0();
        }
        if (parseInt(sessionStorage.getItem('newSchedule')) == 1) {
            randomSchedule();
        }
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1-HOME"/>
                        HOME<br/><br/>
                        <div className="Customize-desc1-HOME1"><b>{first} {last}</b><br/></div>
                        <div className="Customize-desc1-HOME2">{sessionStorage.getItem('playerWin')} - {sessionStorage.getItem('playerLoss')}<br/></div>
                        <div className="App-customize2-HOME0">
                            <Button1>FIGHT WEIGHT</Button1>
                            <Button1>WA WEIGHT</Button1>
                            <Button1>HEIGHT</Button1>
                        </div>
                        <div className="App-customize3-HOME1">
                            <Button2><b>{this.weightCalc(weight)}</b></Button2>
                            <Button2><b>{this.waweightCalc(weight, cut)}</b></Button2>
                            <Button2><b>{this.heightCalc(weight, height)}</b></Button2>
                        </div>
                        <div className="App-customize2-HOME1">
                            <Button1>STRENGTH</Button1>
                            <Button1>SPEED</Button1>
                            <Button1>STAMINA</Button1>
                        </div>
                        <div className="App-customize3-HOME1">
                            <Button2><b><text style={{color: 'red'}}></text>{this.strengthCalc(height, cut)}</b></Button2>
                            <Button2><b><text style={{color: 'red'}}></text>{sessionStorage.getItem('spd')}</b></Button2>
                            <Button2><b><text style={{color: 'red'}}></text>{this.staminaCalc(cut)}</b></Button2>
                        </div>
                        <div className="App-customize2-HOME2">
                            <Button1>PUNCHING</Button1>
                            <Button1>KICKING</Button1>
                            <Button1>WRESTLING</Button1>
                            <Button1>GRAPPLING</Button1>
                            <Button1>CLINCH</Button1>
                        </div>
                        <div className="App-customize3-HOME1">
                            <Button2><b>{this.calcPunch(style, height)}</b></Button2>
                            <Button2><b>{this.calcKick(style, height)}</b></Button2>
                            <Button2><b>{this.calcWrestling(style, height)}</b></Button2>
                            <Button2><b>{this.calcGrappling(style)}</b></Button2>
                            <Button2><b>{this.calcClinch(style)}</b></Button2>
                        </div>
                    </div>
                    <div className="App-header-style-HOME">
                        <Link to={(sessionStorage.getItem('org') == 1) ? './twitter' : './home'}><Button data-tip data-for="1" style={(sessionStorage.getItem('org') == 0) ? {border: '2px solid gray', color: 'gray'} : {}}>TWITTER</Button></Link>
                        <ReactTooltip id="1" place="top" effect="solid">MUST BE SIGNED WITH UFC TO ACCESS TWITTER</ReactTooltip>
                        <Link to='./gym'><Button onClick={this.notFirst}>GYM</Button></Link>
                        <Link to='./career'><Button onClick={this.notFirst}>CAREER</Button></Link>
                        <Link to={(sessionStorage.getItem('org') == 0) ? './schedule' : './fight'}><Button onClick={this.notFirst}>FIGHT</Button></Link>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: 0, fontSize: 30 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./home'><Button4 onClick={this.progressTime}>PROGRESS TIME</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
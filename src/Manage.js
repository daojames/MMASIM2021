import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactTooltip from "react-tooltip";
import logo from './mmasim2021logo.png';
import './App.css';
import randomSchedule from "./RandomSchedule";

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

const ButtonG = styled.button`
background-color: grey;
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

const Button1a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 800px;
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

const Button2a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 800px;
height: 100px;
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
font-size: 2.08334vw;
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

const ButtonA = styled.button`
background-color: transparent;
color: white;
padding: 20px;
width: 400px;
text-align: center;
margin: 10px;
margin-left: 100px;
margin-right: 100px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 2px;
outline: 0;
`

const ButtonA1 = styled.button`
background-color: transparent;
color: white;
padding: 20px;
width: 400px;
text-align: center;
margin: 10px;
margin-left: 100px;
margin-right: 100px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 2px solid white;
border-radius: 2px;
outline: 0;
`

const ButtonE = styled.button`
background-color: transparent;
color: white;
padding: 20px;
width: 275px;
height: 90px;
text-align: center;
margin: 10px;
font-size: 30px;
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

const ButtonW = styled.button`
background-color: transparent;
color: white;
padding: 20px;
width: 125px;
height: 90px;
text-align: center;
margin: 10px;
font-size: 30px;
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

const ButtonW1 = styled.button`
background-color: grey;
color: white;
padding: 20px;
width: 145px;
height: 90px;
text-align: center;
margin: 10px;
font-size: 30px;
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

const Button5 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 700px;
height: 50px;
text-align: left;
margin-top: -5px;
margin-left: 0px;
margin-right: 0px;
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

const ButtonC = styled.button`
background-color: #ffcc99;
color: black;
padding: 0px;
width: 700px;
height: 50px;
text-align: left;
margin-top: -5px;
margin-left: 0px;
margin-right: 0px;
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

const Button7 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 850px;
height: 95px;
text-align: left;
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
margin-right: 10px;
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

const Button8 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 950px;
height: 57px;
text-align: left;
margin-top: 3px;
margin-bottom: 3px;
margin-left: 10px;
margin-right: 10px;
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

class Manage extends React.Component {
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

    waweightCalc(str, cut){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(str == "FLYWEIGHT"){
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
            else if(str == "BANTAMWEIGHT"){
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

    strengthCalc(height, cut) {
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(height == 1){
                if(cut == 1){
                    sessionStorage.setItem('str', '50');
                    return '50';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '60');
                    return '60';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '70');
                    return '70';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '80');
                    return '80';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '90');
                    return '90';
                }
            }
            else if(height == 2){
                if(cut == 1){
                    sessionStorage.setItem('str', '40');
                    return '40';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '50');
                    return '50';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '60');
                    return '60';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '70');
                    return '70';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '80');
                    return '80';
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
                    sessionStorage.setItem('str', '20');
                    return '20';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '30');
                    return '30';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '40');
                    return '40';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '50');
                    return '50';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '60');
                    return '60';
                }
            }
            else if(height == 5){
                if(cut == 1){
                    sessionStorage.setItem('str', '10');
                    return '10';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '20');
                    return '20';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '30');
                    return '30';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '40');
                    return '40';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '50');
                    return '50';
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
                    sessionStorage.setItem('punch', '80');
                    return '80';
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
                    sessionStorage.setItem('punch', '60');
                    return '60';
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
                    sessionStorage.setItem('punch', '80');
                    return '80';
                }
            }
            else if(style == 3){
                if(height == 1){
                    sessionStorage.setItem('punch', '40');
                    return '40';
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
                    sessionStorage.setItem('punch', '60');
                    return '60';
                }
            }
            else if(style == 4){
                if(height == 1){
                    sessionStorage.setItem('punch', '30');
                    return '30';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '35');
                    return '35';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '40');
                    return '40';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '45');
                    return '45';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '50');
                    return '50';
                }
            }
            else if(style == 5){
                if(height == 1){
                    sessionStorage.setItem('punch', '20');
                    return '20';
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
                    sessionStorage.setItem('punch', '40');
                    return '40';
                }
            }
            else if(style == 6){
                if(height == 1){
                    sessionStorage.setItem('punch', '40');
                    return '40';
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
                    sessionStorage.setItem('punch', '60');
                    return '60';
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
                    sessionStorage.setItem('kick', '20');
                    return '20';
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
                    sessionStorage.setItem('kick', '40');
                    return '40';
                }
            }
            else if(style == 2){
                if(height == 1){
                    sessionStorage.setItem('kick', '40');
                    return '40';
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
                    sessionStorage.setItem('kick', '60');
                    return '60';
                }
            }
            else if(style == 3){
                if(height == 1){
                    sessionStorage.setItem('kick', '40');
                    return '40';
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
                    sessionStorage.setItem('kick', '60');
                    return '60';
                }
            }
            else if(style == 4){
                if(height == 1){
                    sessionStorage.setItem('kick', '20');
                    return '20';
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
                    sessionStorage.setItem('kick', '40');
                    return '40';
                }
            }
            else if(style == 5){
                if(height == 1){
                    sessionStorage.setItem('kick', '20');
                    return '20';
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
                    sessionStorage.setItem('kick', '40');
                    return '40';
                }
            }
            else if(style == 6){
                if(height == 1){
                    sessionStorage.setItem('kick', '30');
                    return '30';
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
                    sessionStorage.setItem('kick', '50');
                    return '50';
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
                    sessionStorage.setItem('wrestling', '50');
                    return '50';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '40');
                    return '40';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '20');
                    return '20';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '10');
                    return '10';
                }
            }
            else if(style == 2){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '50');
                    return '50';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '40');
                    return '40';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '20');
                    return '20';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '10');
                    return '10';
                }
            }
            else if(style == 3){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '50');
                    return '50';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '40');
                    return '40';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '20');
                    return '20';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '10');
                    return '10';
                }
            }
            else if(style == 4){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '100');
                    return '100';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '90');
                    return '90';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '80');
                    return '80';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '70');
                    return '70';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '60');
                    return '60';
                }
            }
            else if(style == 5){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '70');
                    return '70';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '60');
                    return '60';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '40');
                    return '40';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
                }
            }
            else if(style == 6){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '70');
                    return '70';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '60');
                    return '60';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '40');
                    return '40';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
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
        sessionStorage.setItem('first', 'false');
    }

    progressTime() {
        sessionStorage.setItem('month', (parseInt(sessionStorage.getItem('month')) + 1));
    }

    getStrikeAcc() {
        let per = ((parseInt(sessionStorage.getItem('sigStrikes'))/(parseInt(sessionStorage.getItem('totalStrikes')))) * 100).toFixed(0);
        if (per >= 0) {
            return per;
        }
        else {
            return 0;
        }
    }

    getTakedownAcc() {
        let per = (((parseInt(sessionStorage.getItem('takedownsTried')) - parseInt(sessionStorage.getItem('takedownsSuccess')))/(parseInt(sessionStorage.getItem('takedownsTried')))) * 100).toFixed(0);
        if (parseInt(sessionStorage.getItem('takedownsTried')) == 0) {
            return 100;
        }
        else if (parseInt(sessionStorage.getItem('takedownsTried')) == parseInt(sessionStorage.getItem('takedownsSuccess'))) {
            return 100;
        }
        else if (per >= 0) {
            return per;
        }
        else {
            return 0;
        }
    }

    getStatus() {
        let fans = sessionStorage.getItem('followers');

        if (fans >= 1000000) {
            return 'SUPERSTAR';
        }
        else if (fans >= 500000) {
            return 'STAR';
        }
        else if (fans >= 250000) {
            return 'MAIN EVENT';
        }
        else if (fans >= 125000) {
            return 'MAIN CARD';
        }
        else if (fans >= 50000) {
            return 'PRELIMINARY';
        }
        else if (fans >= 25000) {
            return 'EARLY PRELIM';
        }
        else {
            return 'NO NAME';
        }
    }

    payPFL() {
        if (sessionStorage.getItem('org') === '0') {
            if (sessionStorage.getItem('legacyRes1') === 'CHAMPION') {
                return parseInt(sessionStorage.getItem('pay')) + 3000;
            }
            else if (sessionStorage.getItem('legacyRes1') === 'TOP 8') {
                return parseInt(sessionStorage.getItem('pay')) + 1000;
            }
            else {
                return parseInt(sessionStorage.getItem('pay'));
            }
        }
        return 'yikes';
    }

    payUFC() {
        if (sessionStorage.getItem('org') === '0') {
            if (sessionStorage.getItem('legacyRes1') === 'CHAMPION') {
                return (parseInt(sessionStorage.getItem('pay')) + 3000) * 2;
            }
            else if (sessionStorage.getItem('legacyRes1') === 'TOP 8') {
                return (parseInt(sessionStorage.getItem('pay')) + 1000) * 2;
            }
            else {
                return parseInt(sessionStorage.getItem('pay')) * 2;
            }
        }
        return 'yikes';
    }

    newSeason() {
        if (sessionStorage.getItem('org') === '0' && sessionStorage.getItem('legacyRes1') === 'CHAMPION') {
            sessionStorage.setItem('pay', parseInt(sessionStorage.getItem('pay')) + 3000);
        }
        else if (sessionStorage.getItem('org') === '0' && sessionStorage.getItem('legacyRes1') === 'TOP 8') {
            sessionStorage.setItem('pay', parseInt(sessionStorage.getItem('pay')) + 1000);
        }

        if (sessionStorage.getItem('org') === '0') {
            sessionStorage.setItem('contractPay' , '$' + sessionStorage.getItem('pay') + ' SHOW / $0 WIN');
        }
        else {
            sessionStorage.setItem('contractPay' , '$' + sessionStorage.getItem('pay') + ' SHOW / $' + sessionStorage.getItem('pay') + ' WIN');
        }

        sessionStorage.setItem('month', 1);
        sessionStorage.setItem('year', parseInt(sessionStorage.getItem('year')) + 1);

        let playerNR = sessionStorage.getItem('playerNR');
        let playerNRF = sessionStorage.getItem('playerNRF');

        for (let i = 1; i < 25; ++i) {
            let data = null;
            let j = null;

            if (playerNR == i) {
                j = 'nr0';
            }
            else {
                j = 'nr' + i;
            }

            data = JSON.parse(sessionStorage.getItem(j));
            data.rate = '0';
            data.ko = '0';
            data.sub = '0';
            data.swin = '0';
            data.sloss = '0';
            data.meth = '';
            data.prev = 'NR';
            data.rank = 'NR';
            data.pts = '0';

            sessionStorage.setItem(j, JSON.stringify(data));
        }

        for (let i = 1; i < 13; ++i) {
            let data = null;
            let j = null;

            if (playerNRF == i) {
                j = 'nrf0';
            }
            else {
                j = 'nrf' + i;
            }

            data = JSON.parse(sessionStorage.getItem(j));
            data.rate = '0';
            data.ko = '0';
            data.sub = '0';
            data.swin = '0';
            data.sloss = '0';
            data.meth = '';
            data.prev = 'NR';
            data.rank = 'NR';
            data.pts = '0';

            sessionStorage.setItem(j, JSON.stringify(data));
        }

        let player = JSON.parse(sessionStorage.getItem('player'));
        player.rank = 'NR';
        player.ko = '0';
        player.sub = '0';
        player.meth = '';
        player.prev = 'NR';
        player.pts = '0';
        player.rate = '0';
        player.swin = '0';
        player.sloss = '0';
        sessionStorage.setItem('player', JSON.stringify(player));

        sessionStorage.setItem('playerSwin', 0);
        sessionStorage.setItem('playerSloss', 0);
        sessionStorage.setItem('playerPts', 0);
        sessionStorage.setItem('playerRate', 0);
        sessionStorage.setItem('playerKo', 0);
        sessionStorage.setItem('playerSub', 0);
        sessionStorage.setItem('w1res', 2);
        sessionStorage.setItem('w2res', 2);
        sessionStorage.setItem('w3res', 2);
        sessionStorage.setItem('w4res', 2);
        sessionStorage.setItem('w5res', 2);
        sessionStorage.setItem('w6res', 2);
        sessionStorage.setItem('w7res', 2);
        sessionStorage.setItem('w8res', 2);

        sessionStorage.setItem('rank', 'NR');
        sessionStorage.setItem('prev', 'NR');

        sessionStorage.setItem('quarterSeedsM', null);
        sessionStorage.setItem('semiSeedsM', null);
        sessionStorage.setItem('finalSeedsM', null);
        sessionStorage.setItem('quarterSeedsF', null);
        sessionStorage.setItem('semiSeedsF', null);
        sessionStorage.setItem('finalSeedsF', null);

        sessionStorage.setItem('championship', 0);
        sessionStorage.setItem('playoffs', 0);
        sessionStorage.setItem('playerPlayoffs', 0);

        sessionStorage.setItem('firstResults', 'true');

        randomSchedule();
    }

    reSignPFL() {
        if (sessionStorage.getItem('org') === '0') {
            return 'RE';
        }
    }

    reSignUFC() {
        if (sessionStorage.getItem('org') === '1') {
            return 'RE';
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
        let style = sessionStorage.getItem('style');
        let win = sessionStorage.getItem('win');
        let loss = sessionStorage.getItem('loss');
        let month = sessionStorage.getItem('month');
        let year = sessionStorage.getItem('year');
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -730 }} />
                        SIGN WITH AN ORGANIZATION<br/><br/>
                    </div>
                    <div className="App-customize1" style={{ marginTop: 115, marginBotton: 0 }}>
                        <text style={{ color: 'grey' }}>CURRENT SALARY</text><br/>
                        <text>{sessionStorage.getItem('contractPay')}</text>
                    </div>
                    <div className="App-customize1" style={{ marginTop: 25, marginBotton: 0 }}>
                        <ButtonA><text style={{ fontSize: 35 }}>{this.reSignPFL()}SIGN WITH THE PFL</text></ButtonA>
                        <ButtonA><text style={{ fontSize: 35 }}>{this.reSignUFC()}SIGN WITH THE UFC</text></ButtonA>
                    </div>
                    <div className="Fight-offer" style={{marginTop: -30, marginBottom: 0, width: 1200 }}>
                        <Link to='./schedule'><ButtonA1 data-tip data-for="1" onClick={this.newSeason}>SIGN</ButtonA1></Link>
                        <ReactTooltip class="Membership" id="1" place="bottom" effect="solid">${this.payPFL()} show / $0 win<br/>8 fights, 3 playoff fights<br/><text style={{ color: 'gray' }}>${(parseInt(this.payPFL()) * 11) + 50000} max total pay</text></ReactTooltip>
                        <ButtonA1 data-tip data-for="2">SIGN</ButtonA1>
                        <ReactTooltip class="Membership" id="2" place="bottom" effect="solid">${this.payUFC()} show / ${this.payUFC()} win<br/>4 fights<br/><text style={{ color: 'gray' }}>${parseInt(this.payUFC()) * 8} max total pay</text></ReactTooltip>
                    </div>
                    <div className="App-header-style1" style={{marginTop: -618, marginRight: 0}}>
                        <Link to='./manage'><ButtonG style={parseInt(sessionStorage.getItem('month')) > 8 && parseInt(sessionStorage.getItem('month')) < 12 ? (sessionStorage.getItem('playerPlayoffs') === '1' ? {} : {border: '2px solid gray', color: 'gray'}) : {}}>{parseInt(sessionStorage.getItem('month')) == 12 ? 'MANAGE' : 'FIGHT'}</ButtonG></Link>
                        <Link to='./schedule'><Button>SCHEDULE</Button></Link>
                        <Link to='./standingsmen'><Button>MEN</Button></Link>
                        <Link to='./standingswomen'><Button>WOMEN</Button></Link>
                        <Link to={parseInt(sessionStorage.getItem('month')) > 8 ? './playoffspfl' : './cardpfl'}><Button>BRACKET</Button></Link>
                        <Link to={sessionStorage.getItem('firstResults') === 'true' ? './manage' : parseInt(month) > 9 ? './manage' : './resultspfl'}><Button style={sessionStorage.getItem('firstResults') === 'true' ? {border: '2px solid gray', color: 'gray'} : parseInt(month) > 9 ? {border: '2px solid gray', color: 'gray'} : {}}>RESULTS</Button></Link>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: 5, fontSize: 30 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./home'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Manage;
import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import ReactTooltip from "react-tooltip";
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

const ButtonG = styled.button`
background-color: grey;
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
margin-top: 0px;
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

const Button5 = styled.button`
background-color: #00ff7f;
color: black;
padding: 0px;
width: 1300px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button5a = styled.button`
background-color: #00ff7f;
color: black;
padding: 0px;
width: 150px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button5b = styled.button`
background-color: #00ff7f;
color: black;
padding: 0px;
width: 362px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button5c = styled.button`
background-color: #00ff7f;
color: black;
padding: 0px;
width: 288px;
height: 50px;
text-align: center;
margin: 0px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button5d = styled.button`
background-color: #00ff7f;
color: black;
padding: 0px;
width: 235px;
height: 50px;
text-align: right;
margin: 0px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button5e = styled.button`
background-color: #00ff7f;
color: black;
padding: 0px;
width: 265px;
height: 50px;
text-align: right;
margin: 0px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button6 = styled.button`
background-color: #ff3939;
color: white;
padding: 0px;
width: 1300px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button6a = styled.button`
background-color: #ff3939;
color: white;
padding: 0px;
width: 150px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button6b = styled.button`
background-color: #ff3939;
color: white;
padding: 0px;
width: 362px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button6c = styled.button`
background-color: #ff3939;
color: white;
padding: 0px;
width: 288px;
height: 50px;
text-align: center;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button6d = styled.button`
background-color: #ff3939;
color: white;
padding: 0px;
width: 235px;
height: 50px;
text-align: right;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button6e = styled.button`
background-color: #ff3939;
color: white;
padding: 0px;
width: 265px;
height: 50px;
text-align: right;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button7 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 1300px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 2px;
outline: 0;
`

const Button8a = styled.button`
background-color: #ffcc99;
color: black;
padding: 0px;
width: 350px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button8b = styled.button`
background-color: #ffcc99;
color: black;
padding: 0px;
width: 410px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button8c = styled.button`
background-color: #ffcc99;
color: black;
padding: 0px;
width: 110px;
height: 50px;
text-align: center;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button8d = styled.button`
background-color: #ffcc99;
color: black;
padding: 0px;
width: 410px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button8e = styled.button`
background-color: #ffcc99;
color: black;
padding: 0px;
width: 190px;
height: 50px;
text-align: right;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button9a = styled.button`
background-color: #A5ACAF;
color: black;
padding: 0px;
width: 350px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button9b = styled.button`
background-color: #A5ACAF;
color: black;
padding: 0px;
width: 410px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button9c = styled.button`
background-color: #A5ACAF;
color: black;
padding: 0px;
width: 110px;
height: 50px;
text-align: center;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button9d = styled.button`
background-color: #A5ACAF;
color: black;
padding: 0px;
width: 410px;
height: 50px;
text-align: left;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button9e = styled.button`
background-color: #A5ACAF;
color: black;
padding: 0px;
width: 190px;
height: 50px;
text-align: right;
margin: 0px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
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

const ButtonWO = styled.button`
background-color: transparent;
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

class Card extends React.Component {
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
        sessionStorage.setItem('first', false);
    }

    progressTime() {
        sessionStorage.setItem('month', (parseInt(sessionStorage.getItem('month')) + 1));
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
        return ufc - 1;
    }

    getWeight() {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let str = data.weight;

        if(str == "FLYWEIGHT"){
            return 'FLYWEIGHT';
        }
        else if(str == "BANTAMWEIGHT"){
            return 'BANTAMWEIGHT';
        }
        else if(str == "FEATHERWEIGHT"){
            return 'FEATHERWEIGHT';
        }
        else if(str == 'LIGHTWEIGHT'){
            return 'LIGHTWEIGHT';
        }
        else if(str == 'WELTERWEIGHT'){
            return 'WELTERWEIGHT';
        }
        else if(str == 'MIDDLEWEIGHT'){
            return 'MIDDLEWEIGHT';
        }
        else if(str == 'LIGHT HEAVYWEIGHT'){
            return 'LIGHT HEAVYWEIGHT';
        }
        else if(str == 'HEAVYWEIGHT'){
            return 'HEAVYWIGHT';
        }
        else if(str == 'WSTRAWWEIGHT'){
            return 'W. STRAWWEIGHT';
        }
        else if(str == 'WFLYWEIGHT'){
            return 'W. FLYWEIGHT';
        }
        else if(str == 'WBANTAMWEIGHT'){
            return 'W. BANTAMWEIGHT';
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
        let w = '\xa0\xa0\xa0\xa0\xa0';
        let w1 = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
        let ko = '\xa0\xa0';
        let w2 = '\xa0\xa0\xa0';

        let card5 = sessionStorage.getItem('card5');
        let card5a = sessionStorage.getItem('card5a');
        let card6 = sessionStorage.getItem('card6');
        let card6a = sessionStorage.getItem('card6a');
        let card7 = sessionStorage.getItem('card7');
        let card7a = sessionStorage.getItem('card7a');
        let card8 = sessionStorage.getItem('card8');
        let card8a = sessionStorage.getItem('card8a');
        let card9 = sessionStorage.getItem('card9');
        let card9a = sessionStorage.getItem('card9a');
        let card10 = sessionStorage.getItem('card10');
        let card10a = sessionStorage.getItem('card10a');
        let card11 = sessionStorage.getItem('card11');
        let card11a = sessionStorage.getItem('card11a');
        let oppName = sessionStorage.getItem('oppName');
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header2">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: 20 }} />
                        UFC {this.getUfc()} RESULTS<br/>
                        <div className="Record1" style={{ marginTop: 10 }}>
                            <div><Button8a>{w}<b>LIGHT HEAVYWEIGHT</b></Button8a><Button8b><b>10. ALEXANDER VOLKANOVSKI</b></Button8b><Button8c><b>DEF.</b></Button8c><Button8d><b>10. ALEXANDER VOLKANOVSKI</b></Button8d><Button8e><b>TKO • R5</b>{w}</Button8e></div>
                        </div>
                        <div className="Record1">
                            <div><Button8a>{w}<b>W. BANTAMWEIGHT</b></Button8a><Button8b><b>10. ALEXANDER VOLKANOVSKI</b></Button8b><Button8c><b>DEF.</b></Button8c><Button8d><b>10. ALEXANDER VOLKANOVSKI</b></Button8d><Button8e><b>TKO • R5</b>{w}</Button8e></div>
                        </div>
                        <div className="Record1">
                            <div><Button8a>{w}<b>W. BANTAMWEIGHT</b></Button8a><Button8b><b>10. ALEXANDER VOLKANOVSKI</b></Button8b><Button8c><b>DEF.</b></Button8c><Button8d><b>10. ALEXANDER VOLKANOVSKI</b></Button8d><Button8e><b>TKO • R5</b>{w}</Button8e></div>
                        </div>
                        <div className="Record1">
                            <div><Button9a>{w}<b>{this.getWeight()}</b></Button9a><Button9b><b>NR. {data.first} {data.last}</b></Button9b><Button9c><b>DEF.</b></Button9c><Button9d><b>NR. {oppName}</b></Button9d><Button9e><b>TKO • R5</b>{w}</Button9e></div>
                        </div>
                        <div className="Record1">
                            <div><Button9a>{w}<b>{this.getWeight()}</b></Button9a><Button9b><b>NR. {card5}</b></Button9b><Button9c><b>DEF.</b></Button9c><Button9d><b>NR. {card5a}</b></Button9d><Button9e><b>TKO • R5</b>{w}</Button9e></div>
                        </div>
                        <div className="Record1">
                            <div><Button9a>{w}<b>{this.getWeight()}</b></Button9a><Button9b><b>NR. {card6}</b></Button9b><Button9c><b>DEF.</b></Button9c><Button9d><b>NR. {card6a}</b></Button9d><Button9e><b>TKO • R5</b>{w}</Button9e></div>
                        </div>
                        <div className="Record1">
                            <div><Button9a>{w}<b>{this.getWeight()}</b></Button9a><Button9b><b>NR. {card7}</b></Button9b><Button9c><b>DEF.</b></Button9c><Button9d><b>NR. {card7a}</b></Button9d><Button9e><b>TKO • R5</b>{w}</Button9e></div>
                        </div>
                        <div className="Record1">
                            <div><Button9a>{w}<b>{this.getWeight()}</b></Button9a><Button9b><b>NR. {card8}</b></Button9b><Button9c><b>DEF.</b></Button9c><Button9d><b>NR. {card8a}</b></Button9d><Button9e><b>TKO • R5</b>{w}</Button9e></div>
                        </div>
                        <div className="Record1">
                            <div><Button9a>{w}<b>{this.getWeight()}</b></Button9a><Button9b><b>NR. {card9}</b></Button9b><Button9c><b>DEF.</b></Button9c><Button9d><b>NR. {card9a}</b></Button9d><Button9e><b>TKO • R5</b>{w}</Button9e></div>
                        </div>
                        <div className="Record1">
                            <div><Button9a>{w}<b>W. {sessionStorage.getItem('ranWeight1')}</b></Button9a><Button9b><b>NR. {card10}</b></Button9b><Button9c><b>DEF.</b></Button9c><Button9d><b>NR. {card10a}</b></Button9d><Button9e><b>TKO • R5</b>{w}</Button9e></div>
                        </div>
                        <div className="Record1" style={{marginBottom: 1}}>
                            <div><Button9a>{w}<b>W. {sessionStorage.getItem('ranWeight2')}</b></Button9a><Button9b><b>NR. {card11}</b></Button9b><Button9c><b>DEF.</b></Button9c><Button9d><b>NR. {card11a}</b></Button9d><Button9e><b>TKO • R5</b>{w}</Button9e></div>
                        </div>
                    </div><br/>
                    <div className="App-header-style1" style={{marginTop: -45, marginRight: 0}}>
                        <Link to='./fight'><ButtonWO>OFFERS</ButtonWO></Link>
                        <Link to='./card'><ButtonW1>CARD</ButtonW1></Link>
                        <Link to='./fight1'><ButtonW>125</ButtonW></Link>
                        <Link to='./fight2'><ButtonW>135</ButtonW></Link>
                        <Link to='./fight3'><ButtonW>145</ButtonW></Link>
                        <Link to='./fight4'><ButtonW>155</ButtonW></Link>
                        <Link to='./fight5'><ButtonW>170</ButtonW></Link>
                        <Link to='./fight6'><ButtonW>185</ButtonW></Link>
                        <Link to='./fight7'><ButtonW>205</ButtonW></Link>
                        <Link to='./fight8'><ButtonW>265</ButtonW></Link>
                        <Link to='./fight9'><ButtonW>W115</ButtonW></Link>
                        <Link to='./fight10'><ButtonW>W125</ButtonW></Link>
                        <Link to='./fight11'><ButtonW>W135</ButtonW></Link>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: -7, fontSize: 30 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./home'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
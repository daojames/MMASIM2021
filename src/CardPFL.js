import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';
import returnFighterM from './ReturnFighterM';
import returnFighterF from "./ReturnFighterF";

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
width: 900px;
height: 57px;
text-align: left;
margin-top: 3px;
margin-bottom: 3px;
margin-left: 10px;
margin-right: 10px;
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

class CardPFL extends React.Component { 
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
        }
    }

    posC (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('flyC');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('banC');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('feaC');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('ligC');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('welC');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('midC');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lheC');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('heaC');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
    }

    posCrec (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('flyC');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('banC');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('feaC');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('ligC');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('welC');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('midC');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lheC');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('heaC');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
    }

    pos1 (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
    }

    pos1rec (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly1');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban1');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea1');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig1');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel1');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid1');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe1');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea1');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
    }

    pos2 (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly2');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban2');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea2');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig2');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel2');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid2');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe2');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea2');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
    }

    pos2rec (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly2');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban2');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea2');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig2');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel2');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid2');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe2');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea2');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
    }

    pos3 (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly3');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban3');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea3');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig3');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel3');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid3');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe3');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea3');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
    }

    pos3rec (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly3');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban3');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea3');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig3');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel3');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid3');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe3');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea3');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
    }

    pos4 (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly4');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban4');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea4');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig4');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel4');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid4');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe4');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea4');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
    }

    pos4rec (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly4');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban4');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea4');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig4');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel4');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid4');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe4');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea4');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
    }

    pos5 (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly5');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban5');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea5');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig5');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel5');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid5');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe5');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea5');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
    }

    pos5rec (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly5');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban5');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea5');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig5');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel5');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid5');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe5');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea5');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
    }

    pos6 (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly6');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban6');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea6');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig6');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel6');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid6');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe6');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea6');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
    }

    pos6rec (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly6');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban6');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea6');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig6');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel6');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid6');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe6');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea6');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
    }

    pos7 (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly7');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban7');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea7');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig7');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel7');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid7');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe7');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea7');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
    }

    pos7rec (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly7');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban7');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea7');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig7');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel7');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid7');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe7');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea7');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
    }

    pos8 (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly8');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban8');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea8');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig8');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel8');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid8');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe8');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea8');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
    }

    pos8rec (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly8');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban8');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea8');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig8');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel8');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid8');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe8');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea8');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
    }

    pos9 (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly9');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban9');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea9');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig9');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel9');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid9');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe9');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea9');
            data = JSON.parse(data);
            first = data.first;
            last = data.last;
            line = first + ' ' + last;
            return line;
        }
    }

    pos9rec (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly9');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban9');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea9');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig9');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel9');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid9');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe9');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea9');
            data = JSON.parse(data);
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
    }

    pos10 (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1) {
            let data = sessionStorage.getItem('fly10');
            data = JSON.parse(data);
            if (data.first == '-'){
                return '-';
            }
            first = data.first;
            last = data.last;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 2) {
            let data = sessionStorage.getItem('ban10');
            data = JSON.parse(data);
            if (data.first == '-'){
                return '-';
            }
            first = data.first;
            last = data.last;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 3) {
            let data = sessionStorage.getItem('fea10');
            data = JSON.parse(data);
            if (data.first == '-'){
                return '-';
            }
            first = data.first;
            last = data.last;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 4) {
            let data = sessionStorage.getItem('lig10');
            data = JSON.parse(data);
            if (data.first == '-'){
                return '-';
            }
            first = data.first;
            last = data.last;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 5) {
            let data = sessionStorage.getItem('wel10');
            data = JSON.parse(data);
            if (data.first == '-'){
                return '-';
            }
            first = data.first;
            last = data.last;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 6) {
            let data = sessionStorage.getItem('mid10');
            data = JSON.parse(data);
            if (data.first == '-'){
                return '-';
            }
            first = data.first;
            last = data.last;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 7) {
            let data = sessionStorage.getItem('lhe10');
            data = JSON.parse(data);
            if (data.first == '-'){
                return '-';
            }
            first = data.first;
            last = data.last;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 8) {
            let data = sessionStorage.getItem('hea10');
            data = JSON.parse(data);
            if (data.first == '-'){
                return '-';
            }
            first = data.first;
            last = data.last;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
    }

    pos10rec (str) {
        let line = '';
        let first = '';
        let last = '';
        if (str == 1){
            let data = sessionStorage.getItem('fly10');
            data = JSON.parse(data);
            if (data.win == '-') {
                return '';
            }
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 2){
            let data = sessionStorage.getItem('ban10');
            data = JSON.parse(data);
            if (data.win == '-') {
                return '';
            }
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 3){
            let data = sessionStorage.getItem('fea10');
            data = JSON.parse(data);
            if (data.win == '-') {
                return '';
            }
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 4){
            let data = sessionStorage.getItem('lig10');
            data = JSON.parse(data);
            if (data.win == '-') {
                return '';
            }
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 5){
            let data = sessionStorage.getItem('wel10');
            data = JSON.parse(data);
            if (data.win == '-') {
                return '';
            }
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 6){
            let data = sessionStorage.getItem('mid10');
            data = JSON.parse(data);
            if (data.win == '-') {
                return '';
            }
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 7){
            let data = sessionStorage.getItem('lhe10');
            data = JSON.parse(data);
            if (data.win == '-') {
                return '';
            }
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
        else if (str == 8){
            let data = sessionStorage.getItem('hea10');
            data = JSON.parse(data);
            if (data.win == '-') {
                return '';
            }
            first = data.win;
            last = data.loss;
            line = '(' + first + ' - ' + last + ')';
            return line;
        }
    }

    weightClass(str) {
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

    classWeight(str) {
        if (str == 1){
            return 'FLYWEIGHT';
        }
        else if (str == 2){
            return 'BANTAMWEIGHT';
        }
        else if (str == 3){
            return 'FEATHERWEIGHT';
        }
        else if (str == 4){
            return 'LIGHTWEIGHT';
        }
        else if (str == 5){
            return 'WELTERWEIGHT';
        }
        else if (str == 6){
            return 'MIDDLEWEIGHT';
        }
        else if (str == 7){
            return 'LIGHT HEAVYWEIGHT';
        }
        else if (str == 8){
            return 'HEAVYWEIGHT';
        }
        else if (str == 9){
            return 'WSTRAWWEIGHT';
        }
        else if (str == 10){
            return 'WFLYWEIGHT';
        }
        else if (str == 11){
            return 'WBANTAMWEIGHT';
        }
    }

    getRank1() {
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

    getRank2() {
        let data = sessionStorage.getItem('ABC2');
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

    getRank3() {
        let data = sessionStorage.getItem('ABC3');
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

    getRank4() {
        let data = sessionStorage.getItem('ABC4');
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

    getRank5() {
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

    getRec1() {
        let rank = sessionStorage.getItem('rank');
        if (rank == 'NR'){
            let num = sessionStorage.getItem('abc1');
            let str = null;
            if (num == 1) {
                let data = sessionStorage.getItem('nr1');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 2) {
                let data = sessionStorage.getItem('nr2');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 3) {
                let data = sessionStorage.getItem('nr3');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 4) {
                let data = sessionStorage.getItem('nr4');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 5) {
                let data = sessionStorage.getItem('nr5');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 6) {
                let data = sessionStorage.getItem('nr6');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 7) {
                let data = sessionStorage.getItem('nr7');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 8) {
                let data = sessionStorage.getItem('nr8');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 9) {
                let data = sessionStorage.getItem('nr9');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 10) {
                let data = sessionStorage.getItem('nr10');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 11) {
                let data = sessionStorage.getItem('nr11');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 12) {
                let data = sessionStorage.getItem('nr12');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 13) {
                let data = sessionStorage.getItem('nr13');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 14) {
                let data = sessionStorage.getItem('nr14');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 15) {
                let data = sessionStorage.getItem('nr15');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 16) {
                let data = sessionStorage.getItem('nr16');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 17) {
                let data = sessionStorage.getItem('nr17');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 18) {
                let data = sessionStorage.getItem('nr18');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 19) {
                let data = sessionStorage.getItem('nr19');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 20) {
                let data = sessionStorage.getItem('nr20');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 21) {
                let data = sessionStorage.getItem('nr21');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 101) {
                let data = sessionStorage.getItem('nrf1');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 102) {
                let data = sessionStorage.getItem('nrf2');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 103) {
                let data = sessionStorage.getItem('nrf3');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 104) {
                let data = sessionStorage.getItem('nrf4');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 105) {
                let data = sessionStorage.getItem('nrf5');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 106) {
                let data = sessionStorage.getItem('nrf6');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 107) {
                let data = sessionStorage.getItem('nrf7');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 108) {
                let data = sessionStorage.getItem('nrf8');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 109) {
                let data = sessionStorage.getItem('nrf9');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            return str;
        }
    }

    getRec2() {
        let rank = sessionStorage.getItem('rank');
        if (rank == 'NR'){
            let num = sessionStorage.getItem('abc2');
            let str = null;
            if (num == 1) {
                let data = sessionStorage.getItem('nr1');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 2) {
                let data = sessionStorage.getItem('nr2');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 3) {
                let data = sessionStorage.getItem('nr3');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 4) {
                let data = sessionStorage.getItem('nr4');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 5) {
                let data = sessionStorage.getItem('nr5');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 6) {
                let data = sessionStorage.getItem('nr6');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 7) {
                let data = sessionStorage.getItem('nr7');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 8) {
                let data = sessionStorage.getItem('nr8');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 9) {
                let data = sessionStorage.getItem('nr9');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 10) {
                let data = sessionStorage.getItem('nr10');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 11) {
                let data = sessionStorage.getItem('nr11');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 12) {
                let data = sessionStorage.getItem('nr12');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 13) {
                let data = sessionStorage.getItem('nr13');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 14) {
                let data = sessionStorage.getItem('nr14');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 15) {
                let data = sessionStorage.getItem('nr15');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 16) {
                let data = sessionStorage.getItem('nr16');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 17) {
                let data = sessionStorage.getItem('nr17');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 18) {
                let data = sessionStorage.getItem('nr18');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 19) {
                let data = sessionStorage.getItem('nr19');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 20) {
                let data = sessionStorage.getItem('nr20');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 21) {
                let data = sessionStorage.getItem('nr21');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 101) {
                let data = sessionStorage.getItem('nrf1');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 102) {
                let data = sessionStorage.getItem('nrf2');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 103) {
                let data = sessionStorage.getItem('nrf3');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 104) {
                let data = sessionStorage.getItem('nrf4');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 105) {
                let data = sessionStorage.getItem('nrf5');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 106) {
                let data = sessionStorage.getItem('nrf6');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 107) {
                let data = sessionStorage.getItem('nrf7');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 108) {
                let data = sessionStorage.getItem('nrf8');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 109) {
                let data = sessionStorage.getItem('nrf9');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            return str;
        }
    }

    getRec3() {
        let rank = sessionStorage.getItem('rank');
        if (rank == 'NR'){
            let num = sessionStorage.getItem('abc3');
            let str = null;
            if (num == 1) {
                let data = sessionStorage.getItem('nr1');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 2) {
                let data = sessionStorage.getItem('nr2');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 3) {
                let data = sessionStorage.getItem('nr3');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 4) {
                let data = sessionStorage.getItem('nr4');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 5) {
                let data = sessionStorage.getItem('nr5');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 6) {
                let data = sessionStorage.getItem('nr6');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 7) {
                let data = sessionStorage.getItem('nr7');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 8) {
                let data = sessionStorage.getItem('nr8');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 9) {
                let data = sessionStorage.getItem('nr9');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 10) {
                let data = sessionStorage.getItem('nr10');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 11) {
                let data = sessionStorage.getItem('nr11');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 12) {
                let data = sessionStorage.getItem('nr12');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 13) {
                let data = sessionStorage.getItem('nr13');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 14) {
                let data = sessionStorage.getItem('nr14');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 15) {
                let data = sessionStorage.getItem('nr15');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 16) {
                let data = sessionStorage.getItem('nr16');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 17) {
                let data = sessionStorage.getItem('nr17');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 18) {
                let data = sessionStorage.getItem('nr18');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 19) {
                let data = sessionStorage.getItem('nr19');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 20) {
                let data = sessionStorage.getItem('nr20');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 21) {
                let data = sessionStorage.getItem('nr21');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 101) {
                let data = sessionStorage.getItem('nrf1');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 102) {
                let data = sessionStorage.getItem('nrf2');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 103) {
                let data = sessionStorage.getItem('nrf3');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 104) {
                let data = sessionStorage.getItem('nrf4');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 105) {
                let data = sessionStorage.getItem('nrf5');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 106) {
                let data = sessionStorage.getItem('nrf6');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 107) {
                let data = sessionStorage.getItem('nrf7');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 108) {
                let data = sessionStorage.getItem('nrf8');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 109) {
                let data = sessionStorage.getItem('nrf9');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            return str;
        }
    }

    getRec4() {
        let rank = sessionStorage.getItem('rank');
        if (rank == 'NR'){
            let num = sessionStorage.getItem('abc4');
            let str = null;
            if (num == 1) {
                let data = sessionStorage.getItem('nr1');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 2) {
                let data = sessionStorage.getItem('nr2');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 3) {
                let data = sessionStorage.getItem('nr3');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 4) {
                let data = sessionStorage.getItem('nr4');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 5) {
                let data = sessionStorage.getItem('nr5');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 6) {
                let data = sessionStorage.getItem('nr6');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 7) {
                let data = sessionStorage.getItem('nr7');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 8) {
                let data = sessionStorage.getItem('nr8');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 9) {
                let data = sessionStorage.getItem('nr9');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 10) {
                let data = sessionStorage.getItem('nr10');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 11) {
                let data = sessionStorage.getItem('nr11');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 12) {
                let data = sessionStorage.getItem('nr12');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 13) {
                let data = sessionStorage.getItem('nr13');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 14) {
                let data = sessionStorage.getItem('nr14');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 15) {
                let data = sessionStorage.getItem('nr15');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 16) {
                let data = sessionStorage.getItem('nr16');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 17) {
                let data = sessionStorage.getItem('nr17');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 18) {
                let data = sessionStorage.getItem('nr18');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 19) {
                let data = sessionStorage.getItem('nr19');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 20) {
                let data = sessionStorage.getItem('nr20');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 21) {
                let data = sessionStorage.getItem('nr21');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 101) {
                let data = sessionStorage.getItem('nrf1');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 102) {
                let data = sessionStorage.getItem('nrf2');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 103) {
                let data = sessionStorage.getItem('nrf3');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 104) {
                let data = sessionStorage.getItem('nrf4');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 105) {
                let data = sessionStorage.getItem('nrf5');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 106) {
                let data = sessionStorage.getItem('nrf6');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 107) {
                let data = sessionStorage.getItem('nrf7');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 108) {
                let data = sessionStorage.getItem('nrf8');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 109) {
                let data = sessionStorage.getItem('nrf9');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            return str;
        }
    }

    getRec5() {
        let rank = sessionStorage.getItem('rank');
        if (rank == 'NR'){
            let num = sessionStorage.getItem('abc5');
            let str = null;
            if (num == 1) {
                let data = sessionStorage.getItem('nr1');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 2) {
                let data = sessionStorage.getItem('nr2');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 3) {
                let data = sessionStorage.getItem('nr3');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 4) {
                let data = sessionStorage.getItem('nr4');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 5) {
                let data = sessionStorage.getItem('nr5');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 6) {
                let data = sessionStorage.getItem('nr6');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 7) {
                let data = sessionStorage.getItem('nr7');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 8) {
                let data = sessionStorage.getItem('nr8');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 9) {
                let data = sessionStorage.getItem('nr9');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 10) {
                let data = sessionStorage.getItem('nr10');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 11) {
                let data = sessionStorage.getItem('nr11');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 12) {
                let data = sessionStorage.getItem('nr12');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 13) {
                let data = sessionStorage.getItem('nr13');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 14) {
                let data = sessionStorage.getItem('nr14');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 15) {
                let data = sessionStorage.getItem('nr15');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 16) {
                let data = sessionStorage.getItem('nr16');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 17) {
                let data = sessionStorage.getItem('nr17');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 18) {
                let data = sessionStorage.getItem('nr18');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 19) {
                let data = sessionStorage.getItem('nr19');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 20) {
                let data = sessionStorage.getItem('nr20');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 21) {
                let data = sessionStorage.getItem('nr21');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 101) {
                let data = sessionStorage.getItem('nrf1');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 102) {
                let data = sessionStorage.getItem('nrf2');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 103) {
                let data = sessionStorage.getItem('nrf3');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 104) {
                let data = sessionStorage.getItem('nrf4');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 105) {
                let data = sessionStorage.getItem('nrf5');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 106) {
                let data = sessionStorage.getItem('nrf6');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 107) {
                let data = sessionStorage.getItem('nrf7');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 108) {
                let data = sessionStorage.getItem('nrf8');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            else if (num == 109) {
                let data = sessionStorage.getItem('nrf9');
                data = JSON.parse(data);
                str = '(' + data.win + ' - ' + data.loss + ')';
            }
            return str;
        }
    }

    getFight1() {
        let rank = sessionStorage.getItem('rank');
        if (rank == 'NR'){
            let num = sessionStorage.getItem('abc1');
            let str = null;
            if (num == 1) {
                let data = sessionStorage.getItem('nr1');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 2) {
                let data = sessionStorage.getItem('nr2');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 3) {
                let data = sessionStorage.getItem('nr3');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 4) {
                let data = sessionStorage.getItem('nr4');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 5) {
                let data = sessionStorage.getItem('nr5');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 6) {
                let data = sessionStorage.getItem('nr6');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 7) {
                let data = sessionStorage.getItem('nr7');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 8) {
                let data = sessionStorage.getItem('nr8');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 9) {
                let data = sessionStorage.getItem('nr9');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 10) {
                let data = sessionStorage.getItem('nr10');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 11) {
                let data = sessionStorage.getItem('nr11');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 12) {
                let data = sessionStorage.getItem('nr12');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 13) {
                let data = sessionStorage.getItem('nr13');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 14) {
                let data = sessionStorage.getItem('nr14');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 15) {
                let data = sessionStorage.getItem('nr15');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 16) {
                let data = sessionStorage.getItem('nr16');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 17) {
                let data = sessionStorage.getItem('nr17');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 18) {
                let data = sessionStorage.getItem('nr18');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 19) {
                let data = sessionStorage.getItem('nr19');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 20) {
                let data = sessionStorage.getItem('nr20');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 21) {
                let data = sessionStorage.getItem('nr21');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 101) {
                let data = sessionStorage.getItem('nrf1');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 102) {
                let data = sessionStorage.getItem('nrf2');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 103) {
                let data = sessionStorage.getItem('nrf3');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 104) {
                let data = sessionStorage.getItem('nrf4');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 105) {
                let data = sessionStorage.getItem('nrf5');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 106) {
                let data = sessionStorage.getItem('nrf6');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 107) {
                let data = sessionStorage.getItem('nrf7');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 108) {
                let data = sessionStorage.getItem('nrf8');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 109) {
                let data = sessionStorage.getItem('nrf9');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            return str;
        }
    }

    getFight2() {
        let rank = sessionStorage.getItem('rank');
        if (rank == 'NR'){
            let num = sessionStorage.getItem('abc2');
            let str = null;
            if (num == 1) {
                let data = sessionStorage.getItem('nr1');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 2) {
                let data = sessionStorage.getItem('nr2');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 3) {
                let data = sessionStorage.getItem('nr3');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 4) {
                let data = sessionStorage.getItem('nr4');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 5) {
                let data = sessionStorage.getItem('nr5');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 6) {
                let data = sessionStorage.getItem('nr6');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 7) {
                let data = sessionStorage.getItem('nr7');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 8) {
                let data = sessionStorage.getItem('nr8');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 9) {
                let data = sessionStorage.getItem('nr9');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 10) {
                let data = sessionStorage.getItem('nr10');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 11) {
                let data = sessionStorage.getItem('nr11');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 12) {
                let data = sessionStorage.getItem('nr12');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 13) {
                let data = sessionStorage.getItem('nr13');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 14) {
                let data = sessionStorage.getItem('nr14');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 15) {
                let data = sessionStorage.getItem('nr15');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 16) {
                let data = sessionStorage.getItem('nr16');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 17) {
                let data = sessionStorage.getItem('nr17');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 18) {
                let data = sessionStorage.getItem('nr18');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 19) {
                let data = sessionStorage.getItem('nr19');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 20) {
                let data = sessionStorage.getItem('nr20');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 21) {
                let data = sessionStorage.getItem('nr21');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 101) {
                let data = sessionStorage.getItem('nrf1');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 102) {
                let data = sessionStorage.getItem('nrf2');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 103) {
                let data = sessionStorage.getItem('nrf3');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 104) {
                let data = sessionStorage.getItem('nrf4');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 105) {
                let data = sessionStorage.getItem('nrf5');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 106) {
                let data = sessionStorage.getItem('nrf6');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 107) {
                let data = sessionStorage.getItem('nrf7');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 108) {
                let data = sessionStorage.getItem('nrf8');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 109) {
                let data = sessionStorage.getItem('nrf9');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            return str;
        }
    }

    getFight3() {
        let rank = sessionStorage.getItem('rank');
        if (rank == 'NR'){
            let num = sessionStorage.getItem('abc3');
            let str = null;
            if (num == 1) {
                let data = sessionStorage.getItem('nr1');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 2) {
                let data = sessionStorage.getItem('nr2');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 3) {
                let data = sessionStorage.getItem('nr3');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 4) {
                let data = sessionStorage.getItem('nr4');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 5) {
                let data = sessionStorage.getItem('nr5');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 6) {
                let data = sessionStorage.getItem('nr6');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 7) {
                let data = sessionStorage.getItem('nr7');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 8) {
                let data = sessionStorage.getItem('nr8');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 9) {
                let data = sessionStorage.getItem('nr9');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 10) {
                let data = sessionStorage.getItem('nr10');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 11) {
                let data = sessionStorage.getItem('nr11');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 12) {
                let data = sessionStorage.getItem('nr12');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 13) {
                let data = sessionStorage.getItem('nr13');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 14) {
                let data = sessionStorage.getItem('nr14');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 15) {
                let data = sessionStorage.getItem('nr15');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 16) {
                let data = sessionStorage.getItem('nr16');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 17) {
                let data = sessionStorage.getItem('nr17');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 18) {
                let data = sessionStorage.getItem('nr18');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 19) {
                let data = sessionStorage.getItem('nr19');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 20) {
                let data = sessionStorage.getItem('nr20');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 21) {
                let data = sessionStorage.getItem('nr21');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 101) {
                let data = sessionStorage.getItem('nrf1');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 102) {
                let data = sessionStorage.getItem('nrf2');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 103) {
                let data = sessionStorage.getItem('nrf3');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 104) {
                let data = sessionStorage.getItem('nrf4');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 105) {
                let data = sessionStorage.getItem('nrf5');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 106) {
                let data = sessionStorage.getItem('nrf6');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 107) {
                let data = sessionStorage.getItem('nrf7');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 108) {
                let data = sessionStorage.getItem('nrf8');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 109) {
                let data = sessionStorage.getItem('nrf9');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            return str;
        }
    }

    getFight4() {
        let rank = sessionStorage.getItem('rank');
        if (rank == 'NR'){
            let num = sessionStorage.getItem('abc4');
            let str = null;
            if (num == 1) {
                let data = sessionStorage.getItem('nr1');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 2) {
                let data = sessionStorage.getItem('nr2');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 3) {
                let data = sessionStorage.getItem('nr3');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 4) {
                let data = sessionStorage.getItem('nr4');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 5) {
                let data = sessionStorage.getItem('nr5');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 6) {
                let data = sessionStorage.getItem('nr6');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 7) {
                let data = sessionStorage.getItem('nr7');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 8) {
                let data = sessionStorage.getItem('nr8');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 9) {
                let data = sessionStorage.getItem('nr9');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 10) {
                let data = sessionStorage.getItem('nr10');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 11) {
                let data = sessionStorage.getItem('nr11');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 12) {
                let data = sessionStorage.getItem('nr12');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 13) {
                let data = sessionStorage.getItem('nr13');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 14) {
                let data = sessionStorage.getItem('nr14');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 15) {
                let data = sessionStorage.getItem('nr15');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 16) {
                let data = sessionStorage.getItem('nr16');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 17) {
                let data = sessionStorage.getItem('nr17');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 18) {
                let data = sessionStorage.getItem('nr18');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 19) {
                let data = sessionStorage.getItem('nr19');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 20) {
                let data = sessionStorage.getItem('nr20');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 21) {
                let data = sessionStorage.getItem('nr21');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 101) {
                let data = sessionStorage.getItem('nrf1');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 102) {
                let data = sessionStorage.getItem('nrf2');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 103) {
                let data = sessionStorage.getItem('nrf3');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 104) {
                let data = sessionStorage.getItem('nrf4');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 105) {
                let data = sessionStorage.getItem('nrf5');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 106) {
                let data = sessionStorage.getItem('nrf6');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 107) {
                let data = sessionStorage.getItem('nrf7');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 108) {
                let data = sessionStorage.getItem('nrf8');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 109) {
                let data = sessionStorage.getItem('nrf9');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            return str;
        }
    }

    getFight5() {
        let rank = sessionStorage.getItem('rank');
        if (rank == 'NR'){
            let num = sessionStorage.getItem('abc5');
            let str = null;
            if (num == 1) {
                let data = sessionStorage.getItem('nr1');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 2) {
                let data = sessionStorage.getItem('nr2');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 3) {
                let data = sessionStorage.getItem('nr3');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 4) {
                let data = sessionStorage.getItem('nr4');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 5) {
                let data = sessionStorage.getItem('nr5');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 6) {
                let data = sessionStorage.getItem('nr6');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 7) {
                let data = sessionStorage.getItem('nr7');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 8) {
                let data = sessionStorage.getItem('nr8');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 9) {
                let data = sessionStorage.getItem('nr9');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 10) {
                let data = sessionStorage.getItem('nr10');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 11) {
                let data = sessionStorage.getItem('nr11');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 12) {
                let data = sessionStorage.getItem('nr12');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 13) {
                let data = sessionStorage.getItem('nr13');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 14) {
                let data = sessionStorage.getItem('nr14');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 15) {
                let data = sessionStorage.getItem('nr15');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 16) {
                let data = sessionStorage.getItem('nr16');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 17) {
                let data = sessionStorage.getItem('nr17');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 18) {
                let data = sessionStorage.getItem('nr18');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 19) {
                let data = sessionStorage.getItem('nr19');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 20) {
                let data = sessionStorage.getItem('nr20');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 21) {
                let data = sessionStorage.getItem('nr21');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 101) {
                let data = sessionStorage.getItem('nrf1');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 102) {
                let data = sessionStorage.getItem('nrf2');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 103) {
                let data = sessionStorage.getItem('nrf3');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 104) {
                let data = sessionStorage.getItem('nrf4');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 105) {
                let data = sessionStorage.getItem('nrf5');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 106) {
                let data = sessionStorage.getItem('nrf6');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 107) {
                let data = sessionStorage.getItem('nrf7');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 108) {
                let data = sessionStorage.getItem('nrf8');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            else if (num == 109) {
                let data = sessionStorage.getItem('nrf9');
                data = JSON.parse(data);
                str = data.first + ' ' + data.last;
            }
            return str;
        }
    }

    getMoney1() {
        let rank = sessionStorage.getItem('rank');
        let money = 0;

        if (rank == 'NR') {
            let num = parseInt(sessionStorage.getItem('abc1'));
            let no = null;

            switch(num) {
                case 1:
                    no = 'nr1';
                break;
                case 2:
                    no = 'nr2';
                break;
                case 3:
                    no = 'nr3';
                break;
                case 4:
                    no = 'nr4';
                break;
                case 5:
                    no = 'nr5';
                break;
                case 6:
                    no = 'nr6';
                break;
                case 7:
                    no = 'nr7';
                break;
                case 8:
                    no = 'nr8';
                break;
                case 9:
                    no = 'nr9';
                break;
                case 10:
                    no = 'nr10';
                break;
                case 11:
                    no = 'nr11';
                break;
                case 12:
                    no = 'nr12';
                break;
                case 13:
                    no = 'nr13';
                break;
                case 14:
                    no = 'nr14';
                break;
                case 15:
                    no = 'nr15';
                break;
                case 16:
                    no = 'nr16';
                break;
                case 17:
                    no = 'nr17';
                break;
                case 18:
                    no = 'nr18';
                break;
                case 19:
                    no = 'nr19';
                break;
                case 20:
                    no = 'nr20';
                break;
                case 21:
                    no = 'nr21';
                break;
                case 101:
                    no = 'nrf1';
                break;
                case 102:
                    no = 'nrf2';
                break;
                case 103:
                    no = 'nrf3';
                break;
                case 104:
                    no = 'nrf4';
                break;
                case 105:
                    no = 'nrf5';
                break;
                case 106:
                    no = 'nrf6';
                break;
                case 107:
                    no = 'nrf7';
                break;
                case 108:
                    no = 'nrf8';
                break;
                case 109:
                    no = 'nrf9';
                break;
            }
            let data = sessionStorage.getItem(no);
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 1) + (2000 * parseInt(data.win));
        }
        
        return '$' + money;
    }

    getMoney2() {
        let rank = sessionStorage.getItem('rank');
        let money = 0;

        if (rank == 'NR') {
            let num = parseInt(sessionStorage.getItem('abc2'));
            let no = null;

            switch(num) {
                case 1:
                    no = 'nr1';
                break;
                case 2:
                    no = 'nr2';
                break;
                case 3:
                    no = 'nr3';
                break;
                case 4:
                    no = 'nr4';
                break;
                case 5:
                    no = 'nr5';
                break;
                case 6:
                    no = 'nr6';
                break;
                case 7:
                    no = 'nr7';
                break;
                case 8:
                    no = 'nr8';
                break;
                case 9:
                    no = 'nr9';
                break;
                case 10:
                    no = 'nr10';
                break;
                case 11:
                    no = 'nr11';
                break;
                case 12:
                    no = 'nr12';
                break;
                case 13:
                    no = 'nr13';
                break;
                case 14:
                    no = 'nr14';
                break;
                case 15:
                    no = 'nr15';
                break;
                case 16:
                    no = 'nr16';
                break;
                case 17:
                    no = 'nr17';
                break;
                case 18:
                    no = 'nr18';
                break;
                case 19:
                    no = 'nr19';
                break;
                case 20:
                    no = 'nr20';
                break;
                case 21:
                    no = 'nr21';
                break;
                case 101:
                    no = 'nrf1';
                break;
                case 102:
                    no = 'nrf2';
                break;
                case 103:
                    no = 'nrf3';
                break;
                case 104:
                    no = 'nrf4';
                break;
                case 105:
                    no = 'nrf5';
                break;
                case 106:
                    no = 'nrf6';
                break;
                case 107:
                    no = 'nrf7';
                break;
                case 108:
                    no = 'nrf8';
                break;
                case 109:
                    no = 'nrf9';
                break;
            }
            let data = sessionStorage.getItem(no);
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 1) + (2000 * parseInt(data.win));
        }
        
        return '$' + money;
    }

    getMoney3() {
        let rank = sessionStorage.getItem('rank');
        let money = 0;

        if (rank == 'NR') {
            let num = parseInt(sessionStorage.getItem('abc3'));
            let no = null;

            switch(num) {
                case 1:
                    no = 'nr1';
                break;
                case 2:
                    no = 'nr2';
                break;
                case 3:
                    no = 'nr3';
                break;
                case 4:
                    no = 'nr4';
                break;
                case 5:
                    no = 'nr5';
                break;
                case 6:
                    no = 'nr6';
                break;
                case 7:
                    no = 'nr7';
                break;
                case 8:
                    no = 'nr8';
                break;
                case 9:
                    no = 'nr9';
                break;
                case 10:
                    no = 'nr10';
                break;
                case 11:
                    no = 'nr11';
                break;
                case 12:
                    no = 'nr12';
                break;
                case 13:
                    no = 'nr13';
                break;
                case 14:
                    no = 'nr14';
                break;
                case 15:
                    no = 'nr15';
                break;
                case 16:
                    no = 'nr16';
                break;
                case 17:
                    no = 'nr17';
                break;
                case 18:
                    no = 'nr18';
                break;
                case 19:
                    no = 'nr19';
                break;
                case 20:
                    no = 'nr20';
                break;
                case 21:
                    no = 'nr21';
                break;
                case 101:
                    no = 'nrf1';
                break;
                case 102:
                    no = 'nrf2';
                break;
                case 103:
                    no = 'nrf3';
                break;
                case 104:
                    no = 'nrf4';
                break;
                case 105:
                    no = 'nrf5';
                break;
                case 106:
                    no = 'nrf6';
                break;
                case 107:
                    no = 'nrf7';
                break;
                case 108:
                    no = 'nrf8';
                break;
                case 109:
                    no = 'nrf9';
                break;
            }
            let data = sessionStorage.getItem(no);
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 1) + (2000 * parseInt(data.win));
        }
        
        return '$' + money;
    }

    getMoney4() {
        let rank = sessionStorage.getItem('rank');
        let money = 0;

        if (rank == 'NR') {
            let num = parseInt(sessionStorage.getItem('abc4'));
            let no = null;

            switch(num) {
                case 1:
                    no = 'nr1';
                break;
                case 2:
                    no = 'nr2';
                break;
                case 3:
                    no = 'nr3';
                break;
                case 4:
                    no = 'nr4';
                break;
                case 5:
                    no = 'nr5';
                break;
                case 6:
                    no = 'nr6';
                break;
                case 7:
                    no = 'nr7';
                break;
                case 8:
                    no = 'nr8';
                break;
                case 9:
                    no = 'nr9';
                break;
                case 10:
                    no = 'nr10';
                break;
                case 11:
                    no = 'nr11';
                break;
                case 12:
                    no = 'nr12';
                break;
                case 13:
                    no = 'nr13';
                break;
                case 14:
                    no = 'nr14';
                break;
                case 15:
                    no = 'nr15';
                break;
                case 16:
                    no = 'nr16';
                break;
                case 17:
                    no = 'nr17';
                break;
                case 18:
                    no = 'nr18';
                break;
                case 19:
                    no = 'nr19';
                break;
                case 20:
                    no = 'nr20';
                break;
                case 21:
                    no = 'nr21';
                break;
                case 101:
                    no = 'nrf1';
                break;
                case 102:
                    no = 'nrf2';
                break;
                case 103:
                    no = 'nrf3';
                break;
                case 104:
                    no = 'nrf4';
                break;
                case 105:
                    no = 'nrf5';
                break;
                case 106:
                    no = 'nrf6';
                break;
                case 107:
                    no = 'nrf7';
                break;
                case 108:
                    no = 'nrf8';
                break;
                case 109:
                    no = 'nrf9';
                break;
            }
            let data = sessionStorage.getItem(no);
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 1) + (2000 * parseInt(data.win));
        }
        
        return '$' + money;
    }

    getMoney5() {
        let rank = sessionStorage.getItem('rank');
        let money = 0;

        if (rank == 'NR') {
            let num = parseInt(sessionStorage.getItem('abc5'));
            let no = null;

            switch(num) {
                case 1:
                    no = 'nr1';
                break;
                case 2:
                    no = 'nr2';
                break;
                case 3:
                    no = 'nr3';
                break;
                case 4:
                    no = 'nr4';
                break;
                case 5:
                    no = 'nr5';
                break;
                case 6:
                    no = 'nr6';
                break;
                case 7:
                    no = 'nr7';
                break;
                case 8:
                    no = 'nr8';
                break;
                case 9:
                    no = 'nr9';
                break;
                case 10:
                    no = 'nr10';
                break;
                case 11:
                    no = 'nr11';
                break;
                case 12:
                    no = 'nr12';
                break;
                case 13:
                    no = 'nr13';
                break;
                case 14:
                    no = 'nr14';
                break;
                case 15:
                    no = 'nr15';
                break;
                case 16:
                    no = 'nr16';
                break;
                case 17:
                    no = 'nr17';
                break;
                case 18:
                    no = 'nr18';
                break;
                case 19:
                    no = 'nr19';
                break;
                case 20:
                    no = 'nr20';
                break;
                case 21:
                    no = 'nr21';
                break;
                case 101:
                    no = 'nrf1';
                break;
                case 102:
                    no = 'nrf2';
                break;
                case 103:
                    no = 'nrf3';
                break;
                case 104:
                    no = 'nrf4';
                break;
                case 105:
                    no = 'nrf5';
                break;
                case 106:
                    no = 'nrf6';
                break;
                case 107:
                    no = 'nrf7';
                break;
                case 108:
                    no = 'nrf8';
                break;
                case 109:
                    no = 'nrf9';
                break;
            }
            let data = sessionStorage.getItem(no);
            data = JSON.parse(data);
            money = (parseInt(sessionStorage.getItem('followers')) * 1) + (2000 * parseInt(data.win));
        }
        
        return '$' + money;
    }

    findRank(str) {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).rank;
    }

    findRank1(str) {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).rank;
    }

    findName(str) {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).first + ' ' + JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).last;
    }

    findName1(str) {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).first + ' ' + JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).last;
    }

    findRec(str) {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        return '(' + JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).swin + ' - ' + JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).sloss + ')';
    }

    findRec1(str) {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        return '(' + JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).swin + ' - ' + JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).sloss + ')';
    }

    findWeek(str) {
        let month = sessionStorage.getItem('month');
        return 'w' + month + str;
    }

    render() {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let weight = data.weight;
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
        let whitespace = '\xa0\xa0\xa0';
        let white = '\xa0\xa0';
        let space = '\xa0';
        let wc = sessionStorage.getItem('wc0');
        sessionStorage.setItem('wc', sessionStorage.getItem('wc0'));
        let rank1 = null;
        let name1 = null;
        let rec1 = null;
        let rank2 = null;
        let name2 = null;
        let rec2 = null;
        if (data.weight != "WSTRAWWEIGHT" && data.weight != "WFLYWEIGHT" && data.weight != "WBANTAMWEIGHT") {
            rank1 = sessionStorage.getItem('rank');
            name1 = data.first + ' ' + data.last;
            rec1 = '(' + sessionStorage.getItem('playerSwin') + ' - ' + sessionStorage.getItem('playerSloss') + ')';
            rank2 = this.findRank1('f1m1');
            name2 = this.findName1('f1m1');
            rec2 = this.findRec1('f1m1');
        }
        else {
            rank1 = this.findRank('f1p1');
            name1 = this.findName('f1p1');
            rec1 = this.findRec('f1p1');
            rank2 = sessionStorage.getItem('rank');
            name2 = data.first + ' ' + data.last;
            rec2 = '(' + sessionStorage.getItem('playerSwin') + ' - ' + sessionStorage.getItem('playerSloss') + ')';
        }
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -730 }} />
                        PFL {month} FIGHT CARD<br/><br/>
                    </div>
                    <div className="App-customize4" style={{marginTop: 110, marginBottom: 0, width: 1920 }}>
                        <Button8><center><text style={{color: 'grey'}}>{rank1}</text><text> {name1}</text><text style={{color: 'grey'}}> {rec1}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank('f1p2')} </text><text>{this.findName('f1p2')}</text><text style={{color: 'grey'}}> {this.findRec('f1p2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank('f2p1')}</text><text> {this.findName('f2p1')}</text><text style={{color: 'grey'}}> {this.findRec('f2p1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank('f2p2')} </text><text>{this.findName('f2p2')}</text><text style={{color: 'grey'}}> {this.findRec('f2p2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank('f3p1')}</text><text> {this.findName('f3p1')}</text><text style={{color: 'grey'}}> {this.findRec('f3p1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank('f3p2')} </text><text>{this.findName('f3p2')}</text><text style={{color: 'grey'}}> {this.findRec('f3p2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank('f4p1')}</text><text> {this.findName('f4p1')}</text><text style={{color: 'grey'}}> {this.findRec('f4p1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank('f4p2')} </text><text>{this.findName('f4p2')}</text><text style={{color: 'grey'}}> {this.findRec('f4p2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank('f5p1')}</text><text> {this.findName('f5p1')}</text><text style={{color: 'grey'}}> {this.findRec('f5p1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank('f5p2')} </text><text>{this.findName('f5p2')}</text><text style={{color: 'grey'}}> {this.findRec('f5p2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank('f6p1')}</text><text> {this.findName('f6p1')}</text><text style={{color: 'grey'}}> {this.findRec('f6p1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank('f6p2')} </text><text>{this.findName('f6p2')}</text><text style={{color: 'grey'}}> {this.findRec('f6p2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank('f7p1')}</text><text> {this.findName('f7p1')}</text><text style={{color: 'grey'}}> {this.findRec('f7p1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank('f7p2')} </text><text>{this.findName('f7p2')}</text><text style={{color: 'grey'}}> {this.findRec('f7p2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank('f8p1')}</text><text> {this.findName('f8p1')}</text><text style={{color: 'grey'}}> {this.findRec('f8p1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank('f8p2')} </text><text>{this.findName('f8p2')}</text><text style={{color: 'grey'}}> {this.findRec('f8p2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank('f9p1')}</text><text> {this.findName('f9p1')}</text><text style={{color: 'grey'}}> {this.findRec('f9p1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank('f9p2')} </text><text>{this.findName('f9p2')}</text><text style={{color: 'grey'}}> {this.findRec('f9p2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank('f10p1')}</text><text> {this.findName('f10p1')}</text><text style={{color: 'grey'}}> {this.findRec('f10p1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank('f10p2')} </text><text>{this.findName('f10p2')}</text><text style={{color: 'grey'}}> {this.findRec('f10p2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank('f11p1')}</text><text> {this.findName('f11p1')}</text><text style={{color: 'grey'}}> {this.findRec('f11p1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank('f11p2')} </text><text>{this.findName('f11p2')}</text><text style={{color: 'grey'}}> {this.findRec('f11p2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank('f12p1')}</text><text> {this.findName('f12p1')}</text><text style={{color: 'grey'}}> {this.findRec('f12p1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank('f12p2')} </text><text>{this.findName('f12p2')}</text><text style={{color: 'grey'}}> {this.findRec('f12p2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{rank2}</text><text> {name2}</text><text style={{color: 'grey'}}> {rec2}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank1('f1m2')} </text><text>{this.findName1('f1m2')}</text><text style={{color: 'grey'}}> {this.findRec1('f1m2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank1('f2m1')}</text><text> {this.findName1('f2m1')}</text><text style={{color: 'grey'}}> {this.findRec1('f2m1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank1('f2m2')} </text><text>{this.findName1('f2m2')}</text><text style={{color: 'grey'}}> {this.findRec1('f2m2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank1('f3m1')}</text><text> {this.findName1('f3m1')}</text><text style={{color: 'grey'}}> {this.findRec1('f3m1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank1('f3m2')} </text><text>{this.findName1('f3m2')}</text><text style={{color: 'grey'}}> {this.findRec1('f3m2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank1('f4m1')}</text><text> {this.findName1('f4m1')}</text><text style={{color: 'grey'}}> {this.findRec1('f4m1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank1('f4m2')} </text><text>{this.findName1('f4m2')}</text><text style={{color: 'grey'}}> {this.findRec1('f4m2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank1('f5m1')}</text><text> {this.findName1('f5m1')}</text><text style={{color: 'grey'}}> {this.findRec1('f5m1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank1('f5m2')} </text><text>{this.findName1('f5m2')}</text><text style={{color: 'grey'}}> {this.findRec1('f5m2')}</text></center></Button8>
                        <Button8><center><text style={{color: 'grey'}}>{this.findRank1('f6m1')}</text><text> {this.findName1('f6m1')}</text><text style={{color: 'grey'}}> {this.findRec1('f6m1')}</text><text> v. </text><text style={{color: 'grey'}}>{this.findRank1('f6m2')} </text><text>{this.findName1('f6m2')}</text><text style={{color: 'grey'}}> {this.findRec1('f6m2')}</text></center></Button8>
                    </div>
                    <div className="App-header-style1" style={{marginTop: -98, marginRight: 0}}>
                        <Link to='./opponent'><Button>FIGHT</Button></Link>
                        <Link to='./schedule'><Button>SCHEDULE</Button></Link>
                        <Link to='./standingsmen'><Button>MEN</Button></Link>
                        <Link to='./standingswomen'><Button>WOMEN</Button></Link>
                        <Link to={parseInt(sessionStorage.getItem('month')) > 8 ? './playoffspfl' : './cardpfl'}><ButtonG>CARD</ButtonG></Link>
                        <Link to={sessionStorage.getItem('firstResults') === 'true' ? './cardpfl' : './resultspfl'}><Button style={sessionStorage.getItem('firstResults') === 'true' ? {border: '2px solid gray', color: 'gray'} : {}}>RESULTS</Button></Link>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: 0, fontSize: 30 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./home'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardPFL;
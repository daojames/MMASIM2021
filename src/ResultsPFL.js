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
background-color: #616161;
color: white;
padding: 0px;
width: 900px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: -1px;
margin-right: -1px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button10 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 900px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button9 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 364px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button9b = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 50px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button9c = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 75px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button9d = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 48px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 2px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button9e = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 362px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 2px;
margin-right: 0px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button0 = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 364px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button0b = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 50px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button0c = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 75px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 0px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button0d = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 48px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 0px;
margin-right: 2px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button0e = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 362px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 2px;
margin-right: 0px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button11 = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 360px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 2px;
margin-right: 2px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button12 = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 46px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 2px;
margin-right: 2px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button13 = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 71px;
height: 45px;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
margin-left: 2px;
margin-right: 2px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

class ResultsPFL extends React.Component { 
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

    ifPlayerNRp1(str) {
        if (str === 'f1' && sessionStorage.getItem('nrf0') === 'null') {
            return JSON.parse(returnFighterM(0));
        }
        else {
            return JSON.parse(returnFighterM(parseInt(JSON.parse(sessionStorage.getItem(this.findWeek(str + 'p1'))).code.substring(2))));
        }
    }

    ifPlayerNRp2(str) {
        if (str === 'f1' && sessionStorage.getItem('nrf0') === 'null') {
            return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str + 'p2')))));
        }
        else {
            return JSON.parse(returnFighterM(parseInt(JSON.parse(sessionStorage.getItem(this.findWeek(str + 'p2'))).code.substring(2))));
        }
    }

    ifPlayerNRm1(str) {
        if (str === 'f1' && sessionStorage.getItem('nr0') === 'null') {
            return JSON.parse(returnFighterF(0));
        }
        else {
            return JSON.parse(returnFighterF(parseInt(JSON.parse(sessionStorage.getItem(this.findWeek(str + 'm1'))).code.substring(3))));
        }
    }

    ifPlayerNRm2(str) {
        if (str === 'f1m1' && sessionStorage.getItem('nr0') === 'null') {
            return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str + 'm2')))));
        }
        else {
            return JSON.parse(returnFighterF(parseInt(JSON.parse(sessionStorage.getItem(this.findWeek(str + 'm2'))).code.substring(3))));
        }
    }

    findMet(str) {
        let obj = this.ifPlayerNRp1(str);
        if (obj.meth.substring(3) === 'TKO' || obj.meth.substring(3) === 'KO') {
            sessionStorage.setItem('knockouts', parseInt(sessionStorage.getItem('knockouts')) + 1);
            sessionStorage.setItem('finishes', parseInt(sessionStorage.getItem('finishes')) + 1);
        }
        else if (obj.meth.substring(3) === 'SUB') {
            sessionStorage.setItem('submissions', parseInt(sessionStorage.getItem('submissions')) + 1);
            sessionStorage.setItem('finishes', parseInt(sessionStorage.getItem('finishes')) + 1);
        }
        return obj.meth.substring(3);
    }

    findMet1(str) {
        let obj = this.ifPlayerNRm1(str);
        if (obj.meth.substring(3) === 'TKO' || obj.meth.substring(3) === 'KO') {
            sessionStorage.setItem('knockouts', parseInt(sessionStorage.getItem('knockouts')) + 1);
            sessionStorage.setItem('finishes', parseInt(sessionStorage.getItem('finishes')) + 1);
        }
        else if (obj.meth.substring(3) === 'SUB') {
            sessionStorage.setItem('submissions', parseInt(sessionStorage.getItem('submissions')) + 1);
            sessionStorage.setItem('finishes', parseInt(sessionStorage.getItem('finishes')) + 1);
            
        }
        return obj.meth.substring(3);
    }

    findMetRd(str) {
        let obj = this.ifPlayerNRp1(str);

        return obj.meth;
    }

    findMetRd1(str) {
        let obj = this.ifPlayerNRm1(str);

        return obj.meth;
    }

    findRd(str) {
        let obj = this.ifPlayerNRp1(str);
        return obj.meth.substring(0,2);
    }

    findRd1(str) {
        let obj = this.ifPlayerNRm1(str);
        return obj.meth.substring(0,2);
    }

    findWeek(str) {
        let month = parseInt(sessionStorage.getItem('month'));
        return 'w' + (month - 1) + str;
    }
    
    findRank(str) {
        if (sessionStorage.getItem(this.findWeek(str)) === sessionStorage.getItem('playerNR')) {
            return JSON.parse(sessionStorage.getItem('nr0')).prev;
        }
        else if (sessionStorage.getItem('playerNRF') === 'null' && str === 'f1p2') {
            return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).prev;
        }
        return JSON.parse(returnFighterM(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(2)))).prev;
    }

    findRank1(str) {
        if (sessionStorage.getItem(this.findWeek(str)) === sessionStorage.getItem('playerNRF')) {
            return JSON.parse(sessionStorage.getItem('nrf0')).prev;
        }
        else if (sessionStorage.getItem('playerNR') === 'null' && str === 'f1m2') {
            return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).prev;
        }
        return JSON.parse(returnFighterF(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(3)))).prev;
    }

    findName(str) {
        if (sessionStorage.getItem(this.findWeek(str)) === sessionStorage.getItem('playerNR')) {
            return JSON.parse(sessionStorage.getItem('nr0')).first + ' ' + JSON.parse(sessionStorage.getItem('nr0')).last;
        }
        else if (sessionStorage.getItem('playerNRF') === 'null' && str === 'f1p2') {
            return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).first + ' ' + JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).last;
        }
        return JSON.parse(returnFighterM(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(2)))).first + ' ' + JSON.parse(returnFighterM(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(2)))).last;
    }

    findName1(str) {
        if (sessionStorage.getItem(this.findWeek(str)) === sessionStorage.getItem('playerNRF')) {
            return JSON.parse(sessionStorage.getItem('nrf0')).first + ' ' + JSON.parse(sessionStorage.getItem('nrf0')).last;
        }
        else if (sessionStorage.getItem('playerNR') === 'null' && str === 'f1m2') {
            return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).first + ' ' + JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).last;
        }
        return JSON.parse(returnFighterF(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(3)))).first + ' ' + JSON.parse(returnFighterF(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(3)))).last;
    }

    findRec(str) {
        if (sessionStorage.getItem(this.findWeek(str)) === sessionStorage.getItem('playerNR')) {
            if (parseInt(JSON.parse(sessionStorage.getItem('nr0')).strk) > 0) {
                return '(' + (parseInt(JSON.parse(sessionStorage.getItem('nr0')).swin) - 1) + ' - ' + JSON.parse(sessionStorage.getItem('nr0')).sloss + ')';
            }
            else {
                return '(' + JSON.parse(sessionStorage.getItem('nr0')).swin + ' - ' + (parseInt(JSON.parse(sessionStorage.getItem('nr0')).sloss) - 1) + ')';
            }
        }
        else if (sessionStorage.getItem('playerNRF') === 'null' && str === 'f1p2') {
            if (parseInt(JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).strk) > 0) {
                return '(' + (parseInt(JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).swin) - 1) + ' - ' + JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).sloss + ')';
            }
            else {
                return '(' + JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).swin + ' - ' + (parseInt(JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).sloss) - 1) + ')';
            }
        }
        if (parseInt(JSON.parse(returnFighterM(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(2)))).strk) > 0) {
            return '(' + (parseInt(JSON.parse(returnFighterM(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(2)))).swin) - 1) + ' - ' + JSON.parse(returnFighterM(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(2)))).sloss + ')';
        }
        else {
            return '(' + JSON.parse(returnFighterM(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(2)))).swin + ' - ' + (parseInt(JSON.parse(returnFighterM(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(2)))).sloss) - 1) + ')';
        }
    }

    findRec1(str) {
        if (sessionStorage.getItem(this.findWeek(str)) === sessionStorage.getItem('playerNRF')) {
            if (parseInt(JSON.parse(sessionStorage.getItem('nrf0')).strk) > 0) {
                return '(' + (parseInt(JSON.parse(sessionStorage.getItem('nrf0')).swin) - 1) + ' - ' + JSON.parse(sessionStorage.getItem('nrf0')).sloss + ')';
            }
            else {
                return '(' + JSON.parse(sessionStorage.getItem('nrf0')).swin + ' - ' + (parseInt(JSON.parse(sessionStorage.getItem('nrf0')).sloss) - 1) + ')';
            }
        }
        else if (sessionStorage.getItem('playerNR') === 'null' && str === 'f1m2') {
            if (parseInt(JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).strk) > 0) {
                return '(' + (parseInt(JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).swin) - 1) + ' - ' + JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).sloss + ')';
            }
            else {
                return '(' + JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).swin + ' - ' + (parseInt(JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).sloss) - 1) + ')';
            }
        }
        if (parseInt(JSON.parse(returnFighterF(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(3)))).strk) > 0) {
            return '(' + (parseInt(JSON.parse(returnFighterF(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(3)))).swin) - 1) + ' - ' + JSON.parse(returnFighterF(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(3)))).sloss + ')';
        }
        else {
            return '(' + JSON.parse(returnFighterF(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(3)))).swin + ' - ' + (parseInt(JSON.parse(returnFighterF(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(3)))).sloss) - 1) + ')';
        }
    }

    findStrk(str) {
        if (sessionStorage.getItem(this.findWeek(str)) === sessionStorage.getItem('playerNR')) {
            return JSON.parse(sessionStorage.getItem('nr0')).strk;
        }
        else if (sessionStorage.getItem('playerNRF') === 'null' && str === 'f1p2') {
            return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).strk;
        }
        return JSON.parse(returnFighterM(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(2)))).strk;
    }

    findStrk1(str) {
        if (sessionStorage.getItem(this.findWeek(str)) === sessionStorage.getItem('playerNRF')) {
            return JSON.parse(sessionStorage.getItem('nrf0')).strk;
        }
        else if (sessionStorage.getItem('playerNR') === 'null' && str === 'f1m2') {
            return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).strk;
        }
        return JSON.parse(returnFighterF(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(3)))).strk;
    }
    
    getFightLink() {
        let month = parseInt(sessionStorage.getItem('month'));

        if (month > 8 && month < 12) {
            if (sessionStorage.getItem('playerPlayoffs') === '1') {
                return './opponent';
            }
            else {
                return './cardpfl';
            }
        }
        else if (month < 9) {
            return './opponent';
        }
        else if (month == 12) {
            return './manage';
        }
    }

    findPts(str) {
        if (sessionStorage.getItem(this.findWeek(str)) === sessionStorage.getItem('playerNR')) {
            return JSON.parse(sessionStorage.getItem('nr0')).pts;
        }
        else if (sessionStorage.getItem('playerNRF') === 'null' && str === 'f1p2') {
            return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str))))).pts;
        }
        console.log(str)
        console.log(sessionStorage.getItem(this.findWeek(str)))
        return JSON.parse(returnFighterM(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(2)))).pts;
    }

    findPts1(str) {
        if (sessionStorage.getItem(this.findWeek(str)) === sessionStorage.getItem('playerNRF')) {
            return JSON.parse(sessionStorage.getItem('nrf0')).pts;
        }
        else if (sessionStorage.getItem('playerNR') === 'null' && str === 'f1m2') {
            return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(this.findWeek(str))))).pts;
        }
        return JSON.parse(returnFighterF(parseInt(((JSON.parse(sessionStorage.getItem(this.findWeek(str)))).code).substring(3)))).pts;
    }

    subPts(x) {
        let rd = parseInt(x.substring(1, 2));
        let met = x.substring(3);

        switch(rd) {
            case 1:
                return 6;
            break;
            case 2:
                return 5;
            break;
        }

        if (met === 'DEC') {
            return 3;
        }
        else {
            return 4;
        }
    }

    findMen() {
        let arr = [];
        
        for (let i = 1; i < 13; ++i) {
            if (parseInt(this.findStrk('f' + i + 'p1')) > parseInt(this.findStrk('f' + i + 'p2'))) {
                let x = {
                    name1: this.findName('f' + i + 'p1'),
                    rank1: this.findRank('f' + i + 'p1'),
                    rec1: this.findRec('f' + i + 'p1'),
                    name2: this.findName('f' + i + 'p2'),
                    rank2: this.findRank('f' + i + 'p2'),
                    rec2: this.findRec('f' + i + 'p2'),
                    pts: parseInt(this.findPts('f' + i + 'p1')) + parseInt(this.findPts('f' + i + 'p2')) - parseInt(this.subPts(this.findMetRd('f' + i))),
                    fight: 'f' + i
                }
                arr.push(x);
            }
            else {
                let x = {
                    name1: this.findName('f' + i + 'p2'),
                    rank1: this.findRank('f' + i + 'p2'),
                    rec1: this.findRec('f' + i + 'p2'),
                    name2: this.findName('f' + i + 'p1'),
                    rank2: this.findRank('f' + i + 'p1'),
                    rec2: this.findRec('f' + i + 'p1'),
                    pts: parseInt(this.findPts('f' + i + 'p1')) + parseInt(this.findPts('f' + i + 'p2')) - parseInt(this.subPts(this.findMetRd('f' + i))),
                    fight: 'f' + i
                }
                arr.push(x);
            }
        }

        return arr;
    }

    findWomen() {
        let arr = [];
        
        for (let i = 1; i < 7; ++i) {
            if (parseInt(this.findStrk1('f' + i + 'm1')) > parseInt(this.findStrk1('f' + i + 'm2'))) {
                let x = {
                    name1: this.findName1('f' + i + 'm1'),
                    rank1: this.findRank1('f' + i + 'm1'),
                    rec1: this.findRec1('f' + i + 'm1'),
                    name2: this.findName1('f' + i + 'm2'),
                    rank2: this.findRank1('f' + i + 'm2'),
                    rec2: this.findRec1('f' + i + 'm2'),
                    pts: parseInt(this.findPts1('f' + i + 'm1')) + parseInt(this.findPts1('f' + i + 'm2')) - parseInt(this.subPts(this.findMetRd1('f' + i))),
                    fight: 'f' + i
                }
                arr.push(x);
            }
            else {
                let x = {
                    name1: this.findName1('f' + i + 'm2'),
                    rank1: this.findRank1('f' + i + 'm2'),
                    rec1: this.findRec1('f' + i + 'm2'),
                    name2: this.findName1('f' + i + 'm1'),
                    rank2: this.findRank1('f' + i + 'm1'),
                    rec2: this.findRec1('f' + i + 'm1'),
                    pts: parseInt(this.findPts1('f' + i + 'm1')) + parseInt(this.findPts1('f' + i + 'm2')) - parseInt(this.subPts(this.findMetRd1('f' + i))),
                    fight: 'f' + i
                }
                arr.push(x);
            }
        }

        return arr;
    }

    sortCard(arr) {
        arr.sort((a, b) => {
            if (parseInt(a.pts) > parseInt(b.pts)) return -1;
            if (parseInt(a.pts) < parseInt(b.pts)) return 1;

            let ar = null;
            let br = null;

            if (parseInt(a.rank1) < parseInt(a.rank2)) ar = a.rank1;
            else ar = a.rank2;

            if (parseInt(b.rank1) < parseInt(b.rank2)) br = b.rank1;
            else br = b.rank2;

            return parseInt(ar) - parseInt(br);
        });

        return arr;
    }
    
    rankSpace(x) {
        if (x === 'NR') {
            return x;
        }
        else if (parseInt(x) > 9) {
            return x;
        }
        else {
            return '\xa0\xa0' + x;
        }
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
        sessionStorage.setItem('finishes', 0);
        sessionStorage.setItem('knockouts', 0);
        sessionStorage.setItem('submissions' , 0);
        
        let men = this.findMen();
        let women = this.findWomen();
        let card1 = this.sortCard(men);
        let card2 = this.sortCard(women);
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -730 }} />
                        PFL {month - 1} RESULTS<br/><br/>
                    </div>
                    <div className="App-customize4" style={{marginTop: 110, marginBottom: 0, width: 1920}}>
                        <Button11>{whitespace}{whitespace}<text>WINNER</text></Button11><Button12>{space}</Button12><Button11>{whitespace}{whitespace}<text>LOSER</text></Button11><Button13><text><center>VIA</center></text></Button13><Button12><text><center>RD</center></text></Button12>
                        <Button11>{whitespace}{whitespace}<text>WINNER</text></Button11><Button12>{space}</Button12><Button11>{whitespace}{whitespace}<text>LOSER</text></Button11><Button13><text><center>VIA</center></text></Button13><Button12><text><center>RD</center></text></Button12>
                        <Button9>{space}<text style={{color: 'grey'}}>{this.rankSpace(men[0].rank1)}</text><text> {men[0].name1}</text><text style={{color: 'grey'}}> {men[0].rec1}</text></Button9><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.rankSpace(men[0].rank2)} </text><text>{men[0].name2}</text><text style={{color: 'grey'}}> {men[0].rec2}</text></Button9><Button9c><center>{this.findMet(men[0].fight)}</center></Button9c><Button9d><center>{this.findRd(men[0].fight)}</center></Button9d>
                        <Button9e>{space}<text style={{color: 'grey'}}>{this.rankSpace(men[1].rank1)}</text><text> {men[1].name1}</text><text style={{color: 'grey'}}> {men[1].rec1}</text></Button9e><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.rankSpace(men[1].rank2)} </text><text>{men[1].name2}</text><text style={{color: 'grey'}}> {men[1].rec2}</text></Button9><Button9c><center>{this.findMet(men[1].fight)}</center></Button9c><Button9b><center>{this.findRd(men[1].fight)}</center></Button9b>
                        <Button0>{space}<text style={{color: 'grey'}}>{this.rankSpace(men[2].rank1)}</text><text> {men[2].name1}</text><text style={{color: 'grey'}}> {men[2].rec1}</text></Button0><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.rankSpace(men[2].rank2)} </text><text>{men[2].name2}</text><text style={{color: 'grey'}}> {men[2].rec2}</text></Button0><Button0c><center>{this.findMet(men[2].fight)}</center></Button0c><Button0d><center>{this.findRd(men[2].fight)}</center></Button0d>
                        <Button0e>{space}<text style={{color: 'grey'}}>{this.rankSpace(men[3].rank1)}</text><text> {men[3].name1}</text><text style={{color: 'grey'}}> {men[3].rec1}</text></Button0e><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.rankSpace(men[3].rank2)} </text><text>{men[3].name2}</text><text style={{color: 'grey'}}> {men[3].rec2}</text></Button0><Button0c><center>{this.findMet(men[3].fight)}</center></Button0c><Button0b><center>{this.findRd(men[3].fight)}</center></Button0b>
                        <Button9>{space}<text style={{color: 'grey'}}>{this.rankSpace(men[4].rank1)}</text><text> {men[4].name1}</text><text style={{color: 'grey'}}> {men[4].rec1}</text></Button9><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.rankSpace(men[4].rank2)} </text><text>{men[4].name2}</text><text style={{color: 'grey'}}> {men[4].rec2}</text></Button9><Button9c><center>{this.findMet(men[4].fight)}</center></Button9c><Button9d><center>{this.findRd(men[4].fight)}</center></Button9d>
                        <Button9e>{space}<text style={{color: 'grey'}}>{this.rankSpace(men[5].rank1)}</text><text> {men[5].name1}</text><text style={{color: 'grey'}}> {men[5].rec1}</text></Button9e><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.rankSpace(men[5].rank2)} </text><text>{men[5].name2}</text><text style={{color: 'grey'}}> {men[5].rec2}</text></Button9><Button9c><center>{this.findMet(men[5].fight)}</center></Button9c><Button9b><center>{this.findRd(men[5].fight)}</center></Button9b>
                        <Button0>{space}<text style={{color: 'grey'}}>{this.rankSpace(men[6].rank1)}</text><text> {men[6].name1}</text><text style={{color: 'grey'}}> {men[6].rec1}</text></Button0><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.rankSpace(men[6].rank2)} </text><text>{men[6].name2}</text><text style={{color: 'grey'}}> {men[6].rec2}</text></Button0><Button0c><center>{this.findMet(men[6].fight)}</center></Button0c><Button0d><center>{this.findRd(men[6].fight)}</center></Button0d>
                        <Button0e>{space}<text style={{color: 'grey'}}>{this.rankSpace(men[7].rank1)}</text><text> {men[7].name1}</text><text style={{color: 'grey'}}> {men[7].rec1}</text></Button0e><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.rankSpace(men[7].rank2)} </text><text>{men[7].name2}</text><text style={{color: 'grey'}}> {men[7].rec2}</text></Button0><Button0c><center>{this.findMet(men[7].fight)}</center></Button0c><Button0b><center>{this.findRd(men[7].fight)}</center></Button0b>
                        <Button9>{space}<text style={{color: 'grey'}}>{this.rankSpace(men[8].rank1)}</text><text> {men[8].name1}</text><text style={{color: 'grey'}}> {men[8].rec1}</text></Button9><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.rankSpace(men[8].rank2)} </text><text>{men[8].name2}</text><text style={{color: 'grey'}}> {men[8].rec2}</text></Button9><Button9c><center>{this.findMet(men[8].fight)}</center></Button9c><Button9d><center>{this.findRd(men[8].fight)}</center></Button9d>
                        <Button9e>{space}<text style={{color: 'grey'}}>{this.rankSpace(men[9].rank1)}</text><text> {men[9].name1}</text><text style={{color: 'grey'}}> {men[9].rec1}</text></Button9e><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.rankSpace(men[9].rank2)} </text><text>{men[9].name2}</text><text style={{color: 'grey'}}> {men[9].rec2}</text></Button9><Button9c><center>{this.findMet(men[9].fight)}</center></Button9c><Button9b><center>{this.findRd(men[9].fight)}</center></Button9b>
                        <Button0>{space}<text style={{color: 'grey'}}>{this.rankSpace(men[10].rank1)}</text><text> {men[10].name1}</text><text style={{color: 'grey'}}> {men[10].rec1}</text></Button0><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.rankSpace(men[10].rank2)} </text><text>{men[10].name2}</text><text style={{color: 'grey'}}> {men[10].rec2}</text></Button0><Button0c><center>{this.findMet(men[10].fight)}</center></Button0c><Button0d><center>{this.findRd(men[10].fight)}</center></Button0d>
                        <Button0e>{space}<text style={{color: 'grey'}}>{this.rankSpace(men[11].rank1)}</text><text> {men[11].name1}</text><text style={{color: 'grey'}}> {men[11].rec1}</text></Button0e><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.rankSpace(men[11].rank2)} </text><text>{men[11].name2}</text><text style={{color: 'grey'}}> {men[11].rec2}</text></Button0><Button0c><center>{this.findMet(men[11].fight)}</center></Button0c><Button0b><center>{this.findRd(men[11].fight)}</center></Button0b>
                        <Button9>{space}<text style={{color: 'grey'}}>{this.rankSpace(women[0].rank1)}</text><text> {women[0].name1}</text><text style={{color: 'grey'}}> {women[0].rec1}</text></Button9><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.rankSpace(women[0].rank2)} </text><text>{women[0].name2}</text><text style={{color: 'grey'}}> {women[0].rec2}</text></Button9><Button9c><center>{this.findMet1(women[0].fight)}</center></Button9c><Button9d><center>{this.findRd1(women[0].fight)}</center></Button9d>
                        <Button9e>{space}<text style={{color: 'grey'}}>{this.rankSpace(women[1].rank1)}</text><text> {women[1].name1}</text><text style={{color: 'grey'}}> {women[1].rec1}</text></Button9e><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.rankSpace(women[1].rank2)} </text><text>{women[1].name2}</text><text style={{color: 'grey'}}> {women[1].rec2}</text></Button9><Button9c><center>{this.findMet1(women[1].fight)}</center></Button9c><Button9b><center>{this.findRd1(women[1].fight)}</center></Button9b>
                        <Button0>{space}<text style={{color: 'grey'}}>{this.rankSpace(women[2].rank1)}</text><text> {women[2].name1}</text><text style={{color: 'grey'}}> {women[2].rec1}</text></Button0><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.rankSpace(women[2].rank2)} </text><text>{women[2].name2}</text><text style={{color: 'grey'}}> {women[2].rec2}</text></Button0><Button0c><center>{this.findMet1(women[2].fight)}</center></Button0c><Button0d><center>{this.findRd1(women[2].fight)}</center></Button0d>
                        <Button0e>{space}<text style={{color: 'grey'}}>{this.rankSpace(women[3].rank1)}</text><text> {women[3].name1}</text><text style={{color: 'grey'}}> {women[3].rec1}</text></Button0e><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.rankSpace(women[3].rank2)} </text><text>{women[3].name2}</text><text style={{color: 'grey'}}> {women[3].rec2}</text></Button0><Button0c><center>{this.findMet1(women[3].fight)}</center></Button0c><Button0b><center>{this.findRd1(women[3].fight)}</center></Button0b>
                        <Button9>{space}<text style={{color: 'grey'}}>{this.rankSpace(women[4].rank1)}</text><text> {women[4].name1}</text><text style={{color: 'grey'}}> {women[4].rec1}</text></Button9><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.rankSpace(women[4].rank2)} </text><text>{women[4].name2}</text><text style={{color: 'grey'}}> {women[4].rec2}</text></Button9><Button9c><center>{this.findMet1(women[4].fight)}</center></Button9c><Button9d><center>{this.findRd1(women[4].fight)}</center></Button9d>
                        <Button9e>{space}<text style={{color: 'grey'}}>{this.rankSpace(women[5].rank1)}</text><text> {women[5].name1}</text><text style={{color: 'grey'}}> {women[5].rec1}</text></Button9e><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.rankSpace(women[5].rank2)} </text><text>{women[5].name2}</text><text style={{color: 'grey'}}> {women[5].rec2}</text></Button9><Button9c><center>{this.findMet1(women[5].fight)}</center></Button9c><Button9b><center>{this.findRd1(women[5].fight)}</center></Button9b>
                        <Button10><center><text style={{color: 'grey'}}>Finishes: {sessionStorage.getItem('finishes')} out of 18 ({sessionStorage.getItem('knockouts')} KO, {sessionStorage.getItem('submissions')} SUB)</text></center></Button10>
                    </div>
                    <div className="App-header-style1" style={{marginTop: -98, marginRight: 0}}>
                        <Link to={this.getFightLink}><Button style={parseInt(sessionStorage.getItem('month')) > 8 && parseInt(sessionStorage.getItem('month')) < 12 ? (sessionStorage.getItem('playerPlayoffs') === '1' ? {} : {border: '2px solid gray', color: 'gray'}) : {}}>{parseInt(sessionStorage.getItem('month')) == 12 ? 'MANAGE' : 'FIGHT'}</Button></Link>
                        <Link to='./schedule'><Button>SCHEDULE</Button></Link>
                        <Link to='./standingsmen'><Button>MEN</Button></Link>
                        <Link to='./standingswomen'><Button>WOMEN</Button></Link>
                        <Link to={parseInt(sessionStorage.getItem('month')) > 8 ? './playoffspfl' : './cardpfl'}><Button>{parseInt(sessionStorage.getItem('month')) > 8 ? 'BRACKET' : 'CARD'}</Button></Link>
                        <Link to='./resultspfl'><ButtonG style={sessionStorage.getItem('firstResults') === 'true' ? {border: '2px solid gray', color: 'gray'} : {}}>RESULTS</ButtonG></Link>
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

export default ResultsPFL;
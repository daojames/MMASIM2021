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
            return JSON.parse(returnFighterM(parseInt((JSON.parse(sessionStorage.getItem(this.findWeek(str + 'p1'))).code).substring(2))));
        }
    }

    ifPlayerNRp2(str) {
        if (str === 'f1' && sessionStorage.getItem('nrf0') === 'null') {
            return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str + 'p2')))));
        }
        else {
        return JSON.parse(returnFighterM(parseInt((JSON.parse(sessionStorage.getItem(this.findWeek(str + 'p2'))).code).substring(2))));
        }
    }

    ifPlayerNRm1(str) {
        if (str === 'f1' && sessionStorage.getItem('nr0') === 'null') {
            return JSON.parse(returnFighterF(0));
        }
        else {
            return JSON.parse(returnFighterF(parseInt((JSON.parse(sessionStorage.getItem(this.findWeek(str + 'm1'))).code).substring(3))));
        }
    }

    ifPlayerNRm2(str) {
        if (str === 'f1' && sessionStorage.getItem('nr0') === 'null') {
            return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(this.findWeek(str + 'm2')))));
        }
        else {
            return JSON.parse(returnFighterF(parseInt((JSON.parse(sessionStorage.getItem(this.findWeek(str + 'm2'))).code).substring(3))));
        }
    }

    findRank(str) {
        let obj1 = this.ifPlayerNRp1(str);
        let obj2 = this.ifPlayerNRp2(str);
        if (parseInt(obj1.strk) > 0) {
            if (parseInt(obj1.prev) < 10) {
                return '\xa0\xa0' + obj1.prev;
            }
            else {
                return obj1.prev;
            }
        }
        else {
            if (parseInt(obj2.prev) < 10) {
                return '\xa0\xa0' + obj2.prev;
            }
            else {
                return obj2.prev;
            }
        }
    }

    findRankL(str) {
        let obj1 = this.ifPlayerNRp1(str);
        let obj2 = this.ifPlayerNRp2(str);
        if (parseInt(obj1.strk) > 0) {
            if (parseInt(obj2.prev) < 10) {
                return '\xa0\xa0' + obj2.prev;
            }
            else {
                return obj2.prev;
            }
        }
        else {
            if (parseInt(obj1.prev) < 10) {
                return '\xa0\xa0' + obj1.prev;
            }
            else {
                return obj1.prev;
            }
        }
    }

    findRank1(str) {
        let obj1 = this.ifPlayerNRm1(str);
        let obj2 = this.ifPlayerNRm2(str);
        if (parseInt(obj1.strk) > 0) {
            if (parseInt(obj1.prev) < 10) {
                return '\xa0\xa0' + obj1.prev;
            }
            else {
                return obj1.prev;
            }
        }
        else {
            if (parseInt(obj2.prev) < 10) {
                return '\xa0\xa0' + obj2.prev;
            }
            else {
                return obj2.prev;
            }
        }
    }

    findRank1L(str) {
        let obj1 = this.ifPlayerNRm1(str);
        let obj2 = this.ifPlayerNRm2(str);
        if (parseInt(obj1.strk) > 0) {
            if (parseInt(obj2.prev) < 10) {
                return '\xa0\xa0' + obj2.prev;
            }
            else {
                return obj2.prev;
            }
        }
        else {
            if (parseInt(obj1.prev) < 10) {
                return '\xa0\xa0' + obj1.prev;
            }
            else {
                return obj1.prev;
            }
        }
    }

    findName(str) {
        let obj1 = this.ifPlayerNRp1(str);
        let obj2 = this.ifPlayerNRp2(str);
        if (obj1.strk > 0) {
            return obj1.first + ' ' + obj1.last;
        }
        else {
            return obj2.first + ' ' + obj2.last;
        }
    }

    findNameL(str) {
        let obj1 = this.ifPlayerNRp1(str);
        let obj2 = this.ifPlayerNRp2(str);
        if (obj1.strk > 0) {
            return obj2.first + ' ' + obj2.last;
        }
        else {
            return obj1.first + ' ' + obj1.last;
        }
    }

    findName1(str) {
        let obj1 = this.ifPlayerNRm1(str);
        let obj2 = this.ifPlayerNRm2(str);
        if (obj1.strk > 0) {
            return obj1.first + ' ' + obj1.last;
        }
        else {
            return obj2.first + ' ' + obj2.last;
        }
    }

    findName1L(str) {
        let obj1 = this.ifPlayerNRm1(str);
        let obj2 = this.ifPlayerNRm2(str);
        if (obj1.strk > 0) {
            return obj2.first + ' ' + obj2.last;
        }
        else {
            return obj1.first + ' ' + obj1.last;
        }
    }

    findRec(str) {
        let obj1 = this.ifPlayerNRp1(str);
        let obj2 = this.ifPlayerNRp2(str);
        if (obj1.strk > 0) {
            return '(' + (obj1.swin - 1) + ' - ' + obj1.sloss + ')';
        }
        else {
            return '(' + (obj2.swin - 1) + ' - ' + obj2.sloss + ')';
        }
    }

    findRecL(str) {
        let obj1 = this.ifPlayerNRp1(str);
        let obj2 = this.ifPlayerNRp2(str);
        if (obj1.strk > 0) {
            return '(' + (obj2.swin) + ' - ' + (obj2.sloss - 1) + ')';
        }
        else {
            return '(' + (obj1.swin) + ' - ' + (obj1.sloss - 1) + ')';
        }
    }

    findRec1(str) {
        let obj1 = this.ifPlayerNRm1(str);
        let obj2 = this.ifPlayerNRm2(str);
        if (obj1.strk > 0) {
            return '(' + (obj1.swin - 1) + ' - ' + obj1.sloss + ')';
        }
        else {
            return '(' + (obj2.swin - 1) + ' - ' + obj2.sloss + ')';
        }
    }

    findRec1L(str) {
        let obj1 = this.ifPlayerNRm1(str);
        let obj2 = this.ifPlayerNRm2(str);
        if (obj1.strk > 0) {
            return '(' + (obj2.swin) + ' - ' + (obj2.sloss - 1) + ')';
        }
        else {
            return '(' + (obj1.swin) + ' - ' + (obj1.sloss - 1) + ')';
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
                        <Button9>{space}<text style={{color: 'grey'}}>{this.findRank('f1')}</text><text> {this.findName('f1')}</text><text style={{color: 'grey'}}> {this.findRec('f1')}</text></Button9><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.findRankL('f1')} </text><text>{this.findNameL('f1')}</text><text style={{color: 'grey'}}> {this.findRecL('f1')}</text></Button9><Button9c><center>{this.findMet('f1')}</center></Button9c><Button9d><center>{this.findRd('f1')}</center></Button9d>
                        <Button9e>{space}<text style={{color: 'grey'}}>{this.findRank('f2')}</text><text> {this.findName('f2')}</text><text style={{color: 'grey'}}> {this.findRec('f2')}</text></Button9e><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.findRankL('f2')} </text><text>{this.findNameL('f2')}</text><text style={{color: 'grey'}}> {this.findRecL('f2')}</text></Button9><Button9c><center>{this.findMet('f2')}</center></Button9c><Button9b><center>{this.findRd('f2')}</center></Button9b>
                        <Button0>{space}<text style={{color: 'grey'}}>{this.findRank('f3')}</text><text> {this.findName('f3')}</text><text style={{color: 'grey'}}> {this.findRec('f3')}</text></Button0><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.findRankL('f3')} </text><text>{this.findNameL('f3')}</text><text style={{color: 'grey'}}> {this.findRecL('f3')}</text></Button0><Button0c><center>{this.findMet('f3')}</center></Button0c><Button0d><center>{this.findRd('f3')}</center></Button0d>
                        <Button0e>{space}<text style={{color: 'grey'}}>{this.findRank('f4')}</text><text> {this.findName('f4')}</text><text style={{color: 'grey'}}> {this.findRec('f4')}</text></Button0e><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.findRankL('f4')} </text><text>{this.findNameL('f4')}</text><text style={{color: 'grey'}}> {this.findRecL('f4')}</text></Button0><Button0c><center>{this.findMet('f4')}</center></Button0c><Button0b><center>{this.findRd('f4')}</center></Button0b>
                        <Button9>{space}<text style={{color: 'grey'}}>{this.findRank('f5')}</text><text> {this.findName('f5')}</text><text style={{color: 'grey'}}> {this.findRec('f5')}</text></Button9><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.findRankL('f5')} </text><text>{this.findNameL('f5')}</text><text style={{color: 'grey'}}> {this.findRecL('f5')}</text></Button9><Button9c><center>{this.findMet('f5')}</center></Button9c><Button9d><center>{this.findRd('f5')}</center></Button9d>
                        <Button9e>{space}<text style={{color: 'grey'}}>{this.findRank('f6')}</text><text> {this.findName('f6')}</text><text style={{color: 'grey'}}> {this.findRec('f6')}</text></Button9e><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.findRankL('f6')} </text><text>{this.findNameL('f6')}</text><text style={{color: 'grey'}}> {this.findRecL('f6')}</text></Button9><Button9c><center>{this.findMet('f6')}</center></Button9c><Button9b><center>{this.findRd('f6')}</center></Button9b>
                        <Button0>{space}<text style={{color: 'grey'}}>{this.findRank('f7')}</text><text> {this.findName('f7')}</text><text style={{color: 'grey'}}> {this.findRec('f7')}</text></Button0><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.findRankL('f7')} </text><text>{this.findNameL('f7')}</text><text style={{color: 'grey'}}> {this.findRecL('f7')}</text></Button0><Button0c><center>{this.findMet('f7')}</center></Button0c><Button0d><center>{this.findRd('f7')}</center></Button0d>
                        <Button0e>{space}<text style={{color: 'grey'}}>{this.findRank('f8')}</text><text> {this.findName('f8')}</text><text style={{color: 'grey'}}> {this.findRec('f8')}</text></Button0e><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.findRankL('f8')} </text><text>{this.findNameL('f8')}</text><text style={{color: 'grey'}}> {this.findRecL('f8')}</text></Button0><Button0c><center>{this.findMet('f8')}</center></Button0c><Button0b><center>{this.findRd('f8')}</center></Button0b>
                        <Button9>{space}<text style={{color: 'grey'}}>{this.findRank('f9')}</text><text> {this.findName('f9')}</text><text style={{color: 'grey'}}> {this.findRec('f9')}</text></Button9><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.findRankL('f9')} </text><text>{this.findNameL('f9')}</text><text style={{color: 'grey'}}> {this.findRecL('f9')}</text></Button9><Button9c><center>{this.findMet('f9')}</center></Button9c><Button9d><center>{this.findRd('f9')}</center></Button9d>
                        <Button9e>{space}<text style={{color: 'grey'}}>{this.findRank('f10')}</text><text> {this.findName('f10')}</text><text style={{color: 'grey'}}> {this.findRec('f10')}</text></Button9e><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.findRankL('f10')} </text><text>{this.findNameL('f10')}</text><text style={{color: 'grey'}}> {this.findRecL('f10')}</text></Button9><Button9c><center>{this.findMet('f10')}</center></Button9c><Button9b><center>{this.findRd('f10')}</center></Button9b>
                        <Button0>{space}<text style={{color: 'grey'}}>{this.findRank('f11')}</text><text> {this.findName('f11')}</text><text style={{color: 'grey'}}> {this.findRec('f11')}</text></Button0><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.findRankL('f11')} </text><text>{this.findNameL('f11')}</text><text style={{color: 'grey'}}> {this.findRecL('f11')}</text></Button0><Button0c><center>{this.findMet('f11')}</center></Button0c><Button0d><center>{this.findRd('f11')}</center></Button0d>
                        <Button0e>{space}<text style={{color: 'grey'}}>{this.findRank('f12')}</text><text> {this.findName('f12')}</text><text style={{color: 'grey'}}> {this.findRec('f12')}</text></Button0e><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.findRankL('f12')} </text><text>{this.findNameL('f12')}</text><text style={{color: 'grey'}}> {this.findRecL('f12')}</text></Button0><Button0c><center>{this.findMet('f12')}</center></Button0c><Button0b><center>{this.findRd('f12')}</center></Button0b>
                        <Button9>{space}<text style={{color: 'grey'}}>{this.findRank1('f1')}</text><text> {this.findName1('f1')}</text><text style={{color: 'grey'}}> {this.findRec1('f1')}</text></Button9><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.findRank1L('f1')} </text><text>{this.findName1L('f1')}</text><text style={{color: 'grey'}}> {this.findRec1L('f1')}</text></Button9><Button9c><center>{this.findMet1('f1')}</center></Button9c><Button9d><center>{this.findRd1('f1')}</center></Button9d>
                        <Button9e>{space}<text style={{color: 'grey'}}>{this.findRank1('f2')}</text><text> {this.findName1('f2')}</text><text style={{color: 'grey'}}> {this.findRec1('f2')}</text></Button9e><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.findRank1L('f2')} </text><text>{this.findName1L('f2')}</text><text style={{color: 'grey'}}> {this.findRec1L('f2')}</text></Button9><Button9c><center>{this.findMet1('f2')}</center></Button9c><Button9b><center>{this.findRd1('f2')}</center></Button9b>
                        <Button0>{space}<text style={{color: 'grey'}}>{this.findRank1('f3')}</text><text> {this.findName1('f3')}</text><text style={{color: 'grey'}}> {this.findRec1('f3')}</text></Button0><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.findRank1L('f3')} </text><text>{this.findName1L('f3')}</text><text style={{color: 'grey'}}> {this.findRec1L('f3')}</text></Button0><Button0c><center>{this.findMet1('f3')}</center></Button0c><Button0d><center>{this.findRd1('f3')}</center></Button0d>
                        <Button0e>{space}<text style={{color: 'grey'}}>{this.findRank1('f4')}</text><text> {this.findName1('f4')}</text><text style={{color: 'grey'}}> {this.findRec1('f4')}</text></Button0e><Button0b><center><text>def.</text></center></Button0b><Button0><text style={{color: 'grey'}}>{this.findRank1L('f4')} </text><text>{this.findName1L('f4')}</text><text style={{color: 'grey'}}> {this.findRec1L('f4')}</text></Button0><Button0c><center>{this.findMet1('f4')}</center></Button0c><Button0b><center>{this.findRd1('f4')}</center></Button0b>
                        <Button9>{space}<text style={{color: 'grey'}}>{this.findRank1('f5')}</text><text> {this.findName1('f5')}</text><text style={{color: 'grey'}}> {this.findRec1('f5')}</text></Button9><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.findRank1L('f5')} </text><text>{this.findName1L('f5')}</text><text style={{color: 'grey'}}> {this.findRec1L('f5')}</text></Button9><Button9c><center>{this.findMet1('f5')}</center></Button9c><Button9d><center>{this.findRd1('f5')}</center></Button9d>
                        <Button9e>{space}<text style={{color: 'grey'}}>{this.findRank1('f6')}</text><text> {this.findName1('f6')}</text><text style={{color: 'grey'}}> {this.findRec1('f6')}</text></Button9e><Button9b><center><text>def.</text></center></Button9b><Button9><text style={{color: 'grey'}}>{this.findRank1L('f6')} </text><text>{this.findName1L('f6')}</text><text style={{color: 'grey'}}> {this.findRec1L('f6')}</text></Button9><Button9c><center>{this.findMet1('f6')}</center></Button9c><Button9b><center>{this.findRd1('f6')}</center></Button9b>
                        <Button10><center><text style={{color: 'grey'}}>FINISHES: {sessionStorage.getItem('finishes')} out of 18 ({sessionStorage.getItem('knockouts')} KO, {sessionStorage.getItem('submissions')} SUB)</text></center></Button10>
                    </div>
                    <div className="App-header-style1" style={{marginTop: -98, marginRight: 0}}>
                        <Link to='./opponent'><Button>FIGHT</Button></Link>
                        <Link to='./schedule'><Button>SCHEDULE</Button></Link>
                        <Link to='./standingsmen'><Button>MEN</Button></Link>
                        <Link to='./standingswomen'><Button>WOMEN</Button></Link>
                        <Link to={parseInt(sessionStorage.getItem('month')) > 8 ? './playoffspfl' : './cardpfl'}><Button>CARD</Button></Link>
                        <Link to='./resultspfl'><ButtonG style={sessionStorage.getItem('firstResults') === 'true' ? {border: '2px solid gray', color: 'gray'} : {}}>RESULTS</ButtonG></Link>
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

export default ResultsPFL;
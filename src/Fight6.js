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

class Fight6 extends React.Component { 
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
        sessionStorage.setItem('wc', 6);
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -730 }} />
                        FIGHT<br/><br/>
                    </div>
                    <div className="Fight-division" style={{marginTop: 125}}>
                        <Button6>MIDDLEWEIGHT DIVISION</Button6>
                        <Link to='./fighterC'><ButtonC>C.{whitespace}{this.posC(6)}<text class="alignright">{this.posCrec(6)}{whitespace}</text></ButtonC></Link>
                        <Link to='./fighter1'><Button5>1.{whitespace}{this.pos1(6)}<text class="alignright">{this.pos1rec(6)}{whitespace}</text></Button5></Link>
                        <Link to='./fighter2'><Button5>2.{whitespace}{this.pos2(6)}<text class="alignright">{this.pos2rec(6)}{whitespace}</text></Button5></Link>
                        <Link to='./fighter3'><Button5>3.{whitespace}{this.pos3(6)}<text class="alignright">{this.pos3rec(6)}{whitespace}</text></Button5></Link>
                        <Link to='./fighter4'><Button5>4.{whitespace}{this.pos4(6)}<text class="alignright">{this.pos4rec(6)}{whitespace}</text></Button5></Link>
                        <Link to='./fighter5'><Button5>5.{whitespace}{this.pos5(6)}<text class="alignright">{this.pos5rec(6)}{whitespace}</text></Button5></Link>
                        <Link to='./fighter6'><Button5>6.{whitespace}{this.pos6(6)}<text class="alignright">{this.pos6rec(6)}{whitespace}</text></Button5></Link>
                        <Link to='./fighter7'><Button5>7.{whitespace}{this.pos7(6)}<text class="alignright">{this.pos7rec(6)}{whitespace}</text></Button5></Link>
                        <Link to='./fighter8'><Button5>8.{whitespace}{this.pos8(6)}<text class="alignright">{this.pos8rec(6)}{whitespace}</text></Button5></Link>
                        <Link to='./fighter9'><Button5>9.{whitespace}{this.pos9(6)}<text class="alignright">{this.pos9rec(6)}{whitespace}</text></Button5></Link>
                        <Link to='./fighter10'><Button5>10. {this.pos10(6)}<text class="alignright">{this.pos10rec(6)}{whitespace}</text></Button5></Link>
                    </div>
                    <div className="App-header-style1" style={{marginTop: -410, marginRight: 0}}>
                        <Link to='./fight'><ButtonWO>OFFERS</ButtonWO></Link>
                        <Link to='./card'><ButtonW>CARD</ButtonW></Link>
                        <Link to='./fight1'><ButtonW>125</ButtonW></Link>
                        <Link to='./fight2'><ButtonW>135</ButtonW></Link>
                        <Link to='./fight3'><ButtonW>145</ButtonW></Link>
                        <Link to='./fight4'><ButtonW>155</ButtonW></Link>
                        <Link to='./fight5'><ButtonW>170</ButtonW></Link>
                        <Link to='./fight6'><ButtonW1>185</ButtonW1></Link>
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

export default Fight6;
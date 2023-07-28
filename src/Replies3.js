import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactTooltip from "react-tooltip";
import logo from './mmasim2021logo.png';
import twitterLogo from './twitterLogo.png';
import './App.css';

const TweetMode = styled.button`
  background-color: transparent;
  color: white;
  padding: 8px;
  margin-left: 10px;
  margin-right: 10px;
  width: 275px;
  height: 80px;
  text-align: center;
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

const Button6 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 850px;
height: 50px;
text-align: center;
margin-top: 0px;
margin-left: 35px;
margin-right: 35px;
font-size: 50px;
border: 0px;
font-family: 'Roboto', sans-serif;
font-style: italic;
`

const Button7 = styled.button`
background-color: white;
color: #212121;
padding: 0px;
width: 850px;
height: 130px;
text-align: left;
margin-top: 10px;
margin-bottom: 0px;
margin-left: 35px;
margin-right: 35px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 20px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const Button8 = styled.button`
background-color: white;
color: white;
padding: 0px;
width: 1500px;
height: 150px;
text-align: left;
margin-top: 10px;
margin-bottom: 10px;
margin-left: 0px;
margin-right: 0px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 40px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const Button9 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 1920px;
height: 50px;
text-align: center;
margin-top: 0px;
margin-left: 0px;
margin-right: 0px;
font-size: 30px;
border: 0px;
font-family: 'Roboto', sans-serif;
font-style: italic;
`

const Button7R = styled.button`
background-color: white;
color: #212121;
padding: 0px;
width: 1100px;
height: 130px;
text-align: left;
margin-top: 10px;
margin-bottom: 0px;
margin-left: 35px;
margin-right: 35px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 20px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

class Replies3 extends React.Component { 
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

    uncapitalize(str) {
        return str.toLowerCase();
      }

    rTag(twt) {
        if (twt.rmsg == 'NO REPLIES'){
            return '';
        }
        else {
            let str = '@' + this.uncapitalize(twt.rfirst) + this.uncapitalize(twt.rlast) + 'mma';
            return str;
        }
    }
    
    rRep(twt) {
        if (twt.rmsg == 'NO REPLIES'){
            return '';
        }
        else {
            let str = '0 REPLIES';
            return str;
        }
    }

    rDat(twt) {
        if (twt.rmsg == 'NO REPLIES'){
            return '';
        }
        else {
            let ws2 = "\xa0\xa0";
            let str = twt.month + ' ' + twt.year + ws2 + '•' + ws2;
            return str;
        }
    }

    render() {
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
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let first = data.first;
        let last = data.last;
        let whitespace = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        let ws = "\xa0\xa0\xa0\xa0";
        let ws1 = "\xa0";
        let ws2 = "\xa0\xa0";
        let twt3 = sessionStorage.getItem('twt3');
        twt3 = JSON.parse(twt3);
        return(
            <div className="App">
                <div className="App-twitter">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -725 }} />
                        REPLIES<br/><br/>
                        <img src={twitterLogo} alt='logo' className="App-logo2" style={{ marginTop: -70 }} />
                    </div>
                    <div className="App-customize4" style={{marginTop: 160}}>
                        <Button7R><text class="alignleft">{ws}<b>{first} {last}</b> @{this.uncapitalize(first)}{this.uncapitalize(last)}mma<br/>{ws}{twt3.msg}<br/>{ws}<text style={{fontSize: 20}}><b>{twt3.month} {twt3.year}{ws2}•{ws2}{twt3.replies} REPLIES</b></text></text></Button7R>
                    </div>
                    <div className="App-customize4" style={{marginTop: -550}}>
                        <Button7><text class="alignleft">{ws}<b>{twt3.rfirst} {twt3.rlast}</b> {this.rTag(twt3)}<br/>{ws}{twt3.rmsg}<br/>{ws}<text style={{fontSize: 20}}><b>{this.rDat(twt3)}{this.rRep(twt3)}</b></text></text></Button7>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: -173, fontSize: 30 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./twitter'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Replies3;
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

class Twitter extends React.Component { 
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
        let twt1 = sessionStorage.getItem('twt1');
        twt1 = JSON.parse(twt1);
        let twt2 = sessionStorage.getItem('twt2');
        twt2 = JSON.parse(twt2);
        let twt3 = sessionStorage.getItem('twt3');
        twt3 = JSON.parse(twt3);
        let twt4 = sessionStorage.getItem('twt4');
        twt4 = JSON.parse(twt4);
        return(
            <div className="App">
                <div className="App-twitter">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -725 }} />
                        TWITTER<br/><br/>
                        <img src={twitterLogo} alt='logo' className="App-logo2" style={{ marginTop: -70 }} />
                    </div>
                    <div className="App-customize4" style={{marginTop: 105}}>
                        <Button6><b>FOLLOWERS</b> {sessionStorage.getItem('followers')}</Button6>
                        <Button6><b>MMA TRENDING</b></Button6>
                    </div>
                    <div className="App-customize4" style={{marginTop: -645}}>
                        <Link to='./replies1'><Button7><text class="alignleft">{ws}<b>{first} {last}</b> @{this.uncapitalize(first)}{this.uncapitalize(last)}mma<br/>{ws}{twt1.msg}<br/>{ws}<text style={{fontSize: 20}}><b>{twt1.month} {twt1.year}{ws2}•{ws2}{twt1.replies} REPLIES</b></text></text></Button7></Link>
                        <Link to='./gym'><Button7><text class="alignleft">{ws}<b>ARIEL HELWANI</b> @arielhelwani<br/>{ws}THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG<br/>{ws}<text style={{fontSize: 20}}><b>JAN 2021{ws2}•{ws2}0 REPLIES</b></text></text></Button7></Link>
                        <Link to='./replies2'><Button7><text class="alignleft">{ws}<b>{first} {last}</b> @{this.uncapitalize(first)}{this.uncapitalize(last)}mma<br/>{ws}{twt2.msg}<br/>{ws}<text style={{fontSize: 20}}><b>{twt2.month} {twt2.year}{ws2}•{ws2}{twt2.replies} REPLIES</b></text></text></Button7></Link>
                        <Link to='./gym'><Button7><text class="alignleft">{ws}<b>BRETT OKAMOTO</b> @bokamotoESPN<br/>{ws}THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG<br/>{ws}<text style={{fontSize: 20}}><b>JAN 2021{ws2}•{ws2}0 REPLIES</b></text></text></Button7></Link>
                        <Link to='./replies3'><Button7><text class="alignleft">{ws}<b>{first} {last}</b> @{this.uncapitalize(first)}{this.uncapitalize(last)}mma<br/>{ws}{twt3.msg}<br/>{ws}<text style={{fontSize: 20}}><b>{twt3.month} {twt3.year}{ws2}•{ws2}{twt3.replies} REPLIES</b></text></text></Button7></Link>
                        <Link to='./gym'><Button7><text class="alignleft">{ws}<b>THE SCHMO</b> @TheSchmo312<br/>{ws}THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG<br/>{ws}<text style={{fontSize: 20}}><b>JAN 2021{ws2}•{ws2}0 REPLIES</b></text></text></Button7></Link>
                        <Link to='./replies4'><Button7><text class="alignleft">{ws}<b>{first} {last}</b> @{this.uncapitalize(first)}{this.uncapitalize(last)}mma<br/>{ws}{twt4.msg}<br/>{ws}<text style={{fontSize: 20}}><b>{twt4.month} {twt4.year}{ws2}•{ws2}{twt4.replies} REPLIES</b></text></text></Button7></Link>
                        <Link to='./gym'><Button7><text class="alignleft">{ws}<b>THE SCHMO</b> @TheSchmo312<br/>{ws}THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG<br/>{ws}<text style={{fontSize: 20}}><b>JAN 2021{ws2}•{ws2}0 REPLIES</b></text></text></Button7></Link>
                    </div>
                    <div className="App-customize4" style={{marginLeft: 0, marginTop: -123}}>
                        <Button9>
                            <Link to={(sessionStorage.getItem('org') == 0) ? './twitter' : './tweet2'}><TweetMode data-tip data-for="tweetModeTip2" style={(sessionStorage.getItem('org') == 0) ? {border: '2px solid gray', color: 'gray'} : {}}>TALK SHIT</TweetMode></Link>
                            <ReactTooltip id="tweetModeTip2" place="top" effect="solid">CALL OUT A FIGHTER, GAIN FOLLOWERS</ReactTooltip>
                        </Button9>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: -600, fontSize: 30 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./home'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Twitter;
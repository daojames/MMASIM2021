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
width: 760px;
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
width: 760px;
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

const Input = styled.input`
background-color: transparent;
color: white;
padding: 10px;
margin-left: 50px;
margin-right: 50px;
width: 1200px;
height: 75px;
text-align: left;
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

class Tweet1 extends React.Component { 
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

    calcMonth1(month){
        switch(month){
            case '1':
                return 'JAN';
                break;
            case '2':
                return 'FEB';
                break;
            case '3':
                return 'MAR';
                break;
            case '4':
                return 'APR';
                break;
            case '5':
                return 'MAY';
                break;
            case '6':
                return 'JUN';
                break;
            case '7':
                return 'JUL';
                break;
            case '8':
                return 'AUG';
                break;
            case '9':
                return 'SEP';
                break;
            case '10':
                return 'OCT';
                break;
            case '11':
                return 'NOV';
                break;
            case '12':
                return 'DEC';
                break;
        }
    }

    capitalize(str) {
        return str.toUpperCase();
    }

    uncapitalize(str) {
        return str.toLowerCase();
    }

    constructor(props) {
        super(props);
        this.state = {
          tweet: 'FUCK YOU'
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        sessionStorage.setItem('twt4', sessionStorage.getItem('twt3'));
        sessionStorage.setItem('twt3', sessionStorage.getItem('twt2'));
        sessionStorage.setItem('twt2', sessionStorage.getItem('twt1'));
        console.log(sessionStorage.getItem('chalFirst'))
        let twt1 = {
            month: this.calcMonth1(sessionStorage.getItem('month')),
            year: sessionStorage.getItem('year'),
            msg: '@' + this.uncapitalize(sessionStorage.getItem('chalFirst')) + this.uncapitalize(sessionStorage.getItem('chalLast')) + 'mma ' + this.capitalize(this.state.tweet),
            replies: 0,
            rfirst: '',
            rlast: '',
            rmonth: '',
            ryear: '',
            rmsg: 'NO REPLIES'
          }
          sessionStorage.setItem('twt1', JSON.stringify(twt1));
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
        return(
            <div className="App">
                <div className="App-twitter">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -725 }} />
                        TWITTER<br/><br/>
                        <img src={twitterLogo} alt='logo' className="App-logo2" style={{ marginTop: -70 }} />
                    </div>
                    <div className="App-customize4" style={{marginTop: 165}}>
                        <Button6><b>COMPOSE</b></Button6>
                    </div>
                    <div className="App-customize4" style={{marginTop: -635}}>
                        <Input
                        name="tweet"
                        type="input"
                        value={this.state.tweet}
                        checked={this.state.tweet}
                        onChange={this.handleInputChange} />
                    </div>
                    <div className="App-customize4" style={{marginTop: -575}}>
                        <Link to='./twitter'><TweetMode onClick={this.handleSubmit}>TWEET</TweetMode></Link>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: -218, fontSize: 30 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./tweet2'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tweet1;
import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';
import returnFighterF from './ReturnFighterF.js';

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
width: 600px;
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

const Button8a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 600px;
height: 57px;
text-align: left;
margin-top: 3px;
margin-bottom: 3px;
margin-left: 10px;
margin-right: 10px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 2px dashed gray;
border-radius: 2px;
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
width: 600px;
height: 57px;
text-align: left;
margin-top: 3px;
margin-bottom: 3px;
margin-left: 10px;
margin-right: 10px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 2px;
outline: 0;
`

class StandingsWomen extends React.Component { 
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

    getWeightName(weight) {
        if (weight == 'WSTRAWWEIGHT'){
            return "STRAWWEIGHT";
        }
        else if (weight == 'WFLYWEIGHT'){
            return "FLYWEIGHT";
        }
        else if (weight == 'WBANTAMWEIGHT'){
            return "BANTAMWEIGHT";
        }
    }

    view1() {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        if (data.weight == "WSTRAWWEIGHT" || data.weight == "WFLYWEIGHT" || data.weight == "WBANTAMWEIGHT") {
            sessionStorage.setItem('sfighter', 12345);
        }
        else {
            sessionStorage.setItem('sfighter', unv1[0]);
        }
    }

    view2() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        sessionStorage.setItem('sfighter', unv1[1]);
    }

    view3() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        sessionStorage.setItem('sfighter', unv1[2]);
    }
    
    view4() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        sessionStorage.setItem('sfighter', unv1[3]);
    }
    
    view5() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        sessionStorage.setItem('sfighter', unv1[4]);
    }
    
    view6() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        sessionStorage.setItem('sfighter', unv1[5]);
    }
    
    view7() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        sessionStorage.setItem('sfighter', unv1[6]);
    }
    
    view8() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        sessionStorage.setItem('sfighter', unv1[7]);
    }
    
    view9() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        sessionStorage.setItem('sfighter', unv1[8]);
    }
    
    view10() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        sessionStorage.setItem('sfighter', unv1[9]);
    }
    
    view11() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        sessionStorage.setItem('sfighter', unv1[10]);
    }
    
    view12() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        sessionStorage.setItem('sfighter', unv1[11]);
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
        let unv2 = JSON.parse('[' + sessionStorage.getItem('pflf') + ']');
        let yourName = data.first + ' ' + data.last;
        let firstName = JSON.parse(returnFighterF(unv2[0])).first + ' ' + JSON.parse(returnFighterF(unv2[0])).last;
        let botRec = '(' + JSON.parse(returnFighterF(unv2[0])).swin + ' - ' + JSON.parse(returnFighterF(unv2[0])).sloss + ')';
        let botPts = JSON.parse(returnFighterF(unv2[0])).pts;
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -730 }} />
                        PFL {year} WOMEN'S {(data.weight == "WSTRAWWEIGHT" || data.weight == "WFLYWEIGHT" || data.weight == "WBANTAMWEIGHT") ? this.getWeightName(data.weight) : "STRAWWEIGHT"} STANDINGS<br/><br/>
                    </div>
                    <div className="App-customize4" style={{marginTop: 207}}>
                        <Button9>{space}RANK{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}SEASON REC.{whitespace}{whitespace}PTS</Button9>
                        <Button9>{space}RANK{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}SEASON REC.{whitespace}{whitespace}PTS</Button9>
                        <Button9>{space}RANK{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}SEASON REC.{whitespace}{whitespace}PTS</Button9>
                    </div>
                    <div className="App-customize4" style={{marginTop: -638}}>
                        <Link to='./sfighterf'><Button8 onClick={this.view1}>{whitespace}1.{white}{whitespace}{(data.weight == "WSTRAWWEIGHT" || data.weight == "WFLYWEIGHT" || data.weight == "WBANTAMWEIGHT") ? <text>{yourName}</text> : <text>{firstName}</text>}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{(data.weight == "WSTRAWWEIGHT" || data.weight == "WFLYWEIGHT" || data.weight == "WBANTAMWEIGHT") ? <text>{sessionStorage.getItem('playerPts')}</text> : <text>{botPts}</text>}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>{(data.weight == "WSTRAWWEIGHT" || data.weight == "WFLYWEIGHT" || data.weight == "WBANTAMWEIGHT") ? <text>({sessionStorage.getItem('playerSwin')} - {sessionStorage.getItem('playerSloss')})</text> : <text>{botRec}</text>}</text></Button8></Link>
                        <Link to='./sfighterf'><Button8 onClick={this.view5}>{whitespace}5.{white}{whitespace}{JSON.parse(returnFighterF(unv2[4])).first} {JSON.parse(returnFighterF(unv2[4])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterF(unv2[4])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterF(unv2[4])).swin} - {JSON.parse(returnFighterF(unv2[4])).sloss})</text></Button8></Link>
                        <Link to='./sfighterf'><Button8a onClick={this.view9}>{whitespace}9.{white}{whitespace}{JSON.parse(returnFighterF(unv2[8])).first} {JSON.parse(returnFighterF(unv2[8])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterF(unv2[8])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterF(unv2[8])).swin} - {JSON.parse(returnFighterF(unv2[8])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterf'><Button8 onClick={this.view2}>{whitespace}2.{white}{whitespace}{JSON.parse(returnFighterF(unv2[1])).first} {JSON.parse(returnFighterF(unv2[1])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterF(unv2[1])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterF(unv2[1])).swin} - {JSON.parse(returnFighterF(unv2[1])).sloss})</text></Button8></Link>
                        <Link to='./sfighterf'><Button8 onClick={this.view6}>{whitespace}6.{white}{whitespace}{JSON.parse(returnFighterF(unv2[5])).first} {JSON.parse(returnFighterF(unv2[5])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterF(unv2[5])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterF(unv2[5])).swin} - {JSON.parse(returnFighterF(unv2[5])).sloss})</text></Button8></Link>
                        <Link to='./sfighterf'><Button8a onClick={this.view10}>{whitespace}10.{whitespace}{JSON.parse(returnFighterF(unv2[9])).first} {JSON.parse(returnFighterF(unv2[9])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterF(unv2[9])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterF(unv2[9])).swin} - {JSON.parse(returnFighterF(unv2[9])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterf'><Button8 onClick={this.view3}>{whitespace}3.{white}{whitespace}{JSON.parse(returnFighterF(unv2[2])).first} {JSON.parse(returnFighterF(unv2[2])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterF(unv2[2])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterF(unv2[2])).swin} - {JSON.parse(returnFighterF(unv2[2])).sloss})</text></Button8></Link>
                        <Link to='./sfighterf'><Button8 onClick={this.view7}>{whitespace}7.{white}{whitespace}{JSON.parse(returnFighterF(unv2[6])).first} {JSON.parse(returnFighterF(unv2[6])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterF(unv2[6])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterF(unv2[6])).swin} - {JSON.parse(returnFighterF(unv2[6])).sloss})</text></Button8></Link>
                        <Link to='./sfighterf'><Button8a onClick={this.view11}>{whitespace}11.{whitespace}{JSON.parse(returnFighterF(unv2[10])).first} {JSON.parse(returnFighterF(unv2[10])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterF(unv2[10])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterF(unv2[10])).swin} - {JSON.parse(returnFighterF(unv2[10])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterf'><Button8 onClick={this.view4}>{whitespace}4.{white}{whitespace}{JSON.parse(returnFighterF(unv2[3])).first} {JSON.parse(returnFighterF(unv2[3])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterF(unv2[3])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterF(unv2[3])).swin} - {JSON.parse(returnFighterF(unv2[3])).sloss})</text></Button8></Link>
                        <Link to='./sfighterf'><Button8 onClick={this.view8}>{whitespace}8.{white}{whitespace}{JSON.parse(returnFighterF(unv2[7])).first} {JSON.parse(returnFighterF(unv2[7])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterF(unv2[7])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterF(unv2[7])).swin} - {JSON.parse(returnFighterF(unv2[7])).sloss})</text></Button8></Link>
                        <Link to='./sfighterf'><Button8a onClick={this.view12}>{whitespace}12.{whitespace}{JSON.parse(returnFighterF(unv2[11])).first} {JSON.parse(returnFighterF(unv2[11])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterF(unv2[11])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterF(unv2[11])).swin} - {JSON.parse(returnFighterF(unv2[11])).sloss})</text></Button8a></Link>
                    </div>
                    <div className="App-header-style1" style={{marginTop: -257, marginRight: 0}}>
                        <Link to='./opponent'><Button>FIGHT</Button></Link>
                        <Link to='./schedule'><Button>SCHEDULE</Button></Link>
                        <Link to='./standingsmen'><Button>MEN</Button></Link>
                        <Link to='./standingswomen'><ButtonG>WOMEN</ButtonG></Link>
                        <Link to='./cardpfl'><Button>CARD</Button></Link>
                        <Link to='./fight'><Button>RESULTS</Button></Link>
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

export default StandingsWomen;
import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';
import returnFighterM from './ReturnFighterM.js';

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

class StandingsMen extends React.Component { 
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
        if (weight == 'FLYWEIGHT'){
            return "FLYWEIGHT";
        }
        else if (weight == 'BANTAMWEIGHT'){
            return "BANTAMWEIGHT";
        }
        else if (weight == 'FEATHERWEIGHT'){
            return "FEATHERWEIGHT";
        }
        else if (weight == 'LIGHTWEIGHT'){
            return "LIGHTWEIGHT";
        }
        else if (weight == 'WELTERWEIGHT'){
            return "WELTERWEIGHT";
        }
        else if (weight == 'MIDDLEWEIGHT'){
            return "MIDDLEWEIGHT";
        }
        else if (weight == 'LIGHT HEAVYWEIGHT'){
            return "LIGHT HEAVYWEIGHT";
        }
        else if (weight == 'HEAVYWEIGHT'){
            return "HEAVYWEIGHT";
        }
    }

    view1() {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        if (data.weight != "WSTRAWWEIGHT" && data.weight != "WFLYWEIGHT" && data.weight != "WBANTAMWEIGHT") {
            sessionStorage.setItem('sfighter', 12345);
        }
        else {
            sessionStorage.setItem('sfighter', unv1[0]);
        }
    }

    view2() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[1]);
    }

    view3() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[2]);
    }
    
    view4() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[3]);
    }
    
    view5() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[4]);
    }
    
    view6() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[5]);
    }
    
    view7() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[6]);
    }
    
    view8() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[7]);
    }
    
    view9() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[8]);
    }
    
    view10() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[9]);
    }
    
    view11() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[10]);
    }
    
    view12() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[11]);
    }
    
    view13() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[12]);
    }
    
    view14() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[13]);
    }
    
    view15() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[14]);
    }
    
    view16() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[15]);
    }
    
    view17() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[16]);
    }
    
    view18() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[17]);
    }
    
    view19() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[18]);
    }
    
    view20() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[19]);
    }
    
    view21() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[20]);
    }
    
    view22() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[21]);
    }
    
    view23() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[22]);
    }
    
    view24() {
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        sessionStorage.setItem('sfighter', unv1[23]);
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
        let unv1 = JSON.parse('[' + sessionStorage.getItem('pflm') + ']');
        let yourName = data.first + ' ' + data.last;
        let firstName = JSON.parse(returnFighterM(unv1[0])).first + ' ' + JSON.parse(returnFighterM(unv1[0])).last;
        let botRec = '(' + JSON.parse(returnFighterM(unv1[0])).swin + ' - ' + JSON.parse(returnFighterM(unv1[0])).sloss + ')';
        let botPts = JSON.parse(returnFighterM(unv1[0])).pts;
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -730 }} />
                        PFL {year} MEN'S {(data.weight != "WSTRAWWEIGHT" && data.weight != "WFLYWEIGHT" && data.weight != "WBANTAMWEIGHT") ? this.getWeightName(data.weight) : "BANTAMWEIGHT"} STANDINGS<br/><br/>
                    </div>
                    <div className="App-customize4" style={{marginTop: 80}}>
                        <Button9>{space}RANK{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}SEASON REC.{whitespace}{whitespace}PTS</Button9>
                        <Button9>{space}RANK{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}SEASON REC.{whitespace}{whitespace}PTS</Button9>
                        <Button9>{space}RANK{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}{whitespace}SEASON REC.{whitespace}{whitespace}PTS</Button9>
                    </div>
                    <div className="App-customize4" style={{marginTop: -638}}>
                        <Link to='./sfighterm'><Button8 onClick={this.view1}>{whitespace}1.{white}{whitespace}{(data.weight != "WSTRAWWEIGHT" && data.weight != "WFLYWEIGHT" && data.weight != "WBANTAMWEIGHT") ? <text>{yourName}</text> : <text>{firstName}</text>}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{(data.weight != "WSTRAWWEIGHT" && data.weight != "WFLYWEIGHT" && data.weight != "WBANTAMWEIGHT") ? <text>{sessionStorage.getItem('playerPts')}</text> : <text>{botPts}</text>}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>{(data.weight != "WSTRAWWEIGHT" && data.weight != "WFLYWEIGHT" && data.weight != "WBANTAMWEIGHT") ? <text>({sessionStorage.getItem('playerSwin')} - {sessionStorage.getItem('playerSloss')})</text> : <text>{botRec}</text>}</text></Button8></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view9}>{whitespace}9.{white}{whitespace}{JSON.parse(returnFighterM(unv1[8])).first} {JSON.parse(returnFighterM(unv1[8])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[8])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[8])).swin} - {JSON.parse(returnFighterM(unv1[8])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view17}>{whitespace}17.{whitespace}{JSON.parse(returnFighterM(unv1[16])).first} {JSON.parse(returnFighterM(unv1[16])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[16])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[16])).swin} - {JSON.parse(returnFighterM(unv1[16])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8 onClick={this.view2}>{whitespace}2.{white}{whitespace}{JSON.parse(returnFighterM(unv1[1])).first} {JSON.parse(returnFighterM(unv1[1])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[1])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[1])).swin} - {JSON.parse(returnFighterM(unv1[1])).sloss})</text></Button8></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view10}>{whitespace}10.{whitespace}{JSON.parse(returnFighterM(unv1[9])).first} {JSON.parse(returnFighterM(unv1[9])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[9])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[9])).swin} - {JSON.parse(returnFighterM(unv1[9])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view18}>{whitespace}18.{whitespace}{JSON.parse(returnFighterM(unv1[17])).first} {JSON.parse(returnFighterM(unv1[17])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[17])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[17])).swin} - {JSON.parse(returnFighterM(unv1[17])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8 onClick={this.view3}>{whitespace}3.{white}{whitespace}{JSON.parse(returnFighterM(unv1[2])).first} {JSON.parse(returnFighterM(unv1[2])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[2])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[2])).swin} - {JSON.parse(returnFighterM(unv1[2])).sloss})</text></Button8></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view11}>{whitespace}11.{whitespace}{JSON.parse(returnFighterM(unv1[10])).first} {JSON.parse(returnFighterM(unv1[10])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[10])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[10])).swin} - {JSON.parse(returnFighterM(unv1[10])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view19}>{whitespace}19.{whitespace}{JSON.parse(returnFighterM(unv1[18])).first} {JSON.parse(returnFighterM(unv1[18])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[18])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[18])).swin} - {JSON.parse(returnFighterM(unv1[18])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8 onClick={this.view4}>{whitespace}4.{white}{whitespace}{JSON.parse(returnFighterM(unv1[3])).first} {JSON.parse(returnFighterM(unv1[3])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[3])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[3])).swin} - {JSON.parse(returnFighterM(unv1[3])).sloss})</text></Button8></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view12}>{whitespace}12.{whitespace}{JSON.parse(returnFighterM(unv1[11])).first} {JSON.parse(returnFighterM(unv1[11])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[11])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[11])).swin} - {JSON.parse(returnFighterM(unv1[11])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view20}>{whitespace}20.{whitespace}{JSON.parse(returnFighterM(unv1[19])).first} {JSON.parse(returnFighterM(unv1[19])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[19])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[19])).swin} - {JSON.parse(returnFighterM(unv1[19])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8 onClick={this.view5}>{whitespace}5.{white}{whitespace}{JSON.parse(returnFighterM(unv1[4])).first} {JSON.parse(returnFighterM(unv1[4])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[4])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[4])).swin} - {JSON.parse(returnFighterM(unv1[4])).sloss})</text></Button8></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view13}>{whitespace}13.{whitespace}{JSON.parse(returnFighterM(unv1[12])).first} {JSON.parse(returnFighterM(unv1[12])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[12])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[12])).swin} - {JSON.parse(returnFighterM(unv1[12])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view21}>{whitespace}21.{whitespace}{JSON.parse(returnFighterM(unv1[20])).first} {JSON.parse(returnFighterM(unv1[20])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[20])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[20])).swin} - {JSON.parse(returnFighterM(unv1[20])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8 onClick={this.view6}>{whitespace}6.{white}{whitespace}{JSON.parse(returnFighterM(unv1[5])).first} {JSON.parse(returnFighterM(unv1[5])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[5])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[5])).swin} - {JSON.parse(returnFighterM(unv1[5])).sloss})</text></Button8></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view14}>{whitespace}14.{whitespace}{JSON.parse(returnFighterM(unv1[13])).first} {JSON.parse(returnFighterM(unv1[13])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[13])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[13])).swin} - {JSON.parse(returnFighterM(unv1[13])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view22}>{whitespace}22.{whitespace}{JSON.parse(returnFighterM(unv1[21])).first} {JSON.parse(returnFighterM(unv1[21])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[21])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[21])).swin} - {JSON.parse(returnFighterM(unv1[21])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8 onClick={this.view7}>{whitespace}7.{white}{whitespace}{JSON.parse(returnFighterM(unv1[6])).first} {JSON.parse(returnFighterM(unv1[6])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[6])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[6])).swin} - {JSON.parse(returnFighterM(unv1[6])).sloss})</text></Button8></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view15}>{whitespace}15.{whitespace}{JSON.parse(returnFighterM(unv1[14])).first} {JSON.parse(returnFighterM(unv1[14])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[14])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[14])).swin} - {JSON.parse(returnFighterM(unv1[14])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view23}>{whitespace}23.{whitespace}{JSON.parse(returnFighterM(unv1[22])).first} {JSON.parse(returnFighterM(unv1[22])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[22])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[22])).swin} - {JSON.parse(returnFighterM(unv1[22])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8 onClick={this.view8}>{whitespace}8.{white}{whitespace}{JSON.parse(returnFighterM(unv1[7])).first} {JSON.parse(returnFighterM(unv1[7])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[7])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[7])).swin} - {JSON.parse(returnFighterM(unv1[7])).sloss})</text></Button8></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view16}>{whitespace}16.{whitespace}{JSON.parse(returnFighterM(unv1[15])).first} {JSON.parse(returnFighterM(unv1[15])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[15])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[15])).swin} - {JSON.parse(returnFighterM(unv1[15])).sloss})</text></Button8a></Link>
                        <Link to='./sfighterm'><Button8a onClick={this.view24}>{whitespace}24.{whitespace}{JSON.parse(returnFighterM(unv1[23])).first} {JSON.parse(returnFighterM(unv1[23])).last}<text class='alignright'>{whitespace}{whitespace}{whitespace}{whitespace}{space}{JSON.parse(returnFighterM(unv1[23])).pts}{whitespace}</text><text class='alignright' style={{color: 'gray'}}>({JSON.parse(returnFighterM(unv1[23])).swin} - {JSON.parse(returnFighterM(unv1[23])).sloss})</text></Button8a></Link>
                    </div>
                    <div className="App-header-style1" style={{marginTop: -130, marginRight: 0}}>
                        <Link to='./opponent'><Button>FIGHT</Button></Link>
                        <Link to='./schedule'><Button>SCHEDULE</Button></Link>
                        <Link to='./standingsmen'><ButtonG>MEN</ButtonG></Link>
                        <Link to='./standingswomen'><Button>WOMEN</Button></Link>
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

export default StandingsMen;
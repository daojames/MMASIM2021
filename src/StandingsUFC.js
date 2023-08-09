import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';
import returnFighterM from './ReturnFighterM';
import returnFighterF from "./ReturnFighterF";
import getFlagUFC from './GetFlagUFC';
import getHalfUFC from './GetHalfUFC';
import getRecordUFC from './GetRecordUFC';
import getNameUFC from './GetNameUFC';
import getStreakUFC from './GetStreakUFC';
import getPrevUFC from './GetPrevUFC';

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
font-size: 25px;
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
font-size: 25px;
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
font-size: 25px;
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
font-size: 25px;
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
font-size: 25px;
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

const Button10 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 900px;
height: 65px;
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
width: 728px;
height: 65px;
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
width: 100px;
height: 65px;
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
width: 246px;
height: 65px;
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

const Button9c1 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 242px;
height: 65px;
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

const Button9d = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 48px;
height: 65px;
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
width: 724px;
height: 65px;
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
width: 728px;
height: 65px;
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
width: 100px;
height: 65px;
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
width: 246px;
height: 65px;
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

const Button0c1 = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 242px;
height: 65px;
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

const Button0d = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 48px;
height: 65px;
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
width: 724px;
height: 65px;
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
width: 310px;
height: 65px;
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
height: 65px;
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
width: 80px;
height: 45px;
text-align: center;
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

const Button13a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 82px;
height: 65px;
text-align: center;
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

const Button13b = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 82px;
height: 65px;
text-align: center;
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

const Button14 = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 80px;
height: 45px;
text-align: center;
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

const Button14a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 84px;
height: 65px;
text-align: center;
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

const Button14b = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 84px;
height: 65px;
text-align: center;
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

const Button15 = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 120px;
height: 45px;
text-align: center;
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

const Button15a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 124px;
height: 65px;
text-align: center;
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

const Button15b = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 124px;
height: 65px;
text-align: center;
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

const Button16 = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 340px;
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

const Button16a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 344px;
height: 65px;
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

const Button16b = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 344px;
height: 65px;
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

const Button17 = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 70px;
height: 45px;
text-align: center;
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

const Button17a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 74px;
height: 65px;
text-align: center;
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

const Button17b = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 74px;
height: 65px;
text-align: center;
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

const Button18 = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 80px;
height: 45px;
text-align: center;
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

const Button18a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 84px;
height: 65px;
text-align: center;
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

const Button18b = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 84px;
height: 65px;
text-align: center;
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

const Button19 = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 640px;
height: 45px;
text-align: center;
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

const Button19a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 644px;
height: 65px;
text-align: center;
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

const Button19b = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 644px;
height: 65px;
text-align: center;
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

const Button20 = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 465px;
height: 45px;
text-align: center;
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

const Button20a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 467px;
height: 65px;
text-align: center;
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

const Button20b = styled.button`
background-color: #474747;
color: white;
padding: 0px;
width: 467px;
height: 65px;
text-align: center;
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

const Flag = styled.button`
position: absolute;
pointer-events: none;
background-color: transparent;
color: white;
padding: 0px;
text-align: left;
font-size: 0px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const ButtonWC = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 100px;
height: 60px;
text-align: center;
margin-top: 10px;
margin-bottom: 0px;
margin-left: 5px;
margin-right: 5px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 2px solid white;
border-radius: 0px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const ButtonWC1 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 100px;
height: 60px;
text-align: center;
margin-top: 10px;
margin-bottom: 0px;
margin-left: 5px;
margin-right: 5px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const ButtonWC2 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 70px;
height: 60px;
text-align: center;
margin-top: 10px;
margin-bottom: 0px;
margin-left: 5px;
margin-right: 5px;
font-size: 25px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 2px solid white;
border-radius: 0px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

class StandingsUFC extends React.Component { 
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
    
    rankSpace(x) {
        if (sessionStorage.getItem('ufcStandingsPage') === '1') {
            switch (x) {
                case 0:
                    x = 'C';
                break;
                case 1:
                    x = '1';
                break;
                case 2:
                    x = '2';
                break;
                case 3:
                    x = '3';
                break;
                case 4:
                    x = '4';
                break;
                case 5:
                    x = '5';
                break;
                case 6:
                    x = '6';
                break;
                case 7:
                    x = '7';
                break;
            }
        }
        else {
            switch (x) {
                case 0:
                    x = '8';
                break;
                case 1:
                    x = '9';
                break;
                case 2:
                    x = '10';
                break;
                case 3:
                    x = '11';
                break;
                case 4:
                    x = '12';
                break;
                case 5:
                    x = '13';
                break;
                case 6:
                    x = '14';
                break;
                case 7:
                    x = '15';
                break;
            }
        }

        return x;
    }

    getStreak(x) {
        if (parseInt(x) < 0) {
            return -x;
        }
        return x;
    }

    getStreakColor(x) {
        if (parseInt(x) < 0) {
            return '#FF0000';
        }
        return '#00FF00';
    }

    getButtonColor(x, y) {
        if (x === 'border') {
            if (sessionStorage.getItem('ufcStandingsPage') === y) {
                return '2px solid gray';
            }
            else {
                return '2px solid white';
            }
        }
        else {
            if (sessionStorage.getItem('ufcStandingsPage') === y) {
                return 'gray';
            }
            else {
                return 'white';
            }
        }
    }

    getDivColor(x) {
        if (sessionStorage.getItem('ufcPage') === x) {
            return 'grey';
        }
        return '';
    }

    setStandingsPage1() {
        sessionStorage.setItem('ufcStandingsPage', '1');
    }

    setStandingsPage2() {
        sessionStorage.setItem('ufcStandingsPage', '2');
    }

    setPage1() {
        sessionStorage.setItem('ufcPage', '1');
        sessionStorage.setItem('ufcStandingsPage', '1');
    }

    setPage2() {
        sessionStorage.setItem('ufcPage', '2');
        sessionStorage.setItem('ufcStandingsPage', '1');
    }

    setPage3() {
        sessionStorage.setItem('ufcPage', '3');
        sessionStorage.setItem('ufcStandingsPage', '1');
    }

    setPage4() {
        sessionStorage.setItem('ufcPage', '4');
        sessionStorage.setItem('ufcStandingsPage', '1');
    }

    setPage5() {
        sessionStorage.setItem('ufcPage', '5');
        sessionStorage.setItem('ufcStandingsPage', '1');
    }

    setPage6() {
        sessionStorage.setItem('ufcPage', '6');
        sessionStorage.setItem('ufcStandingsPage', '1');
    }

    setPage7() {
        sessionStorage.setItem('ufcPage', '7');
        sessionStorage.setItem('ufcStandingsPage', '1');
    }

    setPage8() {
        sessionStorage.setItem('ufcPage', '8');
        sessionStorage.setItem('ufcStandingsPage', '1');
    }

    setPage9() {
        sessionStorage.setItem('ufcPage', '9');
        sessionStorage.setItem('ufcStandingsPage', '1');
    }

    setPage10() {
        sessionStorage.setItem('ufcPage', '10');
        sessionStorage.setItem('ufcStandingsPage', '1');
    }

    setPage11() {
        sessionStorage.setItem('ufcPage', '11');
        sessionStorage.setItem('ufcStandingsPage', '1');
    }

    getShift(y, x) {
        if (y === 'text') {
            if (getPrevUFC(x) === '') return '\xa0';
            else if (getPrevUFC(x) === 'NR') return 'NR';
        }
        else if (y === 'border') {
            if (getPrevUFC(x) === '') return '#FFFFFF';
            else if (getPrevUFC(x) === 'NR') return 'gray';
        }

        let rank = getHalfUFC(x);
        if (rank === 'C') rank = 0;

        let diff = parseInt(getPrevUFC(x)) - parseInt(rank);
        
        if (y === 'text') {
            if (diff > 0) {
                return '▲ ' + diff;
            }
            else if (diff < 0) {
                return '▼ ' + (0 - diff);
            }
            else {
                return '\xa0';
            }
        }
        else if (y === 'border') {
            if (diff > 0) {
                return '#00FF00';
            }
            else if (diff < 0) {
                return '#FF0000';
            }
            else {
                return '#FFFFFF';
            }
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
        let flagSpace = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
        let wc = sessionStorage.getItem('wc0');
        sessionStorage.setItem('wc', sessionStorage.getItem('wc0'));

        let div = 'FLYWEIGHT';
        switch (parseInt(sessionStorage.getItem('ufcPage'))) {
            case 1:
                div = 'FLYWEIGHT';
            break;
            case 2:
                div = 'BANTAMWEIGHT';
            break;
            case 3:
                div = 'FEATHERWEIGHT';
            break;
            case 4:
                div = 'LIGHTWEIGHT';
            break;
            case 5:
                div = 'WELTERWEIGHT';
            break;
            case 6:
                div = 'MIDDLEWEIGHT';
            break;
            case 7:
                div = 'LIGHT HEAVYWEIGHT';
            break;
            case 8:
                div = 'HEAVYWEIGHT';
            break;
            case 9:
                div = 'WOMEN\'S STRAWWEIGHT';
            break;
            case 10:
                div = 'WOMEN\'S FLYWEIGHT';
            break;
            case 11:
                div = 'WOMEN\'S BANTAMWEIGHT';
            break;
        }
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -730 }} />
                        UFC {div} STANDINGS<br/><br/>
                    </div>
                    <div className="App-customize4" style={{marginTop: 70, marginBottom: 0, width: 1920 }}>
                        <Button13>SHIFT</Button13><Button14>RANK</Button14><Button15>NATION</Button15><Button16>{whitespace}FIGHTER</Button16><Button17>REC.</Button17><Button18>STRK</Button18><Button19>LAST FIGHT</Button19><Button20>NEXT FIGHT</Button20><br/>
                        <Button13a><text style={{ color: this.getShift('border', 0) }}>{this.getShift('text', 0)}</text></Button13a><Button14a>{space}<text style={{color: sessionStorage.getItem('ufcStandingsPage') === '1' ? '#ffcc99' : 'white' }}>{getHalfUFC(0)}{space}</text></Button14a><Button15a><text>{whitespace}<Flag style={{ marginTop: -11, marginLeft: -53 }}><img src={getFlagUFC(0)} width="88" height="50"></img></Flag></text></Button15a><Button16a><Link style={{ textDecoration: 'none', color: sessionStorage.getItem('ufcStandingsPage') === '1' ? '#ffcc99' : 'white' }}><text>{whitespace}{getNameUFC(0)}</text></Link></Button16a><Button17a><text>{getRecordUFC(0)}</text></Button17a><Button18a style={{ color: this.getStreakColor(getStreakUFC(0)) }}>{this.getStreak(getStreakUFC(0))}</Button18a><Button19a>{space}</Button19a><Button20a>{space}</Button20a>
                        <Button13b><text style={{ color: this.getShift('border', 1) }}>{this.getShift('text', 1)}</text></Button13b><Button14b>{space}<text>{getHalfUFC(1)}{space}</text></Button14b><Button15b><text>{whitespace}<Flag style={{ marginTop: -11, marginLeft: -53 }}><img src={getFlagUFC(1)} width="88" height="50"></img></Flag></text></Button15b><Button16b><Link style={{ textDecoration: 'none', color: 'white' }}><text>{whitespace}{getNameUFC(1)}</text></Link></Button16b><Button17b><text>{getRecordUFC(1)}</text></Button17b><Button18b style={{ color: this.getStreakColor(getStreakUFC(1)) }}>{this.getStreak(getStreakUFC(1))}</Button18b><Button19b>{space}</Button19b><Button20b>{space}</Button20b>
                        <Button13a><text style={{ color: this.getShift('border', 2) }}>{this.getShift('text', 2)}</text></Button13a><Button14a>{space}<text>{getHalfUFC(2)}{space}</text></Button14a><Button15a><text>{whitespace}<Flag style={{ marginTop: -11, marginLeft: -53 }}><img src={getFlagUFC(2)} width="88" height="50"></img></Flag></text></Button15a><Button16a><Link style={{ textDecoration: 'none', color: 'white' }}><text>{whitespace}{getNameUFC(2)}</text></Link></Button16a><Button17a><text>{getRecordUFC(2)}</text></Button17a><Button18a style={{ color: this.getStreakColor(getStreakUFC(2)) }}>{this.getStreak(getStreakUFC(2))}</Button18a><Button19a>{space}</Button19a><Button20a>{space}</Button20a>
                        <Button13b><text style={{ color: this.getShift('border', 3) }}>{this.getShift('text', 3)}</text></Button13b><Button14b>{space}<text>{getHalfUFC(3)}{space}</text></Button14b><Button15b><text>{whitespace}<Flag style={{ marginTop: -11, marginLeft: -53 }}><img src={getFlagUFC(3)} width="88" height="50"></img></Flag></text></Button15b><Button16b><Link style={{ textDecoration: 'none', color: 'white' }}><text>{whitespace}{getNameUFC(3)}</text></Link></Button16b><Button17b><text>{getRecordUFC(3)}</text></Button17b><Button18b style={{ color: this.getStreakColor(getStreakUFC(3)) }}>{this.getStreak(getStreakUFC(3))}</Button18b><Button19b>{space}</Button19b><Button20b>{space}</Button20b>
                        <Button13a><text style={{ color: this.getShift('border', 4) }}>{this.getShift('text', 4)}</text></Button13a><Button14a>{space}<text>{getHalfUFC(4)}{space}</text></Button14a><Button15a><text>{whitespace}<Flag style={{ marginTop: -11, marginLeft: -53 }}><img src={getFlagUFC(4)} width="88" height="50"></img></Flag></text></Button15a><Button16a><Link style={{ textDecoration: 'none', color: 'white' }}><text>{whitespace}{getNameUFC(4)}</text></Link></Button16a><Button17a><text>{getRecordUFC(4)}</text></Button17a><Button18a style={{ color: this.getStreakColor(getStreakUFC(4)) }}>{this.getStreak(getStreakUFC(4))}</Button18a><Button19a>{space}</Button19a><Button20a>{space}</Button20a>
                        <Button13b><text style={{ color: this.getShift('border', 5) }}>{this.getShift('text', 5)}</text></Button13b><Button14b>{space}<text>{getHalfUFC(5)}{space}</text></Button14b><Button15b><text>{whitespace}<Flag style={{ marginTop: -11, marginLeft: -53 }}><img src={getFlagUFC(5)} width="88" height="50"></img></Flag></text></Button15b><Button16b><Link style={{ textDecoration: 'none', color: 'white' }}><text>{whitespace}{getNameUFC(5)}</text></Link></Button16b><Button17b><text>{getRecordUFC(5)}</text></Button17b><Button18b style={{ color: this.getStreakColor(getStreakUFC(5)) }}>{this.getStreak(getStreakUFC(5))}</Button18b><Button19b>{space}</Button19b><Button20b>{space}</Button20b>
                        <Button13a><text style={{ color: this.getShift('border', 6) }}>{this.getShift('text', 6)}</text></Button13a><Button14a>{space}<text>{getHalfUFC(6)}{space}</text></Button14a><Button15a><text>{whitespace}<Flag style={{ marginTop: -11, marginLeft: -53 }}><img src={getFlagUFC(6)} width="88" height="50"></img></Flag></text></Button15a><Button16a><Link style={{ textDecoration: 'none', color: 'white' }}><text>{whitespace}{getNameUFC(6)}</text></Link></Button16a><Button17a><text>{getRecordUFC(6)}</text></Button17a><Button18a style={{ color: this.getStreakColor(getStreakUFC(6)) }}>{this.getStreak(getStreakUFC(6))}</Button18a><Button19a>{space}</Button19a><Button20a>{space}</Button20a>
                        <Button13b><text style={{ color: this.getShift('border', 7) }}>{this.getShift('text', 7)}</text></Button13b><Button14b>{space}<text>{getHalfUFC(7)}{space}</text></Button14b><Button15b><text>{whitespace}<Flag style={{ marginTop: -11, marginLeft: -53 }}><img src={getFlagUFC(7)} width="88" height="50"></img></Flag></text></Button15b><Button16b><Link style={{ textDecoration: 'none', color: 'white' }}><text>{whitespace}{getNameUFC(7)}</text></Link></Button16b><Button17b><text>{getRecordUFC(7)}</text></Button17b><Button18b style={{ color: this.getStreakColor(getStreakUFC(7)) }}>{this.getStreak(getStreakUFC(7))}</Button18b><Button19b>{space}</Button19b><Button20b>{space}</Button20b>
                        <Link to='./standingsufc'><ButtonWC2 style={{ color: this.getButtonColor('color', '1'), border: this.getButtonColor('border', '1') }} onClick={this.setStandingsPage1}>▲</ButtonWC2></Link>
                        <Link to='./standingsufc'><ButtonWC2 style={{ color: this.getButtonColor('color', '2'), border: this.getButtonColor('border', '2') }} onClick={this.setStandingsPage2}>▼</ButtonWC2></Link>
                        
                        <Link to='./standingsufc'><ButtonWC style={{ background: this.getDivColor('1') }} onClick={this.setPage1}>125</ButtonWC></Link>
                        <Link to='./standingsufc'><ButtonWC style={{ background: this.getDivColor('2') }} onClick={this.setPage2}>135</ButtonWC></Link>
                        <Link to='./standingsufc'><ButtonWC style={{ background: this.getDivColor('3') }} onClick={this.setPage3}>145</ButtonWC></Link>
                        <Link to='./standingsufc'><ButtonWC style={{ background: this.getDivColor('4') }} onClick={this.setPage4}>155</ButtonWC></Link>
                        <Link to='./standingsufc'><ButtonWC style={{ background: this.getDivColor('5') }} onClick={this.setPage5}>170</ButtonWC></Link>
                        <Link to='./standingsufc'><ButtonWC style={{ background: this.getDivColor('6') }} onClick={this.setPage6}>185</ButtonWC></Link>
                        <Link to='./standingsufc'><ButtonWC style={{ background: this.getDivColor('7') }} onClick={this.setPage7}>205</ButtonWC></Link>
                        <Link to='./standingsufc'><ButtonWC style={{ background: this.getDivColor('8') }} onClick={this.setPage8}>265</ButtonWC></Link>
                        <Link to='./standingsufc'><ButtonWC style={{ background: this.getDivColor('9') }} onClick={this.setPage9}>115W</ButtonWC></Link>
                        <Link to='./standingsufc'><ButtonWC style={{ background: this.getDivColor('10') }} onClick={this.setPage10}>125W</ButtonWC></Link>
                        <Link to='./standingsufc'><ButtonWC style={{ background: this.getDivColor('11') }} onClick={this.setPage11}>135W</ButtonWC></Link>
                    </div>
                    <div className="App-header-style1" style={{marginTop: -58, marginRight: 0}}>
                        <Link to={this.getFightLink}><Button>{sessionStorage.getItem('newCycle') == 1 ? 'OFFERS' : 'FIGHT'}</Button></Link>
                        <Link to='./standingsufc'><ButtonG>RANKINGS</ButtonG></Link>
                        <Link to='./standingswomen'><Button>P4P</Button></Link>
                        <Link to={parseInt(sessionStorage.getItem('month')) > 8 ? './playoffspfl' : './cardpfl'}><Button>{parseInt(sessionStorage.getItem('month')) > 8 ? 'BRACKET' : 'CARD'}</Button></Link>
                        <Link to={sessionStorage.getItem('firstResults') === 'true' ? './cardpfl' : './resultspfl'}><Button style={sessionStorage.getItem('firstResults') === 'true' ? {border: '2px solid gray', color: 'gray'} : {}}>RESULTS</Button></Link>
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

export default StandingsUFC;
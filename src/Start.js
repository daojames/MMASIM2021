import React from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';

const Button = styled.button`
  background-color: transparent;
  color: white;
  padding: 3.198294243vh;
  width: 20.83333333vw;
  height: 11.940298507vh;
  margin: 5.330490405vh;
  font-size: 4.264392324vh;
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

function Start() {
    return (
      <div className="App">
        <header className="App-start">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to='./style'><Button>START</Button></Link>
        </header>
      </div>
    );
}

export default Start;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Input from './components/UI/Input/Input';
//import InputFormat from './components/UI/InputFormat/InputFormat';

import Form from './components/UI/Form/Form';

import Inpute from './components/UI/Inpute/Inpute';

import InputFormat from './components/UI/InputFormat/InputFormat';

class App extends Component {

  render() {
    return (

      <div className="App">

        <Form/>

          <InputFormat
            format={"--**--***--***--***--"}
            pat={/^[0-9]/}
            className="Input"
            placeholder="Post code"
            />

      </div>

    );
  }
}

export default App;

/*
  <Input
    pattern={/[A-Za-z]/}
    maxLenght={5}

    />
  <InputFormat
    format={"**-***"}
    pat={/[0-9]/}
    className="Input"
    placeholder="Post code"
    />
  */

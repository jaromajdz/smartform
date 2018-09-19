import React from 'react';
import OneInput from './OneInput/OneInput';

class Form extends React.Component{



  render(){
    const input ={
          type: 'text',
          placeholder: 'Your name:'

    }

    const Input ={
      placeholder: 'Post code:',
      pattern: /[0-9]/,
      maxLenght: 5

    }


    return <div>
      <form noValidate>
        <OneInput
          elemntConfig={input}
          elemType="input"
        />
        <OneInput
          elemntConfig={Input}
          elemType="Input"
        />

      </form>
    </div>
  }


}

export default Form;

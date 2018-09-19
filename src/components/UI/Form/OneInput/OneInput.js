import React from 'react';

import './OneInput.css';
import Input from '../../Input/Input';

const oneinput = (props)=>{
    let inputElement='';

    switch(props.elemType){
      case "input":
          inputElement = <input {...props.elemntConfig}
                        value={props.value}
                        onChange={props.changed}
                        ref={props.key}
                        className="InputElement"
                        />
      break;
      case "Input":
          inputElement = <Input
                          {...props.elemntConfig}

                            className="InputElement"
                        />
    }

    return <div className="Input">
                <label className="Label">Jakis opis</label>
                  {inputElement}
             </div>
}


export default oneinput;

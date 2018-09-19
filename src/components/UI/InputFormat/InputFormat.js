import React from 'react';

import './InputFormat.css';


const KEYMOVEL =['Backspace', 'ArrowLeft']
const KEYMOVER = ['Delete', 'ArrowRight']


class Input extends React.Component{

  state = {
    value: '',
    start: 0,
    end: 0,
    update: false,
  }

onChangeHandler=(event)=>{
  //this.setState({value: event.target.value})
  }

onKeyDownHandler = (event)=>{
  event.preventDefault()
  let move = 0, skip = 0, startSelect=event.target.selectionStart, endSelect = event.target.selectionEnd
  const inputValue = this.state.value.split(''), maskLenght= this.props.format.length
  const allowedCharacter = this.props.pat.test(event.key)
  if(KEYMOVER.includes(event.key) || allowedCharacter) move =
                          startSelect< maskLenght && endSelect < maskLenght
                          ?  1
                          :  0;
  //jesli karetka ma byc przesunieta do tylu kiedy strzalka w lewo lub kasowanie
  if(KEYMOVEL.includes(event.key)) move =
                        startSelect > 0
                        ?  -1
                        : 0 ;
  if(move!==0){
      while(inputValue[startSelect+(move<0 ? move : 0)+skip*move]==="-")
        {
          skip=skip+1;
        }
        const s = skip
        skip = skip>0 ? (skip-1)*move : 0

        switch (event.key) {
          case (allowedCharacter ? event.key : null):
          if ((startSelect + s + move)<maskLenght){
              inputValue[startSelect + s ] = event.key
            startSelect = endSelect = startSelect + s + move
          }
            break;
          case (startSelect-endSelect ? 'Delete' : null):
          case (startSelect-endSelect ? 'Backspace': null):
            for(let i = startSelect  ;
                i<endSelect;
                i++)
                {
                  inputValue[i]=this.props.format[i]
              }

            startSelect = endSelect = startSelect + skip
          break;
          case 'Delete':
          case 'Backspace':
              startSelect = endSelect = startSelect + (move < 0 ? move : 0)
              inputValue[startSelect] = this.props.format[startSelect]


              startSelect = endSelect = startSelect + skip + (move > 0 ? 1 : 0)
            break;
          case (event.shiftKey ? "ArrowRight" : null):
          case (event.shiftKey ? "ArrowLeft" : null):

                  startSelect = move > 0 ? startSelect : startSelect + move + skip
                  endSelect = move >0 ? endSelect + move + skip : endSelect
            break;
          case 'ArrowRight':
          case 'ArrowLeft':


            startSelect = endSelect = startSelect + move + skip

          break;
        }
    this.setState({start: startSelect,
                  end: endSelect,
                  update: true,
                  value: inputValue.join('')})
                }

  }

onClickHandler = (event)=>{
  this.setState({start: event.target.selectionStart, end: event.target.selectionEnd, update: true})
  }

componentDidUpdate(){
    //console.log('Didupdate', this.state.start, this.state.end)
    if(this.state.update){
      if(this.state.start - this.state.end)
      {
          this.input.setSelectionRange(this.state.start, this.state.end)

          }else {
            this.input.selectionStart = this.state.start
            this.input.selectionEnd = this.state.start
    }
      this.setState({update: false})
    }
  }

  componentDidMount(){
        //set default value which is a formating string passed by thi.props.format
  this.setState({value: this.props.format})

  }

render () {
    return (<div>
        <input type="text"
          className='Input'

          ref={n=>this.input = n}
          value={this.state.value}
          onChangeHandler = {event=>this.onChangeHandler(event)}
          onKeyDown={event=>this.onKeyDownHandler(event)}
          onClick = {event=>this.onClickHandler(event)}


          />

        </div>

    )
   }
 }

export default Input;

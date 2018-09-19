import React from 'react'
//import PropTypes from 'prop-types'

class Inpute extends React.Component{
  state={
    value: '',
    start: 0,
    key: '',
    start_: 0
  }

  //format value adding "-" in proper places and trim to proper length

  onChangeHandler=(event)=>{
    //console.log(event.target.selectionStart, event.target.selectionEnd);
      const value=event.target.selectionEnd;


      this.setState({value: value})
  }

onKeyDownHandler=(event)=>{


  //this.setState({start: event.target.selectionStart})
 console.log('Key', event.key, 'keyCode', event.keyCode,'start', event.target.selectionStart)

}


  componentDidUpdate(){

      this.refs.input.selectionStart=this.state.start;
      this.refs.input.selectionEnd=this.state.start;

  }

  componentDidMount(){
    //set default value which is a formating string passed by this.props.format
    this.setState({value: this.props.format})
  }

  render () {
    return (
        <input {...this.props} type="text" ref="input" value={this.state.value} onChange={event=>this.onChangeHandler(event)} onKeyDown={event=>this.onKeyDownHandler(event)}/>
    )
  }
}

export default Inpute;

import React, { Component } from 'react';

export default class Cell extends Component {
  state = {
    color: this.props.value
  }

  changeColor = () => {
    this.setState({
      // color: '#333'
      color: this.state.color !== '#333' ? this.state.color = '#333' : this.state.color = this.props.value
    })
  }

  render() {
    // console.log(this.state.color);
    return (
      // <div onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color !== '#333' ? this.state.color = '#333' : this.state.color = this.props.value}}>
      <div onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color}}>

      </div>
    )
  }
}

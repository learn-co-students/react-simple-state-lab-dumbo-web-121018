import React from 'react'

export default class Cell extends React.Component {
  state = {
    color: this.props.value
  }

  changeColor = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
    )
  }
}

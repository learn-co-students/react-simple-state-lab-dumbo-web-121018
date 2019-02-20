import React, { Component } from 'react';
import Cell from './Cell';


export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map((val, i) => <Cell value={val} key={i}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, i) => <div className="row" key={i}>{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}

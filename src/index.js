import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));
// values has been defined for Matrix classes, so instances of Matrix
// can access it using "props"

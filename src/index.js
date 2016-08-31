import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

ReactDOM.render(
  <div style={{ width: '500px', height: '500px' }}>
    <Board knightPosition={[4, 7]} />
  </div>,
  document.getElementById('root')
);

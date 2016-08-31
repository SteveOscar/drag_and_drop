import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { observe } from './Game'

const rootEl = document.getElementById('root')

observe(knightPosition =>
  ReactDOM.render(
    <div style={{ width: '500px', height: '500px' }}>
      <Board knightPosition={knightPosition} />
    </div>,
    rootEl
  )
);

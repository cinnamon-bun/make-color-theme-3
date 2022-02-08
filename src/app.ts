import Color = require('color');

import * as React from 'react'
import './app.css'

import { Atom } from './atom';
import { State, ICoreColors } from './types';

let state: State = new Atom<ICoreColors>(initialColors);

let ColorPicker = (state: State, key: string) => {
    <div>
        <b>hello</b>
    </div>
}

export default function App() {
  return (
    <main>
        <ColorPicker state={state} key={w} />
        <ColorPicker state={state} key={r} />
        <ColorPicker state={state} key={g} />
        <ColorPicker state={state} key={b} />
        <ColorPicker state={state} key={k} />
    </main>
  )
}
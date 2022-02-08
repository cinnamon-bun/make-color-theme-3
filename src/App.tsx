import * as Color from 'color';
import * as React from 'react'
import './app.css'

import { Atom } from './atom';
import { initialColors, State, ICoreColors } from './types';

//================================================================================

let state: State = new Atom<ICoreColors>({ ...initialColors });

//================================================================================

interface ColorPickerProps {
    state: State,
    name: string,
}
let ColorPicker = (props: ColorPickerProps) => {
    let state = props.state.get();
    let name = props.name;
    let color = state[name as 'w'];
    return <div className='stack'>
        <input type="color" value={color.hex()} onChange={e => console.log(e.target.value)} />
        <b>&nbsp; {name}</b>
    </div>
}

//================================================================================

export default function App() {
    return (<main className='app'>
        <ColorPicker state={state} name={'w'} />
        <ColorPicker state={state} name={'r'} />
        <ColorPicker state={state} name={'g'} />
        <ColorPicker state={state} name={'b'} />
        <ColorPicker state={state} name={'k'} />
        <hr />
    </main>)
}
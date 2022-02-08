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
    let handleChange = (colorHex: string) => {
        console.log(colorHex);
    }
    return <div>
        <b>{name}</b>
        <input
            type="color"
            value={color.hex()}
            onChange={e => handleChange(e.target.value)}
            />
    </div>
}

//================================================================================

interface ColorSwatchProps {
    c: Color,
    text?: string,
}
let ColorSwatch = (props: ColorSwatchProps) => {
    let { c, text } = props;
    return <div>
        <b>{text || ''}</b>
        <div className='colorCircle' style={{backgroundColor: c.hex()}} />
    </div>
}

//================================================================================

export default function App() {
    let pal = state.get();
    return <main className='app'>
        <div className='stack'>
            <ColorPicker state={state} name={'w'} />
            <ColorPicker state={state} name={'r'} />
            <ColorPicker state={state} name={'g'} />
            <ColorPicker state={state} name={'b'} />
            <ColorPicker state={state} name={'k'} />
        </div>
        <hr />
        <div className='rows'>
            <ColorSwatch c={pal.w.mix(pal.r, 0.5)} text={'wr'} />
            <ColorSwatch c={pal.w.mix(pal.g, 0.5)} text={'wg'} />
            <ColorSwatch c={pal.w.mix(pal.b, 0.5)} text={'wb'} />

            <ColorSwatch c={pal.k.mix(pal.r, 0.5)} text={'kr'} />
            <ColorSwatch c={pal.k.mix(pal.g, 0.5)} text={'kg'} />
            <ColorSwatch c={pal.k.mix(pal.b, 0.5)} text={'kb'} />

            <ColorSwatch c={pal.r.mix(pal.g, 0.5)} text={'rg'} />
            <ColorSwatch c={pal.g.mix(pal.b, 0.5)} text={'gb'} />
            <ColorSwatch c={pal.b.mix(pal.r, 0.5)} text={'br'} />

        </div>
        <hr />
    </main>
}

import Color from 'color';
import React, { useState, useEffect } from 'react'
import './app.css'

import { Atom } from './atom';
import { initialColors, State, ICoreColors } from './types';

//================================================================================

let state: State = new Atom<ICoreColors>({ ...initialColors });

//================================================================================

interface ColorPickerProps {
    state: State,
    name: string,
    style?: React.CSSProperties,
}
let ColorPicker = (props: ColorPickerProps) => {
    let coreColors = props.state.get();
    let name = props.name;
    let color = coreColors[name as 'w'];
    let handleChange = (colorHex: string) => {
        console.log('[ColorPicker]', colorHex);
        let newCoreColors = {
            ...coreColors,
            [name]: Color(colorHex),
        };
        props.state.set(newCoreColors);
    }
    return <input
        style={props.style}
        type="color"
        value={color.hex()}
        onChange={e => handleChange(e.target.value)}
        />
}

//================================================================================

interface ColorSwatchProps {
    c: Color,
    text?: string,
    style?: React.CSSProperties,
}
let ColorSwatch = (props: ColorSwatchProps) => {
    let { c, text, style } = props;
    return <div
        className='colorSwatch'
        style={{...style ?? {}, backgroundColor: c.hex()}}
    />;
}

//================================================================================

state.onChange((oldVal, newVal) => {
    console.log('[state] changed:', oldVal, newVal);
});

export default function App() {

    let [numRenders, forceRerender] = useState(0);
    useEffect(() => {
        let unsub = state.onChange((oldVal, newVal) => {
            console.log('[App] forceRerender');
            forceRerender(numRenders + 1);
        });
        return unsub;
    });

    let pal = state.get();
    return <main className='app stack'>
        <div className='colorGrid'>
            <ColorPicker style={{gridColumn: '1', gridRow: '1'}} state={state} name={'w'} />

            <ColorPicker style={{gridColumn: '1', gridRow: '5'}} state={state} name={'k'} />

            <ColorSwatch style={{gridColumn: '1', gridRow: '2'}} c={pal.w.mix(pal.k, 0.25)} text={'wk-w'} />
            <ColorSwatch style={{gridColumn: '1', gridRow: '3'}} c={pal.w.mix(pal.k, 0.50)} text={'wk'} />
            <ColorSwatch style={{gridColumn: '1', gridRow: '4'}} c={pal.w.mix(pal.k, 0.75)} text={'wk-k'} />

            <ColorSwatch style={{gridColumn: '2', gridRow: '2'}} c={pal.b.mix(pal.r, 0.5).mix(pal.w, 0.5)} text={'br-w'} />
            <ColorSwatch style={{gridColumn: '2', gridRow: '3'}} c={pal.b.mix(pal.r, 0.5)} text={'br'} />
            <ColorSwatch style={{gridColumn: '2', gridRow: '4'}} c={pal.b.mix(pal.r, 0.5).mix(pal.k, 0.5)} text={'br-k'} />

            <ColorSwatch style={{gridColumn: '3', gridRow: '2'}} c={pal.r.mix(pal.w, 0.5)} text={'r-w'} />
            <ColorPicker style={{gridColumn: '3', gridRow: '3'}} state={state} name={'r'} />
            <ColorSwatch style={{gridColumn: '3', gridRow: '4'}} c={pal.r.mix(pal.k, 0.5)} text={'r-k'} />

            <ColorSwatch style={{gridColumn: '4', gridRow: '2'}} c={pal.r.mix(pal.g, 0.5).mix(pal.w, 0.5)} text={'rg-w'} />
            <ColorSwatch style={{gridColumn: '4', gridRow: '3'}} c={pal.r.mix(pal.g, 0.5)} text={'rg'} />
            <ColorSwatch style={{gridColumn: '4', gridRow: '4'}} c={pal.r.mix(pal.g, 0.5).mix(pal.k, 0.5)} text={'rg-k'} />

            <ColorSwatch style={{gridColumn: '5', gridRow: '2'}} c={pal.g.mix(pal.w, 0.5)} text={'g-w'} />
            <ColorPicker style={{gridColumn: '5', gridRow: '3'}} state={state} name={'g'} />
            <ColorSwatch style={{gridColumn: '5', gridRow: '4'}} c={pal.g.mix(pal.k, 0.5)} text={'g-k'} />

            <ColorSwatch style={{gridColumn: '6', gridRow: '2'}} c={pal.g.mix(pal.b, 0.5).mix(pal.w, 0.5)} text={'gb-w'} />
            <ColorSwatch style={{gridColumn: '6', gridRow: '3'}} c={pal.g.mix(pal.b, 0.5)} text={'gb'} />
            <ColorSwatch style={{gridColumn: '6', gridRow: '4'}} c={pal.g.mix(pal.b, 0.5).mix(pal.k, 0.5)} text={'gb-k'} />

            <ColorSwatch style={{gridColumn: '7', gridRow: '2'}} c={pal.b.mix(pal.w, 0.5)} text={'b-w'} />
            <ColorPicker style={{gridColumn: '7', gridRow: '3'}} state={state} name={'b'} />
            <ColorSwatch style={{gridColumn: '7', gridRow: '4'}} c={pal.b.mix(pal.k, 0.5)} text={'b-k'} />
        </div>
        <hr />
        <div className='colorGrid'>
            <ColorPicker style={{gridColumn: '1', gridRow: '1'}} state={state} name={'w'} />
            <ColorPicker style={{gridColumn: '2', gridRow: '1'}} state={state} name={'r'} />
            <ColorPicker style={{gridColumn: '3', gridRow: '1'}} state={state} name={'g'} />
            <ColorPicker style={{gridColumn: '4', gridRow: '1'}} state={state} name={'b'} />
            <ColorPicker style={{gridColumn: '5', gridRow: '1'}} state={state} name={'k'} />
        </div>
        <hr />
    </main>
}

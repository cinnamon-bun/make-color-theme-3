import * as Color from 'color';
import { Atom } from './atom';

export interface ICoreColors {
    w: Color,
    r: Color,
    g: Color,
    b: Color,
    k: Color,
}
export type State = Atom<ICoreColors>;

export let initialColors = {
    // default, full gamut
    // w: Color.rgb(255, 255, 255),
    // r: Color.rgb(255, 0, 0),
    // g: Color.rgb(0, 255, 0),
    // b: Color.rgb(0, 0, 255),
    // k: Color.rgb(0, 0, 0),

    // warm sun, cool shadows, gamut masking towards warm green
    w: Color.hsl( 54, 60, 88),
    r: Color.hsl( 15, 90, 48-4),
    g: Color.hsl( 84, 90, 40-4),
    b: Color.hsl(200, 90, 45-4),
    k: Color.hsl(221, 99, 12),
}

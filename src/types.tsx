
export interface ICoreColors {
    w: Color,
    r: Color,
    g: Color,
    b: Color,
    k: Color,
}
export let initialColors = {
    w: Color.rgb(255, 255, 255),
    r: Color.rgb(255, 0, 0),
    g: Color.rgb(0, 255, 0),
    b: Color.rgb(0, 0, 255),
    k: Color.rgb(0, 0, 0),
}

export type State = Atom<ICoreColors>;

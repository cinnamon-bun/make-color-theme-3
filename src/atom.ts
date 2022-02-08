export type AtomCb<T> = (oldVal: T, newVal: T) => void;

export class Atom<T> {
    val: T;
    cbs: Set<AtomCb<T>> = new Set<AtomCb<T>>();
    constructor(val: T) {
        this.val = val
    }
    set(val: T) {
        let oldVal = this.val;
        let newVal = val;
        this.val = newVal;
        for (let cb of this.cbs) { cb(oldVal, newVal); }
    }
    get(): T {
        return this.val
    }
    onChange(cb: AtomCb<T>) {
        this.cbs.add(cb);
        return () => { this.cbs.delete(cb); }
    }
}

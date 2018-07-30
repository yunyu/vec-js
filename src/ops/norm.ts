import { vec } from '../vec';

export const norm = (vec: vec): number =>
    Math.sqrt(vec.reduce((acc, val) => acc + val * val, 0));

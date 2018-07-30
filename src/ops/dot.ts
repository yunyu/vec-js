import { vec } from '../vec';
import { zip } from './zip';

export const dot = (vec1: vec, vec2: vec): number =>
    zip(vec1, vec2)
        .map(([val1, val2]) => val1 * val2)
        .reduce((acc, val) => acc + val);

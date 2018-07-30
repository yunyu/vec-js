import { vec } from '../vec';
import { zip } from './zip';

export const add = (vec1: vec, vec2: vec, ...rest: vec[]): vec =>
    zip(vec1, vec2, ...rest).map(row =>
        row.reduce((acc, currVal) => acc + currVal)
    );

import { vec } from '../vec';
import { dim } from './dim';

export const cross = (vec1: vec, vec2: vec): vec => {
    if (dim(vec1) !== 3 || dim(vec2) !== 3) {
        throw 'Both vectors must have a dimension of 3';
    }
    const [a1, a2, a3] = vec1;
    const [b1, b2, b3] = vec2;
    return [a2 * b3 - a3 * b2, a3 * b1 - a1 * b3, a1 * b2 - a2 * b1];
};

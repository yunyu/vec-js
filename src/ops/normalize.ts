import { vec } from '../vec';
import { norm } from './norm';

// scale isn't used here to minimize floating point errors
export const normalize = (vec: vec) => {
    const vecNorm = norm(vec);
    return vec.map(val => val / vecNorm);
};

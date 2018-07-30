import { vec } from '../vec';
import { dim } from './dim';

export const zip = (vec1: vec, ...rest: vec[]): vec[] => {
    const vec1Dim = dim(vec1);
    if (rest.some(other => dim(other) !== vec1Dim)) {
        throw 'All provided vectors must have the same dimension';
    }
    return vec1.map((val, ix) => [val, ...rest.map(other => other[ix])]);
};

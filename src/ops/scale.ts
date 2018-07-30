import { vec } from '../vec';

export const scale = (vec: vec, scalar: number): vec =>
    vec.map(val => val * scalar);

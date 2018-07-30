import { add, cross, dim, dot, norm, normalize, scale, zip } from '../vec';

test('adds [1, 2, 3] and [-4, -5, -6] to equal [-3, -3, -3]', () =>
    expect(add([1, 2, 3], [-4, -5, -6])).toEqual([-3, -3, -3]));

test('dots [1, 2, 3] and [-4, -5, -6] to equal -32', () =>
    expect(dot([1, 2, 3], [-4, -5, -6])).toEqual(-32));

test('crosses [1, 2, 3] and [-4, -5, -6] to equal [3, -6, 3]', () =>
    expect(cross([1, 2, 3], [-4, -5, -6])).toEqual([3, -6, 3]));

test('dims [-1, 0] to equal 2', () => expect(dim([-1, 0])).toEqual(2));

test('norms [1, 2, 3] to equal sqrt(14)', () =>
    expect(norm([1, 2, 3])).toEqual(Math.sqrt(14)));

test('normalizes [3, -4] to equal [3 / 5, -4 / 5]', () =>
    expect(normalize([3, -4])).toEqual([3 / 5, -4 / 5]));

test('scales [-1, 2, -3] by 4 to equal [-4, 8, -12]', () =>
    expect(scale([-1, 2, -3], 4)).toEqual([-4, 8, -12]));

test('zips [1, 2, 3] and [4, 5, 6] to equal [[1, 4], [2, 5], [3, 6]]', () =>
    expect(zip([1, 2, 3], [4, 5, 6])).toEqual([[1, 4], [2, 5], [3, 6]]));

test('zips [1, 2], [3, 4, 5], and [6, 7, 8] to throw exception', () =>
    expect(() => zip([1, 2], [3, 4, 5], [6, 7, 8])).toThrow());

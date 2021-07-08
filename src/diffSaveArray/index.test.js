import diffSaveArray from './';

describe('.diffSaveArray', () => {
    describe('arrays', () => {
        test('returns right hand side value when this one is an array', () => {
            expect(diffSaveArray({ a: [{ b: 1 }, { c: 2 }] }, { a: [{ b: 1 }, { d: 2 }, { c: 3 }] }))
                .toEqual({ a: [{ b: 1 }, { d: 2 }, { c: 3 }] });
        });

        test('returns the difference with a saved right hand side array', () => {
            expect(diffSaveArray({ a: [{ b: 1 }, { c: 2 }], q: 20, w: 15 }, { a: [{ b: 1 }, { d: 2 }, { c: 3 }], q: 20, w: 5 }))
                .toEqual({ a: [{ b: 1 }, { d: 2 }, { c: 3 }], w: 5 });
        });
    });
});

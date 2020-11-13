const concatSeveral = require('./concat-several')

test('Receives two or more arrays to return the concatenation of all', () => {
    let first = ['a1', 'a2', 'a3'];
    let second = ['b1', 'b2', 'b3'];
    let third = ['c1', 'c2', 'c3'];
    expect(concatSeveral(first, second, third)).toEqual(['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']);
})
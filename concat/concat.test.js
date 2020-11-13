const concat = require('./concat')

test('Receives two arrays to output their concatenation', () => {
    let first = ['a1', 'a2', 'a3', 'a4'];
    let second = ['b1', 'b2', 'b3', 'b4'];

    expect(concat(first, second)).toEqual(['a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4'])
})

test('None of the input arrays are mutated', () => {
    let first = ['a1', 'a2', 'a3', 'a4'];
    let firstCopy = ['a1', 'a2', 'a3', 'a4'];
    let second = ['b1', 'b2', 'b3', 'b4'];
    let secondCopy = ['b1', 'b2', 'b3', 'b4'];
    concat(first, second)
    expect(first).toEqual(firstCopy);
    expect(second).toEqual(secondCopy);
})
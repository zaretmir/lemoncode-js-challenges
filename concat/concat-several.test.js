const concatSeveral = require('./concat-several')

test('Receives two or more arrays to return the concatenation of all', () => {
    let first = ['a1', 'a2', 'a3'];
    let second = ['b1', 'b2', 'b3'];
    let third = ['c1', 'c2', 'c3'];
    expect(concatSeveral(first, second, third)).toEqual(['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']);
})

test('Receives two or more arrays to return the concatenation of all', () => {
    let first = ['a1', 'a2', 'a3'];
    let second = ['b1', 'b2', 'b3'];
    let third = ['c1', 'c2', 'c3'];
    let firstCopy = ['a1', 'a2', 'a3'];
    let secondCopy = ['b1', 'b2', 'b3'];
    let thirdCopy = ['c1', 'c2', 'c3'];
    concatSeveral(first, second, third);

    expect(first).toEqual(firstCopy);
    expect(second).toEqual(secondCopy);
    expect(third).toEqual(thirdCopy);
})
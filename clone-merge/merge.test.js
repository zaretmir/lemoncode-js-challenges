const merge = require('./merge')

test('Receives two objects to output an object with the properties of both', () => {
    let anObject = { a1: 'A1', a2: 'A2'};
    let anotherObject = { b1: 'B1', b2: 'B2'};
    expect(merge(anObject, anotherObject)).toEqual({ a1: 'A1', a2: 'A2',  b1: 'B1', b2: 'B2'});
})

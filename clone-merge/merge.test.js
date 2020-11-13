const merge = require('./merge')

test('Receives two objects to output an object with the properties of both', () => {
    let anObject = { a1: 'A1', a2: 'A2'};
    let anotherObject = { b1: 'B1', b2: 'B2'};
    expect(merge(anObject, anotherObject)).toEqual({ a1: 'A1', a2: 'A2',  b1: 'B1', b2: 'B2'});
})

test('If both input objects have a property with the same name, then the value of the first one prevails', () => {
    let anObject = { repeatedKey: 'prevailed', a: 'A'};
    let anotherObject = { repeatedKey: 'discarded', b: 'B'};
    expect(merge(anObject, anotherObject)).toEqual({ repeatedKey: 'prevailed', a: 'A',  b: 'B'});
})

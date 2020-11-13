const clone = require('./clone')

test('Receives an object to output a new object with the same properties', () => {
    let anObject = { 'key1': 1, 'key2': 'two'};
    expect(clone(anObject)).toEqual(anObject);
    expect(clone(anObject)).not.toBe(anObject);
});
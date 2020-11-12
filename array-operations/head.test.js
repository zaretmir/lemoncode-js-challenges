const head = require('./head')

test('Extracts the first element of a given array', () => {
    let anArray = ['head', 0, { anyProp: 'anyValue'}];
    expect(head(anArray)).toEqual('head');
})

test('The input array is not mutated', () => {
    let anArray = ['head', 0, '1'];
    let anArrayCopy = [...anArray];
    head(anArray);
    expect(anArray).toEqual(anArrayCopy)
})
const last = require('./last')

test('Outputs the last element of a given array', () => {
    let anArray = ['element1', 'element2', 'element3', 'element4'];
    expect(last(anArray)).toEqual('element4');
})

test('last does not mutate the array passed as argument', () => {
    let anArray = ['element1', 'element2', 'element3', 'element4'];
    let anArrayCopy = [...anArray];
    last(anArray);
    expect(anArray).toEqual(anArrayCopy);
})
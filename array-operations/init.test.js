const init = require('./init')

test('Outputs all elements of an array except the last one', () => {
    let anArray = ['element1', 'element2', 'element3', 'element4'];
    expect(init(anArray)).toEqual(['element1', 'element2', 'element3']);
})

test('Init does not mutate the array passed as argument', () => {
    let anArray = ['element1', 'element2', 'element3', 'element4'];
    let anArrayCopy = [...anArray];
    init(anArray);
    expect(anArray).toEqual(anArrayCopy);
})
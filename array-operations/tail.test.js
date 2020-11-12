const tail = require('./tail')

test('Outputs all elements except the first one of an array passed as argument', () => {
    let anArray = [{ anyProp: 'anyValue'}, 'tail1', 'tail2'];
    expect(tail(anArray)).toEqual(['tail1', 'tail2']);
})
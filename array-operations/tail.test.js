const tail = require('./tail')

test('Outputs the last element of an array passed as argument', () => {
    let anArray = [{ anyProp: 'anyValue'}, 0, 'tail'];
    expect(tail(anArray)).toEqual('tail')
})
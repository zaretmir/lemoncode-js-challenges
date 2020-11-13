const last = require('./last')

test('Outputs the last element of a given array', () => {
    let anArray = ['element1', 'element2', 'element3', 'element4'];
    expect(last(anArray)).toEqual('element4');
})
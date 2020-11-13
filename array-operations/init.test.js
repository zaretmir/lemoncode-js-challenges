const init = require('./init')

test('Outputs all elements of an array except the last one', () => {
    let anArray = ['element1', 'element2', 'element3', 'element4'];
    expect(init(anArray)).toEqual(['element1', 'element2', 'element3']);
})
const head = require('./head')

test('Extracts the first element of a given array', () => {
    let anArray = ['head', 0, { anyProp: 'anyValue'}]
    expect(head(anArray)).toEqual('head')
})
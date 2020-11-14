const SlotMachine = require('./slot-machine')

it('Increments by one the number of coins, each time we play', () => {
    const machine = new SlotMachine();
    let initialCoins = machine.coins;
    machine.play()
    let coinsAfterOnePlay = machine.coins;
    expect(coinsAfterOnePlay).toEqual(++initialCoins);
})
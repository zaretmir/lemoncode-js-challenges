const SlotMachine = require('./slot-machine')

describe('play', () => {
    it('Increments by one the number of coins, each time we play', () => {
        const machine = new SlotMachine();
        let initialCoins = machine.coins;
        machine.play()
        let coinsAfterOnePlay = machine.coins;
        expect(coinsAfterOnePlay).toEqual(++initialCoins);
    });

    it('Calculates a combination to determine if player won', () => {
        let mockIsWinningCombination = jest.fn();
        SlotMachine.prototype._isWinningCombination = mockIsWinningCombination
        const machine = new SlotMachine();
        machine.play()
        expect(mockIsWinningCombination).toHaveBeenCalledTimes(1);
    })
})
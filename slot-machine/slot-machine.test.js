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
    });

    it('Logs a winning message and resets coins when we get a winning combination', () => {
        console.log = jest.fn();

        let mockIsWinningCombination = jest.fn(() => true);
        SlotMachine.prototype._isWinningCombination = mockIsWinningCombination;
        const machine = new SlotMachine();
        machine.play();

        expect(console.log).toHaveBeenCalledWith('Congratulations! You won 1 coins!');
        expect(machine.coins).toBe(0);
    });

    it('Logs a loser message when we get a losing combination', () => {
        console.log = jest.fn();

        let mockIsWinningCombination = jest.fn(() => false);
        SlotMachine.prototype._isWinningCombination = mockIsWinningCombination;
        const machine = new SlotMachine();
        machine.play();

        expect(console.log).toHaveBeenCalledWith('Good luck next time!');
    });
})
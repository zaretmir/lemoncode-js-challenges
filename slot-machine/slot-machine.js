class SlotMachine {
    constructor() {
        this.coins = 0;
    }

    play() {
        this.coins++;
        if (this._isWinningCombination()) {
            // tbi
        } else {
            // tbi
        }
    }

    _isWinningCombination() {
        return this._getRandomBoolean() && this._getRandomBoolean() && this._getRandomBoolean();
    }

    _getRandomBoolean() {
        const probabilityOfTrue = 0.5;
        return Math.random() < probabilityOfTrue;
    }
}

module.exports = SlotMachine;
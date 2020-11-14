class SlotMachine {
    constructor() {
        this.coins = 0;
    }

    play() {
        this.coins++;
        if (this._isWinningCombination()) {
            this._displayWinMessage();
            this._resetCoins();
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

    _displayWinMessage() {
        console.log(`Congratulations! You won ${this.coins} coins!`);
    }

    _resetCoins() {
        this.coins = 0;
    }
}

module.exports = SlotMachine;
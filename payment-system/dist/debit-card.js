"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebitCard = void 0;
class DebitCard {
    cardNumber;
    balance;
    constructor(cardNumber, balance) {
        this.cardNumber = cardNumber;
        this.balance = balance;
    }
    debit(amount) {
        this.balance -= amount;
    }
}
exports.DebitCard = DebitCard;

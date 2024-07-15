"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    credit(amount) {
        this.balance += amount;
    }
    debit(amount) {
        this.balance -= amount;
    }
}
exports.Account = Account;

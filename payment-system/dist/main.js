"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
const debit_card_1 = require("./debit-card");
const payBill = (debitable, amount) => debitable.debit(amount);
const debitCard = new debit_card_1.DebitCard("1234", 1000);
const account = new account_1.Account("12345", 1000);
payBill(debitCard, 20);
payBill(account, 30);

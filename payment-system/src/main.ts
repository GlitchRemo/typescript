import { Account } from "./account";
import { DebitCard } from "./debit-card";
import { Debitable } from "./debitable";

const payBill = (debitable: Debitable, amount: number) =>
	debitable.debit(amount);

const debitCard = new DebitCard("1234", 1000);
const account = new Account("12345", 1000);
payBill(debitCard, 20);
payBill(account, 30);

import { Debitable } from "./debitable";

export class DebitCard implements Debitable {
	readonly cardNumber: string;
	private balance: number;

	constructor(cardNumber: string, balance: number) {
		this.cardNumber = cardNumber;
		this.balance = balance;
	}

	debit(amount: number) {
		this.balance -= amount;
	}
}

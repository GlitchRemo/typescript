import { Creditable } from "./creditable";
import { Debitable } from "./debitable";

export class Account implements Debitable, Creditable {
	readonly accountNumber: string;
	private balance: number;

	constructor(accountNumber: string, balance: number) {
		this.accountNumber = accountNumber;
		this.balance = balance;
	}

	credit(amount: number): void {
		this.balance += amount;
	}

	debit(amount: number): void {
		this.balance -= amount;
	}
}

'use strict';


module.exports = class BankAccount {
	constructor(maximalWithdrawFactor) {
		console.log("create account");
		this.maximalWithdrawFactor = maximalWithdrawFactor || 0.5;
		this.balance = 0;
	}

	deposit(amount) {
		this.balance += amount;
		console.log(`Deposit ${amount}. Balance ${this.balance}.`);
		return true;
	}

	withdraw(amount) {
		if(!this.hasTooLessCredit(amount)) {
			this.balance -= amount;
			console.log(`Withdraw ${amount}. Balance ${this.balance}.`);
			return true;
		} else {
			console.log(`Withdraw of ${amount} failed.`);
			return false;
		}
	}

	hasTooLessCredit(amount) {
		return this.balance < Math.abs(amount) || amount > this.balance * this.maximalWithdrawFactor;
	}
};
process.env.bankaccount = "../4-solution/bank-account";

const Spec = require("../3-spec/bank-account.spec");


const BankAccount = require("./bank-account");

/**
 * TDD - Test driven development
 * 1. Write spec
 * 2. Run tests -> tests fail
 * 3. Implement feature & run tests again until they pass
 */
 
 // 100$ bank account test suite
describe("A bank account of with balance of 100", function() {
	beforeEach(function() {
		this.account = new BankAccount();
		this.account.balance = 100;
	});

	it("should return true when withdraw succeeded", function() {
		expect(this.account.withdraw(10)).toBeTruthy();
	});
});
//-start---------------- CAS FEE Test Infrastructure ------------------------\\
/**
 * Load configured / local SUT.
 */
const Transaction = require(process.env.transaction || "./transaction");
//-end------------------ CAS FEE Test Infrastructure ------------------------\\


describe("A new transaction of 25$", function() {
	beforeEach(function() {
		// Methodstub for Date.now()
		spyOn(Date, 'now').and.returnValue(new Date("2016-11-22T09:49:51.010Z"));

		// Banc account fake
		const BankAccountFake = class {
			withdraw() {}
			deposit() {}
		};

		this.accountA = new BankAccountFake();
		this.accountB = new BankAccountFake();
		this.transaction = new Transaction(this.accountA, this.accountB, 25);
	});

	it("has transaction date 2016-11-22T09:49:51.010Z", function() {
		expect(this.transaction.date).toEqual(new Date("2016-11-22T09:49:51.010Z"));
	});

	it("has an amount of 25$", function() {
		expect(this.transaction.amount).toBe(25);
	});

	it("is not yet completed", function() {
		expect(this.transaction.completed).toBe(false);
	});
});

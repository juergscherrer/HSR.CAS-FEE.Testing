# What happens without testing?


## A short Story first

1. BankAccount implementation -> [bank-account.js](./1-initial/bank-account.js)
2. BankAccount usage -> [main.js](./1-initial/main.js) or:
	```javascript
	// .../CAS-FEE/HSR.CAS-FEE.Testing/basics $
	var BankAccount = require("./1-initial/bank-account");
	// undefined

	var account = new BankAccount();
	// create account
	// undefined

	account.balance
	// 0

	account.deposit(50);
	// Deposit 50. Balance 50.
	// true

	account.withdraw(50);
	// Withdraw of 50 failed.
	// false

	account.withdraw(20);
	// Withdraw 30. Balance 30.
	// true
	```

3. Refactoring of the  return statement (make it more readable) -> [bank-account.js](./2-refactoring/bank-account.js):
	```javascript
	hasTooLessCredit(amount) {
		return
			this.balance < Math.abs(amount) ||
			amount > this.balance * this.maximalWithdrawFactor;
	}
	```

4. Reactoring broke the functionality -> [main.js](./2-refactoring/main.js) or:
	```javascript
	// .../CAS-FEE/HSR.CAS-FEE.Testing/basics $
	var BankAccount = require("./2-refactoring/bank-account");
	// undefined

	var account = new BankAccount();
	// create account
	// undefined

	account.balance
	// 0

	account.deposit(50);
	// Deposit 50. Balance 50.
	// true

	account.withdraw(20);
	// Withdraw 50. Balance -20.
	// true
	```

	The compiler will insert a semicolon after `return <-'` (See `empty statement` and `semicolon insertion` in JavaScript).


## How to do it better?

Test Driven Design: Write **tests/specs** first, then implement the functionality.

-> [TDD exercise](./Exercise-Jasmine.md)

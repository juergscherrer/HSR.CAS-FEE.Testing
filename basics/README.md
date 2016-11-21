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

Write **tests/specs** first, then implement the functionality.


### User stories of bank account

* As `bank agent` I want to `create accounts` so that I `customers can deposit and withdraw amounts`.
* As `bank customer` I want to `deposit amounts` so that I can `store my money`.
* As `bank customer` I want to `withdraw amounts` so that I `get back my stored money`.
* As `bank` I want to `prevent customers from overdrawing` their account so that I can `lower my risk`.


### Specification

* New account -> balance 0
* Account balance is 0
	* -> withdraw impossible
	* -> deposit 50
	 	* -> balance 50
* Account balance is 50
	* -> maximal withdraw 50 * 25%
	 	* -> balance 37.5


### Exercise

1. Start beginning on this project `npm install` or create a new project and install Jasmine `npm install --save-dev jasmine-node`.
2. Take a look at http://evanhahn.com/how-do-i-jasmine/ to get familiar with Jasmine.
3. Create `bank-account.spec.js` and implement the specification.
4. Run Jasmine:
	```shell
	// .../CAS-FEE/HSR.CAS-FEE.Testing/basics $
	$(npm bin)/jasmine-node --verbose 3-spec/*.spec.js
	```

	`$(npm bin)/` allows you to install & use jasmine locally.
	The usage of global modules (`npm install -g xyz`) is not recommended.
	Different projects may need different versions of a library/tool.
5. The tests should not pass (because we didn't fix the broken return yet)!
6. Fix the broken return statement
7. Tests should pass!
8. How is this development cycle called? -> [solution](./4-solution/bank-account.spec.js)

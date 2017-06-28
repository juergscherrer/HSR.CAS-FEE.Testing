# Test doubles exercise - How to decouple SUT-components?

[github.com/IFS-Web/HSR.CAS-FEE.Testing/tree/master/dependencies](https://github.com/IFS-Web/HSR.CAS-FEE.Testing/tree/master/dependencies)


## Transaction user stories

* **As a** `bank customer` **I want to** `send amounts` to other accounts **so that** I can `pay someone`.
* **As a** `bank customer` **I want to** `receive amounts` from other accounts **so that** someone can `pay me`.
* **As a** `bank` **I want to** `see time and date of every transaction` **so that** I have an `overview about the transaction history`.


## Transaction test scenarios (BDD)

### Scenario *new transaction*
**Given** a `new transaction` about 25 of Account A (balance 100) to Account B (balance 25) …
* … **then** the transaction date should be *now*
* … **then** the transaction amount should be 25
* … **then** the transaction should not be completed yet

### Scenario *transaction execution*
**Given** a `new transaction` about 25 of Account A (balance 100) to Account B (balance 25) …
* … **and** the transaction is executed …
	* … **then** Account A should be withdrawed 25.
	* … **then** Account B should be deposited 25.
	* … **then** the transaction should be completed.


## Exercise

Unit tests should never test multiple/external (depended-on) components. So we have to introduce Test Doubles to decouple such kind of dependencies.

1. Write the spec of the first scenario.
	* To compare objects use toEqual() -> toBe() compares the reference
	* To test the transaction date see the combination of spyOn(Date, 'now') and andReturn() or andCallFake() -> http://evanhahn.com/how-do-i-jasmine/
2. Tests must fail first on execution
	```shell
	# bash
	$(npm bin)/jasmine-node --verbose 2-spec/*.spec.js
	# or (windows standard shell)
	../node_modules/.bin/jasmine-node --verbose 2-spec/transaction.spec.js
	# or using npm script (bash)
	npm run jasmine-node --verbose 2-spec/*.spec.js
	# or using npm script (windows standard shell)
	npm run jasmine-node --verbose 2-spec/transaction.spec.js
	```
	If your shell does not support whildcard expansion like `2-spec/*.spec.js` use the full path `2-spec/transaction.spec.js`.
3. Implement the initialization of the Transaction
4. Tests should pass
5. Write spec of the second scenario
	* To test if withdraw() and deposit() have been called checkout spyOn() -> http://evanhahn.com/how-do-i-jasmine/.
6. Tests must fail first
7. Complete transaction implementation
8. Tests should pass now
9. Why did we not implement all spec and features in one operation?


## solution

* Spec: [4-spec-completion/transaction.spec.js](./4-spec-completion/transaction.spec.js)
* Transaction: [5-solution/transaction.js](./5-solution/transaction.js)
* Question 9: [5-solution/transaction.spec.js](./5-solution/transaction.spec.js)

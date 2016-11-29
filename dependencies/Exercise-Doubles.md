# What happens if our component depends on other? - Test Doubles

[github.com/wasabideveloper/HSR.CAS-FEE.Testing/tree/master/dependencies](https://github.com/wasabideveloper/HSR.CAS-FEE.Testing/tree/master/dependencies)


## User stories of a transaction

* **As a** `bank customer` **I want to** `send amounts` to other accounts **so that** I can `pay someone`.
* **As a** `bank customer` **I want to** `receive amounts` from other accounts **so that** someone can `pay me`.
* **As a** `bank` **I want to** `see time and date of every transaction` **so that** I have an `overview about the transaction history`.


## Specification

### Szenario `new transaction`
**Given** a new transaction about 25 of Account A (balance 100) to Account B (balance 25)
* **Then** the transaction date should be *now*
* **Then** the transaction amount should be 25
* **Then** the transaction should not be completed yet

### Szenario `transaction execution`
**Given** a new transaction about 25 of Account A (balance 100) to Account B (balance 25)
* **And** the transaction is executed
	* **Then** Account A should be withdrawed 25
	* **Then** Account B should be deposited 25
	* **Then** the transaction should be completed


## Exercise

Unit tests should never test multiple components. So we have to use a fake/mock/spy.

1. Write the spec of the first two szenario.
	* To compare objects use toEqual() -> toBe() compares the reference
	* To test the transaction date see the combination of spyOn(Date, 'now') and andReturn() or andCallFake() -> http://evanhahn.com/how-do-i-jasmine/
2. Tests must fail `$(npm bin)/jasmine-node --verbose 2-spec/*.spec.js`
3. Implement the initialization of the Transaction
4. Tests should pass
5. Write spec of the transaction execution
	* To test if withdraw() and deposit() have been called checkout spyOn() -> http://evanhahn.com/how-do-i-jasmine/.
6. Tests must fail
7. Complete transaction implementation
8. Tests should pass
9. Why did we not implement all spec and features in one operation? -> [solution](./5-solution/transaction.spec.js).

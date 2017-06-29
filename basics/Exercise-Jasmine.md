# TDD exercise - How to enhance software quality by process?

[github.com/IFS-Web/HSR.CAS-FEE.Testing/tree/master/basics](https://github.com/IFS-Web/HSR.CAS-FEE.Testing/tree/master/basics)


## Banc account user stories

* **As a** `bank agent` **I want to** `create accounts` **so that** customers `can deposit and withdraw amounts`.
* **As a** `bank customer` **I want to** `deposit amounts` **so that** I can `store my money`.
* **As a** `bank customer` **I want to** `withdraw amounts` **so that** I `get back my stored money`.
* **As a** `bank` **I want to** `prevent customers from overdrawing` their account **so that** I can `lower my risk`.


## Banc account test scenarios (BDD)

### Scenario *New account*
**Given** a `new account` …
* … **then** the balance should be 0.
* … **when** the Account balance is 0 …
	* … **then** withdraw should be impossible.
	* … **and** deposit of 50 is made …
		* … **then** the balance should be 50.

### Scenario *Account balance 50*
**Given** an `account with balance 50` …
* … **when** withdrawed …
	* … **then** the maximal possible withdraw should be 50 * 25%.
* … **when** withdrawed 50 * 25% …
	* … **then** the balance should be 37.5.


## Exercise

1. Download or fork the whole code repository from [github.com/IFS-Web/HSR.CAS-FEE.Testing](https://github.com/IFS-Web/HSR.CAS-FEE.Testing) to your local hard drive.
2. Start using the downloaded project by installing the dependencies `npm install` (in the projects root directory) or create a new project and install Jasmine `npm install --save-dev jasmine-node`.
3. Take a look at the following links to get familiar with Jasmine:
	* http://evanhahn.com/how-do-i-jasmine/
	* https://jasmine.github.io/edge/introduction.html
4. Open `basics/3-spec/bank-account.spec.js` and revise the specification against the implemented code.
5. Run Jasmine (ignore the section about the `SpecRunner` in the tutorial. The SpecRunner is used to run Jasmine on the client but we run it on nodejs):
	```shell
	# .../CAS-FEE/HSR.CAS-FEE.Testing/basics $

	# (unix/macos bash alike shell)
	$(npm bin)/jasmine-node --verbose 3-spec/*.spec.js
	# or (windows standard shell)
	..\node_modules\.bin\jasmine-node --verbose 3-spec/bank-account.spec.js
	# or (npm script & bash)
	npm run jasmine --verbose 3-spec/*.spec.js
	# or (npm script & windows standard shell)
	npm run jasmine --verbose 3-spec/bank-account.spec.js

	```
	`$(npm bin)/` allows you to install & use jasmine locally.
	The usage of global modules (`npm install -g xyz`) is not recommended.
	Different projects may use different versions of a library/tool.

6. The tests should not all pass (because we didn't fix the broken return yet)!
7. Fix the broken return statement.
8. Tests should pass!
9. How is this development cycle called?


## Solution

* Spec: [3-spec/bank-account.spec.js](./3-spec/bank-account.spec.js)
* Banc account fix: [4-solution/bank-account.js](./4-solution/bank-account.js)
* Question 8: [4-solution/bank-account.spec.js](./4-solution/bank-account.spec.js)

### process.env.bankaccount

In the solution you will find the following import construct. You can ignore it. It's only used for the exercise.

```javascript
var BankAccount = require(process.env.bankaccount || "./bank-account");
```
```javascript
process.env.bankaccount = "../4-solution/bank-account";
var Spec = require("../3-spec/bank-account.spec");
```
It's used to keep the solution clean of duplicated code by importing the file declared in the process environment variable `process.env.bankaccount`.

In wild life you will work with normal imports like:

```javascript
var BankAccount = require("./bank-account");
```
```javascript
var Spec = require("../3-spec/bank-account.spec");
```

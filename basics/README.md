# TDD exercise - How to enhance software quality by process?

[github.com/IFS-Web/HSR.CAS-FEE.Testing/tree/master/basics](https://github.com/IFS-Web/HSR.CAS-FEE.Testing/tree/master/basics)


## Banc account user stories

* **As a** `bank agent` **I want to** `create accounts` **so that** customers `can deposit and withdraw amounts`.
* **As a** `bank customer` **I want to** `deposit amounts` **so that** I can `store my money`.
* **As a** `bank customer` **I want to** `withdraw amounts` **so that** I `get back my stored money`.
* **As a** `bank` **I want to** `prevent customers from overdrawing` their account **so that** I can `lower my risk`.


## Banc account test scenarios (Jasmine)

### Scenario *New account*
**describe**… "A new bank account"
* it … "is initialized by a balance of 0$"
* it … "should not allow a withdraw without balance"
* it … "should have a balance of 50$ after a deposit of 50$"
 
**describe**… "A bank account of balance larger than 0$ (50$)"
* it … "should not allow to withdraw amounts larger than 25% [50$ => 13$ (26%)]"
* it … "should allow to withdraw amounts lower than 25% [50$ => 12.5$ (25%)]"


## Exercise / Jasmine installieren und ausführen

1. Laden/Clonen Sie die den Code von [github.com/IFS-Web/HSR.CAS-FEE.Testing](https://github.com/IFS-Web/HSR.CAS-FEE.Testing) auf Ihre lokale Harddisk.
2. Wechseln Sie ins HSR.CAS-FEE.Testing Directory und installieren Sie das npm-Paket mittels `npm install`.
3. Sie finden zusätzliche Informationen über Jasmine unter:
	* http://evanhahn.com/how-do-i-jasmine/ (`SpecRunner` Abschnitt ignorieren)
	* https://jasmine.github.io/edge/introduction.html
4. Öffnen Sie das `basics/3-spec/bank-account.spec.js` File und vergleichen Sie die Test-Spezifikation mit der Implementation im bank-account.js File.
5. Führen Sie Jasmine aus:
	```shell
	npm run jasmine --verbose basics/3-spec/bank-account.spec.js
	```

6. Die Tests sollten nun fehlschlagen (das Return-Statement ist noch fehlerhaft)!
7. Beheben Sie das Problem mit dem fehlerhaften Return-Statement.
8. Die Tests sollten nun grün durchlaufen!
9. Wie wird dieser "development cycle" genannt?

	**Falls noch Zeit übrig bleibt:**
10. Erweitern Sie die Tests um den folgenden Testfall:
	**describe**… "A bank account of balance larger than 0"
	* it … "should return true when withdraw succeeded"
11. Fügen Sie im ```bank-account.spec.js``` den entsprechenden Code dazu.


## Solution

* Test-Spezifikationen: [3-spec/bank-account.spec.js](./3-spec/bank-account.spec.js)
* Banc account Logik: [4-solution/bank-account.js](./4-solution/bank-account.js)

### process.env.bankaccount

Die Lösungen enthalten in den Import-Anweisungen ```process.env.bankaccount``` Statements. Diese sind für die Lösungen gedacht, damit die Sourcen nicht in sämtliche Folders kopiert werden müssen.

```javascript
const BankAccount = require(process.env.bankaccount || "./bank-account");
```
```javascript
process.env.bankaccount = "../4-solution/bank-account";
const Spec = require("../3-spec/bank-account.spec");
```

Bitte verwenden Sie in Ihren Real Live-Projekten die gewohnten Import-Statements.

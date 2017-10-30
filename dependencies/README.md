# Test doubles exercise - How to decouple SUT-components?

[github.com/IFS-Web/HSR.CAS-FEE.Testing/tree/master/dependencies](https://github.com/IFS-Web/HSR.CAS-FEE.Testing/tree/master/dependencies)


## Transaction user stories

* **As a** `bank customer` **I want to** `send amounts` to other accounts **so that** I can `pay someone`.
* **As a** `bank customer` **I want to** `receive amounts` from other accounts **so that** someone can `pay me`.
* **As a** `bank` **I want to** `see time and date of every transaction` **so that** I have an `overview about the transaction history`.


## Transaction test scenarios (Jasmine)

### Scenario *New transaction*
**describe**… "A new transaction of 25$ (account A 100$ / account B 25$)"
* it … "has transaction date 2016-11-22T09:49:51.010Z"
* it … "has an amount of 25$"
* it … "is not yet completed"
 
* **describe**… "when executed"
	* it … "withdraws 25$ from account A"
	* it … "deposits 25$ to account B"
	* it … "is completed"


## Exercise

Komponenten, welche von externenen, langsamen oder nicht immer verfügbare Ressourcen (Netzwerk, Datenbanken, usw.) abhängen (so genannte depended-on component [DoC]), sollten in Unit Tests vermieden werden. Somit bleiben die Unit Tests schnell und testen die effektive Logik des Programms. Test Doubles (fakes/spies/mocks/...) werden anstatt der DoCs eingeführt, um Abhängigkeiten zu externen Komponenten zu vermeiden. Im Szenario oben entspricht der BankAccount A und B solch einem externen DoC-System.

1. Schreiben Sie die Test-Spezifikationen (Jasmine Tests) fürs Szenario ```A new transaction of 25$ (account A 100$ / account B 25$)```. Sie finden die Vorlagen im Ordner `dependencies\1-initial`.
	* Um Werte/Referenzen zu überprüfen, verwenden Sie ```toBe()```; ```toEqual()``` vergleicht ebenfalls die Inhalte von Objekt-Referenzen (Properties/Indexes).
	* Um native APIs, welche immer andere Resultate liefern, testbar zu machen, kann die Jasmine-Funktion ```spyOn(Date, 'now')``` und ```andReturn()``` / ```andCallFake()``` verwendet werden. Mehr Informationen zu diesen Funktionen finden Sie unter http://evanhahn.com/how-do-i-jasmine/.
	* Legen Sie eine Fake-Klasse für das DoC ```BankAccount``` an. Verwengeben Sie dieselbe API (withdraw/deposit) wie in den Basics-Aufgaben.
	* Die Lösungen zur Aufgabe 1 finden Sie unter ```2-spec/transaction.spec.js```.
2. Führen Sie die Tests mittels Jasmine aus (analog Bascis-Aufgabe), zum Beispiel:
	```shell
	npm run jasmine --verbose 2-spec/transaction.spec.js
	```
3. Implementieren Sie nun die Initilisierung/Konstruktorlogik der Transaction-Klasse gemäss der Scenario-Vorgaben oben.
4. Nun sollten die Tests aus der Aufgabe 1 ohne Fehler durchlaufen.
5. Schreiben Sie nun den ersten Test für das zeite (verschachtelte) Szenario ```when executed```.
	* Der Test muss nun fehlschlagen.
	* Implementieren Sie nun die ```withdraw()```-Funktion der Transaction-Klasse:
		* Im die ```withdraw()``` der Funktion der ```BankAccountFake```-Klasse zu überschreiben, können Sie ebenfalls die Jasmine-Funktion ```spyOn()``` verwenden.
	* Nun sollte der Test ohne Fehler durchlaufen.
6. Implementieren Sie nun die weiteren Anforderungen des Szenarios ```when executed``` analog der Vorgehensweise unter Punkt 5. 
7. Warum implementieren wir nicht alle Test-Spezifikationen und anschliessend sämtliche Transaction-Logik unter einem Aufwisch (vgl. Vorgehen Punkt 1 mit Punkt 5)?


## Solution

* Test-Spezifikationen: [4-spec-completion/transaction.spec.js](./4-spec-completion/transaction.spec.js)
* Transaction-Klasse: [5-solution/transaction.js](./5-solution/transaction.js)
* Frage 7: [5-solution/transaction.spec.js](./5-solution/transaction.spec.js)

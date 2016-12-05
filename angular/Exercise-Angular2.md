# Angular2 Testing Exercise

[github.com/wasabideveloper/HSR.CAS-FEE.Testing/tree/master/angular](https://github.com/wasabideveloper/HSR.CAS-FEE.Testing/tree/master/angular)


1. Check out the [zoo](./src/app/zoo). Install dependencies `npm install`. This will install the Angular-CLI locally (Installation details see [README](./README.md)).
2. Take a look at [angular.io/docs/ts/latest/testing#!#introduction-to-the-angular-testing-utilities](https://angular.io/docs/ts/latest/testing#!#introduction-to-the-angular-testing-utilities)
3. To test the zoo you must decouple/refactor the architecture first.
4. Create a test for the zoo (see the following spec).

To run the tests use the commands `ng buld` and then `ng test` or directly `ng test`:
```shell
# (bash, local installation)
$(npm bin)/ng build
# or (windows standard shell, local installation)
./node_modules/.bin/ng test
# or (npm script, local installation)
npm run ng test
# or (global installation)
ng test
```

Details see the [Angular2 testing documentation](https://angular.io/docs/ts/latest/testing/).


## Zoo test scenarios (BDD)

**Given** a new zoo …
* … **then** it should contain two animals.
* … **then** it should contain a Lion and a Panda.


## Solution

* Implementation: [src/app/solution](./src/app/solution/)
* Explication: [src/app/solution/README.md](./src/app/solution/README.md)


## E2E Exercise (optional)

How to check if the main case of the application is running and didn't break?
End to end tests (E2E tests) in Angular2 trigger actions and check output directly in the user interface.

Our zoo application renders a simple list of the containing animals:
<hr>
<h1>Wild Zoo</h1>
<ul>
    <li>Leon</li>
    <li>Kung Fu Panda</li>
</ul>
<hr>

1. Take a look at the existing E2E test in `e2e/app.e2e-spec.ts`.
2. Extend the test to check if there are a lion and a panda named "lion" and "Kung Fu Panda" displayed in the UI.
	* [Protractor Documentation](http://www.protractortest.org/#/api).  
3. To run the E2E tests first run the application `$(npm bin)ng serve` or `./node_modules/.bin/ng serve` or `ng serve` then run the E2E tests `$(npm bin)/ng e2e` or `./node_modules/.bin/ng e2e` or `ng e2e`.
4. What is the main case for E2E tests? Should you test everything with E2E tests?

### Solution

* Spec & question 4: [e2e/app.e2e-spec.solution.ts](./e2e/app.e2e-spec.solution.ts)
* Protractor helpers: [e2e/app.po.solution.ts](./e2e/app.po.solution.ts)

# Angular2 Testing Exercise

[github.com/wasabideveloper/HSR.CAS-FEE.Testing/tree/master/angular](https://github.com/wasabideveloper/HSR.CAS-FEE.Testing/tree/master/angular)


1. Check out the [zoo](./src/app/zoo). [Install see README](./README.md).
2. Take a look at [angular.io/docs/ts/latest/testing#!#introduction-to-the-angular-testing-utilities](https://angular.io/docs/ts/latest/testing#!#introduction-to-the-angular-testing-utilities)
3. To test the zoo you must decouple/refactor the architecture first.
4. Create a test for the zoo (see the following spec).

To run the tests call `ng build` and then `ng test` or directly `ng test`.

Details see the [Angular2 testing documentation](https://angular.io/docs/ts/latest/testing/).


## Zoo specification

**Given** a new zoo
* **Then** it should contain two animals
* **Then** it should contain a Lion and a Panda


## Solution

* [code solution](./src/app/solution/)
* [solution explication](./src/app/solution/README.md)


## Optional E2E Exercise

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

1. Take a look at the E2E test in `e2e/app.e2e-spec.ts`.
2. Extend the test to check if there are a lion and a panda named "lion" and "Kung Fu Panda" displayed in the UI. -> [Protractor Documentation](http://www.protractortest.org/#/api).  
   -> To run the E2E test run the application `ng serve` and run the E2E tests `ng e2e`.
3. What is the main case for E2E tests? Should you test everything with E2E tests?

### Solution

* [e2e/app.e2e-spec.solution.ts](./e2e/app.e2e-spec.solution.ts)
* [e2e/app.po.solution.ts](./e2e/app.po.solution.ts)

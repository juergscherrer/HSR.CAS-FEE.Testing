# Zoo - How to deail with service dependencies?

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.20-4.


## Installation

CLI:
```shell
(sudo) npm uninstall -g angular-cli@1.0.0-beta.20-4
```
The Angular-CLI must be installed globally. It's not possible to install it locally. If you get in troubles, uninstall the CLI, run `npm cache clean`, remove the global `node_modules` directory and try again.

ZOO:
```shell
cd "angular"
npm install
```

## Enhance console output of the test environment
```shell
npm install --save-dev karma-verbose-reporter
```
Edit karma.conf.js and add `require('karma-verbose-reporter')`. Don't forget the comma!
```javascript
// ...		
plugins: [
	require('karma-jasmine'),
	require('karma-chrome-launcher'),
	require('karma-remap-istanbul'),
	require('angular-cli/plugins/karma'),
	require('karma-verbose-reporter')
],
// ...
```
Change `reporters: ... 'progress' ...` to `reporters: ... 'verbose' ...`:
```javascript
// ...
reporters: config.angularCli && config.angularCli.codeCoverage
	? ['verbose', 'karma-remap-istanbul']
	: ['verbose'],
port: 9876,
// ...
```
Now you get a detailed output on `ng test`:
```
Suites and tests results:

 - AppComponent :
   * should create the app : ok
   * should have as title 'app works!' : ok
   * should render title in a h1 tag : ok
 - Animal Context :
   * should create a lion when requested. : ok
   * should create a panda when requested. : ok
   * should store created animals. : ok
 - Animal :
   * should be alive when newly created. : ok
   * should have an empty name. : ok
   * should eat preferred food. : ok
   * should have eaten available food. : ok
 - Food Storage :
   * should contain an initial stock of food. : ok
   * should contain chicken. : ok
   * should enlarge the amount of food when ordered. : ok
   * should throw an error no food is ordered. : ok
   * should throw an error if uncontained food is ordered. : ok
 - Lion :
   * should store its name. : ok
   * should contain any compatible food. : ok
   * should be lined (with another animal) if no compatible food is available. : ok
   * should eat other animal when no compatible food is available. : ok
 - Panda :
   * should store its name. : ok

Browser results:

 - Chrome 54.0.2840 (Linux 0.0.0): 20 tests
   - 20 ok
```


## Exercise

[Angular2 Testing Exercise](./Exercise-Angular2.md)


# Angular-CLI

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

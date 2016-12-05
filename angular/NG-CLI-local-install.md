# How to install & use the angular-cli without a system wide installation?


## Whats the problem about a global Angular-CLI installation?

* A person which checks out the project **does not know which CLI-version to install** because the version in the `package.json` is the version created the project. If the global CLI was updated after the creation of the project there is **no information about the currently used version**. This **may cause version conflicts**.
* Different projects may use different versions of the CLI.
* There are breaking changes between versions of the CLI.
* Maybe its not possible to update now all older projects to the newest CLI version -> project needs older version.

**Important**: If you are using the Angular-CLI globally please **update the cli version in the package.json** of every project on every update of the global cli -> have fun ;-).

## Existing project

If you clone an existing project and don't have installed the Angular-CLI system-wide,
npm will install it locally so you can use it locally:
```shell
cd 'ANGULAR-PROJECT'
npm install

# (bash)
$(npm bin)/ng serve
# or (windows standard shell)
node_modules/.bin/ng serve
# or add the script '"ng": "ng"' to the scripts in package.json and use npm run:
npm run ng serve
```

## New project

If you don't want or could install the Angular-CLI globally,
you can use a project-wide CLI to create new projects:

Assumed your project structure will be the following:
```
MyHugeProject
 '- API (your server app)
 '- SPA-ANGULAR (your client app)
 '- Documentation
```

```shell
cd 'MyHugeProject'
npm install angular-cli
```
This will create `MyHugeProject/node_modules/angular-cli`.

To create a new project:

```shell
# (bash)
$(npm bin)/ng new 'SPA-ANGULAR'
# or (windows standard shell)
node_modules/.bin/ng new 'SPA-ANGULAR'
# or (npm script)
npm run ng new 'SPA-ANGULAR'

```
Angular-CLI will call `npm install`. NPM will install the cli locally because there is no global CLI.

If you don't use the project wide CLI to create other projects, you can remove it now:
```shell
rm -rf 'node_modules'
```

Now you are able to use the CLI locally:
```shell
cd 'SPA-ANGULAR'

# (bash)
$(npm bin)/ng serve
# or (windows standard shell)
node_modules/.bin/ng serve
# or (npm script)
npm run ng serve
```

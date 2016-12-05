# How to install & use npm modules without a system wide installation?


## Whats the problem about a global installation?

```shell
# example http-server module
npm install -g http-server
```

* A person which checks out a project **does not know which version of the module to install**
  because there is no version in the `package.json`
  or the version in the `package.json` may not be the same as the global installed version.
  This **may cause version conflicts**.
* Different projects may use different versions of the module.
* There may be breaking changes between versions of the module.
* Maybe its not possible to update now all older projects to the newest version
  -> project needs older version.


## Which npm modules can be used global and which should be installed local?

Utilities used project independent can be installed global. E.g:

* http-server (used to serve a directory by a temporary http server)
* coverters (e.g markdown to pdf)
* ...

```shell
# example http-server module
npm install -g http-server
```

Every **module used in the context of a project** should be **installed locally!** E.g:

* gulp
* typescript compiler
* sass compiler
* bundler like webpack
* libraries like jQuery
* express
* ...

```shell
# /abs/path/to/your/project$

npm init
npm install --save gulp sass express
```


## How to use a local installed module?

Modules are installed inside the `node_modules` directory and linked to `node_modules/.bin`.
To get the path to the bin-directory type
```shell
# /abs/path/to/your/project$

npm bin
# /abs/path/to/your/project/node_modules/.bin
```

There are 3 ways to use local module:


### A) NPM script

If you use npm scripts, npm will look first in the `node_modules/.bin` directory if the requested tool is located there. So you can use npm scripts as shortcut:

`project.json`:
```json
{
	"...": "...",

	"scripts": {
		"gulpy": "gulp"
	},

	"...": "..."
}
```
Now you can use `npm run` to use the local module:
```shell
# /abs/path/to/your/project$
npm run gulpy some-param
```


### B) By absolute or relative path

```shell
# /abs/path/to/your/project$

/abs/path/to/your/project/node_modules/.bin/gulp some-param
# or
./node_modules/.bin/gulp some-param
```

### C) By path substitution (bash)

```shell
# /abs/path/to/your/project$

$(npm bin)/gulp some-param
```
This is a feature of linux and unix shells. If you use a different shell than `bash`, use the substitution syntax of that shell.

If you use windows, use the Powershell and its substitution syntax or use possibility A or B.

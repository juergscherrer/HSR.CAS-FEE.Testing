# HSR.CAS-FEE.Testing
Lern how to test your applications with Jasmine.


## Chapters

### 1 Jasmine Basics

**🗎** [What happens without testing?](./basics/README.md)  
**≔** [TDD exercise](./basics/Exercise-Jasmine.md)

### 2 Testing & Dependencies

**🗎** [Testing components depending on other](./dependencies/README.md)  
**≔** [Test doubles exercise](./dependencies/Exercise-Doubles.md)

### 3 Angular2 Testing

**🗎** [Angular2 testing setup](./angular/README.md)  
**≔** [Angular2 testing exercise](./angular/Exercise-Angular2.md)


## Lisence

| Document | License |
| --- | --- |
| Exercises | <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">CAS-FEE Testing</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="www.ifs.hsr.ch" property="cc:attributionName" rel="cc:attributionURL"> T. Blaser, IFS, HSR Hochschule für Technik, Rapperswil</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. <br />Based on a work at<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/IFS-Web/HSR.CAS-FEE.Testing" rel="dct:source">    https://github.com/IFS-Web/HSR.CAS-FEE.Testing</a>. |
| Code examples | The code examples are licensed under [The MIT License (MIT)](./LICENSE). |


## Compress source

```shell
source="HSR.CAS-FEE.Testing"
name="HSR.CAS-FEE.Testing"
zip -r "$name-Source.zip" "$name" -x *node_modules* -x *~* -x *.idea*

## Compress deployment source

```shell
source="HSR.CAS-FEE.Testing"
name="CAS-FEE-A13-Exercises"
zip -r "$name.zip" "$source" -x *node_modules* -x *~* -x *.idea* -x *.git*
```


## Print as slide

* Remove width on `<div class="container new-discussion-timeline experiment-repo-nav">`
* Mark content (schedule or overview)
* Print settings Firefox: print selection, paper size 339 × 190mm border 0, scaling 70%, print background colors & images, center footer: URL, disable "ignore scaling and fit page width"

# Pokemon Battle

| **Objectives** |
| :---- |
| Build a simple pokemon battle game in Angular |
| Practice using controllers and directives |

Your goal is to build a simple pokemon battle game!

When you're done it should look like this:

![basic layout](screenshots/1.png)

**You should be able to choose two pokemon**:

![pick your fighters](screenshots/2.png)

**You should see who won the match**:

![winner](screenshots/3.png)

###Instructions:

* **Make sure to `bower install`.**
* Our hardcoded pokemon data lives in `mock_data.js`. You do not need to copy/paste this, just use the global variable.
* Can you render all the pokemon names?
* Can you attach an event listener to each name?
* Can you show and hide content based on application state?

###Built in Directives
* Repeating
* Hiding and Showing
* Event Binding

###Avoiding "The Flicker"
* What's the difference between:
    `{{ logic in here }}` and `<some_tag some_attribute="logic in here">`?
* What happens when you load the page and you use this:
    `<img src="/path_to_file_{{ name }}">`
* What if `name` doesn't exist yet? (maybe we're waiting on an api response). What will your browser do?

#### Reading:

* [ng-cloak](https://docs.angularjs.org/api/ng/directive/ngCloak)
* [ng-src](https://docs.angularjs.org/api/ng/directive/ngSrc)
* [ng-click](https://docs.angularjs.org/api/ng/directive/ngClick)

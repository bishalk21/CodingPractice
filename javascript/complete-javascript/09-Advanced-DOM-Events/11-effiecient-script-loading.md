# Efficient Script Loading

In this section, we will learn about efficient script loading.

| regular script | defer script | async script |
| -------------- | ------------ | ------------ |
|                | `defer`      | `async`      |

## Regular Script

```html
<script src="script.js"></script>
```

Process of loading a regular script:

In `head` section;

- The browser encounters a `<script>` tag while parsing the HTML by the HTML parser.
- The browser pauses HTML parsing and starts loading the script.
- The browser executes the script.
- The browser resumes HTML parsing.
- At the end of the parsing, the `DOMContentLoaded` event is fired.
- In this case, the script is executed before the `DOMContentLoaded` event is fired. This is because the script is loaded and executed before the HTML parsing is resumed. This is why the script is called a blocking script. This is not ideal.

In `body` section;

- In this case, the html is already parsed. The script is loaded and executed after the `DOMContentLoaded` event is fired. This is why the script is called a non-blocking script. This is ideal.
- html is parsed
- fetch script
- execute script
- `DOMContentLoaded` event is fired

## The `async` Attribute

The `async` attribute tells the browser to load the script in the background while the page is being parsed. The script will be executed as soon as it is loaded.

```html
<script src="script.js" async></script>
```

In `async` head scripting;

- script is loaded at the same time as the HTML parsing.
- html parsing is paused while the script is being loaded or executed.
- the script is downloaded asynchonously. but it is executed synchronously. So html code has to wait for the script to be executed.

## The `defer` Attribute

The `defer` attribute tells the browser to load the script in the background while the page is being parsed. The script will be executed after the page has been parsed.

```html
<script src="script.js" defer></script>
```

In `defer` head scripting;

- script is loaded asynchonously.
- But the execution of script is deferred until the HTML parsing is finished.
- so loading time is similar to `async` but execution time is similar to regular script and defer the html parsing is never paused.

## The `defer` vs `async` Attributes

The `defer` and `async` attributes are similar in that they both load the script in the background while the page is being parsed. The difference is that the `defer` attribute will wait for the page to be parsed before executing the script, while the `async` attribute will execute the script as soon as it is loaded.

The `defer` vs `async` Attributes have no practical effect while the script is loaded in the `body` section.

## The `defer` vs `async` Attributes in Practice

```html
<script src="script.js" defer></script>
<script src="script2.js" async></script>
```

In the above example, the `script.js` file will be loaded in the background while the page is being parsed. The `script.js` file will be executed after the page has been parsed. The `script2.js` file will be loaded in the background while the page is being parsed. The `script2.js` file will be executed as soon as it is loaded.

# Use Cases

| end of body                                                          | async in head                                                                                                                                                         | defer in head                                                                                              |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| parse-> fetch -> execute -> `DOMContentLoaded`                       | parse -> fetch -> `DOMContentLoaded` -> execute                                                                                                                       | parse -> `DOMContentLoaded` -> fetch -> execute                                                            |
| scripts are fetched and executed after the html is completely parsed | scripts are fetched asynchronously and executed immediatel                                                                                                            | scripts are fetched asynchronously and executed after the html is completely parsed                        |
|                                                                      | Usually the `DOMContentLoaded` event waits for all scripts to be loaded and executed, except for async scripts. So `DOMContentLoaded` doesnot wait for async scripts. | `DOMContentLoaded` fires after all or defer scripts are loaded and executed.                               |
|                                                                      | Scripts are not guaranteed to be executed in the order they appear in the HTML.                                                                                       | Scripts are executed in the order they appear in the HTML.                                                 |
|                                                                      | Use for 3rd party scripts where order of execution does not matter.(google analytics, facebook pixel, etc.)                                                           | Overall the best solution! Use for your own scripts, when order of execution matters.(including a library) |
| parse html -> fetch script -> execute script -> `DOMContentLoaded`   | parse html +++ fetch script -> execute script -> `DOMContentLoaded`                                                                                                   | parse html +++ fetch script -> execute script -> `DOMContentLoaded`                                        |

Only modern browsers support `async` and `defer` attributes. So if you want to support older browsers, you should use the regular script tag.

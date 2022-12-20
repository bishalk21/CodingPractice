# jQuery

jQuery is a JavaScript library that makes it easier to work with HTML documents, handle events, perform animations, and add Ajax interactions to your web pages.

## Getting Started

### Downloading jQuery

You can download jQuery from the [jQuery website](http://jquery.com/download/). The download page provides links to the latest stable version of jQuery, as well as links to the jQuery source code and a compressed, production version of the jQuery library.

### Installing jQuery

You can install jQuery in one of two ways:

1. Download the jQuery library from the [jQuery website](http://jquery.com/download/), and save it in the same directory as your web pages.

2. Use a Content Delivery Network (CDN) to host jQuery. A CDN is a network of servers that are located geographically close to your users. This means that your users will download jQuery from a server that is closest to them, which can improve the speed of your web pages.

The jQuery website provides links to several popular CDNs that host jQuery. You can also use the [jQuery CDN](http://code.jquery.com/) to host jQuery.

### Using jQuery

To use jQuery, you need to include the jQuery library in your web pages. You can do this by adding the following code to the `<head>` section of your web pages:

```html
<script src="jquery-3.3.1.min.js"></script>
```

The `src` attribute specifies the location of the jQuery library. If you saved the jQuery library in the same directory as your web pages, you can use the filename of the jQuery library.

## jQuery Selectors

jQuery selectors allow you to select and manipulate HTML elements.

### Selecting Elements

You can select HTML elements in the following ways:

- By element name

- By id

- By class name

- By CSS selector

- By HTML object

- By jQuery object

#### Selecting Elements By Element Name

You can select elements by their element name. The following example selects all `<p>` elements:

```javascript
$("p");
```

#### Selecting Elements By Id

You can select elements by their id. The following example selects the element with id="intro":

```javascript
$("#intro");
```

#### Selecting Elements By Class Name

You can select elements by their class name. The following example selects all elements with class="intro":

```javascript
$(".intro");
```

#### Selecting Elements By CSS Selector

You can select elements by a CSS selector. The following example selects all `<p>` elements with class="intro":

```javascript
$("p.intro");
```

#### Selecting Elements By HTML Object

You can select elements by passing an HTML object to the jQuery function. The following example selects the `<p>` element with id="intro":

```javascript
$(document.getElementById("intro"));
```

#### Selecting Elements By jQuery Object

You can select elements by passing a jQuery object to the jQuery function. The following example selects the `<p>` element with id="intro":

```javascript
$($("#intro"));
```

### Manipulating HTML Elements

You can manipulate HTML elements in the following ways:

- Get content
- Set content
- Get attributes
- Set attributes
- CSS
- Dimensions
- Traversing
- Manipulation
- Events
- Effects
- Ajax

#### Get Content

You can get the content of HTML elements with the following jQuery methods:

- `text()` - Sets or returns the text content of selected elements
- `html()` - Sets or returns the content of selected elements (including HTML markup)
- `val()` - Sets or returns the value of form fields

The following example uses the `text()` method to get the text content of the `<p>` element with id="demo":

```javascript
$("#demo").text();
```

#### Set Content

You can set the content of HTML elements with the following jQuery methods:

- `text()` - Sets or returns the text content of selected elements
- `html()` - Sets or returns the content of selected elements (including HTML markup)
- `val()` - Sets or returns the value of form fields

The following example uses the `text()` method to set the text content of the `<p>` element with id="demo":

```javascript
$("#demo").text("Hello world!");
```

#### Get Attributes

You can get the value of HTML attributes with the following jQuery methods:

- `attr()` - Sets or returns the value of the specified attribute
- `prop()` - Sets or returns the value of the specified property

The following example uses the `attr()` method to get the value of the `href` attribute of the `<a>` element with id="google":

```javascript
$("#google").attr("href");
```

#### Set Attributes

You can set the value of HTML attributes with the following jQuery methods:

- `attr()` - Sets or returns the value of the specified attribute
- `prop()` - Sets or returns the value of the specified property

The following example uses the `attr()` method to set the value of the `href` attribute of the `<a>` element with id="google":

```javascript
$("#google").attr("href", "https://www.google.com");
```

#### CSS

You can manipulate the CSS of HTML elements with the following jQuery methods:

- `addClass()` - Adds one or more classes to the selected elements
- `removeClass()` - Removes one or more classes from the selected elements
- `css()` - Sets or returns one or more style properties for the selected elements

The following example uses the `addClass()` method to add a class to the `<p>` element with id="demo":

```javascript
$("#demo").addClass("intro");
```

#### Dimensions

You can get the dimensions of HTML elements with the following jQuery methods:

- `width()` - Sets or returns the width of the selected elements
- `innerWidth()` - Sets or returns the inner width of the selected elements (includes padding)
- `outerWidth()` - Sets or returns the outer width of the selected elements (includes padding and border)
- `outerWidth(true)` - Sets or returns the outer width of the selected elements (includes padding, border, and margin)
- `height()` - Sets or returns the height of the selected elements
- `innerHeight()` - Sets or returns the inner height of the selected elements (includes padding)
- `outerHeight()` - Sets or returns the outer height of the selected elements (includes padding and border)

The following example uses the `width()` method to get the width of the `<p>` element with id="demo":

```javascript
$("#demo").width();
```

#### Traversing

You can traverse through HTML elements with the following jQuery methods:

- `parent()` - Returns the direct parent element of the selected element
- `parents()` - Returns all parent elements of the selected element
- `parentsUntil()` - Returns all parent elements of the selected element up to, but not including, the element matched by the selector
- `children()` - Returns all direct child elements of the selected element
- `find()` - Returns all descendant elements of the selected element that matches the selector
- `siblings()` - Returns all sibling elements of the selected element
- `next()` - Returns the next sibling element of the selected element
- `nextAll()` - Returns all next sibling elements of the selected element
- `nextUntil()` - Returns all next sibling elements of the selected element up to, but not including, the element matched by the selector
- `prev()` - Returns the previous sibling element of the selected element
- `prevAll()` - Returns all previous sibling elements of the selected element
- `prevUntil()` - Returns all previous sibling elements of the selected element up to, but not including, the element matched by the selector

The following example uses the `parent()` method to get the parent of the `<p>` element with id="demo":

```javascript
$("#demo").parent();
```

#### Manipulation

You can manipulate HTML elements with the following jQuery methods:

- `append()` - Inserts content at the end of the selected elements
- `appendTo()` - Inserts content at the end of the selected elements
- `prepend()` - Inserts content at the beginning of the selected elements
- `prependTo()` - Inserts content at the beginning of the selected elements
- `after()` - Inserts content after the selected elements
- `insertAfter()` - Inserts content after the selected elements
- `before()` - Inserts content before the selected elements
- `insertBefore()` - Inserts content before the selected elements
- `remove()` - Removes the selected elements and their child elements
- `empty()` - Removes the child elements from the selected elements

The following example uses the `append()` method to insert content at the end of the `<p>` element with id="demo":

```javascript
$("#demo").append("<b>Appended text</b>");
```

#### Events

You can attach event handlers to HTML elements with the following jQuery methods:

- `on()` - Attaches an event handler function for one or more events to the selected elements
- `one()` - Attaches an event handler function for one or more events to the selected elements. The handler is executed at most once per element per event type.
- `off()` - Removes an event handler
- `trigger()` - Executes all handlers and behaviors attached to the selected elements for the specified event type

The following example uses the `on()` method to attach an event handler function for the click event to the `<p>` element with id="demo":

```javascript
$("#demo").on("click", function () {
  alert("Hello world!");
});
```

#### Effects

You can animate HTML elements with the following jQuery methods:

- `show()` - Displays the selected elements
- `hide()` - Hides the selected elements
- `toggle()` - Toggles between the hide() and show() methods
- `fadeIn()` - Fades in the selected elements
- `fadeOut()` - Fades out the selected elements
- `fadeToggle()` - Toggles between the fadeOut() and fadeIn() methods
- `fadeTo()` - Adjusts the opacity of the selected elements
- `slideDown()` - Slides down the selected elements
- `slideUp()` - Slides up the selected elements
- `slideToggle()` - Toggles between the slideUp() and slideDown() methods
- `animate()` - Performs a custom animation of a set of CSS properties

The following example uses the `fadeIn()` method to fade in the `<p>` element with id="demo":

```javascript
$("#demo").fadeIn();
```

#### AJAX

You can load data from the server with the following jQuery methods:

- `load()` - Loads data from the server and puts the returned data into the selected element
- `get()` - Loads data from the server using a HTTP GET request
- `post()` - Loads data from the server using a HTTP POST request

The following example uses the `load()` method to load data from the server and put the returned data into the `<p>` element with id="demo":

```javascript
$("#demo").load("demo_test.txt");
```

#### Utilities

You can use the following jQuery methods to perform various tasks:

- `ready()` - Specifies a function to execute when the DOM is fully loaded
- `each()` - Loops through a collection, and executes a function for each matched element
- `map()` - Loops through a collection, and constructs a new array with the results of calling a function for each matched element
- `get()` - Returns the DOM elements matched by the jQuery object
- `index()` - Returns the index position of the first element within the jQuery object
- `add()` - Adds elements to the jQuery object
- `addBack()` - Adds the previous set of elements on the stack to the current set, optionally filtered by a selector
- `andSelf()` - Adds the previous set of elements on the stack to the current set
- `end()` - End the most recent filtering operation in the current chain and return the set of matched elements to its previous state
- `eq()` - Reduce the set of matched elements to the one at the specified index
- `filter()` - Reduce the set of matched elements to those that match the selector or pass the function's test
- `first()` - Reduce the set of matched elements to the first in the set
- `has()` - Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element
- `is()` - Reduce the set of matched elements to those that match the selector or pass the function's test
- `last()` - Reduce the set of matched elements to the final one in the set
- `not()` - Reduce the set of matched elements to those that do not match the selector or pass the function's test
- `slice()` - Reduce the set of matched elements to a subset specified by a range of indices
- `toArray()` - Retrieve all the DOM elements contained in the jQuery set, as an array
- `get()` - Retrieve the DOM elements matched by the jQuery object
- `size()` - Return the number of elements in the jQuery object
- `add()` - Adds elements to the jQuery object
- `addBack()` - Adds the previous set of elements on the stack to the current set, optionally filtered by a selector
- `andSelf()` - Adds the previous set of elements on the stack to the current set
- `end()` - End the most recent filtering operation in the current chain and return the set of matched elements to its previous state
- `eq()` - Reduce the set of matched elements to the one at the specified index
- `filter()` - Reduce the set of matched elements to those that match the selector or pass the function's test
- `first()` - Reduce the set of matched elements to the first in the set
- `has()` - Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element
- `is()` - Reduce the set of matched elements to those that match the selector or pass the function's test

The following example uses the `each()` method to loop through a collection of `<p>` elements and execute a function for each matched element:

```javascript
$("p").each(function () {
  $(this).css("color", "red");
});
```

## Lesson 3: Working with Browser Events

<a id="lesson3-introduction"></a>

### Introduction

#### Lesson Overview

To recap, we'll be looking at :

- Events - what they are
- Responding to an event - how to listen for an event and respond when one happens
- Event Data - harness the data that is included with an event
- Stopping an event - preventing an event from triggering multiple responses
- Event Lifecycle - the lifecycle stages of an event
- DOM Readiness - events to know when the DOM itself is ready to be interacted with

#### Seeing An Event

There is a hidden world of events going on right now on this very page! It's really hard to actually see into this hidden world, though. So how can we know that events really are being announced? If they are being announced, how come they're not easy for us to see?

Fortunately, the Chrome browser has a special `monitorEvents()` function that will let us see different events as they are occurring.

The monitorEvents function will keep spitting out all of the events that are happening on the targeted element until the end of time...that, or until you refresh the page. Alternatively, the Chrome browser does offer an `unmonitorEvents()` function that will turn off the announcing of events for the targeted element:

```javascript
// start displaying all events on the document object
monitorEvents(document);

// turn off the displaying of all events on the document object.
unmonitorEvents(document);
```

One last little bit of info on `monitorEvents` is that this is for development/testing purposes only. It's not supposed to be used for production code.

### Respond to Events

#### An Event Target

As you can see from the image above, the EventTarget is at the top of the chain. This means that it does not inherit any properties or methods from any other interfaces. However, every other interface inherits from it and therefore contain its properties and methods. This means that each of the following is an "event target";

- the document object
- a paragraph element
- a video element
- etc.

If you take a look at the EventTarget Interface, you'll notice that it doesn't have any properties and only three methods! These methods are:

- `.addEventListener()`
- `.removeEventListener()`
- `.dispatchEvent()`

The one that we'll be looking at for the rest of this course will be the `.addEventListener()` method

#### Adding An Event Listener

```javascript
<event-target>.addEventListener(<type-of-event-to-listen-for>, <function-to-run-when-an-event-happens>);
```

An event listener needs three things:

- an event target - this is called the **target**
- the type of event to listen for - this is called the **type**
- a function to run when the event occurs - this is called the **listener**

The `<event-target>` (i.e. the target) goes right back to what we just looked at: everything on the web is an event target (e.g. the `document` object, a `<p>` element, etc.).

The `<event-to-listen-for>` (i.e. the type) is the event we want to respond to. It could be a click, a double click, the pressing of a key on the keyboard, the scrolling of the mouse wheel, the submitting of a form...the list goes on!

The `<function-to-run-when-an-event-happens>` (i.e. the listener) is a function to run when the event actually occurs.

```javascript
const mainHeading = document.querySelector("h1");

mainHeading.addEventListener("click", function () {
  console.log("The heading was clicked!");
});
```

| event target  | event type           | listener                                                            |
| ------------- | -------------------- | ------------------------------------------------------------------- |
| `mainHeading` | `"click"`            | `function () { console.log("The heading was clicked!"); }`          |
| `document`    | `"scroll"`           | `function () { console.log("The document was scrolled!"); }`        |
| `document`    | `"keydown"`          | `function () { console.log("A key was pressed!"); }`                |
| `document`    | `"submit"`           | `function () { console.log("The form was submitted!"); }`           |
| `document`    | `"DOMContentLoaded"` | `function () { console.log("The DOM is ready!"); }`                 |
| `document`    | `"load"`             | `function () { console.log("The page has loaded!"); }`              |
| `document`    | `"resize"`           | `function () { console.log("The window was resized!"); }`           |
| `document`    | `"mousemove"`        | `function () { console.log("The mouse moved!"); }`                  |
| `document`    | `"mouseenter"`       | `function () { console.log("The mouse entered the window!"); }`     |
| `document`    | `"mouseleave"`       | `function () { console.log("The mouse left the window!"); }`        |
| `document`    | `"focus"`            | `function () { console.log("The window was focused!"); }`           |
| `document`    | `"blur"`             | `function () { console.log("The window was blurred!"); }`           |
| `document`    | `"change"`           | `function () { console.log("The input was changed!"); }`            |
| `document`    | `"input"`            | `function () { console.log("The input was changed!"); }`            |
| `document`    | `"select"`           | `function () { console.log("The input was selected!"); }`           |
| `document`    | `"submit"`           | `function () { console.log("The form was submitted!"); }`           |
| `document`    | `"reset"`            | `function () { console.log("The form was reset!"); }`               |
| `document`    | `"error"`            | `function () { console.log("An error occurred!"); }`                |
| `document`    | `"load"`             | `function () { console.log("The image loaded!"); }`                 |
| `document`    | `"unload"`           | `function () { console.log("The page was unloaded!"); }`            |
| `document`    | `"beforeunload"`     | `function () { console.log("The page is about to be unloaded!"); }` |
| `document`    | `"online"`           | `function () { console.log("The browser is online!"); }`            |
| `document`    | `"offline"`          | `function () { console.log("The browser is offline!"); }`           |
| `document`    | `"copy"`             | `function () { console.log("The document was copied!"); }`          |
| `document`    | `"cut"`              | `function () { console.log("The document was cut!"); }`             |
| `document`    | `"paste"`            | `function () { console.log("The document was pasted!"); }`          |
| `document`    | `"contextmenu"`      | `function () { console.log("The context menu was opened!"); }`      |
| `document`    | `"wheel"`            | `function () { console.log("The mouse wheel was scrolled!"); }`     |
| `document`    | `"animationstart"`   | `function () { console.log("The animation started!"); }`            |

Let's break down the snippet above:

- the target is the first `<h1>` element on the page
- the event type to listen for is a `"click"` event
- the listener is a function that logs `"The heading was clicked!"` to the console

#### Respond to Events Recap

In this section, you learned all about events, the EventTarget Interface, and how to add event listeners. We used the `.addEventListener()` method to attach listeners to:

- the document
- a Node
- an Element

...basically anything that inherits from the EventTarget Interface. We also saw that there are three main parts to an event listener:

- an event target - the target
- the type of event to listen for - the type
- a function to run when the event occurs - the listener

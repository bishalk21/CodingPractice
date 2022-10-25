# LifeCycle DOM Events

| DOM Event          | Description                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DOMContentLoaded` | The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. |
| `load`             | The `load` event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.                                                           |
| `beforeunload`     | The `beforeunload` event is fired when the window, the document and its resources are about to be unloaded.                                                                           |
| `unload`           | The `unload` event is fired when the document is being unloaded.                                                                                                                      |

LifeCycle DOM Events are events that are fired at different stages of the DOM tree. These events are fired at the document, the window, and individual elements.

## Document Events

Document events are fired at the document object. These events are fired at the document object, and they are fired at the window object.

```javascript
// Selecting the element with the class name btn--close-cookie
const btnClose = document.querySelector(".btn--close-cookie");

// Adding an event listener to the btnClose element
btnClose.addEventListener("click", function () {
  // Selecting the element with the class name cookie-message
  const message = document.querySelector(".cookie-message");

  // Removing the cookie-message element from the DOM
  message.remove();
});
```

## Window Events

Window events are fired at the window object. These events are fired at the document object, and they are fired at the window object.

```javascript
// Selecting the element with the class name btn--close-cookie
const btnClose = document.querySelector(".btn--close-cookie");

// Adding an event listener to the btnClose element
btnClose.addEventListener("click", function () {
  // Selecting the element with the class name cookie-message
  const message = document.querySelector(".cookie-message");

  // Removing the cookie-message element from the DOM
  message.remove();
});
```

## Event Propagation

Event propagation is the process of an event bubbling up through the DOM tree. The event starts at the target element and then bubbles up through the parent elements all the way up to the root element.

```javascript
// Selecting the element with the class name btn--close-cookie
const btnClose = document.querySelector(".btn--close-cookie");

// Adding an event listener to the btnClose element
btnClose.addEventListener("click", function () {
  // Selecting the element with the class name cookie-message
  const message = document.querySelector(".cookie-message");

  // Removing the cookie-message element from the DOM
  message.remove();
});
```

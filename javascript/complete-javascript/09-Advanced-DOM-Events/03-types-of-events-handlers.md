# Event Handlers

Event handlers are the functions that are called when an event occurs. There are three types of event handlers:

- Inline event handlers
- Event listeners
- Event delegation

## Inline event handlers

Inline event handlers are the simplest way to add event handlers to elements. They are defined as attributes on the elements. For example, the following code adds an event handler to the `button` element:

```html
<button onclick="alert('Hello World!')">Click Me!</button>
```

The `onclick` attribute is the inline event handler. It is set to the function `alert('Hello World!')`. When the `button` element is clicked, the function `alert('Hello World!')` is called.

| Inline event handlers | description                                                                                                                                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onclick`             | The `onclick` attribute is the inline event handler for the `click` event. It is set to the function `alert('Hello World!')`. When the `button` element is clicked, the function `alert('Hello World!')` is called.                      |
| `onmouseover`         | The `onmouseover` attribute is the inline event handler for the `mouseover` event. It is set to the function `alert('Hello World!')`. When the `button` element is hovered over, the function `alert('Hello World!')` is called.         |
| `onmouseout`          | The `onmouseout` attribute is the inline event handler for the `mouseout` event. It is set to the function `alert('Hello World!')`. When the `button` element is no longer hovered over, the function `alert('Hello World!')` is called. |
| `onkeydown`           | The `onkeydown` attribute is the inline event handler for the `keydown` event. It is set to the function `alert('Hello World!')`. When a key is pressed down, the function `alert('Hello World!')` is called.                            |
| `onkeyup`             | The `onkeyup` attribute is the inline event handler for the `keyup` event. It is set to the function `alert('Hello World!')`. When a key is released, the function `alert('Hello World!')` is called.                                    |
| `onkeypress`          | The `onkeypress` attribute is the inline event handler for the `keypress` event. It is set to the function `alert('Hello World!')`. When a key is pressed, the function `alert('Hello World!')` is called.                               |

## Event listeners

Event listeners are the most common way to add event handlers to elements. They are defined using the `addEventListener` method. For example, the following code adds an event listener to the `button` element:

```javascript
const button = document.querySelector("button");
button.addEventListener("click", function () {
  alert("Hello World!");
});
```

The `addEventListener` method takes two arguments:

- The event type
- The event handler

The event type is the type of event that the event handler should be called for. In the example above, the event type is `click`. The event handler is the function that should be called when the event occurs. In the example above, the event handler is `function () { alert('Hello World!') }`.

When the `button` element is clicked, the function `function () { alert('Hello World!') }` is called.

| Event listeners | description                                                                    |
| --------------- | ------------------------------------------------------------------------------ |
| `click`         | The `click` event is fired when the user clicks on an element.                 |
| `mouseover`     | The `mouseover` event is fired when the user moves the mouse over an element.  |
| `mouseout`      | The `mouseout` event is fired when the user moves the mouse off of an element. |
| `keydown`       | The `keydown` event is fired when the user presses a key down.                 |
| `keyup`         | The `keyup` event is fired when the user releases a key.                       |
| `keypress`      | The `keypress` event is fired when the user presses a key.                     |

## Event delegation

Event delegation is a technique that is used to add event handlers to elements that are not yet on the page. It is used when the elements that the event handlers should be added to are not yet on the page when the page loads. For example, the following code adds an event listener to the `button` element:

```javascript
const button = document.querySelector("button");
button.addEventListener("click", function () {
  alert("Hello World!");
});
```

The `button` element is on the page when the page loads. The event listener is added to the `button` element when the page loads. The event listener is called when the `button` element is clicked.

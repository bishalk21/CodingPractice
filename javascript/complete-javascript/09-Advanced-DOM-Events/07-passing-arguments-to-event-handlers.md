# Passing Arguments to Event Handlers

How do we pass arguments to event handlers?

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
| `mouseout`      | The `mouseout` event is fired when the user moves the mouse out of an element. |
| `keydown`       | The `keydown` event is fired when the user presses a key.                      |
| `keyup`         | The `keyup` event is fired when the user releases a key.                       |

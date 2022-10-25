# Event Propagation: Bubbling and Capturing

Event Propagation means the order in which the event is fired when an event occurs on an element.

Event propagation is the process of how events are propagated through the DOM tree. There are two types of event propagation:

- Bubbling
- Capturing

Process of event propagation:

When someone clicks an element;

- the DOM generates an event object, however the event is not generated on the target element, but on the root element of the DOM tree.
- and the capturing event happens on the way down to the target element (from the root element to the target element).
- as the event reaches the target element, the target phase happens where the event is handled on the target element (the event handler is called).
- event listener waits for certain event to happen on the certain element and as soon as event occurs on that element, it runs the attached callback function.
- then event travels back up the DOM tree (from the target element to the root element) and the bubbling event happens on the way back up. (from the target element to the root element)

Why do we need event propagation?

- if the event also happens in each of the parent elements, as the event bubbles up through parent element, it's says if the event had happened on the parent element, what would you do? and it's called event delegation.
  If we attach same event listener to multiple elements, it's not efficient. So we attach event listener to the parent element and then we use event delegation to handle the event on the child element. We can handle the same event on multiple elements by using event delegation.

## Bubbling

Bubbling is the process of an event bubbling up through the DOM tree. The event starts at the target element and then bubbles up through the parent elements all the way up to the root element.

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

## Capturing

Capturing is the process of an event capturing down through the DOM tree. The event starts at the root element and then captures down through the child elements all the way down to the target element.

```javascript
// Selecting the element with the class name btn--close-cookie
const btnClose = document.querySelector(".btn--close-cookie");

// Adding an event listener to the btnClose element
btnClose.addEventListener(
  "click",
  function () {
    // Selecting the element with the class name cookie-message
    const message = document.querySelector(".cookie-message");

    // Removing the cookie-message element from the DOM
    message.remove();
  },
  true
);
```

## Event Propagation in Practice

```javascript
// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);

  // Stop event propagation
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});
```

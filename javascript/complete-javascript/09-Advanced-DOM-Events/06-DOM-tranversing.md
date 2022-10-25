# DOM Traversing

DOM traversing is the process of moving up and down the DOM tree. There are three ways to traverse the DOM tree:

- Parent
- Child
- Sibling

```javascript
const h1 = document.querySelector("h1");

// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// closest() method returns the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter.
h1.closest(".header").style.background = "var(--gradient-secondary)";

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});
```

## Parent

To select the parent element of the current element, we can use the `parentElement` property.

```javascript
// Selecting the parent element
console.log(document.querySelector(".message").parentElement);
```

## Child

To select the children elements of the current element, we can use the `children` property.

```javascript
// Selecting the children elements
console.log(document.querySelector(".message").children);
```

To select the first child element of the current element, we can use the `firstElementChild` property.

```javascript
// Selecting the first child element
console.log(document.querySelector(".message").firstElementChild);
```

To select the last child element of the current element, we can use the `lastElementChild` property.

```javascript
// Selecting the last child element
console.log(document.querySelector(".message").lastElementChild);
```

## Sibling

To select the previous sibling element of the current element, we can use the `previousElementSibling` property.

```javascript
// Selecting the previous sibling element
console.log(document.querySelector(".message").previousElementSibling);
```

To select the next sibling element of the current element, we can use the `nextElementSibling` property.

```javascript
// Selecting the next sibling element
console.log(document.querySelector(".message").nextElementSibling);
```

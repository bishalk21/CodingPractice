# Selecting, Creating and Deleting Elements

## Selecting Elements

From Very Top of HTML Document

```javascript
// Selecting the entire document
console.log(document.documentElement);
// Selecting the head
console.log(document.head);
// Selecting the body
console.log(document.body);
```

### querySelector and querySelectorAll

`querySelector` is a method that can be used to select a single element from the DOM. It takes a CSS selector as an argument and returns the first element that matches the selector.

`querySelectorAll` is a method that can be used to select multiple elements from the DOM. It takes a CSS selector as an argument and returns a NodeList of all the elements that match the selector.

From the Current Element

```javascript
// Selecting the current element
console.log(document.querySelector(".message")); // returns the first element with the class message

// Selecting all the elements with the class name message
console.log(document.querySelectorAll(".message")); // returns a node list
```

From the Parent Element

```javascript
// Selecting the parent element
console.log(document.querySelector(".message").parentElement);
```

From the Children Elements

```javascript
// Selecting the children elements
console.log(document.querySelector(".message").children);

// Selecting the first child element
console.log(document.querySelector(".message").firstElementChild);

// Selecting the last child element
console.log(document.querySelector(".message").lastElementChild);
```

From the Siblings Elements

```javascript
// Selecting the previous sibling element
console.log(document.querySelector(".message").previousElementSibling);

// Selecting the next sibling element
console.log(document.querySelector(".message").nextElementSibling);
```

### getElementById and getElementsByClassName

`getElementById` is a method that can be used to select a single element from the DOM. It takes an id as an argument and returns the element with the matching id.

`getElementsByClassName` is a method that can be used to select multiple elements from the DOM. It takes a class name as an argument and returns a HTMLCollection of all the elements with the matching class name.

```javascript
// Selecting the element with the id message
console.log(document.getElementById("message"));

// Selecting all the elements with the class name message
console.log(document.getElementsByClassName("message"));
```

### getElementsByTagName

`getElementsByTagName` is a method that can be used to select multiple elements from the DOM. It takes a tag name as an argument and returns a HTMLCollection of all the elements with the matching tag name.

```javascript
// Selecting all the elements with the tag name button
console.log(document.getElementsByTagName("button"));
```

## Creating and Inserting Elements

### createElement

`createElement` is a method that can be used to create a new element in the DOM. It takes a tag name as an argument and returns a new element with the specified tag name.

```javascript
// Creating a new element
const message = document.createElement("div");

// Adding a class to the new element
message.classList.add("cookie-message");

// Adding text to the new element
message.textContent =
  "We use cookies for improved functionality and analytics.";

// Adding HTML to the new element
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";

// Inserting the new element into the DOM
header.prepend(message);

// Inserting the new element into the DOM at the end
header.append(message);

// cloneNode() method can be used to clone an element
header.append(message.cloneNode(true));

// Inserting the new element into the DOM before another element
header.before(message);

// Inserting the new element into the DOM after another element
header.after(message);
```

## Deleting Elements

### remove

`remove` is a method that can be used to remove an element from the DOM.

```javascript
// Removing an element from the DOM
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });
```

### replaceWith

`replaceWith` is a method that can be used to replace an element in the DOM with another element.

```javascript
// Replacing an element in the DOM
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.replaceWith(message.cloneNode(true));
  });
```

## Styles, Attributes and Classes

### Styles

syntax: `element.style.property = value`

```javascript
// Changing the style of an element
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

// Changing the style of an element using CSS variables
message.style.setProperty("--color-primary", "orangered");

// Getting the style of an element
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// Changing the style of an element using CSS variables
document.documentElement.style.setProperty("--color-primary", "orangered");
```

### Attributes

syntax: `element.attribute = value`

```javascript
// Changing the attribute of an element
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

// Non-standard attributes
console.log(logo.designer);

// getAttribute() method can be used to get the value of an attribute
console.log(logo.getAttribute("designer"));

// Changing the attribute of an element using setAttribute
logo.setAttribute("company", "Bankist");

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Changing the attribute of an element using data attributes
// Data attributes are attributes that start with data- and can be used to store custom data private to the page or application.
console.log(logo.dataset.versionNumber);

// Changing the attribute of an element using data attributes
logo.setAttribute("data-version-number", "3.0");
```

### Classes

syntax: `element.classList.add/remove/toggle/contains`

```javascript
// Changing the class of an element
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");

// Don't use
logo.className = "jonas";
```

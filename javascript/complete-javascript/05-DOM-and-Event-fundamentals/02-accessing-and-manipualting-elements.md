### Update Existing Page Content

#### An Element's Inner HTML

Every element inherits properties and methods from the Element Interface (remember this from the previous lesson!). This means that every element has an `.innerHTML` **property**. This property, as it's rightly named, represents the markup of the element's content. We can use this property to:

- get an element's (and all of its descendants!) HTML content
- set an element's HTML content

What does `.innerHTML` return?

- [ ] a DOM element
- [ ] a Node
- [x] a string
- [ ] an array
- [ ] an object

If you look at this in the console, it looks like a string. Technically, however, what it returns is called a `DOMString`.

> 💡 Innie vs Outie 💡
> The `.innerHTML` property sets or returns the HTML content inside the selected element (i.e. between the tags).
>
> There's also the rarely used `.outerHTML` property. `.outerHTML` represents the HTML element itself, as well as its children.

```js
<h1 id="pick-me">
  Greetings To <span>All</span>!
</h1>;

const innerResults = document.querySelector("#pick-me").innerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector("#pick-me").outerHTML;
console.log(outerResults); // logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"
```

#### An Element's Text Content

So `.innerHTML` will get/set an element's HTML content. If we just want the text content, we can use the fantastically named `.textContent` property!

The `.textContent` property will:

- set the text content of an element and all its descendants
- return the text content of an element and all its descendants

We just saw that passing text that contains HTML characters to `.textContent` will not display the content as HTML. Instead, it will still display everything as text - even the HTML characters!

If you'd like to update an element, including its HTML, then you need to use the `.innerHTML` property:

```js
myElement.textContent = "The <strong>Greatest</strong> Ice Cream Flavors"; // doesn't work as expected

myElement.innerHTML = "The <strong>Greatest</strong> Ice Cream Flavors"; // works as expected
```

#### An Element's Text Content - Version 2!

We can't close this section out without looking at the `.innerText` property!

Like the `.textContent` property, the `.innerText` property can be used to get/set an element's text content, but there are some important differences between the two properties.

`.textContent` sets/gets the text content of an element...pretty clear and simple.

`.innerText`, on the other hand, is a little tricker. Let's see this in action and then we'll discuss it!

As you saw, `.innerText` will get the visible text of the element. This is an important distinction! **If CSS is used to hide any text inside that element, `.innerText` will not return that text, while `.textContent` will return it.** And it's not just the hiding/showing nature of CSS that `.innerText` adheres to, `.innerText` will also honor changes to things like capitalization.

The `.textContent` property has been a standard for quite a long time. Conversely, `.innerText` property is a relatively new addition to the HTML specification. It has been around for a while but was not fully supported by all browser because it was not a part of the HTML specification.

Between `.textContent` and `.innerText`, you probably want to use `.textContent` since that will return all of the text no matter what. Rarely will you actually want only the visible text.

#### Update Existing Content Recap

In this section, we looked at multiple ways to change page content:

- `.innerHTML`
- `.textContent`
- `.innerText`

We saw that to set HTML content for an element, out of the three properties list above, we can only use `.innerHTML`. Using `.textContent` will erroneously include the HTML characters as plain text inside the element.

We also looked at the difference between `.textContent` and `.innerText`. **`.textContent` completely ignores any CSS styling** and returns all of the element's HTML just as it's listed in the HTML. On the other hand, the **`.innerText` property will take CSS styling into consideration** and will return the text that is visibly rendered on the page.

### Add New Page Content

You've learned about the document object, the Node Interface, and the Element interface. Where does `.createElement()` come from?

- [x] the `document` object
- [ ] the Node interface
- [ ] the element interface

Which of the following would create a new paragraph element?

- [x] `document.createElement('p')`
- [ ] `element.createElement('p')`
- [ ] `document.createElement('paragraph')`

#### Adding Content To The Page

You may have noticed that using `document.createElement()` to create an element didn't actually add that newly created element anywhere on the page! Creating an element...just creates it. **It doesn't add it to the DOM.** Since the element isn't added to the DOM, it doesn't appear in the page (if you remember, the DOM is the parsed representation of the page). So, now that we can create brand new elements, we need to be able to add them to the DOM so that they'll show up on the page.

We can use the `.appendChild()` method to add an element to the page! Before we see how this element works, let's quickly define the word "append". There are several different definitions of the word, but I like the wording of the Cambridge Dictionary's the best:

> to add something to the end of a piece of writing

Now, to use the `.appendChild()` method, it needs to be called on another element, not the document object!

```js
// create a brand new <span> element
const newSpan = document.createElement("span");

// select the first (main) heading of the page
const mainHeading = document.querySelector("h1");

// add the the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);
```

> ⚠️ `.appendChild()` Needs An Element! ⚠️  
> This is stated above, but I wanted to call this out, specifically. When you're using the `.appendChild()` method, it must be called on an existing element. To be clear, you can't call this on the `document` object, so the following will result in an error:

```js
const newSpan = document.createElement("span");

// causes an error
document.appendChild(newSpan);
```

#### Adding Content To The Page - Version 2!

We can also use the `.insertBefore()` method to add an element to the page. This method is similar to `.appendChild()`, but instead of adding the element to the end of the list of children, it adds it to the beginning of the list of children.

```js
// create a brand new <span> element
const newSpan = document.createElement("span");

// select the first (main) heading of the page
const mainHeading = document.querySelector("h1");

// add the the <span> element as the first child element of the main heading
mainHeading.insertBefore(newSpan, mainHeading.firstChild);
```

#### Adding Content To The Page - Version 3!

We can also use the `.insertAdjacentHTML()` method to add an element to the page. This method is similar to `.appendChild()`, but instead of adding the element to the end of the list of children, it adds it to the beginning of the list of children.

```js
// create a brand new <span> element
const newSpan = document.createElement("span");

// select the first (main) heading of the page
const mainHeading = document.querySelector("h1");

// add the the <span> element as the first child element of the main heading
mainHeading.insertAdjacentHTML("afterbegin", newSpan);
```

#### document.body.append()

We can also use the `.append()` method on the `document.body` element to add an element to the page. This method is similar to `.appendChild()`, but instead of adding the element to the end of the list of children, it adds it to the beginning of the list of children.

```js
// create a brand new <span> element
const newSpan = document.createElement("span");

// add the the <span> element as the first child element of the main heading
document.body.append(newSpan);
```

## Methods to manipulate body and document

| Method                                           | Description                                                   |
| ------------------------------------------------ | ------------------------------------------------------------- |
| `document.body.append(...nodes or strings)`      | Inserts nodes or strings at the end of `document.body`.       |
| `document.body.prepend(...nodes or strings)`     | Inserts nodes or strings at the beginning of `document.body`. |
| `document.body.before(...nodes or strings)`      | Inserts nodes or strings before `document.body`.              |
| `document.body.after(...nodes or strings)`       | Inserts nodes or strings after `document.body`.               |
| `document.body.replaceWith(...nodes or strings)` | Replaces `document.body` with nodes or strings.               |
| `document.body.remove()`                         | Removes `document.body` from the DOM.                         |

## Methods to manipulate elements

| Method                                       | Description                                                                  |
| -------------------------------------------- | ---------------------------------------------------------------------------- |
| `elem.append(...nodes or strings)`           | Inserts nodes or strings at the end of `elem`.                               |
| `elem.prepend(...nodes or strings)`          | Inserts nodes or strings at the beginning of `elem`.                         |
| `elem.before(...nodes or strings)`           | Inserts nodes or strings before `elem`.                                      |
| `elem.after(...nodes or strings)`            | Inserts nodes or strings after `elem`.                                       |
| `elem.replaceWith(...nodes or strings)`      | Replaces `elem` with nodes or strings.                                       |
| `elem.remove()`                              | Removes `elem` from the DOM.                                                 |
| `elem.cloneNode(deep)`                       | Clones the element. If `deep` is `true`, then clones all the descendants too |
| `elem.closest(selector)`                     | Returns the nearest ancestor that matches the selector.                      |
| `elem.matches(selector)`                     | Returns `true` if `elem` matches the selector.                               |
| `elem.insertAdjacentHTML(where, html)`       | Inserts `html` at the given position relative to `elem`.                     |
| `elem.insertAdjacentElement(where, element)` | Inserts `element` at the given position relative to `elem`.                  |
| `elem.insertAdjacentText(where, text)`       | Inserts `text` at the given position relative to `elem`.                     |

## Methods to manipulate attributes

| Method                           | Description                             |
| -------------------------------- | --------------------------------------- |
| `elem.hasAttribute(name)`        | Returns `true` if the attribute exists. |
| `elem.getAttribute(name)`        | Returns the value of the attribute.     |
| `elem.setAttribute(name, value)` | Sets the attribute to the value.        |
| `elem.removeAttribute(name)`     | Removes the attribute.                  |

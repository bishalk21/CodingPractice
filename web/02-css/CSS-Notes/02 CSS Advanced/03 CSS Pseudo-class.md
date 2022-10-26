# CSS Pseudo-Classes

- **Objective:** A CSS pseudo-class selector matches components based on an additional condition and not necessarily defined by the document tree.

### What the Pseudo-class ?

The CSS pseudo-classes allow you to style the dynamic states of an element such as hover, active and focus state, as well as elements that are existing in the document tree but can't be targeted via the use of other selectors without adding any IDs or classes to them, for example, targeting the first or last child elements.

A pseudo-class starts with a colon (:). Its syntax looks like:

```css
selector: pseudo-class {
  property: value;
}
```

---

### Anchor Pseudo-classes

Using anchor pseudo-classes links can be displayed in different ways:

These pseudo-classes let you style unvisited links differently from visited ones. The most common styling technique is to remove underlines from visited links.

`Example`

```css
a:link {
  color: blue;
}
a:visited {
  text-decoration: none;
}
```

Some anchor pseudo-classes are dynamic — they're applied as a result of user interaction with the document like on hover, or on focus etc.

`Example`

```css
a:hover {
  color: red;
}
a:active {
  color: gray;
}
a:focus {
  color: yellow;
}
```

These pseudo-classes change how the links are rendered in response to user actions.

- **`:hover`** applies when a user places cursor over the element, but does not select it.
- **`:active`** applies when the element is activated or clicked.
- **`:focus`** applies when the element has keyboard focus.

> **Note:** To make these pseudo-classes work perfectly, you must define them in the exact order — `:link`, `:visited`, `:hover`, `:active`, `:focus`.

---

### The :first-child Pseudo-class

The :first-child pseudo-class matches an element that is the first child element of some other element.

`Example`

```css
ol li:first-child {
  border-top: none;
}
```

> **Note:** To make `:first-child` to work in Internet Explorer 8 and earlier versions, a <!DOCTYPE> must be declared at the top of document.

---

### The :last-child Pseudo-class

The :last-child pseudo-class matches an element that is the last child element of some other element.

`Example`

```css
ul li:last-child {
  border-right: none;
}
```

> **Note:** The CSS :last-child selector does not work in Internet Explorer 8 and earlier versions. Supports in Internet Explorer 9 and above.

---

### The :nth-child Pseudo-class

The CSS3 introduces a new `:nth-child` pseudo-class that allows you to target one or more specific children of a given parent element. The basic syntax of this selector can be given with `:nth-child(N)`, where `N` is an argument, which can be a number, a keyword (even or odd), or an expression of the form xn+y where x and y are integers (e.g. `1n`, `2n`, `2n+1`, …).

`Example`

```css
table tr:nth-child(2n) td {
  background: #eee;
}
```

The style rules in the example above simply highlight the alternate table row, without adding any IDs or classes to the \<table> elements.

---

### The :lang Pseudo-class

The language pseudo-class :lang allows constructing selectors based on the language setting for specific tags.

`Example`

```css
q:lang(no) {
    quotes: "~" "~";
}
/* HTML code snippet */
<p>Some text <q lang="no">A quote in a paragraph</q> Some text.</p>
```

> **Note:** Internet Explorer up to version 7 does not support the :lang pseudo-class. IE8 supports only if a <!DOCTYPE> is specified.

---

### Pseudo-classes and CSS Classes

Pseudo-classes can be combined with CSS classes.

`Example`

```css
a.red:link {    /* style rule */
    color: #ff0000;
}
<a class="red" href="#">Click me</a>    /* HTML code snippet */
```

---

# pseudo-class functions

| Pseudo-class function | Description                                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `:not()`              | Matches any element that is not matched by the selector inside the parentheses.                                             |
| `:nth-child()`        | Matches an element that is the nth child of its parent.                                                                     |
| `:nth-last-child()`   | Matches an element that is the nth child of its parent, counting from the last child.                                       |
| `:nth-of-type()`      | Matches an element that is the nth sibling of its type in the list of children of its parent.                               |
| `:nth-last-of-type()` | Matches an element that is the nth sibling of its type in the list of children of its parent, counting from the last child. |
| `:first-child`        | Matches an element that is the first child of its parent.                                                                   |
| `:last-child`         | Matches an element that is the last child of its parent.                                                                    |
| `:first-of-type`      | Matches an element that is the first sibling of its type in the list of children of its parent.                             |
| `:last-of-type`       | Matches an element that is the last sibling of its type in the list of children of its parent.                              |
| `:only-child`         | Matches an element that has no siblings.                                                                                    |
| `:only-of-type`       | Matches an element that has no siblings of its type.                                                                        |
| `:empty`              | Matches an element that has no children at all.                                                                             |
| `:root`               | Matches the element that is the root of the document.                                                                       |
| `:target`             | Matches the element that has an ID matching the fragment identifier of the URI of the document.                             |
| `:lang()`             | Matches any element that is in the language indicated by the argument.                                                      |
| `:enabled`            | Matches any enabled element.                                                                                                |
| `:disabled`           | Matches any disabled element.                                                                                               |
| `:checked`            | Matches any checked element.                                                                                                |
| `:indeterminate`      | Matches any indeterminate element.                                                                                          |
| `:default`            | Matches the default element.                                                                                                |
| `:valid`              | Matches any element that is valid.                                                                                          |
| `:invalid`            | Matches any element that is invalid.                                                                                        |
| `:in-range`           | Matches any element that is within the range.                                                                               |
| `:out-of-range`       | Matches any element that is outside the range.                                                                              |
| `:required`           | Matches any element that is required.                                                                                       |
| `:optional`           | Matches any element that is optional.                                                                                       |
| `:read-only`          | Matches any element that is read-only.                                                                                      |
| `:is()`               | Matches any element that matches any of the selectors in the argument.                                                      |
| `:where()`            | Matches any element that matches any of the selectors in the argument.                                                      |

### :where Pseudo-class

The :where pseudo-class is a new CSS selector that matches an element if it matches any of the selectors in its argument list.

`Example`

```css
p:where(.red, .blue) {
  color: red;
}
```

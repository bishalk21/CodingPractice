# CSS Selectors 
- **objective:**  learn how to use CSS selectors for applying style rules to elements.

A CSS selector is a pattern to match the elements on a web page.

CSS selectors are used to "find" (or select) the HTML elements you want to style.

CSS selectors can be divided into five categories:
* **Simple selectors** select elements based on name, id, class 
* **Combination selectors** select elements based on a specific relationship between them.
* **Pseudo-class selectors** select elements based on a certain state.
* **Pseudo-element selectors** select and style a part of an element.
* **Attribute selectors** select elements based on an attribute or attribute value.
---
### CSS element Selectors
An element type selector matches all instance of the element in the document with the corresponding element type name.
``` css
p{
    color: #fff;
}

```
---
### Id Selectors
The id selector is used to define style rules for a single or unique element.

The id selector is defined with a hash sign (`#`) immediately followed by the id value.
```css
#error{
    color: red;
}
```
> **Note:** The value of an id attribute must be unique within a given document — meaning no two elements in your HTML document can share the same id value.
---
### Class Selectors
The class selectors can be used to select any HTML element that has a `class` attribute. All the elements having that class will be formatted according to the defined rule.

The class selector is defined with a period sign (`.`) immediately followed by the class value.
```css
.blue{
    color: grey;
}
```
---
### Descendant Selectors
You can use these selectors when you need to select an element that is the descendant of another element, for example, if you want to target only those anchors that are contained within an unordered list, rather than targeting all anchor elements.
```css
ul.menu li a{
    text-decoration: none;
}
h1 em{
    color: green;
}

```
The style rules inside the selector `ul.menu li a` applied to only those `<a>` elements that contained inside an `<ul>` element having the class `.menu`, and has no effect on other links inside the document.

Similarly, the style rules inside the` h1 em` selector will be applied to only those `<em>` elements that contained inside the `<h1>` element and has not effect on other `<em>` elements.

---
### Child Selectors 
A child selector is used to select only those elements that are the direct children of some element.

A child selector is made up of two or more selectors separated by a greater than symbol (`>`). You can use this selector, for instance, to select the first level of list elements inside a nested list that has more than one level.
```css
ul > li {
    list-style: square;
}
ul > li ol {
    list-style: none;
}
```
The style rule inside the selector ul > li applied to only those `<li>` elements that are direct children of the `<ul>` elements, and has no effect on other list elements.

---
### Adjacent Sibling Selectors
The adjacent sibling selectors can be used to select sibling elements (i.e. elements at the same level). This selector has the syntax like: `E1 + E2`, where E2 is the target of the selector.
```css
h1 + p {
    color: blue;
    font-size: 18px;
}
ul.task + p {
    color: #f0f;
    text-indent: 30px;
}
```
---
### General Sibling Selectors
The general sibling selector is similar to the adjacent sibling selector `(E1 + E2)`, but it is less strict. A general sibling selector is made up of two simple selectors separated by the tilde (`∼`) character. It can be written like:` E1 ∼ E2`, where E2 is the target of the selector.
```css
h1 ∼ p {
    color: blue;
    font-size: 18px;
}
ul.task ∼ p {
    color: #f0f;
    text-indent: 30px;
}
```
---
### Grouping Selectors
Often several selectors in a style sheet share the same style rules declarations. You can group them into a comma-separated list to minimize the code in your style sheet. It also prevents you from repeating the same style rules over and over again.
```css
/* Without Grouping Selectors*/

h1 {
    font-size: 36px;
    font-weight: normal;
}
h2 {
    font-size: 28px;
    font-weight: normal;
}
h3 {
    font-size: 22px;
    font-weight: normal;
}

/* With Grouping Selectors*/
h1, h2, h3 {
    font-weight: normal;
}
h1 {
    font-size: 36px;
}
h2 {
    font-size: 28px;
}
h3 {
    font-size: 22px;
}
```
---
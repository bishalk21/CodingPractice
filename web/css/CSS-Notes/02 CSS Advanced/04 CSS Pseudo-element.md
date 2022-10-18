# CSS Pseudo-elements

- **Objective:** The CSS pseudo-elements is a ways to style elements of the document that weren't explicitly defined by a position in the document tree.

### Pseudo-element 
The CSS pseudo-elements allow you to style the elements or parts of the elements without adding any IDs or classes to them. 

Used mostly to: 

* Style the first letter, or line, of an element.
* Insert content before, or after, the content of an element.

CSS3 introduced a new double-colon (`::`) syntax for pseudo-elements to distinguish between them and pseudo-classes.

```css
selector::pseudo-element { property: value; 
}
```
Most commonly used CSS pseudo-elements

### The ::first-line Pseudo-element
The `::first-line` pseudo-element applies special style to the first line of a text.

`Example`
```css
p::first-line {
    color: #ff0000;
    font-variant: small-caps;
}
```
> **Note:** The `::first-line` pseudo-element can only be applied to block-level elements.

The following properties apply to the `::first-line` pseudo-element.
- font properties
- color properties
- background properties
- word-spacing
- letter-spacing
- text-decoration
- vertical-align
- text-transform
- line-height
- clear

> **Notice the double colon notation** - `::first-line` versus `:first-line`. 
The single-colon syntax was used for both pseudo-classes and pseudo-elements in CSS2 and CSS1.

---
### The ::first-letter Pseudo-element.
The `::first-letter` pseudo-element is used to add a special style to the first letter of the first line of a text. 

`Example`
```css
p::first-letter {
    color: #ff0000;
    font-size: xx-large;
}
```
>**Note:** The `::first-letter` `pseudo-element can only be applied to block-level elements.

The following properties apply to the ::first-letter pseudo- element: 

- font properties
- color properties 
- background properties
- margin properties
- padding properties
- border properties
- text-decoration
- vertical-align (only if "float" is "none")
- text-transform
- line-height
- float
- clear

---
### The ::before and ::after Pseudo-element
The ::before and ::after pseudo-elements can be used to insert generated content either before or after an element's content. The content CSS property is used in conjunction with these pseudo-elements, to insert the generated content.

This is very useful for further decorating an element with rich content that should not be part of the page's actual markup. You can insert regular strings of text or an embedded object such as image and other resources using these pseudo-elements.

`Example`
```css
h1::before {
    content: url("images/marker-left.gif");
}
h1::after {
    content: url("images/marker-right.gif");
}
```
---
### Pseudo-elements and CSS Classes
The general use of these pseudo-elements is to style only a certain paragraph of text or other block-level elements. 

The pseudo-elements can be combined with the CSS classes to produce the effect particularly for the elements having that class.

`Example`
```css
p.article::first-letter {
    color: #00ff00;
    font-size: xx-large;
}
```
---
### The ::selection Pseudo-element
The `::selection` pseudo-element matches the portion of an element that is selected by a user.

The following properties apply to the `::selection` pseudo-element.

- color
- background
- cursor
- outline

`Example`
```css
::selection {
  color: red;
  background: yellow;
}
```
---

### All CSS Pseudo Elements
| Selector                                                               | Example         | Example description                                          |
| ---------------------------------------------------------------------- | --------------- | ------------------------------------------------------------ |
|  |
| [::after](https://www.w3schools.com/cssref/sel_after.asp)              | p::after        | Insert something after the content of each <p> element       |
| [::before](https://www.w3schools.com/cssref/sel_before.asp)            | p::before       | Insert something before the content of each <p> element      |
| [::first-letter](https://www.w3schools.com/cssref/sel_firstletter.asp) | p::first-letter | Selects the first letter of each <p> element                 |
| [::first-line](https://www.w3schools.com/cssref/sel_firstline.asp)     | p::first-line   | Selects the first line of each <p> element                   |
| [::selection](https://www.w3schools.com/cssref/sel_selection.asp)      | p::selection    | Selects the portion of an element that is selected by a user |

---
### All CSS Pseudo Classes
| Selector                                                                          | Example               | Example description                                                                                  |
| --------------------------------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------- |
|  |
| [:active](https://www.w3schools.com/cssref/sel_active.asp)                        | a:active              | Selects the active link                                                                              |
| [:checked](https://www.w3schools.com/cssref/sel_checked.asp)                      | input:checked         | Selects every checked \<input> element                                                                |
| [:disabled](https://www.w3schools.com/cssref/sel_disabled.asp)                    | input:disabled        | Selects every disabled \<input> element                                                               |
| [:empty](https://www.w3schools.com/cssref/sel_empty.asp)                          | p:empty               | Selects every \<p> element that has no children                                                       |
| [:enabled](https://www.w3schools.com/cssref/sel_enabled.asp)                      | input:enabled         | Selects every enabled \<input> element                                                                |
| [:first-child](https://www.w3schools.com/cssref/sel_firstchild.asp)               | p:first-child         | Selects every \<p> elements that is the first child of its parent                                     |
| [:first-of-type](https://www.w3schools.com/cssref/sel_first-of-type.asp)          | p:first-of-type       | Selects every \<p> element that is the first \<p> element of its parent                                |
| [:focus](https://www.w3schools.com/cssref/sel_focus.asp)                          | input:focus           | Selects the \<input> element that has focus                                                           |
| [:hover](https://www.w3schools.com/cssref/sel_hover.asp)                          | a:hover               | Selects links on mouse over                                                                          |
| [:in-range](https://www.w3schools.com/cssref/sel_in-range.asp)                    | input:in-range        | Selects \<input> elements with a value within a specified range                                       |
| [:invalid](https://www.w3schools.com/cssref/sel_invalid.asp)                      | input:invalid         | Selects all \<input> elements with an invalid value                                                   |
| [:lang(_language_)](https://www.w3schools.com/cssref/sel_lang.asp)                | p:lang(it)            | Selects every \<p> element with a lang attribute value starting with "it"                             |
| [:last-child](https://www.w3schools.com/cssref/sel_last-child.asp)                | p:last-child          | Selects every \<p> elements that is the last child of its parent                                      |
| [:last-of-type](https://www.w3schools.com/cssref/sel_last-of-type.asp)            | p:last-of-type        | Selects every \<p> element that is the last \<p> element of its parent                                 |
| [:link](https://www.w3schools.com/cssref/sel_link.asp)                            | a:link                | Selects all unvisited links                                                                          |
| [:not(selector)](https://www.w3schools.com/cssref/sel_not.asp)                    | :not(p)               | Selects every element that is not a \<p> element                                                      |
| [:nth-child(n)](https://www.w3schools.com/cssref/sel_nth-child.asp)               | p:nth-child(2)        | Selects every \<p> element that is the second child of its parent                                     |
| [:nth-last-child(n)](https://www.w3schools.com/cssref/sel_nth-last-child.asp)     | p:nth-last-child(2)   | Selects every \<p> element that is the second child of its parent, counting from the last child       |
| [:nth-last-of-type(n)](https://www.w3schools.com/cssref/sel_nth-last-of-type.asp) | p:nth-last-of-type(2) | Selects every \<p> element that is the second \<p> element of its parent, counting from the last child |
| [:nth-of-type(n)](https://www.w3schools.com/cssref/sel_nth-of-type.asp)           | p:nth-of-type(2)      | Selects every \<p> element that is the second \<p> element of its parent                               |
| [:only-of-type](https://www.w3schools.com/cssref/sel_only-of-type.asp)            | p:only-of-type        | Selects every \<p> element that is the only \<p> element of its parent                                 |
| [:only-child](https://www.w3schools.com/cssref/sel_only-child.asp)                | p:only-child          | Selects every \<p> element that is the only child of its parent                                       |
| [:optional](https://www.w3schools.com/cssref/sel_optional.asp)                    | input:optional        | Selects \<input> elements with no "required" attribute                                                |
| [:out-of-range](https://www.w3schools.com/cssref/sel_out-of-range.asp)            | input:out-of-range    | Selects \<input> elements with a value outside a specified range                                      |
| [:read-only](https://www.w3schools.com/cssref/sel_read-only.asp)                  | input:read-only       | Selects \<input> elements with a "readonly" attribute specified                                       |
| [:read-write](https://www.w3schools.com/cssref/sel_read-write.asp)                | input:read-write      | Selects \<input> elements with no "readonly" attribute                                                |
| [:required](https://www.w3schools.com/cssref/sel_required.asp)                    | input:required        | Selects \<input> elements with a "required" attribute specified                                       |
| [:root](https://www.w3schools.com/cssref/sel_root.asp)                            | root                  | Selects the document's root element                                                                  |
| [:target](https://www.w3schools.com/cssref/sel_target.asp)                        | #news:target          | Selects the current active #news element (clicked on a URL containing that anchor name)              |
| [:valid](https://www.w3schools.com/cssref/sel_valid.asp)                          | input:valid           | Selects all \<input> elements with a valid value                                                      |
| [:visited](https://www.w3schools.com/cssref/sel_visited.asp)                      | a:visited             | Selects all visited links                                                                            |

---
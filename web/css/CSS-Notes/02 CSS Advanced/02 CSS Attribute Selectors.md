# CSS Attribute Selectors

- **Objective:** An attribute selector selects the HTML elements that has a specific attribute or attribute with a specified value.

### Attribute Selectors
The CSS attribute selectors provides an easy and powerful way to apply the styles on HTML elements based on the presence of a particular attribute or attribute value.

### CSS [attribute] Selector
This is the simplest form of an attribute selector that applies the style rules to an element if a given attribute exists.

`Example`
```css
[title] {
    color: blue;
}
```
---
### CSS [attribute="value"] Selector
You can use the `=` operator to make an attribute selector matches any element whose attribute value is exactly equal to the given value:

`Example`
```css
input[type="submit"] {
    border: 1px solid green;
}
```
---
### CSS [attribute~="value"] Selector
You can use the `~=` operator to make an attribute selector matches any element whose attribute value is a list of space-separated values (like `class="alert warning"`) , one of which is exactly equal to the specified value:

`Example`
```css
[class~="warning"] {
    color: #fff;
    background: red;
}
```
This selector matches any HTML element with a `class` attribute that contains space-separated values, one of which is `warning`.

---
### CSS [attribute|="value"] Selector
You can use the `|=` operator to make an attribute selector matches any element whose attribute has a hyphen-separated list of values beginning with the specified value:

`Example`
```css
[lang|=en] {
    color: #fff;
    background: blue;
}
```
The selector in the above example matches all elements that has an `lang` attribute containing a value start with `en`, whether or not that value is followed by a hyphen and more characters. In other words, it matches the elements with `lang` attribute that has the values `en`, `en-US`, `en-GB`, and so on but not `US-en`, `GB-en`.

---
### CSS [attribute^="value"] Selector
You can use the `^=` operator to make an attribute selector matches any element whose attribute value starts with a specified value. It does not have to be a whole word.

`Example`
```css
a[href^="http://"] {
    background: url("external.png") 100% 50% no-repeat;
    padding-right: 15px;
}
```
---
### CSS [attribute$="value"] Selector
Similarly, you can use the `$=` operator to select all elements whose attribute value ends with a specified value. It does not have to be a whole word.

`Example`
```css
a[href$=".pdf"] {
    background: url("pdf.png") 0 50% no-repeat;
    padding-left: 20px;
}
```
---
### CSS [attribute*="value"] Selector
You can use the `*=` operator to make an attribute selector matches all elements whose attribute value contains a specified value.

`Example`
```css
[class*="warning"] {
    color: #fff;
    background: red;
}
```
---
### Styling Forms with Attribute Selectors
The attribute selectors are particularly useful for styling forms without class or id:

`Example`
```css
input[type="text"], input[type="password"] {
    width: 150px;
    display: block;
    margin-bottom: 10px;
    background: yellow;
}
input[type="submit"] {
    padding: 2px 10px;
    border: 1px solid #804040;
    background: #ff8040;
}
```
---